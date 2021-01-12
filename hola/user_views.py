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
from hola.models import Profile, SingleMatching
from django.forms.models import model_to_dict


@csrf_exempt
def signup(request):
    if request.method == 'POST':
        try:
            req_data = json.loads(request.body.decode())
            username = req_data['username']
            password = req_data['password']
            email = req_data['email']
            name = req_data['name']
        except:
            return HttpResponse(status=403)
        # check if user is already used.
        user = User.objects.filter(username=username).exists()
        print("!!!!!!!!")
        print(user)
        print("$$$$$$$$$$$$")
        if user is True:
            return HttpResponse(status=401) 
        user = User.objects.create_user(username = username, password = password, email=email)
        user.save()
        moviePreference='horror'
        profile = Profile(user=user, moviePreference=moviePreference)
        profile.save()
        return HttpResponse(status=201)
    else:
        return HttpResponseNotAllowed(['POST'])

@csrf_exempt
def signin(request):
    if request.method == 'POST':
        print("login")
        req_data = json.loads(request.body.decode())
        username = req_data['username']
        password = req_data['password']
        print(req_data)
        user = auth.authenticate(request, username = username, password = password)
        if user is not None and user.is_active:
            auth.login(request, user)
            print("logged in")
            response = {'logged_in': True}
            print(response)
            return JsonResponse(response, status=204)
        else:
            print("not working")
            response = {'logged_in': False}
            print(response)
            return JsonResponse(response, status=401)
    else:
        return HttpResponseNotAllowed(['POST'])


@csrf_exempt
def logout(request):
    if request.method == 'GET':
        auth.logout(request)
        return HttpResponse(status=204)
    else:
        return HttpResponseNotAllowed(['GET'])


def currentUser(request):
    if request.method == 'GET':
        print("currentUser")
        response = request.user
        print(response)
        # if type(response) not 'AnonymousUser':
            # print(response)
        if (not response.id):
            response.id = 0
        response = {
            'id': response.id,
            'username': response.username
        }
        print(response)
        return JsonResponse(response, safe=False, status=200)
    else:
        return HttpResponseNotAllowed(['POST', 'PUT', 'DELETE'])
