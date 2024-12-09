import React, { useState } from 'react';
import { Business } from '../../types/business';
import { 
  StarIcon, 
  ShieldCheckIcon, 
  GlobeAltIcon,
  CheckBadgeIcon,
  TrophyIcon,
  ClockIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

interface BusinessCardProps {
  business: Business;
}

interface BadgeStyle {
  bg: string;
  text: string;
  icon: JSX.Element;
}

type BadgeStyles = {
  [key: string]: BadgeStyle;
};

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const getBadgeStyle = (badge: string, isGrandeur: boolean): BadgeStyle => {
  const styles: BadgeStyles = {
    'Verified': {
      bg: isGrandeur ? 'bg-gold/20' : 'bg-emerald-100',
      text: isGrandeur ? 'text-gold-dark' : 'text-emerald-700',
      icon: <CheckBadgeIcon className="h-5 w-5 mr-2" />
    },
    'Premium Partner': {
      bg: 'bg-purple-100',
      text: 'text-purple-700',
      icon: <TrophyIcon className="h-5 w-5 mr-2" />
    },
    '20+ Years Experience': {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      icon: <BuildingOfficeIcon className="h-5 w-5 mr-2" />
    },
    'Family Business': {
      bg: 'bg-orange-100',
      text: 'text-orange-700',
      icon: <UserGroupIcon className="h-5 w-5 mr-2" />
    },
    'Commercial Certified': {
      bg: 'bg-cyan-100',
      text: 'text-cyan-700',
      icon: <BuildingOfficeIcon className="h-5 w-5 mr-2" />
    },
    'Quick Response': {
      bg: 'bg-rose-100',
      text: 'text-rose-700',
      icon: <ClockIcon className="h-5 w-5 mr-2" />
    }
  };

  return styles[badge] || {
    bg: isGrandeur ? 'bg-gold/20' : 'bg-gray-100',
    text: isGrandeur ? 'text-gold-dark' : 'text-gray-700',
    icon: <CheckBadgeIcon className="h-5 w-5 mr-2" />
  };
};

export default function BusinessCard({ business }: BusinessCardProps) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isGrandeur = business.name === 'Grandeur Heritage Group';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          new Date().toISOString(), // Timestamp
          formData.name,            // Name
          formData.phone,           // Phone
          formData.email,           // Email
          business.location || '',   // Address
          'General Inquiry',        // Service Needed
          'Standard',               // Urgency
          formData.message,         // Message
          typeof window !== 'undefined' ? window.location.pathname : '', // Source
          'New Lead',               // Status
          `Lead from Grandeur Heritage Group listing - ${business.location}` // Follow up notes
        ])
      });
      
      toast.success('Thank you! We will contact you shortly.');
      setShowModal(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Sorry, there was an error. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
      business.featured ? 'border-2 border-accent ring-2 ring-accent/20' : ''
    }`}>
      {/* Featured Badge */}
      {business.featured && (
        <div className="absolute top-6 right-6 bg-accent text-white px-4 py-1.5 rounded-full text-sm font-medium">
          Featured
        </div>
      )}
      
      {/* Trusted Banner for Grandeur */}
      {isGrandeur && (
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center bg-gold/20 text-gold-dark py-3 border-b border-gold/20">
          <ShieldCheckIcon className="h-7 w-7 mr-3 text-gold" />
          <span className="font-semibold text-base">Trusted Partner</span>
        </div>
      )}

      <div className={`p-8 ${isGrandeur ? 'pt-16' : ''}`}>
        {/* Header Section */}
        <div className="flex flex-col space-y-3">
          <h3 className={`font-bold text-gray-900 ${business.name === 'Grandeur Heritage Group' ? 'text-3xl' : 'text-2xl'}`}>{business.name}</h3>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.floor(business.rating)
                      ? isGrandeur ? 'text-gold' : 'text-yellow-400'
                      : 'text-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 font-medium">
              {business.rating} ({business.reviewCount} reviews)
            </span>
          </div>
        </div>

        {/* Description & Badges */}
        <div className="mt-6">
          <p className="text-gray-600 text-lg leading-relaxed">{business.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {business.badges.map((badge) => {
              let badgeStyle = '';
              let BadgeIcon = CheckBadgeIcon;

              if (business.featured) {
                // Premium listing badge styles
                switch (badge) {
                  case 'Verified':
                    badgeStyle = 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white';
                    BadgeIcon = CheckBadgeIcon;
                    break;
                  case 'Premium Partner':
                    badgeStyle = 'bg-gradient-to-r from-purple-500 to-purple-700 text-white';
                    BadgeIcon = TrophyIcon;
                    break;
                  case '20+ Years Experience':
                    badgeStyle = 'bg-gradient-to-r from-blue-500 to-blue-700 text-white';
                    BadgeIcon = BuildingOfficeIcon;
                    break;
                  case 'Quick Response':
                    badgeStyle = 'bg-gradient-to-r from-green-500 to-green-700 text-white';
                    BadgeIcon = ClockIcon;
                    break;
                  default:
                    badgeStyle = 'bg-gray-100 text-gray-800';
                }
              } else {
                // Basic listing badge styles
                badgeStyle = 'bg-gray-100 text-gray-800';
              }

              return (
                <span
                  key={badge}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${badgeStyle}`}
                >
                  <BadgeIcon className="w-4 h-4 mr-1" />
                  {badge}
                </span>
              );
            })}
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-8">
          <h4 className="text-lg font-medium text-gray-900 mb-3">Services:</h4>
          <div className="flex flex-wrap gap-3">
            {business.services.map((service) => (
              <span
                key={service}
                className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Business Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-gray-600">
              <span className="font-medium">Location:</span> {business.location}
            </p>
            {business.availability && (
              <p className="text-gray-600">
                <span className="font-medium">Availability:</span> {business.availability}
              </p>
            )}
          </div>
          <div className="space-y-3">
            {business.responseTime && (
              <p className="text-gray-600">
                <span className="font-medium">Response Time:</span> {business.responseTime}
              </p>
            )}
            <p className="text-gray-600">
              <span className="font-medium">Coverage:</span> Full service area
            </p>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          {business.phone && (
            <a
              href={`tel:${business.phone}`}
              className={`inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg ${
                business.featured
                  ? 'text-white bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              {business.name.includes('Grandeur Heritage Group') ? 'Call Us' : business.phone}
            </a>
          )}
          {business.email && (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (business.name.includes('Grandeur Heritage Group')) {
                  setShowModal(true);
                } else {
                  window.location.href = `mailto:${business.email}`;
                }
              }}
              className={`inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg ${
                business.featured
                  ? 'text-white bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-700 hover:to-yellow-900'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <EnvelopeIcon className="h-6 w-6 mr-2" />
              {business.name.includes('Grandeur Heritage Group') ? 'Email Us' : business.email}
            </a>
          )}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          {business.website && (
            <a
              href={business.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg shadow-sm ${
                business.featured
                  ? 'text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              <GlobeAltIcon className={`w-6 h-6 mr-2 ${business.featured ? 'text-white' : 'text-gray-500'}`} />
              Visit Website
            </a>
          )}
          {!business.featured && (
            <a
              href="mailto:52rooferteam@gmail.com?subject=Upgrade%20Account%20Request&body=I%20would%20like%20to%20upgrade%20my%20business%20listing"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-sm hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <StarIcon className="w-6 h-6 mr-2" />
              Upgrade Account
            </a>
          )}
        </div>
      </div>

      {/* Contact Form Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 text-white bg-accent hover:bg-accent/90 rounded-lg font-medium ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
