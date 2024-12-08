import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { serviceAreas } from '../../data/serviceAreas';

// Get array of area names for display
const areaNames = Object.values(serviceAreas).map(area => area.name);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Skylight Installation Services",
  "provider": {
    "@type": "Organization",
    "name": "52roofer.com",
    "image": "https://www.52roofer.com/images/logo.png"
  },
  "areaServed": Object.values(serviceAreas).map(area => ({
    "@type": "State",
    "name": area.name
  })),
  "description": "Professional skylight installation and replacement services for residential and commercial properties.",
  "serviceType": "Skylight Installation"
};

const SkylightInstallationPage = () => {
  const benefits = [
    {
      title: "Natural Light",
      description: "Increase natural daylight and reduce energy costs"
    },
    {
      title: "Energy Efficiency",
      description: "Modern skylights with excellent thermal performance"
    },
    {
      title: "Property Value",
      description: "Enhance your property's appeal and market value"
    },
    {
      title: "Expert Installation",
      description: "Professional fitting with weatherproof guarantee"
    }
  ];

  return (
    <>
      <Head>
        <title>Skylight Installation Services | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Professional skylight installation services across ${areaNames.join(', ')}. Transform your space with natural light and expert installation.`}
        />
        <meta 
          name="keywords" 
          content="skylight installation, roof window, velux windows, skylight replacement, natural lighting" 
        />
        <link rel="canonical" href="https://www.52roofer.com/services/skylight-installation" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Skylight Installation Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your space with natural light. Professional skylight installation across {areaNames.join(', ')}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-xl font-semibold mb-2">1. Consultation</div>
              <p className="text-gray-600">Expert advice on skylight options</p>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold mb-2">2. Survey</div>
              <p className="text-gray-600">Detailed roof assessment</p>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold mb-2">3. Installation</div>
              <p className="text-gray-600">Professional fitting service</p>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold mb-2">4. Guarantee</div>
              <p className="text-gray-600">Weatherproof warranty</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Space with Natural Light</h2>
          <p className="text-gray-600 mb-6">
            Ready to brighten your home with a new skylight? Our expert team will help you choose and install the perfect solution for your property.
          </p>
          <Link
            href="/find-roofer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent/90"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
};

export default SkylightInstallationPage;
