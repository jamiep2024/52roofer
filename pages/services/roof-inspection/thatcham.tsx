import ServiceLayout from '../../components/ServiceLayout';
import SchemaMarkup from '../../components/SchemaMarkup';

const ServiceLocationPage = () => {
  const meta = {
    title: '[Service] Services in Thatcham | 52Roofer',
    description: 'Professional Roof Inspection services in Thatcham. Expert roofing solutions from 52Roofer. Licensed, insured, and trusted local roofers. Free estimates!',
    canonical: 'https://52roofer.com/services/Roof Inspection/roofers-in-thatcham'
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "52Roofer",
    "url": "https://52roofer.com/services/Roof Inspection/roofers-in-thatcham",
    "description": "Professional Roof Inspection services in Thatcham. Expert roofing solutions from 52Roofer. Licensed, insured, and trusted local roofers. Free estimates!",
    "areaServed": "Thatcham",
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
      <p>Our expert team provides comprehensive Roof Inspection services in Thatcham, including:</p>
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
