from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from users.models import Profile
from django.contrib.postgres.fields import ArrayField


class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, blank=True)
    #title = models.CharField(max_length=128)
    comment = models.TextField()  # 코멘트 다는 칸
    score = ArrayField(models.IntegerField(max_length=5), blank=True)  #배열 만들기 
    image = models.ImageField(upload_to='post/', null=True)
    likes = models.ManyToManyField(User)
    written_date = models.DateTimeField(default=timezone.now)
   