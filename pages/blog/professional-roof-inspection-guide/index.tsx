import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { serviceAreas } from '../../data/serviceAreas';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Professional Roof Inspection Guide: What to Expect",
  "datePublished": "2024-01-20",
  "dateModified": "2024-01-20",
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
  "description": "Comprehensive guide to professional roof inspections. Learn what inspectors look for, when to get an inspection, and how to prepare.",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.52roofer.com/blog/professional-roof-inspection-guide"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often should I get my roof inspected?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's recommended to have your roof professionally inspected at least once a year and after any major storms. Regular inspections can catch problems early and extend your roof's lifespan."
      }
    },
    {
      "@type": "Question",
      "name": "What does a roof inspection include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A professional roof inspection includes examining structural components, materials and workmanship, interior checks for leaks and ventilation, and assessment of drainage systems and flashings."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a roof inspection cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Roof inspection costs typically range from £150 to £400, depending on roof size, complexity, and inspection type. Many companies offer free initial inspections for potential repairs."
      }
    }
  ]
};

const RoofInspectionGuide = () => {
  const inspectionAreas = [
    {
      title: "Structural Inspection",
      items: [
        "Sagging roof deck",
        "Truss condition",
        "Chimney stability",
        "Wall alignment"
      ]
    },
    {
      title: "Material Inspection",
      items: [
        "Shingle condition",
        "Missing materials",
        "Moss/algae growth",
        "Material deterioration"
      ]
    },
    {
      title: "Interior Inspection",
      items: [
        "Attic ventilation",
        "Water damage signs",
        "Daylight penetration",
        "Insulation condition"
      ]
    },
    {
      title: "System Inspection",
      items: [
        "Gutter function",
        "Drainage systems",
        "Flashing condition",
        "Vent placement"
      ]
    }
  ];

  const inspectionTiming = [
    {
      situation: "Routine Maintenance",
      timing: "Annual inspection recommended",
      reason: "Preventive care and early problem detection"
    },
    {
      situation: "After Severe Weather",
      timing: "Within 1-2 weeks after event",
      reason: "Assess storm damage and prevent secondary issues"
    },
    {
      situation: "Property Purchase",
      timing: "Before closing",
      reason: "Evaluate roof condition for negotiation/planning"
    },
    {
      situation: "Insurance Requirements",
      timing: "As specified by policy",
      reason: "Maintain coverage and document condition"
    }
  ];

  // Get array of area names for display
  const areaNames = Object.values(serviceAreas).map(area => area.name);

  return (
    <Layout>
      <Layout>
<SEO title="" description="" />
    <>
      <Head>
        <title>Professional Roof Inspection Guide | What to Expect | 52roofer.com</title>
        <meta name="description" content="Learn what to expect during a professional roof inspection. Expert guide on inspection types, timing, costs, and preparation. Get the most from your roof inspection." />
        <meta name="keywords" content="roof inspection, roof assessment, roof examination, professional roofer, roof maintenance, inspection checklist" />
        <link rel="canonical" href="https://www.52roofer.com/blog/professional-roof-inspection-guide" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, faqSchema]) }}
        />
        <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://52roofer.com/blog/professional-roof-inspection-guide#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/blog/professional-roof-inspection-guide",
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
      "@id": "https://52roofer.com/blog/professional-roof-inspection-guide#webpage",
      "url": "https://52roofer.com/blog/professional-roof-inspection-guide",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/blog/professional-roof-inspection-guide#faq",
      "mainEntity": []
    }
  ]
}</script>
</Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <header className="text-center mb-12">
            <div className="text-gray-500 mb-2">January 20, 2024 • Maintenance</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Roof Inspection Guide: What to Expect
            </h1>
            <p className="text-xl text-gray-600">
              Understanding the roof inspection process and why it's crucial for your home
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2>Why Roof Inspections Matter</h2>
            <p>
              Regular roof inspections are crucial for maintaining your home's integrity and preventing 
              costly repairs. Professional inspectors can identify potential issues before they become 
              major problems, helping you save money and extend your roof's lifespan.
            </p>

            <h2>What Inspectors Look For</h2>
            <div className="grid md:grid-cols-2 gap-8 my-8">
              {inspectionAreas.map((area, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2>When to Schedule an Inspection</h2>
            <div className="space-y-6 my-8">
              {inspectionTiming.map((item, index) => (
                <div key={index} className="bg-white shadow-sm rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.situation}</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Timing:</strong> {item.timing}
                  </p>
                  <p className="text-gray-600">
                    <strong>Why:</strong> {item.reason}
                  </p>
                </div>
              ))}
            </div>

            <h2>Preparing for an Inspection</h2>
            <p>
              To get the most from your roof inspection:
            </p>
            <ul>
              <li>Clear the attic of stored items for easy access</li>
              <li>Trim overhanging branches</li>
              <li>Clean gutters if possible</li>
              <li>Document any concerns or recent issues</li>
              <li>Gather previous inspection reports</li>
            </ul>

            <h2>After the Inspection</h2>
            <p>
              Following the inspection, you should receive:
            </p>
            <ul>
              <li>Detailed written report</li>
              <li>Photos of any issues found</li>
              <li>Recommendations for repairs</li>
              <li>Cost estimates if needed</li>
              <li>Maintenance suggestions</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Schedule Your Professional Inspection</h2>
              <p className="text-blue-800 mb-4">
                Get your roof inspected by certified professionals across {areaNames.join(', ')}.
              </p>
              <Link
                href="/find-roofer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Schedule an Inspection
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default RoofInspectionGuide;
