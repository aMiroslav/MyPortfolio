from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'portfolio/index.html')

def about(request):
    return render(request, 'portfolio/about.html')

def certificates(request):
    return render(request, 'portfolio/certificates.html')

def cover_letter(request):
    return render(request, 'portfolio/cover_letter.html')
def projects(request):
    return render(request, 'portfolio/projects.html')