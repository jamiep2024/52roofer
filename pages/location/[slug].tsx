import { GetStaticPaths, GetStaticProps } from 'next';
import { locationData } from '../../data/locationData';
import LocationDetails from '../../components/LocationDetails';
import SEO from '../../components/seo/SEO';

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
