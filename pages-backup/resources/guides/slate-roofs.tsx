import Layout from "../components/layout/Layout";
import SEO from "../../../components/seo/SEO";
import Link from "next/link";
import Image from "next/image";

export default function SlateRoofs() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Complete Guide to Slate Roofs: Installation, Maintenance, and Benefits",
    description:
      "Everything you need to know about slate roofs, from installation to maintenance. Learn about the benefits, costs, and longevity of slate roofing.",
    image: "https://52roofer.com/images/slate-roof-guide.jpg",
    author: {
      "@type": "Organization",
      name: "52Roofer",
    },
    publisher: {
      "@type": "Organization",
      name: "52Roofer",
      logo: {
        "@type": "ImageObject",
        url: "https://52roofer.com/images/logo.png",
      },
    },
    datePublished: "2023-12-09",
    dateModified: "2023-12-09",
  };

  return (
    <Layout>
      <>
        <SEO
          title="Complete Guide to Slate Roofs | Installation & Maintenance | 52Roofer"
          description="Expert guide to slate roofing: installation methods, maintenance tips, costs, and benefits. Learn everything about slate roofs from trusted UK roofing specialists."
          jsonLd={[articleSchema]}
        />

        <div className="relative bg-white">
          {/* Hero Section */}
          <div className="relative h-64 w-full mb-8">
            <Image
              src="/images/hero-bg.jpg"
              alt="Slate roof installation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <h2>Why Choose Slate Roofing?</h2>
              <p>
                Slate roofing has been a hallmark of quality construction for
                centuries, particularly in the UK where it adds distinctive
                character to both historic and modern buildings. Known for its
                natural beauty and exceptional durability, slate remains one of
                the most prestigious roofing materials available.
              </p>

              <h2>Benefits of Slate Roofs</h2>
              <ul>
                <li>
                  <strong>Longevity:</strong> Can last over 100 years with
                  proper maintenance
                </li>
                <li>
                  <strong>Durability:</strong> Excellent resistance to weather
                  and fire
                </li>
                <li>
                  <strong>Aesthetics:</strong> Timeless beauty that improves
                  property value
                </li>
                <li>
                  <strong>Environmental Impact:</strong> Natural material with
                  minimal processing required
                </li>
                <li>
                  <strong>Low Maintenance:</strong> Requires minimal upkeep when
                  properly installed
                </li>
              </ul>

              <h2>Types of Slate</h2>
              <p>
                Different regions produce slate with varying characteristics:
              </p>
              <ul>
                <li>
                  <strong>Welsh Slate:</strong> Known for its durability and
                  water resistance
                </li>
                <li>
                  <strong>Westmorland Green:</strong> Distinctive green coloring
                </li>
                <li>
                  <strong>Spanish Slate:</strong> Cost-effective alternative
                </li>
                <li>
                  <strong>Canadian Slate:</strong> Known for consistency in
                  color
                </li>
              </ul>

              <h2>Installation Process</h2>
              <p>
                Proper installation is crucial for the longevity of a slate
                roof. Key steps include:
              </p>
              <ol>
                <li>
                  Structural assessment to ensure the building can support
                  slate's weight
                </li>
                <li>Installation of proper underlayment and waterproofing</li>
                <li>Precise spacing and alignment of slate tiles</li>
                <li>
                  Proper flashing installation around chimneys and valleys
                </li>
                <li>Installation of ridge and hip caps</li>
              </ol>

              <h2>Maintenance Requirements</h2>
              <p>
                While slate roofs are low maintenance, regular inspections are
                essential:
              </p>
              <ul>
                <li>Annual professional inspection</li>
                <li>Check for cracked or slipped slates</li>
                <li>Clean gutters and check flashings</li>
                <li>Remove any moss or algae growth</li>
                <li>Inspect roof after severe weather</li>
              </ul>

              <h2>Common Issues and Solutions</h2>
              <p>Even with proper maintenance, some issues may arise:</p>
              <ul>
                <li>
                  <strong>Slipped Slates:</strong> Usually due to nail
                  deterioration
                </li>
                <li>
                  <strong>Cracked Slates:</strong> Can occur from impact or foot
                  traffic
                </li>
                <li>
                  <strong>Flashing Deterioration:</strong> May need replacement
                  after 20-30 years
                </li>
                <li>
                  <strong>Valley Problems:</strong> Often due to debris
                  accumulation
                </li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-xl my-8">
                <h2 className="text-xl font-bold mb-4">
                  Need Professional Advice?
                </h2>
                <p className="mb-4">
                  Our experienced roofers can help you with slate roof
                  installation, repair, or maintenance. Get expert advice
                  tailored to your specific needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Contact Us for a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
