import { GetStaticProps } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

// Services that should have location-specific pages
const locationSpecificServices = [
  {
    slug: 'roofing-companies-near-me',
    title: 'Local Roofing Companies',
    description: 'Connect with trusted local roofing companies in your area.',
    icon: '📍'
  },
  {
    slug: 'roofing-firms-near-me',
    title: 'Professional Roofing Firms',
    description: 'Expert roofing firms delivering quality and reliability.',
    icon: '🏛️'
  },
  {
    slug: 'roofing-contractors',
    title: 'Roofing Contractors',
    description: 'Licensed and certified roofing contractors for your project.',
    icon: '👷'
  },
  {
    slug: 'roof-replacement',
    title: 'Roof Replacement',
    description: 'Complete roof replacement services with quality materials.',
    icon: '🔄'
  },
  {
    slug: 'apex-roofing',
    title: 'Apex Roofing',
    description: 'Specialized solutions for apex and pitched roof designs.',
    icon: '🏔️'
  },
  {
    slug: 'advanced-roofing',
    title: 'Advanced Roofing',
    description: 'Cutting-edge roofing technology and innovative solutions.',
    icon: '🚀'
  },
  {
    slug: 'roofing-construction',
    title: 'Roofing Construction',
    description: 'Comprehensive roofing construction and project management.',
    icon: '🏗️'
  }
];

// General services without location pages
const generalServices = [
  {
    slug: 'residential-roofing',
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for homes and residential properties.',
    icon: '🏠'
  },
  {
    slug: 'commercial-roofing',
    title: 'Commercial Roofing',
    description: 'Professional roofing services for businesses and commercial buildings.',
    icon: '🏢'
  },
  {
    slug: 'roof-installation',
    title: 'Roof Installation',
    description: 'Expert installation of new roofs with quality materials.',
    icon: '🔨'
  },
  {
    slug: 'roof-maintenance',
    title: 'Roof Maintenance',
    description: 'Regular maintenance to keep your roof in optimal condition.',
    icon: '🔧'
  },
  {
    slug: 'emergency-roof-repair',
    title: 'Emergency Roof Repair',
    description: '24/7 emergency roofing services for urgent repairs.',
    icon: '🚨'
  },
  {
    slug: 'roof-inspection',
    title: 'Roof Inspection',
    description: 'Thorough roof inspections and condition assessments.',
    icon: '🔍'
  },
  {
    slug: 'gutter-service',
    title: 'Gutter Services',
    description: 'Installation, repair, and maintenance of guttering systems.',
    icon: '🌧️'
  },
  {
    slug: 'skylight-installation',
    title: 'Skylight Installation',
    description: 'Professional skylight installation and maintenance.',
    icon: '☀️'
  },
  {
    slug: 'roof-ventilation',
    title: 'Roof Ventilation',
    description: 'Expert roof ventilation solutions for optimal airflow.',
    icon: '💨'
  }
];

export default function ServicesPage() {
  return (
    <>
      <NextSeo
        title="Professional Roofing Services | 52 Roofer"
        description="Comprehensive roofing services including residential, commercial, repairs, and maintenance. Expert solutions tailored to your needs."
        canonical="https://52roofer.com/services"
      />

      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              Our Roofing Services
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-3xl">
              Professional roofing solutions for all your needs. From repairs to complete installations,
              we deliver quality workmanship and reliable service.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* General Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">General Roofing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {generalServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Location-Specific Services */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Local Roofing Services</h2>
            <p className="text-lg text-gray-600 mb-8">
              Find specialized roofing services in your area. Select a service to view locations near you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locationSpecificServices.map((service) => (
                <div
                  key={service.slug}
                  className="block p-6 bg-white rounded-lg border border-gray-200"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="/locations"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Find in your area →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Need expert roofing help?</span>
              <span className="block text-blue-600">Get in touch for a free quote.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  };
};
