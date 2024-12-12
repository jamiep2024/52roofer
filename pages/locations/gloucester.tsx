import { GetStaticProps } from 'next';
import { serviceAreas } from '../../data/serviceAreas';
import { businesses } from '../../data/businesses';
import LocationLandingPage from '../../components/LocationLandingPage';

export default function Gloucester() {
  const location = {
    name: 'Gloucester',
    county: serviceAreas.gloucestershire.name,
    postcodes: ['GL1', 'GL2', 'GL3', 'GL4'],
    description: `Looking for trusted roofers in Gloucester? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving GL1, GL2, GL3, GL4 & surrounding areas.`,
    keyFeatures: [
      'Emergency Roof Repairs',
      'Full Roof Replacements',
      'Roof Maintenance',
      'Chimney Repairs',
      'Guttering Services',
      'Heritage Roofing Specialists'
    ],
    nearbyAreas: [
      'Barnwood',
      'Longlevens',
      'Tuffley',
      'Hucclecote',
      'Quedgeley',
      'Kingsholm',
      'Matson',
      'Abbeydale'
    ],
    landmarks: [
      'Gloucester Cathedral',
      'Gloucester Docks',
      'Gloucester Quays',
      'Kingsholm Stadium',
      'Museum of Gloucester'
    ]
  };

  const localBusinesses = businesses.filter(
    business => business.location === serviceAreas.gloucestershire.name
  );

  return (
    <LocationLandingPage
      location={location}
      businesses={localBusinesses}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600
  };
};
