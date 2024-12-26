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
  | 'voice-gutter-service'
  | 'voice-new-roof-near-me'
  | 'voice-roof-cost-near-me'
  | 'voice-emergency-roofing'
  | 'voice-roof-estimate'
  | 'voice-flat-roof'
  | 'voice-roof-replacement'
  | 'voice-local-roofer';

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
  'voice-emergency-roofing': [
    {
      title: 'Voice Local Roofer',
      path: '/services/voice-local-roofer',
      description: 'Find emergency roofers in your area'
    },
    {
      title: 'Voice Roof Repairs',
      path: '/services/voice-roof-repairs',
      description: 'Expert emergency repair services'
    },
    {
      title: 'Voice Roof Estimate',
      path: '/services/voice-roof-estimate',
      description: 'Get quick repair estimates'
    },
    {
      title: 'Voice Roof Inspection',
      path: '/services/voice-roof-inspection',
      description: 'Emergency damage assessment'
    }
  ],
  'voice-roof-estimate': [
    {
      title: 'Voice Roof Cost Near Me',
      path: '/services/voice-roof-cost-near-me',
      description: 'Local roofing cost information'
    },
    {
      title: 'Voice Local Roofer',
      path: '/services/voice-local-roofer',
      description: 'Connect with local estimators'
    },
    {
      title: 'Voice Roof Replacement',
      path: '/services/voice-roof-replacement',
      description: 'Full replacement estimates'
    },
    {
      title: 'Voice New Roof Near Me',
      path: '/services/voice-new-roof-near-me',
      description: 'Local new roof pricing'
    }
  ],
  'voice-flat-roof': [
    {
      title: 'Voice Roof Installation',
      path: '/services/voice-roof-installation',
      description: 'Expert flat roof installation'
    },
    {
      title: 'Voice Roof Maintenance',
      path: '/services/voice-roof-maintenance',
      description: 'Flat roof maintenance services'
    },
    {
      title: 'Voice Roof Repairs',
      path: '/services/voice-roof-repairs',
      description: 'Flat roof repair solutions'
    },
    {
      title: 'Voice Roof Estimate',
      path: '/services/voice-roof-estimate',
      description: 'Get flat roof quotes'
    }
  ],
  'voice-roof-replacement': [
    {
      title: 'Voice New Roof Near Me',
      path: '/services/voice-new-roof-near-me',
      description: 'Local roof replacement services'
    },
    {
      title: 'Voice Roof Cost Near Me',
      path: '/services/voice-roof-cost-near-me',
      description: 'Replacement cost information'
    },
    {
      title: 'Voice Roof Estimate',
      path: '/services/voice-roof-estimate',
      description: 'Get replacement quotes'
    },
    {
      title: 'Voice Local Roofer',
      path: '/services/voice-local-roofer',
      description: 'Find replacement experts'
    }
  ],
  'voice-local-roofer': [
    {
      title: 'Voice New Roof Near Me',
      path: '/services/voice-new-roof-near-me',
      description: 'Local new roof services'
    },
    {
      title: 'Voice Emergency Roofing',
      path: '/services/voice-emergency-roofing',
      description: 'Emergency local roofers'
    },
    {
      title: 'Voice Roof Estimate',
      path: '/services/voice-roof-estimate',
      description: 'Get local quotes'
    },
    {
      title: 'Voice Roof Cost Near Me',
      path: '/services/voice-roof-cost-near-me',
      description: 'Local pricing information'
    }
  ],
  'voice-new-roof-near-me': [
    {
      title: 'Voice Roof Cost Near Me',
      path: '/services/voice-roof-cost-near-me',
      description: 'Get local pricing for your new roof'
    },
    {
      title: 'Voice Roof Installation',
      path: '/services/voice-roof-installation',
      description: 'Professional roof installation services'
    },
    {
      title: 'Voice Local Roofer',
      path: '/services/voice-local-roofer',
      description: 'Find local installation experts'
    },
    {
      title: 'Voice Roof Estimate',
      path: '/services/voice-roof-estimate',
      description: 'Get new roof quotes'
    }
  ],
  'voice-roof-cost-near-me': [
    {
      title: 'Voice New Roof Near Me',
      path: '/services/voice-new-roof-near-me',
      description: 'Find local new roof services'
    },
    {
      title: 'Voice Roof Estimate',
      path: '/services/voice-roof-estimate',
      description: 'Get detailed cost estimates'
    },
    {
      title: 'Voice Local Roofer',
      path: '/services/voice-local-roofer',
      description: 'Connect with local experts'
    },
    {
      title: 'Voice Roof Replacement',
      path: '/services/voice-roof-replacement',
      description: 'Full replacement pricing'
    }
  ],
  'voice-commercial-roofing': [
    {
      title: 'Voice Roof Installation',
      path: '/services/voice-roof-installation',
      description: 'Professional roof installation services'
    },
    {
      title: 'Voice Roof Maintenance',
      path: '/services/voice-roof-maintenance',
      description: 'Regular maintenance services'
    },
    {
      title: 'Voice Roof Inspection',
      path: '/services/voice-roof-inspection',
      description: 'Expert roof inspections'
    },
    {
      title: 'Voice Emergency Repairs',
      path: '/services/voice-roof-repairs',
      description: '24/7 emergency repair services'
    }
  ],
  'voice-residential-roofing': [
    {
      title: 'Voice Roof Installation',
      path: '/services/voice-roof-installation',
      description: 'Expert installation services'
    },
    {
      title: 'Voice Gutter Services',
      path: '/services/voice-gutter-service',
      description: 'Complete gutter solutions'
    },
    {
      title: 'Voice Skylight Installation',
      path: '/services/voice-skylight-installation',
      description: 'Professional skylight services'
    },
    {
      title: 'Voice Roof Maintenance',
      path: '/services/voice-roof-maintenance',
      description: 'Regular maintenance services'
    }
  ],
  'voice-roof-maintenance': [
    {
      title: 'Voice Roof Inspection',
      path: '/services/voice-roof-inspection',
      description: 'Professional inspections'
    },
    {
      title: 'Voice Roof Repairs',
      path: '/services/voice-roof-repairs',
      description: 'Expert repair services'
    },
    {
      title: 'Voice Gutter Services',
      path: '/services/voice-gutter-service',
      description: 'Gutter maintenance solutions'
    },
    {
      title: 'Voice Roof Ventilation',
      path: '/services/voice-roof-ventilation',
      description: 'Ventilation services'
    }
  ],
  'voice-roof-inspection': [
    {
      title: 'Voice Roof Repairs',
      path: '/services/voice-roof-repairs',
      description: 'Expert repair services'
    },
    {
      title: 'Voice Roof Maintenance',
      path: '/services/voice-roof-maintenance',
      description: 'Regular maintenance'
    },
    {
      title: 'Voice Gutter Services',
      path: '/services/voice-gutter-service',
      description: 'Gutter inspections'
    },
    {
      title: 'Voice Roof Ventilation',
      path: '/services/voice-roof-ventilation',
      description: 'Ventilation assessment'
    }
  ],
  'voice-skylight-installation': [
    {
      title: 'Voice Roof Installation',
      path: '/services/voice-roof-installation',
      description: 'Complete roof installation'
    },
    {
      title: 'Voice Roof Inspection',
      path: '/services/voice-roof-inspection',
      description: 'Professional inspections'
    },
    {
      title: 'Voice Roof Ventilation',
      path: '/services/voice-roof-ventilation',
      description: 'Ventilation solutions'
    },
    {
      title: 'Voice Roof Maintenance',
      path: '/services/voice-roof-maintenance',
      description: 'Regular maintenance'
    }
  ],
  'voice-roof-ventilation': [
    {
      title: 'Voice Roof Inspection',
      path: '/services/voice-roof-inspection',
      description: 'Ventilation assessments'
    },
    {
      title: 'Voice Roof Maintenance',
      path: '/services/voice-roof-maintenance',
      description: 'Regular maintenance'
    },
    {
      title: 'Voice Skylight Installation',
      path: '/services/voice-skylight-installation',
      description: 'Skylight solutions'
    },
    {
      title: 'Voice Roof Installation',
      path: '/services/voice-roof-installation',
      description: 'Complete roof systems'
    }
  ],
  'voice-gutter-service': [
    {
      title: 'Voice Roof Inspection',
      path: '/services/voice-roof-inspection',
      description: 'Complete inspections'
    },
    {
      title: 'Voice Roof Maintenance',
      path: '/services/voice-roof-maintenance',
      description: 'Regular maintenance'
    },
    {
      title: 'Voice Roof Repairs',
      path: '/services/voice-roof-repairs',
      description: 'Expert repairs'
    },
    {
      title: 'Voice Roof Installation',
      path: '/services/voice-roof-installation',
      description: 'New roof systems'
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
