
from django.http import HttpResponse
from django.shortcuts import render
from label.models import Image, Label
from label.forms import LabelForm

# Create your views here.


# start page (initial request)
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def experimentTestsuite(request): 
    data = Image.objects.all().filter(title="Test")
    form = LabelForm()
    context = {
        'data' : data,
        'form' : form
    }

    return render(request, "labeltest.html", context)
