import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../../components/ServiceLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const RoofVentilationLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const serviceName = `Roof Ventilation Services in ${location}`;
  const serviceDescription = `Professional roof ventilation solutions in ${location}. Expert installation and maintenance of ventilation systems for properties across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | Expert Roof Ventilation in ${location}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`roof ventilation ${location}, attic ventilation ${location}, roof vents ${county}, ventilation installation ${location}, roof airflow ${location}`} />
      </Head>

      <ServiceLayout
        heroTitle={`Professional Roof Ventilation Services in ${location}`}
        heroDescription={`Expert ventilation solutions for ${location} properties, ensuring optimal airflow and temperature control`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Complete Roof Ventilation Solutions in {location}
          </h2>
          <p className="mb-4">
            Our professional roof ventilation services in {location} ensure your property maintains optimal airflow and temperature control. 
            We provide comprehensive ventilation solutions suited to {county} climate conditions.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Ventilation Services in {location}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>System installation</li>
                <li>Ventilation upgrades</li>
                <li>Maintenance service</li>
                <li>Airflow assessment</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{location} Ventilation Types</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ridge vents</li>
                <li>Soffit vents</li>
                <li>Powered systems</li>
                <li>Custom solutions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ventilation Options in {location}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Natural Ventilation</h3>
              <p>Passive systems perfect for {county} properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Powered Systems</h3>
              <p>Active ventilation solutions for {location} buildings.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Hybrid Solutions</h3>
              <p>Combined systems for optimal {location} performance.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our {location} Ventilation Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Airflow Assessment</h3>
              <p>Comprehensive evaluation of your {location} property's ventilation needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. System Design</h3>
              <p>Custom ventilation solution for your {county} property.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Expert Installation</h3>
              <p>Professional fitting by skilled {location} technicians.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Performance Testing</h3>
              <p>Thorough testing of your new ventilation system.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {location} Roof Ventilation FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Why is roof ventilation important in {location}?</h3>
              <p>Proper ventilation helps regulate temperature, prevent moisture damage, and extend roof life in {county} conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What ventilation systems work best in {location}?</h3>
              <p>We recommend systems suited to {county} weather patterns, including ridge vents and balanced intake/exhaust systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How often should ventilation be checked in {location}?</h3>
              <p>We recommend annual inspections of ventilation systems in {location} to ensure optimal performance.</p>
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

export default RoofVentilationLocation;
