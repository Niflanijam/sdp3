from django.db import models

# Create your models here.
from django.core.exceptions import ValidationError

def validate_phone_number(value):
    if len(value) != 11:
        raise ValidationError('Phone number must be exactly 11 characters.')


class Doctor(models.Model):
    # This should match your existing table schema
   
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=11,validators=[validate_phone_number])

    class Meta:
        db_table = 'doctor_info2'  # Name of your existing table

    def __str__(self):
        return self.name









