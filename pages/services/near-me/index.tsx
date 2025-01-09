import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import React from 'react';

const ServicesNearMe = () => {
    return (
    <Layout>
      <Layout>
<LocalBusinessSchema />
<SEO title="" description="" />
        <div>
            <h1>Roofing Services Near You</h1>
            <p>We provide top-notch roofing services in your area. Our team of experts is ready to assist you with any roofing needs you might have.</p>
            <h2>How to Find Us</h2>
            <p>Visit our website or call us to find out more about our services available near you.</p>
        </div>
    );
};

export default ServicesNearMe;
