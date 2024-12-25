import { LocationData } from "../types/location";

export const locationData: { [key: string]: LocationData } = {
  oxford: {
    name: "Oxford",
    county: "Oxfordshire",
    coordinates: {
      latitude: "51.7520",
      longitude: "-1.2577",
    },
    population: "152,450",
    landmarks: [
      "Oxford University",
      "Radcliffe Camera",
      "Bodleian Library",
      "Christ Church Cathedral",
      "Oxford Castle",
    ],
    history:
      "Oxford's architectural heritage spans over 1,000 years, featuring distinctive Norman, Gothic, and Baroque buildings. The city's roofing styles reflect this rich history, with many Grade I and II listed buildings requiring specialist roofing expertise.",
    heritage: {
      listedBuildings: {
        gradeI: [
          "Christ Church Cathedral",
          "Radcliffe Camera",
          "Bodleian Library",
          "Sheldonian Theatre",
          "Tom Tower, Christ Church",
        ],
        gradeII: [
          "Oxford Town Hall",
          "Examination Schools",
          "Rhodes House",
          "Oxford Union Society",
          "Natural History Museum",
        ],
        gradeIIStar: [
          "Ashmolean Museum",
          "Magdalen College Tower",
          "Merton College Chapel",
          "University College Main Quad",
        ],
      },
      conservationAreas: [
        "Central Oxford Conservation Area",
        "Jericho Conservation Area",
        "North Oxford Victorian Suburb Conservation Area",
        "St Clement's and Iffley Road Conservation Area",
      ],
      historicSites: [
        {
          name: "Oxford Castle",
          description: "Norman medieval castle with unique roofing features",
          period: "11th Century",
          roofingFeatures: [
            "Original Norman stone vaulting",
            "Medieval timber roof structure",
            "Lead-covered defensive towers",
            "Restored Victorian slate roofing",
          ],
        },
        {
          name: "Christ Church Cathedral",
          description: "Cathedral church with distinctive spire and roofing",
          period: "12th-16th Century",
          roofingFeatures: [
            "Gothic vaulted ceiling",
            "Lead-covered spire",
            "Original medieval timberwork",
            "Decorative stone pinnacles",
          ],
        },
      ],
    },
    roofingInfo: {
      commonStyles: [
        "Slate roofing",
        "Clay tiles",
        "Lead roofing",
        "Historic conservation roofing",
      ],
      challenges: [
        "Listed building regulations",
        "Conservation area restrictions",
        "Weather exposure",
        "Historic material matching",
      ],
      regulations:
        "Oxford City Council enforces strict planning regulations for roofing work, particularly in conservation areas and on listed buildings. All roofing work must comply with the Oxford Local Plan 2036.",
      materials: {
        traditional: [
          "Welsh slate",
          "Cotswold stone tiles",
          "Lead sheeting",
          "Clay plain tiles",
        ],
        modern: [
          "Synthetic slate",
          "Modern clay tiles",
          "EPDM rubber roofing",
          "Green roof systems",
        ],
        specializedSolutions: [
          "Heritage matching materials",
          "Conservation roof lights",
          "Traditional lime mortar",
          "Period-appropriate guttering",
        ],
      },
      weatherConsiderations: {
        annualRainfall: "650mm average",
        windExposure: "Moderate, with occasional strong winds",
        temperatureRange: "-5°C to 30°C",
        commonIssues: [
          "Rain penetration in historic buildings",
          "Frost damage to tiles",
          "Lead theft risk",
          "Moss growth on north-facing slopes",
        ],
      },
      buildingRegulations: {
        planningRequirements:
          "Full planning permission required for most alterations in conservation areas",
        conservationGuidelines:
          "Strict adherence to historic building practices in the city center",
        energyEfficiencyStandards:
          "Minimum U-value of 0.18 W/m²K for roof renovations",
        heritageRestrictions:
          "Listed building consent required for all external alterations",
      },
    },
    nearbyAreas: [
      "Headington",
      "Cowley",
      "Botley",
      "Wolvercote",
      "Summertown",
      "Marston",
      "Iffley",
    ],
    postalCodes: ["OX1", "OX2", "OX3", "OX4"],
  },
  gloucester: {
    name: "Gloucester",
    county: "Gloucestershire",
    coordinates: {
      latitude: "51.8642",
      longitude: "-2.2380",
    },
    population: "129,285",
    landmarks: [
      "Gloucester Cathedral",
      "Gloucester Docks",
      "Gloucester Quays",
      "Blackfriars Priory",
      "Robinswood Hill Country Park",
    ],
    history:
      "Gloucester's history dates back to Roman times, with medieval and Victorian architecture prominently featured throughout the city.",
    heritage: {
      listedBuildings: {
        gradeI: [
          "Gloucester Cathedral",
          "St Mary de Crypt Church",
          "Blackfriars Priory",
          "St Nicholas Church",
          "The New Inn",
        ],
        gradeII: [
          "Gloucester Docks Warehouses",
          "The Folk Museum",
          "St Michael's Tower",
          "The Dick Whittington Pub",
          "Mariners' Chapel",
        ],
        gradeIIStar: [
          "St Mary de Lode Church",
          "The Old Bell Inn",
          "Parliament Rooms",
          "Llanthony Secunda Priory",
        ],
      },
      conservationAreas: [
        "City Centre Conservation Area",
        "Gloucester Docks Conservation Area",
        "London Road Conservation Area",
        "Denmark Road Conservation Area",
      ],
      historicSites: [
        {
          name: "Gloucester Cathedral",
          description: "Medieval cathedral with exceptional fan vaulting",
          period: "11th-15th Century",
          roofingFeatures: [
            "Fan-vaulted cloisters",
            "Great East Window",
            "Central tower with pinnacles",
            "Medieval timber roof structure",
          ],
        },
        {
          name: "Blackfriars Priory",
          description: "Best-preserved Dominican priory in England",
          period: "13th Century",
          roofingFeatures: [
            "Original medieval roof timbers",
            "Restored slate roofing",
            "Traditional lead guttering",
            "Historic dormitory roof structure",
          ],
        },
      ],
    },
    roofingInfo: {
      commonStyles: [
        "Victorian slate roofing",
        "Traditional clay tiles",
        "Modern flat roofing",
        "Heritage conservation roofing",
      ],
      challenges: [
        "Historic preservation requirements",
        "Coastal weather influence",
        "Industrial area considerations",
        "Period property maintenance",
      ],
      regulations:
        "Gloucester City Council requires planning permission for significant roofing alterations, especially in conservation areas. All work must comply with the Gloucester City Plan and local building regulations.",
      materials: {
        traditional: [
          "Forest of Dean stone",
          "Welsh slate",
          "Handmade clay tiles",
          "Lead flashings",
        ],
        modern: [
          "Concrete tiles",
          "GRP flat roofing",
          "Metal sheet roofing",
          "Solar tiles",
        ],
        specializedSolutions: [
          "Industrial roofing systems",
          "Heritage slate matching",
          "Waterfront-specific materials",
          "Period guttering systems",
        ],
      },
      weatherConsiderations: {
        annualRainfall: "700mm average",
        windExposure: "Moderate to high, especially near docks",
        temperatureRange: "-2°C to 28°C",
        commonIssues: [
          "Industrial pollution effects",
          "Maritime air corrosion",
          "Heavy rainfall management",
          "Wind-driven rain penetration",
        ],
      },
      buildingRegulations: {
        planningRequirements:
          "Strict controls in conservation areas and docklands",
        conservationGuidelines:
          "Special considerations for Victorian and industrial heritage",
        energyEfficiencyStandards:
          "Current building regulations require 0.18 W/m²K U-value",
        heritageRestrictions:
          "Cathedral precinct has specific heritage requirements",
      },
    },
    nearbyAreas: [
      "Barnwood",
      "Longlevens",
      "Hucclecote",
      "Tuffley",
      "Quedgeley",
      "Churchdown",
      "Brockworth",
    ],
    postalCodes: ["GL1", "GL2", "GL3", "GL4"],
  },
  winchester: {
    name: "Winchester",
    county: "Hampshire",
    coordinates: {
      latitude: "51.0632",
      longitude: "-1.3081",
    },
    population: "45,184",
    landmarks: [
      "Winchester Cathedral",
      "Great Hall",
      "Winchester College",
      "City Mill",
      "Wolvesey Castle",
    ],
    history:
      "Winchester, the ancient capital of England, boasts over 2000 years of history.",
    heritage: {
      listedBuildings: {
        gradeI: [
          "Winchester Cathedral",
          "Great Hall",
          "Winchester College",
          "Hospital of St Cross",
          "Wolvesey Castle",
        ],
        gradeII: [
          "City Mill",
          "Guildhall",
          "Peninsula Barracks",
          "Winchester School of Art",
          "Abbey House",
        ],
        gradeIIStar: [
          "St Cross Church",
          "Pilgrim's Hall",
          "Kingsgate",
          "God Begot House",
        ],
      },
      conservationAreas: [
        "Winchester City Conservation Area",
        "St Cross Conservation Area",
        "Hyde Conservation Area",
        "Winnall Conservation Area",
      ],
      historicSites: [
        {
          name: "Winchester Cathedral",
          description: "One of Europe's largest Gothic cathedrals",
          period: "11th-16th Century",
          roofingFeatures: [
            "Medieval timber roof structure",
            "Lead-covered vaults",
            "Norman tower with lead roof",
            "Victorian restoration work",
          ],
        },
        {
          name: "Great Hall",
          description: "Only surviving part of Winchester Castle",
          period: "13th Century",
          roofingFeatures: [
            "Original medieval roof timbers",
            "Double hammer-beam roof",
            "Lead-covered turrets",
            "Traditional slate covering",
          ],
        },
      ],
    },
    roofingInfo: {
      commonStyles: [
        "Traditional slate roofing",
        "Historic tile roofing",
        "Lead work",
        "Conservation roofing",
      ],
      challenges: [
        "Historic preservation requirements",
        "Conservation area restrictions",
        "Heritage material matching",
        "Ancient building considerations",
      ],
      regulations:
        "Winchester City Council has strict conservation guidelines. All roofing work in the historic core must meet heritage preservation standards and local planning requirements.",
      materials: {
        traditional: [
          "Welsh slate",
          "Handmade clay tiles",
          "Lead sheeting",
          "Stone tiles",
        ],
        modern: [
          "Synthetic slate",
          "Modern clay tiles",
          "EPDM rubber roofing",
          "Green roof systems",
        ],
        specializedSolutions: [
          "Heritage matching materials",
          "Conservation roof lights",
          "Traditional lime mortar",
          "Period-appropriate guttering",
        ],
      },
      weatherConsiderations: {
        annualRainfall: "650mm average",
        windExposure: "Moderate, with occasional strong winds",
        temperatureRange: "-5°C to 30°C",
        commonIssues: [
          "Rain penetration in historic buildings",
          "Frost damage to tiles",
          "Lead theft risk",
          "Moss growth on north-facing slopes",
        ],
      },
      buildingRegulations: {
        planningRequirements:
          "Full planning permission required for most alterations in conservation areas",
        conservationGuidelines:
          "Strict adherence to historic building practices in the city center",
        energyEfficiencyStandards:
          "Minimum U-value of 0.18 W/m²K for roof renovations",
        heritageRestrictions:
          "Listed building consent required for all external alterations",
      },
    },
    nearbyAreas: [
      "St Cross",
      "Badger Farm",
      "Weeke",
      "Fulflood",
      "Stanmore",
      "Twyford",
      "Kings Worthy",
    ],
    postalCodes: ["SO21", "SO22", "SO23"],
  },
  swindon: {
    name: "Swindon",
    county: "Wiltshire",
    coordinates: {
      latitude: "51.5558",
      longitude: "-1.7797",
    },
    population: "192,599",
    landmarks: [
      "STEAM Museum",
      "Lydiard Park",
      "Coate Water Country Park",
      "Railway Village",
      "Swindon Designer Outlet",
    ],
    history:
      "Swindon transformed from a small market town into a major railway hub during the Industrial Revolution. This history is reflected in its diverse architecture, from Victorian railway workers' cottages to modern developments.",
    heritage: {
      listedBuildings: {
        gradeI: [
          "GWR Railway Village",
          "St Mark's Church",
          "Christ Church",
          "Lydiard House",
          "Holy Rood Church",
        ],
        gradeII: [
          "STEAM Museum",
          "Railway Works Water Tower",
          "Central Community Centre",
          "Health Hydro",
          "Mechanics' Institute",
        ],
        gradeIIStar: [
          "Railway Village Museum",
          "Pattern Store",
          "Railway Works Drawing Office",
          "St Mary's Church",
        ],
      },
      conservationAreas: [
        "Railway Village Conservation Area",
        "Old Town Conservation Area",
        "Lydiard Park Conservation Area",
        "Wood Street Conservation Area",
      ],
      historicSites: [
        {
          name: "GWR Railway Village",
          description:
            "Victorian railway workers' housing with unique roofing features",
          period: "1841-1842",
          roofingFeatures: [
            "Welsh slate roofing",
            "Original Victorian chimneys",
            "Cast iron guttering",
            "Traditional dormer windows",
          ],
        },
        {
          name: "STEAM Museum",
          description: "Former railway works building",
          period: "1840s",
          roofingFeatures: [
            "Industrial saw-tooth roof",
            "Original timber trusses",
            "Glass roof lights",
            "Cast iron structure",
          ],
        },
      ],
    },
    roofingInfo: {
      commonStyles: [
        "Victorian slate roofing",
        "Modern tile roofing",
        "Industrial flat roofing",
        "Contemporary systems",
      ],
      challenges: [
        "Mix of historic and modern buildings",
        "Industrial area requirements",
        "Urban development considerations",
        "Railway heritage preservation",
      ],
      regulations:
        "Swindon Borough Council has specific guidelines for roofing work in conservation areas and on listed buildings. New developments must comply with the Swindon Local Plan 2036.",
      materials: {
        traditional: [
          "Welsh slate",
          "Clay plain tiles",
          "Stone tiles",
          "Lead work",
        ],
        modern: [
          "Concrete tiles",
          "Single-ply membranes",
          "Metal roofing systems",
          "Composite slate",
        ],
        specializedSolutions: [
          "Industrial roof coatings",
          "Heritage matching materials",
          "Green roof systems",
          "Solar panel integration",
        ],
      },
      weatherConsiderations: {
        annualRainfall: "750mm average",
        windExposure: "Moderate, exposed on hills",
        temperatureRange: "-3°C to 29°C",
        commonIssues: [
          "Industrial area exposure",
          "Urban heat island effect",
          "Storm water management",
          "Thermal movement in large structures",
        ],
      },
      buildingRegulations: {
        planningRequirements:
          "Specific requirements for Railway Village conservation area",
        conservationGuidelines:
          "Heritage considerations for Victorian buildings",
        energyEfficiencyStandards:
          "Modern developments must meet BREEAM standards",
        heritageRestrictions:
          "Listed building consent required in historic areas",
      },
    },
    nearbyAreas: [
      "Old Town",
      "West Swindon",
      "North Swindon",
      "Stratton",
      "Wroughton",
      "Highworth",
      "Royal Wootton Bassett",
    ],
    postalCodes: ["SN1", "SN2", "SN3", "SN4", "SN5", "SN6"],
  },
  reading: {
    name: "Reading",
    county: "Berkshire",
    coordinates: {
      latitude: "51.4543",
      longitude: "-0.9781",
    },
    population: "344,810",
    landmarks: [
      "Reading Abbey",
      "Forbury Gardens",
      "Reading Station",
      "Madejski Stadium",
      "Reading Museum",
    ],
    history:
      "Reading's history spans from its medieval abbey to its role as a major commercial center.",
    heritage: {
      listedBuildings: {
        gradeI: [
          "Reading Abbey Ruins",
          "St Laurence's Church",
          "Reading Minster",
          "Greyfriars Church",
          "St Mary's Chapel",
        ],
        gradeII: [
          "Reading Town Hall",
          "Market House",
          "Great Western House",
          "Reading Station",
          "Concert Hall",
        ],
        gradeIIStar: [
          "Forbury Gardens",
          "St Mary's Church House",
          "Reading School",
          "The Maiwand Lion",
        ],
      },
      conservationAreas: [
        "Market Place/London Street Conservation Area",
        "St Mary's Butts/Castle Street Conservation Area",
        "Russell Street/Castle Hill Conservation Area",
        "Kendrick Conservation Area",
      ],
      historicSites: [
        {
          name: "Reading Abbey",
          description:
            "Medieval abbey ruins with significant architectural features",
          period: "12th Century",
          roofingFeatures: [
            "Original vaulted ceilings",
            "Medieval stone work",
            "Historic roof line evidence",
            "Conservation roofing techniques",
          ],
        },
        {
          name: "Reading Town Hall",
          description: "Victorian Gothic municipal building",
          period: "1875",
          roofingFeatures: [
            "Slate roof with decorative ridge tiles",
            "Original Victorian chimneys",
            "Lead flashings and gutters",
            "Ornamental roof features",
          ],
        },
      ],
    },
    roofingInfo: {
      commonStyles: [
        "Modern tile roofing",
        "Commercial flat roofing",
        "Heritage slate roofing",
        "Contemporary systems",
      ],
      challenges: [
        "Urban development requirements",
        "Historic building preservation",
        "Commercial property standards",
        "Mixed-use building considerations",
      ],
      regulations:
        "Reading Borough Council maintains strict planning controls, particularly for conservation areas and listed buildings. All roofing work must comply with the Reading Local Plan.",
      materials: {
        traditional: [
          "Welsh slate",
          "Clay plain tiles",
          "Handmade clay tiles",
          "Lead work",
        ],
        modern: [
          "Concrete tiles",
          "Single-ply membranes",
          "Metal roofing systems",
          "Green roof systems",
        ],
        specializedSolutions: [
          "Commercial roof coatings",
          "Heritage matching materials",
          "Solar panel integration",
          "Roof-mounted plant systems",
        ],
      },
      weatherConsiderations: {
        annualRainfall: "600mm average",
        windExposure: "Moderate, with occasional strong winds",
        temperatureRange: "-4°C to 28°C",
        commonIssues: [
          "Urban heat island effect",
          "Storm water management",
          "Thermal movement in large structures",
          "Roof-mounted equipment maintenance",
        ],
      },
      buildingRegulations: {
        planningRequirements:
          "Specific requirements for town center conservation area",
        conservationGuidelines:
          "Heritage considerations for medieval and Victorian buildings",
        energyEfficiencyStandards:
          "Modern developments must meet BREEAM standards",
        heritageRestrictions:
          "Listed building consent required in historic areas",
      },
    },
    nearbyAreas: [
      "Caversham",
      "Woodley",
      "Tilehurst",
      "Earley",
      "Whitley",
      "Calcot",
      "Lower Earley",
    ],
    postalCodes: ["RG1", "RG2", "RG4", "RG6", "RG30", "RG31"],
  },
  guildford: {
    name: "Guildford",
    county: "Surrey",
    coordinates: {
      latitude: "51.2362",
      longitude: "-0.5704",
    },
    population: "77,057",
    landmarks: [
      "Guildford Cathedral",
      "Guildford Castle",
      "High Street",
      "Guildhall",
      "University of Surrey",
    ],
    history:
      "Guildford's rich history dates from Saxon times, with significant medieval and Tudor architecture. The town's development through the ages is reflected in its diverse roofing styles and requirements.",
    heritage: {
      listedBuildings: {
        gradeI: [
          "Guildford Cathedral",
          "Guildford Castle",
          "Holy Trinity Church",
          "St Mary's Church",
          "The Guildhall",
        ],
        gradeII: [
          "Guildford Town Hall",
          "The Angel Hotel",
          "The White Horse",
          "The George Abbot",
          "Guildford Museum",
        ],
        gradeIIStar: [
          "St Nicholas Church",
          "The Castle Arch",
          "The Old Grammar School",
          "The Guildford Institute",
        ],
      },
      conservationAreas: [
        "Guildford Town Centre Conservation Area",
        "St Mary's Conservation Area",
        "Chertsey Street Conservation Area",
        "Woodbridge Road Conservation Area",
      ],
      historicSites: [
        {
          name: "Guildford Castle",
          description: "Medieval castle with unique architectural features",
          period: "11th Century",
          roofingFeatures: [
            "Original medieval stone work",
            "Medieval timber roof structure",
            "Lead-covered towers",
            "Traditional slate roofing",
          ],
        },
        {
          name: "Guildford Cathedral",
          description: "20th-century cathedral with striking architecture",
          period: "1936-1961",
          roofingFeatures: [
            "Reinforced concrete structure",
            "Copper roofing",
            "Stained glass windows",
            "Modern roof design",
          ],
        },
      ],
    },
    roofingInfo: {
      commonStyles: [
        "Clay tile roofing",
        "Slate roofing",
        "Modern flat roofing",
        "Period property roofing",
      ],
      challenges: [
        "Historic building requirements",
        "Modern development standards",
        "Conservation area guidelines",
        "University property maintenance",
      ],
      regulations:
        "Guildford Borough Council enforces strict planning controls in conservation areas and for listed buildings. All roofing work must comply with the Guildford Local Plan.",
      materials: {
        traditional: [
          "Welsh slate",
          "Handmade clay tiles",
          "Lead sheeting",
          "Stone tiles",
        ],
        modern: [
          "Concrete tiles",
          "GRP flat roofing",
          "Metal sheet roofing",
          "Solar tiles",
        ],
        specializedSolutions: [
          "Heritage matching materials",
          "Conservation roof lights",
          "Traditional lime mortar",
          "Period-appropriate guttering",
        ],
      },
      weatherConsiderations: {
        annualRainfall: "600mm average",
        windExposure: "Moderate, with occasional strong winds",
        temperatureRange: "-4°C to 28°C",
        commonIssues: [
          "Rain penetration in historic buildings",
          "Frost damage to tiles",
          "Lead theft risk",
          "Moss growth on north-facing slopes",
        ],
      },
      buildingRegulations: {
        planningRequirements:
          "Full planning permission required for most alterations in conservation areas",
        conservationGuidelines:
          "Strict adherence to historic building practices in the town center",
        energyEfficiencyStandards:
          "Minimum U-value of 0.18 W/m²K for roof renovations",
        heritageRestrictions:
          "Listed building consent required for all external alterations",
      },
    },
    nearbyAreas: [
      "Merrow",
      "Burpham",
      "Onslow Village",
      "Stoughton",
      "Woodbridge",
      "Shalford",
      "Worplesdon",
    ],
    postalCodes: ["GU1", "GU2", "GU3", "GU4"],
  },
  aylesbury: {
    name: "Aylesbury",
    county: "Buckinghamshire",
    coordinates: {
      latitude: "51.8156",
      longitude: "-0.8125",
    },
    population: "71,977",
    landmarks: [
      "Waddesdon Manor",
      "Aylesbury Waterside Theatre",
      "County Museum",
      "Market Square",
      "Roald Dahl Children's Gallery",
    ],
    history:
      "Aylesbury's history spans from its medieval market town origins to its modern role as the county town of Buckinghamshire. Its architecture reflects various periods of growth and development.",
    heritage: {
      listedBuildings: {
        gradeI: [
          "St Mary's Church",
          "County Hall",
          "The King's Head Inn",
          "Prebendal House",
          "The Old County Hall",
        ],
        gradeII: [
          "Market Square Buildings",
          "Ceely House",
          "The Queens Park Arts Centre",
          "Walton Street Chapel",
          "The Old Town Hall",
        ],
        gradeIIStar: [
          "The Clock Tower",
          "Temple Square Houses",
          "The Judge's Lodgings",
          "Ardenham House",
        ],
      },
      conservationAreas: [
        "Aylesbury Town Centre Conservation Area",
        "Walton Conservation Area",
        "Hartwell Conservation Area",
        "Stone Conservation Area",
      ],
      historicSites: [
        {
          name: "St Mary's Church",
          description: "Medieval parish church with distinctive spire",
          period: "13th-15th Century",
          roofingFeatures: [
            "Lead-covered spire",
            "Medieval timber roof structure",
            "Original stone vaulting",
            "Traditional slate roofing",
          ],
        },
        {
          name: "The King's Head Inn",
          description: "15th-century coaching inn",
          period: "15th Century",
          roofingFeatures: [
            "Crown post roof structure",
            "Original medieval timbers",
            "Traditional clay tiles",
            "Historic chimneys",
          ],
        },
      ],
    },
    roofingInfo: {
      commonStyles: [
        "Traditional tile roofing",
        "Modern slate roofing",
        "Contemporary systems",
        "Period property roofing",
      ],
      challenges: [
        "Mixed architectural styles",
        "Modern development requirements",
        "Historic preservation",
        "Urban expansion considerations",
      ],
      regulations:
        "Aylesbury Vale District Council requires planning permission for significant roofing alterations, particularly in conservation areas and for listed buildings.",
      materials: {
        traditional: [
          "Welsh slate",
          "Handmade clay tiles",
          "Lead sheeting",
          "Stone tiles",
        ],
        modern: [
          "Concrete tiles",
          "Single-ply membranes",
          "Metal roofing systems",
          "Green roof systems",
        ],
        specializedSolutions: [
          "Heritage matching materials",
          "Conservation roof lights",
          "Traditional lime mortar",
          "Period-appropriate guttering",
        ],
      },
      weatherConsiderations: {
        annualRainfall: "550mm average",
        windExposure: "Moderate, with occasional strong winds",
        temperatureRange: "-4°C to 28°C",
        commonIssues: [
          "Rain penetration in historic buildings",
          "Frost damage to tiles",
          "Lead theft risk",
          "Moss growth on north-facing slopes",
        ],
      },
      buildingRegulations: {
        planningRequirements:
          "Full planning permission required for most alterations in conservation areas",
        conservationGuidelines:
          "Strict adherence to historic building practices in the town center",
        energyEfficiencyStandards:
          "Minimum U-value of 0.18 W/m²K for roof renovations",
        heritageRestrictions:
          "Listed building consent required for all external alterations",
      },
    },
    nearbyAreas: [
      "Bedgrove",
      "Watermead",
      "Fairford Leys",
      "Haydon Hill",
      "Stoke Mandeville",
      "Bierton",
      "Wendover",
    ],
    postalCodes: ["HP19", "HP20", "HP21", "HP22"],
  },
  chichester: {
    name: "Chichester",
    county: "West Sussex",
    coordinates: {
      latitude: "50.8365",
      longitude: "-0.7792",
    },
    population: "26,795",
    landmarks: [
      "Chichester Cathedral",
      "Chichester Cross",
      "Pallant House Gallery",
      "Roman Walls",
      "Fishbourne Roman Palace",
    ],
    history:
      "Chichester's history dates back to Roman times, with well-preserved medieval city walls and Georgian architecture. The city's roofing requirements reflect its historic character and coastal location.",
    heritage: {
      listedBuildings: {
        gradeI: [
          "Chichester Cathedral",
          "The Market Cross",
          "St Mary's Hospital",
          "The Guildhall",
          "Bishop's Palace",
        ],
        gradeII: [
          "Council House",
          "Pallant House",
          "St John's Chapel",
          "The Ship Hotel",
          "Theatre Royal",
        ],
        gradeIIStar: [
          "St Olave's Church",
          "Vicars' Hall",
          "The Council House",
          "Dolphin & Anchor Hotel",
        ],
      },
      conservationAreas: [
        "Chichester City Centre Conservation Area",
        "Summersdale Conservation Area",
        "Westgate Conservation Area",
        "St Pancras Conservation Area",
      ],
      historicSites: [
        {
          name: "Chichester Cathedral",
          description: "Norman and Gothic cathedral with unique spire",
          period: "11th-14th Century",
          roofingFeatures: [
            "Lead-covered spire",
            "Medieval timber roof",
            "Flying buttresses",
            "Vaulted ceilings",
          ],
        },
        {
          name: "Bishop's Palace",
          description: "Medieval palace with Georgian additions",
          period: "12th-18th Century",
          roofingFeatures: [
            "Traditional slate roofing",
            "Lead guttering",
            "Period chimneys",
            "Historic dormers",
          ],
        },
      ],
    },
    roofingInfo: {
      commonStyles: [
        "Traditional slate roofing",
        "Clay tile roofing",
        "Heritage roofing",
        "Coastal-resistant systems",
      ],
      challenges: [
        "Coastal weather conditions",
        "Historic preservation",
        "Conservation area requirements",
        "Roman heritage considerations",
      ],
      regulations:
        "Chichester District Council maintains strict planning controls for the historic city center and conservation areas. All roofing work must meet local heritage guidelines.",
      materials: {
        traditional: [
          "Welsh slate",
          "Handmade clay tiles",
          "Lead sheeting",
          "Stone tiles",
        ],
        modern: [
          "Synthetic slate",
          "Modern clay tiles",
          "EPDM rubber roofing",
          "Green roof systems",
        ],
        specializedSolutions: [
          "Heritage matching materials",
          "Conservation roof lights",
          "Traditional lime mortar",
          "Period-appropriate guttering",
        ],
      },
      weatherConsiderations: {
        annualRainfall: "600mm average",
        windExposure: "Moderate to high, especially near coast",
        temperatureRange: "-4°C to 28°C",
        commonIssues: [
          "Rain penetration in historic buildings",
          "Frost damage to tiles",
          "Lead theft risk",
          "Moss growth on north-facing slopes",
        ],
      },
      buildingRegulations: {
        planningRequirements:
          "Full planning permission required for most alterations in conservation areas",
        conservationGuidelines:
          "Strict adherence to historic building practices in the city center",
        energyEfficiencyStandards:
          "Minimum U-value of 0.18 W/m²K for roof renovations",
        heritageRestrictions:
          "Listed building consent required for all external alterations",
      },
    },
    nearbyAreas: [
      "Fishbourne",
      "Stockbridge",
      "Whyke",
      "Summersdale",
      "Donnington",
      "Bognor Regis",
      "Selsey",
    ],
    postalCodes: ["PO19", "PO20"],
  },
};
