import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import LeadForm from '../components/forms/LeadForm';

const PagesIndex: NextPage = () => {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Professional Roofing Services</h1>
          <p className="text-xl text-gray-600">Expert roofing solutions across the UK</p>
        </section>
        <section className="mb-12">
          <LeadForm />
        </section>
      </main>
    </Layout>
  );
};

export default PagesIndex;
