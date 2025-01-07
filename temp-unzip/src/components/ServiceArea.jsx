import React from 'react'
import { FaCheck } from 'react-icons/fa'

const benefits = [
  'Fully Insured & qualified team',
  'Free pre-install survey & inspection',
  '20 Yr guarantee on new roofs',
  'Free guttering with new roof installs',
  'Free 24/7 emergency call outs',
  'All work undertaken, no job too small'
]

export default function ServiceArea() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/service-area/roof1.jpg" 
              alt="Roofing Service"
              className="rounded-lg shadow-lg"
            />
            <img 
              src="/service-area/roof2.jpg" 
              alt="Roofing Service"
              className="rounded-lg shadow-lg mt-8"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Serving Your Local Area With Quality Roofing Services
            </h2>
            <p className="text-gray-600 mb-8">
              We're known for our commitment to customer satisfaction. We know our customers want a hassle free installation, competitive pricing, the best quality materials and a dependable team who deliver on their promises. So that's exactly what we give you.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <FaCheck className="text-green-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
