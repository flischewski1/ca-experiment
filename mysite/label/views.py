
from django.http import HttpResponse
from django.shortcuts import render
from label.models import Image
from label.forms import LabelForm
import datetime
import string
import random
def id_generator(size=16, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


progress_dict = {
    "1":5,
    "11":10,
    "111":15,
    "1111":20,
    "11111":25
}

# start page (initial request)
def index(request):
    response = render(request, "index.html")
    if request.COOKIES.get('session') == None: 
        response.set_cookie('session', id_generator())
    #response.cookies.get('session',id_generator())
    
    return response

def experimentTestsuite(request): 
    data = Image.objects.all()[0:5]
    form = LabelForm()
    context = {
        'data' : data,
        'form' : form
    }
    
    if request.method == "POST": 
        print(request.POST)
        progress = request.COOKIES.get("ExperimentCounter")
        n = progress_dict[progress]
        m = n + 5
        data = Image.objects.all()[n:m]
        form = LabelForm()
        context = {
        'data' : data,
        'form' : form
        }
        return render(request, "labeltest.html", context)

    return render(request, "labeltest.html", context)

def standarfLogic(n, request):
    
    data = Image.objects.all()[0:5]
    form = LabelForm()
    context = {
        'data' : data,
        'form' : form
    }
    
    if request.method == "POST": 
        print(request.POST)
        progress = request.COOKIES.get("ExperimentCounter")
        n = progress_dict[progress]
        m = n + 5
        data = Image.objects.all()[n:m]
        form = LabelForm()
        context = {
        'data' : data,
        'form' : form
        }
        return render(request, f"group{n}.html", context)

    return render(request,f"group{n}.html", context)

    
def group1(request): 
   return standarfLogic(1,request)


def group2(request): 
    return standarfLogic(2,request)

def group3(request): 
    return standarfLogic(3,request)

def group4(request): 
    return standarfLogic(4,request)