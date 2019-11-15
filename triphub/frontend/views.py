from django.shortcuts import render
from django.contrib.auth.decorators import login_required


# Create your views here.
def index(request):
    return render(request, 'frontend/index.html')


@login_required(login_url='/loginform')
def profile(request):
    return render(request, 'frontend/index.html')
