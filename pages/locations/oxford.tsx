import { GetStaticProps } from 'next';
import { serviceAreas } from '../../data/serviceAreas';
import { businesses } from '../../data/businesses';
import LocationLandingPage from '../../components/LocationLandingPage';

export default function Oxford() {
  const location = {
    name: 'Oxford',
    county: serviceAreas.oxfordshire.name,
    postcodes: ['OX1', 'OX2', 'OX3', 'OX4'],
    description: `Looking for trusted roofers in Oxford? Our network of experienced local roofers provides comprehensive roofing services across Oxford and surrounding areas. From emergency repairs to complete roof installations, we deliver quality workmanship and reliable service.`,
    keyFeatures: [
      'Emergency Roof Repairs',
      'Complete Roof Replacements',
      'Roof Maintenance',
      'Chimney Repairs',
      'Guttering Services',
      'Flat Roof Specialists'
    ],
    nearbyAreas: [
      'Headington',
      'Cowley',
      'Botley',
      'Wolvercote',
      'Marston',
      'Iffley',
      'Summertown',
      'Blackbird Leys'
    ],
    landmarks: [
      'Oxford University',
      'Oxford Castle',
      'Radcliffe Camera',
      'Ashmolean Museum',
      'Christ Church Cathedral'
    ]
  };

  const localBusinesses = businesses.filter(
    business => business.location === serviceAreas.oxfordshire.name
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
