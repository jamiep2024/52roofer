import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';
import AdvancedSEO from '../../components/seo/AdvancedSEO';
import LocalBusinessSchema from '../../components/seo/LocalBusinessSchema';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const AdvancedRoofing = () => {
  const pageTitle = "Advanced Roofing Solutions | Modern Roofing Technology | 52roofer.com";
  const pageDescription = `Cutting-edge roofing solutions in ${areaNames.join(', ')}. Advanced materials, innovative techniques, and smart roofing technology. Energy-efficient and sustainable roofing systems.`;
  const keywords = "advanced roofing, modern roofing, smart roofing, energy efficient roofing, sustainable roofing, innovative roofing solutions, high-tech roofing";

  // Enhanced Schema Markup for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.52roofer.com/services/advanced-roofing#service",
    "name": "Advanced Roofing Solutions",
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
    "serviceType": "Advanced Roofing",
    "areaServed": areaNames,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Advanced Roofing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Roofing Systems",
            "description": "Advanced roofing with integrated technology"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sustainable Solutions",
            "description": "Eco-friendly and energy-efficient roofing"
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
        "name": "What makes advanced roofing different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Advanced roofing incorporates modern materials, smart technology, and innovative installation techniques. It focuses on energy efficiency, sustainability, and enhanced durability while offering features like integrated solar capabilities and smart monitoring systems."
        }
      },
      {
        "@type": "Question",
        "name": "What advanced roofing materials do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use cutting-edge materials including synthetic slate, solar tiles, cool roofing systems, advanced insulation materials, and smart membrane systems that offer superior protection and energy efficiency."
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
        "name": "Advanced Roofing",
        "item": "https://www.52roofer.com/services/advanced-roofing"
      }
    ]
  };

  const services = [
    {
      title: "Smart Technology",
      description: "Integrated monitoring and control systems",
      icon: "🤖"
    },
    {
      title: "Energy Efficiency",
      description: "Advanced materials for better insulation",
      icon: "⚡"
    },
    {
      title: "Sustainable Solutions",
      description: "Eco-friendly roofing options",
      icon: "🌱"
    },
    {
      title: "Modern Materials",
      description: "Cutting-edge roofing materials",
      icon: "🔬"
    }
  ];

  const benefits = [
    {
      title: "Future-Ready",
      description: "Prepared for tomorrow's technology",
      icon: "🚀"
    },
    {
      title: "Cost Savings",
      description: "Reduced energy and maintenance costs",
      icon: "💰"
    },
    {
      title: "Smart Control",
      description: "Advanced monitoring and management",
      icon: "📱"
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
        <meta property="og:url" content="https://www.52roofer.com/services/advanced-roofing" />
        <meta property="og:image" content="https://www.52roofer.com/images/after-roof.jpg" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.52roofer.com/images/after-roof.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.52roofer.com/services/advanced-roofing" />
        
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
        heroImage="/images/after-roof.jpg"
        heroTitle="Advanced Roofing Solutions"
        heroDescription="Cutting-edge technology for modern roofing needs"
        serviceName="Advanced Roofing"
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
            <li className="text-gray-700">Advanced Roofing</li>
          </ol>
        </nav>

        <div className="space-y-12">
          {/* Introduction */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Advanced Roofing Solutions</h1>
            <p className="lead text-xl text-gray-600">
              Experience the future of roofing across {areaNames.join(', ')}. Our advanced roofing solutions combine 
              cutting-edge technology, innovative materials, and smart systems for superior performance and efficiency.
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

          {/* FAQ Section */}
          <div className="bg-white rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">What makes advanced roofing different?</h3>
                <p className="text-gray-600">Advanced roofing incorporates modern materials, smart technology, and innovative installation techniques. It focuses on energy efficiency, sustainability, and enhanced durability while offering features like integrated solar capabilities and smart monitoring systems.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What advanced roofing materials do you use?</h3>
                <p className="text-gray-600">We use cutting-edge materials including synthetic slate, solar tiles, cool roofing systems, advanced insulation materials, and smart membrane systems that offer superior protection and energy efficiency.</p>
              </div>
            </div>
          </div>

          {/* Advanced Features */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Smart Monitoring Systems</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Solar Integration Ready</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Advanced Insulation</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Weather-Responsive Systems</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Energy Management</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Remote Monitoring</span>
              </li>
            </ul>
          </div>
        </div>
      </ServiceLayout>
    </>
  );
};

export default AdvancedRoofing;
