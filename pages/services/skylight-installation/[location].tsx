import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../../components/ServiceLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const SkylightInstallationLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const serviceName = `Skylight Installation Services in ${location}`;
  const serviceDescription = `Professional skylight installation and replacement services in ${location}. Expert solutions for natural lighting in properties across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | Expert Skylight Installation in ${location}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`skylight installation ${location}, roof windows ${location}, skylight fitting ${county}, natural lighting ${location}, skylight replacement ${location}`} />
      </Head>

      <ServiceLayout
        heroTitle={`Professional Skylight Installation Services in ${location}`}
        heroDescription={`Transform your space with natural light solutions in ${location}`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Complete Skylight Solutions in {location}
          </h2>
          <p className="mb-4">
            Our professional skylight installation services in {location} bring natural light into your property. 
            We provide expert installation of quality skylights suited to {county} weather conditions.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Installation Services in {location}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>New skylight fitting</li>
                <li>Replacement services</li>
                <li>Custom solutions</li>
                <li>Modern systems</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{location} Skylight Options</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fixed skylights</li>
                <li>Opening skylights</li>
                <li>Solar-powered units</li>
                <li>Smart systems</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Skylight Solutions in {location}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Fixed Skylights</h3>
              <p>Classic lighting solutions for {county} properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Venting Skylights</h3>
              <p>Opening systems for {location} ventilation needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Smart Systems</h3>
              <p>Modern automated solutions for {location} homes.</p>
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
              <h3 className="text-xl font-semibold mb-4">2. Design Planning</h3>
              <p>Custom solution design for your {county} property.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Expert Installation</h3>
              <p>Professional fitting by skilled {location} installers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Quality Assurance</h3>
              <p>Thorough testing and weatherproofing checks.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {location} Skylight Installation FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long does skylight installation take in {location}?</h3>
              <p>Most installations in {location} take 1-2 days, depending on the complexity and type of skylight.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What skylights are best for {location} weather?</h3>
              <p>We recommend high-quality, weather-resistant skylights suited to {county} conditions.</p>
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

export default SkylightInstallationLocation;
