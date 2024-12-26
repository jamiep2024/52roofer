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

const ResidentialRoofingLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const serviceName = `Residential Roofing in ${displayLocation}`;
  const serviceDescription = `Expert residential roofing services in ${displayLocation}, including installations, repairs, and maintenance for homes across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | Expert Residential Roofers in ${displayLocation}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`residential roofing ${displayLocation}, home roofing ${displayLocation}, house roof repair ${county}, residential roof installation ${displayLocation}, local roofers ${displayLocation}`} />
      </Head>

      <ServiceLayout
        heroTitle={`Professional Residential Roofing Services in ${displayLocation}`}
        heroDescription={`Expert roofing solutions for your ${displayLocation} home, delivered with care and precision`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Complete Residential Roofing Solutions in {displayLocation}
          </h2>
          <p className="mb-4">
            Our residential roofing services are designed to meet the unique needs of homeowners in {displayLocation} and across {county}. 
            We provide comprehensive roofing solutions with attention to detail and commitment to quality.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">New Roof Installation in {displayLocation}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Complete roof replacements</li>
                <li>New build installations</li>
                <li>Energy-efficient options</li>
                <li>Premium materials</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{displayLocation} Roof Maintenance</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Regular inspections</li>
                <li>Preventive maintenance</li>
                <li>Gutter cleaning</li>
                <li>Minor repairs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Residential Roofing Options in {displayLocation}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Traditional Tiles</h3>
              <p>Classic roofing solutions perfect for {county} homes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Slate Roofing</h3>
              <p>Premium natural slate ideal for {displayLocation} properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Modern Materials</h3>
              <p>Contemporary solutions suited to {displayLocation} weather conditions.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our {displayLocation} Residential Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Initial Consultation</h3>
              <p>Thorough assessment of your {displayLocation} home's roofing needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Detailed Planning</h3>
              <p>Custom solution design considering {county} weather patterns.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Expert Installation</h3>
              <p>Professional installation by experienced {displayLocation} roofers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Final Inspection</h3>
              <p>Comprehensive quality check ensuring {displayLocation} building standards.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {displayLocation} Residential Roofing FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long does a new roof installation take in {displayLocation}?</h3>
              <p>Most residential installations in {displayLocation} take 2-4 days, depending on the size and complexity of your roof.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What warranties do you offer in {displayLocation}?</h3>
              <p>We provide comprehensive warranties on both materials and workmanship for all {displayLocation} residential projects.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you handle emergency repairs in {displayLocation}?</h3>
              <p>Yes, we offer 24/7 emergency repair services for {displayLocation} homeowners.</p>
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

export default ResidentialRoofingLocation;
