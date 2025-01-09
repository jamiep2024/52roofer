import ServiceLayout from "'components/ServiceLayout"' (see below for file content);

const ServiceLocationPage = () => {
  const meta = {
    title: '[Service] Services in Marston Oxford | 52Roofer',
    description: 'Professional residential roofing services in Marston Oxford. Expert roofing solutions from 52Roofer. Licensed, insured, and trusted local roofers. Free estimates!',
    canonical: 'https://52roofer.com/services/residential roofing/roofers-in-marston-oxford',
    schema: {
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      "name": "52Roofer",
      "url": "https://52roofer.com/services/residential roofing/roofers-in-marston-oxford",
      "description": "Professional residential roofing services in Marston Oxford. Expert roofing solutions from 52Roofer. Licensed, insured, and trusted local roofers. Free estimates!",
      "areaServed": "Marston Oxford",
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
      <h1>[Service] Services in Marston Oxford</h1>
      <p>Our expert team provides comprehensive residential roofing services in Marston Oxford, including:</p>
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
