import React from 'react'
import QuoteForm from './QuoteForm'

interface HeroProps {
  locationName: string
  heroImage: string
}

export default function Hero({ locationName, heroImage }: HeroProps) {
  return (
    <div className="relative min-h-[600px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 py-8 md:py-16 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white max-w-2xl order-2 md:order-1">
            <div className="flex flex-col md:flex-row items-center mb-4">
              {[1,2,3,4,5].map((star) => (
                <svg key={star} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-0 md:ml-2 mt-2 md:mt-0 text-center md:text-left">Rated "Excellent" (97 Reviews)</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 text-center md:text-left">
              Your Trusted Local Roofing Experts in {locationName}
            </h1>
            
            <p className="text-lg md:text-2xl mb-8 md:mb-10 text-center md:text-left">
              With over 30 years experience, trust 52 Roofer for all roofing repairs or installs, knowing 
              <span className="font-bold"> we guarantee all our work</span> and get your job done right!
            </p>

            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6 max-w-lg mx-auto md:mx-0">
              <div className="flex items-start gap-4">
                <img 
                  src="/images/logo.jpg" 
                  alt="Emily Carter" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white italic">"Exceptional roofing service from start to finish! The crew was punctual, professional, and meticulous in their work. Our new roof looks fantastic and we feel confident in its quality. 52 Roofer truly delivers on their promises."</p>
                  <div className="mt-2 text-white font-medium">- Emily Carter</div>
                </div>
              </div>
            </div>

          </div>
          
          <div className="order-1 md:order-2 w-full md:w-auto mb-8 md:mb-0">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  )
}
