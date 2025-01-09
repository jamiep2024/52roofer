import React from "react";
import { Location } from "../data/locations";

interface LocationDetailsProps {
  location: Location;
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
            <div className="flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
              <span className="font-medium">Coordinates:</span>
              <span>
                {location.coordinates.lat},{" "}
                {location.coordinates.lng}
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Services Offered
              </h3>
              <ul className="space-y-2">
                {location.serviceAreas.map((service: string) => (
                  <li
                    key={service}
                    className="flex items-center text-gray-600"
                  >
                    <span className="text-accent mr-2">•</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Service Information */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-accent/10 hover:shadow-xl transition-shadow">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Services in {location.name}
        </h2>
        <div className="space-y-6">
          <div className="p-6 bg-accent/5 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              About Our Services
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We provide professional roofing services throughout {location.name}.
              Our team is experienced in handling all types of roofing projects,
              from repairs to complete installations.
            </p>
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
              typically arriving within 2-4 hours for urgent repairs.
            </p>
          </div>

          <div className="p-6 bg-accent/5 rounded-xl hover:bg-accent/10 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              What roofing services do you offer in {location.name}?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We offer comprehensive roofing services including repairs,
              installations, maintenance, and more.
            </p>
          </div>

          <div className="p-6 bg-accent/5 rounded-xl hover:bg-accent/10 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Do you provide free roofing quotes in {location.name}?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Yes, we provide free, no-obligation roofing quotes throughout{" "}
              {location.name}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
