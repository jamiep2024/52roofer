import Layout from "../../components/layout/Layout";
import SEO from "../../components/seo/SEO";
import CountyLandingPage from "../../components/CountyLandingPage";
import LocalBusinessSchema from "../../components/seo/LocalBusinessSchema";

export default function SurreyPage() {
  const businessInfo = {
    businessName: "52 Roofer",
    location: {
      name: "Surrey",
      county: "Surrey",
      postcodes: [
        "GU1",
        "GU2",
        "GU3",
        "GU4",
        "GU5",
        "GU6",
        "GU7",
        "GU8",
        "GU9",
        "GU10",
        "GU15",
        "GU16",
        "GU21",
        "GU22",
        "GU23",
        "GU24",
        "GU25",
        "KT1",
        "KT2",
        "KT3",
        "KT4",
        "KT5",
        "KT6",
        "KT7",
        "KT8",
        "KT9",
        "KT10",
        "KT11",
        "KT12",
        "KT13",
        "KT14",
        "KT15",
        "KT16",
        "KT17",
        "KT18",
        "KT19",
        "KT20",
        "KT21",
        "KT22",
        "KT23",
        "KT24",
        "RH1",
        "RH2",
        "RH3",
        "RH4",
        "RH5",
        "RH6",
        "RH7",
        "RH8",
        "RH9",
        "RH10",
        "TW9",
        "TW10",
        "TW20",
      ],
      coordinates: {
        latitude: 51.3148,
        longitude: -0.56,
      },
    },
    url: "https://52roofer.co.uk/county/surrey",
    image: "https://52roofer.co.uk/images/roofer-at-work.jpg",
  };

  const mainTowns = [
    "Guildford",
    "Woking",
    "Epsom",
    "Camberley",
    "Redhill",
    "Reigate",
    "Staines",
    "Farnham",
    "Dorking",
    "Leatherhead",
    "Farnborough",
    "Godalming",
  ];

  const postcodes = [
    "GU1",
    "GU2",
    "GU3",
    "GU4",
    "GU5",
    "GU6",
    "GU7",
    "GU8",
    "GU9",
    "GU10",
    "GU15",
    "GU16",
    "GU21",
    "GU22",
    "GU23",
    "GU24",
    "GU25",
    "KT1",
    "KT2",
    "KT3",
    "KT4",
    "KT5",
    "KT6",
    "KT7",
    "KT8",
    "KT9",
    "KT10",
    "KT11",
    "KT12",
    "KT13",
    "KT14",
    "KT15",
    "KT16",
    "KT17",
    "KT18",
    "KT19",
    "KT20",
    "KT21",
    "KT22",
    "KT23",
    "KT24",
    "RH1",
    "RH2",
    "RH3",
    "RH4",
    "RH5",
    "RH6",
    "RH7",
    "RH8",
    "RH9",
    "RH10",
    "TW9",
    "TW10",
    "TW20",
  ];

  return (
    <Layout>
      <SEO
        title="Professional Roofers in Surrey | Local Roofing Services"
        description="Find experienced roofers in Surrey. Quality roofing services including repairs, installations, and maintenance across Guildford, Woking, and all Surrey areas."
      />
      <LocalBusinessSchema
        businessName={businessInfo.businessName}
        location={businessInfo.location}
        url={businessInfo.url}
        image={businessInfo.image}
      />
      <CountyLandingPage
        county="Surrey"
        mainTowns={mainTowns}
        postcodes={postcodes}
      />
    </Layout>
  );
}
