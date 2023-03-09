from django.db import models

# Create your models here.
class Place(models.Model):
    name = models.CharField(max_length=128)
    address = models.CharField(max_length=128)
    start_time = models.TimeField()
    end_time = models.TimeField()
    phonenumber = models.CharField(max_length=128)