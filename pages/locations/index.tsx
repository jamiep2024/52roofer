import { GetStaticProps } from 'next';
import Link from 'next/link';
import { serviceAreas } from '../../data/serviceAreas';
import { NextSeo } from 'next-seo';

interface LocationsPageProps {
  counties: {
    id: string;
    name: string;
    towns: string[];
    postcodes: string[];
  }[];
}

export default function LocationsPage({ counties }: LocationsPageProps) {
  return (
    <>
      <NextSeo
        title="Roofing Services Locations | Coverage Areas | 52 Roofer"
        description="Find professional roofing services in your area. We cover multiple counties including Berkshire, Oxfordshire, Wiltshire, and more. Local experts for all your roofing needs."
        canonical="https://52roofer.com/locations"
        openGraph={{
          url: 'https://52roofer.com/locations',
          title: 'Roofing Services Locations | Coverage Areas | 52 Roofer',
          description: 'Find professional roofing services in your area. We cover multiple counties including Berkshire, Oxfordshire, Wiltshire, and more.',
        }}
      />

      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Our Service Locations
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-3xl">
              Professional roofing services across multiple counties. Find expert roofers in your area.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {counties.map((county) => (
              <div key={county.id} className="border-b pb-8 last:border-b-0">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    <Link 
                      href={`/county/${county.id}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {county.name}
                    </Link>
                  </h2>
                  <p className="text-gray-600">
                    Postcodes covered: {county.postcodes.join(', ')}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Areas We Cover in {county.name}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {county.towns.map((town) => {
                      const townSlug = town.toLowerCase().replace(/ /g, '-');
                      const path = `/roofers-in-${townSlug}${county.id === 'wiltshire' ? '-wiltshire' : ''}`;
                      
                      return (
                        <Link
                          key={town}
                          href={path}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          Roofers in {town}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Roofer in Your Area?
            </h2>
            <p className="text-gray-600 mb-6">
              Get in touch for a free quote from our local experts.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const counties = Object.entries(serviceAreas).map(([id, data]) => ({
    id,
    name: data.name,
    towns: data.mainTowns,
    postcodes: data.postcodes,
  }));

  return {
    props: {
      counties,
    },
  };
};
