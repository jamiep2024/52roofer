interface Service {
  name: string;
  slug: string;
  description: string;
  locations: string[];
}

const services: Record<string, Service> = {
  'roof-inspection': {
    name: 'Roof Inspection',
    slug: 'roof-inspection',
    description: 'Professional roof inspection services',
    locations: ['southampton', 'tewkesbury']
  },
  'roof-replacement': {
    name: 'Roof Replacement',
    slug: 'roof-replacement',
    description: 'Complete roof replacement services',
    locations: ['stow-on-the-wold', 'tewkesbury']
  },
  'emergency-roofing': {
    name: 'Emergency Roofing',
    slug: 'emergency-roofing',
    description: '24/7 emergency roofing services',
    locations: ['southampton', 'abingdon']
  }
};

export default services;
