import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../../components/ServiceLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const RoofInstallationLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const serviceName = `Roof Installation Services in ${location}`;
  const serviceDescription = `Professional roof installation services in ${location}. Expert installation of all roof types for properties across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | Expert Roof Installers in ${location}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`roof installation ${location}, new roof ${location}, roof replacement ${county}, roofing contractors ${location}, roof fitting ${location}`} />
      </Head>

      <ServiceLayout
        heroTitle={`Professional Roof Installation Services in ${location}`}
        heroDescription={`Expert roof installation and replacement solutions for ${location} properties`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Complete Roof Installation Solutions in {location}
          </h2>
          <p className="mb-4">
            Our professional roof installation services in {location} provide quality solutions for all property types. 
            We specialize in installing various roofing systems suited to {county} weather conditions.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Installation Services in {location}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>New roof installations</li>
                <li>Complete replacements</li>
                <li>Re-roofing projects</li>
                <li>Custom installations</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{location} Roofing Materials</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Slate and tile</li>
                <li>Metal roofing</li>
                <li>Flat roof systems</li>
                <li>Modern composites</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Roofing Options in {location}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Traditional Roofing</h3>
              <p>Classic slate and tile solutions for {county} properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Modern Systems</h3>
              <p>Contemporary roofing solutions for {location} buildings.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Flat Roofing</h3>
              <p>Specialist flat roof installations in {location}.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our {location} Installation Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Initial Consultation</h3>
              <p>Detailed assessment of your {location} property's requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Design and Planning</h3>
              <p>Custom solution design for your {county} property.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Professional Installation</h3>
              <p>Expert fitting by skilled {location} installers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Quality Assurance</h3>
              <p>Thorough inspection and testing of your new roof.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {location} Roof Installation FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long does roof installation take in {location}?</h3>
              <p>Most residential installations in {location} take 2-5 days, depending on size and complexity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What roofing materials are best for {location}?</h3>
              <p>We recommend materials suited to {county} weather conditions, including slate, tile, and modern composites.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you offer warranties in {location}?</h3>
              <p>Yes, we provide comprehensive warranties on both materials and workmanship for all {location} installations.</p>
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

export default RoofInstallationLocation;
