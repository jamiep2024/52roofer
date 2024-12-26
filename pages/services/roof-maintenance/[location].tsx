import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../../components/ServiceLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const RoofMaintenanceLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const serviceName = `Roof Maintenance Services in ${location}`;
  const serviceDescription = `Professional roof maintenance and care services in ${location}. Regular maintenance and preventive solutions for properties across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | Expert Roof Maintenance in ${location}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`roof maintenance ${location}, roof care ${location}, preventive maintenance ${county}, roof servicing ${location}, roof upkeep ${location}`} />
      </Head>

      <ServiceLayout
        heroTitle={`Professional Roof Maintenance Services in ${location}`}
        heroDescription={`Regular roof maintenance and preventive care solutions for ${location} properties`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Complete Roof Maintenance Solutions in {location}
          </h2>
          <p className="mb-4">
            Our professional roof maintenance services in {location} help protect and extend the life of your roof. 
            We provide comprehensive maintenance programs suited to {county} weather conditions.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Maintenance Services in {location}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Regular inspections</li>
                <li>Preventive maintenance</li>
                <li>Minor repairs</li>
                <li>Cleaning services</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{location} Care Programs</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Annual maintenance plans</li>
                <li>Seasonal checks</li>
                <li>Storm preparation</li>
                <li>Weather protection</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Maintenance Services in {location}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Preventive Care</h3>
              <p>Regular maintenance to prevent issues in {county} conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Repair Services</h3>
              <p>Quick fixes for {location} properties when needed.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">System Updates</h3>
              <p>Improvements and upgrades for {location} roofs.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our {location} Maintenance Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Regular Inspection</h3>
              <p>Thorough checks of your {location} property's roof condition.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Preventive Work</h3>
              <p>Proactive maintenance to prevent {county} weather damage.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Necessary Repairs</h3>
              <p>Swift attention to any issues found during inspection.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Ongoing Care</h3>
              <p>Continuous monitoring and maintenance of your {location} roof.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {location} Roof Maintenance FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How often should I maintain my roof in {location}?</h3>
              <p>We recommend bi-annual maintenance checks for properties in {location}, with additional checks after severe {county} weather.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What maintenance services do you offer in {location}?</h3>
              <p>We provide comprehensive maintenance including inspections, cleaning, repairs, and preventive care across {location}.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you offer maintenance plans in {location}?</h3>
              <p>Yes, we provide customized maintenance plans for all types of properties in {location} and {county}.</p>
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(locationData).map(location => ({
    params: { location }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const location = params?.location as string;
  const locationInfo = locationData[location];

  if (!locationInfo) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      location: locationInfo.name,
      county: locationInfo.county
    }
  };
};

export default RoofMaintenanceLocation;
