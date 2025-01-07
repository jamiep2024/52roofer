import React from 'react'
import QuoteForm from './QuoteForm'

export default function Hero() {
  return (
    <div className="relative min-h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex justify-between items-center gap-8">
          <div className="text-white max-w-2xl">
            <div className="flex items-center mb-4">
              {[1,2,3,4,5].map((star) => (
                <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2">Rated "Excellent" (97 Reviews)</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">Your Trusted Local Roofing Experts</h1>
            
            <p className="text-xl mb-8">
              With over 30 years experience, trust 52 Roofer for all roofing repairs or installs, knowing 
              <span className="font-bold"> we guarantee all our work</span> and get your job done right!
            </p>

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
              <div className="flex items-start gap-4">
                <img src="/avatar.jpg" alt="Customer" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="text-gray-700 mb-2">
                    Five-star! The team replied quickly to our enquiry and provided a comprehensive solution within our budget. A very courteous & skilled team.
                  </p>
                  <div className="flex items-center">
                    <span className="text-gray-900 font-medium">James Farley</span>
                    <span className="text-gray-500 mx-2">•</span>
                    <span className="text-gray-500">Apr 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </div>
    </div>
  )
}
