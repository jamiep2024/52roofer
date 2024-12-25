import React from "react";
import { LocationData } from "../types/location";

interface LocationDetailsProps {
  location: LocationData;
}

const LocationDetails: React.FC<LocationDetailsProps> = ({ location }) => {
  return (
    <div className="space-y-8">
      {/* Location Overview */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-accent/10 hover:shadow-xl transition-shadow">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          About {location.name}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              {location.history}
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
              <span className="font-medium">Coordinates:</span>
              <span>
                {location.coordinates.latitude},{" "}
                {location.coordinates.longitude}
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Notable Landmarks
              </h3>
              <ul className="space-y-2">
                {location.landmarks.map((landmark) => (
                  <li
                    key={landmark}
                    className="flex items-center text-gray-600"
                  >
                    <span className="text-accent mr-2">•</span>
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Postal Codes
              </h3>
              <div className="flex flex-wrap gap-2">
                {location.postalCodes.map((code) => (
                  <span
                    key={code}
                    className="bg-accent/5 text-gray-600 px-3 py-1 rounded-full text-sm"
                  >
                    {code}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roofing Information */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-accent/10 hover:shadow-xl transition-shadow">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Roofing in {location.name}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Common Roofing Styles
            </h3>
            <ul className="space-y-3">
              {location.roofingInfo.commonStyles.map((style) => (
                <li key={style} className="flex items-center text-gray-600">
                  <span className="text-accent mr-2">•</span>
                  {style}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Local Challenges
            </h3>
            <ul className="space-y-3">
              {location.roofingInfo.challenges.map((challenge) => (
                <li key={challenge} className="flex items-center text-gray-600">
                  <span className="text-accent mr-2">•</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 p-6 bg-accent/5 rounded-xl">
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Local Regulations
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {location.roofingInfo.regulations}
          </p>
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-accent/10 hover:shadow-xl transition-shadow">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Areas We Cover
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {location.nearbyAreas.map((area) => (
            <div
              key={area}
              className="p-4 bg-accent/5 rounded-xl text-gray-700 hover:bg-accent/10 transition-colors"
            >
              {area}
            </div>
          ))}
        </div>
      </div>

      {/* Weather Considerations */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-accent/10 hover:shadow-xl transition-shadow">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Local Weather Considerations
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Seasonal Maintenance Tips
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Regular gutter cleaning due to local foliage
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Moss treatment common in this area
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Winter storm preparation essential
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Regular roof inspections recommended
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Weather Patterns
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Average annual rainfall: Moderate to high
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Winter conditions: Occasional snow and frost
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Summer conditions: Warm with occasional heat waves
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-accent mr-2">•</span>
                Wind exposure: Moderate
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-accent/10 hover:shadow-xl transition-shadow">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="p-6 bg-accent/5 rounded-xl hover:bg-accent/10 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              How quickly can you respond to emergency roof repairs in{" "}
              {location.name}?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our {location.name} roofers provide 24/7 emergency response,
              typically arriving within 2-4 hours for urgent repairs in{" "}
              {location.name} and surrounding areas like{" "}
              {location.nearbyAreas.slice(0, 3).join(", ")}.
            </p>
          </div>

          <div className="p-6 bg-accent/5 rounded-xl hover:bg-accent/10 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              What roofing services do you offer in {location.county}?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              In {location.county}, we offer comprehensive roofing services
              including repairs, installations, maintenance, chimney work, and
              guttering. Our services are available across {location.name} and
              nearby areas.
            </p>
          </div>

          <div className="p-6 bg-accent/5 rounded-xl hover:bg-accent/10 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Do you provide free roofing quotes in {location.name}?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Yes, we provide free, no-obligation roofing quotes throughout{" "}
              {location.name} and surrounding areas. Our local roofers will
              assess your needs and provide detailed estimates for any roofing
              work required.
            </p>
          </div>

          <div className="p-6 bg-accent/5 rounded-xl hover:bg-accent/10 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              What types of roofs do you work with in {location.name}?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our {location.name} roofers are experienced with all roof types
              including {location.roofingInfo.commonStyles.join(", ")}. We serve{" "}
              {location.name} and all surrounding areas with expert roofing
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
