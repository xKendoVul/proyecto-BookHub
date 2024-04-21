from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('main/', include('libros.urls')),

    path('main/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('main/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

    path('auth/', include('rest_framework.urls'))
]
