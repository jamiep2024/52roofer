import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { serviceAreas } from '../../../data/serviceAreas';

interface LocationPageProps {
  location: string;
  county: string;
  displayLocation: string;
}

const VoiceRoofMaintenanceLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const initialFAQs = [
    {
      question: `Hey Google, find roof maintenance in ${displayLocation}`,
      answer: `Our ${displayLocation} maintenance services include: 1) Regular ${county} property checks, 2) Preventive maintenance programs, 3) Gutter cleaning and maintenance, 4) Minor repairs, 5) Weather protection updates. Keeping ${displayLocation} roofs in top condition.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how much is roof maintenance in ${displayLocation}?`,
      answer: `${displayLocation} maintenance costs: 1) Basic inspection: £150-£250, 2) Full maintenance service: £250-£450, 3) Gutter maintenance: £80-£150, 4) Minor repairs: From £200, 5) Annual maintenance plans: Custom quotes for ${county} properties.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, how often should I maintain my roof in ${displayLocation}?`,
      answer: `In ${displayLocation}, we recommend: 1) Bi-annual checks for ${county} weather, 2) Post-storm inspections, 3) Autumn gutter cleaning, 4) Spring maintenance service, 5) Annual professional assessment. Regular maintenance prevents costly repairs.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, what's included in ${displayLocation} roof maintenance?`,
      answer: `Our ${displayLocation} maintenance covers: 1) Complete ${county} weather check, 2) Gutter system cleaning, 3) Tile and flashing inspection, 4) Minor repair identification, 5) Preventive measures for local conditions. Full documentation provided.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, do you offer maintenance plans in ${displayLocation}?`,
      answer: `Yes, our ${displayLocation} maintenance plans include: 1) Regular ${county} inspections, 2) Priority emergency service, 3) Scheduled cleaning, 4) Preventive repairs, 5) Annual condition reports. Customized for local properties.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Professional Roof Maintenance in ${displayLocation}`,
    serviceName: `${displayLocation} Roof Maintenance`,
    serviceType: "voice-roof-maintenance",
    priceRange: "££",
    timeRequired: "P1D",
    heroTitle: `Need Roof Maintenance in ${displayLocation}? Just Ask!`,
    heroDescription: `Voice-activated roof maintenance services in ${displayLocation} - expert care for your property`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Maintain My Roof in ${displayLocation}!'`,
        description: `Need professional roof maintenance in ${displayLocation}? Simply ask your smart device about local maintenance services, and our experienced ${displayLocation} team will keep your roof in perfect condition.`,
        features: [
          `• ${displayLocation} maintenance experts`,
          "• Regular inspections",
          `• ${county} experience`,
          "• Preventive care"
        ]
      },
      problemSolvingSection: {
        title: `${displayLocation} Maintenance Solutions`,
        problems: [
          {
            emoji: "🔍",
            title: `'Check ${displayLocation} roof'`,
            description: "Regular inspection",
            features: [
              "Visual check",
              "Problem finding",
              "Health assessment",
              "Report creation"
            ]
          },
          {
            emoji: "🧹",
            title: `'Clean ${displayLocation} roof'`,
            description: "Professional cleaning",
            features: [
              "Surface cleaning",
              "Gutter clearing",
              "Moss removal",
              "System flush"
            ]
          },
          {
            emoji: "🔧",
            title: `'Fix ${displayLocation} issues'`,
            description: "Minor repairs",
            features: [
              "Problem solving",
              "Part replacing",
              "Leak fixing",
              "Prevention work"
            ]
          },
          {
            emoji: "📋",
            title: `'${displayLocation} maintenance plan'`,
            description: "Regular service",
            features: [
              "Scheduled visits",
              "Regular checks",
              "Problem prevention",
              "Annual reports"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${displayLocation} Maintenance Process`,
        steps: [
          {
            title: "Initial Assessment",
            description: "Current condition",
            features: [
              "Visual inspection",
              "Problem finding",
              "Need assessment",
              "Plan creation"
            ]
          },
          {
            title: "Regular Service",
            description: "Maintenance work",
            features: [
              "System cleaning",
              "Part checking",
              "Minor repairs",
              "Prevention work"
            ]
          },
          {
            title: "Problem Prevention",
            description: "Future protection",
            features: [
              "Issue spotting",
              "Early fixes",
              "Weather protection",
              "System updates"
            ]
          },
          {
            title: "Ongoing Care",
            description: "Continuous support",
            features: [
              "Regular visits",
              "Health checks",
              "Update reports",
              "Future planning"
            ]
          }
        ]
      }
    },
    initialFAQs: initialFAQs
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
};

// Oxford neighborhoods
const oxfordNeighborhoods = [
  'blackbird-leys',
  'botley',
  'cowley',
  'headington',
  'wolvercote',
  'jericho',
  'marston',
  'rose-hill',
  'iffley',
  'summertown'
];

// Wiltshire special towns
const wiltshireSpecialTowns = [
  'warminster',
  'marlborough',
  'chippenham',
  'devizes',
  'melksham',
  'trowbridge',
  'bradford-on-avon',
  'westbury',
  'calne',
  'salisbury'
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { location: string } }[] = [];

  // Add all main towns from each county
  Object.entries(serviceAreas).forEach(([countyKey, county]) => {
    county.mainTowns.forEach(town => {
      const townSlug = town.toLowerCase().replace(/ /g, '-');
      paths.push({
        params: { location: townSlug }
      });

      // Add Wiltshire special town variants
      if (countyKey === 'wiltshire' && wiltshireSpecialTowns.includes(townSlug)) {
        paths.push({
          params: { location: `${townSlug}-wiltshire` }
        });
      }
    });
  });

  // Add Oxford neighborhoods
  oxfordNeighborhoods.forEach(neighborhood => {
    paths.push({
      params: { location: `${neighborhood}-oxford` }
    });
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const location = params?.location as string;
  
  // Check if this is an Oxford neighborhood
  const isOxfordNeighborhood = oxfordNeighborhoods.some(n => 
    location === `${n}-oxford`
  );
  
  if (isOxfordNeighborhood) {
    const displayLocation = location
      .replace('-oxford', '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      props: {
        location,
        county: 'Oxfordshire',
        displayLocation
      }
    };
  }

  // Check if this is a Wiltshire special town
  const isWiltshireSpecial = wiltshireSpecialTowns.some(t => 
    location === `${t}-wiltshire`
  );
  
  if (isWiltshireSpecial) {
    const displayLocation = location
      .replace('-wiltshire', '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      props: {
        location,
        county: 'Wiltshire',
        displayLocation
      }
    };
  }

  // Handle regular towns
  let foundLocation = '';
  let foundCounty = '';
  
  Object.entries(serviceAreas).forEach(([_, area]) => {
    area.mainTowns.forEach(town => {
      if (town.toLowerCase().replace(/ /g, '-') === location) {
        foundLocation = town;
        foundCounty = area.name;
      }
    });
  });

  if (!foundLocation) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      location,
      county: foundCounty,
      displayLocation: foundLocation
    }
  };
};

export default VoiceRoofMaintenanceLocation;
