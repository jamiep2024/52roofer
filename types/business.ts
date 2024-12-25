export interface Business {
  id: string;
  name: string;
  description: string;
  rating: number;
  reviewCount: number;
  location: string;
  serviceAreas: string[];
  phone: string;
  email: string;
  website: string;
  services: string[];
  badges: string[];
  featured?: boolean;
  availability: string;
  responseTime?: string;
}
