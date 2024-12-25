import Layout from "../../components/layout/Layout";
import SEO from "../../components/seo/SEO";
import CountyLandingPage from "../../components/CountyLandingPage";
import LocalBusinessSchema from "../../components/seo/LocalBusinessSchema";

export default function OxfordshirePage() {
  const businessInfo = {
    businessName: "52 Roofer",
    location: {
      name: "Oxfordshire",
      county: "Oxfordshire",
      postcodes: [
        "OX1",
        "OX2",
        "OX3",
        "OX4",
        "OX5",
        "OX9",
        "OX10",
        "OX11",
        "OX12",
        "OX13",
        "OX14",
        "OX15",
        "OX16",
        "OX20",
        "OX25",
        "OX26",
        "OX27",
        "OX28",
        "OX29",
        "OX33",
        "OX39",
        "OX44",
        "OX49",
      ],
      coordinates: {
        latitude: 51.752,
        longitude: -1.2577,
      },
    },
    url: "https://52roofer.co.uk/county/oxfordshire",
    image: "https://52roofer.co.uk/images/roofer-at-work.jpg",
  };

  const mainTowns = [
    "Oxford",
    "Banbury",
    "Bicester",
    "Witney",
    "Abingdon",
    "Didcot",
    "Carterton",
    "Thame",
    "Wallingford",
    "Wantage",
    "Henley-on-Thames",
    "Chipping Norton",
  ];

  const postcodes = [
    "OX1",
    "OX2",
    "OX3",
    "OX4",
    "OX5",
    "OX9",
    "OX10",
    "OX11",
    "OX12",
    "OX13",
    "OX14",
    "OX15",
    "OX16",
    "OX20",
    "OX25",
    "OX26",
    "OX27",
    "OX28",
    "OX29",
    "OX33",
    "OX39",
    "OX44",
    "OX49",
  ];

  return (
    <Layout>
      <SEO
        title="Expert Roofers in Oxfordshire | Professional Roofing Services"
        description="Find trusted local roofers in Oxfordshire. Comprehensive roofing services including repairs, installations, and maintenance across Oxford and surrounding areas."
      />
      <LocalBusinessSchema
        businessName={businessInfo.businessName}
        location={businessInfo.location}
        url={businessInfo.url}
        image={businessInfo.image}
      />
      <CountyLandingPage
        county="Oxfordshire"
        mainTowns={mainTowns}
        postcodes={postcodes}
      />
    </Layout>
  );
}
