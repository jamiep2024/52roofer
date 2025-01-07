import { ServiceAreaType } from '../types/data'

interface ServiceAreaProps {
  serviceAreas: ServiceAreaType[]
}

export default function ServiceArea({ serviceAreas }: ServiceAreaProps) {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Areas We Serve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceAreas.map((area) => (
            <div key={area.name} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">{area.name}</h3>
              <a
                href={area.link}
                className="mt-2 text-sm text-pink-600 hover:text-pink-700"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
