import { GetStaticPaths, GetStaticProps } from 'next';
import { locationData } from '../../data/locationData';
import LocationDetails from '../../components/LocationDetails';
import SEO from '../../components/seo/SEO';
import LeadForm from '../../components/forms/LeadForm';

interface LocationPageProps {
  location: any;
  slug: string;
}

export default function LocationPage({ location, slug }: LocationPageProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://52roofer.com/#organization",
    "name": "52Roofer",
    "url": "https://52roofer.com",
    "logo": "https://52roofer.com/images/logo.png",
    "description": `Professional roofing services in ${location.name}, ${location.county}. Expert local roofers providing quality roofing solutions.`
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://52roofer.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://52roofer.com/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": location.name,
        "item": `https://52roofer.com/location/${slug}`
      }
    ]
  };

  return (
    <>
      <SEO
        title={`Roofing Services in ${location.name} | Local Roofers | 52Roofer`}
        description={`Professional roofing services in ${location.name}, ${location.county}. Expert local roofers for all your roofing needs. Covering ${location.nearbyAreas.slice(0, 3).join(", ")} and surrounding areas.`}
        jsonLd={[organizationSchema, breadcrumbSchema]}
      />

      <div className="relative bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900 h-[40vh] min-h-[400px]">
          <div className="absolute inset-0 overflow-hidden">
            <img
              className="h-full w-full object-cover opacity-40"
              src="/images/hero-bg.jpg"
              alt={`Roofing services in ${location.name}`}
            />
            <div className="absolute inset-0 hero-gradient opacity-60"></div>
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow">
                {location.name} Roofing Services
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
                Professional roofing solutions in {location.name}, {location.county}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Grandeur Heritage Group Listing */}
          <div className="mb-8">
            <div className="border border-pink-200 rounded-lg p-6 bg-pink-50">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl font-bold text-gray-900">Grandeur Heritage Group {location.name}</h2>
                <span className="bg-pink-500 text-white px-3 py-1 text-sm rounded-full">Featured</span>
              </div>
              
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400 mr-2">★★★★★</div>
                <span className="text-gray-600">5 (92 reviews)</span>
              </div>

              <p className="text-gray-700 mb-4">Premier roofing specialists with over 20 years of experience. Experts in traditional and modern roofing solutions.</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 text-sm rounded-full flex items-center">
                  <span className="mr-1">✓</span> Verified
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 text-sm rounded-full">Premium Partner</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 text-sm rounded-full">20+ Years Experience</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 text-sm rounded-full">Quick Response</span>
              </div>

              <div className="mb-6">
                <div className="text-gray-700 font-medium mb-2">Services:</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full">Roof Repairs</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full">New Roof Installation</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full">Heritage Roofing</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full">Emergency Repairs</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full">Guttering</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full">Chimney Work</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="text-gray-600 text-sm">Location:</div>
                  <div className="font-medium">{location.county}</div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm">Response Time:</div>
                  <div className="font-medium">Usually within 1 hour</div>
                </div>
                <div>
                  <div className="text-gray-600 text-sm">Availability:</div>
                  <div className="font-medium">24/7 for emergencies</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="tel:07990101321" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <a href="https://www.grandeurheritageroofing.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          {/* Lead Form */}
          <div className="mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get a Free Quote</h2>
              <LeadForm source={`Location Page - ${location.name}`} />
            </div>
          </div>

          <LocationDetails location={location} />
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(locationData).map((slug) => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const location = locationData[slug];

  if (!location) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      location,
      slug
    }
  };
};
