import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../../components/ServiceLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const RoofInspectionLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const serviceName = `Roof Inspection Services in ${location}`;
  const serviceDescription = `Professional roof inspection and survey services in ${location}. Detailed assessments and reports for properties across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | Expert Roof Inspectors in ${location}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`roof inspection ${location}, roof survey ${location}, property inspection ${county}, roof assessment ${location}, building survey ${location}`} />
      </Head>

      <ServiceLayout
        heroTitle={`Professional Roof Inspection Services in ${location}`}
        heroDescription={`Thorough roof assessments and detailed reports for ${location} properties`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comprehensive Roof Inspections in {location}
          </h2>
          <p className="mb-4">
            Our professional roof inspection services in {location} provide detailed assessments of your property's roof condition. 
            We deliver thorough reports and recommendations for properties across {county}.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Inspection Services in {location}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Full roof surveys</li>
                <li>Condition reports</li>
                <li>Leak investigations</li>
                <li>Pre-purchase inspections</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{location} Assessment Types</h3>
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
            Inspection Services in {location}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Residential Surveys</h3>
              <p>Detailed home roof inspections across {county}.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Commercial Inspections</h3>
              <p>Professional assessments for {location} businesses.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Emergency Checks</h3>
              <p>Rapid response inspections in {location}.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our {location} Inspection Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Initial Assessment</h3>
              <p>Comprehensive exterior evaluation of your {location} property.</p>
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
            {location} Roof Inspection FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long does a roof inspection take in {location}?</h3>
              <p>Most {location} residential inspections take 1-2 hours, while commercial properties may require longer.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What's included in a {location} roof inspection?</h3>
              <p>Our inspections include exterior assessment, internal check, structural evaluation, and a detailed report.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you offer emergency inspections in {location}?</h3>
              <p>Yes, we provide rapid response inspections for urgent situations across {location} and {county}.</p>
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

export default RoofInspectionLocation;
