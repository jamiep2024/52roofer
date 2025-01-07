import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Gutter Installation & Repair Services",
  "provider": {
    "@type": "Organization",
    "name": "52roofer.com"
  },
  "areaServed": Object.values(serviceAreas).map(area => ({
    "@type": "State",
    "name": area.name
  })),
  "description": "Professional gutter installation, repair, and maintenance services for residential and commercial properties."
};

const GutterServicesPage = () => {
  const services = [
    {
      title: "Gutter Installation",
      description: "Professional installation of new guttering systems",
      icon: "🏗️"
    },
    {
      title: "Gutter Repair",
      description: "Fix leaks, holes, and damaged sections",
      icon: "🔧"
    },
    {
      title: "Gutter Cleaning",
      description: "Remove debris and ensure proper water flow",
      icon: "🧹"
    },
    {
      title: "Downpipe Installation",
      description: "Expert installation of downpipes and drainage",
      icon: "📥"
    }
  ];

  return (
    <ServiceLayout
      heroImage="/images/services/gutters-hero.jpg"
      heroTitle="Gutter Installation & Repair Services"
      heroDescription="Professional guttering solutions to protect your property from water damage"
    >
      <Head>
        <title>Gutter Installation & Repair Services | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Professional gutter installation and repair services across ${areaNames.join(', ')}. Expert solutions for all your guttering needs.`}
        />
        <link rel="canonical" href="https://www.52roofer.com/services/gutter-service" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </Head>

      <div className="space-y-12">
        {/* Introduction */}
        <div>
          <p className="lead text-xl text-gray-600">
            Expert guttering solutions across {areaNames.join(', ')}. 
            We provide comprehensive gutter services to protect your property from water damage.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Gutter Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <div className="text-xl font-semibold mb-2">Quality Materials</div>
              <p className="text-gray-600">We use durable, high-quality guttering materials built to last</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍🔧</div>
              <div className="text-xl font-semibold mb-2">Expert Installation</div>
              <p className="text-gray-600">Professional fitting by experienced technicians</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <div className="text-xl font-semibold mb-2">Guaranteed Work</div>
              <p className="text-gray-600">All our gutter installations come with a comprehensive guarantee</p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Installation Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">1</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Initial Assessment</h3>
                <p className="text-gray-600">We thoroughly assess your property's guttering needs</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Detailed Quote</h3>
                <p className="text-gray-600">Receive a comprehensive quote with no hidden costs</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Professional Installation</h3>
                <p className="text-gray-600">Expert installation using high-quality materials</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Quality Check</h3>
                <p className="text-gray-600">Final inspection to ensure everything meets our high standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default GutterServicesPage;
