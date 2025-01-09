import React from 'react';
import Layout from '../../../components/layout/Layout';
import ServiceLayout from '../../../components/ServiceLayout';
import { serviceAreas } from '../../../data/serviceAreas';

const RoofInspectionPage = () => {
  const areas = Object.values(serviceAreas).map(area => area.name);

  return (
    <Layout>
      <ServiceLayout
        heroImage="/images/roof-inspection-hero.jpg"
        heroTitle="Professional Roof Inspections"
        heroDescription="Comprehensive roof inspections to identify potential issues before they become major problems."
        service="Roof Inspection"
        serviceAreas={areas}
        reviews={[]}
        faqs={[]}
      >
        <div className="prose max-w-none">
          <h2>Why Choose Our Roof Inspection Services?</h2>
          <p>
            Our certified roof inspectors provide thorough assessments of your roof's condition,
            identifying potential issues and recommending appropriate solutions.
          </p>

          <h3>Our Inspection Process</h3>
          <ul>
            <li>Exterior roof surface examination</li>
            <li>Interior attic space inspection</li>
            <li>Structural integrity assessment</li>
            <li>Drainage system evaluation</li>
            <li>Detailed report with recommendations</li>
          </ul>

          <h3>Benefits of Regular Roof Inspections</h3>
          <ul>
            <li>Early detection of potential problems</li>
            <li>Extended roof lifespan</li>
            <li>Prevention of costly repairs</li>
            <li>Maintained property value</li>
            <li>Peace of mind</li>
          </ul>
        </div>
      </ServiceLayout>
    </Layout>
  );
};

export default RoofInspectionPage;
