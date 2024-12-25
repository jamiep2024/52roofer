import { GetServerSideProps } from "next";

const DOMAIN = "https://52roofer.com";

const LocationsSitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
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

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allLocations
        .map(
          (location) => `
        <url>
          <loc>${DOMAIN}/${location}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>
      `,
        )
        .join("")}
    </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default LocationsSitemap;
