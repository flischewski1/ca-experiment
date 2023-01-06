
# Create your models here.

from django.db import models


label_choices_items = (
    ('Löffel', 'Löffel'),
    ('PET-Flasche','PET-Flasche'), 
    ('Verpackung', 'Verpackung'), 
    ('Beutel', 'Beutel'), 
    ('Deckel','Deckel'), 
    ('Strohhalm','Strohhalm')
)

label_choices_material = ()

label_choices_terrain = (
    ('Gras / Wiese','Gras / Wiese' ),
    ('Asphalt', 'Asphalt'), 
    ('Strand / Sand','Strand / Sand'), 
    ('Öffentliches Verkehrsmittel','Öffentliches Verkehrsmittel')

)


class Image(models.Model):
    # title should be the file name and format 
    ImageID = models.BigIntegerField(primary_key=True)
    photo = models.ImageField(upload_to='pics')
    title = models.CharField(max_length=300)

class ImageLabel(models.Model):
    ImageID = models.ForeignKey(Image,primary_key=True, on_delete=models.CASCADE)
    LabelMaterial = models.CharField(max_length=500, choices=label_choices_material)
    LabelTerrain = models.CharField(max_length=500, choices=label_choices_terrain)
    LabelItemType = models.CharField(max_length=500, choices=label_choices_items)

class Session(models.Model): 
    SessionID = models.BigAutoField(primary_key=True)
    Starttime = models.CharField(max_length=500)
    Endtime =  models.CharField(max_length=500)
    Duration = models.CharField(max_length=500)
    Errors = models.CharField(max_length=500)

class SessionLabel(models.Model): 
    SessionID = models.ForeignKey(Session, on_delete=models.CASCADE)
    ImageID = models.ForeignKey(Image,primary_key=True, on_delete=models.CASCADE)
    LabelMaterial_labeled = models.CharField(max_length=500, choices=label_choices_material)
    LabelTerrain_labeled = models.CharField(max_length=500, choices=label_choices_terrain)
    LabelItemType_labeled = models.CharField(max_length=500, choices=label_choices_items)


