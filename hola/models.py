from django.db import models
from django.db.models import Model
from django.contrib.auth.models import User
import datetime
from ckeditor_uploader.fields import RichTextUploadingField


class Notice(models.Model):
    title = models.TextField(blank=True, null=True)
    notice = RichTextUploadingField(blank=True, null=True)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    moviePreference = models.TextField(null=True)
    # requests = models.ManyToManyField(Request, on_delete=models.CASCADE)
    # should add more fields or even a foreign key to another model


class Request(models.Model):
    STATUS = (
        ('pending', 'pending'),
        ('accepted', 'accpeted'),
        ('rejected', 'rejected'),
    )
    user = models.ForeignKey(Profile, related_name='request', on_delete=models.CASCADE)
    requestedTime = models.TextField()
    requestedLevel = models.TextField()
    status = models.CharField(max_length=50, choices=STATUS, default='pending')
    # createdDate = models.DateField(default=)
    createdDate = models.DateField("Date", default=datetime.date.today)

    statusChangeDate = models.DateField(null=True)


class SingleMatching(models.Model):
    user1 = models.ForeignKey(Profile, related_name='me', on_delete=models.CASCADE)
    user2 = models.ForeignKey(Profile, related_name='opponent', on_delete=models.CASCADE)
    referenceRequest = models.ForeignKey(Request, related_name='singleMatching', on_delete=models.CASCADE, null=True)
    zoomURL = models.TextField(null=True)