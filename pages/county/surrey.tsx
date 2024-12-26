import { GetStaticProps } from 'next';
import { serviceAreas } from '../../data/serviceAreas';
import CountyLandingPage from '../../components/CountyLandingPage';

export default function Surrey() {
  const county = serviceAreas.surrey;
  
  return (
    <CountyLandingPage
      county={county.name}
      mainTowns={county.mainTowns}
      postcodes={county.postcodes}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600, // Revalidate every hour
  };
};
