declare module '../components/seo/LocalBusinessSchema' {
  const LocalBusinessSchema: React.FC;
  export default LocalBusinessSchema;
}

declare module '../components/seo/SEO' {
  const SEO: React.FC<{ title: string; description: string }>;
  export default SEO;
}

declare module '../components/layout/Layout' {
  const Layout: React.FC<{ children: React.ReactNode }>;
  export default Layout;
}

declare module '../../data/serviceAreas' {
  const serviceAreas: Record<string, { name: string }>;
  export { serviceAreas };
}

declare module '../../components/ServiceLayout' {
  const ServiceLayout: React.FC<{
    heroImage: string;
    heroTitle: string;
    heroDescription: string;
    service: string;
    serviceAreas: string[];
    reviews: any[];
    faqs: any[];
    children: React.ReactNode;
  }>;
  export default ServiceLayout;
}
