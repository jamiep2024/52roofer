import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { locationData } from "../data/locationData.js";
import { serviceAreas } from "../data/serviceAreas.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PAGES_DIR = path.join(__dirname, "../pages");

// Expanded list of services
const services = [
  "roof-repairs",
  "roof-installation",
  "roof-maintenance",
  "emergency-repairs",
  "commercial-roofing",
  "residential-roofing",
  "flat-roofing",
  "slate-roofing",
  "tile-roofing",
  "guttering",
  "chimney-repairs",
  "fascias-soffits",
  "roof-windows",
  "lead-work",
  "roof-cleaning",
  "moss-removal",
  "storm-damage",
  "new-roofs",
  "roof-replacement",
  "roof-inspection",
];

// Calculate target pages per location to reach 1951 total
const TOTAL_TARGET = 1951;
const SERVICES_PER_LOCATION = services.length; // 20 services
const PAGES_PER_LOCATION = SERVICES_PER_LOCATION + 1; // services + main page

// Get locations to reach target page count
function getAllLocations() {
  const locations = new Set();
  const LOCATIONS_NEEDED = Math.ceil(TOTAL_TARGET / PAGES_PER_LOCATION);
  let locationCount = 0;

  // Add main towns from serviceAreas until we reach target
  Object.values(serviceAreas).forEach((county) => {
    if (locationCount < LOCATIONS_NEEDED) {
      county.mainTowns.forEach((town) => {
        if (locationCount < LOCATIONS_NEEDED) {
          locations.add({
            name: town,
            county: county.name,
            postcodes: county.postcodes,
            type: "town",
          });
          locationCount++;
        }
      });
    }
  });

  // If we still need more locations, add nearby areas from locationData
  Object.values(locationData).forEach((data) => {
    if (locationCount < LOCATIONS_NEEDED && data.nearbyAreas) {
      data.nearbyAreas.forEach((area) => {
        if (locationCount < LOCATIONS_NEEDED) {
          locations.add({
            name: area,
            county: data.county,
            postcodes: data.postalCodes,
            type: "nearby",
            parentTown: data.name,
          });
          locationCount++;
        }
      });
    }
  });

  return Array.from(locations);
}

// Template for generating pages
const template = (location, county, countyKey, postcodes, service = null) => {
  const pageTitle = service
    ? `${service.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())} in ${location}`
    : `Expert Roofers in ${location}`;

  const pageUrl = service
    ? `https://52roofer.com/services/${service}-in-${location.toLowerCase().replace(/\s+/g, "-")}`
    : `https://52roofer.com/roofers-in-${location.toLowerCase().replace(/\s+/g, "-")}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RoofingContractor",
        "@id": `${pageUrl}#organization`,
        name: "52Roofer",
        url: pageUrl,
        image: "https://52roofer.com/images/hero-bg.jpg",
        address: {
          "@type": "PostalAddress",
          addressLocality: location,
          addressRegion: county,
          addressCountry: "GB",
          postalCode: postcodes[0],
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageTitle,
        isPartOf: { "@id": "https://52roofer.com/#website" },
        about: { "@id": `${pageUrl}#organization` },
        description: `Professional ${service ? service.replace(/-/g, " ") + " services" : "roofing services"} in ${location}, ${county}. Available 24/7 with free quotes.`,
      },
    ],
  };

  return `import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { HeroImage } from '../components/HeroImage';
import { LeadForm } from '../components/forms/LeadForm';
import { DynamicFAQ } from '../components/FAQ/DynamicFAQ';
import { LocalBusinessSchema } from '../components/seo/LocalBusinessSchema';

export default function ${location.replace(/[^a-zA-Z0-9]/g, "")}Page() {
  return (
    <>
      <Head>
        <title>${pageTitle} | Professional Services</title>
        <meta 
          name="description" 
          content="Looking for trusted ${service ? service.replace(/-/g, " ") : "roofers"} in ${location}? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving ${postcodes[0]} & surrounding areas."
        />
        <meta name="keywords" content="${service ? service.replace(/-/g, " ") : "roofers"} ${location}, roofing contractors ${location}, roof repairs ${location}, emergency roofer ${location}, local roofers ${postcodes[0]}" />
        <link rel="canonical" href="${pageUrl}" />
        <script type="application/ld+json">
          ${JSON.stringify(schema, null, 2)}
        </script>
      </Head>

      <div className="bg-white">
        <div className="relative bg-gray-900">
          <div className="absolute inset-0">
            <HeroImage 
              src="/images/hero-bg.jpg"
              alt={\`${service ? service.replace(/-/g, " ") + " services" : "Roofing services"} in ${location}\`}
            />            
            <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
          </div>

          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              ${pageTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Professional ${service ? service.replace(/-/g, " ") + " services" : "roofing services"} in ${location}, ${county}. 
              Available 24/7 with free quotes.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Your Trusted Local ${service ? service.replace(/-/g, " ") + " Experts" : "Roofers"} in ${location}
              </h2>

              <div className="prose prose-blue max-w-none">
                <p>
                  Looking for reliable ${service ? service.replace(/-/g, " ") : "roofing"} services in ${location}? Our experienced team provides 
                  comprehensive roofing solutions throughout the ${postcodes[0]} area. We specialize in:
                </p>

                <ul className="mt-8 space-y-4">
                  <li>✓ Emergency Roof Repairs</li>
                  <li>✓ Complete Roof Replacements</li>
                  <li>✓ Roof Maintenance & Inspections</li>
                  <li>✓ Chimney Repairs & Repointing</li>
                  <li>✓ Guttering Services</li>
                  <li>✓ Flat Roof Specialists</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Get Your Free Quote Today
                </h3>
                <LeadForm source="${location} ${service ? service + " " : ""}Landing Page" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600
  };
};`;
};

// Main generation function
async function generateAllPages() {
  console.log("Starting page generation...");

  const locations = getAllLocations();
  const pagesDir = path.join(process.cwd(), "pages");
  let count = 0;

  // Ensure directories exist
  if (!fs.existsSync(path.join(pagesDir, "services"))) {
    fs.mkdirSync(path.join(pagesDir, "services"), { recursive: true });
  }

  for (const location of locations) {
    // Find county key
    const countyKey = Object.keys(serviceAreas).find(
      (key) => serviceAreas[key].name === location.county,
    );

    if (!countyKey) {
      console.warn(
        `County key not found for ${location.name}, ${location.county}`,
      );
      continue;
    }

    // Generate main location page
    const fileName = `roofers-in-${location.name.toLowerCase().replace(/\s+/g, "-")}.tsx`;
    const filePath = path.join(pagesDir, fileName);

    const content = template(
      location.name,
      location.county,
      countyKey,
      location.postcodes,
    );
    fs.writeFileSync(filePath, content);
    count++;
    console.log(`Created page for ${location.name} (${count})`);

    // Generate service pages for each location
    for (const service of services) {
      const serviceFileName = `${service}-in-${location.name.toLowerCase().replace(/\s+/g, "-")}.tsx`;
      const serviceFilePath = path.join(pagesDir, "services", serviceFileName);

      const serviceContent = template(
        location.name,
        location.county,
        countyKey,
        location.postcodes,
        service,
      );

      fs.writeFileSync(serviceFilePath, serviceContent);
      count++;
      console.log(
        `Created service page for ${service} in ${location.name} (${count})`,
      );
    }
  }

  console.log(`\nTotal pages generated: ${count}`);
  return count;
}

// Execute if run directly
if (import.meta.url === new URL(import.meta.url).href) {
  generateAllPages().catch(console.error);
}

export { generateAllPages, getAllLocations };
