import Layout from "../../components/layout/Layout";
import SEO from "../../components/seo/SEO";
import CountyLandingPage from "../../components/CountyLandingPage";
import LocalBusinessSchema from "../../components/seo/LocalBusinessSchema";

export default function BerkshirePage() {
  const businessInfo = {
    businessName: "52 Roofer",
    location: {
      name: "Berkshire",
      county: "Berkshire",
      postcodes: [
        "RG1",
        "RG2",
        "RG4",
        "RG5",
        "RG6",
        "RG7",
        "RG8",
        "RG9",
        "RG10",
        "RG12",
        "RG14",
      ],
      coordinates: {
        latitude: 51.4543,
        longitude: -1.0107,
      },
    },
    url: "https://52roofer.co.uk/county/berkshire",
    image: "https://52roofer.co.uk/images/roofer-at-work.jpg",
  };

  const mainTowns = [
    "Reading",
    "Slough",
    "Bracknell",
    "Maidenhead",
    "Newbury",
    "Windsor",
    "Wokingham",
    "Thatcham",
    "Hungerford",
    "Ascot",
  ];

  const postcodes = [
    "RG1",
    "RG2",
    "RG4",
    "RG5",
    "RG6",
    "RG7",
    "RG8",
    "RG9",
    "RG10",
    "RG12",
    "RG14",
  ];

  return (
    <Layout>
      <SEO
        title="Trusted Roofers in Berkshire | Local Roofing Services"
        description="Find reliable and experienced roofers in Berkshire. Professional roofing services including repairs, installations, and maintenance across Berkshire."
      />
      <LocalBusinessSchema
        businessName={businessInfo.businessName}
        location={businessInfo.location}
        url={businessInfo.url}
        image={businessInfo.image}
      />
      <CountyLandingPage
        county="Berkshire"
        mainTowns={mainTowns}
        postcodes={postcodes}
      />
    </Layout>
  );
}
