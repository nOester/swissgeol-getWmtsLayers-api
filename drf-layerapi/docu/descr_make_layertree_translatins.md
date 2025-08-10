Super — hier ist dein komplettes Skript **zeilenweise kommentiert**.
Ich erkläre jede einzelne Zeile bzw. kleine sinnvolle Blöcke, damit du genau siehst, was passiert und warum.

Für Lesbarkeit habe ich die Kommentare **über** den relevanten Zeilen platziert (nicht nach jedem Zeichen), aber die Erklärungen sind genau zeilen-/blockbezogen.

```python
# importiert das Modul zum Lesen/Schreiben von JSON-Dateien
import json
# importiert das Modul für Dateisystem-Operationen (Ordner erstellen, Pfade)
import os

# ---------------------------------------
# Funktion: slugify
# Zweck: erzeugt aus einem beliebigen String einen "sauberen" Key-Teil
# (alles klein, Sonderzeichen entfernt/ersetzt, Leerzeichen -> _)
# ---------------------------------------
def slugify(text):
    return (
        text.lower()                              # alles klein schreiben
        .replace("'", "")                         # einfache Anführungszeichen entfernen
        .replace('"', "")                         # doppelte Anführungszeichen entfernen
        .replace("&", "and")                      # & durch "and" ersetzen (sinnvolle Lesbarkeit)
        .replace(",", "")                         # Kommas entfernen
        .replace(".", "_")                        # Punkte durch Unterstrich ersetzen
        .replace("-", "_")                        # Bindestriche durch Unterstrich ersetzen
        .replace(" ", "_")                        # Leerzeichen durch Unterstrich ersetzen
    )

# ---------------------------------------
# Auskommentierte alte Version von extract_labels (zur Referenz)
# Dieser Block ist deaktiviert (durch führende #), er wird nicht ausgeführt.
# Er zeigt eine frühere Implementierung, die auf Label-Slug basierte.
# ---------------------------------------
# def extract_labels(nodes, lang_map, key_map=None):
#     """
#     Extracts labels from nodes and returns a dict:
#     key_map: key -> node (only from EN, to get keys from layerBodId or label)
#     lang_map: language -> dict key->label
#     """

#     for node in nodes:
#         category = node.get("category")
#         label = node.get("label", "")
#         layer_bod_id = node.get("layerBodId", "")

#         # Nur für topic oder layer
#         if category in ("topic", "layer"):
#             if category == "topic":
#                 # Key basiert aufLabel
#                 key = f"grp_{slugify(label)}_label"
#             elif category == "layer":
#                 # Key basiert auf layerBodId, falls vorhanden, sonst label fallback
#                 base_for_key = layer_bod_id if layer_bod_id else label
#                 key = f"lyr_{slugify(base_for_key)}_label"

#             # key_map (nur in EN) speichern
#             if key_map is not None:
#                 key_map[key] = node

#             # labels speichern pro Sprache (lang_map)
#             # Das wird bei Aufruf außerhalb befüllt (siehe unten)
#             # Hier nur Key-Existenz sicherstellen
#             if key not in lang_map:
#                 lang_map[key] = label

#         # Rekursion
#         children = node.get("children", [])
#         if children:
#             extract_labels(children, lang_map, key_map)


# ---------------------------------------
# Aktuelle (gewünschte) Version von extract_labels
# - nodes: Liste von Knoten (children)
# - lang_map: dict, das die Labels der aktuellen Sprache sammelt (key -> label)
# - key_map: optional, wird für EN genutzt, um die finalen Keys zu merken (key -> node)
# - is_en: Flag, true beim Verarbeiten der EN-Datei (dann füllen wir key_map)
# ---------------------------------------
def extract_labels(nodes, lang_map, key_map=None, is_en=False):
    # Schleife über alle Knoten auf der aktuellen Ebene
    for node in nodes:
        # Kategorie (topic / layer / etc.) aus dem Node lesen
        category = node.get("category")
        # Label (textuell) aus dem Node; default "" falls nicht vorhanden
        label = node.get("label", "")
        # ID-Feld (numerisch oder string) — wir verwenden es für Topic-Keys
        node_id = node.get("id", "")
        # layerBodId: eindeutige Layer-ID für layer-Knoten
        layer_bod_id = node.get("layerBodId", "")

        # -------------------------
        # Key-Erzeugung nach Kategorie
        # -------------------------
        if category == "topic":
            # Für Topics generieren wir den Key aus der konstanten 'id' (wenn vorhanden),
            # sonst als Fallback aus dem label (slugified).
            # WICHTIG: node_id kann eine Zahl sein, daher slugify(str(node_id)) beim Gebrauch.
            if node_id:
                # str(node_id) → weil node_id numerisch sein kann; slugify erwartet string-Methoden
                # Ergebnis-Beispiel: id=1786 -> grp_1786_label
                # (wir speichern den Schlüssel in dieser stabilen Form)
                # key = f"grp_{slugify(node_id)}_label"
                key = f"grp_{slugify(str(node_id))}_label"
            else:
                # Fallback, falls keine id vorhanden ist:
                key = f"grp_{slugify(label)}_label"

        elif category == "layer":
            # Für layer verwenden wir bevorzugt layerBodId als Basis für den Key.
            # Falls layerBodId fehlt (selten), nutzen wir das label als Fallback.
            base_for_key = layer_bod_id if layer_bod_id else label
            key = f"lyr_{slugify(base_for_key)}_label"

        else:
            # Andere Kategorien (wenn vorhanden) überspringen wir komplett
            continue

        # ----------------------------------------
        # key_map füllen (nur während EN-Durchlauf)
        # ----------------------------------------
        # Wenn wir gerade die EN-Datei verarbeiten und ein key_map übergeben wurde,
        # speichern wir das gesamte node unter dem Schlüssel. So haben wir später
        # die Liste der "offiziellen" Keys (stabil).
        if is_en and key_map is not None:
            key_map[key] = node

        # ----------------------------------------
        # lang_map füllen (Labels für die momentane Sprache)
        # ----------------------------------------
        # Wenn der Key noch nicht existiert, setzen wir den Label-Wert (der Value).
        # Später, beim Schreiben, holen wir für jeden EN-Key den entsprechenden Wert
        # aus der jeweiligen Sprach-Map (lang_map).
        if key not in lang_map:
            lang_map[key] = label

        # -------------------------
        # Rekursive Verarbeitung
        # -------------------------
        # Falls der Node Kinder hat, rufen wir dieselbe Funktion rekursiv auf
        children = node.get("children", [])
        if children:
            # Beim Rekursionsaufruf wird is_en (und ggf. key_map) weitergereicht
            extract_labels(children, lang_map, key_map, is_en=is_en)



# ---------------------------------------
# Funktion: generate_translation_files
# Erzeugt pro Sprache eine translations_<lang>.json Datei,
# wobei die Keys aus EN (key_map) kommen und die Values aus der jeweiligen Sprache.
# ---------------------------------------
def generate_translation_files(input_dir, output_dir):
    # Map: Sprachcode -> Eingabedateiname
    lang_files = {
        "de": "mga_layertree_de.json",
        "fr": "mga_layertree_fr.json",
        "it": "mga_layertree_it.json",
        "en": "mga_layertree_en.json"
    }

    # Stelle sicher, dass der Ausgabe-Ordner existiert (erstellt ihn falls nötig)
    os.makedirs(output_dir, exist_ok=True)

    # -------------------------
    # 1) EN laden und Key-Map aufbauen
    # -------------------------
    en_path = os.path.join(input_dir, lang_files["en"])
    # EN-Datei öffnen und JSON parsen
    with open(en_path, "r", encoding="utf-8") as f:
        en_data = json.load(f)

    # Aus en_data die children unter results.root auslesen (Top-Level Topics)
    en_root_children = en_data.get("results", {}).get("root", {}).get("children", [])
    # key_map wird später die offiziellen Keys aus EN enthalten (key -> node)
    key_map = {}  # key -> node (für Keys)
    # extract_labels auf EN ausführen, dabei is_en=True, damit key_map gefüllt wird
    # (lang_map übergeben wir hier als leeres dict, weil wir die EN-Labels nicht
    #  direkt brauchen — wir speichern nur die Key-Struktur)
    # extract_labels(en_root_children, {}, key_map=key_map)
    extract_labels(en_root_children, {}, key_map=key_map, is_en=True)

    # -------------------------
    # 2) Alle Sprachen laden und Labels extrahieren
    # -------------------------
    lang_label_maps = {}
    for lang, filename in lang_files.items():
        path = os.path.join(input_dir, filename)
        # Wenn die Datei fehlt, überspringen und warnen
        if not os.path.isfile(path):
            print(f"⚠️ Datei nicht gefunden: {path}")
            continue

        # Datei laden
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)

        # Root-Children in dieser Sprache
        root_children = data.get("results", {}).get("root", {}).get("children", [])
        # Diese Map wird die Key->Label Zuordnung für diese Sprache halten
        lang_map = {}
        # Labels extrahieren (is_en=False, damit key_map nicht verändert wird)
        # Dadurch füllen wir für diese Sprache lang_map[key] = label (für alle Keys, die wir finden)
        # Beachte: die Keys werden mit der gleichen Logik erzeugt (topic: id, layer: bodId/label)
        extract_labels(root_children, lang_map, is_en=False)
        # Ergebnis in das Gesamt-Dictionary speichern
        lang_label_maps[lang] = lang_map

    # -------------------------
    # 3) Übersetzungsdateien schreiben (basierend auf EN-Keys)
    # -------------------------
    # Wir iterieren über alle geladenen Sprach-Maps (inkl. "en")
    for lang, lang_map in lang_label_maps.items():
        translations = {}
        # Für jeden Key aus der EN-Key-Map
        for key in key_map.keys():
            # Wert aus dieser Sprache, falls nicht vorhanden -> Fallback auf EN -> sonst leer
            value = lang_map.get(key) or lang_label_maps["en"].get(key) or ""
            translations[key] = value

        # Ausgabe-Dateipfad
        out_path = os.path.join(output_dir, f"translations_{lang}.json")
        # Übersetzungs-JSON schreiben
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(translations, f, ensure_ascii=False, indent=2)

        # Logging: wie viele Einträge wurden geschrieben
        print(f"✅ {len(translations)} Einträge in: {out_path}")

# ---------------------------------------
# Script-Einstiegspunkt
# Wenn das Skript direkt ausgeführt wird, rufe die Funktion auf
# ---------------------------------------
if __name__ == "__main__":
    generate_translation_files(input_dir="./input", output_dir="./output/translations")
```

---

Wenn du willst, kann ich diese Kommentare auch **direkt in den Code einfügen** (also `#`-Kommentare in der Datei), damit du sie in deinem Editor siehst — oder ich kann eine **kurze Ablaufgrafik** (Datenfluss) erzeugen. Welche Variante hättest du lieber?
