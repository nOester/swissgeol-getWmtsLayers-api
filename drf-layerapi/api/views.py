from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework import status
from django.http import FileResponse, HttpResponseBadRequest
import os
import tempfile

from .utils import parse_layer_file

# Health check
class HealthCheck(APIView):
    def get(self, request):
        return Response({"status": "ok!"})

# Upload layernames
class LayerUploadView(APIView):
    parser_classes = [MultiPartParser]  # Erlaubt Datei-Upload via multipart/form-data

    def post(self, request, *args, **kwargs):
        file = request.FILES.get('file')
        if not file:
            return Response({"detail": "❌ No file uploaded."}, status=status.HTTP_400_BAD_REQUEST)
        

        # Fester Ordner
        input_dir = "./input"
        output_dir = "./output"

        input_path = os.path.join(input_dir, "layernamen.txt")
        output_path = os.path.join(output_dir, "layer_blocks.js")

        # Verarbeite die Datei
        try:
            parse_layer_file(input_path, output_path)
        except Exception as e:
            return HttpResponseBadRequest(f"Fehler beim Verarbeiten: {e}")

        # Rückgabe als Download 
        return FileResponse(
            open(output_path, 'rb'),
            as_attachment=True,
            filename="layer_blocks.js"
        ) 
