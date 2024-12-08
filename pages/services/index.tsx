import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { serviceAreas } from '../../data/serviceAreas';

// Get array of area names for display
const areaNames = Object.values(serviceAreas).map(area => area.name);

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
    slug: 'emergency-roof-repair',
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
    slug: 'gutter-service',
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
  return (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link 
              href={`/services/${service.slug}`}
              key={service.id}
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </Link>
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
