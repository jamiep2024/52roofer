import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const ApexRoofing = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Apex Roofing Services",
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": Object.values(serviceAreas).map(area => ({
      "@type": "State",
      "name": area.name
    })),
    "description": "Specialized apex roofing services including installation, repair, and maintenance. Expert solutions for pitched and apex roof systems."
  };

  const services = [
    {
      title: "Apex Installation",
      description: "Expert installation of apex roof systems",
      icon: "🏠"
    },
    {
      title: "Ridge Work",
      description: "Specialized ridge and apex repairs",
      icon: "🔧"
    },
    {
      title: "Ventilation",
      description: "Proper apex ventilation solutions",
      icon: "💨"
    },
    {
      title: "Maintenance",
      description: "Regular apex roof maintenance",
      icon: "🔍"
    }
  ];

  const benefits = [
    {
      title: "Enhanced Design",
      description: "Improved architectural aesthetics",
      icon: "🎨"
    },
    {
      title: "Better Drainage",
      description: "Efficient water management",
      icon: "💧"
    },
    {
      title: "Durability",
      description: "Long-lasting roof structure",
      icon: "💪"
    }
  ];

  return (
    <ServiceLayout
      heroImage="/images/services/apex-roofing-hero.jpg"
      heroTitle="Apex Roofing Solutions"
      heroDescription="Specialized apex roofing services for optimal performance and aesthetics"
      serviceName="Apex Roofing"
    >
      <Head>
        <title>Professional Apex Roofing Services | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Expert apex roofing services across ${areaNames.join(', ')}. Specialized solutions for pitched and apex roof systems.`}
        />
        <link rel="canonical" href="https://www.52roofer.com/services/apex-roofing" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="space-y-12">
        {/* Introduction */}
        <div>
          <p className="lead text-xl text-gray-600">
            Specialized apex roofing solutions across {areaNames.join(', ')}. 
            We provide expert services for all types of apex and pitched roof systems, ensuring optimal performance and aesthetics.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Apex Roofing</h2>
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

        {/* Features Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Apex Roofing Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Design Elements</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Steep Pitch Options</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Ridge Detailing</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Valley Systems</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Technical Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Ventilation Systems</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Insulation Solutions</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Waterproofing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Installation Process */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Apex Roofing Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">1</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Design Consultation</h3>
                <p className="text-gray-600">Planning the perfect apex roof design</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Structure Assessment</h3>
                <p className="text-gray-600">Evaluating support requirements</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Material Selection</h3>
                <p className="text-gray-600">Choosing appropriate roofing materials</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Installation</h3>
                <p className="text-gray-600">Expert installation with attention to detail</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">5</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Quality Assurance</h3>
                <p className="text-gray-600">Final inspection and weatherproofing checks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ApexRoofing;
