import Head from 'next/head';
import Link from 'next/link';
import { serviceAreas } from '../../data/serviceAreas';

type LocationInfo = {
  name: string;
  path: string;
};

type LocationsByCounty = {
  [key: string]: LocationInfo[];
};

export default function LocationsList() {
  // Convert serviceAreas into the format we need
  const locations: LocationsByCounty = Object.entries(serviceAreas).reduce((acc, [key, county]) => {
    acc[key] = county.mainTowns.map(town => ({
      name: town,
      path: `/roofers-in-${town.toLowerCase().replace(/ /g, '-')}${key === 'wiltshire' ? '-wiltshire' : ''}`
    }));
    return acc;
  }, {} as LocationsByCounty);

  // Add Oxford neighborhoods
  const oxfordNeighborhoods = [
    'Blackbird Leys',
    'Botley',
    'Cowley',
    'Headington',
    'Wolvercote',
    'Jericho',
    'Marston',
    'Rose Hill',
    'Iffley',
    'Summertown'
  ].map(neighborhood => ({
    name: neighborhood,
    path: `/roofers-in-${neighborhood.toLowerCase().replace(/ /g, '-')}-oxford`
  }));

  // Add Oxford neighborhoods to locations
  locations['oxfordNeighborhoods'] = oxfordNeighborhoods;

  // County display names
  const countyNames = {
    berkshire: 'Berkshire',
    oxfordshire: 'Oxfordshire',
    wiltshire: 'Wiltshire',
    gloucestershire: 'Gloucestershire',
    hampshire: 'Hampshire',
    surrey: 'Surrey',
    buckinghamshire: 'Buckinghamshire',
    westSussex: 'West Sussex',
    oxfordNeighborhoods: 'Oxford Neighborhoods'
  };

  return (
    <>
      <Head>
        <title>Our Service Areas | 52 Roofer</title>
        <meta 
          name="description" 
          content="Find expert roofing services across Southern England. We cover Berkshire, Oxfordshire, Wiltshire, Gloucestershire, Hampshire, Surrey, Buckinghamshire, and West Sussex. 24/7 emergency service available."
        />
        <link rel="canonical" href="https://52roofer.com/locations" />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
            Our Service Areas
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {Object.entries(locations).map(([countyKey, locationsList]) => (
              <div key={countyKey}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {countyNames[countyKey as keyof typeof countyNames]}
                </h2>
                <ul className="space-y-4">
                  {locationsList.map((location) => (
                    <li key={location.path}>
                      <Link 
                        href={location.path}
                        className="text-blue-600 hover:text-blue-800 text-lg"
                      >
                        Roofers in {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Links to County Pages */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              County Coverage Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(serviceAreas).map(([key, county]) => (
                <Link
                  key={key}
                  href={`/county/${key}`}
                  className="text-blue-600 hover:text-blue-800 text-lg"
                >
                  {county.name} Roofing Services
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
