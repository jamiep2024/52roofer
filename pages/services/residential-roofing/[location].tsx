import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../../components/ServiceLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const ResidentialRoofingLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const serviceName = `Residential Roofing in ${location}`;
  const serviceDescription = `Expert residential roofing services in ${location}, including installations, repairs, and maintenance for homes across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | Expert Residential Roofers in ${location}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`residential roofing ${location}, home roofing ${location}, house roof repair ${county}, residential roof installation ${location}, local roofers ${location}`} />
      </Head>

      <ServiceLayout
        heroTitle={`Professional Residential Roofing Services in ${location}`}
        heroDescription={`Expert roofing solutions for your ${location} home, delivered with care and precision`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Complete Residential Roofing Solutions in {location}
          </h2>
          <p className="mb-4">
            Our residential roofing services are designed to meet the unique needs of homeowners in {location} and across {county}. 
            We provide comprehensive roofing solutions with attention to detail and commitment to quality.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">New Roof Installation in {location}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Complete roof replacements</li>
                <li>New build installations</li>
                <li>Energy-efficient options</li>
                <li>Premium materials</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{location} Roof Maintenance</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Regular inspections</li>
                <li>Preventive maintenance</li>
                <li>Gutter cleaning</li>
                <li>Minor repairs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Residential Roofing Options in {location}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Traditional Tiles</h3>
              <p>Classic roofing solutions perfect for {county} homes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Slate Roofing</h3>
              <p>Premium natural slate ideal for {location} properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Modern Materials</h3>
              <p>Contemporary solutions suited to {location} weather conditions.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our {location} Residential Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Initial Consultation</h3>
              <p>Thorough assessment of your {location} home's roofing needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Detailed Planning</h3>
              <p>Custom solution design considering {county} weather patterns.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Expert Installation</h3>
              <p>Professional installation by experienced {location} roofers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Final Inspection</h3>
              <p>Comprehensive quality check ensuring {location} building standards.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {location} Residential Roofing FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long does a new roof installation take in {location}?</h3>
              <p>Most residential installations in {location} take 2-4 days, depending on the size and complexity of your roof.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What warranties do you offer in {location}?</h3>
              <p>We provide comprehensive warranties on both materials and workmanship for all {location} residential projects.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you handle emergency repairs in {location}?</h3>
              <p>Yes, we offer 24/7 emergency repair services for {location} homeowners.</p>
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

export default ResidentialRoofingLocation;
