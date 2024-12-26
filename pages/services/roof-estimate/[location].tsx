import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../../components/ServiceLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const RoofEstimateLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const serviceName = `Roof Estimates in ${location}`;
  const serviceDescription = `Professional roof estimates and surveys in ${location}. Expert assessment and detailed quotes for all roofing work across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | Professional Roof Estimates in ${location}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`roof estimate ${location}, roofing quote ${location}, roof survey ${county}, roofing assessment ${location}, free estimate ${location}`} />
      </Head>

      <ServiceLayout
        heroTitle={`Professional Roof Estimates in ${location}`}
        heroDescription={`Expert assessment and detailed quotes for your ${location} property`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comprehensive Roof Estimates in {location}
          </h2>
          <p className="mb-4">
            Our professional roof estimation service in {location} provides detailed assessments and accurate quotes. 
            We offer thorough evaluations for all types of roofing work across {county}.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Estimate Services in {location}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Free initial assessment</li>
                <li>Detailed surveys</li>
                <li>Written quotes</li>
                <li>Project planning</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{location} Assessment Types</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>New roof estimates</li>
                <li>Repair assessments</li>
                <li>Maintenance quotes</li>
                <li>Emergency evaluations</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Estimation Services in {location}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Visual Inspection</h3>
              <p>Thorough external assessment for {county} properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Detailed Survey</h3>
              <p>Comprehensive evaluation in {location}.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Written Quote</h3>
              <p>Detailed pricing breakdown and recommendations.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our {location} Estimation Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Initial Contact</h3>
              <p>Schedule your free {location} property assessment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Site Survey</h3>
              <p>Thorough inspection of your {county} property.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Detailed Quote</h3>
              <p>Comprehensive estimate with clear pricing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Project Planning</h3>
              <p>Timeline and material recommendations for {location} work.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {location} Roof Estimate FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Are estimates free in {location}?</h3>
              <p>Yes, we provide free initial assessments and quotes for all {location} properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How detailed are your estimates in {location}?</h3>
              <p>Our estimates include full breakdowns of materials, labour, and timelines for {county} projects.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How quickly can I get an estimate in {location}?</h3>
              <p>We can usually provide estimates within 24-48 hours of inspecting your {location} property.</p>
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

export default RoofEstimateLocation;
