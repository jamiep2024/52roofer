import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../../components/ServiceLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const FlatRoofLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const serviceName = `Flat Roof Services in ${location}`;
  const serviceDescription = `Professional flat roof installation, repair, and maintenance services in ${location}. Expert solutions for all flat roofing needs across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | Expert Flat Roofing in ${location}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`flat roof ${location}, flat roofing ${location}, EPDM roofing ${county}, commercial flat roof ${location}, flat roof repair ${location}`} />
      </Head>

      <ServiceLayout
        heroTitle={`Professional Flat Roofing Services in ${location}`}
        heroDescription={`Expert flat roof solutions for residential and commercial properties in ${location}`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Complete Flat Roof Solutions in {location}
          </h2>
          <p className="mb-4">
            Our professional flat roofing services in {location} cover all aspects of installation, repair, and maintenance. 
            We provide expert solutions using modern materials suited to {county} weather conditions.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Flat Roof Services in {location}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>New installations</li>
                <li>Roof replacements</li>
                <li>Repairs and maintenance</li>
                <li>Waterproofing solutions</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{location} Roofing Systems</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>EPDM rubber roofing</li>
                <li>Built-up felt systems</li>
                <li>GRP fiberglass</li>
                <li>PVC membranes</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Flat Roofing Options in {location}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">EPDM Systems</h3>
              <p>Durable rubber roofing perfect for {county} weather.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Felt Systems</h3>
              <p>Traditional solutions for {location} properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Modern Materials</h3>
              <p>Advanced systems for optimal performance.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our {location} Installation Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Initial Survey</h3>
              <p>Detailed assessment of your {location} property.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Material Selection</h3>
              <p>Choose the right system for {county} conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Professional Installation</h3>
              <p>Expert fitting by skilled {location} technicians.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Quality Assurance</h3>
              <p>Thorough testing and inspection process.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {location} Flat Roof FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long do flat roofs last in {location}?</h3>
              <p>Modern flat roofing systems in {location} typically last 20-30 years with proper maintenance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What's the best flat roof system for {location}?</h3>
              <p>We recommend EPDM or modern PVC systems for {county} weather conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you offer warranties in {location}?</h3>
              <p>Yes, we provide comprehensive warranties on materials and workmanship for all {location} installations.</p>
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

export default FlatRoofLocation;
