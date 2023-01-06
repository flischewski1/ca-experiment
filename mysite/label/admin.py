from django.contrib import admin
from .models import Image,ImageLabel

class imageAdmin(admin.ModelAdmin):
   list_display = ["ImageID","title", "photo"]

   
class labelAdmin(admin.ModelAdmin):
       list_display = ["ImageID","LabelMaterial", "LabelTerrain","LabelItemType"]

admin.site.register(Image, imageAdmin)
admin.site.register(ImageLabel, labelAdmin)

# Register your models here.
