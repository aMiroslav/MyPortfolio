from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('certificates/', views.certificates, name='certificates'),
    path('cover-letter/', views.cover_letter, name='cover-letter'),
    path('projects/', views.projects, name='projects'),
    path('fields-of-interest/', views.fields_of_interest, name='fields-of-interest'),
]