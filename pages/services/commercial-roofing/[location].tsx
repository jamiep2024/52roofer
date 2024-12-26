import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../../components/ServiceLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const CommercialRoofingLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const serviceName = `Commercial Roofing in ${location}`;
  const serviceDescription = `Professional commercial roofing solutions for ${location} businesses, including installations, repairs, and maintenance services across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | Expert Commercial Roofers in ${location}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`commercial roofing ${location}, business roofing ${location}, industrial roofing ${county}, commercial roof repair ${location}, flat roofing ${location}, commercial roof installation ${location}`} />
      </Head>

      <ServiceLayout
        heroTitle={`Professional Commercial Roofing Services in ${location}`}
        heroDescription={`Expert roofing solutions for your ${location} business, delivered with minimal disruption`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Complete Commercial Roofing Solutions in {location}
          </h2>
          <p className="mb-4">
            Our commercial roofing services are tailored to meet the unique needs of businesses and industrial properties in {location} and across {county}. 
            We understand that minimizing disruption to your operations is crucial, which is why we offer flexible scheduling 
            and efficient project management.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Commercial Roof Installation in {location}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>New construction roofing</li>
                <li>Roof replacement services</li>
                <li>Energy-efficient systems</li>
                <li>Custom roofing solutions</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{location} Commercial Maintenance</h3>
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
            Commercial Roofing Systems in {location}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Built-Up Roofing</h3>
              <p>Traditional multi-layer system ideal for flat or low-slope roofs in {county}.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Modified Bitumen</h3>
              <p>Durable system with excellent waterproofing properties for {location} weather.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Single-Ply Membranes</h3>
              <p>Modern, energy-efficient EPDM and TPO roofing systems for {location} businesses.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our {location} Commercial Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Site Assessment</h3>
              <p>Comprehensive evaluation of your {location} commercial property's roofing needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Custom Solution Design</h3>
              <p>Development of tailored roofing solutions that meet your specific {county} requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Professional Installation</h3>
              <p>Expert installation with minimal disruption to your {location} business operations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Quality Assurance</h3>
              <p>Rigorous quality control and final inspection process for all {location} projects.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {location} Commercial Roofing FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long does a commercial roof installation take in {location}?</h3>
              <p>Installation time varies based on the size and complexity of the project, typically ranging from 1-3 weeks for {location} commercial properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you offer warranties in {location}?</h3>
              <p>Yes, we provide comprehensive warranties on both materials and workmanship for all {location} commercial projects.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Can you work around our {location} business hours?</h3>
              <p>Yes, we offer flexible scheduling options to minimize disruption to your {location} business operations.</p>
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

export default CommercialRoofingLocation;
