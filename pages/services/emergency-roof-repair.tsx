import React from 'react';
import Head from 'next/head';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const EmergencyRoofRepairs = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Emergency Roof Repairs",
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": Object.values(serviceAreas).map(area => ({
      "@type": "State",
      "name": area.name
    })),
    "description": "24/7 emergency roofing repair services for urgent repairs and storm damage across the UK."
  };

  return (
    <ServiceLayout>
      <Head>
        <title>Emergency Roof Repairs | 24/7 Service | 52roofer.com</title>
        <meta 
          name="description" 
          content={`24/7 emergency roof repair services across ${areaNames.join(', ')}. Fast response for storm damage and urgent repairs.`}
        />
        <link rel="canonical" href="https://www.52roofer.com/services/emergency-roof-repairs" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="prose max-w-none">
        <h1>Emergency Roof Repairs</h1>
        
        <p className="lead">
          24/7 emergency roofing services across {areaNames.join(', ')}. 
          When disaster strikes, we're here to protect your property with rapid response repairs.
        </p>

        <h2>Our Emergency Repair Services Include:</h2>
        <ul>
          <li>Storm Damage Repairs</li>
          <li>Leak Detection and Repair</li>
          <li>Temporary Roof Protection</li>
          <li>Fallen Tree Removal</li>
          <li>Wind Damage Repair</li>
          <li>Emergency Tarp Services</li>
          <li>Rapid Response Teams</li>
          <li>24/7 Support</li>
        </ul>

        <h2>Why Choose Our Emergency Service?</h2>
        <ul>
          <li>24/7 Availability</li>
          <li>Rapid Response Times</li>
          <li>Experienced Emergency Teams</li>
          <li>Full Insurance Coverage</li>
          <li>Temporary and Permanent Solutions</li>
          <li>Emergency Assessment</li>
          <li>Insurance Claim Assistance</li>
        </ul>

        <h2>Our Emergency Process</h2>
        <ol>
          <li><strong>Immediate Response:</strong> Call our 24/7 emergency line</li>
          <li><strong>Quick Assessment:</strong> Rapid evaluation of the damage</li>
          <li><strong>Emergency Action:</strong> Immediate measures to prevent further damage</li>
          <li><strong>Temporary Repairs:</strong> If needed, to protect your property</li>
          <li><strong>Permanent Solution:</strong> Complete repairs once weather permits</li>
          <li><strong>Documentation:</strong> Full documentation for insurance claims</li>
        </ol>

        <div className="call-to-action">
          <h2>Need Emergency Roof Repairs?</h2>
          <p>
            Don't wait - contact us immediately for emergency roof repairs. Our expert team 
            is available 24/7 to protect your property from further damage.
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default EmergencyRoofRepairs;
