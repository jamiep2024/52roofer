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
  "headline": "Energy-Efficient Roofing Solutions for UK Homes",
  "description": "Comprehensive guide to energy-efficient roofing options, including materials, installation, and cost savings.",
  "image": "https://www.52roofer.com/images/blog/energy-efficient-roofing.jpg",
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
  "datePublished": "2024-02-01",
  "dateModified": "2024-02-01"
};

const EnergyEfficientRoofingPage = () => {
  const solutions = [
    {
      title: "Cool Roofing",
      description: "Reflective materials that reduce heat absorption"
    },
    {
      title: "Green Roofing",
      description: "Living roof systems for natural insulation"
    },
    {
      title: "Solar Tiles",
      description: "Integrated solar solutions for energy generation"
    },
    {
      title: "Insulated Roofing",
      description: "High-performance insulation systems"
    }
  ];

  return (
    <Layout>
      <Layout>
<SEO title="" description="" />
    <>
      <Head>
        <title>Energy-Efficient Roofing Solutions | 52roofer.com</title>
        <meta 
          name="description" 
          content="Discover energy-efficient roofing solutions that can reduce your energy bills and environmental impact. Expert advice on materials and installation."
        />
        <meta 
          name="keywords" 
          content="energy efficient roofing, green roofing, solar tiles, cool roofing, roof insulation" 
        />
        <link rel="canonical" href="https://www.52roofer.com/blog/energy-efficient-roofing" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://52roofer.com/blog/energy-efficient-roofing#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/blog/energy-efficient-roofing",
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
      "@id": "https://52roofer.com/blog/energy-efficient-roofing#webpage",
      "url": "https://52roofer.com/blog/energy-efficient-roofing",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/blog/energy-efficient-roofing#faq",
      "mainEntity": []
    }
  ]
}</script>
</Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Energy-Efficient Roofing Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how energy-efficient roofing can reduce your bills and environmental impact. Expert solutions available across {areaNames.join(', ')}.
            </p>
          </header>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Energy-Efficient Roofing Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {solutions.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Energy-Efficient Roofing</h2>
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <ul className="list-disc pl-6 space-y-2">
                <li>Reduced energy bills</li>
                <li>Lower carbon footprint</li>
                <li>Improved indoor comfort</li>
                <li>Increased property value</li>
                <li>Potential government incentives</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost Considerations</h2>
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Initial Investment vs Long-term Savings</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Energy bill reductions: 20-30% average savings</li>
                <li>Increased property value: 5-10% potential increase</li>
                <li>Reduced maintenance costs</li>
                <li>Available grants and incentives</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Installation Process</h2>
            <ol className="list-decimal pl-6 space-y-2 mb-8">
              <li>Professional assessment of your property</li>
              <li>Selection of appropriate materials</li>
              <li>Removal of existing roofing if necessary</li>
              <li>Installation of new energy-efficient system</li>
              <li>Final inspection and certification</li>
            </ol>

            <div className="bg-blue-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Improve Your Roof's Efficiency?</h2>
              <p className="text-gray-600 mb-6">
                Our network of certified roofers across {areaNames.join(', ')} can help you choose and install 
                the perfect energy-efficient roofing solution for your property.
              </p>
              <Link
                href="/find-roofer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent/90"
              >
                Get Expert Advice
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Maintenance Tips</h2>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Regular inspections</li>
              <li>Clean solar tiles or reflective surfaces</li>
              <li>Check insulation condition</li>
              <li>Monitor energy performance</li>
            </ul>
          </div>
        </article>
      </div>
    </>
  );
};

export default EnergyEfficientRoofingPage;
