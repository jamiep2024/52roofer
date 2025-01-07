import React from 'react'
import Head from 'next/head'
import Header from './Header'
import StickyBanner from './StickyBanner'
import Hero from './Hero'
import Features from './Features'
import Services from './Services'
import ServiceArea from './ServiceArea'
import Reviews from './Reviews'
import Footer from './Footer'
import StickyCTA from './StickyCTA'

export default function HomePageTemplate({
  phoneNumber,
  serviceAreas,
  reviews,
  services
}) {
  return (
    <>
      <Head>
        <title>Professional Roofing Services | Roofing Co</title>
        <meta name="description" content="Trusted roofing services for residential and commercial properties. Get a free quote today!" />
        <link rel="canonical" href="https://roofingco.com" />
      </Head>
      
      <div className="min-h-screen bg-white pb-[72px]">
        <Header />
        <StickyBanner phoneNumber={phoneNumber} />
        <Hero 
          title="Quality Roofing Services"
          subtitle="Serving the entire region with professional roofing solutions"
          ctaText="Get a Free Quote"
        />
        <Features />
        <Services services={services} />
        <ServiceArea areas={serviceAreas} />
        <Reviews reviews={reviews} />
        <Footer />
        <StickyCTA phoneNumber={phoneNumber} />
      </div>
    </>
  )
}
