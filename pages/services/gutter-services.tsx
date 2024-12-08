import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { serviceAreas } from '../../data/serviceAreas';

// Get array of area names for display
const areaNames = Object.values(serviceAreas).map(area => area.name);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Gutter Installation & Repair Services",
  "provider": {
    "@type": "Organization",
    "name": "52roofer.com",
    "image": "https://www.52roofer.com/images/logo.png"
  },
  "areaServed": Object.values(serviceAreas).map(area => ({
    "@type": "State",
    "name": area.name
  })),
  "description": "Professional gutter installation, repair, and maintenance services for residential and commercial properties.",
  "serviceType": "Gutter Services"
};

const GutterServicesPage = () => {
  const services = [
    {
      title: "Gutter Installation",
      description: "Professional installation of new guttering systems"
    },
    {
      title: "Gutter Repair",
      description: "Fix leaks, holes, and damaged sections"
    },
    {
      title: "Gutter Cleaning",
      description: "Remove debris and ensure proper water flow"
    },
    {
      title: "Downpipe Installation",
      description: "Expert installation of downpipes and drainage"
    }
  ];

  return (
    <>
      <Head>
        <title>Gutter Installation & Repair Services | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Professional gutter installation and repair services across ${areaNames.join(', ')}. Expert solutions for all your guttering needs.`}
        />
        <meta 
          name="keywords" 
          content="gutter installation, gutter repair, gutter cleaning, downpipe installation, guttering services" 
        />
        <link rel="canonical" href="https://www.52roofer.com/services/gutter-services" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Gutter Installation & Repair Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional guttering solutions across {areaNames.join(', ')}. Keep your property protected with expert gutter services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Gutter Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-xl font-semibold mb-2">Quality Materials</div>
              <p className="text-gray-600">We use durable, high-quality guttering materials</p>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold mb-2">Expert Installation</div>
              <p className="text-gray-600">Professional fitting by experienced technicians</p>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold mb-2">Guaranteed Work</div>
              <p className="text-gray-600">All our gutter installations are fully guaranteed</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Your Gutters Fixed Today</h2>
          <p className="text-gray-600 mb-6">
            Don't let faulty gutters damage your property. Our expert team is ready to help with all your guttering needs.
          </p>
          <Link
            href="/find-roofer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent/90"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
};

export default GutterServicesPage;
