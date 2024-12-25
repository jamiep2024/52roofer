import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import LeadForm from '../../components/forms/LeadForm';

interface ServiceInfo {
  title: string;
  description: string;
  icon: string;
}

const services: { [key: string]: ServiceInfo } = {
  'residential-roofing': {
    title: 'Residential Roofing',
    description: 'Complete roofing services for homes and residential properties.',
    icon: '🏠'
  },
  'commercial-roofing': {
    title: 'Commercial Roofing',
    description: 'Professional roofing solutions for businesses and commercial properties.',
    icon: '🏢'
  },
  'roof-installation': {
    title: 'Roof Installation',
    description: 'Expert roof installation services with quality materials.',
    icon: '🏗️'
  },
  'roof-maintenance': {
    title: 'Roof Maintenance',
    description: 'Regular maintenance and inspections to extend your roof\'s lifespan.',
    icon: '🔧'
  },
  'emergency-roof-repairs': {
    title: 'Emergency Roof Repairs',
    description: '24/7 emergency roofing services for urgent repairs and storm damage.',
    icon: '🚨'
  },
  'roof-inspection': {
    title: 'Roof Inspection',
    description: 'Thorough roof inspections to identify and prevent potential issues.',
    icon: '🔍'
  },
  'gutter-services': {
    title: 'Gutter Services',
    description: 'Professional gutter installation, repair, and maintenance services.',
    icon: '🏗️'
  },
  'skylight-installation': {
    title: 'Skylight Installation',
    description: 'Professional skylight installation and maintenance services.',
    icon: '☀️'
  },
  'roof-ventilation': {
    title: 'Roof Ventilation',
    description: 'Expert ventilation solutions for optimal roof performance.',
    icon: '💨'
  },
  'voice-roof-repairs': {
    title: 'Voice Roof Repairs',
    description: 'Specialized roof repair services.',
    icon: '🔧'
  },
  'voice-roof-installation': {
    title: 'Voice Roof Installation',
    description: 'Expert roof installation services.',
    icon: '🏗️'
  },
  'voice-roofing-services': {
    title: 'Voice Roofing Services',
    description: 'Comprehensive roofing solutions.',
    icon: '🏠'
  },
  'emergency-roof-repairs-new': {
    title: 'Emergency Roof Repairs',
    description: 'Urgent roof repair services available 24/7.',
    icon: '🚨'
  }
};

interface ServicePageProps {
  service: string;
  serviceInfo: ServiceInfo;
}

interface Params extends ParsedUrlQuery {
  service: string;
}

export default function ServicePage({ service, serviceInfo }: ServicePageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceInfo.title,
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "description": serviceInfo.description
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO */}
      <Head>
        <title>{`${serviceInfo.title} | Professional Roofing Services`}</title>
        <meta 
          name="description" 
          content={serviceInfo.description}
        />
        <link rel="canonical" href={`https://www.52roofer.com/services/${service}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      {/* Hero Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {serviceInfo.title}
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            {serviceInfo.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg mx-auto">
          <div className="text-center text-6xl mb-8">
            {serviceInfo.icon}
          </div>

          <h2>Professional {serviceInfo.title} Services</h2>
          <p>
            Looking for professional {serviceInfo.title.toLowerCase()} services? 
            Our expert team provides comprehensive roofing solutions tailored to your needs. 
            With years of experience, we deliver quality workmanship and reliable service.
          </p>

          <h3>Why Choose Our Services?</h3>
          <ul>
            <li>Experienced and qualified professionals</li>
            <li>Fully licensed and insured</li>
            <li>Free detailed quotes</li>
            <li>Quality workmanship guarantee</li>
            <li>Emergency response available</li>
            <li>Competitive pricing</li>
          </ul>

          <h3>Our Services Include</h3>
          <ul>
            <li>Free initial consultation</li>
            <li>Detailed inspections</li>
            <li>Written estimates</li>
            <li>Quality materials</li>
            <li>Professional installation</li>
            <li>Ongoing support</li>
          </ul>
        </div>
      </div>

      {/* Quote Form Section */}
      <div id="quote-form" className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Get Your Free Quote
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="mt-12">
            <LeadForm source={serviceInfo.title} />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-accent">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Need emergency roofing help?</span>
            <span className="block text-white">Our team is available 24/7.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="tel:08001234567"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-accent bg-white hover:bg-gray-50"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(services).map(service => ({
    params: { service }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<ServicePageProps, Params> = async ({ params }) => {
  if (!params?.service || !services[params.service]) {
    return { notFound: true };
  }

  return {
    props: {
      service: params.service,
      serviceInfo: services[params.service]
    }
  };
};
