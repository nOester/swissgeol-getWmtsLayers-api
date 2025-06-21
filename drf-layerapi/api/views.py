import os
import tempfile

from django.http import FileResponse, HttpResponseBadRequest
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response

from .utils import parse_layer_file  # deine Python-Logik

# Einfacher GET-Healthcheck (z.B. /api/health/)
@api_view(['GET'])
def health_check(request):
    return Response({"status": "ok"})


# POST-Endpoint für Datei-Upload (multipart/form-data)
@api_view(['POST'])
@parser_classes([MultiPartParser])
def upload_layer_file(request):
    # Zugriff auf die hochgeladene Datei aus dem POST-Request
    file = request.FILES.get('file')
    if not file:
        return HttpResponseBadRequest("❌ No file uploaded.")

    # Verwende ein temporäres Verzeichnis für Ein- und Ausgabedateien
    with tempfile.TemporaryDirectory() as tmpdir:
        input_path = os.path.join(tmpdir, "layernamen.txt")
        output_path = os.path.join(tmpdir, "layer_blocks.js")

        # Speichere die hochgeladene Datei temporär ab
        with open(input_path, 'wb') as f:
            for chunk in file.chunks():
                f.write(chunk)

        # 👉 Führe die Verarbeitung durch (z. B. Umwandlung in JS)
        try:
            parse_layer_file(input_path, output_path)
        except Exception as e:
            return HttpResponseBadRequest(f"Fehler beim Verarbeiten: {e}")

        # 📦 Gib die Ergebnisdatei als Download zurück
        return FileResponse(
            open(output_path, 'rb'),
            as_attachment=True,
            filename="layer_blocks.js"
        )
