import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const RoofingCompaniesNearMe = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Local Roofing Companies",
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": Object.values(serviceAreas).map(area => ({
      "@type": "State",
      "name": area.name
    })),
    "description": "Find trusted local roofing companies in your area. Professional roofing services with quality workmanship guaranteed."
  };

  const services = [
    {
      title: "Local Expertise",
      description: "Roofing companies that understand your area's specific needs",
      icon: "📍"
    },
    {
      title: "Quick Response",
      description: "Fast service from nearby roofing professionals",
      icon: "⚡"
    },
    {
      title: "Comprehensive Services",
      description: "Full range of roofing solutions for your property",
      icon: "🏠"
    },
    {
      title: "Quality Assurance",
      description: "Vetted local companies with proven track records",
      icon: "✅"
    }
  ];

  const benefits = [
    {
      title: "Local Knowledge",
      description: "Understanding of local weather conditions and building regulations",
      icon: "🎯"
    },
    {
      title: "Quick Service",
      description: "Faster response times due to proximity",
      icon: "⏱️"
    },
    {
      title: "Community Trust",
      description: "Established reputation in your local area",
      icon: "🤝"
    }
  ];

  return (
    <ServiceLayout
      heroImage="/images/services/local-roofing-hero.jpg"
      heroTitle="Find Roofing Companies Near You"
      heroDescription="Connect with trusted local roofing professionals in your area"
      serviceName="Local Roofing Companies"
    >
      <Head>
        <title>Find Roofing Companies Near Me | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Discover trusted local roofing companies across ${areaNames.join(', ')}. Professional roofing services with quality workmanship guaranteed.`}
        />
        <link rel="canonical" href="https://www.52roofer.com/services/roofing-companies-near-me" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="space-y-12">
        {/* Introduction */}
        <div>
          <p className="lead text-xl text-gray-600">
            Find reliable roofing companies in your local area across {areaNames.join(', ')}. 
            We connect you with trusted professionals who understand your specific roofing needs.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Local Roofing Companies</h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">1</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Initial Contact</h3>
                <p className="text-gray-600">Share your roofing requirements with us</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Local Match</h3>
                <p className="text-gray-600">We connect you with trusted local companies</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Free Quotes</h3>
                <p className="text-gray-600">Receive detailed quotes from local professionals</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Quality Service</h3>
                <p className="text-gray-600">Get your roofing work done by trusted experts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Licensed & Insured</h3>
                <p className="text-gray-600">All companies are fully licensed and insured</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Quality Materials</h3>
                <p className="text-gray-600">Use of premium roofing materials</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Expert Teams</h3>
                <p className="text-gray-600">Skilled and experienced roofing crews</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Satisfaction Guarantee</h3>
                <p className="text-gray-600">Commitment to customer satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default RoofingCompaniesNearMe;
