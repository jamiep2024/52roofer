import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { serviceAreas } from '../../data/serviceAreas';

// Get array of area names for display
const areaNames = Object.values(serviceAreas).map(area => area.name);

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Ultimate Guide to Roof Ventilation",
  "description": "Comprehensive guide to roof ventilation systems, benefits, installation, and maintenance for optimal home performance.",
  "image": "https://www.52roofer.com/images/blog/roof-ventilation-guide.jpg",
  "author": {
    "@type": "Organization",
    "name": "52roofer.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "52roofer.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.52roofer.com/images/logo.png"
        </Layout>

      );
}

  },
  "datePublished": "2024-01-28",
  "dateModified": "2024-01-28"
};

const RoofVentilationGuidePage = () => {
  const ventilationTypes = [
    {
      type: "Ridge Vents",
      description: "Installed along the roof's peak for maximum air flow"
    },
    {
      type: "Soffit Vents",
      description: "Located under the eaves for intake ventilation"
    },
    {
      type: "Box Vents",
      description: "Static vents installed near the roof's peak"
    },
    {
      type: "Powered Vents",
      description: "Motorized fans for enhanced ventilation"
    }
  ];

  return (
    <Layout>
      <Layout>
<SEO title="" description="" />
    <>
      <Head>
        <title>The Ultimate Guide to Roof Ventilation | 52roofer.com</title>
        <meta 
          name="description" 
          content="Complete guide to roof ventilation systems. Learn about different types, benefits, installation, and maintenance for optimal home performance."
        />
        <meta 
          name="keywords" 
          content="roof ventilation, attic ventilation, roof vents, ventilation types, energy efficiency" 
        />
        <link rel="canonical" href="https://www.52roofer.com/blog/ultimate-roof-ventilation-guide" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://52roofer.com/blog/ultimate-roof-ventilation-guide#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/blog/ultimate-roof-ventilation-guide",
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
      "@id": "https://52roofer.com/blog/ultimate-roof-ventilation-guide#webpage",
      "url": "https://52roofer.com/blog/ultimate-roof-ventilation-guide",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/blog/ultimate-roof-ventilation-guide#faq",
      "mainEntity": []
    }
  ]
}</script>
</Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              The Ultimate Guide to Roof Ventilation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about roof ventilation systems, from basic principles to advanced solutions.
            </p>
          </header>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Roof Ventilation Matters</h2>
            <p className="text-gray-600 mb-8">
              Proper roof ventilation is crucial for maintaining your home's efficiency and protecting your roof's structure. 
              It helps regulate temperature, prevent moisture damage, and extend your roof's lifespan.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Roof Ventilation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {ventilationTypes.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.type}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Proper Ventilation</h2>
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <ul className="list-disc pl-6 space-y-2">
                <li>Reduces energy costs</li>
                <li>Prevents moisture damage and mold growth</li>
                <li>Extends roof life</li>
                <li>Improves indoor comfort</li>
                <li>Prevents ice dam formation in winter</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Signs of Poor Ventilation</h2>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>High energy bills</li>
              <li>Hot or cold spots in your home</li>
              <li>Excessive moisture in the attic</li>
              <li>Ice dams during winter</li>
              <li>Premature aging of roofing materials</li>
            </ul>

            <div className="bg-blue-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Professional Ventilation Services?</h2>
              <p className="text-gray-600 mb-6">
                Our network of experienced roofers across {areaNames.join(', ')} can help assess your ventilation needs 
                and implement the right solution for your property.
              </p>
              <Link
                href="/find-roofer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent/90"
              >
                Find a Ventilation Expert
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Maintenance Tips</h2>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Regular inspection of vents and fans</li>
              <li>Keep vents clear of debris</li>
              <li>Check for proper airflow</li>
              <li>Monitor attic temperature and moisture levels</li>
            </ul>
          </div>
        </article>
      </div>
    </>
  );
};

export default RoofVentilationGuidePage;
