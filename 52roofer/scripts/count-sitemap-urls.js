// Service Areas Data
const serviceAreas = {
  berkshire: {
    name: "Berkshire",
    mainTowns: [
      "Reading",
      "Newbury",
      "Windsor",
      "Maidenhead",
      "Bracknell",
      "Slough",
      "Wokingham",
      "Thatcham",
      "Hungerford",
      "Ascot",
    ],
  },
  oxfordshire: {
    name: "Oxfordshire",
    mainTowns: [
      "Oxford",
      "Banbury",
      "Bicester",
      "Witney",
      "Didcot",
      "Abingdon",
      "Thame",
      "Henley-on-Thames",
      "Wallingford",
      "Chipping Norton",
    ],
  },
  wiltshire: {
    name: "Wiltshire",
    mainTowns: [
      "Swindon",
      "Salisbury",
      "Chippenham",
      "Trowbridge",
      "Marlborough",
      "Devizes",
      "Warminster",
      "Melksham",
      "Calne",
      "Corsham",
    ],
  },
  gloucestershire: {
    name: "Gloucestershire",
    mainTowns: [
      "Gloucester",
      "Cheltenham",
      "Stroud",
      "Cirencester",
      "Tewkesbury",
      "Dursley",
      "Tetbury",
      "Stow-on-the-Wold",
      "Moreton-in-Marsh",
      "Fairford",
    ],
  },
  hampshire: {
    name: "Hampshire",
    mainTowns: [
      "Southampton",
      "Portsmouth",
      "Winchester",
      "Basingstoke",
      "Andover",
      "Aldershot",
      "Farnborough",
      "Eastleigh",
      "Fareham",
      "Gosport",
    ],
  },
  surrey: {
    name: "Surrey",
    mainTowns: [
      "Guildford",
      "Woking",
      "Farnham",
      "Epsom",
      "Redhill",
      "Reigate",
      "Staines",
      "Dorking",
      "Camberley",
      "Leatherhead",
    ],
  },
  buckinghamshire: {
    name: "Buckinghamshire",
    mainTowns: [
      "Milton Keynes",
      "High Wycombe",
      "Aylesbury",
      "Amersham",
      "Marlow",
      "Buckingham",
      "Chesham",
      "Beaconsfield",
      "Princes Risborough",
      "Gerrards Cross",
    ],
  },
  westSussex: {
    name: "West Sussex",
    mainTowns: [
      "Crawley",
      "Worthing",
      "Horsham",
      "Chichester",
      "Bognor Regis",
      "Littlehampton",
      "East Grinstead",
      "Haywards Heath",
      "Burgess Hill",
      "Shoreham-by-Sea",
    ],
  },
};

// Count URLs in sitemap
function countSitemapUrls() {
  let count = 0;

  // Main pages (4)
  count += 4; // home, about, contact, find-roofer
  console.log("Main pages:", 4);

  // Blog pages (10)
  count += 10;
  console.log("Blog pages:", 10);

  // Service pages (20)
  const services = [
    "roofing-companies-near-me",
    "roofing-firms-near-me",
    "roofing-contractors",
    "roof-replacement",
    "apex-roofing",
    "advanced-roofing",
    "roofing-construction",
    "residential-roofing",
    "commercial-roofing",
    "roof-installation",
    "roof-maintenance",
    "emergency-roof-repairs",
    "roof-inspection",
    "gutter-services",
    "skylight-installation",
    "roof-ventilation",
    "voice-roof-repairs",
    "voice-roof-installation",
    "voice-roofing-services",
    "emergency-roof-repairs-new",
  ];
  count += services.length;
  console.log("Service pages:", services.length);

  // Location pages from all counties
  let locationCount = 0;
  Object.values(serviceAreas).forEach((county) => {
    locationCount += county.mainTowns.length;
  });
  count += locationCount;
  console.log("Location pages:", locationCount);

  // Oxford neighborhoods (10)
  const oxfordNeighborhoods = [
    "blackbird-leys",
    "botley",
    "cowley",
    "headington",
    "wolvercote",
    "jericho",
    "marston",
    "rose-hill",
    "iffley",
    "summertown",
  ];
  count += oxfordNeighborhoods.length;
  console.log("Oxford neighborhoods:", oxfordNeighborhoods.length);

  // Wiltshire special towns (10)
  const wiltshireSpecialTowns = [
    "warminster",
    "marlborough",
    "chippenham",
    "devizes",
    "melksham",
    "trowbridge",
    "bradford-on-avon",
    "westbury",
    "calne",
    "salisbury",
  ];
  count += wiltshireSpecialTowns.length;
  console.log("Wiltshire special towns:", wiltshireSpecialTowns.length);

  // Service + Location combinations
  let serviceLocationCount = 0;
  Object.values(serviceAreas).forEach((county) => {
    serviceLocationCount += county.mainTowns.length * services.length;
  });
  count += serviceLocationCount;
  console.log("Service + Location combinations:", serviceLocationCount);

  // Service + Oxford neighborhood combinations
  const oxfordServiceCount = oxfordNeighborhoods.length * services.length;
  count += oxfordServiceCount;
  console.log(
    "Service + Oxford neighborhood combinations:",
    oxfordServiceCount,
  );

  // Service + Wiltshire special town combinations
  const wiltshireServiceCount = wiltshireSpecialTowns.length * services.length;
  count += wiltshireServiceCount;
  console.log(
    "Service + Wiltshire special town combinations:",
    wiltshireServiceCount,
  );

  // County pages (8)
  count += Object.keys(serviceAreas).length;
  console.log("County pages:", Object.keys(serviceAreas).length);

  // Resource pages (3)
  count += 3;
  console.log("Resource pages:", 3);

  return count;
}

const totalUrls = countSitemapUrls();
console.log("\nTotal URLs in sitemap:", totalUrls);
