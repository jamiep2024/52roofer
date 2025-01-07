import React from 'react';
import QuoteForm from './QuoteForm';

interface HeroProps {
  locationName?: string;
  heroImage: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({ 
  locationName = "",
  heroImage,
  title = "Your Trusted Local Roofing Experts",
  description = "With over 30 years experience, trust 52 Roofer for all roofing repairs or installs, knowing we guarantee all our work and get your job done right!"
}: HeroProps) {
  return (
    <div className="relative min-h-[700px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 py-8 md:py-16 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white max-w-2xl order-2 md:order-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 w-fit">
              <div className="flex items-center gap-2">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-lg font-medium">Rated 4.9/5 (97 Reviews)</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 md:mb-8 text-center md:text-left leading-tight">
              {locationName ? `Expert Roofing Services in ${locationName}` : title}
            </h1>
            
            <p className="text-xl md:text-3xl mb-8 md:mb-12 text-center md:text-left max-w-[800px] leading-relaxed">
              {description}
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-lg max-w-md">
              <div className="flex items-start gap-4">
                <img src="/images/roofer-at-work.jpg" alt="Customer" className="w-14 h-14 rounded-full object-cover border-2 border-white" />
                <div>
                  <p className="text-white mb-2 italic">
                    "Five-star! The team replied quickly to our enquiry and provided a comprehensive solution within our budget. A very courteous & skilled team."
                  </p>
                  <div className="flex items-center">
                    <span className="text-white font-medium">James Farley</span>
                    <span className="text-white/50 mx-2">•</span>
                    <span className="text-white/50">Apr 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <QuoteForm source={locationName ? `location-${locationName.toLowerCase()}` : "residential-roofing"} />
        </div>
      </div>
    </div>
  );
}
