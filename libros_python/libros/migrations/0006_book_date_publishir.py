# Generated by Django 5.0.2 on 2024-03-20 02:51

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('libros', '0005_alter_comment_unique_together_comment_comment_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='date_publishir',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
    ]