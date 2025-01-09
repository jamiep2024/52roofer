import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const SkylightInstallation = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Skylight Installation Services",
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": Object.values(serviceAreas).map(area => ({
      "@type": "State",
      "name": area.name
    })),
    "description": "Professional skylight installation and maintenance services for residential and commercial properties."
  };

  const services = [
    {
      title: "Fixed Skylights",
      description: "Non-opening skylights for natural lighting",
      icon: "☀️"
    },
    {
      title: "Vented Skylights",
      description: "Opening skylights for light and ventilation",
      icon: "💨"
    },
    {
      title: "Sun Tunnels",
      description: "Tubular skylights for smaller spaces",
      icon: "🔦"
    },
    {
      title: "Custom Solutions",
      description: "Bespoke skylight designs for unique spaces",
      icon: "✨"
        </Layout>

      );
}

  ];

  const benefits = [
    {
      title: "Natural Light",
      description: "Increase natural daylight in your space",
      icon: "🌞"
    },
    {
      title: "Energy Efficiency",
      description: "Reduce reliance on artificial lighting",
      icon: "⚡"
    },
    {
      title: "Property Value",
      description: "Enhance your property's appeal and value",
      icon: "📈"
    }
  ];

  return (
    <Layout>
      <Layout>
<LocalBusinessSchema />
<SEO title="" description="" />
    <ServiceLayout
      heroImage="/images/services/skylight-hero.jpg"
      heroTitle="Skylight Installation Services"
      heroDescription="Transform your space with natural light from above"
    >
      <Head>
        <title>Skylight Installation Services | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Professional skylight installation services across ${areaNames.join(', ')}. Brighten your space with natural light.`}
        />
        <link rel="canonical" href="https://www.52roofer.com/services/skylight-installation" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://52roofer.com/services/skylight-installation#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/services/skylight-installation",
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
      "@id": "https://52roofer.com/services/skylight-installation#webpage",
      "url": "https://52roofer.com/services/skylight-installation",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/services/skylight-installation#faq",
      "mainEntity": []
    }
  ]
}</script>
</Head>

      <div className="space-y-12">
        {/* Introduction */}
        <div>
          <p className="lead text-xl text-gray-600">
            Expert skylight installation solutions across {areaNames.join(', ')}. 
            Transform your space with natural light and improve energy efficiency.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Skylights</h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Installation Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">1</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Site Assessment</h3>
                <p className="text-gray-600">Evaluate the best location and skylight type for your space</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Design Consultation</h3>
                <p className="text-gray-600">Choose the perfect skylight solution for your needs</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Professional Installation</h3>
                <p className="text-gray-600">Expert installation with proper waterproofing</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Quality Check</h3>
                <p className="text-gray-600">Final inspection and weatherproof testing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Skylight Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">UV Protection</h3>
                <p className="text-gray-600">Built-in UV filtering to protect your furnishings</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Energy Efficient</h3>
                <p className="text-gray-600">Double-glazed options for better insulation</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Remote Control</h3>
                <p className="text-gray-600">Optional motorized operation for vented skylights</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Rain Sensors</h3>
                <p className="text-gray-600">Automatic closure when rain is detected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default SkylightInstallation;
