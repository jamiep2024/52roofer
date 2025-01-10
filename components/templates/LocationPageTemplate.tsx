import { ReactNode } from 'react';
import Layout from '../layout/Layout';
import Hero from '../Hero';
import ServiceAreas from '../ServiceAreas';

interface LocationPageTemplateProps {
  locationName: string;
  heroImage: string;
  children: ReactNode;
}

export default function LocationPageTemplate({
  locationName,
  heroImage,
  children,
}: LocationPageTemplateProps) {
  return (
    <Layout title={`${locationName} Roofing Services`}>
      <Hero 
        title={`Roofing Services in ${locationName}`}
        image={heroImage}
      />
      <ServiceAreas location={locationName} />
      {children}
    </Layout>
  );
}
