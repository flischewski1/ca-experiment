
from label.models import SessionLabel, Image
from django.forms import ModelForm
from django import forms

class LabelForm(ModelForm):
   class Meta:
        model = SessionLabel
        fields = ['LabelTerrain_labeled', 'LabelItemType_labeled']
        labels = {
        "LabelTerrain_labeled": "Terrain",
        "LabelItemType_labeled":"Gegenstand"
    }
