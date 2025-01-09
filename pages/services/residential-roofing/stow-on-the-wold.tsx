import ServiceLayout from "'components/ServiceLayout"' (see below for file content);

const ServiceLocationPage = () => {
  const meta = {
    title: '[Service] Services in Stow On The Wold | 52Roofer',
    description: 'Professional residential roofing services in Stow On The Wold. Expert roofing solutions from 52Roofer. Licensed, insured, and trusted local roofers. Free estimates!',
    canonical: 'https://52roofer.com/services/residential roofing/roofers-in-stow-on-the-wold',
    schema: {
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      "name": "52Roofer",
      "url": "https://52roofer.com/services/residential roofing/roofers-in-stow-on-the-wold",
      "description": "Professional residential roofing services in Stow On The Wold. Expert roofing solutions from 52Roofer. Licensed, insured, and trusted local roofers. Free estimates!",
      "areaServed": "Stow On The Wold",
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
      <h1>[Service] Services in Stow On The Wold</h1>
      <p>Our expert team provides comprehensive residential roofing services in Stow On The Wold, including:</p>
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
