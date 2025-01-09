import LocalBusinessSchema from "../components/seo/LocalBusinessSchema";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import SEO from "../../components/seo/SEO";
import { locationData } from "../../data/locationData";

export default function Locations() {
  // Schema markup for locations page
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://52roofer.com/#organization",
    name: "52Roofer",
    url: "https://52roofer.com",
    logo: "https://52roofer.com/images/logo.png",
    description:
      "Professional roofing services across South England. Find trusted local roofers in Oxfordshire, Gloucestershire, Wiltshire, Berkshire, Hampshire, Surrey, Buckinghamshire, and West Sussex.",
    areaServed: [
      {
        "@type": "State",
        name: "Oxfordshire",
        containsPlace: [
          { "@type": "City", name: "Oxford" },
          { "@type": "City", name: "Banbury" },
          { "@type": "City", name: "Bicester" },
        ],
      },
      {
        "@type": "State",
        name: "Gloucestershire",
        containsPlace: [
          { "@type": "City", name: "Gloucester" },
          { "@type": "City", name: "Cheltenham" },
          { "@type": "City", name: "Stroud" },
        ],
      },
      {
        "@type": "State",
        name: "Wiltshire",
        containsPlace: [
          { "@type": "City", name: "Swindon" },
          { "@type": "City", name: "Salisbury" },
          { "@type": "City", name: "Chippenham" },
        ],
      },
      {
        "@type": "State",
        name: "Berkshire",
        containsPlace: [
          { "@type": "City", name: "Reading" },
          { "@type": "City", name: "Newbury" },
          { "@type": "City", name: "Windsor" },
        ],
      },
      {
        "@type": "State",
        name: "Hampshire",
        containsPlace: [
          { "@type": "City", name: "Southampton" },
          { "@type": "City", name: "Portsmouth" },
          { "@type": "City", name: "Winchester" },
        ],
      },
      {
        "@type": "State",
        name: "Surrey",
        containsPlace: [
          { "@type": "City", name: "Guildford" },
          { "@type": "City", name: "Woking" },
          { "@type": "City", name: "Farnham" },
        ],
      },
      {
        "@type": "State",
        name: "Buckinghamshire",
        containsPlace: [
          { "@type": "City", name: "Milton Keynes" },
          { "@type": "City", name: "High Wycombe" },
          { "@type": "City", name: "Aylesbury" },
        ],
      },
      {
        "@type": "State",
        name: "West Sussex",
        containsPlace: [
          { "@type": "City", name: "Crawley" },
          { "@type": "City", name: "Worthing" },
          { "@type": "City", name: "Horsham" },
        ],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Roof Repairs",
            description: "24/7 emergency roofing repairs across South England",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roof Installation",
            description: "Professional roof installation services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roof Maintenance",
            description: "Regular roof maintenance and inspections",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://52roofer.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: "https://52roofer.com/locations",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly can you respond to emergency roof repairs in Oxfordshire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our Oxfordshire roofers provide 24/7 emergency response, typically arriving within 2-4 hours for urgent repairs in Oxford, Banbury, Bicester, and surrounding areas.",
        },
      },
      {
        "@type": "Question",
        name: "What roofing services do you offer in Gloucestershire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Gloucestershire, we offer comprehensive roofing services including repairs, installations, maintenance, chimney work, and guttering across Gloucester, Cheltenham, Stroud, and nearby towns.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide free roofing quotes in Wiltshire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide free, no-obligation roofing quotes across Wiltshire including Swindon, Salisbury, and Chippenham. Our local roofers will assess your needs and provide detailed estimates.",
        },
      },
      {
        "@type": "Question",
        name: "What types of roofs do you work with in Berkshire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our Berkshire roofers are experienced with all roof types including slate, tile, flat roofs, and EPDM. We serve Reading, Newbury, Windsor, and all surrounding areas.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a roof replacement take in Hampshire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Hampshire, most residential roof replacements take 2-5 days, depending on size and complexity. We serve Southampton, Portsmouth, Winchester, and nearby areas with minimal disruption.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer roof maintenance services in Surrey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide regular roof maintenance services throughout Surrey, including Guildford, Woking, and Farnham. Our maintenance programs help prevent costly repairs and extend roof life.",
        },
      },
      {
        "@type": "Question",
        name: "Can you handle commercial roofing projects in West Sussex?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our West Sussex team handles both commercial and residential roofing projects in Crawley, Worthing, Horsham, and surrounding areas, with specialized crews for large-scale work.",
        },
      },
    ],
  };

  return (
    <Layout>
      <>
        <SEO
          title="Local Roofing Services in South England | Expert Roofers Near You | 52Roofer"
          description="Professional roofing services in Oxfordshire, Gloucestershire, Wiltshire, Berkshire, Hampshire, Surrey, Buckinghamshire, and West Sussex. 24/7 emergency repairs, installations & maintenance from trusted local roofers. Free quotes available."
          jsonLd={[organizationSchema, breadcrumbSchema, faqSchema]}
        />

        <div className="relative bg-white">
          {/* Hero Section */}
          <div className="relative bg-gray-900 h-[40vh] min-h-[400px]">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                className="h-full w-full object-cover opacity-40"
                src="/images/hero-bg.jpg"
                alt="52Roofer service areas"
                fill
                priority
                sizes="100vw"
                style={{ objectFit: "cover" }}
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
                  <div className="p-8 rounded-xl card-hover">
                    <h2 className="text-2xl font-bold mb-4">
                      {location.name}, {location.county}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Population: {location.population}
                    </p>
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2">
                        Common Roofing Styles:
                      </h3>
                      <ul className="list-disc list-inside">
                        {location.roofingInfo?.commonStyles
                          ?.slice(0, 3)
                          ?.map((style) => (
                            <li key={style} className="text-gray-600">
                              {style}
                            </li>
                          )) || (
                          <li className="text-gray-600">
                            Various roofing styles available
                          </li>
                        )}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Areas Covered:</h3>
                      <p className="text-gray-600">
                        {location.nearbyAreas?.slice(0, 3)?.join(", ") ||
                          "Surrounding areas"}
                        {location.nearbyAreas?.length > 3 && "..."}
                      </p>
                    </div>
                    <div className="mt-4 text-accent group-hover:text-accent/80 transition-colors">
                      Find roofers in {location.name} →
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Comprehensive Service Areas */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                All Service Areas
              </h2>
              <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                52Roofer provides comprehensive roofing services across South
                England. Our network of trusted local roofers offers emergency
                repairs, installations, and maintenance services 24/7. Each area
                is served by fully qualified and insured professionals.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Oxfordshire</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Oxford</li>
                    <li>Banbury</li>
                    <li>Bicester</li>
                    <li>Witney</li>
                    <li>Didcot</li>
                    <li>Abingdon</li>
                    <li>Thame</li>
                    <li>Henley-on-Thames</li>
                    <li>Wallingford</li>
                    <li>Chipping Norton</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Gloucestershire</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Gloucester</li>
                    <li>Cheltenham</li>
                    <li>Stroud</li>
                    <li>Cirencester</li>
                    <li>Tewkesbury</li>
                    <li>Dursley</li>
                    <li>Tetbury</li>
                    <li>Stow-on-the-Wold</li>
                    <li>Moreton-in-Marsh</li>
                    <li>Fairford</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Wiltshire</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Swindon</li>
                    <li>Salisbury</li>
                    <li>Chippenham</li>
                    <li>Trowbridge</li>
                    <li>Marlborough</li>
                    <li>Devizes</li>
                    <li>Warminster</li>
                    <li>Melksham</li>
                    <li>Calne</li>
                    <li>Corsham</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Berkshire</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Reading</li>
                    <li>Newbury</li>
                    <li>Windsor</li>
                    <li>Maidenhead</li>
                    <li>Bracknell</li>
                    <li>Slough</li>
                    <li>Wokingham</li>
                    <li>Thatcham</li>
                    <li>Hungerford</li>
                    <li>Ascot</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Hampshire</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Southampton</li>
                    <li>Portsmouth</li>
                    <li>Winchester</li>
                    <li>Basingstoke</li>
                    <li>Andover</li>
                    <li>Aldershot</li>
                    <li>Farnborough</li>
                    <li>Eastleigh</li>
                    <li>Fareham</li>
                    <li>Gosport</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Surrey</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Guildford</li>
                    <li>Woking</li>
                    <li>Farnham</li>
                    <li>Epsom</li>
                    <li>Redhill</li>
                    <li>Reigate</li>
                    <li>Staines</li>
                    <li>Dorking</li>
                    <li>Camberley</li>
                    <li>Leatherhead</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Buckinghamshire</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Milton Keynes</li>
                    <li>High Wycombe</li>
                    <li>Aylesbury</li>
                    <li>Amersham</li>
                    <li>Marlow</li>
                    <li>Buckingham</li>
                    <li>Chesham</li>
                    <li>Beaconsfield</li>
                    <li>Princes Risborough</li>
                    <li>Gerrards Cross</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">West Sussex</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Crawley</li>
                    <li>Worthing</li>
                    <li>Horsham</li>
                    <li>Chichester</li>
                    <li>Bognor Regis</li>
                    <li>Littlehampton</li>
                    <li>East Grinstead</li>
                    <li>Haywards Heath</li>
                    <li>Burgess Hill</li>
                    <li>Shoreham-by-Sea</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Need a Roofer in Your Area?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Whether you need emergency repairs, a new roof installation, or
                regular maintenance, our local roofers are here to help. All our
                services come with warranties and guarantees.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Service Coverage */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">
                Why Choose Our Local Roofers?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Local Expertise",
                    description:
                      "Our roofers have deep knowledge of local building styles and regulations.",
                  },
                  {
                    title: "Quick Response",
                    description:
                      "24/7 emergency services available across all our service areas.",
                  },
                  {
                    title: "Quality Guaranteed",
                    description:
                      "All work is backed by our satisfaction guarantee and proper insurance.",
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-gray-50 p-6 rounded-xl"
                  >
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
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
    </Layout>
  );
}
