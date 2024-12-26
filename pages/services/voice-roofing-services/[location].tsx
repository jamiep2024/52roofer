import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { serviceAreas } from '../../../data/serviceAreas';

interface LocationPageProps {
  location: string;
  county: string;
  displayLocation: string;
}

const VoiceRoofingServicesLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const initialFAQs = [
    {
      question: `Hey Google, what roofing services are available in ${displayLocation}?`,
      answer: `Our ${displayLocation} roofing services include: 1) Complete installations for ${county} properties, 2) Repairs and maintenance, 3) Emergency services, 4) Inspections and surveys, 5) Specialist services like skylights and ventilation. Full service coverage across ${displayLocation}.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, find a complete roofing service in ${displayLocation}`,
      answer: `We provide comprehensive ${displayLocation} services including: 1) New roof installations suited to ${county}, 2) Emergency repairs 24/7, 3) Regular maintenance programs, 4) Commercial and residential work, 5) Specialist installations. One-stop roofing solution.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, what roofing work can you do in ${displayLocation}?`,
      answer: `Our ${displayLocation} expertise covers: 1) All roof types common in ${county}, 2) Emergency and routine repairs, 3) Maintenance and inspections, 4) Improvements and upgrades, 5) Specialist installations. Professional service for all needs.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, what makes your ${displayLocation} roofing service different?`,
      answer: `We stand out in ${displayLocation} through: 1) Extensive ${county} experience, 2) Comprehensive service range, 3) Emergency 24/7 availability, 4) Quality guarantees, 5) Professional expertise. Complete customer satisfaction.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, do you offer full roofing services in ${displayLocation}?`,
      answer: `Yes, our ${displayLocation} full service includes: 1) Free consultations for ${county} properties, 2) Complete project management, 3) All types of roofing work, 4) Emergency response service, 5) Aftercare and maintenance. Everything you need.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Complete Roofing Services in ${displayLocation}`,
    serviceName: `${displayLocation} Roofing Services`,
    serviceType: "voice-roofing-services",
    priceRange: "£££",
    timeRequired: "P1D",
    heroTitle: `Need Roofing Services in ${displayLocation}? Just Ask!`,
    heroDescription: `Voice-activated roofing services in ${displayLocation} - complete solutions for all your roofing needs`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Find Roofing Services in ${displayLocation}!'`,
        description: `Looking for comprehensive roofing services in ${displayLocation}? Simply ask your smart device about local roofing services, and our experienced ${displayLocation} team will handle all your roofing needs.`,
        features: [
          `• Complete ${displayLocation} service`,
          "• Professional team",
          `• ${county} expertise`,
          "• Quality guaranteed"
        ]
      },
      problemSolvingSection: {
        title: `${displayLocation} Roofing Solutions`,
        problems: [
          {
            emoji: "🏠",
            title: `'${displayLocation} new roof'`,
            description: "Complete installation",
            features: [
              "Full service",
              "Quality materials",
              "Expert fitting",
              "Long warranty"
            ]
          },
          {
            emoji: "🔧",
            title: `'${displayLocation} repairs'`,
            description: "Professional repairs",
            features: [
              "Fast response",
              "Quality fixes",
              "Emergency service",
              "Problem solved"
            ]
          },
          {
            emoji: "🔍",
            title: `'${displayLocation} inspection'`,
            description: "Thorough assessment",
            features: [
              "Complete check",
              "Detail report",
              "Expert advice",
              "Prevention plan"
            ]
          },
          {
            emoji: "⚡",
            title: `'${displayLocation} emergency'`,
            description: "Emergency response",
            features: [
              "24/7 service",
              "Quick arrival",
              "Fast action",
              "Problem solved"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${displayLocation} Service Process`,
        steps: [
          {
            title: "Initial Contact",
            description: "Service planning",
            features: [
              "Need assessment",
              "Service choice",
              "Plan creation",
              "Quote provision"
            ]
          },
          {
            title: "Expert Service",
            description: "Professional work",
            features: [
              "Skilled team",
              "Quality materials",
              "Proper methods",
              "Full service"
            ]
          },
          {
            title: "Quality Assurance",
            description: "Work verification",
            features: [
              "Complete check",
              "Standard ensure",
              "Detail review",
              "Client approve"
            ]
          },
          {
            title: "Ongoing Support",
            description: "Continued care",
            features: [
              "After service",
              "Future support",
              "Maintenance plan",
              "Always available"
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

export default VoiceRoofingServicesLocation;
