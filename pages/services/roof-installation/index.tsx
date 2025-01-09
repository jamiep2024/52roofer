import LocalBusinessSchema from "../../components/seo/LocalBusinessSchema";
import Layout from "../../components/layout/Layout";
import { NextSeo } from "next-seo";
import ServiceLayout from "../../components/ServiceLayout";

export default function RoofInstallationPage() {
  const title =
    "Professional Roof Installation Services | Expert Roofers | 52Roofer";
  const description =
    "Expert roof installation services from 52Roofer. High-quality materials, professional installation, and competitive pricing. Get a free quote for your new roof today.";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Roof Installation Services",
    provider: {
      "@type": "Organization",
      name: "52Roofer",
      url: "https://52roofer.com",
    },
    description:
      "Professional roof installation services including new builds and complete replacements",
    areaServed: "United Kingdom",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roof Installation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "New Roof Installation",
            description:
              "Complete new roof installation for residential and commercial properties",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roof Replacement",
            description:
              "Full roof replacement services with quality materials and expert installation",
          },
        },
      ],
    },
  };

  const businessInfo = {
    name: "52Roofer",
    county: "United Kingdom",
    postcodes: ["All Areas"],
  };

  return (
    <Layout>
      <NextSeo
        title={title}
        description={description}
        canonical="https://52roofer.com/services/roof-installation"
        openGraph={{
          url: "https://52roofer.com/services/roof-installation",
          title,
          description,
          images: [
            {
              url: "https://52roofer.com/images/completed-roof.jpg",
              width: 1200,
              height: 630,
              alt: "Professional Roof Installation Services",
            },
          ],
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <LocalBusinessSchema
        businessName="52Roofer"
        location={businessInfo}
        url="https://52roofer.com/services/roof-installation"
        image="https://52roofer.com/images/completed-roof.jpg"
      />

      <ServiceLayout
        heroImage="/images/completed-roof.jpg"
        heroTitle="Professional Roof Installation Services"
        heroDescription="Expert installation for all roof types with quality materials and workmanship"
        serviceName="Roof Installation"
      >
        <h2>Complete Roof Installation Solutions</h2>
        <p>
          Our professional roof installation service provides comprehensive
          solutions for both residential and commercial properties. We handle
          everything from new builds to complete replacements, ensuring your
          property is protected with a high-quality, durable roof.
        </p>

        <h2>Our Installation Process</h2>
        <ul>
          <li>Detailed initial assessment and consultation</li>
          <li>Custom design and material selection</li>
          <li>Professional installation by certified roofers</li>
          <li>Quality checks and final inspection</li>
          <li>Full cleanup and site restoration</li>
          <li>Warranty and maintenance guidance</li>
        </ul>

        <h2>Quality Materials</h2>
        <p>
          We use only the highest quality roofing materials from trusted
          manufacturers. Our selection includes:
        </p>
        <ul>
          <li>Traditional slate and tile</li>
          <li>Modern EPDM and GRP</li>
          <li>Energy-efficient options</li>
          <li>Environmentally friendly materials</li>
        </ul>
        <p>
          All materials are chosen for durability, performance, and aesthetic
          appeal.
        </p>

        <h2>Expert Installation Team</h2>
        <p>
          Our installation team consists of fully qualified and experienced
          roofers who:
        </p>
        <ul>
          <li>Follow all safety regulations</li>
          <li>Use industry-best practices</li>
          <li>Maintain clean and organized work sites</li>
          <li>Complete projects on schedule</li>
          <li>Provide excellent customer service</li>
        </ul>

        <h2>Comprehensive Service</h2>
        <p>Every installation includes:</p>
        <ul>
          <li>Free initial consultation</li>
          <li>Detailed written quote</li>
          <li>Project timeline</li>
          <li>Regular progress updates</li>
          <li>Final inspection</li>
          <li>Warranty documentation</li>
          <li>Aftercare support</li>
        </ul>

        <h2>Ready for Your New Roof?</h2>
        <p>
          Contact us today for a free consultation and quote. Our expert team is
          ready to help you choose the perfect roofing solution for your
          property.
        </p>
      </ServiceLayout>
    </Layout>
  );
}
