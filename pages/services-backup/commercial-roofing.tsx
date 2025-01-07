import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const CommercialRoofing = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Roofing Services",
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": Object.values(serviceAreas).map(area => ({
      "@type": "State",
      "name": area.name
    })),
    "description": "Professional commercial roofing services including installation, repair, and maintenance for businesses."
  };

  const services = [
    {
      title: "Flat Roof Systems",
      description: "EPDM, TPO, and modified bitumen roofing",
      icon: "🏢"
    },
    {
      title: "Metal Roofing",
      description: "Durable metal roofing solutions",
      icon: "🔧"
    },
    {
      title: "Green Roofing",
      description: "Sustainable roofing options",
      icon: "🌱"
    },
    {
      title: "Preventive Maintenance",
      description: "Regular inspections and maintenance",
      icon: "🔍"
    }
  ];

  const benefits = [
    {
      title: "Energy Efficiency",
      description: "Reduce cooling costs with reflective roofing",
      icon: "⚡"
    },
    {
      title: "Durability",
      description: "Long-lasting commercial grade materials",
      icon: "💪"
    },
    {
      title: "Minimal Disruption",
      description: "Efficient installation process",
      icon: "🏃"
    }
  ];

  return (
    <ServiceLayout
      heroImage="/images/services/commercial-roofing-hero.jpg"
      heroTitle="Commercial Roofing Services"
      heroDescription="Expert roofing solutions for your business"
    >
      <Head>
        <title>Commercial Roofing Services | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Professional commercial roofing services across ${areaNames.join(', ')}. Expert installation and maintenance for businesses.`}
        />
        <link rel="canonical" href="https://www.52roofer.com/services/commercial-roofing" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="space-y-12">
        {/* Introduction */}
        <div>
          <p className="lead text-xl text-gray-600">
            Comprehensive commercial roofing solutions across {areaNames.join(', ')}. 
            We specialize in flat roofs, metal roofing, and sustainable options for businesses of all sizes.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">1</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Initial Assessment</h3>
                <p className="text-gray-600">Thorough inspection of your commercial property</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Custom Solution</h3>
                <p className="text-gray-600">Tailored roofing plan for your business needs</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Professional Installation</h3>
                <p className="text-gray-600">Expert installation with minimal business disruption</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Ongoing Support</h3>
                <p className="text-gray-600">Regular maintenance and warranty coverage</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Licensed & Insured</h3>
                <p className="text-gray-600">Fully certified commercial roofing experts</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Quality Materials</h3>
                <p className="text-gray-600">Premium commercial-grade roofing materials</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">24/7 Support</h3>
                <p className="text-gray-600">Emergency response for urgent issues</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Warranty</h3>
                <p className="text-gray-600">Comprehensive warranty coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default CommercialRoofing;
