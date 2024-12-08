import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { serviceAreas } from '../../data/serviceAreas';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commercial Roofing Services",
  "provider": {
    "@type": "Organization",
    "name": "52roofer.com",
    "image": "https://www.52roofer.com/images/logo.png"
  },
  "areaServed": serviceAreas.map(area => ({
    "@type": "State",
    "name": area
  })),
  "description": "Professional commercial roofing services including installation, repair, and maintenance for all types of commercial buildings.",
  "serviceType": "Commercial Roofing"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of commercial roofing systems do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our network of roofers works with all major commercial roofing systems including EPDM, TPO, PVC, built-up roofing (BUR), modified bitumen, metal roofing, and green roof systems."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a commercial roof typically last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Commercial roof lifespan varies by material: EPDM (20-30 years), TPO (20-30 years), PVC (20-30 years), Built-up Roofing (15-30 years), Metal (30-45 years). Regular maintenance can extend these lifespans."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer preventive maintenance programs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer customized preventive maintenance programs that include regular inspections, cleaning, repairs, and documentation to help extend your roof's lifespan and maintain warranty compliance."
      }
    }
  ]
};

const CommercialRoofing = () => {
  const services = [
    {
      title: "New Installation",
      description: "Complete installation of new commercial roofing systems with warranties.",
      features: [
        "Multiple system options",
        "Energy-efficient solutions",
        "Expert installation teams",
        "Warranty coverage"
      ]
    },
    {
      title: "Repair & Maintenance",
      description: "Comprehensive repair services and preventive maintenance programs.",
      features: [
        "24/7 emergency repairs",
        "Scheduled maintenance",
        "Leak detection",
        "System upgrades"
      ]
    },
    {
      title: "Roof Restoration",
      description: "Cost-effective restoration solutions to extend roof life.",
      features: [
        "Coating systems",
        "Partial replacement",
        "Energy improvements",
        "Minimal disruption"
      ]
    },
    {
      title: "Inspection & Assessment",
      description: "Detailed roof evaluations and condition reports.",
      features: [
        "Thermal imaging",
        "Moisture scanning",
        "Warranty inspections",
        "Documentation"
      ]
    }
  ];

  const systems = [
    {
      name: "EPDM Roofing",
      description: "Durable synthetic rubber roofing membrane, excellent for flat roofs.",
      benefits: [
        "Long lifespan",
        "Weather resistant",
        "Low maintenance",
        "Cost-effective"
      ]
    },
    {
      name: "TPO Roofing",
      description: "Thermoplastic polyolefin membrane, energy-efficient white surface.",
      benefits: [
        "Energy efficient",
        "Heat reflective",
        "Strong seams",
        "Chemical resistant"
      ]
    },
    {
      name: "PVC Roofing",
      description: "High-performance thermoplastic membrane, excellent durability.",
      benefits: [
        "Chemical resistant",
        "Fire resistant",
        "Strong seams",
        "Long lasting"
      ]
    },
    {
      name: "Metal Roofing",
      description: "Versatile and durable metal roofing systems for various applications.",
      benefits: [
        "Long lifespan",
        "Low maintenance",
        "Fire resistant",
        "Energy efficient"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Commercial Roofing Services | Expert Solutions | 52roofer.com</title>
        <meta name="description" content="Professional commercial roofing services including installation, repair, and maintenance. Expert solutions for all types of commercial buildings and roofing systems." />
        <meta name="keywords" content="commercial roofing, EPDM roofing, TPO roofing, PVC roofing, metal roofing, roof maintenance, commercial roof repair" />
        <link rel="canonical" href="https://www.52roofer.com/services/commercial-roofing" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema]) }}
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Commercial Roofing Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert commercial roofing services across {serviceAreas.join(', ')}. 
            From installation to maintenance, we've got your business covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Commercial Roofing Systems
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {systems.map((system, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {system.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {system.description}
                </p>
                <ul className="space-y-2">
                  {system.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Commercial Roofing FAQ
          </h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.name}
                </h3>
                <p className="text-gray-600">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Commercial Roofing Services?
          </h2>
          <p className="text-xl mb-6">
            Get expert solutions for your commercial property
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100"
          >
            Request a Consultation
          </Link>
        </div>
      </div>
    </>
  );
};

export default CommercialRoofing;
