import ServiceLayout from "'components/ServiceLayout"' (see below for file content);

const ServiceLocationPage = () => {
  const meta = {
    title: '[Service] Services in Gerrards Cross | 52Roofer',
    description: 'Professional roof repairs services in Gerrards Cross. Expert roofing solutions from 52Roofer. Licensed, insured, and trusted local roofers. Free estimates!',
    canonical: 'https://52roofer.com/services/roof repairs/roofers-in-gerrards-cross',
    schema: {
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      "name": "52Roofer",
      "url": "https://52roofer.com/services/roof repairs/roofers-in-gerrards-cross",
      "description": "Professional roof repairs services in Gerrards Cross. Expert roofing solutions from 52Roofer. Licensed, insured, and trusted local roofers. Free estimates!",
      "areaServed": "Gerrards Cross",
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
      <h1>[Service] Services in Gerrards Cross</h1>
      <p>Our expert team provides comprehensive roof repairs services in Gerrards Cross, including:</p>
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
