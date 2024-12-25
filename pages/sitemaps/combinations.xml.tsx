import { GetServerSideProps } from "next";
import { serviceAreas } from "../../data/serviceAreas";

const DOMAIN = "https://52roofer.com";
const STATIC_DATE = new Date().toISOString().split("T")[0];

const CombinationsSitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // All URLs that exist in the project
  const urls: string[] = [];

  // Services (18)
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

  // Regular locations (80)
  const locations = Object.values(serviceAreas).flatMap((area) =>
    area.mainTowns.map((town) => town.toLowerCase().replace(/ /g, "-")),
  );

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

  // Add location pages
  const allLocations = [
    ...locations,
    ...oxfordNeighborhoods,
    ...wiltshireSpecialTowns,
  ];
  allLocations.forEach((location) => {
    urls.push(`roofers-in-${location}`);
  });

  // Add service pages
  services.forEach((service) => {
    urls.push(`services/${service}`);
  });

  // Add service+location combinations that have dynamic pages
  const dynamicServices = [
    "roofing-companies-near-me",
    "roofing-firms-near-me",
    "roofing-contractors",
    "roof-replacement",
    "apex-roofing",
    "advanced-roofing",
    "roofing-construction",
  ];

  dynamicServices.forEach((service) => {
    allLocations.forEach((location) => {
      urls.push(`services/${service}/${location}`);
    });
  });

  // Add county pages
  const counties = [
    "berkshire",
    "oxfordshire",
    "wiltshire",
    "gloucestershire",
    "hampshire",
    "surrey",
    "buckinghamshire",
    "west-sussex",
  ];
  counties.forEach((county) => {
    urls.push(`county/${county}`);
  });

  // Add blog pages
  const blogPosts = [
    "choosing-right-roofing-material",
    "complete-guide-to-roof-maintenance",
    "uk-weather-roofing-problems",
    "energy-efficient-roofing",
    "ultimate-roof-ventilation-guide",
    "new-roof-cost-guide",
    "professional-roof-inspection-guide",
    "signs-you-need-roof-replacement",
  ];
  blogPosts.forEach((post) => {
    urls.push(`blog/${post}`);
  });

  // Add resource pages
  urls.push("resources/roofing-faq");

  // Add static pages
  urls.push("about");
  urls.push("contact");
  urls.push("find-roofer");
  urls.push("services");
  urls.push("locations");

  // Generate sitemap entries
  const urlEntries = urls.map(
    (url) => `
        <url>
          <loc>${DOMAIN}/${url}</loc>
          <lastmod>${STATIC_DATE}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
    `,
  );

  // Add service-location combinations
  const paths = services.flatMap((service) =>
    allLocations.map((location) => ({ params: { service, location } })),
  );
  const combinationEntries = paths.map(
    ({ params: { service, location } }) => `
    <url>
      <loc>${DOMAIN}/services/${service}/${location}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `,
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlEntries.join("")}
      ${paths
        .map(
          ({ params: { service, location } }) =>
            `<url>
          <loc>${DOMAIN}/services/${service}/${location}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`,
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

export default CombinationsSitemap;
