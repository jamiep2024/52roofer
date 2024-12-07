import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SEO from '../../components/seo/SEO';
import { locationData } from '../../data/locationData';
import BusinessCard from '../../components/business/BusinessCard';
import { businesses } from '../../data/businesses';

interface LocationPageProps {
  cityData: any;
  localBusinesses: any[];
}

export default function LocationPage({ cityData, localBusinesses }: LocationPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Schema markup for the location page
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `https://52roofer.com/location/${cityData.name.toLowerCase()}#business`,
    "name": `52Roofer - Professional Roofing Services in ${cityData.name}`,
    "image": "https://52roofer.com/images/hero-bg.jpg",
    "description": `Expert roofing services in ${cityData.name}, ${cityData.county}. Specializing in ${cityData.roofingInfo.commonStyles.join(", ")}. Local, trusted roofers for all your roofing needs.`,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": cityData.coordinates.latitude,
      "longitude": cityData.coordinates.longitude
    },
    "areaServed": {
      "@type": "City",
      "name": cityData.name,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": cityData.county
      }
    },
    "hasMap": `https://www.google.com/maps?q=${cityData.coordinates.latitude},${cityData.coordinates.longitude}`,
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "££",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": cityData.coordinates.latitude,
        "longitude": cityData.coordinates.longitude
      },
      "geoRadius": "20000"
    }
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
        "name": cityData.name,
        "item": `https://52roofer.com/location/${cityData.name.toLowerCase()}`
      }
    ]
  };

  return (
    <>
      <SEO
        title={`Top Rated Roofers in ${cityData.name} | Local Roofing Services ${new Date().getFullYear()}`}
        description={`Find trusted local roofers in ${cityData.name}, ${cityData.county}. Expert roofing services including ${cityData.roofingInfo.commonStyles.join(", ")}. Free quotes & 24/7 emergency service available.`}
        jsonLd={[locationSchema, breadcrumbSchema]}
      />

      <div className="relative bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900 h-[40vh] min-h-[400px]">
          <div className="absolute inset-0 overflow-hidden">
            <img
              className="h-full w-full object-cover opacity-40"
              src="/images/hero-bg.jpg"
              alt={`Professional roofing services in ${cityData.name}`}
            />
            <div className="absolute inset-0 hero-gradient opacity-60"></div>
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow">
                Trusted Roofers in {cityData.name}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
                Expert roofing services for {cityData.name} and surrounding areas. 
                Serving {cityData.nearbyAreas.join(", ")}.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Location Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Professional Roofing Services in {cityData.name}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                {cityData.name}, located in {cityData.county} with a population of {cityData.population}, 
                has unique roofing requirements due to its rich architectural heritage and diverse building styles.
                Our network of qualified roofers specializes in both traditional and modern roofing solutions.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {cityData.roofingInfo.commonStyles.map((style: string) => (
              <div key={style} className="glass-effect p-6 rounded-xl card-hover">
                <h3 className="text-xl font-semibold mb-3">{style}</h3>
                <p className="text-gray-600">
                  Expert installation and repairs with quality materials and workmanship guarantee.
                </p>
              </div>
            ))}
          </div>

          {/* Local Information */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">About {cityData.name}</h2>
              <p className="text-gray-600 mb-6">{cityData.history}</p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Notable Landmarks</h3>
                <ul className="list-disc list-inside space-y-2">
                  {cityData.landmarks.map((landmark: string) => (
                    <li key={landmark} className="text-gray-600">{landmark}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Roofing Regulations</h2>
              <p className="text-gray-600 mb-6">{cityData.roofingInfo.regulations}</p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Common Challenges</h3>
                <ul className="list-disc list-inside space-y-2">
                  {cityData.roofingInfo.challenges.map((challenge: string) => (
                    <li key={challenge} className="text-gray-600">{challenge}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Local Roofers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Trusted Local Roofers</h2>
            <div className="grid gap-6">
              {localBusinesses.map((business) => (
                <BusinessCard key={business.id} business={business} />
              ))}
            </div>
          </div>

          {/* Coverage Areas */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Areas We Cover</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cityData.nearbyAreas.map((area: string) => (
                <div key={area} className="p-4 bg-gray-50 rounded-lg text-center">
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Roofer in {cityData.name}?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get free quotes from trusted local professionals
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105"
            >
              Get Free Quotes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(locationData).map((city) => ({
    params: { city }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const city = params?.city as string;
  const cityData = locationData[city];

  if (!cityData) {
    return {
      notFound: true
    };
  }

  const localBusinesses = businesses
    .filter(business => business.location === cityData.county)
    .slice(0, 4); // Limit to 4 businesses per location

  return {
    props: {
      cityData,
      localBusinesses
    },
    revalidate: 86400 // Revalidate once per day
  };
};
