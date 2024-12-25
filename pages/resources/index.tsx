import Layout from "../components/layout/Layout";
import Link from "next/link";
import Image from "next/image";
import SEO from "../../components/seo/SEO";
import HeroImage from "../../components/HeroImage";

export default function Resources() {
  const resourceSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often should I inspect my roof?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional roof inspections should be conducted twice a year, typically in spring and autumn. However, you should also check your roof after severe weather events.",
        },
      },
    ],
  };

  const resourceGuides = [
    {
      title: "Slate Roofs Guide",
      description: "Everything you need to know about slate roofs",
      link: "/resources/guides/slate-roofs",
      image: "/images/hero-bg.jpg",
    },
    {
      title: "Roof Maintenance Guide",
      description: "Essential maintenance tips for your roof",
      link: "/blog/complete-guide-to-roof-maintenance",
      image: "/images/hero-bg.jpg",
    },
    {
      title: "Emergency Repairs Guide",
      description: "What to do in roofing emergencies",
      link: "/services/emergency-roof-repair",
      image: "/images/hero-bg.jpg",
    },
  ];

  return (
    <Layout>
      <>
        <SEO
          title="Roofing Resources & Guides | Expert Roofing Tips | 52Roofer"
          description="Comprehensive roofing guides, maintenance tips, and expert advice. Learn about roof types, repairs, maintenance, and when to call a professional roofer."
          jsonLd={[resourceSchema]}
        />

        <div className="relative bg-white">
          {/* Hero Section */}
          <div className="relative bg-gray-900 h-[40vh] min-h-[400px]">
            <HeroImage
              src="/images/hero-bg.jpg"
              alt={`Hero Image for Resources Page`}
            />
            <div className="absolute inset-0 hero-gradient opacity-60"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow">
                  Roofing Resources & Guides
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
                  Expert advice and comprehensive guides for all your roofing
                  needs
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
                <h2 className="text-2xl font-bold mb-4 gradient-text">
                  Roof Types Guide
                </h2>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/resources/guides/slate-roofs"
                      className="block hover:bg-gray-50 p-3 rounded-lg transition-colors"
                    >
                      <h3 className="font-semibold text-lg mb-1">
                        Slate Roofs
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Understanding installation, maintenance, and benefits of
                        slate roofing
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/choosing-right-roofing-material"
                      className="block hover:bg-gray-50 p-3 rounded-lg transition-colors"
                    >
                      <h3 className="font-semibold text-lg mb-1">
                        Roofing Materials
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Complete guide to different roofing materials and their
                        benefits
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/energy-efficient-roofing"
                      className="block hover:bg-gray-50 p-3 rounded-lg transition-colors"
                    >
                      <h3 className="font-semibold text-lg mb-1">
                        Energy Efficient Roofing
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Modern roofing solutions for better energy efficiency
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Maintenance Tips */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4 gradient-text">
                  Maintenance Tips
                </h2>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/blog/complete-guide-to-roof-maintenance"
                      className="block hover:bg-gray-50 p-3 rounded-lg transition-colors"
                    >
                      <h3 className="font-semibold text-lg mb-1">
                        Seasonal Roof Checks
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Essential maintenance tasks for each season
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/professional-roof-inspection-guide"
                      className="block hover:bg-gray-50 p-3 rounded-lg transition-colors"
                    >
                      <h3 className="font-semibold text-lg mb-1">
                        Professional Inspections
                      </h3>
                      <p className="text-gray-600 text-sm">
                        What to expect during a professional roof inspection
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/ultimate-roof-ventilation-guide"
                      className="block hover:bg-gray-50 p-3 rounded-lg transition-colors"
                    >
                      <h3 className="font-semibold text-lg mb-1">
                        Roof Ventilation
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Understanding and maintaining proper roof ventilation
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Emergency Repairs */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4 gradient-text">
                  Emergency Repairs
                </h2>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/blog/signs-you-need-roof-replacement"
                      className="block hover:bg-gray-50 p-3 rounded-lg transition-colors"
                    >
                      <h3 className="font-semibold text-lg mb-1">
                        Warning Signs
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Identify when your roof needs immediate attention
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/uk-weather-roofing-problems"
                      className="block hover:bg-gray-50 p-3 rounded-lg transition-colors"
                    >
                      <h3 className="font-semibold text-lg mb-1">
                        Weather Damage
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Dealing with UK weather-related roofing issues
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/emergency-roof-repair"
                      className="block hover:bg-gray-50 p-3 rounded-lg transition-colors"
                    >
                      <h3 className="font-semibold text-lg mb-1">
                        Emergency Services
                      </h3>
                      <p className="text-gray-600 text-sm">
                        24/7 emergency roofing repair services
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Featured Articles */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 gradient-text text-center">
                Featured Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resourceGuides.map((guide, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-xl shadow-sm overflow-hidden"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                      <p className="text-gray-600 mb-4">{guide.description}</p>
                      <Link
                        href={guide.link}
                        className="text-accent hover:text-accent/80"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
