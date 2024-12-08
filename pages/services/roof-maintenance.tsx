import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const RoofMaintenance = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Roof Maintenance Services",
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": Object.values(serviceAreas).map(area => ({
      "@type": "State",
      "name": area.name
    })),
    "description": "Professional roof maintenance services including inspections, cleaning, and preventive maintenance across the UK."
  };

  return (
    <ServiceLayout>
      <Head>
        <title>Roof Maintenance Services | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Professional roof maintenance services across ${areaNames.join(', ')}. Regular inspections and maintenance to extend your roof's lifespan.`}
        />
        <link rel="canonical" href="https://www.52roofer.com/services/roof-maintenance" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="prose max-w-none">
        <h1>Roof Maintenance Services</h1>
        
        <p className="lead">
          Regular roof maintenance is essential for protecting your property and extending your roof's lifespan. 
          Our comprehensive maintenance services help prevent costly repairs and ensure your roof remains in optimal condition.
        </p>

        <h2>Our Maintenance Services Include:</h2>
        <ul>
          <li>Regular Roof Inspections</li>
          <li>Gutter Cleaning and Maintenance</li>
          <li>Moss and Algae Removal</li>
          <li>Minor Repairs and Fixes</li>
          <li>Preventive Maintenance</li>
          <li>Weather Damage Assessment</li>
          <li>Roof Coating and Protection</li>
          <li>Ventilation System Checks</li>
        </ul>

        <h2>Benefits of Regular Roof Maintenance</h2>
        <ul>
          <li>Extended Roof Lifespan</li>
          <li>Prevention of Major Issues</li>
          <li>Cost Savings Over Time</li>
          <li>Improved Energy Efficiency</li>
          <li>Better Weather Protection</li>
          <li>Maintained Property Value</li>
          <li>Peace of Mind</li>
        </ul>

        <h2>Our Maintenance Process</h2>
        <ol>
          <li><strong>Thorough Inspection:</strong> Comprehensive check of all roof components</li>
          <li><strong>Documentation:</strong> Detailed report of findings and recommendations</li>
          <li><strong>Preventive Work:</strong> Address minor issues before they become major problems</li>
          <li><strong>Cleaning:</strong> Remove debris, moss, and other harmful materials</li>
          <li><strong>Maintenance:</strong> Perform necessary upkeep and minor repairs</li>
          <li><strong>Follow-up:</strong> Schedule regular maintenance visits</li>
        </ol>

        <h2>Maintenance Plans</h2>
        <p>
          We offer customized maintenance plans to suit your specific needs and budget. 
          Whether you need quarterly, bi-annual, or annual inspections, we'll create a 
          plan that ensures your roof stays in excellent condition year-round.
        </p>

        <div className="call-to-action">
          <h2>Start Your Maintenance Plan Today</h2>
          <p>
            Don't wait for problems to develop. Contact us now to schedule a roof inspection 
            and discuss our maintenance plans. Protect your investment with professional 
            roof maintenance services.
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default RoofMaintenance;
