export interface Service {
  title: string;
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  services: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  benefits: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  process: Array<{
    title: string;
    description: string;
  }>;
  additionalServices: string[];
}

export interface ServiceArea {
  name: string;
  // Add other properties as needed
}
