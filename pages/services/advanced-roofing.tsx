import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const AdvancedRoofing = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Advanced Roofing Services",
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": Object.values(serviceAreas).map(area => ({
      "@type": "State",
      "name": area.name
    })),
    "description": "Advanced roofing solutions utilizing modern technology and innovative materials. State-of-the-art roofing systems for superior performance."
  };

  const services = [
    {
      title: "Smart Roofing",
      description: "Integration of smart roofing technologies",
      icon: "🔋"
    },
    {
      title: "Solar Integration",
      description: "Advanced solar roofing solutions",
      icon: "☀️"
    },
    {
      title: "Modern Materials",
      description: "Latest innovative roofing materials",
      icon: "🏗️"
    },
    {
      title: "Tech Monitoring",
      description: "Advanced roof monitoring systems",
      icon: "📱"
    }
  ];

  const benefits = [
    {
      title: "Energy Efficient",
      description: "Reduced energy costs through advanced materials",
      icon: "⚡"
    },
    {
      title: "Smart Features",
      description: "Integrated technology for monitoring and control",
      icon: "💻"
    },
    {
      title: "Sustainability",
      description: "Eco-friendly and sustainable solutions",
      icon: "🌱"
    }
  ];

  return (
    <ServiceLayout
      heroImage="/images/services/advanced-roofing-hero.jpg"
      heroTitle="Advanced Roofing Solutions"
      heroDescription="Modern roofing technologies for superior performance and efficiency"
      serviceName="Advanced Roofing"
    >
      <Head>
        <title>Advanced Roofing Solutions | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Advanced roofing solutions across ${areaNames.join(', ')}. Modern technologies and innovative materials for superior roofing performance.`}
        />
        <link rel="canonical" href="https://www.52roofer.com/services/advanced-roofing" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="space-y-12">
        {/* Introduction */}
        <div>
          <p className="lead text-xl text-gray-600">
            Experience the future of roofing across {areaNames.join(', ')}. 
            We provide cutting-edge roofing solutions that combine innovative materials with smart technology for optimal performance.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Roofing Benefits</h2>
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

        {/* Technology Features */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Smart Systems</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Temperature Monitoring</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Leak Detection</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Energy Management</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Modern Materials</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Solar Tiles</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Smart Membranes</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Eco-friendly Solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Implementation Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">1</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Technology Assessment</h3>
                <p className="text-gray-600">Evaluating optimal technology solutions</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">System Design</h3>
                <p className="text-gray-600">Custom design of integrated systems</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Smart Installation</h3>
                <p className="text-gray-600">Professional installation of advanced components</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">System Integration</h3>
                <p className="text-gray-600">Connecting and configuring smart features</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">5</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">User Training</h3>
                <p className="text-gray-600">Comprehensive training on system features</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default AdvancedRoofing;
