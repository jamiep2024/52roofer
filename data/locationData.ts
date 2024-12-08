import { LocationData } from '../types/location';

export const locationData: { [key: string]: LocationData } = {
  oxford: {
    name: "Oxford",
    county: "Oxfordshire",
    coordinates: {
      latitude: "51.7520",
      longitude: "-1.2577"
    },
    population: "152,450",
    landmarks: [
      "Oxford University",
      "Radcliffe Camera",
      "Bodleian Library",
      "Christ Church Cathedral",
      "Oxford Castle"
    ],
    history: "Oxford's architectural heritage spans over 1,000 years, featuring distinctive Norman, Gothic, and Baroque buildings. The city's roofing styles reflect this rich history, with many Grade I and II listed buildings requiring specialist roofing expertise.",
    roofingInfo: {
      commonStyles: [
        "Slate roofing",
        "Clay tiles",
        "Lead roofing",
        "Historic conservation roofing"
      ],
      challenges: [
        "Listed building regulations",
        "Conservation area restrictions",
        "Weather exposure",
        "Historic material matching"
      ],
      regulations: "Oxford City Council enforces strict planning regulations for roofing work, particularly in conservation areas and on listed buildings. All roofing work must comply with the Oxford Local Plan 2036.",
      materials: {
        traditional: [
          "Welsh slate",
          "Cotswold stone tiles",
          "Lead sheeting",
          "Clay plain tiles"
        ],
        modern: [
          "Synthetic slate",
          "Modern clay tiles",
          "EPDM rubber roofing",
          "Green roof systems"
        ],
        specializedSolutions: [
          "Heritage matching materials",
          "Conservation roof lights",
          "Traditional lime mortar",
          "Period-appropriate guttering"
        ]
      },
      weatherConsiderations: {
        annualRainfall: "650mm average",
        windExposure: "Moderate, with occasional strong winds",
        temperatureRange: "-5°C to 30°C",
        commonIssues: [
          "Rain penetration in historic buildings",
          "Frost damage to tiles",
          "Lead theft risk",
          "Moss growth on north-facing slopes"
        ]
      },
      buildingRegulations: {
        planningRequirements: "Full planning permission required for most alterations in conservation areas",
        conservationGuidelines: "Strict adherence to historic building practices in the city center",
        energyEfficiencyStandards: "Minimum U-value of 0.18 W/m²K for roof renovations",
        heritageRestrictions: "Listed building consent required for all external alterations"
      }
    },
    nearbyAreas: [
      "Headington",
      "Cowley",
      "Botley",
      "Wolvercote",
      "Summertown",
      "Marston",
      "Iffley"
    ],
    postalCodes: ["OX1", "OX2", "OX3", "OX4"]
  },
  gloucester: {
    name: "Gloucester",
    county: "Gloucestershire",
    coordinates: {
      latitude: "51.8642",
      longitude: "-2.2380"
    },
    population: "129,285",
    landmarks: [
      "Gloucester Cathedral",
      "Gloucester Docks",
      "Gloucester Quays",
      "Blackfriars Priory",
      "Robinswood Hill Country Park"
    ],
    history: "Gloucester's history dates back to Roman times, with medieval and Victorian architecture prominently featured throughout the city. The city's roofing reflects its maritime and industrial heritage, combined with historic preservation requirements.",
    roofingInfo: {
      commonStyles: [
        "Victorian slate roofing",
        "Traditional clay tiles",
        "Modern flat roofing",
        "Heritage conservation roofing"
      ],
      challenges: [
        "Historic preservation requirements",
        "Coastal weather influence",
        "Industrial area considerations",
        "Period property maintenance"
      ],
      regulations: "Gloucester City Council requires planning permission for significant roofing alterations, especially in conservation areas. All work must comply with the Gloucester City Plan and local building regulations.",
      materials: {
        traditional: [
          "Forest of Dean stone",
          "Welsh slate",
          "Handmade clay tiles",
          "Lead flashings"
        ],
        modern: [
          "Concrete tiles",
          "GRP flat roofing",
          "Metal sheet roofing",
          "Solar tiles"
        ],
        specializedSolutions: [
          "Industrial roofing systems",
          "Heritage slate matching",
          "Waterfront-specific materials",
          "Period guttering systems"
        ]
      },
      weatherConsiderations: {
        annualRainfall: "700mm average",
        windExposure: "Moderate to high, especially near docks",
        temperatureRange: "-2°C to 28°C",
        commonIssues: [
          "Industrial pollution effects",
          "Maritime air corrosion",
          "Heavy rainfall management",
          "Wind-driven rain penetration"
        ]
      },
      buildingRegulations: {
        planningRequirements: "Strict controls in conservation areas and docklands",
        conservationGuidelines: "Special considerations for Victorian and industrial heritage",
        energyEfficiencyStandards: "Current building regulations require 0.18 W/m²K U-value",
        heritageRestrictions: "Cathedral precinct has specific heritage requirements"
      }
    },
    nearbyAreas: [
      "Barnwood",
      "Longlevens",
      "Hucclecote",
      "Tuffley",
      "Quedgeley",
      "Churchdown",
      "Brockworth"
    ],
    postalCodes: ["GL1", "GL2", "GL3", "GL4"]
  },
  swindon: {
    name: "Swindon",
    county: "Wiltshire",
    coordinates: {
      latitude: "51.5558",
      longitude: "-1.7797"
    },
    population: "192,599",
    landmarks: [
      "STEAM Museum",
      "Lydiard Park",
      "Coate Water Country Park",
      "Railway Village",
      "Swindon Designer Outlet"
    ],
    history: "Swindon transformed from a small market town into a major railway hub during the Industrial Revolution. This history is reflected in its diverse architecture, from Victorian railway workers' cottages to modern developments.",
    roofingInfo: {
      commonStyles: [
        "Victorian slate roofing",
        "Modern tile roofing",
        "Industrial flat roofing",
        "Contemporary systems"
      ],
      challenges: [
        "Mix of historic and modern buildings",
        "Industrial area requirements",
        "Urban development considerations",
        "Railway heritage preservation"
      ],
      regulations: "Swindon Borough Council has specific guidelines for roofing work in conservation areas and on listed buildings. New developments must comply with the Swindon Local Plan 2036.",
      materials: {
        traditional: [
          "Welsh slate",
          "Clay plain tiles",
          "Stone tiles",
          "Lead work"
        ],
        modern: [
          "Concrete tiles",
          "Single-ply membranes",
          "Metal roofing systems",
          "Composite slate"
        ],
        specializedSolutions: [
          "Industrial roof coatings",
          "Heritage matching materials",
          "Green roof systems",
          "Solar panel integration"
        ]
      },
      weatherConsiderations: {
        annualRainfall: "750mm average",
        windExposure: "Moderate, exposed on hills",
        temperatureRange: "-3°C to 29°C",
        commonIssues: [
          "Industrial area exposure",
          "Urban heat island effect",
          "Storm water management",
          "Thermal movement in large structures"
        ]
      },
      buildingRegulations: {
        planningRequirements: "Specific requirements for Railway Village conservation area",
        conservationGuidelines: "Heritage considerations for Victorian buildings",
        energyEfficiencyStandards: "Modern developments must meet BREEAM standards",
        heritageRestrictions: "Listed building consent required in historic areas"
      }
    },
    nearbyAreas: [
      "Old Town",
      "West Swindon",
      "North Swindon",
      "Stratton",
      "Wroughton",
      "Highworth",
      "Royal Wootton Bassett"
    ],
    postalCodes: ["SN1", "SN2", "SN3", "SN4", "SN5", "SN6"]
  },
  reading: {
    name: "Reading",
    county: "Berkshire",
    coordinates: {
      latitude: "51.4543",
      longitude: "-0.9781"
    },
    population: "344,810",
    landmarks: [
      "Reading Abbey",
      "Forbury Gardens",
      "Reading Station",
      "Madejski Stadium",
      "Reading Museum"
    ],
    history: "Reading's history spans from its medieval abbey to its role as a major commercial center. The town's architecture reflects its evolution, featuring medieval, Victorian, and modern buildings requiring diverse roofing approaches.",
    roofingInfo: {
      commonStyles: [
        "Modern tile roofing",
        "Commercial flat roofing",
        "Heritage slate roofing",
        "Contemporary systems"
      ],
      challenges: [
        "Urban development requirements",
        "Historic building preservation",
        "Commercial property standards",
        "Mixed-use building considerations"
      ],
      regulations: "Reading Borough Council maintains strict planning controls, particularly for conservation areas and listed buildings. All roofing work must comply with the Reading Local Plan.",
      materials: {
        traditional: [
          "Welsh slate",
          "Clay plain tiles",
          "Handmade clay tiles",
          "Lead work"
        ],
        modern: [
          "Concrete tiles",
          "Single-ply membranes",
          "Metal roofing systems",
          "Green roof systems"
        ],
        specializedSolutions: [
          "Commercial roof coatings",
          "Heritage matching materials",
          "Solar panel integration",
          "Roof-mounted plant systems"
        ]
      },
      weatherConsiderations: {
        annualRainfall: "600mm average",
        windExposure: "Moderate, with occasional strong winds",
        temperatureRange: "-4°C to 28°C",
        commonIssues: [
          "Urban heat island effect",
          "Storm water management",
          "Thermal movement in large structures",
          "Roof-mounted equipment maintenance"
        ]
      },
      buildingRegulations: {
        planningRequirements: "Specific requirements for town center conservation area",
        conservationGuidelines: "Heritage considerations for medieval and Victorian buildings",
        energyEfficiencyStandards: "Modern developments must meet BREEAM standards",
        heritageRestrictions: "Listed building consent required in historic areas"
      }
    },
    nearbyAreas: [
      "Caversham",
      "Woodley",
      "Tilehurst",
      "Earley",
      "Whitley",
      "Calcot",
      "Lower Earley"
    ],
    postalCodes: ["RG1", "RG2", "RG4", "RG6", "RG30", "RG31"]
  },
  winchester: {
    name: "Winchester",
    county: "Hampshire",
    coordinates: {
      latitude: "51.0632",
      longitude: "-1.3081"
    },
    population: "45,184",
    landmarks: [
      "Winchester Cathedral",
      "Great Hall",
      "Winchester College",
      "City Mill",
      "Wolvesey Castle"
    ],
    history: "Winchester, the ancient capital of England, boasts over 2000 years of history. Its architectural heritage includes Roman, Medieval, Georgian, and Victorian buildings, requiring specialized roofing expertise.",
    roofingInfo: {
      commonStyles: [
        "Traditional slate roofing",
        "Historic tile roofing",
        "Lead work",
        "Conservation roofing"
      ],
      challenges: [
        "Historic preservation requirements",
        "Conservation area restrictions",
        "Heritage material matching",
        "Ancient building considerations"
      ],
      regulations: "Winchester City Council has strict conservation guidelines. All roofing work in the historic core must meet heritage preservation standards and local planning requirements.",
      materials: {
        traditional: [
          "Welsh slate",
          "Handmade clay tiles",
          "Lead sheeting",
          "Stone tiles"
        ],
        modern: [
          "Synthetic slate",
          "Modern clay tiles",
          "EPDM rubber roofing",
          "Green roof systems"
        ],
        specializedSolutions: [
          "Heritage matching materials",
          "Conservation roof lights",
          "Traditional lime mortar",
          "Period-appropriate guttering"
        ]
      },
      weatherConsiderations: {
        annualRainfall: "650mm average",
        windExposure: "Moderate, with occasional strong winds",
        temperatureRange: "-5°C to 30°C",
        commonIssues: [
          "Rain penetration in historic buildings",
          "Frost damage to tiles",
          "Lead theft risk",
          "Moss growth on north-facing slopes"
        ]
      },
      buildingRegulations: {
        planningRequirements: "Full planning permission required for most alterations in conservation areas",
        conservationGuidelines: "Strict adherence to historic building practices in the city center",
        energyEfficiencyStandards: "Minimum U-value of 0.18 W/m²K for roof renovations",
        heritageRestrictions: "Listed building consent required for all external alterations"
      }
    },
    nearbyAreas: [
      "St Cross",
      "Badger Farm",
      "Weeke",
      "Fulflood",
      "Stanmore",
      "Twyford",
      "Kings Worthy"
    ],
    postalCodes: ["SO21", "SO22", "SO23"]
  },
  guildford: {
    name: "Guildford",
    county: "Surrey",
    coordinates: {
      latitude: "51.2362",
      longitude: "-0.5704"
    },
    population: "77,057",
    landmarks: [
      "Guildford Cathedral",
      "Guildford Castle",
      "High Street",
      "Guildhall",
      "University of Surrey"
    ],
    history: "Guildford's rich history dates from Saxon times, with significant medieval and Tudor architecture. The town's development through the ages is reflected in its diverse roofing styles and requirements.",
    roofingInfo: {
      commonStyles: [
        "Clay tile roofing",
        "Slate roofing",
        "Modern flat roofing",
        "Period property roofing"
      ],
      challenges: [
        "Historic building requirements",
        "Modern development standards",
        "Conservation area guidelines",
        "University property maintenance"
      ],
      regulations: "Guildford Borough Council enforces strict planning controls in conservation areas and for listed buildings. All roofing work must comply with the Guildford Local Plan.",
      materials: {
        traditional: [
          "Welsh slate",
          "Handmade clay tiles",
          "Lead sheeting",
          "Stone tiles"
        ],
        modern: [
          "Concrete tiles",
          "GRP flat roofing",
          "Metal sheet roofing",
          "Solar tiles"
        ],
        specializedSolutions: [
          "Heritage matching materials",
          "Conservation roof lights",
          "Traditional lime mortar",
          "Period-appropriate guttering"
        ]
      },
      weatherConsiderations: {
        annualRainfall: "600mm average",
        windExposure: "Moderate, with occasional strong winds",
        temperatureRange: "-4°C to 28°C",
        commonIssues: [
          "Rain penetration in historic buildings",
          "Frost damage to tiles",
          "Lead theft risk",
          "Moss growth on north-facing slopes"
        ]
      },
      buildingRegulations: {
        planningRequirements: "Full planning permission required for most alterations in conservation areas",
        conservationGuidelines: "Strict adherence to historic building practices in the town center",
        energyEfficiencyStandards: "Minimum U-value of 0.18 W/m²K for roof renovations",
        heritageRestrictions: "Listed building consent required for all external alterations"
      }
    },
    nearbyAreas: [
      "Merrow",
      "Burpham",
      "Onslow Village",
      "Stoughton",
      "Woodbridge",
      "Shalford",
      "Worplesdon"
    ],
    postalCodes: ["GU1", "GU2", "GU3", "GU4"]
  },
  aylesbury: {
    name: "Aylesbury",
    county: "Buckinghamshire",
    coordinates: {
      latitude: "51.8156",
      longitude: "-0.8125"
    },
    population: "71,977",
    landmarks: [
      "Waddesdon Manor",
      "Aylesbury Waterside Theatre",
      "County Museum",
      "Market Square",
      "Roald Dahl Children's Gallery"
    ],
    history: "Aylesbury's history spans from its medieval market town origins to its modern role as the county town of Buckinghamshire. Its architecture reflects various periods of growth and development.",
    roofingInfo: {
      commonStyles: [
        "Traditional tile roofing",
        "Modern slate roofing",
        "Contemporary systems",
        "Period property roofing"
      ],
      challenges: [
        "Mixed architectural styles",
        "Modern development requirements",
        "Historic preservation",
        "Urban expansion considerations"
      ],
      regulations: "Aylesbury Vale District Council requires planning permission for significant roofing alterations, particularly in conservation areas and for listed buildings.",
      materials: {
        traditional: [
          "Welsh slate",
          "Handmade clay tiles",
          "Lead sheeting",
          "Stone tiles"
        ],
        modern: [
          "Concrete tiles",
          "Single-ply membranes",
          "Metal roofing systems",
          "Green roof systems"
        ],
        specializedSolutions: [
          "Heritage matching materials",
          "Conservation roof lights",
          "Traditional lime mortar",
          "Period-appropriate guttering"
        ]
      },
      weatherConsiderations: {
        annualRainfall: "550mm average",
        windExposure: "Moderate, with occasional strong winds",
        temperatureRange: "-4°C to 28°C",
        commonIssues: [
          "Rain penetration in historic buildings",
          "Frost damage to tiles",
          "Lead theft risk",
          "Moss growth on north-facing slopes"
        ]
      },
      buildingRegulations: {
        planningRequirements: "Full planning permission required for most alterations in conservation areas",
        conservationGuidelines: "Strict adherence to historic building practices in the town center",
        energyEfficiencyStandards: "Minimum U-value of 0.18 W/m²K for roof renovations",
        heritageRestrictions: "Listed building consent required for all external alterations"
      }
    },
    nearbyAreas: [
      "Bedgrove",
      "Watermead",
      "Fairford Leys",
      "Haydon Hill",
      "Stoke Mandeville",
      "Bierton",
      "Wendover"
    ],
    postalCodes: ["HP19", "HP20", "HP21", "HP22"]
  },
  chichester: {
    name: "Chichester",
    county: "West Sussex",
    coordinates: {
      latitude: "50.8365",
      longitude: "-0.7792"
    },
    population: "26,795",
    landmarks: [
      "Chichester Cathedral",
      "Chichester Cross",
      "Pallant House Gallery",
      "Roman Walls",
      "Fishbourne Roman Palace"
    ],
    history: "Chichester's history dates back to Roman times, with well-preserved medieval city walls and Georgian architecture. The city's roofing requirements reflect its historic character and coastal location.",
    roofingInfo: {
      commonStyles: [
        "Traditional slate roofing",
        "Clay tile roofing",
        "Heritage roofing",
        "Coastal-resistant systems"
      ],
      challenges: [
        "Coastal weather conditions",
        "Historic preservation",
        "Conservation area requirements",
        "Roman heritage considerations"
      ],
      regulations: "Chichester District Council maintains strict planning controls for the historic city center and conservation areas. All roofing work must meet local heritage guidelines.",
      materials: {
        traditional: [
          "Welsh slate",
          "Handmade clay tiles",
          "Lead sheeting",
          "Stone tiles"
        ],
        modern: [
          "Synthetic slate",
          "Modern clay tiles",
          "EPDM rubber roofing",
          "Green roof systems"
        ],
        specializedSolutions: [
          "Heritage matching materials",
          "Conservation roof lights",
          "Traditional lime mortar",
          "Period-appropriate guttering"
        ]
      },
      weatherConsiderations: {
        annualRainfall: "600mm average",
        windExposure: "Moderate to high, especially near coast",
        temperatureRange: "-4°C to 28°C",
        commonIssues: [
          "Rain penetration in historic buildings",
          "Frost damage to tiles",
          "Lead theft risk",
          "Moss growth on north-facing slopes"
        ]
      },
      buildingRegulations: {
        planningRequirements: "Full planning permission required for most alterations in conservation areas",
        conservationGuidelines: "Strict adherence to historic building practices in the city center",
        energyEfficiencyStandards: "Minimum U-value of 0.18 W/m²K for roof renovations",
        heritageRestrictions: "Listed building consent required for all external alterations"
      }
    },
    nearbyAreas: [
      "Fishbourne",
      "Stockbridge",
      "Whyke",
      "Summersdale",
      "Donnington",
      "Bognor Regis",
      "Selsey"
    ],
    postalCodes: ["PO19", "PO20"]
  }
};
