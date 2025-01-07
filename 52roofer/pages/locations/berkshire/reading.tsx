import React from 'react';
import { NextPage } from 'next';
import Layout from '../../../components/layout/Layout';
import Hero from '../../../components/Hero';
import ServiceAreas from '../../../components/ServiceAreas';
import Reviews from '../../../components/Reviews';
import ContactForm from '../../../components/forms/ContactForm';

const ReadingPage: NextPage = () => {
  return (
    <Layout>
      <Hero 
        heroImage="/images/roofing-hero.jpg"
        title="Roofing Services in Reading"
        description="Professional roofing services in Reading and surrounding areas. We specialize in roof repairs, installations, and maintenance."
      />
      
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Our Services in Reading</h2>
        <p className="mb-4">
          We provide comprehensive roofing services throughout Reading, including:
        </p>
        <ul className="list-disc list-inside mb-8">
          <li>Roof repairs and maintenance</li>
          <li>New roof installations</li>
          <li>Flat roofing solutions</li>
          <li>Emergency roof repairs</li>
          <li>Gutter cleaning and repairs</li>
        </ul>

        <ServiceAreas areas={['Reading', 'Caversham', 'Tilehurst', 'Earley']} />
      </section>

      <Reviews location="Reading" />
      
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Get a Free Quote</h2>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default ReadingPage;
