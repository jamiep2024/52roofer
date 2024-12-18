import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { serviceAreas } from '../../../data/serviceAreas';
import LeadForm from '../../../components/forms/LeadForm';

interface ServiceInfo {
  title: string;
  description: string;
  icon: string;
}

type Services = {
  [key: string]: ServiceInfo;
}

const services: Services = {
  'roofing-companies-near-me': {
    title: 'Local Roofing Companies',
    description: 'Connect with trusted local roofing companies in your area.',
    icon: '📍'
  },
  'roofing-firms-near-me': {
    title: 'Professional Roofing Firms',
    description: 'Expert roofing firms delivering quality and reliability.',
    icon: '🏛️'
  },
  'roofing-contractors': {
    title: 'Roofing Contractors',
    description: 'Licensed and certified roofing contractors for your project.',
    icon: '👷'
  },
  'roof-replacement': {
    title: 'Roof Replacement',
    description: 'Complete roof replacement services with quality materials.',
    icon: '🔄'
  },
  'apex-roofing': {
    title: 'Apex Roofing',
    description: 'Specialized solutions for apex and pitched roof designs.',
    icon: '🏔️'
  },
  'advanced-roofing': {
    title: 'Advanced Roofing',
    description: 'Cutting-edge roofing technology and innovative solutions.',
    icon: '🚀'
  },
  'roofing-construction': {
    title: 'Roofing Construction',
    description: 'Comprehensive roofing construction and project management.',
    icon: '🏗️'
  }
};

interface ServicePageProps {
  service: string;
  location: string;
  county: string;
  serviceInfo: ServiceInfo;
}

interface Params extends ParsedUrlQuery {
  service: string;
  location: string;
}

export default function ServicePage({ service, location, county, serviceInfo }: ServicePageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceInfo.title} in ${location}`,
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": {
      "@type": "City",
      "name": location,
      "containedIn": {
        "@type": "AdministrativeArea",
        "name": county
      }
    },
    "description": `Professional ${serviceInfo.title.toLowerCase()} services in ${location}, ${county}. Expert local roofers providing quality solutions.`
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO */}
      <Head>
        <title>{`${serviceInfo.title} in ${location} | Professional Roofing Services`}</title>
        <meta 
          name="description" 
          content={`Professional ${serviceInfo.title.toLowerCase()} services in ${location}, ${county}. Expert local roofers providing quality solutions.`}
        />
        <link rel="canonical" href={`https://www.52roofer.com/services/${service}/${location.toLowerCase().replace(/ /g, '-')}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      {/* Hero Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {serviceInfo.title} in {location}
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            Professional roofing solutions for homeowners and businesses in {location}, {county}.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg mx-auto">
          <div className="text-center text-6xl mb-8">
            {serviceInfo.icon}
          </div>

          <h2>Expert {serviceInfo.title} in {location}</h2>
          <p>
            Looking for professional {serviceInfo.title.toLowerCase()} services in {location}? 
            Our expert team provides comprehensive roofing solutions tailored to your needs. 
            With years of experience serving {county}, we deliver quality workmanship and reliable service.
          </p>

          <h3>Why Choose Our {serviceInfo.title}?</h3>
          <ul>
            <li>Local expertise in {location} and {county}</li>
            <li>Fully licensed and insured professionals</li>
            <li>Free detailed quotes</li>
            <li>Quality workmanship guarantee</li>
            <li>Emergency response available</li>
            <li>Competitive pricing</li>
          </ul>

          <h3>Our Services in {location}</h3>
          <ul>
            <li>Complete roof installations</li>
            <li>Roof repairs and maintenance</li>
            <li>Emergency roofing services</li>
            <li>Roof inspections and surveys</li>
            <li>Gutter services</li>
            <li>Chimney repairs</li>
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
              Fill out the form below and our {location} team will get back to you within 24 hours.
            </p>
          </div>

          <div className="mt-12">
            <LeadForm source={`${serviceInfo.title} - ${location}`} />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-accent">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Need emergency roofing help?</span>
            <span className="block text-white">Our {location} team is available 24/7.</span>
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

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = Object.keys(services).flatMap(service =>
    Object.values(serviceAreas).flatMap(area =>
      area.mainTowns.map(town => ({
        params: {
          service,
          location: town.toLowerCase().replace(/ /g, '-')
        }
      }))
    )
  );

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<ServicePageProps, Params> = async ({ params }) => {
  if (!params) {
    return { notFound: true };
  }

  const { service, location: locationSlug } = params;
  
  // Find the location and county
  let foundLocation = '';
  let foundCounty = '';
  
  Object.entries(serviceAreas).forEach(([_, area]) => {
    area.mainTowns.forEach(town => {
      if (town.toLowerCase().replace(/ /g, '-') === locationSlug) {
        foundLocation = town;
        foundCounty = area.name;
      }
    });
  });

  if (!foundLocation || !services[service]) {
    return { notFound: true };
  }

  return {
    props: {
      service,
      location: foundLocation,
      county: foundCounty,
      serviceInfo: services[service]
    }
  };
};
