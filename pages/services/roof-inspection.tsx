import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../components/ServiceLayout';

const RoofInspection: React.FC = () => {
  const serviceName = "Roof Inspection";
  const serviceDescription = "Professional roof inspection services providing detailed assessments and reports to identify potential issues and maintain your roof's integrity.";

  return (
    <>
      <Head>
        <title>{`${serviceName} Services | Expert Roof Inspections`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content="roof inspection, roof assessment, roof survey, roof check, professional roof inspector, roof condition report" />
      </Head>

      <ServiceLayout
        heroTitle="Professional Roof Inspection Services"
        heroDescription="Comprehensive roof assessments by certified inspectors"
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Expert Roof Inspection Services
          </h2>
          <p className="mb-4">
            Our professional roof inspection services provide thorough assessments of your roof's condition, 
            identifying potential issues before they become major problems. Our certified inspectors use advanced 
            techniques and equipment to ensure nothing is overlooked.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Residential Inspections</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Complete roof system evaluation</li>
                <li>Leak detection services</li>
                <li>Storm damage assessment</li>
                <li>Pre-purchase inspections</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Commercial Inspections</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Detailed structural analysis</li>
                <li>Compliance verification</li>
                <li>Maintenance planning</li>
                <li>Insurance documentation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What We Inspect
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Structural Elements</h3>
              <p>Assessment of rafters, trusses, and decking integrity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Surface Materials</h3>
              <p>Evaluation of shingles, tiles, or other roofing materials.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Drainage Systems</h3>
              <p>Inspection of gutters, downspouts, and drainage patterns.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Inspection Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. External Assessment</h3>
              <p>Visual inspection of all exterior roofing components and materials.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Internal Inspection</h3>
              <p>Examination of attic space, internal structures, and ventilation systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Documentation</h3>
              <p>Detailed photography and documentation of findings.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Report Generation</h3>
              <p>Comprehensive report with findings and recommendations.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Types of Inspections
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Routine Inspections</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Annual maintenance checks</li>
                <li>Seasonal assessments</li>
                <li>Preventive evaluations</li>
                <li>General condition reports</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Specialized Inspections</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Insurance claims assessment</li>
                <li>Storm damage evaluation</li>
                <li>Pre-sale inspections</li>
                <li>Warranty compliance checks</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Inspection FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How often should I have my roof inspected?</h3>
              <p>We recommend professional inspections at least once a year, or after severe weather events.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What's included in the inspection report?</h3>
              <p>Our reports include detailed findings, photos, condition assessments, and recommended actions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long does an inspection take?</h3>
              <p>Most residential inspections take 1-2 hours, while commercial properties may require longer.</p>
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  );
};

export default RoofInspection;
