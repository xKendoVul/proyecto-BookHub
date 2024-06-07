# Generated by Django 5.0.2 on 2024-04-21 05:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('libros', '0007_remove_user_like_like_remove_user_like_user_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='BookItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='libros.book')),
            ],
        ),
    ]