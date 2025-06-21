import requests
from lxml import etree
import os

def parse_layer_file(input_path: str, output_path: str):
    # URLs für Capabilities
    WMTS_URL = "https://wmts.geo.admin.ch/EPSG/2056/1.0.0/WMTSCapabilities.xml"
    WMS_URL = "https://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities"

    # Lade beide Capabilities nur einmal
    wmts_xml = etree.fromstring(requests.get(WMTS_URL).content)
    wms_xml = etree.fromstring(requests.get(WMS_URL).content)

    # Namespace-Mappings
    ns_wmts = {
        "wmts": "http://www.opengis.net/wmts/1.0",
        "ows": "http://www.opengis.net/ows/1.1",
        "xlink": "http://www.w3.org/1999/xlink",
    }
    ns_wms = {
        "wms": "http://www.opengis.net/wms",
        "xlink": "http://www.w3.org/1999/xlink",
    }

    with open(input_path, 'r') as infile, open(output_path, 'w') as outfile:
        outfile.write("// Auto-generierte Layer-Konfiguration\n")

        for line in infile:
            title = line.strip()
            if not title:
                continue

            found = False

            # --- Suche in WMTS ---
            xpath_expr = f"//wmts:Layer[ows:Title='{title}']"
            layers = wmts_xml.xpath(xpath_expr, namespaces=ns_wmts)
            layer = layers[0] if layers else None

            if layer is not None:
                identifier = layer.findtext("ows:Identifier", namespaces=ns_wmts)
                metadata = layer.find("ows:Metadata", namespaces=ns_wmts)
                metadata_href = metadata.get("{http://www.w3.org/1999/xlink}href") if metadata is not None else ""
                geocat_id = os.path.basename(metadata_href)
                found = True
                quelle = "WMTS"
            else:
                # --- Suche in WMS ---
                xpath_expr = f".//wms:Layer[wms:Title='{title}']"
                layers = wms_xml.xpath(xpath_expr, namespaces=ns_wms)
                layer = layers[0] if layers else None

                if layer is not None:
                    identifier = layer.findtext("wms:Name", namespaces=ns_wms)
                    md = layer.find(".//wms:MetadataURL/wms:OnlineResource", namespaces=ns_wms)
                    metadata_href = md.get("{http://www.w3.org/1999/xlink}href") if md is not None else ""
                    geocat_id = os.path.basename(metadata_href)
                    found = True
                    quelle = "WMS"

            # --- Schreiben ins JS ---
            if found:
                outfile.write(f"""        {{
          // Layer "{title}" (aus {quelle})
          type: LayerType.swisstopoWMTS,
          label: t('lyr_{identifier}_label'),
          layer: '{identifier}',
          maximumLevel: 18,
          visible: false,
          displayed: false,
          opacity: 0.7,
          queryType: 'geoadmin',
          geocatId: '{geocat_id}',
          legend: '{identifier}',
        }},
""")
            else:
                outfile.write(f"""        {{
          // Layer "{title}" (NOT FOUND)
          type: LayerType.swisstopoWMTS,
          label: t('lyr_NOT_FOUND_label'),
          layer: 'NOT_FOUND',
          maximumLevel: 0,
          visible: false,
          displayed: false,
          opacity: 0.7,
          queryType: 'geoadmin',
          geocatId: '',
          legend: 'NOT_FOUND',
        }},
""")
