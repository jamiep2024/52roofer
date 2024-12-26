import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { serviceAreas } from '../../../data/serviceAreas';

interface LocationPageProps {
  location: string;
  county: string;
  displayLocation: string;
}

const VoiceRoofVentilationLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const initialFAQs = [
    {
      question: `Hey Google, find roof ventilation services in ${displayLocation}`,
      answer: `Our ${displayLocation} ventilation services include: 1) Complete system assessment for ${county} conditions, 2) New ventilation installation, 3) System upgrades and improvements, 4) Maintenance and repairs, 5) Energy efficiency solutions. Expert service across ${displayLocation}.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how much does roof ventilation cost in ${displayLocation}?`,
      answer: `${displayLocation} ventilation costs vary: 1) Basic vents: £200-£400, 2) Complete system: £800-£1,500, 3) Powered ventilation: £600-£1,200, 4) Installation: £300-£600, 5) Upgrades: From £400. Prices reflect ${county} market rates.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, what ventilation is best for ${displayLocation} homes?`,
      answer: `Best ventilation for ${displayLocation}'s climate: 1) Ridge vents suited to ${county} weather, 2) Soffit vents for proper airflow, 3) Power vents for larger spaces, 4) Solar-powered options, 5) Combined systems for optimal performance. All professionally installed.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, how long does ventilation installation take in ${displayLocation}?`,
      answer: `${displayLocation} installation times: 1) Basic vents: 1 day, 2) Complete ${county} systems: 1-2 days, 3) Complex installations: 2-3 days, 4) Multiple units: 2-4 days, 5) Weather factors: May affect timeline. Professional installation ensures quality.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, why do I need roof ventilation in ${displayLocation}?`,
      answer: `Ventilation benefits in ${displayLocation}: 1) Prevents moisture damage in ${county} weather, 2) Reduces energy costs, 3) Extends roof lifespan, 4) Improves indoor comfort, 5) Prevents ice dams in winter. Essential for property protection.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Professional Roof Ventilation in ${displayLocation}`,
    serviceName: `${displayLocation} Roof Ventilation`,
    serviceType: "voice-roof-ventilation",
    priceRange: "££",
    timeRequired: "P2D",
    heroTitle: `Need Roof Ventilation in ${displayLocation}? Just Ask!`,
    heroDescription: `Voice-activated roof ventilation services in ${displayLocation} - expert solutions for your property`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Install Roof Ventilation in ${displayLocation}!'`,
        description: `Looking for professional roof ventilation in ${displayLocation}? Simply ask your smart device about local ventilation services, and our experienced ${displayLocation} team will optimize your roof's airflow.`,
        features: [
          `• ${displayLocation} ventilation experts`,
          "• Professional installation",
          `• ${county} experience`,
          "• Energy efficiency"
        ]
      },
      problemSolvingSection: {
        title: `${displayLocation} Ventilation Solutions`,
        problems: [
          {
            emoji: "🌡️",
            title: `'${displayLocation} temperature control'`,
            description: "Climate management",
            features: [
              "Heat reduction",
              "Moisture control",
              "Energy saving",
              "Comfort improve"
            ]
          },
          {
            emoji: "💨",
            title: `'${displayLocation} airflow'`,
            description: "Airflow optimization",
            features: [
              "Proper circulation",
              "Fresh air flow",
              "Stale air remove",
              "System balance"
            ]
          },
          {
            emoji: "💧",
            title: `'${displayLocation} moisture control'`,
            description: "Moisture management",
            features: [
              "Condensation prevent",
              "Mold prevention",
              "Damage protection",
              "Health safety"
            ]
          },
          {
            emoji: "⚡",
            title: `'${displayLocation} energy saving'`,
            description: "Efficiency solutions",
            features: [
              "Cost reduction",
              "Power saving",
              "System efficiency",
              "Green solutions"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${displayLocation} Ventilation Process`,
        steps: [
          {
            title: "Initial Assessment",
            description: "System evaluation",
            features: [
              "Airflow check",
              "Need analysis",
              "System planning",
              "Quote provision"
            ]
          },
          {
            title: "Design Planning",
            description: "Solution creation",
            features: [
              "System design",
              "Vent placement",
              "Material selection",
              "Schedule creation"
            ]
          },
          {
            title: "Expert Installation",
            description: "Professional fitting",
            features: [
              "Proper mounting",
              "Seal ensuring",
              "System testing",
              "Quality check"
            ]
          },
          {
            title: "Final Verification",
            description: "Performance check",
            features: [
              "Airflow testing",
              "System balance",
              "Operation verify",
              "Guidance provide"
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

export default VoiceRoofVentilationLocation;
