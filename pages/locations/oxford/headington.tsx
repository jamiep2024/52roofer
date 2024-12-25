import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import { GetStaticProps } from 'next';
import { serviceAreas } from '../../../data/serviceAreas';
import { businesses } from '../../../data/businesses';
import LocationLandingPage from '../../../components/LocationLandingPage';
import { Business } from '../../../types/business';

export default function Headington() {
  const location = {
    name: 'Headington',
    county: serviceAreas.oxfordshire.name,
    city: 'Oxford',
    postcodes: ['OX3'],
    description: `Looking for reliable roofing services in Headington, Oxford? Our trusted local roofers provide comprehensive roofing solutions throughout Headington and surrounding areas. From emergency repairs to complete roof installations, we deliver quality workmanship with excellent customer service.`,
    keyFeatures: [
      'Emergency Roof Repairs',
      'Complete Roof Replacements',
      'Roof Maintenance',
      'Chimney Repairs',
      'Guttering Services',
      'Flat Roof Specialists'
    ],
    nearbyAreas: [
      'Marston',
      'Northway',
      'Barton',
      'Risinghurst',
      'Wood Farm',
      'New Headington',
      'Old Headington',
      'Quarry'
    ],
    landmarks: [
      'John Radcliffe Hospital',
      'Oxford Brookes University',
      'Headington Shark',
      'Bury Knowle Park',
      'Headington School'
    ]
  };

  const localBusinesses: Business[] = businesses.filter(
    business => business.location === serviceAreas.oxfordshire.name
  );

  return (
    <Layout>
      <Layout>
<LocalBusinessSchema />
<SEO title="" description="" />
    <LocationLandingPage
      city={location.name    </Layout>
  );
}

      county={location.county}
      description={location.description}
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
