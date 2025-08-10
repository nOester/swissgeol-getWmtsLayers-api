Alles klar — ich erkläre dir das Skript jetzt **Zeile für Zeile** und sage dir dabei nicht nur *was* passiert, sondern auch *warum* es gemacht wird.
Ich gehe Block für Block vor, damit es übersichtlich bleibt.

---

### **Importe und URLs**

```python
import json
import requests
import xml.etree.ElementTree as ET
```

* **`json`**: Zum Einlesen und Schreiben von JSON-Dateien.
* **`requests`**: Zum Abrufen der WMTS- und WMS-Capabilities-Dateien aus dem Internet.
* **`xml.etree.ElementTree`**: Zum Parsen der XML-Struktur der Capabilities-Dateien.

```python
WMTS_URL = "https://wmts.geo.admin.ch/EPSG/2056/1.0.0/WMTSCapabilities.xml"
WMS_URL = "https://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities"
```

* Das sind die offiziellen Service-Endpunkte, die **alle Layer und Metadaten** (inkl. geocatId) liefern.

---

### **Mapping von LayerBodId → geocatId erstellen**

```python
def build_geocatid_mapping():
```

* Hauptfunktion, um **alle Layer aus WMTS und WMS** abzufragen und in ein Dictionary zu packen.

#### **Innere Hilfsfunktion `parse_capabilities`**

```python
    def parse_capabilities(url, service_name):
        print(f"🔄 Lade {service_name} Capabilities...")
        resp = requests.get(url)
        resp.raise_for_status()
        content = resp.content
```

* Ruft die Capabilities-XML vom gegebenen `url` ab.
* `raise_for_status()` sorgt dafür, dass das Skript abbricht, wenn der Server z.B. 404 zurückgibt.

---

#### **WMTS-Parsing**

```python
        if service_name == 'WMTS':
            ns = {
                'wmts': 'http://www.opengis.net/wmts/1.0',
                'ows': 'http://www.opengis.net/ows/1.1',
                'xlink': 'http://www.w3.org/1999/xlink'
            }
            root = ET.fromstring(content)
            layers = root.findall('.//wmts:Layer', ns)
            mapping = {}
```

* **Namespaces (`ns`)**: XML verwendet Namensräume, die hier definiert werden, damit `.find()` funktioniert.
* `root` ist das Wurzelelement der XML.
* `findall('.//wmts:Layer', ns)` sucht **alle Layer-Elemente** in der Datei.

```python
            for layer in layers:
                identifier_elem = layer.find('ows:Identifier', ns)
                if identifier_elem is None:
                    continue
                bod_id = identifier_elem.text
                geocat_id = ""
```

* Für jeden Layer wird die **BodId** (interner Layername, z.B. `ch.swisstopo.swissimage`) extrahiert.

```python
                metadata = layer.find('ows:Metadata', ns)
                if metadata is not None:
                    href = metadata.attrib.get('{http://www.w3.org/1999/xlink}href')
                    if href and 'metadata/' in href:
                        geocat_id = href.split('metadata/')[-1].split('/')[0]
```

* Falls vorhanden, wird der `Metadata`-Link ausgelesen.
* Der Teil nach `metadata/` ist die **geocatId**.

```python
                if bod_id and geocat_id:
                    mapping[bod_id] = {
                        "geocatId": geocat_id,
                        "source": service_name
                    }
```

* Speichert den Layer in `mapping` → Key = `bod_id`, Value = dict mit `geocatId` und Quelle (`WMTS`).

---

#### **WMS-Parsing**

```python
        elif service_name == 'WMS':
            ns = {
                'wms': 'http://www.opengis.net/wms',
                'xlink': 'http://www.w3.org/1999/xlink'
            }
            root = ET.fromstring(content)
            layers = root.findall('.//wms:Layer', ns)
            mapping = {}
```

* Ähnlich wie bei WMTS, aber mit WMS-spezifischen Namespaces.

```python
            for layer in layers:
                name_elem = layer.find('wms:Name', ns)
                if name_elem is None:
                    continue
                bod_id = name_elem.text
                geocat_id = ""
```

* **`<Name>`** im WMS entspricht der `layerBodId`.

```python
                metadata_url = layer.find('wms:MetadataURL', ns)
                if metadata_url is not None:
                    online_resource = metadata_url.find('wms:OnlineResource', ns)
                    if online_resource is not None:
                        href = online_resource.attrib.get('{http://www.w3.org/1999/xlink}href')
                        if href and 'metadata/' in href:
                            geocat_id = href.split('metadata/')[-1].split('/')[0]
```

* Holt die geocatId aus dem `MetadataURL`-Eintrag.

---

#### **Kombinieren**

```python
    wmts_map = parse_capabilities(WMTS_URL, 'WMTS')
    wms_map = parse_capabilities(WMS_URL, 'WMS')

    combined_map = wms_map.copy()
    combined_map.update(wmts_map)
    return combined_map
```

* Holt Daten aus beiden Services.
* **WMTS überschreibt WMS**, falls Layer in beiden vorkommt (WMTS ist aktueller).

---

### **Slugify**

```python
def slugify(text):
    return (
        text.lower()
        .replace("'", "")
        .replace('"', "")
        .replace("&", "and")
        .replace(",", "")
        .replace(".", "_")
        .replace("-", "_")
        .replace(" ", "_")
    )
```

* Macht einen **sauberen Schlüssel** für die Übersetzungen (keine Sonderzeichen, alles klein).

---

### **Konvertierung von JSON-Node → JS**

```python
def convert_node_to_js(node, geocat_map, indent=2):
```

* Wandelt einen JSON-Knoten (`topic` oder `layer`) in JavaScript-Code um.
* `indent` gibt an, wie viele Leerzeichen für Einrückung benutzt werden.

---

#### **Topics**

```python
    if category == "topic":
        if node_id is not None:
            key = f"grp_{str(node_id)}_label"
        else:
            key = f"grp_{slugify(label)}_label"
```

* **Topics**: Key basiert auf `id` (wenn vorhanden), sonst `label`.

---

#### **Layers**

```python
    elif category == "layer":
        info = geocat_map.get(layer_bod_id, {})
        geocat_id = info.get("geocatId", "")
        source = info.get("source", "unknown")
```

* Holt zu `layerBodId` die geocatId und Quelle aus dem Mapping.

```python
        key = f"lyr_{slugify(layer_bod_id if layer_bod_id else label)}_label"
```

* Layer-Übersetzungsschlüssel basiert auf BodId (oder Label, falls nicht vorhanden).

---

### **Hauptfunktion**

```python
def main():
    input_path = "./input/mga_layertree_en.json"
    output_path = "./output/layerTree.js"
```

* Definiert Eingabe- und Ausgabedateien.

```python
    with open(input_path, "r", encoding="utf-8") as f:
        data = json.load(f)
```

* Lädt den Layertree aus einer JSON-Datei.

```python
    geocat_map = build_geocatid_mapping()
```

* Erstellt das Mapping aus WMTS/WMS.

```python
    root_children = data["results"]["root"]["children"]
```

* Holt die obersten Knoten (Topics).

```python
    converted_blocks = [
        "// 🧾 Generated LayerTree Groups"
    ]
```

* Startet den Ausgabetext mit Kommentar.

```python
    for idx, topic_node in enumerate(root_children, start=1):
        if topic_node.get("category") != "topic":
            continue
```

* Nur **echte Topics** verarbeiten.

```python
        const_name = f"group_{idx:02d}"
        converted_lines = convert_node_to_js(topic_node, geocat_map, indent=2)
```

* Ruft die Konvertierung auf und erstellt den Variablennamen (`group_01`, `group_02`, …).

---

### **Speichern**

```python
    with open(output_path, "w", encoding="utf-8") as f:
        f.write('\n'.join(converted_blocks))

    print(f"✅ JS-Datei erfolgreich erstellt: {output_path}")
```

* Schreibt den generierten JS-Code in die Ausgabedatei.

---

Möchtest du, dass ich dir das auch noch **als kommentierte Version im Code** mit allen Erklärungen direkt im Skript\*\* schreibe, damit du es 1:1 im Editor sehen kannst?
Dann hättest du die Erklärung direkt neben jeder Zeile.
