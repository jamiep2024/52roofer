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
  },
  hampshire: {
    name: "Hampshire",
    county: "Hampshire",
    coordinates: {
      latitude: "51.0577",
      longitude: "-1.3081"
    },
    population: "1,844,245",
    landmarks: [
      "Winchester Cathedral",
      "Portsmouth Historic Dockyard",
      "New Forest National Park",
      "Southampton Docks",
      "Highclere Castle"
    ],
    history: "Hampshire's architectural heritage spans from medieval castles to Georgian mansions and modern developments, requiring diverse roofing expertise for both historic and contemporary buildings.",
    roofingInfo: {
      commonStyles: [
        "Traditional slate roofing",
        "Clay tile roofing",
        "Thatched roofing",
        "Modern tile systems"
      ],
      challenges: [
        "Coastal weather conditions",
        "Historic building preservation",
        "Modern development standards",
        "Conservation area compliance"
      ],
      regulations: "Hampshire County Council maintains strict building regulations for roofing work, with specific guidelines for conservation areas and listed buildings."
    },
    nearbyAreas: [
      "Winchester",
      "Southampton",
      "Portsmouth",
      "Basingstoke",
      "Andover"
    ],
    postalCodes: ["SO14", "SO15", "SO16", "SO17", "PO1", "PO2", "RG21", "RG22", "SP10"]
  },
  surrey: {
    name: "Surrey",
    county: "Surrey",
    coordinates: {
      latitude: "51.3148",
      longitude: "-0.5600"
    },
    population: "1,189,934",
    landmarks: [
      "Hampton Court Palace",
      "RHS Garden Wisley",
      "Guildford Cathedral",
      "Box Hill",
      "Thorpe Park"
    ],
    history: "Surrey features a mix of historic Tudor buildings, Victorian architecture, and modern developments, requiring varied roofing expertise from traditional to contemporary techniques.",
    roofingInfo: {
      commonStyles: [
        "Clay tile roofing",
        "Slate roofing",
        "Modern flat roofs",
        "Heritage roofing"
      ],
      challenges: [
        "Listed building requirements",
        "Green belt regulations",
        "Modern property standards",
        "Conservation area guidelines"
      ],
      regulations: "Surrey County Council enforces comprehensive building regulations for roofing work, with particular attention to heritage properties and conservation areas."
    },
    nearbyAreas: [
      "Guildford",
      "Woking",
      "Epsom",
      "Reigate",
      "Farnham"
    ],
    postalCodes: ["GU1", "GU2", "KT1", "KT2", "RH1", "RH2", "TW9", "TW10"]
  },
  buckinghamshire: {
    name: "Buckinghamshire",
    county: "Buckinghamshire",
    coordinates: {
      latitude: "51.8161",
      longitude: "-0.8123"
    },
    population: "543,973",
    landmarks: [
      "Waddesdon Manor",
      "Stowe House",
      "Hughenden Manor",
      "Bletchley Park",
      "Chiltern Hills"
    ],
    history: "Buckinghamshire's architectural heritage includes grand country houses, traditional market towns, and modern urban developments, requiring diverse roofing expertise.",
    roofingInfo: {
      commonStyles: [
        "Traditional slate",
        "Clay tile roofing",
        "Heritage roofing",
        "Modern systems"
      ],
      challenges: [
        "Historic building maintenance",
        "Conservation area compliance",
        "Modern development standards",
        "Weather resistance"
      ],
      regulations: "Buckinghamshire Council requires strict adherence to building regulations for roofing work, with additional requirements for listed buildings and conservation areas."
    },
    nearbyAreas: [
      "Aylesbury",
      "High Wycombe",
      "Milton Keynes",
      "Amersham",
      "Marlow"
    ],
    postalCodes: ["HP1", "HP2", "MK1", "MK2", "SL0", "SL1"]
  },
  westSussex: {
    name: "West Sussex",
    county: "West Sussex",
    coordinates: {
      latitude: "50.9278",
      longitude: "-0.4617"
    },
    population: "858,852",
    landmarks: [
      "Chichester Cathedral",
      "Arundel Castle",
      "Petworth House",
      "South Downs National Park",
      "Worthing Pier"
    ],
    history: "West Sussex combines medieval, Georgian, and Victorian architecture with modern developments, requiring expertise in both traditional and contemporary roofing techniques.",
    roofingInfo: {
      commonStyles: [
        "Clay tile roofing",
        "Slate roofing",
        "Coastal-resistant systems",
        "Heritage roofing"
      ],
      challenges: [
        "Coastal weather protection",
        "Historic preservation",
        "Conservation guidelines",
        "Modern building standards"
      ],
      regulations: "West Sussex County Council maintains strict building regulations for roofing work, with specific requirements for coastal areas and historic buildings."
    },
    nearbyAreas: [
      "Chichester",
      "Worthing",
      "Crawley",
      "Horsham",
      "Bognor Regis"
    ],
    postalCodes: ["PO18", "PO19", "RH10", "RH11", "BN11", "BN12", "BN13"]
  }
};
