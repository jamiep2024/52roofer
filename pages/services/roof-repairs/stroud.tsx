import ServiceLayout from '../../components/ServiceLayout';
import SchemaMarkup from '../../components/SchemaMarkup';

const ServiceLocationPage = () => {
  const meta = {
    title: '[Service] Services in Stroud | 52Roofer',
    description: 'Professional Roof Repairs services in Stroud. Expert roofing solutions from 52Roofer. Licensed, insured, and trusted local roofers. Free estimates!',
    canonical: 'https://52roofer.com/services/Roof Repairs/roofers-in-stroud'
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "52Roofer",
    "url": "https://52roofer.com/services/Roof Repairs/roofers-in-stroud",
    "description": "Professional Roof Repairs services in Stroud. Expert roofing solutions from 52Roofer. Licensed, insured, and trusted local roofers. Free estimates!",
    "areaServed": "Stroud",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "currenciesAccepted": "USD",
    "sameAs": [
      "https://www.facebook.com/52roofer",
      "https://twitter.com/52roofer"
    ]
  };

  return (
    <ServiceLayout meta={meta}>
      <SchemaMarkup schema={schema} />
      <h1>[Service] Services in {meta.title.split('|')[0].trim()}</h1>
      <p>Our expert team provides comprehensive Roof Repairs services in Stroud, including:</p>
      <ul>
        <li>Roof repairs and maintenance</li>
        <li>Complete roof replacements</li>
        <li>Emergency roofing services</li>
        <li>Roof inspections and assessments</li>
      </ul>
      <p>Contact us today for a free estimate!</p>
    </ServiceLayout>
  );
};

export default ServiceLocationPage;