import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../components/ServiceLayout';

const CommercialRoofing: React.FC = () => {
  const serviceName = "Commercial Roofing";
  const serviceDescription = "Professional commercial roofing solutions for businesses, including installations, repairs, and maintenance services.";

  return (
    <>
      <Head>
        <title>{`${serviceName} Services | Expert Commercial Roofers`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content="commercial roofing, business roofing, industrial roofing, commercial roof repair, flat roofing, commercial roof installation" />
      </Head>

      <ServiceLayout
        heroTitle="Professional Commercial Roofing Services"
        heroDescription="Expert roofing solutions for your business, delivered with minimal disruption"
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Complete Commercial Roofing Solutions
          </h2>
          <p className="mb-4">
            Our commercial roofing services are tailored to meet the unique needs of businesses and industrial properties. 
            We understand that minimizing disruption to your operations is crucial, which is why we offer flexible scheduling 
            and efficient project management.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Commercial Roof Installation</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>New construction roofing</li>
                <li>Roof replacement services</li>
                <li>Energy-efficient systems</li>
                <li>Custom roofing solutions</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Commercial Maintenance</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Preventive maintenance programs</li>
                <li>Regular inspections</li>
                <li>Emergency repair services</li>
                <li>Leak detection and repair</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Commercial Roofing Systems
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Built-Up Roofing</h3>
              <p>Traditional multi-layer system ideal for flat or low-slope roofs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Modified Bitumen</h3>
              <p>Durable system with excellent waterproofing properties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Single-Ply Membranes</h3>
              <p>Modern, energy-efficient EPDM and TPO roofing systems.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Commercial Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Site Assessment</h3>
              <p>Comprehensive evaluation of your commercial property's roofing needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Custom Solution Design</h3>
              <p>Development of tailored roofing solutions that meet your specific requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Professional Installation</h3>
              <p>Expert installation with minimal disruption to your business operations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Quality Assurance</h3>
              <p>Rigorous quality control and final inspection process.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Commercial Roofing FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long does a commercial roof installation take?</h3>
              <p>Installation time varies based on the size and complexity of the project, typically ranging from 1-3 weeks.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you offer warranties?</h3>
              <p>Yes, we provide comprehensive warranties on both materials and workmanship for commercial projects.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Can you work around our business hours?</h3>
              <p>Yes, we offer flexible scheduling options to minimize disruption to your business operations.</p>
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  );
};

export default CommercialRoofing;
