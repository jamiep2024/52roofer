import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const ResidentialRoofing = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Roofing Services",
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": Object.values(serviceAreas).map(area => ({
      "@type": "State",
      "name": area.name
    })),
    "description": "Complete residential roofing services including installations, repairs, and replacements for homes across the UK."
  };

  return (
    <ServiceLayout>
      <Head>
        <title>Residential Roofing Services | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Expert residential roofing services across ${areaNames.join(', ')}. Quality workmanship guaranteed for all home roofing needs.`}
        />
        <link rel="canonical" href="https://www.52roofer.com/services/residential-roofing" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="prose max-w-none">
        <h1>Residential Roofing Services</h1>
        
        <p className="lead">
          Expert residential roofing solutions for homeowners across {areaNames.join(', ')}. 
          We provide comprehensive roofing services to protect your home and family.
        </p>

        <h2>Our Residential Roofing Services Include:</h2>
        <ul>
          <li>New Roof Installation</li>
          <li>Roof Replacement</li>
          <li>Roof Repair and Maintenance</li>
          <li>Tile and Slate Roofing</li>
          <li>Flat Roof Solutions</li>
          <li>Chimney Repairs and Maintenance</li>
          <li>Guttering and Drainage</li>
          <li>Roof Insulation</li>
        </ul>

        <h2>Why Choose Us for Your Home's Roofing Needs?</h2>
        <ul>
          <li>Experienced and Qualified Roofers</li>
          <li>Full Insurance Coverage</li>
          <li>Quality Materials and Workmanship</li>
          <li>Competitive Pricing</li>
          <li>Free Detailed Quotes</li>
          <li>Emergency Repair Service Available</li>
          <li>Long-term Guarantees</li>
        </ul>

        <h2>Our Process</h2>
        <ol>
          <li><strong>Initial Consultation:</strong> We discuss your needs and arrange a site visit</li>
          <li><strong>Inspection:</strong> Thorough assessment of your roof's condition</li>
          <li><strong>Detailed Quote:</strong> Clear pricing with no hidden costs</li>
          <li><strong>Quality Installation:</strong> Expert workmanship using premium materials</li>
          <li><strong>Final Inspection:</strong> Ensuring everything meets our high standards</li>
          <li><strong>Aftercare:</strong> Ongoing support and maintenance as needed</li>
        </ol>

        <div className="call-to-action">
          <h2>Get Started with Your Roofing Project</h2>
          <p>
            Contact us today for a free, no-obligation quote for your residential roofing needs. 
            Our expert team is ready to help protect your home with quality roofing solutions.
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ResidentialRoofing;
