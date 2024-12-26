import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../components/ServiceLayout';

const GutterService: React.FC = () => {
  const serviceName = "Gutter Services";
  const serviceDescription = "Professional gutter installation, repair, and maintenance services to protect your property from water damage.";

  return (
    <>
      <Head>
        <title>{`${serviceName} | Professional Gutter Installation & Repairs`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content="gutter services, gutter installation, gutter repair, gutter maintenance, gutter cleaning, downpipe installation" />
      </Head>

      <ServiceLayout
        heroTitle="Professional Gutter Services"
        heroDescription="Complete gutter solutions to protect your property from water damage"
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comprehensive Gutter Solutions
          </h2>
          <p className="mb-4">
            Properly functioning gutters are essential for protecting your property from water damage.
            Our professional gutter services ensure your drainage system works effectively year-round,
            preventing costly water damage to your property's foundation, walls, and landscaping.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Installation Services</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>New gutter installation</li>
                <li>Downpipe installation</li>
                <li>Leaf guard installation</li>
                <li>Rainwater collection systems</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Maintenance & Repairs</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Gutter repairs and maintenance</li>
                <li>Gutter cleaning and unblocking</li>
                <li>Downpipe repairs</li>
                <li>Preventive maintenance</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Our Gutter Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Installation</h3>
              <p>Professional installation by experienced gutter specialists.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Quality Materials</h3>
              <p>We use only high-grade materials for lasting performance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Comprehensive Service</h3>
              <p>Complete solutions from installation to maintenance.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Service Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Initial Assessment</h3>
              <p>Thorough inspection of your current guttering system and requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Detailed Quote</h3>
              <p>Comprehensive quote with clear recommendations and solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Professional Installation</h3>
              <p>Expert installation or repairs using quality materials and techniques.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Quality Checks</h3>
              <p>Final testing and inspection to ensure perfect functionality.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Gutter Services FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How often should gutters be cleaned?</h3>
              <p>We recommend cleaning gutters at least twice a year, more frequently if you have overhanging trees.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What are the signs of gutter problems?</h3>
              <p>Common signs include overflowing gutters, water marks on walls, and sagging guttering.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you offer gutter guards?</h3>
              <p>Yes, we provide and install various types of gutter guards to prevent debris buildup.</p>
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  );
};

export default GutterService;
