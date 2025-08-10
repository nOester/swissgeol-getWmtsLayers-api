Alles klar 👍
Ich kommentiere dir das Skript jetzt **Zeile für Zeile**, damit du genau verstehst, was es macht.
Ich werde jeden Block erklären und dir dazwischen den Zweck in einfachen Worten zusammenfassen.

---

```python
import json
import requests
import xml.etree.ElementTree as ET
```

* **`json`** – Zum Laden und Speichern von JSON-Dateien.
* **`requests`** – Zum Abrufen der WMTS- und WMS-Capabilities-Dateien aus dem Internet.
* **`xml.etree.ElementTree`** – Zum Parsen und Auslesen der XML-Struktur dieser Capabilities.

---

```python
WMTS_URL = "https://wmts.geo.admin.ch/EPSG/2056/1.0.0/WMTSCapabilities.xml"
WMS_URL = "https://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities"
```

* Definiert die URLs zu den beiden **OGC-Service-Beschreibungen**:

  * WMTS (Kacheldienst)
  * WMS (Bilddienst)
* Diese Dokumente enthalten Metadaten zu allen Layern, u. a. auch die **geocatId**.

---

## 1. Geocat-Mapping aus WMTS & WMS aufbauen

```python
def build_geocatid_mapping():
    def parse_capabilities(url, service_name):
        print(f"🔄 Lade {service_name} Capabilities...")
        resp = requests.get(url)
        resp.raise_for_status()
        content = resp.content
```

* `parse_capabilities` ist eine **innere Funktion**, die ein XML-Dokument lädt und parst.
* `resp.raise_for_status()` stoppt das Programm, falls die HTTP-Anfrage fehlschlägt.
* `content` enthält den kompletten XML-Inhalt.

---

### WMTS-Parsen

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

* Definiert **Namespaces** (`ns`), um XML-Tags korrekt zu finden.
* Lädt den XML-String in einen Baum (`root`).
* Sucht alle `<Layer>`-Elemente.
* Legt ein leeres Dictionary `mapping` an.

---

```python
            for layer in layers:
                identifier_elem = layer.find('ows:Identifier', ns)
                if identifier_elem is None:
                    continue
                bod_id = identifier_elem.text
                geocat_id = ""
                metadata = layer.find('ows:Metadata', ns)
                if metadata is not None:
                    href = metadata.attrib.get('{http://www.w3.org/1999/xlink}href')
                    if href and 'metadata/' in href:
                        geocat_id = href.split('metadata/')[-1].split('/')[0]
```

* Iteriert über alle Layer.
* Holt sich die **`layerBodId`** aus `<ows:Identifier>`.
* Sucht `<ows:Metadata>` und extrahiert daraus die **`geocatId`** aus der URL.

---

```python
                if bod_id and geocat_id:
                    mapping[bod_id] = {
                        "geocatId": geocat_id,
                        "source": service_name
                    }
            print(f"✅ {len(mapping)} WMTS Layer mit geocatId")
            return mapping
```

* Speichert nur Einträge, bei denen **beides** existiert: bod\_id und geocat\_id.
* Fügt zusätzlich `"source": "WMTS"` hinzu, um später zu wissen, woher die ID kam.
* Gibt das Mapping zurück.

---

### WMS-Parsen (fast gleich)

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

* Eigener Namespace für WMS.

---

```python
            for layer in layers:
                name_elem = layer.find('wms:Name', ns)
                if name_elem is None:
                    continue
                bod_id = name_elem.text
                geocat_id = ""
                metadata_url = layer.find('wms:MetadataURL', ns)
                if metadata_url is not None:
                    online_resource = metadata_url.find('wms:OnlineResource', ns)
                    if online_resource is not None:
                        href = online_resource.attrib.get('{http://www.w3.org/1999/xlink}href')
                        if href and 'metadata/' in href:
                            geocat_id = href.split('metadata/')[-1].split('/')[0]
```

* Holt `<wms:Name>` als `bod_id`.
* Sucht `<wms:MetadataURL>` → `<wms:OnlineResource>` → `href`.
* Extrahiert geocatId analog zu WMTS.

---

```python
                if bod_id and geocat_id:
                    mapping[bod_id] = {
                        "geocatId": geocat_id,
                        "source": service_name
                    }
            print(f"✅ {len(mapping)} WMS Layer mit geocatId")
            return mapping
```

* Gleiche Speicherung wie bei WMTS.

---

### Beide Maps kombinieren

```python
    wmts_map = parse_capabilities(WMTS_URL, 'WMTS')
    wms_map = parse_capabilities(WMS_URL, 'WMS')

    combined_map = wms_map.copy()
    combined_map.update(wmts_map)  # WMTS überschreibt WMS, wenn vorhanden
    return combined_map
```

* Holt beide Mappings.
* **WMTS hat Priorität**, wenn es denselben bod\_id in beiden gibt.

---

## 2. Slugify

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

* Macht Strings **klein**, entfernt Sonderzeichen und ersetzt sie durch Unterstriche.
* Wird für **Übersetzungs-Keys** verwendet.

---

## 3. JSON → JS Konvertierung

```python
def convert_node_to_js(node, geocat_map, indent=2):
    lines = []
    pad = ' ' * indent
    category = node.get("category", "")
    label = node.get("label", "no_label")
    node_id = node.get("id", None)
    layer_bod_id = node.get("layerBodId", "")
```

* Liest Kategorie, Label, ID und bod\_id aus dem JSON-Knoten.
* `pad` sorgt für Einrückungen.

---

### Topic-Verarbeitung

```python
    if category == "topic":
        if node_id is not None:
            key = f"grp_{str(node_id)}_label"
        else:
            key = f"grp_{slugify(label)}_label"
```

* Übersetzungs-Key basiert **auf der ID**, wenn vorhanden, sonst auf Slug des Labels.

---

```python
        lines.append(f'{pad}// Topic - {label}')
        lines.append(f'{pad}{{')
        lines.append(f'{pad}  label: t(\'{key}\'),')
        lines.append(f'{pad}  children: [')

        for child in node.get("children", []):
            lines += convert_node_to_js(child, geocat_map, indent + 4)
            lines.append(f'{pad}    ,')

        if lines[-1].strip() == ',':
            lines.pop()
        lines.append(f'{pad}  ]')
        lines.append(f'{pad}}}')
```

* Kommentiert den Topic.
* Fügt `label` mit Übersetzung ein.
* Rekursiver Aufruf für alle Kinder.
* Entfernt letztes Komma, wenn vorhanden.

---

### Layer-Verarbeitung

```python
    elif category == "layer":
        info = geocat_map.get(layer_bod_id, {})
        geocat_id = info.get("geocatId", "")
        source = info.get("source", "unknown")

        if not geocat_id:
            print(f"⚠️  Keine geocatId gefunden für Layer: {layer_bod_id}")

        key = f"lyr_{slugify(layer_bod_id if layer_bod_id else label)}_label"
```

* Holt Infos aus `geocat_map`.
* Baut Übersetzungs-Key auf Basis von bod\_id.

---

```python
        lines.append(f'{pad}// Layer - {label} - {source}')
        lines.append(f'{pad}{{')
        lines.append(f'{pad}  type: LayerType.swisstopoWMTS,')
        lines.append(f'{pad}  label: t(\'{key}\'),')
        lines.append(f'{pad}  layer: \'{layer_bod_id}\',')
        lines.append(f'{pad}  maximumLevel: 18,')
        lines.append(f'{pad}  visible: false,')
        lines.append(f'{pad}  displayed: false,')
        lines.append(f'{pad}  opacity: 0.7,')
        lines.append(f'{pad}  queryType: \'geoadmin\',')
        lines.append(f'{pad}  geocatId: \'{geocat_id}\',')
        lines.append(f'{pad}  legend: \'{layer_bod_id}\'')
        lines.append(f'{pad}}}')
```

* Erstellt die Layer-Definition im JS-Format mit allen Metadaten.

---

```python
    return lines
```

* Gibt fertige JS-Zeilen zurück.

---

## 4. Hauptfunktion

```python
def main():
    input_path = "./input/mga_layertree_en.json"
    output_path = "./output/layerTree.js"

    with open(input_path, "r", encoding="utf-8") as f:
        data = json.load(f)
```

* Lädt die Eingabe-JSON-Datei.

---

```python
    geocat_map = build_geocatid_mapping()

    root_children = data["results"]["root"]["children"]

    converted_blocks = [
        "// 🧾 Generated LayerTree Groups"
    ]
```

* Baut das Geocat-Mapping.
* Holt alle direkten Topics.
* Initialisiert Ausgabeliste mit Header-Kommentar.

---

```python
    for idx, topic_node in enumerate(root_children, start=1):
        if topic_node.get("category") != "topic":
            continue

        const_name = f"group_{idx:02d}"
        converted_lines = convert_node_to_js(topic_node, geocat_map, indent=2)
        block = [
            f"const {const_name}: LayerTreeNode = ",
            *converted_lines,
            ""
        ]
        converted_blocks.extend(block)
```

* Geht alle Top-Level-Topics durch.
* Ruft `convert_node_to_js` auf, um den Topic samt Kindern zu konvertieren.
* Packt alles in eine JS-Konstante.

---

```python
    with open(output_path, "w", encoding="utf-8") as f:
        f.write('\n'.join(converted_blocks))

    print(f"✅ JS-Datei erfolgreich erstellt: {output_path}")
```

* Schreibt den kompletten JS-Code in eine Datei.
* Meldet Erfolg.

---

```python
if __name__ == "__main__":
    main()
```

* Startpunkt des Skripts.

---

Wenn du magst, kann ich dir auch noch eine **grafische Ablauf-Übersicht** machen, wie Daten vom JSON über Geocat bis zum fertigen `layerTree.js` fließen – das macht den Prozess sehr klar.
Willst du, dass ich die erstelle?
