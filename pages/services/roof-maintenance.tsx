import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../components/ServiceLayout';

const RoofMaintenance: React.FC = () => {
  const serviceName = "Roof Maintenance";
  const serviceDescription = "Professional roof maintenance services to extend your roof's lifespan and prevent costly repairs through regular inspections and upkeep.";

  return (
    <>
      <Head>
        <title>{`${serviceName} Services | Professional Roof Maintenance`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content="roof maintenance, roof upkeep, preventive maintenance, roof inspection, roof care, roof servicing" />
      </Head>

      <ServiceLayout
        heroTitle="Professional Roof Maintenance Services"
        heroDescription="Keep your roof in perfect condition with our expert maintenance services"
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comprehensive Roof Maintenance Solutions
          </h2>
          <p className="mb-4">
            Regular roof maintenance is essential for extending the life of your roof and preventing costly repairs. 
            Our professional maintenance services help identify and address potential issues before they become major problems, 
            saving you time and money in the long run.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Preventive Maintenance</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Regular roof inspections</li>
                <li>Gutter cleaning and maintenance</li>
                <li>Minor repairs and adjustments</li>
                <li>Weatherproofing services</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Maintenance Programs</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Customized maintenance schedules</li>
                <li>Detailed inspection reports</li>
                <li>Priority response service</li>
                <li>Cost-effective packages</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Benefits of Regular Maintenance
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Extended Lifespan</h3>
              <p>Regular maintenance can significantly extend your roof's service life.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Cost Savings</h3>
              <p>Prevent expensive repairs by catching issues early.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Peace of Mind</h3>
              <p>Know your roof is in good condition year-round.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Maintenance Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Thorough Inspection</h3>
              <p>Comprehensive evaluation of your roof's condition and identification of potential issues.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Detailed Reporting</h3>
              <p>Documentation of findings with photos and recommendations for necessary repairs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Preventive Maintenance</h3>
              <p>Performance of necessary maintenance tasks and minor repairs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Follow-up Schedule</h3>
              <p>Setting up the next maintenance visit and ongoing care plan.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Maintenance Services Include
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Inspection Services</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Visual roof inspection</li>
                <li>Structural integrity check</li>
                <li>Moisture detection</li>
                <li>Drainage system evaluation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Maintenance Tasks</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Gutter cleaning</li>
                <li>Debris removal</li>
                <li>Minor repairs</li>
                <li>Sealant application</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Maintenance FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How often should I have my roof maintained?</h3>
              <p>We recommend professional maintenance at least twice a year, typically in spring and autumn.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What's included in a maintenance program?</h3>
              <p>Our programs include regular inspections, cleaning, minor repairs, and detailed condition reports.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How much can maintenance save me?</h3>
              <p>Regular maintenance can save up to 50% on roof replacement costs by extending your roof's lifespan.</p>
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  );
};

export default RoofMaintenance;
