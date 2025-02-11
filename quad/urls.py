"""quad URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('survey/', views.protected_index, name='admin'),
    path('survey/<uuid:token>', views.index, name='survey'),
    path('login/', views.login, name='login'),
    path('uploadStimuli/', views.upload_stimuli, name='upload'),
    path('respondents/', views.respondents, name='respondents'),
    path('quads/<uuid:token>', views.get_quads, name='quads'),
    path('surveyResponse/', views.survey_response, name='response'),
    path('exportSurvey/', views.export_responses, name='export'),
    path('admin/', admin.site.urls),
]
