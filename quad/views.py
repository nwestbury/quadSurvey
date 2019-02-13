from django.db import connection
from django.http import HttpResponse, HttpResponseForbidden, JsonResponse, StreamingHttpResponse
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required
from django.http import Http404
from django.shortcuts import render_to_response
from django.views.decorators.http import require_http_methods
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from io import StringIO
import csv
import json
from math import ceil
import uuid

from .serializers import LoginSerializer, StimuliFileSerializer, SurveyResponseSerializer
from .models import Upload, Quad, Rankable, Value


def index(request, token=None):
    if token is not None and not Quad.objects.filter(uuid=token).exists():
        raise Http404

    return render_to_response("index.html")


@login_required(login_url='/')
def protected_index(request):
    return index(request)

@api_view(['POST'])
def login(request):
    serializer = LoginSerializer(data=request.data)
    if not serializer.is_valid():
        return Response({
            'errors': serializer.errors,
            'success': False,
        }, status=status.HTTP_401_UNAUTHORIZED)

    user = serializer.validated_data
    auth_login(request, user)

    return Response({
        'success': True,
    }, status=status.HTTP_200_OK)

@api_view(['POST'])
@login_required(login_url='/')
def upload_stimuli(request):
    serializer = StimuliFileSerializer(data=request.data)
    if not serializer.is_valid():
        return Response({
            'errors': serializer.errors,
            'success': False,
        }, status=status.HTTP_401_UNAUTHORIZED)

    data = serializer.validated_data
    num_stimuli = data['stimuli']

    f = StringIO(data['csv'])
    reader = csv.reader(f, delimiter=',')
    next(reader, None)
    csv_data = []

    for row in reader:
        if len(row) != 6:
            return Response({
                'errors': {'quad': f'Row not of length 6 ({",".join(row)})'},
                'success': False
            })
        csv_data.append(row)

    num_subjects = int(ceil(len(csv_data) / num_stimuli))

    """
    if not num_subjects.is_integer():
        return Response({
            'errors': {'quad': f'Need integer of subjects ({len(csv_data)} rows on {num_stimuli} stimuli)'},
            'success': False
        })
    """

    up = Upload(num_stimuli=data['stimuli'])
    up.save()

    uuids = [uuid.uuid4() for i in range(num_subjects)]
    quads = []

    for i, row in enumerate(csv_data):
        respondent_index = i // num_stimuli
        quad = Quad(upload=up, uuid=uuids[respondent_index], word1=row[0],
                    word2=row[1], word3=row[2], word4=row[3], word5=row[4], word6=row[5])
        quads.append(quad)

    Quad.objects.bulk_create(quads, batch_size=500)

    return Response({
        'success': True,
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
@login_required(login_url='/')
def respondents(request):
    resps = []
    with connection.cursor() as cursor:
        cursor.execute("""
            SELECT DISTINCT qq.uuid, qr.uuid FROM quad_quad qq LEFT JOIN quad_rankable qr ON (qq.id = qr.quad_id)
            WHERE qq.upload_id = (SELECT MAX(upload_id) FROM quad_quad)
            ORDER BY qq.uuid
        """)

        id_ = 1
        for uuid_, respond in cursor.fetchall():
            resps.append({
                'id': id_,
                'uuid': uuid_,
                'responded': respond is not None,
            })
            id_ += 1

    return Response({
        'respondents': resps,
        'success': True,
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_quads(request, token):

    if Rankable.objects.filter(uuid=token).exists():
        return Response({
            'responded': True,
            'success': True,
        }, status=status.HTTP_200_OK)

    quads = Quad.objects.filter(uuid=token).order_by('id')

    resp = []
    for quad in quads:
        resp.append({
            'id': quad.id,
            'word1': quad.word1,
            'word2': quad.word2,
            'word3': quad.word3,
            'word4': quad.word4,
            'word5': quad.word5,
            'word6': quad.word6,
            'responded': False,
        })

    return Response({
        'quads': resp,
        'responded': False,
        'success': True,
    }, status=status.HTTP_200_OK)


@api_view(['POST'])
def survey_response(request):
    serializer = SurveyResponseSerializer(data=request.data)
    if not serializer.is_valid():
        return Response({
            'errors': serializer.errors,
            'success': False,
        }, status=status.HTTP_401_UNAUTHORIZED)

    data = serializer.validated_data

    if Value.objects.filter(uuid=data['uuid']).exists():
        return Response({'success': False}, status=status.HTTP_401_UNAUTHORIZED)

    value = Value(uuid=data['uuid'], gender=data['gender'], age=data['age'],
                  native_languages=json.dumps(data['nativeLanguages']), convo_languages=json.dumps(data['convoLanguages']))
    value.save()

    rankables = []
    for resp in data['responses']:
        quad = Quad.objects.get(id=resp['id'])
        if quad is None or quad.uuid != data['uuid']:
            return Response({'success': False}, status=status.HTTP_401_UNAUTHORIZED)

        words = [quad.word1, quad.word2, quad.word3, quad.word4, quad.word5, quad.word6]
        try:
            words.remove(resp['rank1'])
            words.remove(resp['rank6'])
        except ValueError:
            return Response({'success': False}, status=status.HTTP_401_UNAUTHORIZED)

        rankable = Rankable(quad=quad, uuid=quad.uuid, rank1=resp['rank1'], rank2=words[0],
                            rank3=words[1], rank4=words[2], rank5=words[3], rank6=resp['rank6'])
        rankables.append(rankable)

    Rankable.objects.bulk_create(rankables)

    return Response({
        'success': True,
    }, status=status.HTTP_200_OK)


class Echo(object):
    def write(self, value):
        return value

@require_http_methods(['GET'])
@login_required(login_url='/')
def export_responses(request):
    pseudo_buffer = Echo()
    writer = csv.writer(pseudo_buffer)

    def generator():
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT qq.uuid, qv.age, qv.gender, qv.native_languages, qv.convo_languages,
                       qr.rank1, qr.rank2, qr.rank3, qr.rank4, qr.rank5, qr.rank6
                FROM quad_quad qq JOIN quad_value qv ON (qq.uuid = qv.uuid)
                    JOIN quad_rankable qr ON (qq.id = qr.quad_id)
                WHERE qq.upload_id = (SELECT MAX(upload_id) FROM quad_quad)
                ORDER BY qq.uuid
            """)


            yield writer.writerow(
                ['Subject ID', 'Age', 'Gender', 'Native Language(s)', 'Conversational Language(s)',
                 'Most Round', 'In Between #1', 'In Between #2', 'In Between #3', 'In Between #4', 'Most Spiky']
            )

            for row in cursor.fetchall():
                yield writer.writerow(row)

    response = StreamingHttpResponse(generator(), content_type="text/csv; charset=utf-8")
    response['Content-Disposition'] = 'attachment; filename="responses.csv"'
    return response
