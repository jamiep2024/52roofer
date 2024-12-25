import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const RoofInspection = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roof Inspection Services",
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": Object.values(serviceAreas).map(area => ({
      "@type": "State",
      "name": area.name
    })),
    "description": "Professional roof inspection services for residential and commercial properties."
  };

  const services = [
    {
      title: "Visual Inspection",
      description: "Comprehensive exterior and interior checks",
      icon: "👁️"
    },
    {
      title: "Drone Inspection",
      description: "Advanced aerial roof assessment",
      icon: "🚁"
    },
    {
      title: "Moisture Detection",
      description: "Advanced leak and moisture scanning",
      icon: "💧"
    },
    {
      title: "Detailed Reports",
      description: "Complete documentation with photos",
      icon: "📋"
    }
  ];

  const benefits = [
    {
      title: "Early Detection",
      description: "Identify issues before they become major problems",
      icon: "🔍"
    },
    {
      title: "Cost Savings",
      description: "Prevent expensive repairs with timely maintenance",
      icon: "💰"
    },
    {
      title: "Peace of Mind",
      description: "Know your roof's exact condition",
      icon: "✨"
    }
  ];

  return (
    <ServiceLayout
      heroImage="/images/services/roof-inspection-hero.jpg"
      heroTitle="Professional Roof Inspection Services"
      heroDescription="Comprehensive roof assessments for your peace of mind"
    >
      <Head>
        <title>Roof Inspection Services | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Professional roof inspection services across ${areaNames.join(', ')}. Detailed assessments and reports for your property.`}
        />
        <link rel="canonical" href="https://www.52roofer.com/services/roof-inspection" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="space-y-12">
        {/* Introduction */}
        <div>
          <p className="lead text-xl text-gray-600">
            Expert roof inspection services across {areaNames.join(', ')}. 
            We use advanced technology and proven methods to assess your roof's condition thoroughly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Regular Inspections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <div className="text-xl font-semibold mb-2">{benefit.title}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Inspection Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">1</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Exterior Assessment</h3>
                <p className="text-gray-600">Thorough examination of all roof components</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Interior Check</h3>
                <p className="text-gray-600">Inspection of attic and interior signs of damage</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Documentation</h3>
                <p className="text-gray-600">Detailed photos and notes of findings</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Report Delivery</h3>
                <p className="text-gray-600">Comprehensive report with recommendations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Check</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Shingles & Materials</h3>
                <p className="text-gray-600">Condition of roofing materials and wear patterns</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Drainage Systems</h3>
                <p className="text-gray-600">Gutters, downspouts, and drainage efficiency</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Structural Integrity</h3>
                <p className="text-gray-600">Support systems and overall structure</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Ventilation</h3>
                <p className="text-gray-600">Proper airflow and ventilation systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default RoofInspection;
