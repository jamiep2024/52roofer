import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { serviceAreas } from '../../data/serviceAreas';

// Get array of area names for display
const areaNames = Object.values(serviceAreas).map(area => area.name);

// Get all towns from all counties
const allTowns = Object.values(serviceAreas).reduce((acc, area) => {
  return [...acc, ...area.mainTowns.map(town => ({
    name: town,
    county: area.name
  }))];
}, [] as { name: string; county: string }[]);

const services = [
  {
    id: 1,
    title: 'Commercial Roofing',
    slug: 'commercial-roofing',
    description: 'Professional roofing solutions for businesses and commercial properties.',
    icon: '🏢'
  },
  {
    id: 2,
    title: 'Emergency Roof Repairs',
    slug: 'emergency-roof-repairs',
    description: '24/7 emergency roofing services for urgent repairs and storm damage.',
    icon: '🚨'
  },
  {
    id: 3,
    title: 'Residential Roofing',
    slug: 'residential-roofing',
    description: 'Complete roofing services for homes and residential properties.',
    icon: '🏠'
  },
  {
    id: 4,
    title: 'Roof Maintenance',
    slug: 'roof-maintenance',
    description: 'Regular maintenance and inspections to extend your roof\'s lifespan.',
    icon: '🔧'
  },
  {
    id: 5,
    title: 'Roof Inspection',
    slug: 'roof-inspection',
    description: 'Thorough roof inspections to identify and prevent potential issues.',
    icon: '🔍'
  },
  {
    id: 6,
    title: 'Gutter Services',
    slug: 'gutter-services',
    description: 'Professional gutter installation, repair, and maintenance services.',
    icon: '🏗️'
  },
  {
    id: 7,
    title: 'Roof Ventilation',
    slug: 'roof-ventilation',
    description: 'Expert ventilation solutions for optimal roof performance.',
    icon: '💨'
  },
  {
    id: 8,
    title: 'Skylight Installation',
    slug: 'skylight-installation',
    description: 'Professional skylight installation and maintenance services.',
    icon: '☀️'
  },
  // New Services with Location-specific Pages
  {
    id: 9,
    title: 'Local Roofing Companies',
    slug: 'roofing-companies-near-me',
    description: 'Connect with trusted local roofing companies in your area.',
    icon: '📍',
    hasLocationPages: true
  },
  {
    id: 10,
    title: 'Professional Roofing Firms',
    slug: 'roofing-firms-near-me',
    description: 'Expert roofing firms delivering quality and reliability.',
    icon: '🏛️',
    hasLocationPages: true
  },
  {
    id: 11,
    title: 'Roofing Contractors',
    slug: 'roofing-contractors',
    description: 'Licensed and certified roofing contractors for your project.',
    icon: '👷',
    hasLocationPages: true
  },
  {
    id: 12,
    title: 'Roof Replacement',
    slug: 'roof-replacement',
    description: 'Complete roof replacement services with quality materials.',
    icon: '🔄',
    hasLocationPages: true
  },
  {
    id: 13,
    title: 'Apex Roofing',
    slug: 'apex-roofing',
    description: 'Specialized solutions for apex and pitched roof designs.',
    icon: '🏔️',
    hasLocationPages: true
  },
  {
    id: 14,
    title: 'Advanced Roofing',
    slug: 'advanced-roofing',
    description: 'Cutting-edge roofing technology and innovative solutions.',
    icon: '🚀',
    hasLocationPages: true
  },
  {
    id: 15,
    title: 'Roofing Construction',
    slug: 'roofing-construction',
    description: 'Comprehensive roofing construction and project management.',
    icon: '🏗️',
    hasLocationPages: true
      </Layout>

    );
}

];

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Roofing Services",
  "provider": {
    "@type": "Organization",
    "name": "52roofer.com",
    "image": "https://www.52roofer.com/images/logo.png"
  },
  "areaServed": Object.values(serviceAreas).map(area => ({
    "@type": "State",
    "name": area.name
  })),
  "description": "Comprehensive roofing services including commercial, residential, emergency repairs, and maintenance."
};

const ServicesIndex = () => {
  const [selectedLocations, setSelectedLocations] = useState<{ [key: string]: string }>({});

  const handleLocationChange = (serviceId: number, location: string) => {
    setSelectedLocations(prev => ({
      ...prev,
      [serviceId]: location
    }));
  };

  return (
    <Layout>
      <Layout>
<SEO title="" description="" />
    <>
      <Head>
        <title>Professional Roofing Services | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Expert roofing services across ${areaNames.join(', ')}. Commercial, residential, emergency repairs, and maintenance services from trusted local roofers.`} 
        />
        <link rel="canonical" href="https://www.52roofer.com/services" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://52roofer.com/services#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/services",
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
      "@id": "https://52roofer.com/services#webpage",
      "url": "https://52roofer.com/services",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/services#faq",
      "mainEntity": []
    }
  ]
}</script>
</Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Roofing Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional roofing services across {areaNames.join(', ')}. Quality workmanship guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                {service.hasLocationPages ? (
                  <div>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md mb-4"
                      value={selectedLocations[service.id] || ''}
                      onChange={(e) => handleLocationChange(service.id, e.target.value)}
                    >
                      <option value="">Select your location</option>
                      {allTowns.map((town, index) => (
                        <option key={index} value={town.name.toLowerCase().replace(/ /g, '-')}>
                          {town.name}, {town.county}
                        </option>
                      ))}
                    </select>
                    <Link
                      href={selectedLocations[service.id] 
                        ? `/services/${service.slug}/${selectedLocations[service.id]}`
                        : '#'}
                      className={`block w-full text-center px-4 py-2 rounded-md ${
                        selectedLocations[service.id]
                          ? 'bg-accent text-white hover:bg-accent/90'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {selectedLocations[service.id]
                        ? 'View Service'
                        : 'Select a location'}
                    </Link>
                  </div>
                ) : (
                  <Link 
                    href={`/services/${service.slug}`}
                    className="block w-full text-center px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90"
                  >
                    View Service
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/find-roofer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent/90 transition-all"
          >
            Find a Roofer Near You
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServicesIndex;
