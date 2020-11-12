from django.db import models

# Create your models here.

class Counter(models.Model):
  number = models.IntegerField(default=2)