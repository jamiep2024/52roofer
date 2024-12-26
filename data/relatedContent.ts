interface RelatedContent {
  title: string;
  path: string;
  description: string;
}

type ServiceType = 
  | 'roof-inspection'
  | 'roof-maintenance'
  | 'roof-ventilation'
  | 'voice-commercial-roofing'
  | 'voice-residential-roofing'
  | 'voice-roof-maintenance'
  | 'voice-roof-inspection'
  | 'voice-skylight-installation'
  | 'voice-roof-ventilation'
  | 'voice-gutter-service';

// Service-to-Blog mappings
export const serviceBlogMappings: Partial<Record<ServiceType, RelatedContent[]>> = {
  'roof-inspection': [
    {
      title: 'Professional Roof Inspection Guide',
      path: '/blog/professional-roof-inspection-guide',
      description: 'Learn what to expect during a professional roof inspection'
    }
  ],
  'roof-maintenance': [
    {
      title: 'Complete Guide to Roof Maintenance',
      path: '/blog/complete-guide-to-roof-maintenance',
      description: 'Essential tips for maintaining your roof'
    }
  ],
  'roof-ventilation': [
    {
      title: 'Ultimate Roof Ventilation Guide',
      path: '/blog/ultimate-roof-ventilation-guide',
      description: 'Understanding proper roof ventilation'
    }
  ]
};

// Service-to-Service mappings
export const serviceRelationships: Record<ServiceType, RelatedContent[]> = {
  'voice-commercial-roofing': [
    {
      title: 'Voice Roof Installation',
      path: '/services/voice-roof-installation',
      description: 'Professional roof installation services through voice commands'
    },
    {
      title: 'Voice Roof Maintenance',
      path: '/services/voice-roof-maintenance',
      description: 'Regular maintenance services activated by voice'
    },
    {
      title: 'Voice Roof Inspection',
      path: '/services/voice-roof-inspection',
      description: 'Expert roof inspections through voice activation'
    },
    {
      title: 'Voice Emergency Repairs',
      path: '/services/voice-roof-repairs',
      description: '24/7 emergency repair services via voice command'
    }
  ],
  'voice-residential-roofing': [
    {
      title: 'Voice Roof Installation',
      path: '/services/voice-roof-installation',
      description: 'Expert installation services through voice commands'
    },
    {
      title: 'Voice Gutter Services',
      path: '/services/voice-gutter-service',
      description: 'Complete gutter solutions via voice activation'
    },
    {
      title: 'Voice Skylight Installation',
      path: '/services/voice-skylight-installation',
      description: 'Professional skylight services through voice commands'
    },
    {
      title: 'Voice Roof Maintenance',
      path: '/services/voice-roof-maintenance',
      description: 'Regular maintenance services activated by voice'
    }
  ],
  'voice-roof-maintenance': [
    {
      title: 'Voice Roof Inspection',
      path: '/services/voice-roof-inspection',
      description: 'Professional inspections through voice commands'
    },
    {
      title: 'Voice Roof Repairs',
      path: '/services/voice-roof-repairs',
      description: 'Expert repair services via voice activation'
    },
    {
      title: 'Voice Gutter Services',
      path: '/services/voice-gutter-service',
      description: 'Complete gutter maintenance solutions'
    },
    {
      title: 'Voice Roof Ventilation',
      path: '/services/voice-roof-ventilation',
      description: 'Professional ventilation services and maintenance'
    }
  ],
  'voice-roof-inspection': [
    {
      title: 'Voice Roof Repairs',
      path: '/services/voice-roof-repairs',
      description: 'Expert repair services based on inspection findings'
    },
    {
      title: 'Voice Roof Maintenance',
      path: '/services/voice-roof-maintenance',
      description: 'Regular maintenance following inspection recommendations'
    },
    {
      title: 'Voice Gutter Services',
      path: '/services/voice-gutter-service',
      description: 'Professional gutter inspections and services'
    },
    {
      title: 'Voice Roof Ventilation',
      path: '/services/voice-roof-ventilation',
      description: 'Ventilation assessment and solutions'
    }
  ],
  'voice-skylight-installation': [
    {
      title: 'Voice Roof Installation',
      path: '/services/voice-roof-installation',
      description: 'Complete roof installation services for skylight preparation'
    },
    {
      title: 'Voice Roof Inspection',
      path: '/services/voice-roof-inspection',
      description: 'Professional inspections including skylight assessments'
    },
    {
      title: 'Voice Roof Ventilation',
      path: '/services/voice-roof-ventilation',
      description: 'Ventilation solutions working with skylights'
    },
    {
      title: 'Voice Roof Maintenance',
      path: '/services/voice-roof-maintenance',
      description: 'Regular maintenance including skylight care'
    }
  ],
  'voice-roof-ventilation': [
    {
      title: 'Voice Roof Inspection',
      path: '/services/voice-roof-inspection',
      description: 'Professional ventilation assessments and inspections'
    },
    {
      title: 'Voice Roof Maintenance',
      path: '/services/voice-roof-maintenance',
      description: 'Regular maintenance including ventilation care'
    },
    {
      title: 'Voice Skylight Installation',
      path: '/services/voice-skylight-installation',
      description: 'Skylight solutions with proper ventilation'
    },
    {
      title: 'Voice Roof Installation',
      path: '/services/voice-roof-installation',
      description: 'Complete roof systems with integrated ventilation'
    }
  ],
  'voice-gutter-service': [
    {
      title: 'Voice Roof Inspection',
      path: '/services/voice-roof-inspection',
      description: 'Complete roof and gutter inspections'
    },
    {
      title: 'Voice Roof Maintenance',
      path: '/services/voice-roof-maintenance',
      description: 'Regular maintenance including gutter care'
    },
    {
      title: 'Voice Roof Repairs',
      path: '/services/voice-roof-repairs',
      description: 'Expert repairs for roof and gutter issues'
    },
    {
      title: 'Voice Roof Installation',
      path: '/services/voice-roof-installation',
      description: 'New roof systems with integrated guttering'
    }
  ],
  'roof-inspection': [],
  'roof-maintenance': [],
  'roof-ventilation': []
};

// Helper function to get related content for a service
export const getRelatedContent = (serviceType: ServiceType) => {
  return {
    relatedServices: serviceRelationships[serviceType] || [],
    relatedBlogPosts: serviceBlogMappings[serviceType] || []
  };
};
