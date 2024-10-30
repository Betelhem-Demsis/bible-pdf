from django.urls import path
from .views import RegisterView,LoginView,LogoutView, MyProfile

urlpatterns = [
    path('signup/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('profile/', MyProfile.as_view(), name='profile'),
]