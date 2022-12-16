
from label.models import Image, Label
from django.forms import ModelForm

class LabelForm(ModelForm):
    class Meta:
        model = Label
        fields = ['label_choice']