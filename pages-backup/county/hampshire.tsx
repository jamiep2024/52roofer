import Layout from "../../components/layout/Layout";
import SEO from "../../components/seo/SEO";
import CountyLandingPage from "../../components/CountyLandingPage";
import LocalBusinessSchema from "../../components/seo/LocalBusinessSchema";

export default function HampshirePage() {
  const businessInfo = {
    businessName: "52 Roofer",
    location: {
      name: "Hampshire",
      county: "Hampshire",
      postcodes: [
        "SO14",
        "SO15",
        "SO16",
        "SO17",
        "SO18",
        "SO19",
        "SO20",
        "SO21",
        "SO22",
        "SO23",
        "SO24",
        "SO30",
        "SO31",
        "SO32",
        "SO40",
        "SO41",
        "SO42",
        "SO43",
        "SO45",
        "SO50",
        "SO51",
        "SO52",
        "SO53",
        "PO1",
        "PO2",
        "PO3",
        "PO4",
        "PO5",
        "PO6",
        "PO7",
        "PO8",
        "PO9",
        "PO10",
        "PO11",
        "PO12",
        "PO13",
        "PO14",
        "PO15",
        "PO16",
        "PO17",
      ],
      coordinates: {
        latitude: 51.0577,
        longitude: -1.3081,
      },
    },
    url: "https://52roofer.co.uk/county/hampshire",
    image: "https://52roofer.co.uk/images/roofer-at-work.jpg",
  };

  const mainTowns = [
    "Southampton",
    "Portsmouth",
    "Winchester",
    "Basingstoke",
    "Eastleigh",
    "Fareham",
    "Gosport",
    "Andover",
    "Farnborough",
    "Aldershot",
    "Havant",
    "Fleet",
  ];

  const postcodes = [
    "SO14",
    "SO15",
    "SO16",
    "SO17",
    "SO18",
    "SO19",
    "SO20",
    "SO21",
    "SO22",
    "SO23",
    "SO24",
    "SO30",
    "SO31",
    "SO32",
    "SO40",
    "SO41",
    "SO42",
    "SO43",
    "SO45",
    "SO50",
    "SO51",
    "SO52",
    "SO53",
    "PO1",
    "PO2",
    "PO3",
    "PO4",
    "PO5",
    "PO6",
    "PO7",
    "PO8",
    "PO9",
    "PO10",
    "PO11",
    "PO12",
    "PO13",
    "PO14",
    "PO15",
    "PO16",
    "PO17",
  ];

  return (
    <Layout>
      <SEO
        title="Expert Roofers in Hampshire | Quality Roofing Services"
        description="Find professional roofers in Hampshire. Comprehensive roofing services including repairs, installations, and maintenance across Southampton, Portsmouth, and all Hampshire areas."
      />
      <LocalBusinessSchema
        businessName={businessInfo.businessName}
        location={businessInfo.location}
        url={businessInfo.url}
        image={businessInfo.image}
      />
      <CountyLandingPage
        county="Hampshire"
        mainTowns={mainTowns}
        postcodes={postcodes}
      />
    </Layout>
  );
}
