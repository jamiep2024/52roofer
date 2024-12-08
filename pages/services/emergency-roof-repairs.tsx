import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { serviceAreas } from '../../data/serviceAreas';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Emergency Roof Repair Services",
  "provider": {
    "@type": "Organization",
    "name": "52roofer.com",
    "image": "https://www.52roofer.com/images/logo.png"
  },
  "areaServed": Object.values(serviceAreas).map(area => ({
    "@type": "State",
    "name": area.name
  })),
  "description": "24/7 emergency roof repair services for storm damage, leaks, and urgent roofing problems. Fast response from qualified local roofers.",
  "serviceType": "Emergency Roof Repair"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What constitutes a roofing emergency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A roofing emergency typically includes severe leaks, storm damage, fallen trees on the roof, large holes or gaps in roofing, or any situation that poses immediate risk to your property or safety."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you respond to an emergency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our network of local roofers typically responds within 1-2 hours for genuine emergencies, providing immediate temporary repairs if needed and following up with permanent solutions."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do while waiting for emergency repairs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While waiting, minimize water damage by placing buckets under leaks, moving valuable items, and documenting damage for insurance. Don't attempt to climb onto a damaged roof - wait for professional help."
      }
    }
  ]
};

const EmergencyRoofRepairs = () => {
  const emergencyServices = [
    {
      title: "Storm Damage Repair",
      description: "Immediate response to roof damage caused by storms, high winds, or fallen debris."
    },
    {
      title: "Leak Control",
      description: "Quick containment and repair of severe roof leaks to prevent water damage."
    },
    {
      title: "Temporary Protection",
      description: "Emergency tarping and temporary solutions until permanent repairs can be made."
    },
    {
      title: "Structural Support",
      description: "Emergency reinforcement for compromised roof structures."
    }
  ];

  const steps = [
    {
      title: "1. Call Our Emergency Line",
      description: "Contact us immediately for rapid response to your roofing emergency."
    },
    {
      title: "2. Initial Assessment",
      description: "A qualified roofer will quickly assess the damage and required repairs."
    },
    {
      title: "3. Immediate Action",
      description: "Emergency measures to prevent further damage to your property."
    },
    {
      title: "4. Permanent Solution",
      description: "Development and implementation of a long-term repair plan."
    }
  ];

  // Get array of area names for display
  const areaNames = Object.values(serviceAreas).map(area => area.name);

  return (
    <>
      <Head>
        <title>24/7 Emergency Roof Repairs | Immediate Response | 52roofer.com</title>
        <meta name="description" content="Emergency roof repair services available 24/7. Fast response to storm damage, leaks, and urgent roofing problems. Local qualified roofers ready to help." />
        <meta name="keywords" content="emergency roof repair, roof leak repair, storm damage, emergency roofer, 24/7 roofing service, urgent roof repair" />
        <link rel="canonical" href="https://www.52roofer.com/services/emergency-roof-repairs" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema]) }}
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            24/7 Emergency Roof Repair Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast response to urgent roofing problems across {areaNames.join(', ')}. 
            Professional roofers ready to help when you need it most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {emergencyServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Emergency Response Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Emergency Roofing FAQ
          </h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.name}
                </h3>
                <p className="text-gray-600">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Emergency Roof Repairs?
          </h2>
          <p className="text-xl mb-6">
            Don't wait - get immediate assistance from qualified local roofers
          </p>
          <Link
            href="/find-roofer"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100"
          >
            Get Emergency Help Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmergencyRoofRepairs;
