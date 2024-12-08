import React from 'react';
import { LocationData } from '../types/location';

interface LocationDetailsProps {
  location: LocationData;
}

const LocationDetails: React.FC<LocationDetailsProps> = ({ location }) => {
  return (
    <div className="space-y-8">
      {/* Location Overview */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-4 gradient-text">About {location.name}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-600 mb-4">{location.history}</p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Coordinates:</span>
              <span>{location.coordinates.latitude}, {location.coordinates.longitude}</span>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Notable Landmarks:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {location.landmarks.map((landmark) => (
                  <li key={landmark}>{landmark}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Postal Codes:</h3>
              <p className="text-gray-600">{location.postalCodes.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Roofing Partner */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="border border-pink-200 rounded-lg p-4 bg-pink-50">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-gray-900">Grandeur Heritage Group Reading</h2>
            <span className="bg-pink-500 text-white px-3 py-1 text-sm rounded-full">Featured</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-3">
            <div className="flex items-center">
              <span className="text-yellow-600 mr-1">★★★★★</span>
              <span className="text-gray-600 text-sm">5 (92 reviews)</span>
            </div>
          </div>

          <p className="text-gray-700 mb-4">Premier roofing specialists with over 20 years of experience. Experts in traditional and modern roofing solutions.</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 text-sm rounded-full flex items-center">
              <span className="mr-1">✓</span> Verified
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 text-sm rounded-full">Premium Partner</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 text-sm rounded-full">20+ Years Experience</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 text-sm rounded-full">Quick Response</span>
          </div>

          <div className="mb-4">
            <div className="text-gray-700 font-medium mb-2">Services:</div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full">Roof Repairs</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full">New Roof Installation</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full">Heritage Roofing</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full">Emergency Repairs</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full">Guttering</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full">Chimney Work</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <div className="text-gray-600 text-sm">Location:</div>
              <div className="font-medium">Berkshire</div>
            </div>
            <div>
              <div className="text-gray-600 text-sm">Response Time:</div>
              <div className="font-medium">Usually within 1 hour</div>
            </div>
            <div>
              <div className="text-gray-600 text-sm">Availability:</div>
              <div className="font-medium">24/7 for emergencies</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="tel:07990101324" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              07990101324
            </a>
            <button className="inline-flex items-center px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Visit Website
            </button>
          </div>
        </div>
      </div>

      {/* Roofing Information */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-4 gradient-text">Roofing in {location.name}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Common Roofing Styles:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              {location.roofingInfo.commonStyles.map((style) => (
                <li key={style}>{style}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Local Challenges:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {location.roofingInfo.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Local Regulations:</h3>
          <p className="text-gray-600">{location.roofingInfo.regulations}</p>
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-4 gradient-text">Areas We Cover</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {location.nearbyAreas.map((area) => (
            <div key={area} className="p-3 bg-gray-50 rounded-lg text-gray-600">
              {area}
            </div>
          ))}
        </div>
      </div>

      {/* Weather Considerations */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-4 gradient-text">Local Weather Considerations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Seasonal Maintenance Tips:</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Regular gutter cleaning due to local foliage</li>
              <li>Moss treatment common in this area</li>
              <li>Winter storm preparation essential</li>
              <li>Regular roof inspections recommended</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Weather Patterns:</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Average annual rainfall: Moderate to high</li>
              <li>Winter conditions: Occasional snow and frost</li>
              <li>Summer conditions: Warm with occasional heat waves</li>
              <li>Wind exposure: Moderate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
