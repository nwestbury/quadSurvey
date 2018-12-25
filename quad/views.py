from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.shortcuts import render_to_response


@login_required
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def login(request):
    return render_to_response("registration/login.html")