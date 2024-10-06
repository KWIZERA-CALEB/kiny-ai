from django.urls import path
from . import views


urlpatterns = [
    path('handle-message/', views.handleUserPrompt),
]