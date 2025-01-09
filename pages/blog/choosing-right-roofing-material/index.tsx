import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { serviceAreas } from '../../data/serviceAreas';

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Complete Guide to Choosing the Right Roofing Material",
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-15",
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
  "description": "Comprehensive guide to choosing the perfect roofing material for your home. Compare costs, durability, and benefits of different roofing materials.",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.52roofer.com/blog/choosing-right-roofing-material"
  }
};

const materialsSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the most durable roofing material?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Slate is generally considered the most durable roofing material, with a potential lifespan of over 100 years. Metal roofing is also highly durable, lasting 40-70 years."
      }
    },
    {
      "@type": "Question",
      "name": "What is the most cost-effective roofing material?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Asphalt shingles are typically the most cost-effective roofing material, offering good durability (20-25 years) at a reasonable price point."
      }
    },
    {
      "@type": "Question",
      "name": "Which roofing material is best for energy efficiency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Metal roofing is generally the most energy-efficient option, reflecting solar radiation and helping to reduce cooling costs. Light-colored or 'cool roof' materials can also improve energy efficiency."
      }
    }
  ]
};

const RoofingMaterialsGuide = () => {
  const materials = [
    {
      name: "Asphalt Shingles",
      lifespan: "20-25 years",
      cost: "£",
      pros: [
        "Cost-effective",
        "Easy to install",
        "Wide variety of styles",
        "Good fire resistance"
      ],
      cons: [
        "Shorter lifespan than other materials",
        "Less environmentally friendly",
        "Can be damaged by extreme weather"
      ]
    },
    {
      name: "Metal Roofing",
      lifespan: "40-70 years",
      cost: "££",
      pros: [
        "Extremely durable",
        "Energy efficient",
        "Fire resistant",
        "Low maintenance"
      ],
      cons: [
        "Higher initial cost",
        "Installation requires specialists",
        "Can be noisy during rain"
      ]
    },
    {
      name: "Slate",
      lifespan: "100+ years",
      cost: "£££",
      pros: [
        "Longest lasting",
        "Beautiful natural appearance",
        "Excellent durability",
        "Fire resistant"
      ],
      cons: [
        "Very expensive",
        "Heavy - may require structural reinforcement",
        "Limited qualified installers"
      ]
    },
    {
      name: "Clay Tiles",
      lifespan: "50-100 years",
      cost: "££",
      pros: [
        "Long lasting",
        "Low maintenance",
        "Great curb appeal",
        "Good insulation"
      ],
      cons: [
        "Heavy material",
        "More expensive than asphalt",
        "Can be brittle"
      ]
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
        <title>Complete Guide to Roofing Materials | Expert Comparison | 52roofer.com</title>
        <meta name="description" content="Compare different roofing materials - costs, durability, pros and cons. Expert guide to choosing the perfect roofing material for your home and budget." />
        <meta name="keywords" content="roofing materials, roof types, asphalt shingles, metal roofing, slate roof, clay tiles, roofing comparison" />
        <link rel="canonical" href="https://www.52roofer.com/blog/choosing-right-roofing-material" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, materialsSchema]) }}
        />
        <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://52roofer.com/blog/choosing-right-roofing-material#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/blog/choosing-right-roofing-material",
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
      "@id": "https://52roofer.com/blog/choosing-right-roofing-material#webpage",
      "url": "https://52roofer.com/blog/choosing-right-roofing-material",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/blog/choosing-right-roofing-material#faq",
      "mainEntity": []
    }
  ]
}</script>
</Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <header className="text-center mb-12">
            <div className="text-gray-500 mb-2">January 15, 2024 • Materials</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Guide to Choosing the Right Roofing Material
            </h1>
            <p className="text-xl text-gray-600">
              Compare costs, durability, and benefits to find the perfect roofing material for your home
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2>Factors to Consider When Choosing Roofing Materials</h2>
            <p>
              Selecting the right roofing material is crucial for your home&apos;s protection and value. 
              Consider these key factors:
            </p>
            <ul>
              <li>Climate and weather conditions</li>
              <li>Building structure and roof pitch</li>
              <li>Local building codes and restrictions</li>
              <li>Budget - both initial and long-term</li>
              <li>Aesthetic preferences and home style</li>
              <li>Environmental concerns</li>
            </ul>

            <h2>Comparison of Popular Roofing Materials</h2>
            {materials.map((material, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold mb-4">{material.name}</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="font-semibold">Lifespan:</span> {material.lifespan}
                  </div>
                  <div>
                    <span className="font-semibold">Cost Range:</span> {material.cost}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Advantages</h4>
                    <ul className="list-disc pl-4">
                      {material.pros.map((pro, i) => (
                        <li key={i}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Disadvantages</h4>
                    <ul className="list-disc pl-4">
                      {material.cons.map((con, i) => (
                        <li key={i}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <h2>Environmental Considerations</h2>
            <p>
              When choosing roofing materials, consider their environmental impact:
            </p>
            <ul>
              <li>Recyclability of materials</li>
              <li>Energy efficiency ratings</li>
              <li>Production carbon footprint</li>
              <li>Potential for solar panel installation</li>
            </ul>

            <h2>Installation Considerations</h2>
            <p>
              Different materials require different installation expertise:
            </p>
            <ul>
              <li>Some materials require specialized installers</li>
              <li>Installation time varies significantly</li>
              <li>Weather conditions during installation</li>
              <li>Structural requirements</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Need Help Choosing the Right Material?</h2>
              <p className="text-blue-800 mb-4">
                Our network of experienced roofers across {areaNames.join(', ')} can help you choose 
                the perfect roofing material for your home and budget.
              </p>
              <Link
                href="/find-roofer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Consult a Local Expert
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default RoofingMaterialsGuide;
