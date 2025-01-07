import React from 'react';
import { FaCheck, FaShieldAlt, FaClock, FaSearchLocation } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      title: '24/7 Emergency Call Outs',
      description: "We're always here when you need us most",
      icon: <FaClock className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Fully Insured Experts',
      description: 'Your property is in safe hands',
      icon: <FaShieldAlt className="w-6 h-6 text-blue-600" />
    },
    {
      title: '20-Year Workmanship Guarantee',
      description: 'Unmatched confidence in our work',
      icon: <FaCheck className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Free Roof Health Checks',
      description: 'Expert assessments at no cost',
      icon: <FaSearchLocation className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mx-auto w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
