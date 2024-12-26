import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../components/ServiceLayout';

const RoofInstallation: React.FC = () => {
  const serviceName = "Roof Installation";
  const serviceDescription = "Professional roof installation services including new constructions and complete replacements with expert craftsmanship.";

  return (
    <>
      <Head>
        <title>{`${serviceName} Services | Expert Roof Installation`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content="roof installation, new roof, roof replacement, roofing installation, professional roofers, roof fitting" />
      </Head>

      <ServiceLayout
        heroTitle="Professional Roof Installation Services"
        heroDescription="Expert installation of new roofs and complete replacements with quality materials"
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Expert Roof Installation Services
          </h2>
          <p className="mb-4">
            Our professional roof installation services ensure your property is protected with a high-quality, 
            properly installed roof. Whether you need a new roof for a new construction project or a complete 
            replacement, our expert team delivers superior results.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">New Construction Installation</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Custom design solutions</li>
                <li>Premium material options</li>
                <li>Expert installation teams</li>
                <li>Building code compliance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Roof Replacement</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Complete tear-off service</li>
                <li>Structural inspection</li>
                <li>Quality material installation</li>
                <li>Debris removal and cleanup</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Available Roofing Materials
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Asphalt Shingles</h3>
              <p>Cost-effective and versatile with 20-30 year lifespan.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Metal Roofing</h3>
              <p>Durable and energy-efficient with 50+ year lifespan.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Slate Tiles</h3>
              <p>Premium natural material with 100+ year lifespan.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Installation Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Initial Assessment</h3>
              <p>Thorough evaluation of your roofing needs and property requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Material Selection</h3>
              <p>Expert guidance in choosing the right materials for your specific needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Installation</h3>
              <p>Professional installation following manufacturer specifications and building codes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Final Inspection</h3>
              <p>Comprehensive quality check and final walkthrough with the client.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Roof Installation FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long does a new roof installation take?</h3>
              <p>Most residential installations take 2-4 days, while larger or more complex projects may take 1-2 weeks.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What warranties do you offer?</h3>
              <p>We provide manufacturer warranties on materials (20-50 years) and workmanship warranties (10-25 years).</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Can you install a roof in winter?</h3>
              <p>Yes, we can install roofs year-round, though certain weather conditions may affect scheduling.</p>
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  );
};

export default RoofInstallation;
