import React from 'react';
import Head from 'next/head';
import Header from './Header';
import StickyBanner from './StickyBanner';
import Hero from './Hero';
import Features from './Features';
import Services from './Services';
import ServiceArea from './ServiceArea';
import Reviews from './Reviews';
import Footer from './Footer';
import StickyCTA from './StickyCTA';

interface SEOProps {
  title: string;
  description: string;
}

interface LandingPageTemplateProps {
  locationName: string;
  heroImage: string;
  serviceAreas: string[];
  reviews: any[]; // TODO: Define proper Review type
  phoneNumber: string;
  services: any[]; // TODO: Define proper Service type
  seo: SEOProps;
}

const LandingPageTemplate: React.FC<LandingPageTemplateProps> = ({
  locationName,
  heroImage,
  serviceAreas,
  reviews,
  phoneNumber,
  services,
  seo
}) => {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content={locationName} />
        <link rel="canonical" href={`https://52roofer.co.uk/${locationName.toLowerCase()}`} />
      </Head>
      
      <div className="min-h-screen bg-white pb-[72px]">
        <Header />
        <StickyBanner phoneNumber={phoneNumber} />
        <Hero 
          locationName={locationName}
          heroImage={heroImage}
        />
        <Features />
        <Services services={services} />
        <ServiceArea areas={serviceAreas} />
        <Reviews reviews={reviews} />
        <Footer />
        <StickyCTA phoneNumber={phoneNumber} />
      </div>
    </>
  );
};

export default LandingPageTemplate;
