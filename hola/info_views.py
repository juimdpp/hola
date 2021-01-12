from django.http import HttpResponse, HttpResponseNotAllowed, JsonResponse
from django.contrib.auth.models import User
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.csrf import csrf_exempt
from django.contrib import auth
import json
from json import JSONDecodeError
import datetime
import base64
from django.core.files.base import ContentFile
from hola.models import Profile, SingleMatching, Request, Notice
from django.forms.models import model_to_dict
from django.db.models import Case, When, Value

notices = [
  ""
]

def notices(request):
    if request.method == 'GET':
        notices = [notice for notice in Notice.objects.all()]
        print(notices)
        response = []
        for notice in notices:
          print(notice)
          response.append(model_to_dict(notice))
        print(response)
        
        return JsonResponse(response, safe=False, status = 200)
    else:
        HttpResponseNotAllowed('GET')