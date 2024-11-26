
from .views import home
from .views import search_doctors
from django.urls import path
from .views import doctor_list

from . import views

urlpatterns = [
    path('', home, name='home'), 
    path('search/',search_doctors, name='search_doctors'),
    path('doctors/', doctor_list, name='doctor_list'),
    path('kidney_needer/', views.kidney_needer, name='kidney_needer'),
   
]






