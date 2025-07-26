Sehr gerne! Hier ist dein **vollständig kommentiertes Python-Skript**, in dem **jede einzelne Zeile oder Block** erklärt wird – ideal, um die Funktionsweise genau zu verstehen:

---

```python
import re
import requests
import json
import os
```

🔹 **Importe:**

* `re`: Reguläre Ausdrücke für Textsuche
* `requests`: Zum Abrufen von HTTP-Daten (API-Aufrufe)
* `json`: Zum Schreiben der Übersetzungen in JSON-Dateien
* `os`: Für Dateisystemoperationen (z. B. Ordner erstellen)

---

```python
def extract_layer_and_label_keys(js_path):
    """Extrahiert Paare: (layer_id, label_key) aus einer TS-Datei."""
    with open(js_path, 'r', encoding='utf-8') as f:
        content = f.read()
```

🔹 **Diese Funktion liest deine `.ts`-Datei ein**, in der Layer und Label-Schlüssel stehen (z. B. `label: t('lyr_...')` und `layer: 'ch....'`).

---

```python
    # Finde alle Objekte mit label: t('...'), layer: 'ch....'
    pattern = re.compile(
        r"label\s*:\s*t\('([^']+)'\).*?layer\s*:\s*'([^']+)'", re.DOTALL
    )
```

🔹 **Regulärer Ausdruck**, der zwei Dinge sucht:

* `label: t('...')` → extrahiert den "Label-Key"
* `layer: 'ch....'` → extrahiert die tatsächliche Layer-ID
  ⚠️ `re.DOTALL`: erlaubt, dass auch Zeilenumbrüche zwischen `label:` und `layer:` erkannt werden.

---

```python
    matches = pattern.findall(content)
    return {layer_id: label_key for label_key, layer_id in matches}
```

🔹 Gibt ein **Dictionary** zurück:
`layer_id → label_key`, z. B.:

```python
{
  'ch.swisstopo.geologie-tektonische_karte': 'lyr_swisstopo_tektonik_label',
}
```

---

```python
def flatten_layers(node):
    results = {}
```

🔹 Diese Funktion macht eine **rekursive Tiefensuche**, um aus der verschachtelten Katalogstruktur alle Layer mit `layerBodId` und `label` herauszuziehen.

---

```python
    if isinstance(node, dict):
        if node.get("category") == "layer" and "layerBodId" in node and "label" in node:
            results[node["layerBodId"]] = node["label"]
```

🔹 Wenn das aktuelle Objekt ein Layer ist (`category == "layer"`), speichere es im Ergebnis:
`layerBodId → label`

---

```python
        for value in node.values():
            results.update(flatten_layers(value))
```

🔹 Gehe rekursiv in alle **Werte** des Dictionaries, um auch untergeordnete Nodes zu prüfen.

---

```python
    elif isinstance(node, list):
        for item in node:
            results.update(flatten_layers(item))
```

🔹 Wenn das aktuelle Objekt eine Liste ist (z. B. `children`), gehe rekursiv durch jedes Listenelement.

---

```python
    return results
```

🔹 Gibt das aufgesammelte Dictionary zurück, z. B.:

```python
{
  "ch.swisstopo.geologie-tektonische_karte": "Tektonik 500",
  ...
}
```

---

```python
def fetch_catalog_labels(lang="de"):
    url = f"https://example.com/CatalogServer?lang={lang}"  # <— URL anpassen
    response = requests.get(url)
    response.raise_for_status()
```

🔹 Ruft den **Katalog** für die gegebene Sprache vom Server ab.
❗ `raise_for_status()` wirft eine Exception bei HTTP-Fehlern (404, 500...).

---

```python
    catalog_data = response.json()
    root = catalog_data.get("results", {}).get("root", {})
    return flatten_layers(root)
```

🔹 Extrahiert das **Root-Element** der Katalogstruktur und ruft `flatten_layers()` auf, um alle Layer zu sammeln.

---

```python
def generate_translations(js_file_path, languages, output_dir):
```

🔹 Hauptfunktion, um für mehrere Sprachen die Übersetzungsdateien zu bauen.

---

```python
    # 1. Mapping: layer_id → label_key aus TS-Datei
    layer_to_key = extract_layer_and_label_keys(js_file_path)
    print(f"✅ Gefundene Layer/Label-Paare: {len(layer_to_key)}")
```

🔹 Extrahiert alle relevanten Layer-IDs und Label-Keys aus deiner TypeScript-Datei.

---

```python
    # 2. Ordner vorbereiten
    os.makedirs(output_dir, exist_ok=True)
```

🔹 Erstellt (falls nötig) den Zielordner für die JSON-Dateien.

---

```python
    # 3. Pro Sprache
    for lang in languages:
        print(f"\n🌍 Sprache: {lang}")
```

🔹 Geht durch alle gewünschten Sprachen (z. B. `de`, `fr`, `it`, `en`)

---

```python
        catalog_labels = fetch_catalog_labels(lang)
        print(f"   → Layer im Katalog: {len(catalog_labels)}")
```

🔹 Holt alle `layerBodId → label`-Einträge für die aktuelle Sprache.

---

```python
        # 4. Füge label_key: label zusammen
        translations = {
            label_key: catalog_labels[layer_id]
            for layer_id, label_key in layer_to_key.items()
            if layer_id in catalog_labels
        }
```

🔹 Erzeugt ein neues Dictionary:
`label_key → übersetzter Label-Text`
⚠️ Nur wenn der Layer in beiden Quellen vorkommt.

---

```python
        print(f"   → Übersetzungen erstellt: {len(translations)}")
```

🔹 Gibt aus, wie viele Übersetzungen erzeugt wurden.

---

```python
        # 5. Datei speichern
        output_file = os.path.join(output_dir, f"layer_translations_{lang}.json")
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(translations, f, indent=2, ensure_ascii=False)
```

🔹 Speichert die fertige Sprachdatei im Zielordner als schön formatiertes JSON (`indent=2`, `UTF-8`).

---

```python
        print(f"   ✅ Gespeichert: {output_file}")
```

🔹 Erfolgsmeldung für jede Sprache.

---

```python
if __name__ == "__main__":
```

🔹 Dieser Block wird **nur ausgeführt, wenn du die Datei direkt startest** (nicht beim Import).

---

```python
    js_file = "/Users/oeni/Documents/.../layertree.ts"
    output_directory = "translations_output"
    langs = ["de", "fr", "it", "en"]
```

🔹 Legt Pfade und Zielsprachen fest.

---

```python
    generate_translations(js_file, langs, output_directory)
```

🔹 Führt den Übersetzungsvorgang für alle Sprachen aus.

---

## ✅ Ergebnis

Im Ordner `translations_output/` findest du jetzt Dateien wie:

```
layer_translations_de.json
layer_translations_fr.json
layer_translations_it.json
layer_translations_en.json
```

Jede enthält ein Dictionary der Form:

```json
{
  "lyr_swisstopo_geophysics_isostatic_anomalies_label": "Isostatische Anomalien 500"
}
```

---

Wenn du willst, zeige ich dir auch, wie du das Ganze als Teil einer Django-Management-Command, eines npm/i18n-Moduls oder CI/CD-Skripts nutzen kannst.
