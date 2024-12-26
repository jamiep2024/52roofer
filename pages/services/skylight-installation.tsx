import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../components/ServiceLayout';

const SkylightInstallation: React.FC = () => {
  const serviceName = "Skylight Installation";
  const serviceDescription = "Professional skylight installation services to bring natural light into your home with expert fitting and weatherproofing.";

  return (
    <>
      <Head>
        <title>{`${serviceName} Services | Expert Skylight Installation`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content="skylight installation, roof window, sun tunnel, roof light, skylight fitting, skylight replacement" />
      </Head>

      <ServiceLayout
        heroTitle="Professional Skylight Installation Services"
        heroDescription="Transform your space with natural light through expert skylight installation"
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Expert Skylight Installation Solutions
          </h2>
          <p className="mb-4">
            Our professional skylight installation services bring natural light into your home while ensuring 
            perfect weatherproofing and energy efficiency. We offer a range of skylight options and expert 
            installation to enhance your living space.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">New Installations</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Custom sizing and fitting</li>
                <li>Various skylight types</li>
                <li>Energy-efficient options</li>
                <li>Professional installation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Replacement Services</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Upgrade existing skylights</li>
                <li>Improved energy efficiency</li>
                <li>Modern design options</li>
                <li>Enhanced functionality</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Skylight Options
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Fixed Skylights</h3>
              <p>Perfect for bringing in natural light to any space.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Vented Skylights</h3>
              <p>Ideal for ventilation and fresh air circulation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Sun Tunnels</h3>
              <p>Great for bringing light to smaller or windowless spaces.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Installation Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Initial Consultation</h3>
              <p>Assessment of your space and discussion of skylight options.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Design Planning</h3>
              <p>Selection of appropriate skylight type and positioning.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Professional Installation</h3>
              <p>Expert fitting with proper weatherproofing and insulation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Quality Assurance</h3>
              <p>Final testing and inspection to ensure perfect installation.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Benefits of Skylights
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Natural Benefits</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Increased natural light</li>
                <li>Improved ventilation</li>
                <li>Enhanced mood and wellbeing</li>
                <li>Better air circulation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Practical Benefits</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Reduced energy costs</li>
                <li>Increased property value</li>
                <li>Enhanced room aesthetics</li>
                <li>Lower artificial lighting needs</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Skylight Installation FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long does installation take?</h3>
              <p>Most skylight installations can be completed in 1-2 days, depending on complexity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Are skylights energy efficient?</h3>
              <p>Modern skylights are highly energy efficient with advanced glazing and insulation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you offer warranties?</h3>
              <p>Yes, we provide warranties on both materials and installation workmanship.</p>
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  );
};

export default SkylightInstallation;
