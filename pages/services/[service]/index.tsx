import { useRouter } from 'next/router';
import Layout from '@components/Layout';
import SEO from '@components/SEO';

interface ServicePageProps {
  serviceTitle: string;
  service: string;
}

export default function ServicePage({ serviceTitle, service }: ServicePageProps) {
  const router = useRouter();
  const { service: queryService } = router.query;

  if (!queryService) {
    return <div>Loading...</div>;
  }

  const metaDescription = `Learn more about ${serviceTitle} services. Find professional roofing solutions and get free quotes.`;
  const canonicalUrl = `https://52roofer.com/services/${service}`;

  return (
    <Layout>
      <SEO
        title={serviceTitle}
        description={metaDescription}
        canonical={canonicalUrl}
      />
      <h1 className="text-3xl font-bold mb-4">{serviceTitle}</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          We provide professional {service.replace(/-/g, ' ')} services across our service areas.
          Our team of experts specializes in delivering high-quality roofing solutions tailored to your needs.
        </p>
        <p>
          <a href="/locations" className="text-blue-600 hover:text-blue-800">
            Find {service.replace(/-/g, ' ')} services in your area →
          </a>
        </p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const services = [
    'roof-installation',
    'roof-ventilation',
    'roof-cost-near-me',
    'roof-estimate',
    'emergency-roof-repair',
    'skylight-installation',
    'advanced-roofing',
    'roofing-contractors',
    'local-roofer',
    'flat-roof'
  ];

  const paths = services.map(service => ({
    params: { service }
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

interface StaticPropsParams {
  params: {
    service: string;
  };
}

export async function getStaticProps({ params }: StaticPropsParams) {
  const serviceTitles = {
    'roof-installation': 'Roof Installation Services',
    'roof-ventilation': 'Roof Ventilation Services',
    'roof-cost-near-me': 'Roof Cost Estimates',
    'roof-estimate': 'Free Roof Estimates',
    'emergency-roof-repair': 'Emergency Roof Repair',
    'skylight-installation': 'Skylight Installation',
    'advanced-roofing': 'Advanced Roofing Solutions',
    'roofing-contractors': 'Roofing Contractors',
    'local-roofer': 'Local Roofers',
    'flat-roof': 'Flat Roof Specialists'
  };

  return {
    props: {
      serviceTitle: serviceTitles[params.service as keyof typeof serviceTitles] || 
        `Roofing Services`,
      service: params.service
    },
  };
}
