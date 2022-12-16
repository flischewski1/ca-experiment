from . import views
from django.urls import include, path


urlpatterns = [
    path('', views.index, name='index'),
    path('experimentTestsuite/', views.experimentTestsuite, name='experimentTestsuite')  
]