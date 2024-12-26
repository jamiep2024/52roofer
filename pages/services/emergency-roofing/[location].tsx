import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../../components/ServiceLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const EmergencyRoofingLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const serviceName = `Emergency Roofing Services in ${location}`;
  const serviceDescription = `24/7 emergency roofing services in ${location}. Fast response and professional solutions for urgent roof repairs across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | 24/7 Emergency Roofers in ${location}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`emergency roofing ${location}, urgent roof repair ${location}, 24/7 roofer ${county}, emergency roof fix ${location}, storm damage repair ${location}`} />
      </Head>

      <ServiceLayout
        heroTitle={`24/7 Emergency Roofing Services in ${location}`}
        heroDescription={`Fast response emergency roofing solutions in ${location} when you need them most`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Emergency Roofing Solutions in {location}
          </h2>
          <p className="mb-4">
            When disaster strikes, our emergency roofing team in {location} is ready to respond 24/7. 
            We provide rapid response services across {county} to protect your property from further damage.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Emergency Services in {location}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>24/7 rapid response</li>
                <li>Storm damage repair</li>
                <li>Leak prevention</li>
                <li>Temporary protection</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{location} Emergency Solutions</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Immediate assessment</li>
                <li>Quick repairs</li>
                <li>Weather protection</li>
                <li>Insurance support</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Emergency Services in {location}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Storm Damage</h3>
              <p>Rapid response to {county} weather emergencies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Leak Control</h3>
              <p>Immediate action for {location} roof leaks.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Urgent Repairs</h3>
              <p>Fast solutions for critical problems.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our {location} Emergency Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Rapid Response</h3>
              <p>Quick arrival to your {location} property.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Damage Assessment</h3>
              <p>Swift evaluation of {county} weather damage.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Immediate Action</h3>
              <p>Fast implementation of emergency solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Permanent Repairs</h3>
              <p>Long-term fixes for {location} properties.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {location} Emergency Roofing FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How quickly can you respond in {location}?</h3>
              <p>We aim to reach most {location} locations within 1-2 hours of your emergency call.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What emergency services do you offer in {location}?</h3>
              <p>We provide immediate repairs, leak control, storm damage fixes, and temporary protection across {county}.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you work with insurance in {location}?</h3>
              <p>Yes, we assist with insurance claims and provide detailed documentation for {location} properties.</p>
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

export default EmergencyRoofingLocation;
