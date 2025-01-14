import { ReactNode } from 'react';
import Layout from '../layout/Layout';
import Hero from '../Hero';

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
        heroImage={heroImage}
        locationName={locationName}
      />
      
      {children}
    </Layout>
  );
}
