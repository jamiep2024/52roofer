import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import React from 'react';

const RoofMaintenanceTips = () => {
    return (
    <Layout>
      <Layout>
<LocalBusinessSchema />
<SEO title="" description="" />
        <div>
            <h1>Roof Maintenance Tips</h1>
            <p>Proper roof maintenance can extend the life of your roof. Here are some essential tips:</p>
            <h2>Seasonal Maintenance</h2>
            <ul>
                <li>Inspect your roof for debris after storms.</li>
                <li>Clean gutters regularly to prevent water damage.</li>
                <li>Check for missing or damaged shingles.</li>
            </ul>
            <h2>Best Practices</h2>
            <p>Schedule regular inspections with a professional roofing service.</p>
        </div>
    );
};

export default RoofMaintenanceTips;
