import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';
import AdvancedSEO from '../../components/seo/AdvancedSEO';
import LocalBusinessSchema from '../../components/seo/LocalBusinessSchema';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const RoofReplacement = () => {
  const pageTitle = "Professional Roof Replacement Services | Expert Installation | 52roofer.com";
  const pageDescription = `Complete roof replacement services in ${areaNames.join(', ')}. Expert installation, quality materials, and competitive pricing. Free consultation and detailed quotes available.`;
  const keywords = "roof replacement, new roof installation, roof renovation, roofing materials, roof upgrade, professional roofers, roof installation cost";

  // Enhanced Schema Markup for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.52roofer.com/services/roof-replacement#service",
    "name": "Roof Replacement Services",
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
    "serviceType": "Roof Replacement",
    "areaServed": areaNames,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roof Replacement Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Complete Roof Replacement",
            "description": "Full roof replacement with quality materials"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof System Upgrade",
            "description": "Upgrade to modern, energy-efficient roofing systems"
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
        "name": "How long does a roof replacement typically take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A typical residential roof replacement takes 2-5 days depending on the size, complexity, and weather conditions. Commercial projects may take longer based on scope."
        }
      },
      {
        "@type": "Question",
        "name": "What roofing materials do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a wide range of materials including asphalt shingles, slate, clay tiles, metal roofing, and flat roof systems. Each comes with different warranties and benefits."
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
        "name": "Roof Replacement",
        "item": "https://www.52roofer.com/services/roof-replacement"
      }
    ]
  };

  const services = [
    {
      title: "Complete Replacement",
      description: "Full roof system replacement with quality materials",
      icon: "🏠"
    },
    {
      title: "Modern Solutions",
      description: "Energy-efficient and sustainable roofing options",
      icon: "🌱"
    },
    {
      title: "Expert Installation",
      description: "Professional installation by certified teams",
      icon: "👷"
    },
    {
      title: "Material Choice",
      description: "Wide selection of premium roofing materials",
      icon: "🏗️"
    }
  ];

  const benefits = [
    {
      title: "Increased Value",
      description: "Boost your property value with a new roof",
      icon: "📈"
    },
    {
      title: "Better Protection",
      description: "Enhanced protection against weather elements",
      icon: "🛡️"
    },
    {
      title: "Energy Savings",
      description: "Improved insulation and energy efficiency",
      icon: "💡"
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
        <meta property="og:url" content="https://www.52roofer.com/services/roof-replacement" />
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
        <link rel="canonical" href="https://www.52roofer.com/services/roof-replacement" />
        
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
        heroTitle="Professional Roof Replacement Services"
        heroDescription="Transform your property with a new, high-quality roof"
        serviceName="Roof Replacement"
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
            <li className="text-gray-700">Roof Replacement</li>
          </ol>
        </nav>

        <div className="space-y-12">
          {/* Introduction */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Expert Roof Replacement Services</h1>
            <p className="lead text-xl text-gray-600">
              Transform your property with professional roof replacement services across {areaNames.join(', ')}. 
              We deliver superior quality, energy efficiency, and long-lasting protection for your home or business.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Roof Replacement</h2>
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
                <h3 className="text-xl font-semibold mb-2">How long does a roof replacement typically take?</h3>
                <p className="text-gray-600">A typical residential roof replacement takes 2-5 days depending on the size, complexity, and weather conditions. Commercial projects may take longer based on scope.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What roofing materials do you offer?</h3>
                <p className="text-gray-600">We offer a wide range of materials including asphalt shingles, slate, clay tiles, metal roofing, and flat roof systems. Each comes with different warranties and benefits.</p>
              </div>
            </div>
          </div>

          {/* Material Options */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Roofing Materials</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Asphalt Shingles</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Metal Roofing</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Slate Tiles</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Clay & Concrete Tiles</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Flat Roof Systems</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span>Green Roofing Options</span>
              </li>
            </ul>
          </div>
        </div>
      </ServiceLayout>
    </>
  );
};

export default RoofReplacement;
