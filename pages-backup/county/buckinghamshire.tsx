import Layout from "../../components/layout/Layout";
import SEO from "../../components/seo/SEO";
import CountyLandingPage from "../../components/CountyLandingPage";
import LocalBusinessSchema from "../../components/seo/LocalBusinessSchema";

export default function BuckinghamshirePage() {
  const businessInfo = {
    businessName: "52 Roofer",
    location: {
      name: "Buckinghamshire",
      county: "Buckinghamshire",
      postcodes: [
        "HP1",
        "HP2",
        "HP3",
        "HP4",
        "HP5",
        "HP6",
        "HP7",
        "HP8",
        "HP9",
        "HP10",
        "HP11",
        "HP12",
        "HP13",
        "HP14",
        "HP15",
        "HP16",
        "HP17",
        "HP18",
        "HP19",
        "HP20",
        "HP21",
        "HP22",
        "HP23",
        "HP27",
        "MK1",
        "MK2",
        "MK3",
        "MK4",
        "MK5",
        "MK6",
        "MK7",
        "MK8",
        "MK9",
        "MK10",
        "MK11",
        "MK12",
        "MK13",
        "MK14",
        "MK15",
        "MK16",
        "MK17",
        "MK18",
        "MK19",
        "SL0",
        "SL1",
        "SL2",
        "SL3",
        "SL4",
        "SL6",
        "SL7",
        "SL8",
        "SL9",
      ],
      coordinates: {
        latitude: 51.8161,
        longitude: -0.8123,
      },
    },
    url: "https://52roofer.co.uk/county/buckinghamshire",
    image: "https://52roofer.co.uk/images/roofer-at-work.jpg",
  };

  const mainTowns = [
    "Milton Keynes",
    "High Wycombe",
    "Aylesbury",
    "Amersham",
    "Chesham",
    "Marlow",
    "Beaconsfield",
    "Buckingham",
    "Princes Risborough",
    "Gerrards Cross",
    "Great Missenden",
    "Chalfont St Peter",
  ];

  const postcodes = [
    "HP1",
    "HP2",
    "HP3",
    "HP4",
    "HP5",
    "HP6",
    "HP7",
    "HP8",
    "HP9",
    "HP10",
    "HP11",
    "HP12",
    "HP13",
    "HP14",
    "HP15",
    "HP16",
    "HP17",
    "HP18",
    "HP19",
    "HP20",
    "HP21",
    "HP22",
    "HP23",
    "HP27",
    "MK1",
    "MK2",
    "MK3",
    "MK4",
    "MK5",
    "MK6",
    "MK7",
    "MK8",
    "MK9",
    "MK10",
    "MK11",
    "MK12",
    "MK13",
    "MK14",
    "MK15",
    "MK16",
    "MK17",
    "MK18",
    "MK19",
    "SL0",
    "SL1",
    "SL2",
    "SL3",
    "SL4",
    "SL6",
    "SL7",
    "SL8",
    "SL9",
  ];

  return (
    <Layout>
      <SEO
        title="Local Roofers in Buckinghamshire | Professional Roofing Services"
        description="Find trusted roofers in Buckinghamshire. Expert roofing services including repairs, installations, and maintenance across Milton Keynes, High Wycombe, and all Buckinghamshire areas."
      />
      <LocalBusinessSchema
        businessName={businessInfo.businessName}
        location={businessInfo.location}
        url={businessInfo.url}
        image={businessInfo.image}
      />
      <CountyLandingPage
        county="Buckinghamshire"
        mainTowns={mainTowns}
        postcodes={postcodes}
      />
    </Layout>
  );
}
