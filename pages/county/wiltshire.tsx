import Layout from "../../components/layout/Layout";
import SEO from "../../components/seo/SEO";
import CountyLandingPage from "../../components/CountyLandingPage";
import LocalBusinessSchema from "../../components/seo/LocalBusinessSchema";

export default function WiltshirePage() {
  const businessInfo = {
    businessName: "52 Roofer",
    location: {
      name: "Wiltshire",
      county: "Wiltshire",
      postcodes: [
        "SN1",
        "SN2",
        "SN3",
        "SN4",
        "SN5",
        "SN6",
        "SN8",
        "SN9",
        "SN10",
        "SN11",
        "SN12",
        "SN13",
        "SN14",
        "SN15",
        "SN16",
        "SN25",
        "SN26",
        "BA12",
        "BA13",
        "BA14",
        "SP1",
        "SP2",
        "SP3",
        "SP4",
        "SP5",
      ],
      coordinates: {
        latitude: 51.0688,
        longitude: -1.7957,
      },
    },
    url: "https://52roofer.co.uk/county/wiltshire",
    image: "https://52roofer.co.uk/images/roofer-at-work.jpg",
  };

  const mainTowns = [
    "Swindon",
    "Salisbury",
    "Chippenham",
    "Trowbridge",
    "Warminster",
    "Melksham",
    "Devizes",
    "Marlborough",
    "Calne",
    "Westbury",
    "Bradford-on-Avon",
    "Corsham",
    "Amesbury",
  ];

  const postcodes = [
    "SN1",
    "SN2",
    "SN3",
    "SN4",
    "SN5",
    "SN6",
    "SN8",
    "SN9",
    "SN10",
    "SN11",
    "SN12",
    "SN13",
    "SN14",
    "SN15",
    "SN16",
    "SN25",
    "SN26",
    "BA12",
    "BA13",
    "BA14",
    "SP1",
    "SP2",
    "SP3",
    "SP4",
    "SP5",
  ];

  return (
    <Layout>
      <SEO
        title="Professional Roofers in Wiltshire | Local Roofing Services"
        description="Find experienced roofers in Wiltshire. Quality roofing services including repairs, installations, and maintenance across Swindon, Salisbury, and all Wiltshire areas."
      />
      <LocalBusinessSchema
        businessName={businessInfo.businessName}
        location={businessInfo.location}
        url={businessInfo.url}
        image={businessInfo.image}
      />
      <CountyLandingPage
        county="Wiltshire"
        mainTowns={mainTowns}
        postcodes={postcodes}
      />
    </Layout>
  );
}
