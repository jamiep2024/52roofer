import { LocationData } from '../types/location';

export const locationData: { [key: string]: LocationData } = {
  surrey: {
    name: "Surrey",
    county: "Surrey",
    coordinates: {
      latitude: "51.3148",
      longitude: "-0.5600"
    },
    population: "1,189,934",
    landmarks: [
      "Guildford Cathedral",
      "RHS Garden Wisley",
      "Box Hill",
      "Hampton Court Palace",
      "Thorpe Park"
    ],
    history: "Surrey combines historic architecture with modern developments, featuring Georgian, Victorian, and contemporary buildings.",
    heritage: {
      listedBuildings: {
        gradeI: [
          "Hampton Court Palace",
          "Guildford Cathedral",
          "Royal Holloway",
          "Loseley Park",
          "Farnham Castle"
        ],
        gradeII: [
          "Guildford Castle",
          "Leith Hill Tower",
          "Dorking Halls",
          "Reigate Priory",
          "Woking Palace"
        ],
        gradeIIStar: [
          "Clandon Park",
          "Polesden Lacey",
          "Waverley Abbey",
          "Sutton Place"
        ]
      },
      conservationAreas: [
        "Guildford Town Centre",
        "Reigate Old Town",
        "Farnham Conservation Area",
        "Dorking Historic Core"
      ],
      historicSites: [
        {
          name: "Hampton Court Palace",
          description: "Tudor palace with extensive historic roofing",
          period: "16th Century",
          roofingFeatures: [
            "Tudor chimneys",
            "Lead-covered roofs",
            "Decorative gables",
            "Historic timber frames"
          ]
        },
        {
          name: "Guildford Cathedral",
          description: "Modern cathedral with distinctive roofing",
          period: "20th Century",
          roofingFeatures: [
            "Copper roofing",
            "Modern design",
            "Brick vaulting",
            "Contemporary features"
          ]
        }
      ]
    },
    roofingInfo: {
      commonStyles: [
        "Clay tile roofing",
        "Slate roofing",
        "Modern systems",
        "Heritage roofing"
      ],
      challenges: [
        "Historic preservation",
        "Modern integration",
        "Urban development",
        "Conservation requirements"
      ],
      regulations: "Surrey local authorities maintain strict planning controls for roofing work.",
      materials: {
        traditional: [
          "Clay tiles",
          "Welsh slate",
          "Lead work",
          "Stone tiles"
        ],
        modern: [
          "Concrete tiles",
          "Metal roofing",
          "Green roofing",
          "Solar tiles"
        ],
        specializedSolutions: [
          "Heritage matching",
          "Conservation rooflights",
          "Period features",
          "Modern integration"
        ]
      },
      weatherConsiderations: {
        annualRainfall: "600mm average",
        windExposure: "Moderate",
        temperatureRange: "-5°C to 30°C",
        commonIssues: [
          "Rain penetration",
          "Urban heat effect",
          "Wind damage",
          "Moss growth"
        ]
      },
      buildingRegulations: {
        planningRequirements: "Planning permission required for most alterations in conservation areas",
        conservationGuidelines: "Strict heritage guidelines in protected areas",
        energyEfficiencyStandards: "Minimum U-value of 0.18 W/m²K for roof renovations",
        heritageRestrictions: "Listed building consent required for alterations"
      }
    },
    nearbyAreas: [
      "Guildford",
      "Woking",
      "Farnham",
      "Epsom",
      "Redhill",
      "Staines",
      "Dorking"
    ],
    postalCodes: ["GU1", "GU2", "GU3", "GU4", "KT1", "KT2", "KT3", "RH1", "RH2", "RH3", "CR3", "TW9", "TW10"]
  },
  buckinghamshire: {
    name: "Buckinghamshire",
    county: "Buckinghamshire",
    coordinates: {
      latitude: "51.8161",
      longitude: "-0.8122"
    },
    population: "808,666",
    landmarks: [
      "Waddesdon Manor",
      "Stowe House",
      "Bletchley Park",
      "Chiltern Hills",
      "West Wycombe Park"
    ],
    history: "Buckinghamshire features diverse architecture from medieval churches to grand country houses.",
    heritage: {
      listedBuildings: {
        gradeI: [
          "Waddesdon Manor",
          "Stowe House",
          "Claydon House",
          "Dorneywood",
          "Hartwell House"
        ],
        gradeII: [
          "West Wycombe Park",
          "Hughenden Manor",
          "Bletchley Park",
          "Aylesbury Old County Hall",
          "Mentmore Towers"
        ],
        gradeIIStar: [
          "Cliveden",
          "Ascott House",
          "Chenies Manor",
          "Wotton House"
        ]
      },
      conservationAreas: [
        "Aylesbury Old Town",
        "High Wycombe Centre",
        "Marlow Conservation Area",
        "Buckingham Historic Core"
      ],
      historicSites: [
        {
          name: "Waddesdon Manor",
          description: "French Renaissance-style château",
          period: "19th Century",
          roofingFeatures: [
            "French pavilion roofs",
            "Ornate chimneys",
            "Decorative dormers",
            "Lead work"
          ]
        },
        {
          name: "Stowe House",
          description: "Neoclassical country house",
          period: "18th Century",
          roofingFeatures: [
            "Lead-covered domes",
            "Slate roofing",
            "Classical pediments",
            "Stone balustrades"
          ]
        }
      ]
    },
    roofingInfo: {
      commonStyles: [
        "Slate roofing",
        "Clay tile roofing",
        "Heritage roofing",
        "Modern systems"
      ],
      challenges: [
        "Historic preservation",
        "Conservation requirements",
        "Material matching",
        "Modern integration"
      ],
      regulations: "Buckinghamshire Council maintains strict planning controls for roofing work.",
      materials: {
        traditional: [
          "Welsh slate",
          "Clay tiles",
          "Lead work",
          "Stone tiles"
        ],
        modern: [
          "Concrete tiles",
          "Metal roofing",
          "Green roofing",
          "Solar tiles"
        ],
        specializedSolutions: [
          "Heritage matching",
          "Conservation rooflights",
          "Period features",
          "Modern integration"
        ]
      },
      weatherConsiderations: {
        annualRainfall: "635mm average",
        windExposure: "Moderate",
        temperatureRange: "-5°C to 30°C",
        commonIssues: [
          "Rain penetration",
          "Wind damage",
          "Frost damage",
          "Moss growth"
        ]
      },
      buildingRegulations: {
        planningRequirements: "Planning permission required for most alterations in conservation areas",
        conservationGuidelines: "Strict heritage guidelines in protected areas",
        energyEfficiencyStandards: "Minimum U-value of 0.18 W/m²K for roof renovations",
        heritageRestrictions: "Listed building consent required for alterations"
      }
    },
    nearbyAreas: [
      "Aylesbury",
      "High Wycombe",
      "Milton Keynes",
      "Amersham",
      "Buckingham",
      "Marlow",
      "Beaconsfield"
    ],
    postalCodes: ["HP1", "HP2", "HP3", "HP4", "HP5", "HP6", "HP7", "HP8", "HP9", "HP10", "HP11", "HP12", "HP13", "HP14", "HP15", "HP16", "HP17", "HP18", "HP19", "HP20", "HP21", "HP22", "HP23", "HP27"]
  },
  "west-sussex": {
    name: "West Sussex",
    county: "West Sussex",
    coordinates: {
      latitude: "50.9280",
      longitude: "-0.4617"
    },
    population: "858,852",
    landmarks: [
      "Chichester Cathedral",
      "Arundel Castle",
      "Petworth House",
      "Goodwood House",
      "South Downs National Park"
    ],
    history: "West Sussex combines coastal architecture with inland country houses and historic market towns.",
    heritage: {
      listedBuildings: {
        gradeI: [
          "Arundel Castle",
          "Chichester Cathedral",
          "Petworth House",
          "Goodwood House",
          "Parham House"
        ],
        gradeII: [
          "Worthing Pier",
          "Horsham Museum",
          "Crawley Town Hall",
          "Bognor Pier",
          "Littlehampton Fort"
        ],
        gradeIIStar: [
          "Cowdray House",
          "Uppark House",
          "Bramber Castle",
          "Amberley Castle"
        ]
      },
      conservationAreas: [
        "Chichester City Centre",
        "Arundel Historic Core",
        "Petworth Conservation Area",
        "Midhurst Old Town"
      ],
      historicSites: [
        {
          name: "Arundel Castle",
          description: "Medieval castle and Victorian Gothic mansion",
          period: "11th-19th Century",
          roofingFeatures: [
            "Gothic towers",
            "Lead-covered roofs",
            "Victorian slate",
            "Stone battlements"
          ]
        },
        {
          name: "Petworth House",
          description: "17th-century mansion",
          period: "17th Century",
          roofingFeatures: [
            "Lead flat roofs",
            "Slate pitched roofs",
            "Decorative chimneys",
            "Stone parapets"
          ]
        }
      ]
    },
    roofingInfo: {
      commonStyles: [
        "Slate roofing",
        "Clay tile roofing",
        "Coastal systems",
        "Heritage roofing"
      ],
      challenges: [
        "Coastal conditions",
        "Historic preservation",
        "Material matching",
        "Weather protection"
      ],
      regulations: "West Sussex County Council maintains strict planning controls for roofing work.",
      materials: {
        traditional: [
          "Welsh slate",
          "Clay tiles",
          "Lead work",
          "Stone tiles"
        ],
        modern: [
          "Concrete tiles",
          "Metal roofing",
          "Coastal systems",
          "Green roofing"
        ],
        specializedSolutions: [
          "Heritage matching",
          "Coastal protection",
          "Period features",
          "Modern integration"
        ]
      },
      weatherConsiderations: {
        annualRainfall: "800mm average",
        windExposure: "High (coastal)",
        temperatureRange: "-2°C to 28°C",
        commonIssues: [
          "Salt exposure",
          "Wind damage",
          "Rain penetration",
          "Coastal erosion"
        ]
      },
      buildingRegulations: {
        planningRequirements: "Planning permission required for most alterations in conservation areas",
        conservationGuidelines: "Strict heritage guidelines in protected areas",
        energyEfficiencyStandards: "Minimum U-value of 0.18 W/m²K for roof renovations",
        heritageRestrictions: "Listed building consent required for alterations"
      }
    },
    nearbyAreas: [
      "Chichester",
      "Crawley",
      "Worthing",
      "Horsham",
      "Bognor Regis",
      "Littlehampton",
      "East Grinstead"
    ],
    postalCodes: ["PO10", "PO18", "PO19", "PO20", "PO21", "PO22", "BN11", "BN12", "BN13", "BN14", "BN15", "BN16", "BN17", "BN18", "RH10", "RH11", "RH12", "RH13", "RH14", "RH15", "RH16", "RH17"]
  }
};
