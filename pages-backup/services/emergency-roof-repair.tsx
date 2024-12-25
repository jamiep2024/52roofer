import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const EmergencyRoofRepair = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Emergency Roof Repair Services",
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": Object.values(serviceAreas).map(area => ({
      "@type": "State",
      "name": area.name
    })),
    "description": "24/7 emergency roof repair services for immediate response to roof damage and leaks."
  };

  const services = [
    {
      title: "Storm Damage",
      description: "Immediate repairs for storm damage",
      icon: "⛈️"
    },
    {
      title: "Leak Repair",
      description: "Quick fixes for active leaks",
      icon: "💧"
    },
    {
      title: "Wind Damage",
      description: "Repairs for wind-lifted materials",
      icon: "🌪️"
    },
    {
      title: "Fallen Debris",
      description: "Remove debris and repair damage",
      icon: "🌳"
        </Layout>

      );
}

  ];

  const benefits = [
    {
      title: "24/7 Response",
      description: "Available any time, day or night",
      icon: "🕐"
    },
    {
      title: "Quick Action",
      description: "Fast response to minimize damage",
      icon: "⚡"
    },
    {
      title: "Expert Team",
      description: "Experienced emergency roofers",
      icon: "👷"
    }
  ];

  return (
    <Layout>
      <Layout>
<LocalBusinessSchema />
<SEO title="" description="" />
    <ServiceLayout
      heroImage="/images/services/emergency-repair-hero.jpg"
      heroTitle="Emergency Roof Repair Services"
      heroDescription="24/7 emergency response for urgent roof repairs"
    >
      <Head>
        <title>Emergency Roof Repair Services | 52roofer.com</title>
        <meta 
          name="description" 
          content={`24/7 emergency roof repair services across ${areaNames.join(', ')}. Fast response for urgent roof repairs.`}
        />
        <link rel="canonical" href="https://www.52roofer.com/services/emergency-roof-repair" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://52roofer.com/services/emergency-roof-repair#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/services/emergency-roof-repair",
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
      "@id": "https://52roofer.com/services/emergency-roof-repair#webpage",
      "url": "https://52roofer.com/services/emergency-roof-repair",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/services/emergency-roof-repair#faq",
      "mainEntity": []
    }
  ]
}</script>
</Head>

      <div className="space-y-12">
        {/* Introduction */}
        <div>
          <p className="lead text-xl text-gray-600">
            24/7 emergency roof repair services across {areaNames.join(', ')}. 
            When disaster strikes, we're here to help with immediate response and professional repairs.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Response Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">1</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Immediate Contact</h3>
                <p className="text-gray-600">24/7 emergency hotline response</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Quick Assessment</h3>
                <p className="text-gray-600">Rapid evaluation of damage</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Immediate Action</h3>
                <p className="text-gray-600">Swift temporary or permanent repairs</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Follow-up Plan</h3>
                <p className="text-gray-600">Long-term solution assessment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Rapid Response</h3>
                <p className="text-gray-600">Quick arrival to prevent further damage</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Temporary Solutions</h3>
                <p className="text-gray-600">Immediate protection from elements</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Water Damage Control</h3>
                <p className="text-gray-600">Minimize interior water damage</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Insurance Support</h3>
                <p className="text-gray-600">Assistance with insurance claims</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default EmergencyRoofRepair;
