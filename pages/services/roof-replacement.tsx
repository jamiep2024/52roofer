import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const RoofReplacement = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roof Replacement Services",
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": Object.values(serviceAreas).map(area => ({
      "@type": "State",
      "name": area.name
    })),
    "description": "Professional roof replacement services with quality materials and expert installation. Complete roof replacement solutions for homes and businesses."
  };

  const services = [
    {
      title: "Complete Replacement",
      description: "Full roof system replacement with quality materials",
      icon: "🏠"
    },
    {
      title: "Material Options",
      description: "Wide range of roofing materials to choose from",
      icon: "🏗️"
    },
    {
      title: "Expert Installation",
      description: "Professional installation by certified roofers",
      icon: "👷"
    },
    {
      title: "Warranty Coverage",
      description: "Comprehensive warranties on materials and labor",
      icon: "✅"
    }
  ];

  const benefits = [
    {
      title: "Energy Efficiency",
      description: "Improved insulation and energy performance",
      icon: "⚡"
    },
    {
      title: "Property Value",
      description: "Enhanced curb appeal and home value",
      icon: "📈"
    },
    {
      title: "Long-term Protection",
      description: "Lasting protection for your property",
      icon: "🛡️"
    }
  ];

  return (
    <ServiceLayout
      heroImage="/images/services/roof-replacement-hero.jpg"
      heroTitle="Professional Roof Replacement"
      heroDescription="Expert roof replacement services with quality materials and workmanship"
      serviceName="Roof Replacement"
    >
      <Head>
        <title>Professional Roof Replacement Services | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Expert roof replacement services across ${areaNames.join(', ')}. Quality materials and professional installation guaranteed.`}
        />
        <link rel="canonical" href="https://www.52roofer.com/services/roof-replacement" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="space-y-12">
        {/* Introduction */}
        <div>
          <p className="lead text-xl text-gray-600">
            Professional roof replacement services across {areaNames.join(', ')}. 
            We provide comprehensive roof replacement solutions using quality materials and expert installation techniques.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Roof Replacement</h2>
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

        {/* Material Options Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Roofing Material Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Traditional Materials</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Slate Tiles</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Clay Tiles</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Concrete Tiles</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Modern Solutions</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Metal Roofing</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>EPDM Systems</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Green Roofing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Replacement Process Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Replacement Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">1</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Inspection & Assessment</h3>
                <p className="text-gray-600">Thorough evaluation of your current roof condition</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Material Selection</h3>
                <p className="text-gray-600">Choose from quality roofing materials</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Old Roof Removal</h3>
                <p className="text-gray-600">Safe removal and disposal of existing materials</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">New Roof Installation</h3>
                <p className="text-gray-600">Expert installation of your new roofing system</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">5</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Final Inspection</h3>
                <p className="text-gray-600">Quality check and cleanup completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default RoofReplacement;
