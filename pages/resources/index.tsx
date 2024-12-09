import Link from 'next/link';
import SEO from '../../components/seo/SEO';

export default function Resources() {
  const resourceSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often should I inspect my roof?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional roof inspections should be conducted twice a year, typically in spring and autumn. However, you should also check your roof after severe weather events."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Roofing Resources & Guides | Expert Roofing Tips | 52Roofer"
        description="Comprehensive roofing guides, maintenance tips, and expert advice. Learn about roof types, repairs, maintenance, and when to call a professional roofer."
        jsonLd={[resourceSchema]}
      />

      <div className="relative bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900 h-[40vh] min-h-[400px]">
          <div className="absolute inset-0 overflow-hidden">
            <img
              className="h-full w-full object-cover opacity-40"
              src="/images/hero-bg.jpg"
              alt="Roofing resources and guides"
            />
            <div className="absolute inset-0 hero-gradient opacity-60"></div>
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow">
                Roofing Resources & Guides
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
                Expert advice and comprehensive guides for all your roofing needs
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Resource Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Roof Types Guide */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Roof Types Guide</h2>
              <ul className="space-y-4">
                <li>
                  <Link href="/resources/guides/slate-roofs" className="block hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <h3 className="font-semibold text-lg mb-1">Slate Roofs</h3>
                    <p className="text-gray-600 text-sm">Understanding installation, maintenance, and benefits of slate roofing</p>
                  </Link>
                </li>
                <li>
                  <Link href="/resources/guides/tile-roofs" className="block hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <h3 className="font-semibold text-lg mb-1">Tile Roofs</h3>
                    <p className="text-gray-600 text-sm">Complete guide to clay and concrete tile roofing systems</p>
                  </Link>
                </li>
                <li>
                  <Link href="/resources/guides/flat-roofs" className="block hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <h3 className="font-semibold text-lg mb-1">Flat Roofs</h3>
                    <p className="text-gray-600 text-sm">Everything about EPDM, felt, and modern flat roofing solutions</p>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Maintenance Tips */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Maintenance Tips</h2>
              <ul className="space-y-4">
                <li>
                  <Link href="/resources/maintenance/seasonal-checks" className="block hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <h3 className="font-semibold text-lg mb-1">Seasonal Roof Checks</h3>
                    <p className="text-gray-600 text-sm">Essential maintenance tasks for each season</p>
                  </Link>
                </li>
                <li>
                  <Link href="/resources/maintenance/gutter-care" className="block hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <h3 className="font-semibold text-lg mb-1">Gutter Maintenance</h3>
                    <p className="text-gray-600 text-sm">Keep your gutters clean and functioning properly</p>
                  </Link>
                </li>
                <li>
                  <Link href="/resources/maintenance/moss-removal" className="block hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <h3 className="font-semibold text-lg mb-1">Moss Treatment</h3>
                    <p className="text-gray-600 text-sm">Preventing and removing moss from your roof</p>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Emergency Repairs */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Emergency Repairs</h2>
              <ul className="space-y-4">
                <li>
                  <Link href="/resources/emergency/leak-detection" className="block hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <h3 className="font-semibold text-lg mb-1">Leak Detection</h3>
                    <p className="text-gray-600 text-sm">How to identify and temporarily fix roof leaks</p>
                  </Link>
                </li>
                <li>
                  <Link href="/resources/emergency/storm-damage" className="block hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <h3 className="font-semibold text-lg mb-1">Storm Damage</h3>
                    <p className="text-gray-600 text-sm">What to do after storm damage to your roof</p>
                  </Link>
                </li>
                <li>
                  <Link href="/resources/emergency/temporary-repairs" className="block hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <h3 className="font-semibold text-lg mb-1">Temporary Fixes</h3>
                    <p className="text-gray-600 text-sm">Emergency measures until professional help arrives</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Featured Articles */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img src="/images/roof-inspection.jpg" alt="Roof inspection guide" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Complete Roof Inspection Guide</h3>
                  <p className="text-gray-600 mb-4">Learn what professionals look for during a roof inspection and how to maintain your roof's integrity.</p>
                  <Link href="/resources/guides/roof-inspection" className="text-accent hover:text-accent/80">
                    Read More →
                  </Link>
                </div>
              </article>

              <article className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img src="/images/energy-efficiency.jpg" alt="Energy efficient roofing" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Energy Efficient Roofing</h3>
                  <p className="text-gray-600 mb-4">Discover how your roof can help reduce energy costs and improve your home's efficiency.</p>
                  <Link href="/resources/guides/energy-efficiency" className="text-accent hover:text-accent/80">
                    Read More →
                  </Link>
                </div>
              </article>

              <article className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img src="/images/roofing-materials.jpg" alt="Roofing materials guide" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Choosing Roofing Materials</h3>
                  <p className="text-gray-600 mb-4">Compare different roofing materials to find the best option for your home and budget.</p>
                  <Link href="/resources/guides/materials-comparison" className="text-accent hover:text-accent/80">
                    Read More →
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
