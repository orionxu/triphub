from .api import UserRegistrationAPI
from django.urls import path

urlpatterns = [
    path(r"^api/auth/register/$", UserRegistrationAPI.as_view()),
]