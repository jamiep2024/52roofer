import React from 'react';
import Head from 'next/head';
import ServiceLayout from '../../components/ServiceLayout';

const EmergencyRoofRepair: React.FC = () => {
  const serviceName = "Emergency Roof Repair";
  const serviceDescription = "24/7 emergency roofing services for urgent repairs, storm damage, and leaks. Fast response times and professional solutions.";

  return (
    <>
      <Head>
        <title>{`${serviceName} Services | 24/7 Emergency Roofers`}</title>
        <meta name="description" content={serviceDescription} />
        <meta name="keywords" content="emergency roof repair, urgent roof repairs, storm damage repair, roof leak repair, 24/7 roofing service" />
      </Head>

      <ServiceLayout
        heroTitle="24/7 Emergency Roof Repair Services"
        heroDescription="Fast response emergency roofing services when you need them most"
        serviceName={serviceName}
      >
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Rapid Response Emergency Roofing Solutions
          </h2>
          <p className="mb-4">
            When you're facing a roofing emergency, every minute counts. Our emergency roof repair service
            provides rapid response to protect your property from further damage. Available 24/7, our expert
            team is ready to handle any urgent roofing situation.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Emergency Services</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Storm damage repairs</li>
                <li>Leak containment and repair</li>
                <li>Fallen tree removal</li>
                <li>Emergency tarp services</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Quick Response Benefits</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>24/7 availability</li>
                <li>Rapid response times</li>
                <li>Immediate damage control</li>
                <li>Professional assessment</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Our Emergency Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">24/7 Availability</h3>
              <p>Round-the-clock emergency response for urgent roofing issues.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p>Experienced emergency roofers equipped to handle any situation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Quick Solutions</h3>
              <p>Fast, effective repairs to prevent further damage to your property.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Emergency Response Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Immediate Response</h3>
              <p>Quick phone consultation and dispatch of emergency team.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Damage Assessment</h3>
              <p>Thorough evaluation of the damage and required repairs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Emergency Repairs</h3>
              <p>Immediate action to prevent further damage and protect your property.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Follow-up Solutions</h3>
              <p>Development of long-term repair plans if needed.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Emergency Roofing FAQs
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">How quickly can you respond to an emergency?</h3>
              <p>We aim to respond to all emergency calls within 30-60 minutes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you provide temporary solutions?</h3>
              <p>Yes, we offer emergency tarping and temporary repairs until permanent solutions can be implemented.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Do you handle insurance claims?</h3>
              <p>Yes, we can assist with documentation and work directly with your insurance company.</p>
            </div>
          </div>
        </section>
      </ServiceLayout>
    </>
  );
};

export default EmergencyRoofRepair;
