import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../components/ServiceLayout';

const ResidentialRoofing: React.FC = () => {
  const serviceName = "Residential Roofing";
  const serviceDescription = "Expert residential roofing services including installations, repairs, and maintenance for homeowners.";

  return (
    <>
      <Head>
        <title>{`${serviceName} Services | Professional Residential Roofers`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content="residential roofing, home roofing, house roof, roof installation, roof repair, roofing services" />
      </Head>

      <ServiceLayout
        heroTitle="Professional Residential Roofing Services"
        heroDescription="Expert roofing solutions for your home, delivered with quality and care"
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comprehensive Residential Roofing Solutions
          </h2>
          <p className="mb-4">
            Our residential roofing services are designed to provide homeowners with complete peace of mind. 
            Whether you need a new roof installation, repairs, or maintenance, our expert team delivers 
            quality workmanship and exceptional service.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">New Roof Installation</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Professional installation by certified roofers</li>
                <li>Wide range of high-quality materials</li>
                <li>Energy-efficient roofing options</li>
                <li>Long-term warranties available</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Roof Repairs & Maintenance</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Emergency repair services</li>
                <li>Leak detection and repair</li>
                <li>Storm damage restoration</li>
                <li>Preventive maintenance programs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Our Residential Roofing Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Craftsmanship</h3>
              <p>Our certified roofers bring years of experience and expertise to every project.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Quality Materials</h3>
              <p>We use only premium roofing materials from trusted manufacturers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Comprehensive Warranties</h3>
              <p>Our work is backed by industry-leading warranties for your peace of mind.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Residential Roofing Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Initial Consultation</h3>
              <p>We begin with a thorough assessment of your roofing needs and provide a detailed quote.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Planning & Materials</h3>
              <p>We help you select the right materials and create a comprehensive project plan.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Professional Installation</h3>
              <p>Our expert team executes the project with precision and attention to detail.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Final Inspection</h3>
              <p>We conduct a thorough inspection to ensure everything meets our high standards.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Residential Roofing FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How long does a residential roof installation take?</h3>
              <p>Most residential roof installations take 2-4 days, depending on the size and complexity of your roof.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">What types of roofing materials do you offer?</h3>
              <p>We offer a wide range of materials including asphalt shingles, slate, metal roofing, and more.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you offer emergency repair services?</h3>
              <p>Yes, we provide 24/7 emergency repair services for urgent roofing issues.</p>
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  );
};

export default ResidentialRoofing;
