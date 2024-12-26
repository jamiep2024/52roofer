import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../../components/ServiceLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const LocalRooferLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const serviceName = `Local Roofers in ${location}`;
  const serviceDescription = `Professional local roofing services in ${location}. Expert roofers providing quality solutions for all properties across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | Expert Local Roofers in ${location}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`local roofer ${location}, roofing contractor ${location}, trusted roofer ${county}, nearby roofer ${location}, best roofers ${location}`} />
      </Head>

      <ServiceLayout
        heroTitle={`Professional Local Roofers in ${location}`}
        heroDescription={`Your trusted local roofing experts in ${location}`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Your Local Roofing Experts in {location}
          </h2>
          <p className="mb-4">
            As your local roofing specialists in {location}, we provide comprehensive roofing services with the personal touch 
            that comes from being part of the {county} community.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Local Services in {location}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Roof installations</li>
                <li>Repairs and maintenance</li>
                <li>Emergency response</li>
                <li>Free local surveys</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{location} Expertise</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Local knowledge</li>
                <li>Rapid response</li>
                <li>Quality materials</li>
                <li>Trusted service</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Local Roofing Solutions in {location}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Residential Services</h3>
              <p>Complete home roofing in {county}.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Commercial Work</h3>
              <p>Business solutions in {location}.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Emergency Response</h3>
              <p>Fast local assistance when needed.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Local in {location}
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Local Knowledge</h3>
              <p>Understanding of {location} properties and conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Quick Response</h3>
              <p>Fast service across {county} area.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Personal Service</h3>
              <p>Direct communication with local experts.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Community Trust</h3>
              <p>Established reputation in {location}.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {location} Local Roofer FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How quickly can you respond in {location}?</h3>
              <p>As local roofers, we can usually respond within 24 hours for standard work, and within 2-4 hours for emergencies in {location}.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you know {location} building regulations?</h3>
              <p>Yes, we're fully familiar with all {county} and {location} building regulations and requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Are you insured local roofers in {location}?</h3>
              <p>Yes, we're fully insured and accredited local roofers serving {location} and surrounding areas.</p>
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

export default LocalRooferLocation;
