import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const RoofVentilation = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roof Ventilation Services",
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": Object.values(serviceAreas).map(area => ({
      "@type": "State",
      "name": area.name
    })),
    "description": "Professional roof ventilation solutions for optimal air flow and temperature control."
  };

  const services = [
    {
      title: "Ridge Vents",
      description: "Installation of continuous ridge ventilation systems",
      icon: "🏠"
    },
    {
      title: "Soffit Vents",
      description: "Under-eave ventilation for proper airflow",
      icon: "💨"
    },
    {
      title: "Roof Fans",
      description: "Powered ventilation solutions for enhanced airflow",
      icon: "🌪️"
    },
    {
      title: "Gable Vents",
      description: "Side wall ventilation for attic spaces",
      icon: "🔲"
        </Layout>

      );
}

  ];

  const benefits = [
    {
      title: "Energy Savings",
      description: "Reduce cooling costs with proper ventilation",
      icon: "💰"
    },
    {
      title: "Moisture Control",
      description: "Prevent mold and structural damage",
      icon: "💧"
    },
    {
      title: "Extended Roof Life",
      description: "Protect your roof from premature aging",
      icon: "⏳"
    }
  ];

  return (
    <Layout>
      <Layout>
<LocalBusinessSchema />
<SEO title="" description="" />
    <ServiceLayout
      heroImage="/images/services/ventilation-hero.jpg"
      heroTitle="Roof Ventilation Services"
      heroDescription="Optimize your roof's performance with proper ventilation"
    >
      <Head>
        <title>Roof Ventilation Services | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Expert roof ventilation services across ${areaNames.join(', ')}. Improve energy efficiency and protect your property.`}
        />
        <link rel="canonical" href="https://www.52roofer.com/services/roof-ventilation" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://52roofer.com/services/roof-ventilation#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/services/roof-ventilation",
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
      "@id": "https://52roofer.com/services/roof-ventilation#webpage",
      "url": "https://52roofer.com/services/roof-ventilation",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/services/roof-ventilation#faq",
      "mainEntity": []
    }
  ]
}</script>
</Head>

      <div className="space-y-12">
        {/* Introduction */}
        <div>
          <p className="lead text-xl text-gray-600">
            Professional roof ventilation solutions across {areaNames.join(', ')}. 
            We help maintain optimal temperature and airflow in your property while reducing energy costs.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Proper Ventilation</h2>
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

        {/* Process Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Installation Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">1</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Ventilation Assessment</h3>
                <p className="text-gray-600">Evaluate current ventilation and identify needs</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Custom Design</h3>
                <p className="text-gray-600">Design optimal ventilation solution for your property</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Professional Installation</h3>
                <p className="text-gray-600">Expert installation of ventilation components</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Performance Testing</h3>
                <p className="text-gray-600">Verify proper airflow and system functionality</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Why is roof ventilation important?</h3>
              <p className="text-gray-600">Proper roof ventilation helps regulate temperature, prevent moisture buildup, and extend your roof's lifespan while reducing energy costs.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">How do I know if I need better ventilation?</h3>
              <p className="text-gray-600">Signs include high energy bills, ice dams in winter, hot attic spaces in summer, and moisture or mold in your attic.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What types of ventilation do you offer?</h3>
              <p className="text-gray-600">We offer ridge vents, soffit vents, gable vents, roof fans, and custom ventilation solutions tailored to your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default RoofVentilation;
