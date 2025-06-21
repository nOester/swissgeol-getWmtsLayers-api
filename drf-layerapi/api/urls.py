from django.urls import path
from .views import health_check, upload_layer_file

urlpatterns = [
    path('health/', health_check, name='health_check'),
    path('upload/', upload_layer_file, name='upload_layer_file'),
]
