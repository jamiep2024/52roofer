import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../components/ServiceLayout';

const RoofVentilation: React.FC = () => {
  const serviceName = "Roof Ventilation";
  const serviceDescription = "Professional roof ventilation services to improve your home's energy efficiency and protect your roof from moisture damage.";

  return (
    <>
      <Head>
        <title>{`${serviceName} Services | Expert Roof Ventilation`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content="roof ventilation, attic ventilation, roof vents, ventilation installation, air flow, moisture control" />
      </Head>

      <ServiceLayout
        heroTitle="Professional Roof Ventilation Services"
        heroDescription="Optimize your roof's performance with expert ventilation solutions"
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Expert Roof Ventilation Solutions
          </h2>
          <p className="mb-4">
            Proper roof ventilation is crucial for maintaining your home's energy efficiency and protecting 
            your roof from moisture damage. Our professional ventilation services ensure optimal airflow 
            and temperature control throughout your roof space.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Ventilation Installation</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ridge vent installation</li>
                <li>Soffit vent fitting</li>
                <li>Gable vent installation</li>
                <li>Power ventilator setup</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">System Improvements</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ventilation assessment</li>
                <li>Airflow optimization</li>
                <li>System upgrades</li>
                <li>Efficiency improvements</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Types of Ventilation
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Ridge Vents</h3>
              <p>Continuous ventilation along the roof's peak for optimal airflow.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Soffit Vents</h3>
              <p>Under-eave ventilation for proper air intake and circulation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Power Ventilators</h3>
              <p>Mechanical ventilation for enhanced air movement when needed.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Ventilation Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Ventilation Assessment</h3>
              <p>Comprehensive evaluation of current ventilation and airflow patterns.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. System Design</h3>
              <p>Custom ventilation solution design based on your specific needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Professional Installation</h3>
              <p>Expert installation of ventilation components and systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Performance Testing</h3>
              <p>Verification of proper airflow and system effectiveness.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Benefits of Proper Ventilation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Energy Benefits</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Reduced cooling costs</li>
                <li>Improved energy efficiency</li>
                <li>Better temperature control</li>
                <li>Lower utility bills</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Protection Benefits</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Moisture control</li>
                <li>Mold prevention</li>
                <li>Extended roof life</li>
                <li>Ice dam prevention</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ventilation FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How do I know if I need better ventilation?</h3>
              <p>Signs include high energy bills, hot attic spaces, ice dams in winter, and moisture issues.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What type of ventilation is best?</h3>
              <p>The best system depends on your roof design, climate, and specific needs. We provide custom recommendations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long does installation take?</h3>
              <p>Most ventilation installations can be completed in 1-2 days, depending on the system complexity.</p>
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  );
};

export default RoofVentilation;
