import Layout from "../../components/layout/Layout";
import SEO from "../../components/seo/SEO";
import CountyLandingPage from "../../components/CountyLandingPage";
import LocalBusinessSchema from "../../components/seo/LocalBusinessSchema";

export default function WestSussexPage() {
  const businessInfo = {
    businessName: "52 Roofer",
    location: {
      name: "West Sussex",
      county: "West Sussex",
      postcodes: [
        "BN11",
        "BN12",
        "BN13",
        "BN14",
        "BN15",
        "BN16",
        "BN17",
        "BN18",
        "BN41",
        "BN42",
        "BN43",
        "BN44",
        "BN99",
        "PO18",
        "PO19",
        "PO20",
        "PO21",
        "PO22",
        "RH10",
        "RH11",
        "RH12",
        "RH13",
        "RH14",
        "RH15",
        "RH16",
        "RH17",
        "RH18",
        "RH19",
        "RH20",
      ],
      coordinates: {
        latitude: 50.836,
        longitude: -0.7806,
      },
    },
    url: "https://52roofer.co.uk/county/west-sussex",
    image: "https://52roofer.co.uk/images/roofer-at-work.jpg",
  };

  const mainTowns = [
    "Crawley",
    "Worthing",
    "Horsham",
    "Bognor Regis",
    "Littlehampton",
    "Chichester",
    "Burgess Hill",
    "East Grinstead",
    "Haywards Heath",
    "Shoreham-by-Sea",
    "Rustington",
    "Southwick",
  ];

  const postcodes = [
    "BN11",
    "BN12",
    "BN13",
    "BN14",
    "BN15",
    "BN16",
    "BN17",
    "BN18",
    "BN41",
    "BN42",
    "BN43",
    "BN44",
    "BN99",
    "PO18",
    "PO19",
    "PO20",
    "PO21",
    "PO22",
    "RH10",
    "RH11",
    "RH12",
    "RH13",
    "RH14",
    "RH15",
    "RH16",
    "RH17",
    "RH18",
    "RH19",
    "RH20",
  ];

  return (
    <Layout>
      <SEO
        title="Trusted Roofers in West Sussex | Expert Roofing Services"
        description="Find reliable roofers in West Sussex. Professional roofing services including repairs, installations, and maintenance across Crawley, Worthing, and all West Sussex areas."
      />
      <LocalBusinessSchema
        businessName={businessInfo.businessName}
        location={businessInfo.location}
        url={businessInfo.url}
        image={businessInfo.image}
      />
      <CountyLandingPage
        county="West Sussex"
        mainTowns={mainTowns}
        postcodes={postcodes}
      />
    </Layout>
  );
}
