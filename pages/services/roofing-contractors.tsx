import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const RoofingContractors = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Roofing Contractors",
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": Object.values(serviceAreas).map(area => ({
      "@type": "State",
      "name": area.name
    })),
    "description": "Expert roofing contractors providing professional installation, repair, and maintenance services. Licensed and insured specialists for all roofing needs."
  };

  const services = [
    {
      title: "Licensed Experts",
      description: "Fully licensed and certified roofing professionals",
      icon: "📋"
    },
    {
      title: "Custom Solutions",
      description: "Tailored roofing solutions for every project",
      icon: "🏗️"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control and warranties",
      icon: "✅"
    },
    {
      title: "Project Management",
      description: "End-to-end project oversight and coordination",
      icon: "📊"
    }
  ];

  const benefits = [
    {
      title: "Expert Knowledge",
      description: "Specialized expertise in all roofing systems",
      icon: "🎓"
    },
    {
      title: "Professional Service",
      description: "Reliable, punctual, and efficient service",
      icon: "🤝"
    },
    {
      title: "Guaranteed Work",
      description: "Comprehensive warranties on labor and materials",
      icon: "⭐"
    }
  ];

  return (
    <ServiceLayout
      heroImage="/images/services/contractors-hero.jpg"
      heroTitle="Professional Roofing Contractors"
      heroDescription="Expert roofing contractors delivering quality workmanship and reliable service"
      serviceName="Roofing Contractors"
    >
      <Head>
        <title>Professional Roofing Contractors | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Connect with expert roofing contractors across ${areaNames.join(', ')}. Licensed professionals providing comprehensive roofing services.`}
        />
        <link rel="canonical" href="https://www.52roofer.com/services/roofing-contractors" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="space-y-12">
        {/* Introduction */}
        <div>
          <p className="lead text-xl text-gray-600">
            Find skilled roofing contractors across {areaNames.join(', ')}. 
            Our network of licensed professionals delivers expert roofing solutions with quality workmanship guaranteed.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Contractors?</h2>
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
                <h3 className="text-xl font-semibold">Initial Consultation</h3>
                <p className="text-gray-600">Detailed discussion of your roofing needs</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Site Inspection</h3>
                <p className="text-gray-600">Thorough assessment and measurements</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Detailed Proposal</h3>
                <p className="text-gray-600">Comprehensive quote and project timeline</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Expert Execution</h3>
                <p className="text-gray-600">Professional installation and quality control</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Licensed & Certified</h3>
                <p className="text-gray-600">All contractors are fully licensed and certified</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Insured Operations</h3>
                <p className="text-gray-600">Comprehensive insurance coverage for all projects</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Quality Standards</h3>
                <p className="text-gray-600">Adherence to industry best practices</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-accent text-xl">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Ongoing Training</h3>
                <p className="text-gray-600">Regular professional development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default RoofingContractors;
