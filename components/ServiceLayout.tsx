import React from 'react';
import Link from 'next/link';

interface ServiceLayoutProps {
  children: React.ReactNode;
  heroImage?: string;
  heroTitle?: string;
  heroDescription?: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ 
  children, 
  heroImage = "/images/services/default-hero.jpg",
  heroTitle,
  heroDescription 
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${heroImage})` 
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            {heroTitle && (
              <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
                {heroTitle}
              </h1>
            )}
            {heroDescription && (
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                {heroDescription}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-accent to-accent/80 rounded-lg p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our expert team today for a free, no-obligation quote
          </p>
          <Link
            href="/find-roofer"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white rounded-md text-lg font-medium text-white hover:bg-white hover:text-accent transition-all duration-200"
          >
            Find a Roofer Near You
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
