from django.urls import path
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('author_name', views.AuthorViewSet)

urlpatterns = [
    path('users/', views.UsersList.as_view()),
    path('users/<int:pk>', views.UsersDetail.as_view()),
    path('genres/', views.GenreSerializerList.as_view()),
    path('books/', views.BookList.as_view()),
    path('book/<int:pk>', views.BookDetailList.as_view()),
    path('comments/', views.CommentSerializer.as_view()),
]
#urlpatterns = router.urls
