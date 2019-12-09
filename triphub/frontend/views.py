from django.shortcuts import render
from django.contrib.auth.decorators import login_required


def index(request):
    return render(request, 'frontend/index.html')


def location(request, city=None):
    return render(request, 'frontend/index.html')


@login_required(login_url='/loginform')
def profile(request):
    return render(request, 'frontend/index.html')
