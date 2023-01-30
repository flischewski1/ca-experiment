
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
    "1111":20
}

# start page (initial request)
def index(request):
    response = render(request, "index.html")
    if request.COOKIES.get('session') == None: 
        response.set_cookie('session', id_generator())
    #response.cookies.get('session',id_generator())
    
    return response

def experimentTestsuite(request): 

    
    if request.method == "POST": 
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


def standardLogic(n, request):
    
    data = Image.objects.all()[0:5]
    form = LabelForm()
    context = {
        'data' : data,
        'form' : form
    }
    
    if request.method == "POST": 
        try:
            progress = request.COOKIES.get("ExperimentCounter")
            if(progress == "11111"): 
                return render(request, "end.html")
            i = progress_dict[progress]
            m = i + 5
            data = Image.objects.all()[i:m]
            form = LabelForm()
            context = {
            'data' : data,
            'form' : form
            }
            
            return render(request, f"group{n}.html", context)
        except:
            return render(request,f"group{n}.html", context)
            
        

    

def tutorial(request,n):
    data = Image.objects.all()[25:26]
    form = LabelForm()
    context = {
        'data' : data,
        'form' : form
    }
    return render(request, f"group{n}Tutorial.html", context)


# tutorial endpoint

def tutorial1(request):
    return tutorial(request,1)

def tutorial2(request):
    return tutorial(request,2)

def tutorial3(request):
    return tutorial(request,3)

def tutorial4(request):
    return tutorial(request,4)


 # task endpoint
   
def group1(request): 
   return standardLogic(1,request)


def group2(request): 
    return standardLogic(2,request)

def group3(request): 
    return standardLogic(3,request)

def group4(request): 
    return standardLogic(4,request)

def gdpr(request): 
    return render(request,"gdpr.html")