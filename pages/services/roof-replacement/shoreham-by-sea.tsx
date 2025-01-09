import ServiceLayout from "'components/ServiceLayout"' (see below for file content);

const ServiceLocationPage = () => {
  const meta = {
    title: '[Service] Services in Shoreham By Sea | 52Roofer',
    description: 'Professional roof replacement services in Shoreham By Sea. Expert roofing solutions from 52Roofer. Licensed, insured, and trusted local roofers. Free estimates!',
    canonical: 'https://52roofer.com/services/roof replacement/roofers-in-shoreham-by-sea',
    schema: {
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      "name": "52Roofer",
      "url": "https://52roofer.com/services/roof replacement/roofers-in-shoreham-by-sea",
      "description": "Professional roof replacement services in Shoreham By Sea. Expert roofing solutions from 52Roofer. Licensed, insured, and trusted local roofers. Free estimates!",
      "areaServed": "Shoreham By Sea",
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Credit Card", "Check"],
      "currenciesAccepted": "USD",
      "sameAs": [
        "https://www.facebook.com/52roofer",
        "https://twitter.com/52roofer"
      ]
    }
  };

  return (
    <ServiceLayout meta={meta}>
      <h1>[Service] Services in Shoreham By Sea</h1>
      <p>Our expert team provides comprehensive roof replacement services in Shoreham By Sea, including:</p>
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
