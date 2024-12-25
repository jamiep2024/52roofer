import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
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

// Oxford neighborhoods
const oxfordNeighborhoods = [
  'blackbird-leys',
  'botley',
  'cowley',
  'headington',
  'wolvercote',
  'jericho',
  'marston',
  'rose-hill',
  'iffley',
  'summertown'
];

// Wiltshire special towns
const wiltshireSpecialTowns = [
  'warminster',
  'marlborough',
  'chippenham',
  'devizes',
  'melksham',
  'trowbridge',
  'bradford-on-avon',
  'westbury',
  'calne',
  'salisbury'
];

interface ServicePageProps {
  service: string;
  location: string;
  county: string;
  serviceInfo: ServiceInfo;
  nearbyLocations: string[];
  countyKey: string;
}

interface Params extends ParsedUrlQuery {
  service: string;
  location: string;
}

export default function ServicePage({ 
  service, 
  location, 
  county, 
  serviceInfo,
  nearbyLocations,
  countyKey
}: ServicePageProps) {
  // Format location name for display
  const displayLocation = location
    .replace('-oxford', '')
    .replace('-wiltshire', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceInfo.title} in ${displayLocation}`,
    "provider": {
      "@type": "Organization",
      "name": "52roofer.com"
    },
    "areaServed": {
      "@type": "City",
      "name": displayLocation,
      "containedIn": {
        "@type": "AdministrativeArea",
        "name": county
      }
    },
    "description": `Professional ${serviceInfo.title.toLowerCase()} services in ${displayLocation}, ${county}. Expert local roofers providing quality solutions.`
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO */}
      <Head>
        <title>{`${serviceInfo.title} in ${displayLocation} | Professional Roofing Services`}</title>
        <meta 
          name="description" 
          content={`Professional ${serviceInfo.title.toLowerCase()} services in ${displayLocation}, ${county}. Expert local roofers providing quality solutions.`}
        />
        <link rel="canonical" href={`https://www.52roofer.com/services/${service}/${location}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      {/* Hero Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {serviceInfo.title} in {displayLocation}
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            Professional roofing solutions for homeowners and businesses in {displayLocation}, {county}.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg mx-auto">
          <div className="text-center text-6xl mb-8">
            {serviceInfo.icon}
          </div>

          <h2>Expert {serviceInfo.title} in {displayLocation}</h2>
          <p>
            Looking for professional {serviceInfo.title.toLowerCase()} services in {displayLocation}? 
            Our expert team provides comprehensive roofing solutions tailored to your needs. 
            With years of experience serving {county}, we deliver quality workmanship and reliable service.
          </p>

          <h3>Why Choose Our {serviceInfo.title}?</h3>
          <ul>
            <li>Local expertise in {displayLocation} and {county}</li>
            <li>Fully licensed and insured professionals</li>
            <li>Free detailed quotes</li>
            <li>Quality workmanship guarantee</li>
            <li>Emergency response available</li>
            <li>Competitive pricing</li>
          </ul>

          <h3>Our Services in {displayLocation}</h3>
          <ul>
            <li>Complete roof installations</li>
            <li>Roof repairs and maintenance</li>
            <li>Emergency roofing services</li>
            <li>Roof inspections and surveys</li>
            <li>Gutter services</li>
            <li>Chimney repairs</li>
          </ul>

          {/* Nearby Locations */}
          <h3>Other Areas We Serve in {county}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 not-prose">
            {nearbyLocations.map(loc => {
              const isWiltshireSpecial = countyKey === 'wiltshire' && 
                wiltshireSpecialTowns.includes(loc.toLowerCase().replace(/ /g, '-'));
              
              const locationSlug = loc.toLowerCase().replace(/ /g, '-') + 
                (isWiltshireSpecial ? '-wiltshire' : '');
              
              return (
                <Link
                  key={loc}
                  href={`/services/${service}/${locationSlug}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {serviceInfo.title} in {loc}
                </Link>
              );
            })}
          </div>

          {/* Link to County Page */}
          <div className="mt-8 not-prose">
            <Link
              href={`/county/${countyKey}`}
              className="text-blue-600 hover:text-blue-800 text-xl"
            >
              View All {county} Locations
            </Link>
          </div>
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
              Fill out the form below and our {displayLocation} team will get back to you within 24 hours.
            </p>
          </div>

          <div className="mt-12">
            <LeadForm source={`${serviceInfo.title} - ${displayLocation}`} />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-accent">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Need emergency roofing help?</span>
            <span className="block text-white">Our {displayLocation} team is available 24/7.</span>
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
  const paths: { params: { service: string; location: string } }[] = [];

  // Add paths for all services
  Object.keys(services).forEach(service => {
    // Generate paths for all counties and their towns
    Object.entries(serviceAreas).forEach(([countyKey, county]) => {
      county.mainTowns.forEach(town => {
        const townSlug = town.toLowerCase().replace(/ /g, '-');
        
        // Add regular town path
        paths.push({
          params: {
            service,
            location: townSlug
          }
        });

        // Add Wiltshire special town variants
        if (countyKey === 'wiltshire' && wiltshireSpecialTowns.includes(townSlug)) {
          paths.push({
            params: {
              service,
              location: `${townSlug}-wiltshire`
            }
          });
        }
      });
    });

    // Add Oxford neighborhood paths
    oxfordNeighborhoods.forEach(neighborhood => {
      paths.push({
        params: {
          service,
          location: `${neighborhood}-oxford`
        }
      });
    });
  });

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
  
  // Check if this is an Oxford neighborhood
  const isOxfordNeighborhood = oxfordNeighborhoods.some(n => 
    locationSlug === `${n}-oxford`
  );
  
  // Check if this is a Wiltshire special town
  const isWiltshireSpecial = wiltshireSpecialTowns.some(t => 
    locationSlug === `${t}-wiltshire`
  );
  
  if (isOxfordNeighborhood) {
    // Get other Oxford neighborhoods as nearby locations
    const nearbyLocations = oxfordNeighborhoods
      .filter(n => `${n}-oxford` !== locationSlug)
      .map(n => n.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

    return {
      props: {
        service,
        location: locationSlug,
        county: 'Oxfordshire',
        serviceInfo: services[service],
        nearbyLocations,
        countyKey: 'oxfordshire'
      }
    };
  }

  if (isWiltshireSpecial) {
    // Get other Wiltshire towns as nearby locations
    const nearbyLocations = serviceAreas.wiltshire.mainTowns
      .filter(town => town.toLowerCase().replace(/ /g, '-') !== locationSlug.replace('-wiltshire', ''));

    return {
      props: {
        service,
        location: locationSlug,
        county: 'Wiltshire',
        serviceInfo: services[service],
        nearbyLocations,
        countyKey: 'wiltshire'
      }
    };
  }
  
  // Handle regular towns
  let foundLocation = '';
  let foundCounty = '';
  let foundCountyKey = '';
  let nearbyLocations: string[] = [];
  
  Object.entries(serviceAreas).forEach(([countyKey, area]) => {
    area.mainTowns.forEach(town => {
      if (town.toLowerCase().replace(/ /g, '-') === locationSlug) {
        foundLocation = town;
        foundCounty = area.name;
        foundCountyKey = countyKey;
        // Get other towns in the same county as nearby locations
        nearbyLocations = area.mainTowns.filter(t => t !== town);
      }
    });
  });

  if (!foundLocation || !services[service]) {
    return { notFound: true };
  }

  return {
    props: {
      service,
      location: locationSlug,
      county: foundCounty,
      serviceInfo: services[service],
      nearbyLocations,
      countyKey: foundCountyKey
    }
  };
};
