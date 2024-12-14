import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';
import AdvancedSEO from '../../components/seo/AdvancedSEO';
import LocalBusinessSchema from '../../components/seo/LocalBusinessSchema';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const RoofingConstruction = () => {
  const pageTitle = "Professional Roofing Construction | New Build Specialists | 52roofer.com";
  const pageDescription = `Expert roofing construction services in ${areaNames.join(', ')}. Comprehensive new build roofing, structural design, and construction management. Quality craftsmanship for residential and commercial projects.`;
  const keywords = "roofing construction, new build roofing, roof structure, construction management, commercial construction, residential construction, roofing project management";

  // Enhanced Schema Markup for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.52roofer.com/services/roofing-construction#service",
    "name": "Roofing Construction Services",
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
    "serviceType": "Construction Services",
    "areaServed": areaNames,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "New Build Roofing",
            "description": "Complete roofing solutions for new constructions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Project Management",
            "description": "Professional construction management services"
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
        "name": "What does roofing construction involve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roofing construction involves structural design, material selection, project planning, and professional installation. It includes everything from framework construction to final weatherproofing for new builds and major renovations."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a roofing construction project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project duration varies based on size and complexity. Typical residential projects take 1-2 weeks, while larger commercial projects may take several weeks to months. We provide detailed timelines during consultation."
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
        "name": "Roofing Construction",
        "item": "https://www.52roofer.com/services/roofing-construction"
      }
    ]
  };

  const services = [
    {
      title: "Project Planning",
      description: "Comprehensive construction planning and design",
      icon: "📋"
    },
    {
      title: "Structural Work",
      description: "Expert framework and structural construction",
      icon: "🏗️"
    },
    {
      title: "Quality Control",
      description: "Rigorous quality assurance throughout",
      icon: "✅"
    },
    {
      title: "Site Management",
      description: "Professional construction site coordination",
      icon: "👷"
    }
  ];

  const benefits = [
    {
      title: "Expert Teams",
      description: "Skilled construction professionals",
      icon: "👥"
    },
    {
      title: "Quality Build",
      description: "Superior materials and craftsmanship",
      icon: "🏆"
    },
    {
      title: "Project Control",
      description: "Efficient management and timelines",
      icon: "⏱️"
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
        <meta property="og:url" content="https://www.52roofer.com/services/roofing-construction" />
        <meta property="og:image" content="https://www.52roofer.com/images/roofer-at-work.jpg" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.52roofer.com/images/roofer-at-work.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.52roofer.com/services/roofing-construction" />
        
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
        heroImage="/images/roofer-at-work.jpg"
        heroTitle="Professional Roofing Construction"
        heroDescription="Expert construction services for all roofing projects"
        serviceName="Roofing Construction"
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
            <li className="text-gray-700">Roofing Construction</li>
          </ol>
        </nav>

        <div className="space-y-12">
          {/* Introduction */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Professional Roofing Construction</h1>
            <p className="lead text-xl text-gray-600">
              Expert roofing construction services across {areaNames.join(', ')}. We provide comprehensive 
              construction solutions for new builds, major renovations, and commercial projects, delivering 
              quality craftsmanship and professional project management.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Construction Excellence</h2>
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
                <h3 className="text-xl font-semibold mb-2">What does roofing construction involve?</h3>
                <p className="text-gray-600">Roofing construction involves structural design, material selection, project planning, and professional installation. It includes everything from framework construction to final weatherproofing for new builds and major renovations.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How long does a roofing construction project take?</h3>
                <p className="text-gray-600">Project duration varies based on size and complexity. Typical residential projects take 1-2 weeks, while larger commercial projects may take several weeks to months. We provide detailed timelines during consultation.</p>
              </div>
            </div>
          </div>

          {/* Construction Services */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Construction Services</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>New Build Construction</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Structural Design</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Project Management</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Quality Assurance</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Site Coordination</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Safety Compliance</span>
              </li>
            </ul>
          </div>
        </div>
      </ServiceLayout>
    </>
  );
};

export default RoofingConstruction;
