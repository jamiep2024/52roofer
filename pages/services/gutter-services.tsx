import Layout from "../../components/layout/Layout";
import SEO from "../../components/seo/SEO";
import ServiceLayout from "../../components/ServiceLayout";
import LocalBusinessSchema from "../../components/seo/LocalBusinessSchema";

export default function GutterServices() {
  const businessInfo = {
    businessName: "52 Roofer",
    location: {
      name: "Oxford",
      county: "Oxfordshire",
      postcodes: ["OX1", "OX2", "OX3", "OX4"],
      coordinates: {
        latitude: 51.752,
        longitude: -1.2577,
      },
    },
    url: "https://52roofer.co.uk/services/gutter-services",
    image: "https://52roofer.co.uk/images/roofer-at-work.jpg",
  };

  return (
    <Layout>
      <SEO
        title="Professional Gutter Services | Installation & Repairs"
        description="Expert gutter installation, repair, and maintenance services. Keep your property protected with our professional gutter solutions and regular maintenance."
      />
      <LocalBusinessSchema
        businessName={businessInfo.businessName}
        location={businessInfo.location}
        url={businessInfo.url}
        image={businessInfo.image}
      />
      <ServiceLayout
        heroTitle="Professional Gutter Services"
        heroDescription="Comprehensive gutter solutions including installation, repairs, and maintenance to protect your property from water damage."
        serviceName="Gutter Services"
      >
        <h2>Expert Gutter Services for Your Property</h2>
        <p>
          Properly functioning gutters are essential for protecting your
          property from water damage. Our professional gutter services ensure
          your drainage system works effectively year-round, preventing costly
          water damage and maintaining your property's structural integrity.
        </p>

        <h3>Our Gutter Services Include:</h3>
        <ul>
          <li>Gutter Installation</li>
          <li>Gutter Repairs</li>
          <li>Gutter Cleaning</li>
          <li>Downspout Installation</li>
          <li>Leaf Guard Installation</li>
          <li>Regular Maintenance</li>
        </ul>

        <h3>Why Choose Our Gutter Services?</h3>
        <ul>
          <li>Experienced gutter specialists</li>
          <li>High-quality materials</li>
          <li>Comprehensive service options</li>
          <li>Preventative maintenance plans</li>
          <li>Guaranteed workmanship</li>
          <li>Competitive pricing</li>
        </ul>

        <h3>Common Gutter Issues We Address</h3>
        <ul>
          <li>Blocked gutters and downspouts</li>
          <li>Leaking joints and seams</li>
          <li>Sagging gutters</li>
          <li>Improper drainage</li>
          <li>Damaged sections</li>
          <li>Overflow problems</li>
        </ul>

        <h3>Benefits of Professional Gutter Maintenance</h3>
        <ul>
          <li>Prevents water damage to foundations</li>
          <li>Protects exterior walls and paintwork</li>
          <li>Prevents basement flooding</li>
          <li>Preserves landscaping</li>
          <li>Extends roof lifespan</li>
          <li>Prevents pest infestations</li>
        </ul>
      </ServiceLayout>
    </Layout>
  );
}
