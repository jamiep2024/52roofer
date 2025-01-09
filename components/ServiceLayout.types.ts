export interface ServiceLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  metaDescription?: string;
  canonicalUrl?: string;
  serviceType?: string;
  location?: string;
}
