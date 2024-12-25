import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { locationData } from '../data/locationData.js';
import { serviceAreas } from '../data/serviceAreas.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Template for generating pages with schema
const template = (location, county, countyKey, postcodes, service = null) => {
  const pageTitle = service 
    ? `${service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} in ${location}`
    : `Expert Roofers in ${location}`;
  
  const pageUrl = service
    ? `https://52roofer.com/services/${service}-in-${location.toLowerCase().replace(/\s+/g, '-')}`
    : `https://52roofer.com/roofers-in-${location.toLowerCase().replace(/\s+/g, '-')}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RoofingContractor",
        "@id": `${pageUrl}#organization`,
        "name": "52Roofer",
        "url": pageUrl,
        "image": "https://52roofer.com/images/hero-bg.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location,
          "addressRegion": county,
          "addressCountry": "GB",
          "postalCode": postcodes[0]
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": serviceAreas[countyKey].coordinates?.latitude || "",
          "longitude": serviceAreas[countyKey].coordinates?.longitude || ""
        },
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": serviceAreas[countyKey].coordinates?.latitude || "",
            "longitude": serviceAreas[countyKey].coordinates?.longitude || ""
          },
          "geoRadius": "30000"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": pageTitle,
        "isPartOf": { "@id": "https://52roofer.com/#website" },
        "about": { "@id": `${pageUrl}#organization` },
        "description": `Professional ${service ? service.replace(/-/g, ' ') + ' services' : 'roofing services'} in ${location}, ${county}. Available 24/7 with free quotes.`
      }
    ]
  };

  return `import React from 'react';
import Head from 'next/head';
import HeroImage from "../components/HeroImage";
import LeadForm from '../components/forms/LeadForm';
import { serviceAreas } from '../data/serviceAreas';
import { businesses } from '../data/businesses';

export default function ${location.replace(/[^a-zA-Z]/g, '')}Page() {
  const location = {
    name: '${location}',
    county: '${county}',
    postcodes: ${JSON.stringify(postcodes)},
  };

  const localBusinesses = businesses.filter(
    business => business.location === serviceAreas.${countyKey}.name
  );

  return (
    <>
      <Head>
        <title>${pageTitle} | Emergency Repairs & Installation</title>
        <meta 
          name="description" 
          content="Looking for trusted ${service ? service.replace(/-/g, ' ') : 'roofers'} in ${location}? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving ${postcodes[0]} & surrounding areas."
        />
        <meta name="keywords" content="${service ? service.replace(/-/g, ' ') : 'roofers'} ${location}, roofing contractors ${location}, roof repairs ${location}, emergency roofer ${location}, local roofers ${postcodes[0]}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="${pageTitle} | Emergency Repairs & Installation" />
        <meta property="og:description" content="Looking for trusted ${service ? service.replace(/-/g, ' ') : 'roofers'} in ${location}? 24/7 Emergency Service, Free Quotes. Local experts serving ${postcodes[0]} & surrounding areas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="${pageUrl}" />
        <meta property="og:image" content="https://52roofer.com/images/hero-bg.jpg" />
        <link rel="canonical" href="${pageUrl}" />
        <script type="application/ld+json">
          ${JSON.stringify(schema, null, 2)}
        </script>
      </Head>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0">
            <HeroImage 
              src="/images/hero-bg.jpg"
              alt={\`${service ? service.replace(/-/g, ' ') + ' services' : 'Roofing services'} in ${location}\`}
            />            
            <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
          </div>

          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              ${pageTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Professional ${service ? service.replace(/-/g, ' ') + ' services' : 'roofing services'} in ${location}, ${county}. 
              From emergency repairs to complete installations, our local experts are here to help. Available 24/7 with free quotes.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Your Trusted Local ${service ? service.replace(/-/g, ' ') + ' Experts' : 'Roofers'} in ${location}
              </h2>

              <div className="prose prose-blue max-w-none">
                <p>
                  Looking for reliable ${service ? service.replace(/-/g, ' ') : 'roofing'} services in ${location}? Our experienced team provides 
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

                <h3 className="text-2xl font-semibold mt-12 mb-4">Why Choose Our ${location} ${service ? service.replace(/-/g, ' ') + ' Services' : 'Roofers'}?</h3>
                <ul className="space-y-4">
                  <li>✓ Available 24/7 for emergencies</li>
                  <li>✓ Free, no-obligation quotes</li>
                  <li>✓ Fully insured and qualified team</li>
                  <li>✓ Competitive local rates</li>
                  <li>✓ Outstanding customer service</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Get Your Free Quote Today
                </h3>
                <LeadForm source="${location} ${service ? service + ' ' : ''}Landing Page" />
              </div>

              {/* Coverage Areas */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Areas We Cover in ${location}
                </h3>
                <p className="text-gray-600 mb-4">
                  We provide comprehensive ${service ? service.replace(/-/g, ' ') : 'roofing'} services throughout ${location} and surrounding areas, 
                  covering all ${postcodes.join(', ')} postcodes.
                </p>
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
// Collect all locations
function getAllLocations() {
  const locations = new Set();
  
  // Add main towns from serviceAreas
  Object.values(serviceAreas).forEach(county => {
    county.mainTowns.forEach(town => locations.add({
      name: town,
      county: county.name,
      postcodes: county.postcodes
    }));
  });

  // Add nearby areas and districts from locationData
  Object.entries(locationData).forEach(([city, data]) => {
    // Add nearby areas
    data.nearbyAreas.forEach(area => locations.add({
      name: area,
      county: data.county,
      postcodes: data.postalCodes
    }));

    // Add districts from conservation areas
    data.heritage.conservationAreas.forEach(area => {
      const districtName = area.replace(' Conservation Area', '')
                              .replace('Central ', '')
                              .replace(' District', '');
      locations.add({
        name: districtName,
        county: data.county,
        postcodes: data.postalCodes
      });
    });
  });

  return Array.from(locations);
}

// Generate all pages
async function generateAllPages() {
  const locations = getAllLocations();
  const pagesDir = path.join(process.cwd(), 'pages');
  let count = 0;

  for (const location of locations) {
    const fileName = `roofers-in-${location.name.toLowerCase().replace(/\s+/g, '-')}.tsx`;
    const filePath = path.join(pagesDir, fileName);
    
    // Find county key
    const countyKey = Object.keys(serviceAreas).find(
      key => serviceAreas[key].name === location.county
    );

    if (!countyKey) {
      console.warn(`County key not found for ${location.name}, ${location.county}`);
      continue;
    }

    const content = template(location.name, location.county, countyKey, location.postcodes);
    
    fs.writeFileSync(filePath, content);
    count++;
    console.log(`Created page for ${location.name} (${count})`);
  }

  // Generate service area combinations
  const services = [
    'roof-repairs',
    'roof-installation',
    'roof-maintenance',
    'emergency-repairs',
    'commercial-roofing',
    'residential-roofing'
  ];

  for (const location of locations) {
    for (const service of services) {
      const fileName = `${service}-in-${location.name.toLowerCase().replace(/\s+/g, '-')}.tsx`;
      const filePath = path.join(pagesDir, 'services', fileName);
      
      // Ensure services directory exists
      if (!fs.existsSync(path.join(pagesDir, 'services'))) {
        fs.mkdirSync(path.join(pagesDir, 'services'));
      }

      const content = template(
        location.name,
        location.county,
        Object.keys(serviceAreas).find(key => serviceAreas[key].name === location.county),
        location.postcodes,
        service
      );
      
      fs.writeFileSync(filePath, content);
      count++;
      console.log(`Created service page for ${service} in ${location.name} (${count})`);
    }
  }

  console.log(`\nTotal pages generated: ${count}`);
  return count;
}

// Execute if run directly
if (import.meta.url === new URL(import.meta.url).href) {
  generateAllPages().catch(console.error);
}

export {
  generateAllPages,
  getAllLocations
};
