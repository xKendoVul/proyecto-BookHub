from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.User)
admin.site.register(models.Book)
admin.site.register(models.Author)
admin.site.register(models.Genders)
admin.site.register(models.Language)
admin.site.register(models.Publisher)
admin.site.register(models.Comment)