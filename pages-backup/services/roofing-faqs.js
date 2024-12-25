import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import React from 'react';

const RoofingFAQs = () => {
    return (
    <Layout>
      <Layout>
<LocalBusinessSchema />
<SEO title="" description="" />
        <div>
            <h1>Roofing FAQs</h1>
            <h2>Frequently Asked Questions</h2>
            <ul>
                <li><strong>What types of roofing materials do you use?</strong>
                    <p>We use a variety of materials including asphalt shingles, metal roofing, and tile.</p>
                </li>
                <li><strong>How long does a roof installation take?</strong>
                    <p>Typically, a roof installation can take anywhere from a few days to a week, depending on the size and complexity.</p>
                </li>
                <li><strong>Do you offer warranties on your services?</strong>
                    <p>Yes, we provide warranties on both materials and workmanship.</p>
                </li>
            </ul>
        </div>
    );
};

export default RoofingFAQs;
