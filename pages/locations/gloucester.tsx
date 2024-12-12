import React from 'react';
import { GetStaticProps } from 'next';
import LocationLandingPage from '../../components/LocationLandingPage';
import { Business } from '../../types/business';
import { serviceAreas } from '../../data/serviceAreas';
import { businesses } from '../../data/businesses';

export default function Gloucester() {
  const location = {
    name: 'Gloucester',
    county: 'Gloucestershire',
    description: 'Gloucester is a historic cathedral city and the county town of Gloucestershire. Our roofing services cover all areas of Gloucester, providing expert repairs, installations, and maintenance.',
    keyFeatures: [
      'Historic cathedral city',
      'Rich Roman and medieval history',
      'Modern shopping centers',
      'Vibrant cultural scene'
    ],
    nearbyAreas: [
      'Cheltenham',
      'Stroud',
      'Tewkesbury',
      'Forest of Dean'
    ],
    landmarks: [
      'Gloucester Cathedral',
      'Gloucester Docks',
      'Gloucester Quays',
      'Museum of Gloucester'
    ],
    postcodes: ['GL1', 'GL2', 'GL3', 'GL4']
  };

  const localBusinesses: Business[] = businesses.filter(
    business => business.location === serviceAreas.gloucestershire.name
  );

  return (
    <LocationLandingPage
      city={location.name}
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
