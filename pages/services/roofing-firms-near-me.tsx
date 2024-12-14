import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const RoofingFirmsNearMe = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Roofing Firms",
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": Object.values(serviceAreas).map(area => ({
      "@type": "State",
      "name": area.name
    })),
    "description": "Connect with established roofing firms in your area. Professional roofing solutions with proven expertise."
  };

  const services = [
    {
      title: "Professional Teams",
      description: "Experienced roofing crews with extensive training",
      icon: "👥"
    },
    {
      title: "Complete Solutions",
      description: "Full-service roofing solutions for all projects",
      icon: "🏗️"
    },
    {
      title: "Quality Materials",
      description: "Access to premium roofing materials and supplies",
      icon: "🏢"
    },
    {
      title: "Project Management",
      description: "Dedicated project managers for your roofing work",
      icon: "📋"
    }
  ];

  const benefits = [
    {
      title: "Established Firms",
      description: "Work with experienced, well-established roofing businesses",
      icon: "🏪"
    },
    {
      title: "Professional Teams",
      description: "Skilled workforce with proper training and certification",
      icon: "👷"
    },
    {
      title: "Quality Guarantee",
      description: "Backed by company warranties and guarantees",
      icon: "✔️"
    }
  ];

  return (
    <ServiceLayout
      heroImage="/images/services/roofing-firms-hero.jpg"
      heroTitle="Professional Roofing Firms Near You"
      heroDescription="Connect with established roofing firms for quality roofing solutions"
      serviceName="Professional Roofing Firms"
    >
      <Head>
        <title>Find Professional Roofing Firms Near Me | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Connect with professional roofing firms across ${areaNames.join(', ')}. Established companies offering comprehensive roofing services.`}
        />
        <link rel="canonical" href="https://www.52roofer.com/services/roofing-firms-near-me" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="space-y-12">
        {/* Introduction */}
        <div>
          <p className="lead text-xl text-gray-600">
            Connect with established roofing firms across {areaNames.join(', ')}. 
            We partner with professional companies that have the expertise and resources to handle any roofing project.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Professional Roofing Firms</h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Working Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">1</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Project Assessment</h3>
                <p className="text-gray-600">Detailed evaluation of your roofing needs</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Proposal Development</h3>
                <p className="text-gray-600">Comprehensive project proposal and quote</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Professional Execution</h3>
                <p className="text-gray-600">Expert implementation by skilled teams</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Quality Assurance</h3>
                <p className="text-gray-600">Thorough inspection and project completion</p>
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
                <h3 className="font-semibold mb-1">Business Credentials</h3>
                <p className="text-gray-600">Properly licensed and insured firms</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Professional Standards</h3>
                <p className="text-gray-600">Adherence to industry best practices</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Quality Control</h3>
                <p className="text-gray-600">Rigorous quality assurance processes</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Customer Service</h3>
                <p className="text-gray-600">Dedicated support throughout projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default RoofingFirmsNearMe;
