from django.urls import path
from .views import LayerUploadView, HealthCheck #health_check

urlpatterns = [
    path('upload/', LayerUploadView.as_view(), name='layer-upload'),
    # path('health/', health_check, name='health-check'),  # dein bestehender GET-Endpunkt
    path('health/', HealthCheck.as_view(), name='health-check'),
]


""" from django.urls import path
from .views import health_check, upload_layer_file

urlpatterns = [
    path('health/', health_check, name='health_check'),
    path('upload/', upload_layer_file, name='upload_layer_file'),
]
 """