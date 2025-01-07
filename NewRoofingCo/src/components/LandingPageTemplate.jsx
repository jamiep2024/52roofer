import React from 'react'
import Head from 'next/head'
import Header from './Header'
import StickyBanner from './StickyBanner'
import Hero from './Hero'
import Features from './Features'
import LeadForm from './forms/LeadForm'
import Services from './Services'
import ServiceArea from './ServiceArea'
import Reviews from './Reviews'
import Footer from './Footer'
import StickyCTA from './StickyCTA'

export default function LandingPageTemplate({
  locationName,
  heroImage,
  serviceAreas,
  reviews,
  phoneNumber,
  services,
  seo,
  children
}) {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content={locationName} />
        <link rel="canonical" href={`https://52roofer.co.uk/${locationName.toLowerCase()}`} />
      </Head>
      
      <div className="min-h-screen bg-white pb-[72px] font-['Google_Sans']">
        <Header />
        <StickyBanner phoneNumber={phoneNumber} />
        <Hero 
          locationName={locationName}
          heroImage={heroImage}
        />
        <Features />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <LeadForm source={`Landing Page - ${locationName}`} />
          </div>
        </div>
        <Services services={services} />
        <ServiceArea areas={serviceAreas} />
        <Reviews reviews={reviews} />
        <Footer />
        <StickyCTA phoneNumber={phoneNumber} />
      </div>
    </>
  )
}
