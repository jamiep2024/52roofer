import React from 'react';
import { FaHome, FaTools, FaBuilding, FaExclamationTriangle, FaTint } from 'react-icons/fa';

export interface Service {
  title: string;
  icon: JSX.Element;
  color: string;
}

interface ServicesProps {
  services: Service[];
}

const defaultServices: Service[] = [
  { 
    title: 'New Roof / Re-Roof',
    icon: <FaHome className="w-12 h-12 mb-4 text-white" />,
    color: 'from-pink-600 to-pink-800'
  },
  {
    title: 'Roof Repairs',
    icon: <FaTools className="w-12 h-12 mb-4 text-white" />,
    color: 'from-pink-600 to-pink-800'
  },
  {
    title: 'Flat Roofs',
    icon: <FaBuilding className="w-12 h-12 mb-4 text-white" />,
    color: 'from-pink-600 to-pink-800'
  },
  {
    title: 'Commercial Roofing',
    icon: <FaBuilding className="w-12 h-12 mb-4 text-white" />,
    color: 'from-gray-800 to-gray-900'
  },
  {
    title: 'Emergency Roof Repair',
    icon: <FaExclamationTriangle className="w-12 h-12 mb-4 text-white" />,
    color: 'from-gray-800 to-gray-900'
  },
  {
    title: 'Guttering & Fascias',
    icon: <FaTint className="w-12 h-12 mb-4 text-white" />,
    color: 'from-gray-800 to-gray-900'
  }
];

export default function Services({ services = defaultServices }: ServicesProps) {
  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Professional, Affordable & Trusted Roofing Services
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            At 52 Roofer, we offer all types of roofing services. Our roofing services are affordable & we always provide a detailed inspection & quote before any work begins.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-r ${service.color} p-4 md:p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300`}
            >
              <div className="text-center">
                {React.cloneElement(service.icon, { className: "w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3 text-white" })}
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-100">
                  Professional {service.title.toLowerCase()} services with quality materials and expert installation.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
