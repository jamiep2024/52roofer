import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { serviceAreas } from '../../data/serviceAreas';

// Get array of area names for display
const areaNames = Object.values(serviceAreas).map(area => area.name);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Roof Ventilation Services",
  "provider": {
    "@type": "Organization",
    "name": "52roofer.com",
    "image": "https://www.52roofer.com/images/logo.png"
  },
  "areaServed": Object.values(serviceAreas).map(area => ({
    "@type": "State",
    "name": area.name
  })),
  "description": "Professional roof ventilation installation and maintenance services for improved energy efficiency and roof longevity.",
  "serviceType": "Roof Ventilation"
};

const RoofVentilationPage = () => {
  const benefits = [
    {
      title: "Reduce Energy Costs",
      description: "Proper ventilation helps regulate temperature and reduce heating/cooling costs"
    },
    {
      title: "Prevent Moisture Damage",
      description: "Avoid mold, rot, and structural damage caused by trapped moisture"
    },
    {
      title: "Extend Roof Life",
      description: "Well-ventilated roofs last longer and maintain their integrity"
    },
    {
      title: "Improve Indoor Comfort",
      description: "Better temperature control throughout your property"
    }
  ];

  return (
    <>
      <Head>
        <title>Roof Ventilation Services | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Professional roof ventilation services across ${areaNames.join(', ')}. Improve energy efficiency and extend roof life with proper ventilation.`}
        />
        <meta 
          name="keywords" 
          content="roof ventilation, attic ventilation, roof vents, ventilation installation, energy efficiency" 
        />
        <link rel="canonical" href="https://www.52roofer.com/services/roof-ventilation" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Roof Ventilation Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert roof ventilation solutions across {areaNames.join(', ')}. Improve energy efficiency and protect your property.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Ventilation Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-xl font-semibold mb-2">Ridge Vents</div>
              <p className="text-gray-600">Continuous ventilation along the roof ridge</p>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold mb-2">Soffit Vents</div>
              <p className="text-gray-600">Intake ventilation under the eaves</p>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold mb-2">Roof Fans</div>
              <p className="text-gray-600">Powered ventilation for enhanced airflow</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Improve Your Roof Ventilation</h2>
          <p className="text-gray-600 mb-6">
            Get expert advice on the best ventilation solution for your property. Our professionals will assess your needs and recommend the most effective system.
          </p>
          <Link
            href="/find-roofer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent/90"
          >
            Get Expert Advice
          </Link>
        </div>
      </div>
    </>
  );
};

export default RoofVentilationPage;
