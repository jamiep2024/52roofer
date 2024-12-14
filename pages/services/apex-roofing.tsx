import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';
import AdvancedSEO from '../../components/seo/AdvancedSEO';
import LocalBusinessSchema from '../../components/seo/LocalBusinessSchema';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const ApexRoofing = () => {
  const pageTitle = "Apex Roofing Specialists | Expert Pitched Roof Services | 52roofer.com";
  const pageDescription = `Professional apex and pitched roofing services in ${areaNames.join(', ')}. Specialists in gable, hip, and complex roof designs. Expert installation and repairs with quality materials.`;
  const keywords = "apex roofing, pitched roof, gable roof, hip roof, roof peak, roofing specialist, apex roof repair, pitched roof installation";

  // Enhanced Schema Markup for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.52roofer.com/services/apex-roofing#service",
    "name": "Apex Roofing Services",
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com",
      "image": "https://www.52roofer.com/images/logo.png",
      "priceRange": "££",
      "telephone": "52rooferteam@gmail.com",
      "areaServed": areaNames.map(area => ({
        "@type": "State",
        "name": area
      }))
    },
    "description": pageDescription,
    "serviceType": "Apex Roofing",
    "areaServed": areaNames,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Apex Roofing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Apex Roof Installation",
            "description": "Expert installation of apex and pitched roofs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Complex Roof Design",
            "description": "Specialized solutions for complex roof structures"
          }
        }
      ]
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an apex roof?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An apex roof, also known as a pitched or gabled roof, features two sloping sides that meet at a central ridge or peak. This classic design provides excellent water drainage and additional attic space."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of an apex roof?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apex roofs offer superior water drainage, increased attic space, better ventilation, and enhanced architectural appeal. They're also highly durable and suitable for various weather conditions."
        }
      }
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.52roofer.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.52roofer.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Apex Roofing",
        "item": "https://www.52roofer.com/services/apex-roofing"
      }
    ]
  };

  const services = [
    {
      title: "Design Expertise",
      description: "Specialized knowledge in apex and pitched roof design",
      icon: "📐"
    },
    {
      title: "Quality Materials",
      description: "Premium materials for lasting durability",
      icon: "🏗️"
    },
    {
      title: "Complex Solutions",
      description: "Expert handling of intricate roof structures",
      icon: "🏠"
    },
    {
      title: "Weather Protection",
      description: "Superior protection against all elements",
      icon: "🌦️"
    }
  ];

  const benefits = [
    {
      title: "Enhanced Drainage",
      description: "Superior water and snow runoff capabilities",
      icon: "💧"
    },
    {
      title: "Extra Space",
      description: "Additional attic space for storage or conversion",
      icon: "📦"
    },
    {
      title: "Energy Efficient",
      description: "Better ventilation and temperature control",
      icon: "⚡"
    }
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.52roofer.com/services/apex-roofing" />
        <meta property="og:image" content="https://www.52roofer.com/images/completed-roof.jpg" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.52roofer.com/images/completed-roof.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.52roofer.com/services/apex-roofing" />
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <ServiceLayout
        heroImage="/images/completed-roof.jpg"
        heroTitle="Expert Apex Roofing Services"
        heroDescription="Specialized solutions for pitched and complex roof designs"
        serviceName="Apex Roofing"
      >
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="hover:text-accent">Home</a>
              <svg className="fill-current w-3 h-3 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
              </svg>
            </li>
            <li className="flex items-center">
              <a href="/services" className="hover:text-accent">Services</a>
              <svg className="fill-current w-3 h-3 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
              </svg>
            </li>
            <li className="text-gray-700">Apex Roofing</li>
          </ol>
        </nav>

        <div className="space-y-12">
          {/* Introduction */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Apex Roofing Specialists</h1>
            <p className="lead text-xl text-gray-600">
              Expert apex and pitched roofing services across {areaNames.join(', ')}. Our specialists deliver 
              superior craftsmanship for gable, hip, and complex roof designs, ensuring lasting protection and aesthetic appeal.
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

          {/* FAQ Section */}
          <div className="bg-white rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">What is an apex roof?</h3>
                <p className="text-gray-600">An apex roof, also known as a pitched or gabled roof, features two sloping sides that meet at a central ridge or peak. This classic design provides excellent water drainage and additional attic space.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What are the benefits of an apex roof?</h3>
                <p className="text-gray-600">Apex roofs offer superior water drainage, increased attic space, better ventilation, and enhanced architectural appeal. They're also highly durable and suitable for various weather conditions.</p>
              </div>
            </div>
          </div>

          {/* Specialized Services */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Specialized Services</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Gable Roof Design</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Hip Roof Construction</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Valley Installation</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Ridge Vent Systems</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Dormer Windows</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Complex Intersections</span>
              </li>
            </ul>
          </div>
        </div>
      </ServiceLayout>
    </>
  );
};

export default ApexRoofing;
