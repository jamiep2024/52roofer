import Layout from "../../components/layout/Layout";
import SEO from "../../components/seo/SEO";
import CountyLandingPage from "../../components/CountyLandingPage";
import LocalBusinessSchema from "../../components/seo/LocalBusinessSchema";

export default function GloucestershirePage() {
  const businessInfo = {
    businessName: "52 Roofer",
    location: {
      name: "Gloucestershire",
      county: "Gloucestershire",
      postcodes: [
        "GL1",
        "GL2",
        "GL3",
        "GL4",
        "GL5",
        "GL6",
        "GL7",
        "GL8",
        "GL9",
        "GL10",
        "GL11",
        "GL12",
        "GL13",
        "GL14",
        "GL15",
        "GL16",
        "GL17",
        "GL18",
        "GL19",
        "GL20",
        "GL50",
        "GL51",
        "GL52",
        "GL53",
        "GL54",
        "GL55",
        "GL56",
      ],
      coordinates: {
        latitude: 51.8642,
        longitude: -2.238,
      },
    },
    url: "https://52roofer.co.uk/county/gloucestershire",
    image: "https://52roofer.co.uk/images/roofer-at-work.jpg",
  };

  const mainTowns = [
    "Gloucester",
    "Cheltenham",
    "Stroud",
    "Cirencester",
    "Tewkesbury",
    "Dursley",
    "Stow-on-the-Wold",
    "Tetbury",
    "Moreton-in-Marsh",
    "Fairford",
    "Newent",
    "Winchcombe",
  ];

  const postcodes = [
    "GL1",
    "GL2",
    "GL3",
    "GL4",
    "GL5",
    "GL6",
    "GL7",
    "GL8",
    "GL9",
    "GL10",
    "GL11",
    "GL12",
    "GL13",
    "GL14",
    "GL15",
    "GL16",
    "GL17",
    "GL18",
    "GL19",
    "GL20",
    "GL50",
    "GL51",
    "GL52",
    "GL53",
    "GL54",
    "GL55",
    "GL56",
  ];

  return (
    <Layout>
      <SEO
        title="Reliable Roofers in Gloucestershire | Expert Roofing Services"
        description="Find trusted roofers in Gloucestershire. Professional roofing services including repairs, installations, and maintenance across Gloucester, Cheltenham, and surrounding areas."
      />
      <LocalBusinessSchema
        businessName={businessInfo.businessName}
        location={businessInfo.location}
        url={businessInfo.url}
        image={businessInfo.image}
      />
      <CountyLandingPage
        county="Gloucestershire"
        mainTowns={mainTowns}
        postcodes={postcodes}
      />
    </Layout>
  );
}
