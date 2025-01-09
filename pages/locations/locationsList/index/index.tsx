import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function LocationsList() {
  const locations = {
    oxford: [
      { name: 'Headington', path: '/roofers-in-headington-oxford' },
      { name: 'Cowley', path: '/roofers-in-cowley-oxford' },
      { name: 'Summertown', path: '/roofers-in-summertown-oxford' },
      { name: 'Marston', path: '/roofers-in-marston-oxford' },
      { name: 'Blackbird Leys', path: '/roofers-in-blackbird-oxford' },
      { name: 'Botley', path: '/roofers-in-botley-oxford' },
      { name: 'Iffley', path: '/roofers-in-iffley-oxford' },
      { name: 'Wolvercote', path: '/roofers-in-wolvercote-oxford' },
      { name: 'Jericho', path: '/roofers-in-jericho-oxford' },
      { name: 'Rose Hill', path: '/roofers-in-rose-hill-oxford' },
    ],
    wiltshire: [
      { name: 'Trowbridge', path: '/roofers-in-trowbridge-wiltshire' },
      { name: 'Salisbury', path: '/roofers-in-salisbury-wiltshire' },
      { name: 'Chippenham', path: '/roofers-in-chippenham-wiltshire' },
      { name: 'Melksham', path: '/roofers-in-melksham-wiltshire' },
      { name: 'Devizes', path: '/roofers-in-devizes-wiltshire' },
      { name: 'Warminster', path: '/roofers-in-warminster-wiltshire' },
      { name: 'Bradford-on-Avon', path: '/roofers-in-bradford-on-avon-wiltshire' },
      { name: 'Marlborough', path: '/roofers-in-marlborough-wiltshire' },
      { name: 'Westbury', path: '/roofers-in-westbury-wiltshire' },
    ],
  };

  return (
<Layout>
<LocalBusinessSchema />
<SEO title="" description="" />
    <>
      <Head>
        <title>Our Service Areas | 52 Roofer</title>
        <meta 
          name="description" 
          content="Find expert roofing services in your area. We cover Oxford, Wiltshire and surrounding areas. 24/7 emergency service available."
        />
        <link rel="canonical" href="https://52roofer.com/locations" />
        <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://52roofer.com/locations/locationsList#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/locations/locationsList",
      "image": "https://52roofer.com/images/hero-bg.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Oxford",
        "addressRegion": "Oxfordshire",
        "addressCountry": "GB"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://52roofer.com/locations/locationsList#webpage",
      "url": "https://52roofer.com/locations/locationsList",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/locations/locationsList#faq",
      "mainEntity": []
    }
  ]
}</script>
</Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
            Our Service Areas
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Oxford Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Oxford Areas
              </h2>
              <ul className="space-y-4">
                {locations.oxford.map((location) => (
                  <li key={location.path}>
                    <
                      <a className="text-blue-600 hover:text-blue-800 text-lg">
                        Roofers in {location.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Wiltshire Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Wiltshire Areas
              </h2>
              <ul className="space-y-4">
                {locations.wiltshire.map((location) => (
                  <li key={location.path}>
                    <
                      <a className="text-blue-600 hover:text-blue-800 text-lg">
                        Roofers in {location.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
</Layout>
  );
};
