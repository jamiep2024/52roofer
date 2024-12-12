import React from 'react';
import Head from 'next/head';
import LocationLandingPage from '../../components/LocationLandingPage';
import { Business } from '../../types/business';
import { serviceAreas } from '../../data/serviceAreas';
import { businesses } from '../../data/businesses';

export default function RoofersInGloucester() {
  const city = 'Gloucester';
  const county = 'Gloucestershire';
  const description = 'Gloucester is a historic cathedral city and the county town of Gloucestershire. Our roofing services cover all areas of Gloucester, providing expert repairs, installations, and maintenance.';

  const localBusinesses: Business[] = businesses.filter(
    business => business.location === county
  );

  return (
    <>
      <Head>
        <title>Expert Roofers in Gloucester | Emergency Repairs & Installation</title>
        <meta 
          name="description" 
          content="Looking for trusted roofers in Gloucester? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving GL1, GL2, GL3, GL4 & surrounding areas."
        />
        <meta name="keywords" content="roofers Gloucester, roofing contractors Gloucester, roof repairs Gloucestershire, emergency roofer Gloucester, local roofers GL1" />
        <link rel="canonical" href="https://52roofer.com/locations/gloucester" />
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
