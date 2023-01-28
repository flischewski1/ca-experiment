from . import views
from django.urls import include, path


urlpatterns = [
    path('', views.index, name='index'),
    path('experimentTestsuite/', views.experimentTestsuite, name='experimentTestsuite'),
    path('1/', views.group1, name='group1'),
    path('2/', views.group2, name='group2') ,
    path('3/', views.group3, name='group3')  ,
    path('4/', views.group4, name='group4') ,
    path('guide1/', views.tutorial1, name='tutorial1'),
    path('guide2/', views.tutorial2, name='tutorial2') ,
    path('guide3/', views.tutorial3, name='tutorial3')  ,
    path('guide4/', views.tutorial4, name='tutorial4'),
    path('gdpr/', views.gdpr, name='gdpr')   
]