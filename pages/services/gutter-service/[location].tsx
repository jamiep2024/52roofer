import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../../components/ServiceLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const GutterServiceLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const serviceName = `Gutter Services in ${location}`;
  const serviceDescription = `Professional gutter installation, repair, and maintenance services in ${location}. Expert solutions for homes and businesses across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | Expert Gutter Services in ${location}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`gutter services ${location}, gutter repair ${location}, gutter installation ${county}, gutter maintenance ${location}, gutter cleaning ${location}`} />
      </Head>

      <ServiceLayout
        heroTitle={`Professional Gutter Services in ${location}`}
        heroDescription={`Complete gutter solutions for ${location} properties, ensuring proper drainage and protection`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comprehensive Gutter Solutions in {location}
          </h2>
          <p className="mb-4">
            Our professional gutter services in {location} ensure your property's drainage system functions perfectly year-round. 
            We provide complete solutions for homes and businesses across {county}.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Installation Services in {location}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>New gutter systems</li>
                <li>Seamless guttering</li>
                <li>Downpipe installation</li>
                <li>Gutter guards</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{location} Maintenance Services</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Regular cleaning</li>
                <li>Preventive maintenance</li>
                <li>Repairs and fixes</li>
                <li>System updates</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Gutter Solutions in {location}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Seamless Gutters</h3>
              <p>Custom-fit guttering perfect for {county} properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Gutter Guards</h3>
              <p>Protection systems suited to {location} conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Downpipe Systems</h3>
              <p>Efficient water management for {location} buildings.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our {location} Gutter Service Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. System Assessment</h3>
              <p>Thorough evaluation of your {location} property's guttering needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Custom Solution</h3>
              <p>Tailored gutter solutions for your {county} property.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Professional Service</h3>
              <p>Expert installation or maintenance by {location} specialists.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Quality Check</h3>
              <p>Comprehensive testing of your {location} gutter system.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {location} Gutter Service FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How often should gutters be cleaned in {location}?</h3>
              <p>We recommend cleaning gutters at least twice a year in {location}, with additional checks after severe {county} weather.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What gutter systems do you install in {location}?</h3>
              <p>We install various gutter systems in {location}, including seamless aluminum, copper, and uPVC options.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you offer gutter guards in {location}?</h3>
              <p>Yes, we provide and install various gutter guard systems suited to {location} conditions.</p>
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

export default GutterServiceLocation;
