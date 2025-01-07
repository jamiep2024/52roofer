import React from 'react'
import { FaCheck } from 'react-icons/fa'

export default function Features() {
  const features = [
    'Free 24/7 Call Out',
    'Fully Insured Team',
    '20 Year Guarantee',
    'Free Roof Surveys'
  ]

  return (
    <div className="bg-white py-4 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span className="font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
