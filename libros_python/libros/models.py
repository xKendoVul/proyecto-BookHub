from datetime import datetime
from django.db import models
from django.contrib.auth.models import User

class Author(models.Model):
    author_name = models.CharField(max_length=100)
    pic = models.ImageField(upload_to='author_images/', null=True, blank=True)

    def __str__(self):
         return self.author_name
    
#-----------------------------------------------------------------------#

class Genders(models.Model):
    gender = models.CharField(max_length=100)
    image = models.ImageField(upload_to='genres_images/', null=True, blank=True)

    def __str__(self):
        return self.gender

#-----------------------------------------------------------------------#

class Language(models.Model):
    language = models.CharField(max_length=100)

    def __str__(self):
        return self.language

#-----------------------------------------------------------------------#

class Publisher(models.Model):
    publisher = models.CharField(max_length=100)

    def __str__(self):
        return self.publisher
 
#-----------------------------------------------------------------------#

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.ManyToManyField(Author)
    genders = models.ManyToManyField(Genders)
    language = models.ManyToManyField(Language)
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE)
    date_publishir = models.DateField(blank=True)
    port = models.ImageField(upload_to='book_images/', null=True, blank=True)

    def __str__(self):
        return self.title

#-----------------------------------------------------------------------#

class User(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.TextField(null=True)
    liked_books = models.ManyToManyField(Book)
    favorite_genres = models.ManyToManyField(Genders)

    def __str__(self):
         return self.user.username

#-----------------------------------------------------------------------#

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    comment = models.TextField(blank=True)
    publich_date = models.DateTimeField(auto_now_add=True)

#-----------------------------------------------------------------------#