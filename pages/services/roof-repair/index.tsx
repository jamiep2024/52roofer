import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import React from 'react';

const RoofRepair = () => {
    return (
    <Layout>
      <Layout>
<LocalBusinessSchema />
<SEO title="" description="" />
        <div>
            <h1>Roof Repair Services</h1>
            <p>Our roof repair services address all types of damage, from leaks to storm damage. We provide quick and efficient repairs to ensure your roof is safe and secure.</p>
            <h2>Types of Repairs</h2>
            <ul>
                <li>Leak Repairs</li>
                <li>Shingle Replacement</li>
                <li>Storm Damage Repair</li>
            </ul>
            <h2>Contact Us</h2>
            <p>Call us at [Your Phone Number] for a free estimate.</p>
        </div>
    );
};

export default RoofRepair;
