from django.urls import path
from triphub.frontend import views

urlpatterns = [
    path('', views.index),
    path('loginform', views.index),
    path('registerform', views.index),
    path('profile', views.profile),
]