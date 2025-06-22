from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework import status
from django.http import FileResponse, HttpResponseBadRequest
import os
import tempfile

from .utils import parse_layer_file

from rest_framework.decorators import api_view, parser_classes
# Einfacher GET-Healthcheck (z.B. /api/health/)
""" @api_view(['GET'])
def health_check(request):
    return Response({"status": "ok"}) """


class HealthCheck(APIView):
    def get(self, request):
        return Response({"status": "ok!"})

class LayerUploadView(APIView):
    parser_classes = [MultiPartParser]  # Erlaubt Datei-Upload via multipart/form-data

    def post(self, request, *args, **kwargs):
        file = request.FILES.get('file')
        if not file:
            return Response({"detail": "❌ No file uploaded."}, status=status.HTTP_400_BAD_REQUEST)

        with tempfile.TemporaryDirectory() as tmpdir:
            input_path = os.path.join(tmpdir, "layernamen.txt")
            # output_path = os.path.join(tmpdir, "layer_blocks.js")
            # Speichern im Projektverzeichnis oder einem temp-Ordner außerhalb
            output_path = os.path.join("/tmp", "layer_blocks.js")  # Linux/Mac
            
        
        

            # Datei speichern
            with open(input_path, 'wb') as f:
                for chunk in file.chunks():
                    f.write(chunk)

            # Verarbeite die Datei
            try:
                parse_layer_file(input_path, output_path)
            except Exception as e:
                # return Response({"detail": f"Fehler beim Verarbeiten: {e}"}, status=status.HTTP_400_BAD_REQUEST)
                return HttpResponseBadRequest(f"Fehler beim Verarbeiten: {e}")

            # Rückgabe als Download
            #return FileResponse(open(output_path, 'rb'), as_attachment=True, filename="layer_blocks.js")
                        
            return FileResponse(
                open(output_path, 'rb'),
                as_attachment=True,
                filename="layer_blocks.js"
            ) 
            
"""         
            with open(output_path, 'rb') as out_file:
                return FileResponse(
                    out_file,
                    as_attachment=True,
                    filename="layer_blocks.js"
                ) 
  """





""" import os
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
 """