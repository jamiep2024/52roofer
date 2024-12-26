import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../../components/ServiceLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const RoofReplacementLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const serviceName = `Roof Replacement Services in ${location}`;
  const serviceDescription = `Professional roof replacement services in ${location}. Complete re-roofing solutions for residential and commercial properties across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | Expert Roof Replacement in ${location}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`roof replacement ${location}, re-roofing ${location}, new roof ${county}, roof renewal ${location}, roof upgrade ${location}`} />
      </Head>

      <ServiceLayout
        heroTitle={`Professional Roof Replacement Services in ${location}`}
        heroDescription={`Complete re-roofing solutions for your ${location} property`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Expert Roof Replacement in {location}
          </h2>
          <p className="mb-4">
            Our professional roof replacement services in {location} provide complete solutions for updating your property. 
            We specialize in full re-roofing projects across {county}, using quality materials and expert installation.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Replacement Services in {location}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Complete re-roofing</li>
                <li>Partial replacement</li>
                <li>Material upgrades</li>
                <li>System improvements</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{location} Roofing Options</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Traditional materials</li>
                <li>Modern systems</li>
                <li>Energy-efficient solutions</li>
                <li>Premium finishes</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Replacement Solutions in {location}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Traditional Systems</h3>
              <p>Classic roofing suited to {county} properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Modern Materials</h3>
              <p>Contemporary solutions for {location} homes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Premium Options</h3>
              <p>High-end roofing systems and finishes.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our {location} Replacement Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Detailed Assessment</h3>
              <p>Complete evaluation of your {location} property.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Custom Planning</h3>
              <p>Tailored solution design for {county} conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Expert Replacement</h3>
              <p>Professional installation by skilled {location} teams.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Quality Assurance</h3>
              <p>Thorough inspection and testing process.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {location} Roof Replacement FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long does roof replacement take in {location}?</h3>
              <p>Most residential replacements in {location} take 2-5 days, depending on size and complexity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What roofing materials do you recommend for {location}?</h3>
              <p>We recommend materials suited to {county} weather conditions, including slate, tile, and modern composites.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you offer warranties in {location}?</h3>
              <p>Yes, we provide comprehensive warranties on both materials and workmanship for all {location} replacements.</p>
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

export default RoofReplacementLocation;
