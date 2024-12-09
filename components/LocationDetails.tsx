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

      {/* Frequently Asked Questions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6 gradient-text">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">How quickly can you respond to emergency roof repairs in {location.name}?</h3>
            <p className="text-gray-600">
              Our {location.name} roofers provide 24/7 emergency response, typically arriving within 2-4 hours for urgent repairs in {location.name} and surrounding areas like {location.nearbyAreas.slice(0, 3).join(", ")}.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">What roofing services do you offer in {location.county}?</h3>
            <p className="text-gray-600">
              In {location.county}, we offer comprehensive roofing services including repairs, installations, maintenance, chimney work, and guttering. Our services are available across {location.name} and nearby areas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Do you provide free roofing quotes in {location.name}?</h3>
            <p className="text-gray-600">
              Yes, we provide free, no-obligation roofing quotes throughout {location.name} and surrounding areas. Our local roofers will assess your needs and provide detailed estimates for any roofing work required.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">What types of roofs do you work with in {location.name}?</h3>
            <p className="text-gray-600">
              Our {location.name} roofers are experienced with all roof types including {location.roofingInfo.commonStyles.join(", ")}. We serve {location.name} and all surrounding areas with expert roofing solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
