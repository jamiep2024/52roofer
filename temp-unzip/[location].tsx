import { useRouter } from 'next/router';
import Layout from '@components/Layout';
import LocationDetails from '@components/LocationDetails';
import SEO from '@components/SEO';
import { LocationData } from 'types/location';
import { serviceAreas } from 'data/serviceAreas';
import { formatTownName } from 'utils/formatTownName';

interface ServiceArea {
  name: string;
  mainTowns: string[];
}

interface ServiceLocationPageProps {
  locationData: LocationData;
  serviceTitle: string;
  service: string;
}

export default function ServiceLocationPage({ locationData, serviceTitle, service }: ServiceLocationPageProps) {
  const router = useRouter();
  const { service: queryService, location } = router.query;

  if (!queryService || !location || !locationData) {
    return <div>Loading...</div>;
  }

  const metaDescription = `Find professional ${service.replace(/-/g, ' ')} services in ${locationData.name}. ${serviceTitle} - Get free quotes and expert advice.`;
  const canonicalUrl = `https://52roofer.com/services/${service}/${location}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": serviceTitle,
    "image": "https://52roofer.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": locationData.name,
      "addressRegion": locationData.county,
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": locationData.coordinates.latitude,
      "longitude": locationData.coordinates.longitude
    },
    "url": canonicalUrl,
    "telephone": "+44-7990-101321",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  return (
    <Layout>
      <SEO
        title={serviceTitle}
        description={metaDescription}
        canonical={canonicalUrl}
        schema={localBusinessSchema}
      />
      <h1 className="text-3xl font-bold mb-4">{serviceTitle}</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          We provide professional {service.replace(/-/g, ' ')} services in {locationData.name} and surrounding areas.
          Our team of experts specializes in delivering high-quality roofing solutions tailored to your needs.
        </p>
        <LocationDetails location={locationData} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Get all services and locations
  const services = [
    'roof-installation',
    'roof-ventilation',
    'roof-cost-near-me',
    'roof-estimate',
    'emergency-roof-repair',
    'skylight-installation',
    'advanced-roofing',
    'roofing-contractors',
    'local-roofer',
    'flat-roof'
  ];

  const locations = Object.values(serviceAreas).flatMap((area: ServiceArea) => 
    area.mainTowns.map((town: string) => town.toLowerCase().replace(/ /g, '-'))
  );

  // Generate all possible paths
  const paths = services.flatMap(service => 
    locations.map(location => ({
      params: { service, location }
    }))
  );

  return {
    paths,
    fallback: 'blocking',
  };
}

interface StaticPropsParams {
  params: {
    service: string;
    location: string;
  };
}

export async function getStaticProps({ params }: StaticPropsParams) {
  // Find the location data from serviceAreas
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

  // Get the town name in proper format
  const town = formatTownName(
    area.mainTowns.find(t => 
      t.toLowerCase().replace(/ /g, '-') === params.location
    ) || params.location
  );

  // Service-specific content
  const serviceTitles = {
    'roof-installation': `Roof Installation in ${town}`,
    'roof-ventilation': `Roof Ventilation in ${town}`,
    'roof-cost-near-me': `Roof Cost Estimates in ${town}`,
    'roof-estimate': `Free Roof Estimates in ${town}`,
    'emergency-roof-repair': `Emergency Roof Repair in ${town}`,
    'skylight-installation': `Skylight Installation in ${town}`,
    'advanced-roofing': `Advanced Roofing Solutions in ${town}`,
    'roofing-contractors': `Roofing Contractors in ${town}`,
    'local-roofer': `Local Roofers in ${town}`,
    'flat-roof': `Flat Roof Specialists in ${town}`
  };

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

  if (!locationData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      locationData,
      serviceTitle: serviceTitles[params.service as keyof typeof serviceTitles] || 
        `Roofing Services in ${town}`,
      service: params.service
    },
  };
}
