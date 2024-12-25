import { GetStaticPaths, GetStaticProps } from "next";
import { serviceAreas } from "../../data/serviceAreas";
import CountyLandingPage from "../../components/CountyLandingPage";
import SEO from "../../components/seo/SEO";

interface CountyPageProps {
  county: {
    name: string;
    postcodes: string[];
    mainTowns: string[];
  };
  slug: string;
}

export default function CountyPage({ county, slug }: CountyPageProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://52roofer.com/#organization",
    name: "52Roofer",
    url: "https://52roofer.com",
    logo: "https://52roofer.com/images/logo.png",
    description: `Professional roofing services across ${county.name}. Expert local roofers providing quality roofing solutions.`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://52roofer.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Counties",
        item: "https://52roofer.com/counties",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: county.name,
        item: `https://52roofer.com/county/${slug}`,
      },
    ],
  };

  return (
    <>
      <SEO
        title={`Roofing Services in ${county.name} | Local Roofers | 52Roofer`}
        description={`Professional roofing services across ${county.name}. Expert local roofers covering ${county.mainTowns.slice(0, 5).join(", ")} and all surrounding areas.`}
        jsonLd={[organizationSchema, breadcrumbSchema]}
      />
      <CountyLandingPage
        county={county.name}
        mainTowns={county.mainTowns}
        postcodes={county.postcodes}
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(serviceAreas).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const county = serviceAreas[slug as keyof typeof serviceAreas];

  if (!county) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      county,
      slug,
    },
  };
};
