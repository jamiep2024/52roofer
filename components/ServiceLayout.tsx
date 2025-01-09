import React, { ReactNode } from 'react';

interface ServiceLayoutProps {
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  service: string;
  serviceAreas: string[];
  reviews: any[];
  faqs: any[];
  children: ReactNode;
}

const ServiceLayout = ({
  heroImage,
  heroTitle,
  heroDescription,
  service,
  serviceAreas,
  reviews,
  faqs,
  children
}: ServiceLayoutProps) => {
  return (
    <div className="service-layout">
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-4xl font-bold mb-4">{heroTitle}</h1>
            <p className="text-xl">{heroDescription}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {children}
      </div>

      {/* Service Areas */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            We Serve {serviceAreas.length} Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
