import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';
import AdvancedSEO from '../../components/seo/AdvancedSEO';
import LocalBusinessSchema from '../../components/seo/LocalBusinessSchema';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const RoofingFirmsNearMe = () => {
  const pageTitle = "Professional Roofing Firms Near Me | Expert Local Services | 52roofer.com";
  const pageDescription = `Connect with established roofing firms in ${areaNames.join(', ')}. Professional teams, comprehensive roofing solutions, and industry-leading warranties. Get expert advice and free consultations.`;
  const keywords = "roofing firms near me, professional roofers, local roofing firms, commercial roofing, industrial roofing, roofing specialists, certified roofers";

  // Enhanced Schema Markup for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.52roofer.com/services/roofing-firms-near-me#service",
    "name": "Professional Roofing Firms",
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
    "serviceType": "Professional Roofing",
    "areaServed": areaNames,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Roofing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Roofing",
            "description": "Professional commercial roofing solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Roofing",
            "description": "Specialized industrial roofing services"
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
        "name": "What makes a professional roofing firm different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional roofing firms offer comprehensive services, certified expertise, industry-leading warranties, and dedicated project management. They typically have extensive experience with both residential and commercial projects."
        }
      },
      {
        "@type": "Question",
        "name": "What qualifications should I look for in a roofing firm?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for firms with proper licensing, insurance, manufacturer certifications, extensive industry experience, and membership in professional roofing associations."
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
        "name": "Professional Roofing Firms",
        "item": "https://www.52roofer.com/services/roofing-firms-near-me"
      }
    ]
  };

  const services = [
    {
      title: "Professional Teams",
      description: "Certified experts with extensive industry experience",
      icon: "👥"
    },
    {
      title: "Commercial Expertise",
      description: "Specialized in large-scale commercial projects",
      icon: "🏢"
    },
    {
      title: "Project Management",
      description: "Dedicated managers for seamless execution",
      icon: "📋"
    },
    {
      title: "Industry Standards",
      description: "Adherence to highest quality standards",
      icon: "🏆"
    }
  ];

  const benefits = [
    {
      title: "Certified Excellence",
      description: "Industry certifications and continuous training",
      icon: "📜"
    },
    {
      title: "Comprehensive Service",
      description: "End-to-end roofing solutions and support",
      icon: "🔄"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control and inspections",
      icon: "✔️"
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
        <meta property="og:url" content="https://www.52roofer.com/services/roofing-firms-near-me" />
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
        <link rel="canonical" href="https://www.52roofer.com/services/roofing-firms-near-me" />
        
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
        heroTitle="Professional Roofing Firms Near You"
        heroDescription="Expert roofing solutions from established local firms"
        serviceName="Professional Roofing Firms"
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
            <li className="text-gray-700">Professional Roofing Firms</li>
          </ol>
        </nav>

        <div className="space-y-12">
          {/* Introduction */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Professional Roofing Firms in Your Area</h1>
            <p className="lead text-xl text-gray-600">
              Connect with established roofing firms across {areaNames.join(', ')}. Our network of professional firms 
              delivers comprehensive roofing solutions backed by industry-leading warranties and expert project management.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Professional Advantage</h2>
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
                <h3 className="text-xl font-semibold mb-2">What makes a professional roofing firm different?</h3>
                <p className="text-gray-600">Professional roofing firms offer comprehensive services, certified expertise, industry-leading warranties, and dedicated project management. They typically have extensive experience with both residential and commercial projects.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What qualifications should I look for in a roofing firm?</h3>
                <p className="text-gray-600">Look for firms with proper licensing, insurance, manufacturer certifications, extensive industry experience, and membership in professional roofing associations.</p>
              </div>
            </div>
          </div>

          {/* Professional Services */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Services</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Commercial Roofing Solutions</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Industrial Roofing Projects</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Large-Scale Installations</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Preventive Maintenance</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Project Management</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Quality Assurance</span>
              </li>
            </ul>
          </div>
        </div>
      </ServiceLayout>
    </>
  );
};

export default RoofingFirmsNearMe;
