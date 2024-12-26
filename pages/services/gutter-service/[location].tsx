import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../../components/ServiceLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serviceAreas } from '../../../data/serviceAreas';

interface LocationPageProps {
  location: string;
  county: string;
  displayLocation: string;
}

const GutterServiceLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const serviceName = `Gutter Services in ${displayLocation}`;
  const serviceDescription = `Professional gutter installation, repair, and maintenance services in ${displayLocation}. Expert solutions for homes and businesses across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | Expert Gutter Services in ${displayLocation}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`gutter services ${displayLocation}, gutter repair ${displayLocation}, gutter installation ${county}, gutter maintenance ${displayLocation}, gutter cleaning ${displayLocation}`} />
      </Head>

      <ServiceLayout
        heroTitle={`Professional Gutter Services in ${displayLocation}`}
        heroDescription={`Complete gutter solutions for ${displayLocation} properties, ensuring proper drainage and protection`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comprehensive Gutter Solutions in {displayLocation}
          </h2>
          <p className="mb-4">
            Our professional gutter services in {displayLocation} ensure your property's drainage system functions perfectly year-round. 
            We provide complete solutions for homes and businesses across {county}.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Installation Services in {displayLocation}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>New gutter systems</li>
                <li>Seamless guttering</li>
                <li>Downpipe installation</li>
                <li>Gutter guards</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{displayLocation} Maintenance Services</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Regular cleaning</li>
                <li>Preventive maintenance</li>
                <li>Repairs and fixes</li>
                <li>System updates</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Gutter Solutions in {displayLocation}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Seamless Gutters</h3>
              <p>Custom-fit guttering perfect for {county} properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Gutter Guards</h3>
              <p>Protection systems suited to {displayLocation} conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Downpipe Systems</h3>
              <p>Efficient water management for {displayLocation} buildings.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our {displayLocation} Gutter Service Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. System Assessment</h3>
              <p>Thorough evaluation of your {displayLocation} property's guttering needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Custom Solution</h3>
              <p>Tailored gutter solutions for your {county} property.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Professional Service</h3>
              <p>Expert installation or maintenance by {displayLocation} specialists.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Quality Check</h3>
              <p>Comprehensive testing of your {displayLocation} gutter system.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {displayLocation} Gutter Service FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How often should gutters be cleaned in {displayLocation}?</h3>
              <p>We recommend cleaning gutters at least twice a year in {displayLocation}, with additional checks after severe {county} weather.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What gutter systems do you install in {displayLocation}?</h3>
              <p>We install various gutter systems in {displayLocation}, including seamless aluminum, copper, and uPVC options.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you offer gutter guards in {displayLocation}?</h3>
              <p>Yes, we provide and install various gutter guard systems suited to {displayLocation} conditions.</p>
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  );
};

// Oxford neighborhoods
const oxfordNeighborhoods = [
  'blackbird-leys',
  'botley',
  'cowley',
  'headington',
  'wolvercote',
  'jericho',
  'marston',
  'rose-hill',
  'iffley',
  'summertown'
];

// Wiltshire special towns
const wiltshireSpecialTowns = [
  'warminster',
  'marlborough',
  'chippenham',
  'devizes',
  'melksham',
  'trowbridge',
  'bradford-on-avon',
  'westbury',
  'calne',
  'salisbury'
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { location: string } }[] = [];

  // Add all main towns from each county
  Object.entries(serviceAreas).forEach(([countyKey, county]) => {
    county.mainTowns.forEach(town => {
      const townSlug = town.toLowerCase().replace(/ /g, '-');
      paths.push({
        params: { location: townSlug }
      });

      // Add Wiltshire special town variants
      if (countyKey === 'wiltshire' && wiltshireSpecialTowns.includes(townSlug)) {
        paths.push({
          params: { location: `${townSlug}-wiltshire` }
        });
      }
    });
  });

  // Add Oxford neighborhoods
  oxfordNeighborhoods.forEach(neighborhood => {
    paths.push({
      params: { location: `${neighborhood}-oxford` }
    });
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const location = params?.location as string;
  
  // Check if this is an Oxford neighborhood
  const isOxfordNeighborhood = oxfordNeighborhoods.some(n => 
    location === `${n}-oxford`
  );
  
  if (isOxfordNeighborhood) {
    const displayLocation = location
      .replace('-oxford', '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      props: {
        location,
        county: 'Oxfordshire',
        displayLocation
      }
    };
  }

  // Check if this is a Wiltshire special town
  const isWiltshireSpecial = wiltshireSpecialTowns.some(t => 
    location === `${t}-wiltshire`
  );
  
  if (isWiltshireSpecial) {
    const displayLocation = location
      .replace('-wiltshire', '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      props: {
        location,
        county: 'Wiltshire',
        displayLocation
      }
    };
  }

  // Handle regular towns
  let foundLocation = '';
  let foundCounty = '';
  
  Object.entries(serviceAreas).forEach(([_, area]) => {
    area.mainTowns.forEach(town => {
      if (town.toLowerCase().replace(/ /g, '-') === location) {
        foundLocation = town;
        foundCounty = area.name;
      }
    });
  });

  if (!foundLocation) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      location,
      county: foundCounty,
      displayLocation: foundLocation
    }
  };
};

export default GutterServiceLocation;
