import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../../components/ServiceLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const EmergencyRoofRepairLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const serviceName = `Emergency Roof Repair in ${location}`;
  const serviceDescription = `24/7 emergency roof repair services in ${location}. Fast response times and professional repairs for homes and businesses across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | 24/7 Emergency Roofers in ${location}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`emergency roof repair ${location}, urgent roof fix ${location}, 24/7 roofer ${county}, emergency roofing ${location}, roof leak repair ${location}`} />
      </Head>

      <ServiceLayout
        heroTitle={`24/7 Emergency Roof Repair Services in ${location}`}
        heroDescription={`Fast response emergency roofing solutions in ${location} when you need them most`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Emergency Roof Repair Solutions in {location}
          </h2>
          <p className="mb-4">
            When disaster strikes, our emergency roof repair team in {location} is ready to respond 24/7. 
            We provide rapid response services across {county} to protect your property from further damage.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Emergency Services in {location}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>24/7 emergency response</li>
                <li>Rapid leak repairs</li>
                <li>Storm damage fixes</li>
                <li>Temporary protection</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{location} Repair Solutions</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Professional assessment</li>
                <li>Immediate action</li>
                <li>Quality repairs</li>
                <li>Insurance support</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Emergency Roofing Services in {location}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Storm Damage</h3>
              <p>Fast response to {county} weather-related emergencies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Leak Response</h3>
              <p>Immediate action for roof leaks in {location} properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Structural Issues</h3>
              <p>Emergency repairs for critical structural problems.</p>
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
              <p>Quick arrival to your {location} property within hours.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Emergency Assessment</h3>
              <p>Swift evaluation of damage and immediate risks.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Immediate Action</h3>
              <p>Fast implementation of emergency repairs or protection.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Follow-up Plan</h3>
              <p>Development of long-term repair solutions for {location} properties.</p>
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
              <p>We aim to reach most {location} locations within 2-4 hours of your emergency call.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you work with insurance in {location}?</h3>
              <p>Yes, we work with all major insurance providers and can help with your claim process in {county}.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What emergency services do you offer in {location}?</h3>
              <p>We provide temporary repairs, leak stopping, storm damage repair, and structural emergency solutions across {location}.</p>
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

export default EmergencyRoofRepairLocation;
