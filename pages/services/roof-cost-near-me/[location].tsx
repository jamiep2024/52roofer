import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../../components/ServiceLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const RoofCostNearMeLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const serviceName = `Roof Cost Guide in ${location}`;
  const serviceDescription = `Comprehensive roofing cost information and quotes in ${location}. Expert pricing guidance for all roofing services across ${county}.`;

  return (
    <>
      <Head>
        <title>{`${serviceName} | Roofing Costs Near You in ${location}`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content={`roof cost ${location}, roofing prices ${location}, roof quotes ${county}, roofing estimates ${location}, local roof prices ${location}`} />
      </Head>

      <ServiceLayout
        heroTitle={`Roofing Costs and Quotes in ${location}`}
        heroDescription={`Transparent pricing and professional quotes for all roofing services in ${location}`}
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Roofing Cost Guide for {location}
          </h2>
          <p className="mb-4">
            Understanding roofing costs in {location} is essential for making informed decisions. Our local team provides 
            transparent pricing and detailed quotes for all roofing services across {county}.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">New Roof Costs in {location}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Full roof replacements: £5,000-£15,000</li>
                <li>Partial re-roofing: £3,000-£7,000</li>
                <li>Emergency installations: From £2,000</li>
                <li>Custom solutions: Price on consultation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{location} Repair Costs</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Minor repairs: £150-£500</li>
                <li>Major repairs: £500-£2,000</li>
                <li>Emergency fixes: From £200</li>
                <li>Maintenance work: From £150</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Material Costs in {location}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Traditional Materials</h3>
              <p>Slate and tile options in {county}: £40-£80 per m²</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Modern Solutions</h3>
              <p>Contemporary materials for {location}: £30-£60 per m²</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Premium Options</h3>
              <p>High-end roofing in {location}: £70-£120 per m²</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our {location} Pricing Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Free Assessment</h3>
              <p>Detailed evaluation of your {location} property's requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Detailed Quote</h3>
              <p>Comprehensive pricing breakdown for {county} properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Cost Options</h3>
              <p>Multiple pricing options for different solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Transparent Pricing</h3>
              <p>Clear costs with no hidden charges for {location} customers.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {location} Roofing Cost FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How much does a new roof cost in {location}?</h3>
              <p>New roof costs in {location} typically range from £5,000 to £15,000, depending on size and materials.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What affects roofing costs in {location}?</h3>
              <p>Costs are influenced by material choice, roof size, complexity, and specific {county} requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you offer payment plans in {location}?</h3>
              <p>Yes, we provide flexible payment options for {location} customers on larger roofing projects.</p>
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

export default RoofCostNearMeLocation;
