/* ============================================================
   PORTFOLIO CONTENT
   Edit the text between the quotes to change what the site says.
   To add a project: copy one { ... } block inside PROJECTS, paste it
   after the last one (add a comma between blocks), change the text,
   and put its images in the img folder (names must match, .jpg).
   Skill areas only appear on the site once a project uses them.
   ============================================================ */
const AREAS = {
  "spatial-analysis": { name: "Spatial analysis", desc: "Overlay, proximity, raster and network analysis that answers a concrete planning question." },
  "map-production":   { name: "Map production", desc: "Map books, report annexes and posters with consistent layouts, legends and scale." },
  "environmental":    { name: "Environmental assessment", desc: "EIA screening against Natura 2000, protected areas, settlements and water bodies." },
  "climate-risk":     { name: "Climate risk", desc: "Scenario modelling of flooding and sea level rise and its impact on people and assets." },
  "dataviz":          { name: "Data visualisation", desc: "Charts, infographics and posters that make spatial statistics readable." },
  "web-gis":          { name: "Web GIS & dashboards", desc: "Interactive web maps, dashboards and online story maps." },
  "automation":       { name: "Scripting & automation", desc: "Python and SQL workflows that make GIS processing repeatable." }
};

const PROJECTS = [
  {
    id: "eia-road-bulgaria",
    title: "EIA Screening for a Road Reconstruction in Bulgaria",
    kind: "Professional",
    meta: ["Smolyan Province, Bulgaria", "Road III-868 Rudozem–Smolyan"],
    areas: ["spatial-analysis", "map-production", "environmental"],
    summary: "Spatial screening to support the decision on whether the rehabilitation of road III-868 Rudozem–Smolyan (km 0+000 to km 22+012) needs a full Environmental Impact Assessment. I checked the route against protected areas, Natura 2000 sites, settlements and water bodies, and produced the annex maps for the screening documentation.",
    tasks: [
      "Assessed the route's proximity to protected sites designated under the Bulgarian Protected Areas Act.",
      "Assessed overlap and proximity with three Natura 2000 sites: the Trigrad–Mursalitsa SPA (Birds Directive) and the Tsigansko Gradishte and Rodopi–Zapadni SCIs (Habitats Directive).",
      "Identified the sections where the road passes through residential areas.",
      "Identified the surface water and groundwater bodies, and their basins, intersected by the road.",
      "Produced three annex maps for the screening report (location, Natura 2000, protected sites), each with locator inset, legend and project information block."
    ],
    skills: ["Proximity & buffer analysis", "Overlay / intersect", "Natura 2000 screening", "Water body analysis", "Road chainage (km) labelling", "Satellite imagery interpretation", "Report annex layouts"],
    facts: [["Route length", "≈ 22 km"], ["Natura 2000 sites", "3"], ["Map language", "Bulgarian"]],
    groups: [
      { title: "Proximity to protected sites", figs: [
        ["eia-protected-sites-a", "Route of III-868 against a protected site boundary on satellite imagery."],
        ["eia-protected-sites-b", "Protected sites along the route, labelled by name."]
      ]},
      { title: "Natura 2000 protected areas", figs: [
        ["eia-natura2000", "The route against the Trigrad–Mursalitsa SPA and the Tsigansko Gradishte and Rodopi–Zapadni SCIs."],
        ["eia-natura-inset-1", "Detail: where the road meets the Birds Directive site."],
        ["eia-natura-inset-2", "Detail: Habitats Directive site Rodopi–Zapadni."],
        ["eia-natura-inset-3", "Detail: Habitats Directive site Tsigansko Gradishte."]
      ]},
      { title: "Residential areas", note: "Sections where the road runs through settlements.", figs: [
        ["eia-residential", "Full route with settlement sections marked."],
        ["eia-residential-1", "Settlement section, close-up 1."],
        ["eia-residential-2", "Settlement section, close-up 2."],
        ["eia-residential-3", "Settlement section, close-up 3 (switchbacks)."]
      ]},
      { title: "Surface water and groundwater", figs: [
        ["eia-surface-water", "Basins of the surface water bodies intersected by the road."],
        ["eia-groundwater", "Groundwater bodies intersected by the road."]
      ]},
      { title: "Report annex maps", figs: [
        ["eia-annex-1-overview", "Annex 1: location of the project and regional overview."],
        ["eia-annex-2-natura", "Annex 2: location relative to Natura 2000 sites."],
        ["eia-annex-3-protected", "Annex 3: location relative to protected areas."]
      ]}
    ]
  },
  {
    id: "slr-scania",
    title: "Impacts of Sea Level Rise on Scania",
    kind: "University",
    meta: ["Lund University · GISN32", "Scania, Sweden", "May 2026"],
    areas: ["spatial-analysis", "map-production", "climate-risk", "dataviz"],
    summary: "A GIS-based assessment of coastal inundation in Scania, Sweden's most exposed region to sea level rise, under +2 m, +5 m and +10 m scenarios. The results were prepared for the Skåne Committee for Climate Impact Assessment and Mitigation (SCCIAM) as a report, a map book and a poster.",
    tasks: [
      "Reclassified a 1 m DEM at 2, 5 and 10 m thresholds to model inundated surfaces, then converted them to polygons.",
      "Selected affected roads, railroads and lakes by intersection, counting whole segments and whole lakes to reflect loss of integrity and saltwater intrusion.",
      "Measured built-up area and land use (arable, forest, marsh) lost, counting only features fully inside the inundated surface.",
      "Estimated displaced population with a proportional overlay of inundation surfaces and the population grid.",
      "Designed a six-sheet map book, summary tables and a research poster."
    ],
    skills: ["Raster reclassification", "DEM analysis", "Overlay / intersect", "Areal-weighted population estimates", "Multi-scenario map series", "Poster & infographic design", "Scientific report writing"],
    facts: [["Software", "ArcGIS"], ["Reference system", "RT90"], ["Study area", "11,367 km²"]],
    stats: [["1,093 km²", "inundated at +10 m"], ["319K", "people displaced at +10 m"], ["1,003 km", "of roads at risk at +10 m"]],
    poster: { href: "slr-poster.html", label: "Open the full poster" },
    groups: [
      { title: "Research poster", figs: [
        ["slr-poster", "Poster summarising inundated area, infrastructure, land use and displaced population for each scenario."]
      ]},
      { title: "Map book", note: "Six sheets, each comparing the three scenarios.", figs: [
        ["slr-inundation-overview", "Inundated surfaces under 2 m, 5 m and 10 m sea level rise."],
        ["slr-roads", "Affected roads by scenario."],
        ["slr-railroads", "Affected railroads by scenario."],
        ["slr-lakes", "Affected lakes by scenario."],
        ["slr-built-up", "Affected built-up area by scenario."],
        ["slr-land-use", "Affected land use (arable land, forest, marsh) by scenario."]
      ]}
    ]
  }
];
