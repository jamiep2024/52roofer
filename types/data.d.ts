declare module 'data' {
  interface Service {
    name: string;
    slug: string;
    description: string;
    locations: string[];
  }

  type Services = Record<string, Service>;
}
