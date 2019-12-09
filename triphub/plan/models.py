from django.db import models


class Attraction(models.Model):
    name = models.CharField(max_length=30)
    city = models.CharField(max_length=20, default="")
    description = models.CharField(max_length=300)
    time = models.CharField(max_length=30)
    address = models.CharField(max_length=100)
    rating = models.FloatField()
    geo_x = models.FloatField(default=0.0)
    geo_y = models.FloatField(default=0.0)
