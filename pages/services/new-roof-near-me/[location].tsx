import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../../components/ServiceLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const NewRoofNearMeLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const serviceName = `New Roof Installation in ${location}`;
  const serviceDescription = `Professional new roof installation services near you in ${location}. Expert roofing solutions for properties across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | Expert Roofers Near You in ${location}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`new roof ${location}, roof installation near me ${location}, local roofers ${county}, roofing contractors ${location}, roof replacement ${location}`} />
      </Head>

      <ServiceLayout
        heroTitle={`New Roof Installation Services in ${location}`}
        heroDescription={`Professional roofing solutions near you in ${location}`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Local New Roof Solutions in {location}
          </h2>
          <p className="mb-4">
            Looking for professional new roof installation services in {location}? Our local team provides expert roofing solutions 
            across {county}, delivering quality workmanship and reliable service.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">New Roof Services in {location}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Complete roof installations</li>
                <li>Full replacements</li>
                <li>Custom solutions</li>
                <li>Emergency installations</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{location} Roofing Options</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Traditional tiles</li>
                <li>Modern materials</li>
                <li>Slate roofing</li>
                <li>Flat roof systems</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Roofing Solutions in {location}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Residential Roofs</h3>
              <p>Complete home roofing solutions in {county}.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Commercial Projects</h3>
              <p>Professional installations for {location} businesses.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Emergency Service</h3>
              <p>Rapid response installations when needed.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our {location} Installation Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Free Consultation</h3>
              <p>Detailed assessment of your {location} property's needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Custom Design</h3>
              <p>Tailored roofing solution for your {county} property.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Professional Installation</h3>
              <p>Expert fitting by local {location} roofers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Quality Assurance</h3>
              <p>Thorough inspection and testing of your new roof.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {location} New Roof FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long does a new roof installation take in {location}?</h3>
              <p>Most residential installations in {location} take 2-5 days, depending on size and complexity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What roofing materials are best for {location}?</h3>
              <p>We recommend materials suited to {county} weather conditions, including slate, tile, and modern composites.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you provide warranties in {location}?</h3>
              <p>Yes, we offer comprehensive warranties on both materials and workmanship for all {location} installations.</p>
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

export default NewRoofNearMeLocation;
