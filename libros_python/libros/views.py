from django.shortcuts import render
from rest_framework import generics, permissions, pagination, viewsets
from . import serializers, models

class UsersList(generics.ListAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer

class UsersDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserDetailSerializer

class BookList(generics.ListCreateAPIView):
    queryset = models.Book.objects.all()
    serializer_class = serializers.BookSerializer

    pagination_class = pagination.PageNumberPagination

class BookDetailList(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Book.objects.all()
    serializer_class = serializers.BookDetailSerializer

class AuthorSerializerList(generics.ListAPIView):
    queryset = models.Author.objects.all()
    serializer_class = serializers.AuthorSerializer

class AuthorViewSet(viewsets.ModelViewSet): 
    queryset = models.Author.objects.all()
    serializer_class = serializers.AuthorSerializer
    
class  GenreSerializerList(generics.ListCreateAPIView):
    queryset = models.Genders.objects.all()
    serializer_class = serializers.GenreSerializer

class LanngugeSerializerList(generics.ListAPIView):
    queryset = models.Language.objects.all()
    serializer_class = serializers.LanngugeSerializer

class PublisherSerializerList(generics.ListAPIView):
    queryset = models.Publisher.objects.all
    serializer_class = serializers.PublisherSerializer

class CommentSerializer(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Comment.objects.all
    serializer_class = serializers.CommentSerializer




