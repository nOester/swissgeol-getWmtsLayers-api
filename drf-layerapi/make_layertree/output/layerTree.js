// 🧾 Generated LayerTree Groups
const group_01: LayerTreeNode = 
  // Topic - Maps, cross-sections & models
  {
    label: t('grp_1786_label'),
    children: [
      // Topic - Geological maps
      {
        label: t('grp_1787_label'),
        children: [
          // Layer - GeoCover - Vector Datasets - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geocover_label'),
            layer: 'ch.swisstopo.geologie-geocover',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '2467ab13-e794-4c13-8c55-59fe276398c5',
            legend: 'ch.swisstopo.geologie-geocover'
          }
          ,
          // Layer - Geological Atlas GA25 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geologischer_atlas_label'),
            layer: 'ch.swisstopo.geologie-geologischer_atlas',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '258814a5-8fcf-47df-b0c6-160602b0078c',
            legend: 'ch.swisstopo.geologie-geologischer_atlas'
          }
          ,
          // Layer - Lithology 500 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geotechnik_gk500_lithologie_hauptgruppen_label'),
            layer: 'ch.swisstopo.geologie-geotechnik-gk500-lithologie_hauptgruppen',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '435522fb-599e-41c0-a7c0-49d922ea6acf',
            legend: 'ch.swisstopo.geologie-geotechnik-gk500-lithologie_hauptgruppen'
          }
          ,
          // Layer - Geology 500 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geologische_karte_label'),
            layer: 'ch.swisstopo.geologie-geologische_karte',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'ca917a71-dcc9-44b6-8804-823c694be516',
            legend: 'ch.swisstopo.geologie-geologische_karte'
          }
          ,
          // Layer - Tectonics 500 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_tektonische_karte_label'),
            layer: 'ch.swisstopo.geologie-tektonische_karte',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'a4cdef47-505e-41ab-b6a7-ad5b92d80e41',
            legend: 'ch.swisstopo.geologie-tektonische_karte'
          }
          ,
          // Layer - Groups of rocks 500 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geotechnik_gk500_gesteinsklassierung_label'),
            layer: 'ch.swisstopo.geologie-geotechnik-gk500-gesteinsklassierung',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'f2c81b93-f0c5-4899-83a9-974ce36c48e6',
            legend: 'ch.swisstopo.geologie-geotechnik-gk500-gesteinsklassierung'
          }
          ,
          // Layer - Origin of rocks 500 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geotechnik_gk500_genese_label'),
            layer: 'ch.swisstopo.geologie-geotechnik-gk500-genese',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '65652bdd-76e3-4df2-9329-140a04a2a66c',
            legend: 'ch.swisstopo.geologie-geotechnik-gk500-genese'
          }
        ]
      }
      ,
      // Topic - Thematic maps
      {
        label: t('grp_1793_label'),
        children: [
          // Layer - Last glacial maximum (map) 500 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_eiszeit_lgm_raster_label'),
            layer: 'ch.swisstopo.geologie-eiszeit-lgm-raster',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'f1455593-7571-48b0-8603-307ec59a6702',
            legend: 'ch.swisstopo.geologie-eiszeit-lgm-raster'
          }
          ,
          // Layer - Last glacial maximum (vector) 500 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_eiszeit_lgm_label'),
            layer: 'ch.swisstopo.geologie-eiszeit-lgm',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '75c2f212-413c-4d55-8a93-c021c8bbfc95',
            legend: 'ch.swisstopo.geologie-eiszeit-lgm'
          }
          ,
          // Layer - Glacier thickness - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_gletschermaechtigkeit_label'),
            layer: 'ch.swisstopo.geologie-gletschermaechtigkeit',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '57052989-5074-4841-abb6-22d1989d615f',
            legend: 'ch.swisstopo.geologie-gletschermaechtigkeit'
          }
          ,
          // Layer - Extent of glaciers - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_gletscherausdehnung_label'),
            layer: 'ch.swisstopo.geologie-gletscherausdehnung',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'f6fb6139-f13e-4a56-bf01-01b7dd4358d5',
            legend: 'ch.swisstopo.geologie-gletscherausdehnung'
          }
          ,
          // Layer - Overview of geomorphology - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geomorphologie_label'),
            layer: 'ch.swisstopo.geologie-geomorphologie',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '1bf16162-a44c-4970-9da1-044383bacff8',
            legend: 'ch.swisstopo.geologie-geomorphologie'
          }
        ]
      }
      ,
      // Topic - Historical maps
      {
        label: t('grp_15174_label'),
        children: [
          // Layer - General Geol. Map 200 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_generalkarte_ggk200_label'),
            layer: 'ch.swisstopo.geologie-generalkarte-ggk200',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'f6416e51-bf55-445a-946e-3eee2134d131',
            legend: 'ch.swisstopo.geologie-generalkarte-ggk200'
          }
        ]
      }
      ,
      // Topic - Sheet divisions
      {
        label: t('grp_1799_label'),
        children: [
          // Layer - Division GGK 200 Raster - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_generalkarte_ggk200_metadata_label'),
            layer: 'ch.swisstopo.geologie-generalkarte-ggk200.metadata',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'c17ba742-9a43-4ed2-9331-e776d6e9065d',
            legend: 'ch.swisstopo.geologie-generalkarte-ggk200.metadata'
          }
          ,
          // Layer - Division GSK Raster - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_spezialkarten_schweiz_metadata_label'),
            layer: 'ch.swisstopo.geologie-spezialkarten_schweiz.metadata',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '5a7e79b5-0aef-4514-9df4-62fb92edee97',
            legend: 'ch.swisstopo.geologie-spezialkarten_schweiz.metadata'
          }
          ,
          // Layer - Division GSK Vector - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_spezialkarten_schweiz_vector_metadata_label'),
            layer: 'ch.swisstopo.geologie-spezialkarten_schweiz_vector.metadata',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'b15b89ac-d7e5-412c-bd4a-5077c935806c',
            legend: 'ch.swisstopo.geologie-spezialkarten_schweiz_vector.metadata'
          }
          ,
          // Layer - Division GA25 Raster - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geologischer_atlas_metadata_label'),
            layer: 'ch.swisstopo.geologie-geologischer_atlas.metadata',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'a891e1e7-7f85-4c92-94d9-7120edf91a9c',
            legend: 'ch.swisstopo.geologie-geologischer_atlas.metadata'
          }
          ,
          // Layer - Division GeoCover - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geocover_metadata_label'),
            layer: 'ch.swisstopo.geologie-geocover.metadata',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'f7485f4f-2224-4b76-a43c-52cbf8883a42',
            legend: 'ch.swisstopo.geologie-geocover.metadata'
          }
        ]
      }
      ,
      // Topic - Cross-sections
      {
        label: t('grp_15143_label'),
        children: [
          // Layer - Geological profiles GA25 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geologischer_atlas_profile_label'),
            layer: 'ch.swisstopo.geologie-geologischer_atlas_profile',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '345d02a3-9628-46d7-9e57-e0ab1d9faf8a',
            legend: 'ch.swisstopo.geologie-geologischer_atlas_profile'
          }
        ]
      }
      ,
      // Topic - 3D models
      {
        label: t('grp_1855_label'),
        children: [
          // Layer - 3D geological models - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geologische_3dmodelle_label'),
            layer: 'ch.swisstopo.geologie-geologische_3dmodelle',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '11836d3b-181e-4078-b83f-f55fc44b5776',
            legend: 'ch.swisstopo.geologie-geologische_3dmodelle'
          }
          ,
          // Layer - Thickness of unconsolidated deposits - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_lockergestein_maechtigkeitsmodell_label'),
            layer: 'ch.swisstopo.geologie-lockergestein_maechtigkeitsmodell',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '99eb4571-4c34-48cc-bd6a-32fd9decc2a7',
            legend: 'ch.swisstopo.geologie-lockergestein_maechtigkeitsmodell'
          }
          ,
          // Layer - Bedrock elevation model - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_felsoberflaeche_hoehenmodell_label'),
            layer: 'ch.swisstopo.geologie-felsoberflaeche_hoehenmodell',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '133b54a9-60d1-481c-85e8-e1a222d6ac3f',
            legend: 'ch.swisstopo.geologie-felsoberflaeche_hoehenmodell'
          }
        ]
      }
    ]
  }

const group_02: LayerTreeNode = 
  // Topic - Borehole data
  {
    label: t('grp_1802_label'),
    children: [
      // Layer - Deep wells - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_geologie_bohrungen_tiefer_500_label'),
        layer: 'ch.swisstopo.geologie-bohrungen_tiefer_500',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: 'a61d9f7a-00cd-4448-a36d-b81423f1f566',
        legend: 'ch.swisstopo.geologie-bohrungen_tiefer_500'
      }
    ]
  }

const group_03: LayerTreeNode = 
  // Topic - Geophysics
  {
    label: t('grp_1811_label'),
    children: [
      // Layer - Reflection seismic - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_geologie_reflexionsseismik_label'),
        layer: 'ch.swisstopo.geologie-reflexionsseismik',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: '61866340-a491-444a-8f60-9a6e70df37d8',
        legend: 'ch.swisstopo.geologie-reflexionsseismik'
      }
      ,
      // Layer - Rock density - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_geologie_gesteinsdichte_label'),
        layer: 'ch.swisstopo.geologie-gesteinsdichte',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: 'c4a7ceb5-8bf5-457d-ab0a-57216dafce53',
        legend: 'ch.swisstopo.geologie-gesteinsdichte'
      }
      ,
      // Layer - Anthrop. seismic noise CH - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_geologie_bodenunruhe_label'),
        layer: 'ch.swisstopo.geologie-bodenunruhe',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: '4dba9c57-2e2b-4b69-844b-bd2001fa53a8',
        legend: 'ch.swisstopo.geologie-bodenunruhe'
      }
      ,
      // Layer - Terrestrial Radiation - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_geologie_dosisleistung_terrestrisch_label'),
        layer: 'ch.swisstopo.geologie-dosisleistung-terrestrisch',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: 'eccbc751-9928-4221-89e1-1184cbb3aff5',
        legend: 'ch.swisstopo.geologie-dosisleistung-terrestrisch'
      }
      ,
      // Topic - Earth's gravity field
      {
        label: t('grp_1812_label'),
        children: [
          // Layer - Gravimetric base network - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_landesschwerenetz_label'),
            layer: 'ch.swisstopo.landesschwerenetz',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '95879cd4-e93d-4d4d-af57-4ec6731b9c97',
            legend: 'ch.swisstopo.landesschwerenetz'
          }
          ,
          // Layer - Isostatic anomalies 500 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geodaesie_isostatische_anomalien_label'),
            layer: 'ch.swisstopo.geologie-geodaesie-isostatische_anomalien',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '7234896a-842c-4524-8710-5d900953cb1d',
            legend: 'ch.swisstopo.geologie-geodaesie-isostatische_anomalien'
          }
          ,
          // Layer - Bouguer anomalies 500 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geodaesie_bouguer_anomalien_label'),
            layer: 'ch.swisstopo.geologie-geodaesie-bouguer_anomalien',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '618c9697-129f-47c7-830a-7a256b4c2499',
            legend: 'ch.swisstopo.geologie-geodaesie-bouguer_anomalien'
          }
          ,
          // Layer - Gravimetric Atlas 100 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_gravimetrischer_atlas_label'),
            layer: 'ch.swisstopo.geologie-gravimetrischer_atlas',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '732cb247-8307-4cc7-8c31-b1c505a94633',
            legend: 'ch.swisstopo.geologie-gravimetrischer_atlas'
          }
          ,
          // Layer - Gravimetric measuring points 100 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_gravimetrischer_atlas_messpunkte_label'),
            layer: 'ch.swisstopo.geologie-gravimetrischer_atlas.messpunkte',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '297a1958-3636-45af-a17c-e90120605132',
            legend: 'ch.swisstopo.geologie-gravimetrischer_atlas.messpunkte'
          }
          ,
          // Layer - Geoid in CH1903 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geoidmodell_ch1903_label'),
            layer: 'ch.swisstopo.geoidmodell-ch1903',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '2b20aece-5cb1-41f1-a618-7c6e1ff6a81b',
            legend: 'ch.swisstopo.geoidmodell-ch1903'
          }
        ]
      }
      ,
      // Topic - Earth's magnetic field
      {
        label: t('grp_1818_label'),
        children: [
          // Layer - Aeromagnetics 500 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geophysik_aeromagnetische_karte_schweiz_label'),
            layer: 'ch.swisstopo.geologie-geophysik-aeromagnetische_karte_schweiz',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '4cc706a2-0005-4cc6-8326-7b944a1d5b05',
            legend: 'ch.swisstopo.geologie-geophysik-aeromagnetische_karte_schweiz'
          }
          ,
          // Layer - Aeromagnetics Plateau/Jura 500 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geophysik_aeromagnetische_karte_jura_label'),
            layer: 'ch.swisstopo.geologie-geophysik-aeromagnetische_karte_jura',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'f952b9be-9a11-478c-a21c-9d5e8631c7c2',
            legend: 'ch.swisstopo.geologie-geophysik-aeromagnetische_karte_jura'
          }
          ,
          // Layer - Aeromagnetic Aargau 1100 m 100 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_nagra_aeromagnetische_karte_1100_label'),
            layer: 'ch.nagra.aeromagnetische-karte_1100',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '2ffdbb13-27dc-4380-8349-8debfeca4fd9',
            legend: 'ch.nagra.aeromagnetische-karte_1100'
          }
          ,
          // Layer - Aeromagnetic Aargau 1500 m 100 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_nagra_aeromagnetische_karte_1500_label'),
            layer: 'ch.nagra.aeromagnetische-karte_1500',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'b814401b-9eb2-4e6c-b4a9-f24df7b8bba6',
            legend: 'ch.nagra.aeromagnetische-karte_1500'
          }
          ,
          // Layer - Declination 500 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geophysik_deklination_label'),
            layer: 'ch.swisstopo.geologie-geophysik-deklination',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '8f38b25f-f984-450a-ae48-02290e82136c',
            legend: 'ch.swisstopo.geologie-geophysik-deklination'
          }
          ,
          // Layer - Inclination 500 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geophysik_inklination_label'),
            layer: 'ch.swisstopo.geologie-geophysik-inklination',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '639c0536-bfea-44d3-b088-ed7b6b43cde9',
            legend: 'ch.swisstopo.geologie-geophysik-inklination'
          }
          ,
          // Layer - Magnetic field strength 500 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geophysik_totalintensitaet_label'),
            layer: 'ch.swisstopo.geologie-geophysik-totalintensitaet',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '132d9ff6-92de-4c02-87a7-72df26bcb33e',
            legend: 'ch.swisstopo.geologie-geophysik-totalintensitaet'
          }
        ]
      }
    ]
  }

const group_04: LayerTreeNode = 
  // Topic - Geoenergy
  {
    label: t('grp_15070_label'),
    children: [
      // Layer - Deep geothermal projects - WMS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_geologie_tiefengeothermie_projekte_label'),
        layer: 'ch.swisstopo.geologie-tiefengeothermie_projekte',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: '2df11e59-d85a-40cf-98cf-4b941577e23c',
        legend: 'ch.swisstopo.geologie-tiefengeothermie_projekte'
      }
      ,
      // Layer - Deep wells - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_geologie_bohrungen_tiefer_500_label'),
        layer: 'ch.swisstopo.geologie-bohrungen_tiefer_500',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: 'a61d9f7a-00cd-4448-a36d-b81423f1f566',
        legend: 'ch.swisstopo.geologie-bohrungen_tiefer_500'
      }
      ,
      // Layer - Reflection seismic - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_geologie_reflexionsseismik_label'),
        layer: 'ch.swisstopo.geologie-reflexionsseismik',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: '61866340-a491-444a-8f60-9a6e70df37d8',
        legend: 'ch.swisstopo.geologie-reflexionsseismik'
      }
      ,
      // Layer - Thermal waters - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_geologie_thermale_waesser_label'),
        layer: 'ch.swisstopo.geologie-thermale_waesser',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: '04fb057a-4c46-4d6d-8a64-8003df749762',
        legend: 'ch.swisstopo.geologie-thermale_waesser'
      }
      ,
      // Layer - Groundwater heat utilisation potential - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_bfe_grundwasserwaermenutzungspotential_label'),
        layer: 'ch.bfe.grundwasserwaermenutzungspotential',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: 'd64de95f-1b3d-4df3-b395-68b0404ac8ca',
        legend: 'ch.bfe.grundwasserwaermenutzungspotential'
      }
      ,
      // Layer - Geothermal potential studies - WMS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_geologie_geothermische_potenzialstudien_regional_label'),
        layer: 'ch.swisstopo.geologie-geothermische_potenzialstudien_regional',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: '1c050393-fe3a-41b1-a31e-3173f51181d8',
        legend: 'ch.swisstopo.geologie-geothermische_potenzialstudien_regional'
      }
      ,
      // Topic - Temperature models
      {
        label: t('grp_15180_label'),
        children: [
          // Layer - Heat flux 500 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geophysik_geothermie_label'),
            layer: 'ch.swisstopo.geologie-geophysik-geothermie',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '2d8174b2-8c4a-44ea-b470-cb3f216b90d1',
            legend: 'ch.swisstopo.geologie-geophysik-geothermie'
          }
          ,
          // Layer - Temperature model - data - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geomol_temperaturmodell_eingangsdaten_label'),
            layer: 'ch.swisstopo.geologie-geomol-temperaturmodell_eingangsdaten',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '63ed59b1-d9fb-4c6e-a629-550c8f6b9bf2',
            legend: 'ch.swisstopo.geologie-geomol-temperaturmodell_eingangsdaten'
          }
          ,
          // Layer - Elevation 60 °C isotherm - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geomol_isotherme_60_label'),
            layer: 'ch.swisstopo.geologie-geomol-isotherme_60',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '6edca35d-0f08-43b9-9faf-4c7b207888a1',
            legend: 'ch.swisstopo.geologie-geomol-isotherme_60'
          }
          ,
          // Layer - Elevation 100 °C isotherm - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geomol_isotherme_100_label'),
            layer: 'ch.swisstopo.geologie-geomol-isotherme_100',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '8681fb45-6220-41ef-825a-86210d8a72fc',
            legend: 'ch.swisstopo.geologie-geomol-isotherme_100'
          }
          ,
          // Layer - Elevation 150 °C isotherm - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geomol_isotherme_150_label'),
            layer: 'ch.swisstopo.geologie-geomol-isotherme_150',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '31dc428e-a62b-4f6b-a263-e5eca9d9a074',
            legend: 'ch.swisstopo.geologie-geomol-isotherme_150'
          }
          ,
          // Layer - Temperatures Top OMM - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geomol_temperatur_top_omm_label'),
            layer: 'ch.swisstopo.geologie-geomol-temperatur_top_omm',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '4f9e3f59-891e-434b-bba5-40db1b9495e0',
            legend: 'ch.swisstopo.geologie-geomol-temperatur_top_omm'
          }
          ,
          // Layer - Temperatures Top Upper Malm - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geomol_temperatur_top_omalm_label'),
            layer: 'ch.swisstopo.geologie-geomol-temperatur_top_omalm',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '613cdc6f-0237-416d-af16-ae5d2f1934ff',
            legend: 'ch.swisstopo.geologie-geomol-temperatur_top_omalm'
          }
          ,
          // Layer - Temperatures Top Muschelkalk - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geomol_temperatur_top_muschelkalk_label'),
            layer: 'ch.swisstopo.geologie-geomol-temperatur_top_muschelkalk',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'e0be0de5-4ed0-488a-a952-5eb385fd5595',
            legend: 'ch.swisstopo.geologie-geomol-temperatur_top_muschelkalk'
          }
          ,
          // Layer - Temperatures 500 m depth - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geomol_temperaturverteilung_500_label'),
            layer: 'ch.swisstopo.geologie-geomol-temperaturverteilung_500',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '08e66941-4ebb-4017-8018-b39caa8fd107',
            legend: 'ch.swisstopo.geologie-geomol-temperaturverteilung_500'
          }
          ,
          // Layer - Temperatures 1000 m depth - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geomol_temperaturverteilung_1000_label'),
            layer: 'ch.swisstopo.geologie-geomol-temperaturverteilung_1000',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '5e32ea72-a356-4250-b40a-a441165fd936',
            legend: 'ch.swisstopo.geologie-geomol-temperaturverteilung_1000'
          }
          ,
          // Layer - Temperatures 1500 m depth - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geomol_temperaturverteilung_1500_label'),
            layer: 'ch.swisstopo.geologie-geomol-temperaturverteilung_1500',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '162989d7-5c1c-48fb-8d16-2ccf5be339b9',
            legend: 'ch.swisstopo.geologie-geomol-temperaturverteilung_1500'
          }
          ,
          // Layer - Temperatures 2000 m depth - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geomol_temperaturverteilung_2000_label'),
            layer: 'ch.swisstopo.geologie-geomol-temperaturverteilung_2000',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'ac604460-7a7a-44c5-bc5a-41062fbd21ff',
            legend: 'ch.swisstopo.geologie-geomol-temperaturverteilung_2000'
          }
          ,
          // Layer - Temperatures 3000 m depth - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geomol_temperaturverteilung_3000_label'),
            layer: 'ch.swisstopo.geologie-geomol-temperaturverteilung_3000',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '47f79661-212e-4297-b048-2606db7affa8',
            legend: 'ch.swisstopo.geologie-geomol-temperaturverteilung_3000'
          }
          ,
          // Layer - Temperatures 4000 m depth - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geomol_temperaturverteilung_4000_label'),
            layer: 'ch.swisstopo.geologie-geomol-temperaturverteilung_4000',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '739e9095-77f6-462d-9a1e-438898cf0c9c',
            legend: 'ch.swisstopo.geologie-geomol-temperaturverteilung_4000'
          }
        ]
      }
    ]
  }

const group_05: LayerTreeNode = 
  // Topic - Mineral resources
  {
    label: t('grp_15034_label'),
    children: [
      // Topic - Construction raw materials
      {
        label: t('grp_15181_label'),
        children: [
          // Layer - Cement raw materials - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_rohstoffe_zement_abbau_verarbeitung_label'),
            layer: 'ch.swisstopo.geologie-rohstoffe-zement_abbau_verarbeitung',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '9128ae2a-acdf-42cf-bb67-00755f0857fb',
            legend: 'ch.swisstopo.geologie-rohstoffe-zement_abbau_verarbeitung'
          }
          ,
          // Layer - Hard rock: Production sites - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_hartsteinabbau_label'),
            layer: 'ch.swisstopo.geologie-hartsteinabbau',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'fa939fea-8a3f-4911-ad83-33be66daa45c',
            legend: 'ch.swisstopo.geologie-hartsteinabbau'
          }
          ,
          // Layer - Hard rock: Occurrences - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_hartsteinvorkommen_label'),
            layer: 'ch.swisstopo.geologie-hartsteinvorkommen',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '258c7ccf-5e7f-4759-9c09-519d41ba4d02',
            legend: 'ch.swisstopo.geologie-hartsteinvorkommen'
          }
          ,
          // Layer - Crushed-rock aggregates - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_rohstoffe_gebrochene_gesteine_abbau_label'),
            layer: 'ch.swisstopo.geologie-rohstoffe-gebrochene_gesteine_abbau',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'bb682732-ca6d-43f4-8c95-760b76004b22',
            legend: 'ch.swisstopo.geologie-rohstoffe-gebrochene_gesteine_abbau'
          }
          ,
          // Layer - Brickworks raw materials - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_rohstoffe_ziegel_abbau_label'),
            layer: 'ch.swisstopo.geologie-rohstoffe-ziegel_abbau',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '3d0120f4-34b2-40cf-b61c-127bd9a27522',
            legend: 'ch.swisstopo.geologie-rohstoffe-ziegel_abbau'
          }
          ,
          // Layer - Dimension stone - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_rohstoffe_naturwerksteine_abbau_label'),
            layer: 'ch.swisstopo.geologie-rohstoffe-naturwerksteine_abbau',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '0b22a108-693c-4b6e-9e43-7614eb0e0bc3',
            legend: 'ch.swisstopo.geologie-rohstoffe-naturwerksteine_abbau'
          }
          ,
          // Layer - Natural stones on buildings - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geotechnik_steine_historische_bauwerke_label'),
            layer: 'ch.swisstopo.geologie-geotechnik-steine_historische_bauwerke',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'efe1b3cf-dac4-4660-a5bd-a9269a3d97db',
            legend: 'ch.swisstopo.geologie-geotechnik-steine_historische_bauwerke'
          }
        ]
      }
      ,
      // Topic - Metallic raw materials
      {
        label: t('grp_15038_label'),
        children: [
          // Layer - Metallic raw materials - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_rohstoffe_vererzungen_label'),
            layer: 'ch.swisstopo.geologie-rohstoffe-vererzungen',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '46dd5d50-6f7e-4175-ab64-051b16750e38',
            legend: 'ch.swisstopo.geologie-rohstoffe-vererzungen'
          }
        ]
      }
      ,
      // Topic - Industrial minerals
      {
        label: t('grp_15182_label'),
        children: [
          // Layer - Gypsum - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_rohstoffe_gips_abbau_verarbeitung_label'),
            layer: 'ch.swisstopo.geologie-rohstoffe-gips_abbau_verarbeitung',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '33f974a7-8852-449d-ba68-646b10710f60',
            legend: 'ch.swisstopo.geologie-rohstoffe-gips_abbau_verarbeitung'
          }
          ,
          // Layer - Salt - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_rohstoffe_salz_abbau_verarbeitung_label'),
            layer: 'ch.swisstopo.geologie-rohstoffe-salz_abbau_verarbeitung',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'e5bed380-6a35-46c9-97c9-0cbf5875f292',
            legend: 'ch.swisstopo.geologie-rohstoffe-salz_abbau_verarbeitung'
          }
          ,
          // Layer - Other industrial minerals - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_rohstoffe_industrieminerale_label'),
            layer: 'ch.swisstopo.geologie-rohstoffe-industrieminerale',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'ec3471db-6e86-4148-abbf-d702196381bd',
            legend: 'ch.swisstopo.geologie-rohstoffe-industrieminerale'
          }
        ]
      }
      ,
      // Topic - Energy raw materials
      {
        label: t('grp_15183_label'),
        children: [
          // Layer - Energy raw materials - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_rohstoffe_kohlen_bitumen_erdgas_label'),
            layer: 'ch.swisstopo.geologie-rohstoffe-kohlen_bitumen_erdgas',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'ee51374d-1472-44bd-a5a7-c65c4e46f3b4',
            legend: 'ch.swisstopo.geologie-rohstoffe-kohlen_bitumen_erdgas'
          }
        ]
      }
    ]
  }

const group_06: LayerTreeNode = 
  // Topic - Groundwater
  {
    label: t('grp_15179_label'),
    children: [
      // Layer - Thermal waters - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_geologie_thermale_waesser_label'),
        layer: 'ch.swisstopo.geologie-thermale_waesser',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: '04fb057a-4c46-4d6d-8a64-8003df749762',
        legend: 'ch.swisstopo.geologie-thermale_waesser'
      }
      ,
      // Layer - Hydrogeological sketch - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_bafu_hydrogeologie_uebersichtskarte_label'),
        layer: 'ch.bafu.hydrogeologie-uebersichtskarte',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: 'e238580b-a03d-45c2-9ea6-f6634ff9c64c',
        legend: 'ch.bafu.hydrogeologie-uebersichtskarte'
      }
      ,
      // Layer - Groundwater Resources 500 - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_geologie_hydrogeologische_karte_grundwasservorkommen_label'),
        layer: 'ch.swisstopo.geologie-hydrogeologische_karte-grundwasservorkommen',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: 'f198f6f6-8efa-4235-a55f-99767ea0206c',
        legend: 'ch.swisstopo.geologie-hydrogeologische_karte-grundwasservorkommen'
      }
      ,
      // Layer - Groundwater Vulnerability 500 - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_geologie_hydrogeologische_karte_grundwasservulnerabilitaet_label'),
        layer: 'ch.swisstopo.geologie-hydrogeologische_karte-grundwasservulnerabilitaet',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: 'b8efde6b-7323-4496-aa70-b976ec55cec9',
        legend: 'ch.swisstopo.geologie-hydrogeologische_karte-grundwasservulnerabilitaet'
      }
      ,
      // Layer - Hydrogeological map 100 - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_bafu_hydrogeologische_karte_100_label'),
        layer: 'ch.bafu.hydrogeologische-karte_100',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: 'b01523a1-9f61-43a2-95cb-be843cc1b18a',
        legend: 'ch.bafu.hydrogeologische-karte_100'
      }
      ,
      // Topic - Karst groundwater
      {
        label: t('grp_15184_label'),
        children: [
          // Layer - Karst water resources - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_karst_ausdehnung_grundwasservorkommen_label'),
            layer: 'ch.bafu.karst-ausdehnung_grundwasservorkommen',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '4ea295bb-a098-492b-84f8-e7687737fb35',
            legend: 'ch.bafu.karst-ausdehnung_grundwasservorkommen'
          }
          ,
          // Layer - Karst springs and swallow holes - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_karst_quellen_schwinden_label'),
            layer: 'ch.bafu.karst-quellen_schwinden',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '1786c0cc-8aac-44b1-880c-aa627de09c1e',
            legend: 'ch.bafu.karst-quellen_schwinden'
          }
          ,
          // Layer - Underground flow paths - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_karst_unterirdische_fliesswege_label'),
            layer: 'ch.bafu.karst-unterirdische_fliesswege',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '7db32f1d-691d-4d2d-a842-ee188210acf6',
            legend: 'ch.bafu.karst-unterirdische_fliesswege'
          }
          ,
          // Layer - Karst catchments - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_karst_einzugsgebiete_label'),
            layer: 'ch.bafu.karst-einzugsgebiete',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '01811bd5-7f55-4c89-92f2-78fcd379affa',
            legend: 'ch.bafu.karst-einzugsgebiete'
          }
          ,
          // Layer - Karst catchment units - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_karst_einzugsgebietseinheiten_label'),
            layer: 'ch.bafu.karst-einzugsgebietseinheiten',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'fa918831-97d1-4486-a348-c891f4e900ad',
            legend: 'ch.bafu.karst-einzugsgebietseinheiten'
          }
        ]
      }
      ,
      // Layer - Groundwater bodies - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_bafu_grundwasserkoerper_label'),
        layer: 'ch.bafu.grundwasserkoerper',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: '2bd1ab86-83ec-4c3e-b937-ab81b4968bc6',
        legend: 'ch.bafu.grundwasserkoerper'
      }
      ,
      // Topic - Groundwater quantity
      {
        label: t('grp_15185_label'),
        children: [
          // Layer - NAQUA-QUANT Monitoring sites - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_hydroweb_messstationen_grundwasser_label'),
            layer: 'ch.bafu.hydroweb-messstationen_grundwasser',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '6146dc21-18b6-4d94-8865-8c2b99256e1b',
            legend: 'ch.bafu.hydroweb-messstationen_grundwasser'
          }
          ,
          // Layer - Groundwater level/spring discharge - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_hydroweb_messstationen_grundwasserzustand_label'),
            layer: 'ch.bafu.hydroweb-messstationen_grundwasserzustand',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'f87d692e-8d65-4188-94ba-61b4c61d621c',
            legend: 'ch.bafu.hydroweb-messstationen_grundwasserzustand'
          }
        ]
      }
      ,
      // Layer - Tracer tests - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_bafu_hydrogeologie_markierversuche_label'),
        layer: 'ch.bafu.hydrogeologie-markierversuche',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: 'fedac2fe-5f2b-4b4f-a21d-3c9fc216c496',
        legend: 'ch.bafu.hydrogeologie-markierversuche'
      }
      ,
      // Topic - Groundwater quality
      {
        label: t('grp_15186_label'),
        children: [
          // Layer - Groundwater: Nitrate - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_naqua_grundwasser_nitrat_label'),
            layer: 'ch.bafu.naqua-grundwasser_nitrat',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'ea282e54-364b-4023-87c1-cdccbac295b1',
            legend: 'ch.bafu.naqua-grundwasser_nitrat'
          }
          ,
          // Layer - Groundwater: VOC - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_naqua_grundwasser_voc_label'),
            layer: 'ch.bafu.naqua-grundwasser_voc',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'c5f01eb1-d755-4450-bc4f-3871589de62f',
            legend: 'ch.bafu.naqua-grundwasser_voc'
          }
        ]
      }
    ]
  }

const group_07: LayerTreeNode = 
  // Topic - Natural hazards
  {
    label: t('grp_1858_label'),
    children: [
      // Topic - Mass movements
      {
        label: t('grp_1859_label'),
        children: [
          // Layer - Snow avalanches (SilvaProtect-CH) - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_silvaprotect_lawinen_label'),
            layer: 'ch.bafu.silvaprotect-lawinen',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '8e350471-6259-4142-ad00-d99ddcefd2a4',
            legend: 'ch.bafu.silvaprotect-lawinen'
          }
          ,
          // Layer - Landslide (SilvaProtect-CH) - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_silvaprotect_hangmuren_label'),
            layer: 'ch.bafu.silvaprotect-hangmuren',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'e1f63878-1ddd-4a51-9d3b-f0f077990357',
            legend: 'ch.bafu.silvaprotect-hangmuren'
          }
          ,
          // Layer - Debris flow (SilvaProtect-CH) - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_silvaprotect_murgang_label'),
            layer: 'ch.bafu.silvaprotect-murgang',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '36f3b788-9d79-40f4-a69e-8c742729a745',
            legend: 'ch.bafu.silvaprotect-murgang'
          }
          ,
          // Layer - Rockfall (SilvaProtect-CH) - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_silvaprotect_sturz_label'),
            layer: 'ch.bafu.silvaprotect-sturz',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '238d97d6-8853-4e26-af30-dc5cbadd58dc',
            legend: 'ch.bafu.silvaprotect-sturz'
          }
          ,
          // Layer - Overbank sedimentation (SilvaProtect-CH) - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_silvaprotect_uebersarung_label'),
            layer: 'ch.bafu.silvaprotect-uebersarung',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '7c608bf9-bddf-490b-8a46-3415f3c74cf3',
            legend: 'ch.bafu.silvaprotect-uebersarung'
          }
        ]
      }
      ,
      // Topic - Earthquakes
      {
        label: t('grp_1865_label'),
        children: [
          // Layer - Recent earthquakes - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_gefahren_aktuelle_erdbeben_label'),
            layer: 'ch.bafu.gefahren-aktuelle_erdbeben',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '85b7cf2d-0feb-4e75-81d7-9e245ec4bf24',
            legend: 'ch.bafu.gefahren-aktuelle_erdbeben'
          }
          ,
          // Layer - Historical earthquakes - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_gefahren_historische_erdbeben_label'),
            layer: 'ch.bafu.gefahren-historische_erdbeben',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '3d1d7649-8c27-435c-ae74-7c0f2e3fbcf1',
            legend: 'ch.bafu.gefahren-historische_erdbeben'
          }
          ,
          // Layer - Seismic zones SIA 261 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_gefahren_gefaehrdungszonen_label'),
            layer: 'ch.bafu.gefahren-gefaehrdungszonen',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '239a4b60-9478-4120-87d9-5671c4516269',
            legend: 'ch.bafu.gefahren-gefaehrdungszonen'
          }
          ,
          // Layer - Seismic subsoil classes - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_gefahren_baugrundklassen_label'),
            layer: 'ch.bafu.gefahren-baugrundklassen',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '812485e6-821c-412d-8504-459c6b314d1c',
            legend: 'ch.bafu.gefahren-baugrundklassen'
          }
          ,
          // Layer - Spectral micro-zoning - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_gefahren_spektral_label'),
            layer: 'ch.bafu.gefahren-spektral',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'a869c0d0-ff03-4cbf-93e8-c568f01bf9bc',
            legend: 'ch.bafu.gefahren-spektral'
          }
        ]
      }
      ,
      // Topic - Permafrost
      {
        label: t('grp_15176_label'),
        children: [
          // Layer - Potential permafrost distribution - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_permafrost_label'),
            layer: 'ch.bafu.permafrost',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '71d087ef-6531-4131-98ea-88ff655d8a63',
            legend: 'ch.bafu.permafrost'
          }
        ]
      }
      ,
      // Topic - Floods
      {
        label: t('grp_1870_label'),
        children: [
          // Layer - Overland flow map - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_gefaehrdungskarte_oberflaechenabfluss_label'),
            layer: 'ch.bafu.gefaehrdungskarte-oberflaechenabfluss',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '6b59f9ee-9e5f-4b12-86cf-f8afb539ae5d',
            legend: 'ch.bafu.gefaehrdungskarte-oberflaechenabfluss'
          }
          ,
          // Layer - Areas of flooding Aquaprotect 50 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_aquaprotect_050_label'),
            layer: 'ch.bafu.aquaprotect_050',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'e7f4931d-2010-4ab2-b4ef-edbc47074ca9',
            legend: 'ch.bafu.aquaprotect_050'
          }
          ,
          // Layer - Areas of flooding Aquaprotect 100 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_aquaprotect_100_label'),
            layer: 'ch.bafu.aquaprotect_100',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'a71453bf-e515-4f70-98cc-c939510dd4b1',
            legend: 'ch.bafu.aquaprotect_100'
          }
          ,
          // Layer - Areas of flooding Aquaprotect 250 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_aquaprotect_250_label'),
            layer: 'ch.bafu.aquaprotect_250',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'a889473d-cbe4-454c-838b-aac6b174e46e',
            legend: 'ch.bafu.aquaprotect_250'
          }
          ,
          // Layer - Areas of flooding Aquaprotect 500 - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_aquaprotect_500_label'),
            layer: 'ch.bafu.aquaprotect_500',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '7609e210-80c7-4acc-b7b4-b569f0e5679e',
            legend: 'ch.bafu.aquaprotect_500'
          }
          ,
          // Layer - Flood hazard levels - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_hydroweb_messstationen_gefahren_label'),
            layer: 'ch.bafu.hydroweb-messstationen_gefahren',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '7c64e2fa-1afe-41f4-9f91-ed251079965c',
            legend: 'ch.bafu.hydroweb-messstationen_gefahren'
          }
          ,
          // Layer - Stations hydrological forecasts - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_hydroweb_messstationen_vorhersage_label'),
            layer: 'ch.bafu.hydroweb-messstationen_vorhersage',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '6655ccdb-fb9b-4049-8bf5-4d5a0b3bfe4f',
            legend: 'ch.bafu.hydroweb-messstationen_vorhersage'
          }
          ,
          // Layer - Flood alert map - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_bafu_hydroweb_warnkarte_national_label'),
            layer: 'ch.bafu.hydroweb-warnkarte_national',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'e1d0c17a-0dbd-4455-bc83-1606e1e04298',
            legend: 'ch.bafu.hydroweb-warnkarte_national'
          }
        ]
      }
    ]
  }

const group_08: LayerTreeNode = 
  // Topic - Geotourism, Geology for all
  {
    label: t('grp_1884_label'),
    children: [
      // Topic - Experience Geology
      {
        label: t('grp_1885_label'),
        children: [
          // Layer - Upcoming GeoEvents - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geoevents_demnaechst_label'),
            layer: 'ch.swisstopo.geologie-geoevents_demnaechst',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '64508bcc-8a66-4d90-bb9a-bc83c931b0c6',
            legend: 'ch.swisstopo.geologie-geoevents_demnaechst'
          }
          ,
          // Layer - GeoEvents on request - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geoevents_anfrage_label'),
            layer: 'ch.swisstopo.geologie-geoevents_anfrage',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '6f4fc3a9-8dc0-4cc2-b176-f804e5157dab',
            legend: 'ch.swisstopo.geologie-geoevents_anfrage'
          }
          ,
          // Layer - Geosites - WMS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geosites_label'),
            layer: 'ch.swisstopo.geologie-geosites',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'af46b0e7-25b4-49ca-a357-c0ab6e794dd6',
            legend: 'ch.swisstopo.geologie-geosites'
          }
          ,
          // Layer - Geo-trails - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geowege_label'),
            layer: 'ch.swisstopo.geologie-geowege',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: '3356602e-23d5-4e42-9d75-55fe9cc2daba',
            legend: 'ch.swisstopo.geologie-geowege'
          }
        ]
      }
      ,
      // Topic - Geotopes
      {
        label: t('grp_15079_label'),
        children: [
          // Layer - Geotopes in Switzerland - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geotope_label'),
            layer: 'ch.swisstopo.geologie-geotope',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'e7dd54e9-fc98-4e5c-b46a-694d1ba6c84e',
            legend: 'ch.swisstopo.geologie-geotope'
          }
          ,
          // Layer - Status of cantonal geotopes - WMTS
          {
            type: LayerType.swisstopoWMTS,
            label: t('lyr_ch_swisstopo_geologie_geotope_kantone_stand_label'),
            layer: 'ch.swisstopo.geologie-geotope_kantone_stand',
            maximumLevel: 18,
            visible: false,
            displayed: false,
            opacity: 0.7,
            queryType: 'geoadmin',
            geocatId: 'c4d2c1b0-b075-4d7b-be7c-54d26411cda3',
            legend: 'ch.swisstopo.geologie-geotope_kantone_stand'
          }
        ]
      }
    ]
  }

const group_09: LayerTreeNode = 
  // Topic - Underground space
  {
    label: t('grp_15187_label'),
    children: [
      // Layer - Rock laboratories - WMS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_geologie_felslabore_label'),
        layer: 'ch.swisstopo.geologie-felslabore',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: 'f995a522-62cb-4316-a762-f6a319985ed7',
        legend: 'ch.swisstopo.geologie-felslabore'
      }
      ,
      // Layer - SP Deep Geol. Repositories - WMS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_bfe_sachplan_geologie_tiefenlager_label'),
        layer: 'ch.bfe.sachplan-geologie-tiefenlager',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: '7162f14b-4c16-4ec3-8ac6-b158136e65c7',
        legend: 'ch.bfe.sachplan-geologie-tiefenlager'
      }
    ]
  }

const group_10: LayerTreeNode = 
  // Topic - Background data
  {
    label: t('grp_1890_label'),
    children: [
      // Layer - Journey through time - Maps - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_zeitreihen_label'),
        layer: 'ch.swisstopo.zeitreihen',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: '22287cd6-b75b-4caf-9413-aa3f196548b2',
        legend: 'ch.swisstopo.zeitreihen'
      }
      ,
      // Layer - CadastralWebMap - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_kantone_cadastralwebmap_farbe_label'),
        layer: 'ch.kantone.cadastralwebmap-farbe',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: 'cf93dfb6-ffff-43ce-bd9b-271baba2d217',
        legend: 'ch.kantone.cadastralwebmap-farbe'
      }
      ,
      // Layer - SWISSIMAGE Journey through time - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_swissimage_product_label'),
        layer: 'ch.swisstopo.swissimage-product',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: 'db5a52b4-0f5f-4998-a9a8-dd9539f93809',
        legend: 'ch.swisstopo.swissimage-product'
      }
      ,
      // Layer - swissALTI3D monodirectional hillshade - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_swissalti3d_reliefschattierung_monodirektional_label'),
        layer: 'ch.swisstopo.swissalti3d-reliefschattierung_monodirektional',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: '376f86bd-c46c-4b89-8f36-717641706226',
        legend: 'ch.swisstopo.swissalti3d-reliefschattierung_monodirektional'
      }
      ,
      // Layer - swissALTI3D multidirectional hillshade - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_swissalti3d_reliefschattierung_label'),
        layer: 'ch.swisstopo.swissalti3d-reliefschattierung',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: '1964cc81-5298-460f-9228-41120315bea8',
        legend: 'ch.swisstopo.swissalti3d-reliefschattierung'
      }
      ,
      // Layer - swissBATHY3D Hillshade - WMTS
      {
        type: LayerType.swisstopoWMTS,
        label: t('lyr_ch_swisstopo_swissbathy3d_reliefschattierung_label'),
        layer: 'ch.swisstopo.swissbathy3d-reliefschattierung',
        maximumLevel: 18,
        visible: false,
        displayed: false,
        opacity: 0.7,
        queryType: 'geoadmin',
        geocatId: '81949e93-f552-42b6-ab4b-5a2d529a7768',
        legend: 'ch.swisstopo.swissbathy3d-reliefschattierung'
      }
    ]
  }
