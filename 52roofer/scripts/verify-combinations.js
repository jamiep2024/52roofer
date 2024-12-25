import fetch from "node-fetch";

const DOMAIN = "https://52roofer.com";

async function checkUrl(url) {
  try {
    const response = await fetch(url, {
      method: "HEAD",
      redirect: "manual",
    });

    const status = response.status;
    const location = response.headers.get("location");

    return {
      url,
      status,
      redirect: location || null,
      ok: response.ok,
    };
  } catch (error) {
    return {
      url,
      status: "ERROR",
      error: error.message,
      ok: false,
    };
  }
}

async function verifyCombinations() {
  console.log("Checking combination pages...\n");

  // Services (18 working ones from previous verification)
  const services = [
    "advanced-roofing",
    "apex-roofing",
    "commercial-roofing",
    "residential-roofing",
    "roof-inspection",
    "roof-installation",
    "roof-maintenance",
    "roof-replacement",
    "roof-ventilation",
    "roofing-companies-near-me",
    "roofing-construction",
    "roofing-contractors",
    "roofing-firms-near-me",
    "roofers-near-me",
    "skylight-installation",
    "voice-roof-installation",
    "voice-roof-repairs",
    "voice-roofing-services",
  ];

  // Oxford neighborhoods (10)
  const oxfordNeighborhoods = [
    "blackbird-leys-oxford",
    "botley-oxford",
    "cowley-oxford",
    "headington-oxford",
    "iffley-oxford",
    "jericho-oxford",
    "marston-oxford",
    "rose-hill-oxford",
    "summertown-oxford",
    "wolvercote-oxford",
  ];

  // Wiltshire special towns (10)
  const wiltshireSpecialTowns = [
    "bradford-on-avon-wiltshire",
    "calne-wiltshire",
    "chippenham-wiltshire",
    "devizes-wiltshire",
    "marlborough-wiltshire",
    "melksham-wiltshire",
    "salisbury-wiltshire",
    "trowbridge-wiltshire",
    "warminster-wiltshire",
    "westbury-wiltshire",
  ];

  // Regular locations (80)
  const locations = [
    "abingdon",
    "aldershot",
    "amersham",
    "andover",
    "ascot",
    "aylesbury",
    "banbury",
    "basingstoke",
    "beaconsfield",
    "bicester",
    "bognor-regis",
    "bracknell",
    "buckingham",
    "burgess-hill",
    "camberley",
    "cheltenham",
    "chesham",
    "chichester",
    "chipping-norton",
    "cirencester",
    "crawley",
    "didcot",
    "dorking",
    "dursley",
    "east-grinstead",
    "eastleigh",
    "epsom",
    "fairford",
    "fareham",
    "farnborough",
    "farnham",
    "gerrards-cross",
    "gloucester",
    "gosport",
    "guildford",
    "haywards-heath",
    "henley-on-thames",
    "high-wycombe",
    "horsham",
    "hungerford",
    "leatherhead",
    "littlehampton",
    "maidenhead",
    "marlow",
    "milton-keynes",
    "moreton-in-marsh",
    "newbury",
    "oxford",
    "portsmouth",
    "princes-risborough",
    "reading",
    "redhill",
    "reigate",
    "shoreham-by-sea",
    "slough",
    "southampton",
    "staines",
    "stow-on-the-wold",
    "stroud",
    "swindon",
    "tetbury",
    "tewkesbury",
    "thame",
    "thatcham",
    "wallingford",
    "winchester",
    "windsor",
    "witney",
    "woking",
    "wokingham",
    "worthing",
  ];

  // Generate all combinations
  const combinations = [];
  const allLocations = [
    ...locations,
    ...oxfordNeighborhoods,
    ...wiltshireSpecialTowns,
  ];

  // Test a sample of combinations to avoid too many requests
  const sampleServices = services.slice(0, 5);
  const sampleLocations = allLocations.slice(0, 10);

  sampleServices.forEach((service) => {
    sampleLocations.forEach((location) => {
      combinations.push(`/services/${service}/${location}`);
    });
  });

  console.log(`Testing ${combinations.length} sample combinations...\n`);

  // Check URLs
  const results = await Promise.all(
    combinations.map((url) => checkUrl(`${DOMAIN}${url}`)),
  );

  // Group results by status
  const ok = results.filter((r) => r.ok);
  const redirects = results.filter((r) => r.status >= 300 && r.status < 400);
  const notFound = results.filter((r) => r.status === 404);
  const errors = results.filter(
    (r) => r.status === "ERROR" || (r.status >= 500 && r.status < 600),
  );

  // Print successful URLs
  if (ok.length > 0) {
    console.log("\n✅ Working URLs:", ok.length);
    console.log("Sample of working URLs:");
    ok.slice(0, 5).forEach((r) => console.log(`   ${r.url} (${r.status})`));
    console.log();
  }

  // Print redirects
  if (redirects.length > 0) {
    console.log("⚠️  Redirects:");
    redirects.forEach((r) =>
      console.log(`   ${r.url} -> ${r.redirect} (${r.status})`),
    );
    console.log();
  }

  // Print 404s
  if (notFound.length > 0) {
    console.log("❌ Not Found (404):");
    notFound.forEach((r) => console.log(`   ${r.url}`));
    console.log();
  }

  // Print errors
  if (errors.length > 0) {
    console.log("🚫 Errors:");
    errors.forEach((r) =>
      console.log(`   ${r.url} (${r.status}${r.error ? ": " + r.error : ""})`),
    );
    console.log();
  }

  // Print summary
  console.log("Summary:");
  console.log(`Total URLs checked: ${results.length}`);
  console.log(`✅ Working: ${ok.length}`);
  console.log(`⚠️  Redirects: ${redirects.length}`);
  console.log(`❌ Not Found: ${notFound.length}`);
  console.log(`🚫 Errors: ${errors.length}`);

  if (redirects.length > 0 || notFound.length > 0 || errors.length > 0) {
    process.exit(1);
  }
}

verifyCombinations().catch(console.error);
