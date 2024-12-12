import React from 'react';
import Head from 'next/head';
import LocationLandingPage from '../../components/LocationLandingPage';
import { Business } from '../../types/business';
import { serviceAreas } from '../../data/serviceAreas';
import { businesses } from '../../data/businesses';

export default function RoofersInOxford() {
  const city = 'Oxford';
  const county = 'Oxfordshire';
  const description = 'Oxford is a historic university city with a rich architectural heritage. Our roofing services cover all areas of Oxford, providing expert repairs, installations, and maintenance for both historic and modern buildings.';

  const localBusinesses: Business[] = businesses.filter(
    business => business.location === county
  );

  return (
    <>
      <Head>
        <title>Expert Roofers in Oxford | Emergency Repairs & Installation</title>
        <meta 
          name="description" 
          content="Looking for trusted roofers in Oxford? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving all Oxford postcodes & surrounding areas."
        />
        <meta name="keywords" content="roofers Oxford, roofing contractors Oxford, roof repairs Oxfordshire, emergency roofer Oxford, local roofers Oxford" />
        <link rel="canonical" href="https://52roofer.com/locations/oxford" />
      </Head>

      <LocationLandingPage
        city={city}
        county={county}
        description={description}
        businesses={localBusinesses}
      />
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600
  };
};
