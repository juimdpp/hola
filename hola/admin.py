from django.contrib import admin
from .models import Profile, SingleMatching, Request, Notice
# Register your models here.

admin.site.register(Profile)
admin.site.register(SingleMatching)
admin.site.register(Request)
admin.site.register(Notice)