from django.db import models

# Create your models here.

from django.db import models

label_choices = (
    ('bottle', 'BOTTLE'),
    ('bag','BAG')
)


class Image(models.Model):
    # title should be the file name and format 
    title = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='pics')


#Include Session ID and name of the image
class Label(models.Model):
      label_choice = models.CharField(max_length=6, choices=label_choices)
      image = models.ForeignKey(Image, on_delete=models.CASCADE)