from django.http import HttpResponse, HttpResponseForbidden, JsonResponse
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required
from django.shortcuts import render_to_response
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import LoginSerializer


def index(request, token=None):
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
