import Link from 'next/link';
import SEO from '../../components/seo/SEO';
import { locationData } from '../../data/locationData';

export default function Locations() {
  // Schema markup for locations page
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://52roofer.com/#organization",
    "name": "52Roofer",
    "url": "https://52roofer.com",
    "logo": "https://52roofer.com/images/logo.png",
    "description": "Professional roofing services across South England. Find trusted local roofers in Oxfordshire, Gloucestershire, Wiltshire, Berkshire, Hampshire, Surrey, Buckinghamshire, and West Sussex."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://52roofer.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://52roofer.com/locations"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Local Roofing Services | Coverage Areas | 52Roofer"
        description="Find professional roofing services in your area. We cover Oxfordshire, Gloucestershire, Wiltshire, Berkshire, Hampshire, Surrey, Buckinghamshire, and West Sussex. Local experts for all your roofing needs."
        jsonLd={[organizationSchema, breadcrumbSchema]}
      />

      <div className="relative bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900 h-[40vh] min-h-[400px]">
          <div className="absolute inset-0 overflow-hidden">
            <img
              className="h-full w-full object-cover opacity-40"
              src="/images/hero-bg.jpg"
              alt="52Roofer service areas"
            />
            <div className="absolute inset-0 hero-gradient opacity-60"></div>
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow">
                Our Service Areas
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
                Professional roofing services across South England
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Counties Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {Object.entries(locationData).map(([key, location]) => (
              <Link
                key={key}
                href={`/location/${key}`}
                className="block group"
              >
                <div className="glass-effect p-8 rounded-xl card-hover">
                  <h2 className="text-2xl font-bold mb-4 gradient-text">
                    {location.name}, {location.county}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Population: {location.population}
                  </p>
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Common Roofing Styles:</h3>
                    <ul className="list-disc list-inside">
                      {location.roofingInfo.commonStyles.slice(0, 3).map((style) => (
                        <li key={style} className="text-gray-600">{style}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Areas Covered:</h3>
                    <p className="text-gray-600">
                      {location.nearbyAreas.slice(0, 3).join(", ")}
                      {location.nearbyAreas.length > 3 && "..."}
                    </p>
                  </div>
                  <div className="mt-4 text-accent group-hover:text-accent/80 transition-colors">
                    Find roofers in {location.name} →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Service Coverage */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Why Choose Our Local Roofers?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Local Expertise",
                  description: "Our roofers have deep knowledge of local building styles and regulations."
                },
                {
                  title: "Quick Response",
                  description: "24/7 emergency services available across all our service areas."
                },
                {
                  title: "Quality Guaranteed",
                  description: "All work is backed by our satisfaction guarantee and proper insurance."
                }
              ].map((feature) => (
                <div key={feature.title} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Find a Local Roofer?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get free quotes from trusted professionals in your area
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105"
            >
              Get Free Quotes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
