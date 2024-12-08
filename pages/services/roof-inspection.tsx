import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { serviceAreas } from '../../data/serviceAreas';

// Get array of area names for display
const areaNames = Object.values(serviceAreas).map(area => area.name);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Roof Inspection Services",
  "provider": {
    "@type": "Organization",
    "name": "52roofer.com",
    "image": "https://www.52roofer.com/images/logo.png"
  },
  "areaServed": Object.values(serviceAreas).map(area => ({
    "@type": "State",
    "name": area.name
  })),
  "description": "Comprehensive roof inspection services including detailed reports and maintenance recommendations.",
  "serviceType": "Roof Inspection"
};

const RoofInspectionPage = () => {
  const benefits = [
    {
      title: "Early Problem Detection",
      description: "Identify potential issues before they become major problems"
    },
    {
      title: "Detailed Reports",
      description: "Receive comprehensive inspection reports with photos and recommendations"
    },
    {
      title: "Insurance Compliance",
      description: "Meet insurance requirements with professional documentation"
    },
    {
      title: "Preventive Maintenance",
      description: "Get expert advice on maintaining your roof's condition"
    }
  ];

  return (
    <>
      <Head>
        <title>Professional Roof Inspection Services | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Expert roof inspection services across ${areaNames.join(', ')}. Comprehensive assessments, detailed reports, and professional recommendations.`}
        />
        <meta 
          name="keywords" 
          content="roof inspection, roof assessment, roof survey, professional roofer, roofing inspection service" 
        />
        <link rel="canonical" href="https://www.52roofer.com/services/roof-inspection" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Roof Inspection Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert roof inspections across {areaNames.join(', ')}. Detailed assessments and professional recommendations.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Inspection Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-xl font-semibold mb-2">1. Initial Assessment</div>
              <p className="text-gray-600">Thorough exterior and interior roof examination</p>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold mb-2">2. Detailed Inspection</div>
              <p className="text-gray-600">Comprehensive check of all roofing components</p>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold mb-2">3. Report & Recommendations</div>
              <p className="text-gray-600">Detailed report with photos and action items</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule Your Inspection</h2>
          <p className="text-gray-600 mb-6">
            Get a professional roof inspection from our experienced roofers. We provide detailed reports and recommendations to help maintain your roof's condition.
          </p>
          <Link
            href="/find-roofer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent/90"
          >
            Book an Inspection
          </Link>
        </div>
      </div>
    </>
  );
};

export default RoofInspectionPage;
