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
from hola.models import Profile, SingleMatching, Request
from django.forms.models import model_to_dict
from django.db.models import Case, When, Value


def requestMatching(request):
    if request.method == 'POST':
        user = request.user;
        if not user.is_authenticated: # not authenticated --> 401
            return HttpResponse(status=401)
        try:     # bad request --> 400
            req_data = json.loads(request.body.decode())
            level = req_data['level']
            time = req_data['time']
        except (KeyError, JSONDecodeError) as e:
            return HttpResponse(status = 400)
        profile = Profile.objects.get(user=user)
        print(profile)
        req = Request.objects.create(requestedTime=time, requestedLevel=level, user=profile, createdDate=datetime.datetime.now().strftime ("%Y-%m-%d"))
        # print(model_to_dict(req))
        response = model_to_dict(req)
        # print(response)
        return JsonResponse(response, status=200)
    elif request.method == 'GET':
        user = request.user;
        if not user.is_authenticated: # not authenticated --> 401
            return HttpResponse(status=401)
        profile = Profile.objects.get(user=user)  
        print(profile)

        # pk_list = ['pending']
        # preserved = Case(*[When(status=pk, then=pos) for pos, pk in enumerate(pk_list)])
        # objects = Request.objects.filter(user=profile).order_by(preserved).reverse()

        objects = Request.objects.filter(user=profile).order_by(Case( 
                       When ( status="pending", then=Value(0) ),
                       default = Value(1)
                          ), '-createdDate')

        req = [r for r in objects.values()]
        if len(req) == 0:
            return HttpResponse(status=204) # ==> no requests made
        toSend = list([])
        for r in objects:
            temp = model_to_dict(r)
            if r.status == 'accepted':
                single = SingleMatching.objects.get(referenceRequest=r)
                response = model_to_dict(single)
                opponent = model_to_dict(Profile.objects.get(id=response['user2']))
                opponent = model_to_dict(User.objects.get(id=opponent['user']))['username']
                temp['opponent'] = opponent
                temp['zoomURL'] = response['zoomURL']
            toSend.append(temp)
        print(toSend)
        return JsonResponse(toSend, safe=False, status=200)
    else:
        HttpResponseNotAllowed('GET', 'POST')

def testMatching(request, id):
    if request.method == 'DELETE':
        print("Heelo")
        user = request.user;
        if not user.is_authenticated: # not authenticated --> 401
            return HttpResponse(status=401)
        req = Request.objects.filter(id=id)
        if len(req) == 0:
            return HttpResponse(status=404) # no such request
        req[0].delete()
        return HttpResponse(status = 200)
    else:
        HttpResponseNotAllowed('DELETE')

def singleMatching(request, id):
    if request.method == 'GET':
        user = request.user;
        if not user.is_authenticated: # not authenticated --> 401
            return HttpResponse(status=401)
        try:
            refRequest = Request.objects.get(id=id)
            single = SingleMatching.objects.get(referenceRequest=refRequest)
        except:
            return HttpResponse(status=404) # error in matching: no matching has been made
        # print(model_to_dict(refRequest))
        response = model_to_dict(single)
        opponent = model_to_dict(Profile.objects.get(id=response['user2']))
        opponent = model_to_dict(User.objects.get(id=opponent['user']))['username']
        print(opponent)
        response['user2'] = opponent
        print(response)
        return JsonResponse(response, safe=False, status=200)
    else:
        HttpResponseNotAllowed('GET')