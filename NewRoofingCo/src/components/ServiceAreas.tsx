import React from 'react';

interface ServiceAreasProps {
  areas: string[];
}

const ServiceAreas: React.FC<ServiceAreasProps> = ({ areas }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Areas We Serve</h3>
      <ul className="columns-2 gap-8">
        {areas.map((area) => (
          <li key={area} className="mb-2">
            {area}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceAreas;
