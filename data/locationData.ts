interface LocationData {
  name: string;
  county: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  population: string;
  landmarks: string[];
  history: string;
  roofingInfo: {
    commonStyles: string[];
    challenges: string[];
    regulations: string;
  };
  nearbyAreas: string[];
  postalCodes: string[];
}

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
      regulations: "Oxford City Council enforces strict planning regulations for roofing work, particularly in conservation areas and on listed buildings. All roofing work must comply with the Oxford Local Plan 2036."
    },
    nearbyAreas: [
      "Headington",
      "Cowley",
      "Botley",
      "Wolvercote",
      "Summertown"
    ],
    postalCodes: ["OX1", "OX2", "OX3", "OX4"]
  },
  cheltenham: {
    name: "Cheltenham",
    county: "Gloucestershire",
    coordinates: {
      latitude: "51.8979",
      longitude: "-2.0705"
    },
    population: "118,800",
    landmarks: [
      "Cheltenham Racecourse",
      "Pittville Pump Room",
      "Montpellier Gardens",
      "Imperial Gardens",
      "The Promenade"
    ],
    history: "Cheltenham rose to prominence as a spa town in the 18th century, known for its Regency architecture. The town's distinctive roofing styles, including the iconic Regency terraces, require specialized maintenance and restoration.",
    roofingInfo: {
      commonStyles: [
        "Regency period slate roofing",
        "Victorian tiling",
        "Lead work",
        "Cotswold stone roofing"
      ],
      challenges: [
        "Heritage preservation",
        "Regency architecture requirements",
        "Weather damage prevention",
        "Listed building compliance"
      ],
      regulations: "Cheltenham Borough Council requires planning permission for most roofing alterations in conservation areas, with specific guidelines for maintaining the town's Regency character."
    },
    nearbyAreas: [
      "Prestbury",
      "Charlton Kings",
      "Leckhampton",
      "Bishop's Cleeve",
      "Winchcombe"
    ],
    postalCodes: ["GL50", "GL51", "GL52", "GL53"]
  },
  swindon: {
    name: "Swindon",
    county: "Wiltshire",
    coordinates: {
      latitude: "51.5558",
      longitude: "-1.7797"
    },
    population: "222,193",
    landmarks: [
      "STEAM Museum",
      "Lydiard Park",
      "Coate Water Country Park",
      "Railway Village",
      "The Magic Roundabout"
    ],
    history: "Swindon's growth was driven by the Great Western Railway in the 19th century, leading to diverse architectural styles from Victorian railway workers' cottages to modern developments, each requiring specific roofing expertise.",
    roofingInfo: {
      commonStyles: [
        "Victorian slate roofing",
        "Modern tile roofing",
        "Industrial roofing",
        "Contemporary flat roofs"
      ],
      challenges: [
        "Industrial heritage preservation",
        "Modern building regulations",
        "Railway heritage conservation",
        "Urban development requirements"
      ],
      regulations: "Swindon Borough Council requires building regulations approval for all major roofing work, with specific guidelines for the Railway Village Conservation Area."
    },
    nearbyAreas: [
      "Old Town",
      "West Swindon",
      "North Swindon",
      "Wroughton",
      "Highworth"
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
      "Reading Museum",
      "Maiwand Lion",
      "Oracle Shopping Centre"
    ],
    history: "Reading's architectural evolution spans from medieval times through the Victorian industrial era to modern development. The town's roofing requirements reflect this diverse heritage, from historic abbey restoration to contemporary commercial projects.",
    roofingInfo: {
      commonStyles: [
        "Traditional slate",
        "Modern flat roofing",
        "Commercial roofing",
        "Heritage conservation"
      ],
      challenges: [
        "Urban development compliance",
        "Historic building preservation",
        "Commercial property standards",
        "Modern building regulations"
      ],
      regulations: "Reading Borough Council enforces strict building regulations for roofing work, with additional requirements for conservation areas and listed buildings."
    },
    nearbyAreas: [
      "Caversham",
      "Woodley",
      "Tilehurst",
      "Earley",
      "Whitley"
    ],
    postalCodes: ["RG1", "RG2", "RG4", "RG6", "RG30", "RG31"]
  }
};
