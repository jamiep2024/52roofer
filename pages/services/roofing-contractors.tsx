import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';
import AdvancedSEO from '../../components/seo/AdvancedSEO';
import LocalBusinessSchema from '../../components/seo/LocalBusinessSchema';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const RoofingContractors = () => {
  const pageTitle = "Licensed Roofing Contractors | Certified Experts | 52roofer.com";
  const pageDescription = `Experienced roofing contractors in ${areaNames.join(', ')}. Licensed, insured, and certified professionals delivering superior craftsmanship. Residential and commercial roofing specialists.`;
  const keywords = "roofing contractors, licensed roofers, certified roofing contractors, roofing specialists, commercial roofing contractors, residential roofing contractors, professional roofers";

  // Enhanced Schema Markup for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.52roofer.com/services/roofing-contractors#service",
    "name": "Licensed Roofing Contractors",
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
    "serviceType": "Roofing Contractor Services",
    "areaServed": areaNames,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Contractor Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Licensed Roofing",
            "description": "Full-service licensed roofing solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Certified Installation",
            "description": "Manufacturer-certified installation services"
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
        "name": "What certifications do your roofing contractors have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our roofing contractors hold industry-recognized certifications, including manufacturer certifications from leading brands, health and safety qualifications, and professional trade memberships."
        }
      },
      {
        "@type": "Question",
        "name": "What types of projects do your contractors handle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our contractors handle a wide range of projects including residential roofing, commercial installations, industrial roofing, heritage properties, and specialized roofing systems."
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
        "name": "Roofing Contractors",
        "item": "https://www.52roofer.com/services/roofing-contractors"
      }
    ]
  };

  const services = [
    {
      title: "Licensed & Certified",
      description: "Fully licensed contractors with industry certifications",
      icon: "📜"
    },
    {
      title: "Specialized Expertise",
      description: "Expert knowledge in all roofing systems",
      icon: "🎯"
    },
    {
      title: "Quality Materials",
      description: "Access to premium roofing materials",
      icon: "🏗️"
    },
    {
      title: "Guaranteed Work",
      description: "Long-term warranties on labor and materials",
      icon: "🛡️"
    }
  ];

  const benefits = [
    {
      title: "Expert Knowledge",
      description: "Deep understanding of roofing systems and building codes",
      icon: "🧠"
    },
    {
      title: "Professional Standards",
      description: "Adherence to industry best practices",
      icon: "⭐"
    },
    {
      title: "Complete Solutions",
      description: "Comprehensive roofing services under one roof",
      icon: "🏢"
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
        <meta property="og:url" content="https://www.52roofer.com/services/roofing-contractors" />
        <meta property="og:image" content="https://www.52roofer.com/images/before-roof.jpg" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.52roofer.com/images/before-roof.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.52roofer.com/services/roofing-contractors" />
        
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
        heroImage="/images/before-roof.jpg"
        heroTitle="Licensed Roofing Contractors"
        heroDescription="Expert roofing solutions from certified professionals"
        serviceName="Roofing Contractors"
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
            <li className="text-gray-700">Roofing Contractors</li>
          </ol>
        </nav>

        <div className="space-y-12">
          {/* Introduction */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Licensed Roofing Contractors</h1>
            <p className="lead text-xl text-gray-600">
              Connect with certified roofing contractors across {areaNames.join(', ')}. Our network of licensed professionals 
              delivers superior craftsmanship and expertise for all your roofing needs.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Licensed Contractors?</h2>
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
                <h3 className="text-xl font-semibold mb-2">What certifications do your roofing contractors have?</h3>
                <p className="text-gray-600">Our roofing contractors hold industry-recognized certifications, including manufacturer certifications from leading brands, health and safety qualifications, and professional trade memberships.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What types of projects do your contractors handle?</h3>
                <p className="text-gray-600">Our contractors handle a wide range of projects including residential roofing, commercial installations, industrial roofing, heritage properties, and specialized roofing systems.</p>
              </div>
            </div>
          </div>

          {/* Contractor Services */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contractor Services</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>New Roof Construction</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Roof System Design</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Heritage Roofing</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Specialized Systems</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Technical Consulting</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Project Management</span>
              </li>
            </ul>
          </div>
        </div>
      </ServiceLayout>
    </>
  );
};

export default RoofingContractors;
