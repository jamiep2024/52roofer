import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import ServiceArea from './components/ServiceArea'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'

function App() {
  return (
    <div className="min-h-screen bg-white pb-[72px]">
      <Header />
      <Hero />
      <Features />
      <Services />
      <ServiceArea />
      <Reviews />
      <Footer />
      <StickyCTA />
    </div>
  )
}

export default App
