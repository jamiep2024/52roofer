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

async function verifyLocations() {
  console.log("Checking location pages...\n");

  // Oxford neighborhoods (10)
  const oxfordNeighborhoods = [
    "blackbird-leys",
    "botley",
    "cowley",
    "headington",
    "iffley",
    "jericho",
    "marston",
    "rose-hill",
    "summertown",
    "wolvercote",
  ].map((loc) => `roofers-in-${loc}-oxford`);

  // Wiltshire special towns (10)
  const wiltshireSpecialTowns = [
    "bradford-on-avon",
    "calne",
    "chippenham",
    "devizes",
    "marlborough",
    "melksham",
    "salisbury",
    "trowbridge",
    "warminster",
    "westbury",
  ].map((loc) => `roofers-in-${loc}-wiltshire`);

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
  ].map((loc) => `roofers-in-${loc}`);

  const allLocations = [
    ...locations,
    ...oxfordNeighborhoods,
    ...wiltshireSpecialTowns,
  ].sort();

  // Check URLs
  console.log("Checking location URLs...");
  const results = await Promise.all(
    allLocations.map((location) => checkUrl(`${DOMAIN}/${location}`)),
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

verifyLocations().catch(console.error);
