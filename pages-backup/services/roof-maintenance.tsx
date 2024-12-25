import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const RoofMaintenance = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roof Maintenance Services",
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": Object.values(serviceAreas).map(area => ({
      "@type": "State",
      "name": area.name
    })),
    "description": "Professional roof maintenance services to extend your roof's lifespan and prevent costly repairs."
  };

  const services = [
    {
      title: "Regular Inspections",
      description: "Scheduled roof health checks",
      icon: "🔍"
    },
    {
      title: "Preventive Care",
      description: "Proactive maintenance solutions",
      icon: "🛠️"
    },
    {
      title: "Gutter Cleaning",
      description: "Regular gutter maintenance",
      icon: "🧹"
    },
    {
      title: "Minor Repairs",
      description: "Quick fixes for small issues",
      icon: "🔧"
        </Layout>

      );
}

  ];

  const benefits = [
    {
      title: "Extended Lifespan",
      description: "Maximize your roof's durability",
      icon: "⏳"
    },
    {
      title: "Cost Savings",
      description: "Prevent expensive repairs",
      icon: "💰"
    },
    {
      title: "Protection",
      description: "Keep your property safe",
      icon: "🏡"
    }
  ];

  return (
    <Layout>
      <Layout>
<LocalBusinessSchema />
<SEO title="" description="" />
    <ServiceLayout
      heroImage="/images/services/roof-maintenance-hero.jpg"
      heroTitle="Roof Maintenance Services"
      heroDescription="Keep your roof in top condition year-round"
    >
      <Head>
        <title>Roof Maintenance Services | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Professional roof maintenance services across ${areaNames.join(', ')}. Regular care to prevent costly repairs.`}
        />
        <link rel="canonical" href="https://www.52roofer.com/services/roof-maintenance" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://52roofer.com/services/roof-maintenance#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/services/roof-maintenance",
      "image": "https://52roofer.com/images/hero-bg.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Oxford",
        "addressRegion": "Oxfordshire",
        "addressCountry": "GB"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://52roofer.com/services/roof-maintenance#webpage",
      "url": "https://52roofer.com/services/roof-maintenance",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/services/roof-maintenance#faq",
      "mainEntity": []
    }
  ]
}</script>
</Head>

      <div className="space-y-12">
        {/* Introduction */}
        <div>
          <p className="lead text-xl text-gray-600">
            Professional roof maintenance services across {areaNames.join(', ')}. 
            Keep your roof in perfect condition with our comprehensive maintenance programs.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Regular Maintenance</h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Maintenance Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">1</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Initial Assessment</h3>
                <p className="text-gray-600">Comprehensive roof condition evaluation</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Maintenance Plan</h3>
                <p className="text-gray-600">Customized care schedule for your roof</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Regular Service</h3>
                <p className="text-gray-600">Scheduled maintenance and inspections</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Documentation</h3>
                <p className="text-gray-600">Detailed reports after each service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Maintenance Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Debris Removal</h3>
                <p className="text-gray-600">Regular cleaning of roof surface and gutters</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Leak Prevention</h3>
                <p className="text-gray-600">Identify and fix potential leak points</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Minor Repairs</h3>
                <p className="text-gray-600">Fix small issues before they grow</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Seasonal Checks</h3>
                <p className="text-gray-600">Pre and post-season inspections</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default RoofMaintenance;
