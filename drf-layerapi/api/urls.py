from django.urls import path
from .views import LayerUploadView, HealthCheck

urlpatterns = [
    path('upload/', LayerUploadView.as_view(), name='layer-upload'),
    path('health/', HealthCheck.as_view(), name='health-check'),
]