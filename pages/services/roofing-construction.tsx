import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const RoofingConstruction = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roofing Construction Services",
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": Object.values(serviceAreas).map(area => ({
      "@type": "State",
      "name": area.name
    })),
    "description": "Complete roofing construction services including new builds, structural work, and major renovations. Professional construction solutions for all roofing projects."
  };

  const services = [
    {
      title: "New Construction",
      description: "Complete new roof construction services",
      icon: "🏗️"
    },
    {
      title: "Structural Work",
      description: "Expert structural roofing solutions",
      icon: "🏢"
    },
    {
      title: "Major Renovations",
      description: "Comprehensive roof renovation projects",
      icon: "🔨"
    },
    {
      title: "Project Management",
      description: "Full project oversight and coordination",
      icon: "📋"
    }
  ];

  const benefits = [
    {
      title: "Quality Build",
      description: "Superior construction standards",
      icon: "🏆"
    },
    {
      title: "Expert Teams",
      description: "Skilled construction professionals",
      icon: "👷"
    },
    {
      title: "Project Control",
      description: "Strict timeline and budget management",
      icon: "⏱️"
    }
  ];

  return (
    <ServiceLayout
      heroImage="/images/services/construction-hero.jpg"
      heroTitle="Professional Roofing Construction"
      heroDescription="Expert roofing construction services for all project types"
      serviceName="Roofing Construction"
    >
      <Head>
        <title>Professional Roofing Construction Services | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Expert roofing construction services across ${areaNames.join(', ')}. Complete construction solutions for all roofing projects.`}
        />
        <link rel="canonical" href="https://www.52roofer.com/services/roofing-construction" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="space-y-12">
        {/* Introduction */}
        <div>
          <p className="lead text-xl text-gray-600">
            Professional roofing construction services across {areaNames.join(', ')}. 
            We provide comprehensive construction solutions for all types of roofing projects, from new builds to major renovations.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Construction Excellence</h2>
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

        {/* Construction Services */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Construction Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">New Construction</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Custom Roof Design</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Structural Engineering</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Complete Installation</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Renovation Projects</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Major Renovations</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Structural Repairs</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>System Upgrades</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Construction Process */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Construction Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">1</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Project Planning</h3>
                <p className="text-gray-600">Detailed planning and design phase</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Site Preparation</h3>
                <p className="text-gray-600">Preparing the construction site</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Construction Phase</h3>
                <p className="text-gray-600">Professional construction execution</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Quality Control</h3>
                <p className="text-gray-600">Rigorous quality assurance checks</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center">5</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Project Completion</h3>
                <p className="text-gray-600">Final inspection and handover</p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Standards */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Construction Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Safety Protocols</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Strict Safety Guidelines</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Regular Safety Audits</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Certified Equipment</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quality Standards</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Building Regulations Compliance</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Industry Best Practices</span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">✓</span>
                  <span>Material Standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default RoofingConstruction;
