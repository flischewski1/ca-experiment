
from django.http import HttpResponse
from django.shortcuts import render
from label.models import Image
from label.forms import LabelForm
import datetime
import string
import random
def id_generator(size=16, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))



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

    return render(request, "labeltest.html", context)
