export interface Location {
  name: string;
  county: string;
  coordinates: { 
    latitude: string;
    longitude: string;
    lat: string; // Alias for latitude
    lng: string; // Alias for longitude
  };
  nearbyAreas: string[];
  postalCodes: string[];
  serviceAreas: string[];
  heritage: {
    conservationAreas: string[];
  };
}

export interface Locations {
  [key: string]: Location;
}

export const locationData: Locations = {
  // Berkshire
  reading: {
    name: "Reading",
    county: "Berkshire",
    coordinates: { 
      latitude: "51.4543", 
      longitude: "-0.9781",
      lat: "51.4543",
      lng: "-0.9781"
    },
    serviceAreas: [],
    nearbyAreas: [
      "Caversham",
      "Tilehurst",
      "Woodley",
      "Earley",
      "Whitley",
      "Calcot",
      "Lower Earley",
    ],
    postalCodes: ["RG1", "RG2", "RG4", "RG6", "RG30", "RG31"],
    heritage: {
      conservationAreas: [
        "Reading Town Centre",
        "Market Place",
        "St Mary's Butts",
        "Russell Street",
      ],
    },
  },
  newbury: {
    name: "Newbury",
    county: "Berkshire",
    coordinates: { 
      latitude: "51.4014", 
      longitude: "-1.3231",
      lat: "51.4014",
      lng: "-1.3231"
    },
    serviceAreas: [],
    nearbyAreas: ["Thatcham", "Shaw", "Speen", "Greenham", "Wash Common"],
    postalCodes: ["RG14", "RG20"],
    heritage: {
      conservationAreas: ["Newbury Town Centre", "Shaw-cum-Donnington"],
    },
  },
  windsor: {
    name: "Windsor",
    county: "Berkshire",
    coordinates: { 
      latitude: "51.4839", 
      longitude: "-0.6044",
      lat: "51.4839",
      lng: "-0.6044"
    },
    serviceAreas: [],
    nearbyAreas: ["Eton", "Datchet", "Old Windsor", "Clewer", "Dedworth"],
    postalCodes: ["SL4"],
    heritage: {
      conservationAreas: [
        "Windsor Town Centre",
        "Castle Area",
        "Trinity Place",
      ],
    },
  },
  maidenhead: {
    name: "Maidenhead",
    county: "Berkshire",
    coordinates: { 
      latitude: "51.5222", 
      longitude: "-0.7178",
      lat: "51.5222",
      lng: "-0.7178"
    },
    serviceAreas: [],
    nearbyAreas: ["Cookham", "Bray", "Holyport", "Pinkneys Green", "Cox Green"],
    postalCodes: ["SL6"],
    heritage: {
      conservationAreas: ["Maidenhead Town Centre", "Cookham Village"],
    },
  },
  bracknell: {
    name: "Bracknell",
    county: "Berkshire",
    coordinates: { 
      latitude: "51.4154", 
      longitude: "-0.7516",
      lat: "51.4154",
      lng: "-0.7516"
    },
    serviceAreas: [],
    nearbyAreas: [
      "Binfield",
      "Warfield",
      "Easthampstead",
      "Crown Wood",
      "Great Hollands",
    ],
    postalCodes: ["RG12"],
    heritage: { conservationAreas: ["Bracknell Town Centre", "Easthampstead"] },
  },

  // Oxfordshire
  oxford: {
    name: "Oxford",
    county: "Oxfordshire",
    coordinates: { 
      latitude: "51.7520", 
      longitude: "-1.2577",
      lat: "51.7520",
      lng: "-1.2577"
    },
    serviceAreas: [],
    nearbyAreas: [
      "Headington",
      "Cowley",
      "Botley",
      "Wolvercote",
      "Summertown",
      "Marston",
      "Iffley",
      "Blackbird Leys",
      "Rose Hill",
      "Jericho",
    ],
    postalCodes: ["OX1", "OX2", "OX3", "OX4"],
    heritage: {
      conservationAreas: [
        "Central Oxford Conservation Area",
        "Jericho Conservation Area",
        "North Oxford Victorian Suburb Conservation Area",
        "St Clement's and Iffley Road Conservation Area",
        "Headington Conservation Area",
        "Cowley Conservation Area",
      ],
    },
  },
  banbury: {
    name: "Banbury",
    county: "Oxfordshire",
    coordinates: { 
      latitude: "52.0602", 
      longitude: "-1.3403",
      lat: "52.0602",
      lng: "-1.3403"
    },
    serviceAreas: [],
    nearbyAreas: ["Grimsbury", "Hardwick", "Ruscote", "Neithrop", "Easington"],
    postalCodes: ["OX16"],
    heritage: { conservationAreas: ["Banbury Town Centre", "Grimsbury"] },
  },

  // Wiltshire
  swindon: {
    name: "Swindon",
    county: "Wiltshire",
    coordinates: { 
      latitude: "51.5558", 
      longitude: "-1.7797",
      lat: "51.5558",
      lng: "-1.7797"
    },
    serviceAreas: [],
    nearbyAreas: [
      "Old Town",
      "West Swindon",
      "North Swindon",
      "Stratton",
      "Wroughton",
    ],
    postalCodes: ["SN1", "SN2", "SN3", "SN4", "SN5", "SN6"],
    heritage: {
      conservationAreas: ["Railway Village", "Old Town", "Wood Street"],
    },
  },
  salisbury: {
    name: "Salisbury",
    county: "Wiltshire",
    coordinates: { 
      latitude: "51.0693", 
      longitude: "-1.7957",
      lat: "51.0693",
      lng: "-1.7957"
    },
    serviceAreas: [],
    nearbyAreas: [
      "Harnham",
      "Bemerton Heath",
      "Laverstock",
      "Wilton",
      "Britford",
    ],
    postalCodes: ["SP1", "SP2"],
    heritage: {
      conservationAreas: ["Salisbury City Centre", "Cathedral Close"],
    },
  },
  chippenham: {
    name: "Chippenham",
    county: "Wiltshire",
    coordinates: { 
      latitude: "51.4585", 
      longitude: "-2.1158",
      lat: "51.4585",
      lng: "-2.1158"
    },
    serviceAreas: [],
    nearbyAreas: [
      "Monkton Park",
      "Pewsham",
      "Hardenhuish",
      "Lowden",
      "Derriads",
    ],
    postalCodes: ["SN14", "SN15"],
    heritage: { conservationAreas: ["Chippenham Town Centre", "St Paul"] },
  },

  // Gloucestershire
  gloucester: {
    name: "Gloucester",
    county: "Gloucestershire",
    coordinates: { 
      latitude: "51.8642", 
      longitude: "-2.2380",
      lat: "51.8642",
      lng: "-2.2380"
    },
    serviceAreas: [],
    nearbyAreas: [
      "Barnwood",
      "Longlevens",
      "Hucclecote",
      "Tuffley",
      "Quedgeley",
    ],
    postalCodes: ["GL1", "GL2", "GL3", "GL4"],
    heritage: { conservationAreas: ["City Centre", "Docks", "London Road"] },
  },
  cheltenham: {
    name: "Cheltenham",
    county: "Gloucestershire",
    coordinates: { 
      latitude: "51.8979", 
      longitude: "-2.0744",
      lat: "51.8979",
      lng: "-2.0744"
    },
    serviceAreas: [],
    nearbyAreas: [
      "Montpellier",
      "Pittville",
      "Charlton Kings",
      "Leckhampton",
      "Up Hatherley",
    ],
    postalCodes: ["GL50", "GL51", "GL52", "GL53"],
    heritage: { conservationAreas: ["Central Conservation Area", "Pittville"] },
  },

  // Hampshire
  southampton: {
    name: "Southampton",
    county: "Hampshire",
    coordinates: { 
      latitude: "50.9097", 
      longitude: "-1.4044",
      lat: "50.9097",
      lng: "-1.4044"
    },
    serviceAreas: [],
    nearbyAreas: ["Shirley", "Bitterne", "Woolston", "Millbrook", "Portswood"],
    postalCodes: ["SO14", "SO15", "SO16", "SO17", "SO18", "SO19"],
    heritage: {
      conservationAreas: ["Old Town", "Oxford Street", "Bevois Valley"],
    },
  },
  portsmouth: {
    name: "Portsmouth",
    county: "Hampshire",
    coordinates: { 
      latitude: "50.8198", 
      longitude: "-1.0880",
      lat: "50.8198",
      lng: "-1.0880"
    },
    serviceAreas: [],
    nearbyAreas: ["Southsea", "North End", "Fratton", "Milton", "Cosham"],
    postalCodes: ["PO1", "PO2", "PO3", "PO4", "PO5", "PO6"],
    heritage: { conservationAreas: ["Old Portsmouth", "Southsea"] },
  },

  // Surrey
  guildford: {
    name: "Guildford",
    county: "Surrey",
    coordinates: { 
      latitude: "51.2362", 
      longitude: "-0.5704",
      lat: "51.2362",
      lng: "-0.5704"
    },
    serviceAreas: [],
    nearbyAreas: [
      "Merrow",
      "Burpham",
      "Onslow Village",
      "Stoughton",
      "Woodbridge",
    ],
    postalCodes: ["GU1", "GU2", "GU3", "GU4"],
    heritage: {
      conservationAreas: ["Town Centre", "Charlotteville", "St Catherines"],
    },
  },
  woking: {
    name: "Woking",
    county: "Surrey",
    coordinates: { 
      latitude: "51.3190", 
      longitude: "-0.5576",
      lat: "51.3190",
      lng: "-0.5576"
    },
    serviceAreas: [],
    nearbyAreas: [
      "Horsell",
      "Goldsworth Park",
      "St Johns",
      "Knaphill",
      "Mayford",
    ],
    postalCodes: ["GU21", "GU22"],
    heritage: { conservationAreas: ["Town Centre", "Mount Hermon"] },
  },

  // West Sussex
  crawley: {
    name: "Crawley",
    county: "West Sussex",
    coordinates: { 
      latitude: "51.1091", 
      longitude: "-0.1872",
      lat: "51.1091",
      lng: "-0.1872"
    },
    serviceAreas: [],
    nearbyAreas: [
      "Three Bridges",
      "Pound Hill",
      "Broadfield",
      "Tilgate",
      "Ifield",
    ],
    postalCodes: ["RH10", "RH11"],
    heritage: { conservationAreas: ["High Street", "Brighton Road"] },
  },
  worthing: {
    name: "Worthing",
    county: "West Sussex",
    coordinates: { 
      latitude: "50.8146", 
      longitude: "-0.3728",
      lat: "50.8146",
      lng: "-0.3728"
    },
    serviceAreas: [],
    nearbyAreas: [
      "Goring",
      "Durrington",
      "Broadwater",
      "Tarring",
      "Findon Valley",
    ],
    postalCodes: ["BN11", "BN12", "BN13", "BN14"],
    heritage: { conservationAreas: ["Town Centre", "Marine Parade"] },
  },
};
