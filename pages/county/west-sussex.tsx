import { GetStaticProps } from 'next';
import { serviceAreas } from '../../data/serviceAreas';
import { businesses } from '../../data/businesses';
import CountyLandingPage from '../../components/CountyLandingPage';

export default function WestSussex({ businesses }: { businesses: any[] }) {
  const county = serviceAreas.westSussex;
  
  return (
    <CountyLandingPage
      county={county.name}
      businesses={businesses}
      mainTowns={county.mainTowns}
      postcodes={county.postcodes}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const countyBusinesses = businesses.filter(
    (business) => business.location === serviceAreas.westSussex.name
  );

  return {
    props: {
      businesses: countyBusinesses,
    },
    revalidate: 3600, // Revalidate every hour
  };
};
