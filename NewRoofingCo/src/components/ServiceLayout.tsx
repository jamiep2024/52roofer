import React from 'react';
import LandingPageTemplate from './LandingPageTemplate';

interface ServiceLayoutProps {
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  serviceName: string;
  children: React.ReactNode;
  locationName: string;
  serviceAreas: string[];
  reviews: any[];
  phoneNumber: string;
  services: any[];
  seo: {
    title: string;
    description: string;
  };
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  heroImage,
  heroTitle,
  heroDescription,
  serviceName,
  children,
  locationName,
  serviceAreas,
  reviews,
  phoneNumber,
  services,
  seo
}) => {
  return (
    <LandingPageTemplate
      locationName={locationName}
      heroImage={heroImage}
      serviceAreas={serviceAreas}
      reviews={reviews}
      phoneNumber={phoneNumber}
      services={services}
      seo={seo}
    >
      {children}
    </LandingPageTemplate>
  );
};

export default ServiceLayout;
