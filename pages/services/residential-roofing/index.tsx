import LocalBusinessSchema from '../../../components/seo/LocalBusinessSchema';
import SEO from '../../../components/seo/SEO';
import Layout from '../../../components/layout/Layout';
import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../../data/serviceAreas';
import ServiceLayout from '../../../components/ServiceLayout';

const areaNames = Object.values(serviceAreas).map((area: { name: string }) => area.name);

const ResidentialRoofing = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Roofing Services",
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": Object.values(serviceAreas).map((area: { name: string }) => ({
      "@type": "State",
      "name": area.name
    })),
    "description": "Complete residential roofing services including installations, repairs, and replacements across the UK."
  };

  const services = [
    {
      title: "New Roof Installation",
      description: "Complete installation of new roofs with quality materials",
      icon: "🏠"
    },
    {
      title: "Roof Repairs",
      description: "Fix leaks, damaged tiles, and structural issues",
      icon: "🔧"
    },
    {
      title: "Roof Replacement",
      description: "Full roof replacement when repairs aren't enough",
      icon: "🔄"
    },
    {
      title: "Tile & Slate Roofing",
      description: "Expert installation of tile and slate roofs",
      icon: "🏺"
    }
  ];

  const benefits = [
    {
      title: "Quality Materials",
      description: "Premium roofing materials from trusted suppliers",
      icon: "🏆"
    },
    {
      title: "Expert Installation",
      description: "Skilled roofers with years of experience",
      icon: "👨‍🔧"
    },
    {
      title: "Long-term Warranty",
      description: "Comprehensive warranties on all our work",
      icon: "✅"
    }
  ];

  return (
    <Layout>
      <LocalBusinessSchema />
      <SEO title="" description="" />
      <ServiceLayout
        heroImage="/images/services/residential-hero.jpg"
        heroTitle="Residential Roofing Services"
        heroDescription="Protect your home with expert roofing solutions"
        serviceName="Residential Roofing"
        businessName="52roofer.com"
        location="Oxford, UK"
        url="https://52roofer.com/services/residential-roofing"
        image="/images/hero-bg.jpg"
      >
      <Head>
        <title>Residential Roofing Services | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Expert residential roofing services across ${areaNames.join(', ')}. Quality workmanship guaranteed for all home roofing needs.`}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        

        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "RoofingContractor",
                  "@id": "https://52roofer.com/services/residential-roofing#organization",
                  "name": "52Roofer",
                  "url": "https://52roofer.com/services/residential-roofing",
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
                  "@id": "https://52roofer.com/services/residential-roofing#webpage",
                  "url": "https://52roofer.com/services/residential-roofing",
                  "name": "Roofing Services",
                  "isPartOf": {
                    "@id": "https://52roofer.com/#website"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://52roofer.com/services/residential-roofing#faq",
                  "mainEntity": []
                }
              ]
            })
          }}
        />
</Head>

      <div className="space-y-12">
        {/* Introduction */}
        <div>
          <p className="lead text-xl text-gray-600">
            Expert residential roofing solutions across {areaNames.join(', ')}. 
            We provide comprehensive roofing services to protect your home and family.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
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
                <h3 className="text-xl font-semibold">Initial Consultation</h3>
                <p className="text-gray-600">We discuss your needs and arrange a site visit</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Detailed Inspection</h3>
                <p className="text-gray-600">Thorough assessment of your roof's condition</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Custom Solution</h3>
                <p className="text-gray-600">Tailored roofing solution with detailed quote</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Expert Installation</h3>
                <p className="text-gray-600">Professional installation with minimal disruption</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Services</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center">
              <span className="text-accent mr-2">✓</span>
              <span>Chimney Repairs and Maintenance</span>
            </li>
            <li className="flex items-center">
              <span className="text-accent mr-2">✓</span>
              <span>Roof Window Installation</span>
            </li>
            <li className="flex items-center">
              <span className="text-accent mr-2">✓</span>
              <span>Guttering and Drainage</span>
            </li>
            <li className="flex items-center">
              <span className="text-accent mr-2">✓</span>
              <span>Roof Insulation</span>
            </li>
            <li className="flex items-center">
              <span className="text-accent mr-2">✓</span>
              <span>Lead Work</span>
            </li>
            <li className="flex items-center">
              <span className="text-accent mr-2">✓</span>
              <span>Emergency Repairs</span>
            </li>
          </ul>
        </div>
      </div>
      </ServiceLayout>
    </Layout>
  );
};

export default ResidentialRoofing;
