import { useRouter } from 'next/router';
import Layout from '@components/Layout';
import LocationDetails from '@components/LocationDetails';
import SEO from '@components/SEO';
import { LocationData } from 'types/location';
import { serviceAreas } from 'data/serviceAreas';

interface LocationPageProps {
  locationData: LocationData;
}

export default function LocationPage({ locationData }: LocationPageProps) {
  const router = useRouter();
  const { location } = router.query;

  if (!location || !locationData) {
    return <div>Loading...</div>;
  }

  const metaDescription = `Find professional roofing services in ${locationData.name}. Get free quotes and expert advice for all your roofing needs.`;
  const canonicalUrl = `https://52roofer.com/locations/${location}`;

  return (
    <Layout>
      <SEO
        title={`Roofing Services in ${locationData.name}`}
        description={metaDescription}
        canonical={canonicalUrl}
      />
      <h1 className="text-3xl font-bold mb-4">Roofing Services in {locationData.name}</h1>
      <div className="prose max-w-none">
        <LocationDetails location={locationData} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const locations = Object.values(serviceAreas).flatMap(area => 
    area.mainTowns.map(town => town.toLowerCase().replace(/ /g, '-'))
  );

  const paths = locations.map(location => ({
    params: { location }
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

interface StaticPropsParams {
  params: {
    location: string;
  };
}

export async function getStaticProps({ params }: StaticPropsParams) {
  const area = Object.values(serviceAreas).find(area => 
    area.mainTowns.some(town => 
      town.toLowerCase().replace(/ /g, '-') === params.location
    )
  );

  if (!area) {
    return {
      notFound: true,
    };
  }

  const town = area.mainTowns.find(t => 
    t.toLowerCase().replace(/ /g, '-') === params.location
  ) || params.location;

  const locationData: LocationData = {
    name: town,
    county: area.name,
    coordinates: {
      latitude: '0',
      longitude: '0'
    },
    population: '',
    landmarks: [],
    history: '',
    heritage: {
      listedBuildings: {
        gradeI: [],
        gradeII: [],
        gradeIIStar: []
      },
      conservationAreas: [],
      historicSites: []
    },
    roofingInfo: {
      commonStyles: [],
      challenges: [],
      regulations: '',
      materials: {
        traditional: [],
        modern: [],
        specializedSolutions: []
      },
      weatherConsiderations: {
        annualRainfall: '',
        windExposure: '',
        temperatureRange: '',
        commonIssues: []
      },
      buildingRegulations: {
        planningRequirements: '',
        conservationGuidelines: '',
        energyEfficiencyStandards: '',
        heritageRestrictions: ''
      }
    },
    nearbyAreas: [],
    postalCodes: []
  };

  return {
    props: {
      locationData
    },
  };
}
