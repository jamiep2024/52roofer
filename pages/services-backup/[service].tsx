import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import ServiceLayout from '../../components/ServiceLayout';

interface ServicePageProps {
  service: string;
    </Layout>

  );
}

const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
  const title = service.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <Layout>
      <ServiceLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <div className="prose max-w-none">
          {/* Dynamic content based on service */}
        </div>
      </div>
    </ServiceLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Get list of all service pages
  const services = [
    'roof-repair',
    'roof-installation',
    'roof-maintenance',
    'emergency-roofing',
    'roof-inspection',
    'commercial-roofing',
    'residential-roofing',
    // Add other services
  ];

  const paths = services.map(service => ({
    params: { service }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      service: params?.service || ''
    }
  };
};

export default ServicePage;
