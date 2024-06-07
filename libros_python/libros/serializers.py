from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ['id', 'user', 'address']

    def __init__(self, *args, **kwargs):
        super(UserSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ['id', 'user', 'address']

    def __init__(self, *args, **kwargs):
        super(UserDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

#-----------------------------------------------------------------------#

class BookSerializer(serializers.ModelSerializer):
    port = serializers.ImageField(use_url=True)
    class Meta:
        model = models.Book
        fields = ['id','title', 'author', 'genders', 'language', 'publisher', 'date_publishir', 'port']

    def __init__(self, *args, **kwargs):
        super(BookSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class BookDetailSerializer(serializers.ModelSerializer):
    port = serializers.ImageField(use_url=True)
    class Meta:
        model = models.Book
        fields = ['id','title', 'author', 'genders', 'language', 'publisher', 'date_publishir', 'port']

    def __init__(self, *args, **kwargs):
        super(BookDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

#-----------------------------------------------------------------------#

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Author
        fields = ['id', 'author_name']

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Genders
        fields = ['id', 'gender', 'image']

class LanngugeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Language
        fields = ['id', 'language']

class PublisherSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Publisher
        fields = ['id', 'publisher']
        
class CommentSerializer(serializers.ModelSerializer):
    class meta:
        model = models.Comment
        fields = ['id', 'user', 'book', 'comment', 'publich_date']
        
