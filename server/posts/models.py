from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from users.models import Profile

# Create your models here.
# 회춘한 채윤
class Post(models.Model):
    # LOCALITY1_CHOICES = [
    #     ('서울', '서울'),
    #     ('경기', '경기'),
    # ]
    # LOCALITY2_CHOICES = [
    #     ('마포', '마포'),
    #     ('강남', '강남'),
    #     ('양평', '양평'),
    #     ('가평', '가평'),
    # ]
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    #profile = models.ForeignKey(Profile, on_delete=models.CASCADE, blank=True)
    title = models.CharField(max_length=128)
    comment = models.TextField()  # 코멘트 다는 칸
    score = models.IntegerField(null=True)
    #image = models.ImageField(upload_to='post/', null=True)
    likes = models.ManyToManyField(User)
    written_date = models.DateTimeField(default=timezone.now)
    # locality1 = models.CharField(max_length=10, choices=LOCALITY1_CHOICES)
    # locality2 = models.CharField(max_length=10, choices=[], blank=True)

    # def __init__(self, *args, **kwargs):
    #     super(Post, self).__init__(*args, **kwargs)
    #     self.fields['locality2'].choices = self.LOCALITY2_CHOICES

    # def save(self, *args, **kwargs):
    #     if self.locality1 == '서울':
    #         self.fields['locality2'].choices = self.LOCALITY2_CHOICES[:2]
    #     elif self.locality1 == '경기':
    #         self.fields['locality2'].choices = self.LOCALITY2_CHOICES[2:]
    #     else:
    #         self.fields['locality2'].choices = ()
    #     super(Post, self).save(*args, **kwargs)
