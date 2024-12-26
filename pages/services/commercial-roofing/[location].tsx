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

const CommercialRoofingLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const serviceName = `Commercial Roofing in ${displayLocation}`;
  const serviceDescription = `Professional commercial roofing solutions for ${displayLocation} businesses, including installations, repairs, and maintenance services across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | Expert Commercial Roofers in ${displayLocation}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`commercial roofing ${displayLocation}, business roofing ${displayLocation}, industrial roofing ${county}, commercial roof repair ${displayLocation}, flat roofing ${displayLocation}, commercial roof installation ${displayLocation}`} />
      </Head>

      <ServiceLayout
        heroTitle={`Professional Commercial Roofing Services in ${displayLocation}`}
        heroDescription={`Expert roofing solutions for your ${displayLocation} business, delivered with minimal disruption`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Complete Commercial Roofing Solutions in {displayLocation}
          </h2>
          <p className="mb-4">
            Our commercial roofing services are tailored to meet the unique needs of businesses and industrial properties in {displayLocation} and across {county}. 
            We understand that minimizing disruption to your operations is crucial, which is why we offer flexible scheduling 
            and efficient project management.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Commercial Roof Installation in {displayLocation}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>New construction roofing</li>
                <li>Roof replacement services</li>
                <li>Energy-efficient systems</li>
                <li>Custom roofing solutions</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{displayLocation} Commercial Maintenance</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Preventive maintenance programs</li>
                <li>Regular inspections</li>
                <li>Emergency repair services</li>
                <li>Leak detection and repair</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Commercial Roofing Systems in {displayLocation}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Built-Up Roofing</h3>
              <p>Traditional multi-layer system ideal for flat or low-slope roofs in {county}.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Modified Bitumen</h3>
              <p>Durable system with excellent waterproofing properties for {displayLocation} weather.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Single-Ply Membranes</h3>
              <p>Modern, energy-efficient EPDM and TPO roofing systems for {displayLocation} businesses.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our {displayLocation} Commercial Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Site Assessment</h3>
              <p>Comprehensive evaluation of your {displayLocation} commercial property's roofing needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Custom Solution Design</h3>
              <p>Development of tailored roofing solutions that meet your specific {county} requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Professional Installation</h3>
              <p>Expert installation with minimal disruption to your {displayLocation} business operations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Quality Assurance</h3>
              <p>Rigorous quality control and final inspection process for all {displayLocation} projects.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {displayLocation} Commercial Roofing FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long does a commercial roof installation take in {displayLocation}?</h3>
              <p>Installation time varies based on the size and complexity of the project, typically ranging from 1-3 weeks for {displayLocation} commercial properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you offer warranties in {displayLocation}?</h3>
              <p>Yes, we provide comprehensive warranties on both materials and workmanship for all {displayLocation} commercial projects.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Can you work around our {displayLocation} business hours?</h3>
              <p>Yes, we offer flexible scheduling options to minimize disruption to your {displayLocation} business operations.</p>
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

export default CommercialRoofingLocation;
