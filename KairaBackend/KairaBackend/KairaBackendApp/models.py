from django.db import models

# Create your models here.
class CreateUsers(models.Model):
    fullname = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.email