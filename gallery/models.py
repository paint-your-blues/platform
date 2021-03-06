from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse


# Create your models here.
class Gallery(models.Model):
    insta_id = models.CharField(max_length=50)
    profile_pic = models.ImageField(default="default.jpg",
                                    upload_to="profile_pics")
    submission = models.CharField(max_length=1000)
    thumbnail = models.ImageField(default="default.jpg",
                                  upload_to="thumbnails")
    post = models.CharField(max_length=1000, default="#")
    caption = models.TextField()
    entry_id = models.CharField(max_length=15,default="PYBS010000")
    likes = models.IntegerField(default=0)

    def __str__(self):
        return self.insta_id + " /// entry no. " + str(self.entry_id)
