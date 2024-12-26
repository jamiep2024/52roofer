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

const RoofInspectionLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const serviceName = `Roof Inspection Services in ${displayLocation}`;
  const serviceDescription = `Professional roof inspection and survey services in ${displayLocation}. Detailed assessments and reports for properties across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | Expert Roof Inspectors in ${displayLocation}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`roof inspection ${displayLocation}, roof survey ${displayLocation}, property inspection ${county}, roof assessment ${displayLocation}, building survey ${displayLocation}`} />
      </Head>

      <ServiceLayout
        heroTitle={`Professional Roof Inspection Services in ${displayLocation}`}
        heroDescription={`Thorough roof assessments and detailed reports for ${displayLocation} properties`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comprehensive Roof Inspections in {displayLocation}
          </h2>
          <p className="mb-4">
            Our professional roof inspection services in {displayLocation} provide detailed assessments of your property's roof condition. 
            We deliver thorough reports and recommendations for properties across {county}.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Inspection Services in {displayLocation}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Full roof surveys</li>
                <li>Condition reports</li>
                <li>Leak investigations</li>
                <li>Pre-purchase inspections</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{displayLocation} Assessment Types</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Visual inspections</li>
                <li>Detailed surveys</li>
                <li>Drone assessments</li>
                <li>Thermal imaging</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Inspection Services in {displayLocation}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Residential Surveys</h3>
              <p>Detailed home roof inspections across {county}.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Commercial Inspections</h3>
              <p>Professional assessments for {displayLocation} businesses.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Emergency Checks</h3>
              <p>Rapid response inspections in {displayLocation}.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our {displayLocation} Inspection Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Initial Assessment</h3>
              <p>Comprehensive exterior evaluation of your {displayLocation} property.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Detailed Inspection</h3>
              <p>Thorough examination of all roof components and structure.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Internal Check</h3>
              <p>Assessment of internal roof spaces and potential issues.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Detailed Report</h3>
              <p>Comprehensive report with findings and recommendations.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {displayLocation} Roof Inspection FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long does a roof inspection take in {displayLocation}?</h3>
              <p>Most {displayLocation} residential inspections take 1-2 hours, while commercial properties may require longer.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What's included in a {displayLocation} roof inspection?</h3>
              <p>Our inspections include exterior assessment, internal check, structural evaluation, and a detailed report.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you offer emergency inspections in {displayLocation}?</h3>
              <p>Yes, we provide rapid response inspections for urgent situations across {displayLocation} and {county}.</p>
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

export default RoofInspectionLocation;
