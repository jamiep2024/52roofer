import { LocationData } from '../types/location';

export const locationData: { [key: string]: LocationData } = {
  'milton-keynes': {
    name: "Milton Keynes",
    county: "Buckinghamshire",
    coordinates: {
      latitude: "52.0406",
      longitude: "-0.7594"
    },
    population: "248,821",
    landmarks: [
      "The Point",
      "Milton Keynes Theatre",
      "Xscape",
      "Bletchley Park",
      "Campbell Park"
    ],
    history: "Milton Keynes is a planned city developed in the 1960s, incorporating existing towns and villages. Its modern architecture and grid road system make it unique among British cities.",
    heritage: {
      listedBuildings: {
        gradeI: [
          "Bletchley Park Mansion",
          "St Mary's Church, Bletchley",
          "Great Linford Manor",
          "St Lawrence's Church, Bradwell",
          "St Peter and St Paul's Church, Newport Pagnell"
        ],
        gradeII: [
          "The Point",
          "Milton Keynes Shopping Building",
          "The Old Rectory, Bletchley",
          "Willen Church",
          "Newport Pagnell Iron Bridge"
        ],
        gradeIIStar: [
          "Bradwell Abbey",
          "Bradwell Windmill",
          "The Cock Hotel, Stony Stratford",
          "St James Church, New Bradwell"
        ]
      },
      conservationAreas: [
        "Bletchley Conservation Area",
        "Newport Pagnell Conservation Area",
        "Stony Stratford Conservation Area",
        "Wolverton Conservation Area"
      ],
      historicSites: [
        {
          name: "Bletchley Park",
          description: "Former code-breaking centre with Victorian mansion",
          period: "Victorian with 1940s additions",
          roofingFeatures: [
            "Victorian slate roofing",
            "Period dormers",
            "Original chimneys",
            "Lead flashings"
          ]
        },
        {
          name: "Bradwell Abbey",
          description: "Medieval priory remains",
          period: "14th Century",
          roofingFeatures: [
            "Medieval stone work",
            "Traditional slate roofing",
            "Historic timber structure",
            "Conservation roofing"
          ]
        }
      ]
    },
    roofingInfo: {
      commonStyles: [
        "Modern flat roofing",
        "Commercial roofing systems",
        "Traditional slate roofing",
        "Contemporary designs"
      ],
      challenges: [
        "Modern building requirements",
        "Commercial property standards",
        "Mixed architectural styles",
        "Large-scale developments"
      ],
      regulations: "Milton Keynes Council has specific guidelines for both modern developments and historic areas. All roofing work must comply with the Milton Keynes Local Plan.",
      materials: {
        traditional: [
          "Welsh slate",
          "Clay tiles",
          "Lead work",
          "Stone tiles"
        ],
        modern: [
          "Single-ply membranes",
          "Metal roofing systems",
          "Green roof systems",
          "Solar panel integration"
        ],
        specializedSolutions: [
          "Commercial roof coatings",
          "Heritage matching materials",
          "Modern insulation systems",
          "Sustainable roofing solutions"
        ]
      },
      weatherConsiderations: {
        annualRainfall: "635mm average",
        windExposure: "Moderate",
        temperatureRange: "-5°C to 30°C",
        commonIssues: [
          "Commercial flat roof maintenance",
          "Storm water management",
          "Thermal movement in large structures",
          "Green roof maintenance"
        ]
      },
      buildingRegulations: {
        planningRequirements: "Specific requirements for commercial and residential developments",
        conservationGuidelines: "Heritage considerations in historic areas",
        energyEfficiencyStandards: "High standards for new developments",
        heritageRestrictions: "Listed building consent in conservation areas"
      }
    },
    nearbyAreas: [
      "Bletchley",
      "Newport Pagnell",
      "Wolverton",
      "Stony Stratford",
      "Woburn Sands",
      "Olney",
      "Buckingham"
    ],
    postalCodes: ["MK1", "MK2", "MK3", "MK4", "MK5", "MK6", "MK7", "MK8", "MK9", "MK10", "MK11", "MK12", "MK13", "MK14", "MK15", "MK16", "MK17"]
  }
};
