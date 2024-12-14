import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';
import AdvancedSEO from '../../components/seo/AdvancedSEO';
import LocalBusinessSchema from '../../components/seo/LocalBusinessSchema';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const RoofingCompaniesNearMe = () => {
  const pageTitle = "Top-Rated Local Roofing Companies Near Me | 52roofer.com";
  const pageDescription = `Find trusted local roofing companies in ${areaNames.join(', ')}. Expert roofers, emergency repairs, free quotes. 24/7 service, fully insured professionals.`;
  const keywords = "roofing companies near me, local roofers, trusted roofing contractors, emergency roof repair, residential roofing, commercial roofing, roof installation, roof replacement";

  // Enhanced Schema Markup for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.52roofer.com/services/roofing-companies-near-me#service",
    "name": "Local Roofing Companies",
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
    "serviceType": "Roofing",
    "areaServed": areaNames,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roofing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Roof Repairs",
            "description": "24/7 emergency roofing services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Installation",
            "description": "Complete new roof installations"
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
        "name": "How do I choose a reliable roofing company near me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for licensed, insured contractors with good reviews, extensive experience, and proper certifications. Ask for references and ensure they provide detailed written quotes."
        }
      },
      {
        "@type": "Question",
        "name": "What services do local roofing companies offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Local roofing companies typically offer roof repairs, installations, replacements, inspections, maintenance, emergency services, and gutter services."
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
        "name": "Local Roofing Companies",
        "item": "https://www.52roofer.com/services/roofing-companies-near-me"
      }
    ]
  };

  const services = [
    {
      title: "Local Expertise",
      description: "Roofing companies that understand your area's specific needs",
      icon: "🏘️"
    },
    {
      title: "Quick Response",
      description: "Fast quotes and emergency services when you need them",
      icon: "⚡"
    },
    {
      title: "Full Service",
      description: "Complete roofing solutions from repairs to replacements",
      icon: "🏠"
    },
    {
      title: "Quality Guarantee",
      description: "Work backed by solid warranties and guarantees",
      icon: "✅"
    }
  ];

  const benefits = [
    {
      title: "Local Knowledge",
      description: "Understanding of local weather conditions and building regulations",
      icon: "📍"
    },
    {
      title: "Fast Service",
      description: "Quick response times and efficient project completion",
      icon: "⏱️"
    },
    {
      title: "Trusted Teams",
      description: "Verified local contractors with proven track records",
      icon: "🤝"
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
        <meta property="og:url" content="https://www.52roofer.com/services/roofing-companies-near-me" />
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
        <link rel="canonical" href="https://www.52roofer.com/services/roofing-companies-near-me" />
        
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
        heroTitle="Find Trusted Roofing Companies Near You"
        heroDescription="Connect with reliable local roofing professionals in your area"
        serviceName="Local Roofing Companies"
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
            <li className="text-gray-700">Local Roofing Companies</li>
          </ol>
        </nav>

        <div className="space-y-12">
          {/* Introduction */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Local Roofing Companies Near You</h1>
            <p className="lead text-xl text-gray-600">
              Looking for reliable roofing companies near you? We connect you with trusted local roofers across {areaNames.join(', ')}. 
              Get quality workmanship and exceptional service from experienced professionals in your area.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Local Roofing Companies?</h2>
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
                <h3 className="text-xl font-semibold mb-2">How do I choose a reliable roofing company near me?</h3>
                <p className="text-gray-600">Look for licensed, insured contractors with good reviews, extensive experience, and proper certifications. Ask for references and ensure they provide detailed written quotes.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What services do local roofing companies offer?</h3>
                <p className="text-gray-600">Local roofing companies typically offer roof repairs, installations, replacements, inspections, maintenance, emergency services, and gutter services.</p>
              </div>
            </div>
          </div>

          {/* Services Offered */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Services Available</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Roof Repairs & Maintenance</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>New Roof Installation</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Emergency Repairs</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Roof Inspections</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Gutter Services</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Chimney Repairs</span>
              </li>
            </ul>
          </div>
        </div>
      </ServiceLayout>
    </>
  );
};

export default RoofingCompaniesNearMe;
