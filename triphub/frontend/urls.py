from django.urls import path
from triphub.frontend import views

urlpatterns = [
    path('', views.index),
    path('login', views.index),
    path('register', views.index),
    path('profile', views.index),
    path('maps', views.index),
    path('TourList', views.index),
    path('FixedMenuLayout', views.index),
    path('aboutus', views.index),
    path('locations/<str:city>', views.location),
    path('plan', views.index),
]
