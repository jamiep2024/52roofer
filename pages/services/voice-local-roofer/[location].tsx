import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { serviceAreas } from '../../../data/serviceAreas';

interface LocationPageProps {
  location: string;
  county: string;
  displayLocation: string;
}

const VoiceLocalRooferLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const initialFAQs = [
    {
      question: `Hey Google, find a local roofer in ${displayLocation}`,
      answer: `We connect you with qualified ${displayLocation} roofers who: 1) Specialize in ${county} properties, 2) Know local building regulations, 3) Understand ${displayLocation} weather challenges, 4) Provide local references, 5) Offer competitive ${displayLocation} rates. All our local experts are fully vetted.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how do I choose a roofer in ${displayLocation}?`,
      answer: `Look for these qualities in ${displayLocation} roofers: 1) Full local licensing for ${county}, 2) Established ${displayLocation} reputation, 3) Experience with local property types, 4) Clear written quotes for ${displayLocation} work, 5) Strong local warranties. We ensure all our ${displayLocation} partners meet these criteria.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, what should ${displayLocation} roofers cost?`,
      answer: `${displayLocation} roofer rates: 1) Local inspections: £100-£250, 2) ${county} repairs: £150-£500, 3) Major local work: £500-£2,000, 4) Full replacements: From £5,000, 5) ${displayLocation} emergency services: Additional £100-£200. All our local partners offer competitive pricing.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, when can a ${displayLocation} roofer come?`,
      answer: `Our ${displayLocation} response times: 1) Emergency calls: Within 2-4 hours in ${displayLocation}, 2) Urgent ${county} repairs: Same/next day, 3) Regular maintenance: 2-3 days, 4) Local inspections: 1-2 days, 5) Major projects: Scheduled at your convenience. We prioritize based on urgency.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, are ${displayLocation} roofers insured?`,
      answer: `Our ${displayLocation} roofers provide: 1) Public liability insurance for ${county} work, 2) Local employer's liability coverage, 3) Professional indemnity for ${displayLocation} projects, 4) Local work guarantees, 5) ${county} material warranties. All verified and current.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Find Expert Roofers in ${displayLocation}`,
    serviceName: `${displayLocation} Local Roofer`,
    serviceType: "voice-local-roofer",
    priceRange: "£££",
    timeRequired: "P1D",
    heroTitle: `Need a ${displayLocation} Roofer? Just Ask!`,
    heroDescription: `Voice-activated local roofer finder in ${displayLocation} - connect with qualified professionals in your area`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Find Me a Roofer in ${displayLocation}!'`,
        description: `Looking for a trusted local roofer in ${displayLocation}? Simply ask your smart device to find expert roofing professionals, and we'll connect you with qualified ${displayLocation} specialists who know your area.`,
        features: [
          `• Vetted ${displayLocation} experts`,
          "• Quick local response",
          `• ${county} guarantees`,
          "• Area-specific pricing"
        ]
      },
      problemSolvingSection: {
        title: `${displayLocation} Roofing Solutions`,
        problems: [
          {
            emoji: "🏠",
            title: `'Need a ${displayLocation} expert'`,
            description: "Local qualified roofers",
            features: [
              "Local credentials",
              `${county} experience`,
              "Area knowledge",
              "Fast response"
            ]
          },
          {
            emoji: "🛠️",
            title: `'Emergency help in ${displayLocation}'`,
            description: "Rapid local response",
            features: [
              "24/7 local service",
              "Quick arrival",
              `${displayLocation} teams`,
              "Fast solutions"
            ]
          },
          {
            emoji: "💰",
            title: `'Compare ${displayLocation} prices'`,
            description: "Local price comparison",
            features: [
              "Free quotes",
              "Area pricing",
              "Local rates",
              "Best value"
            ]
          },
          {
            emoji: "✅",
            title: `'Trusted ${displayLocation} roofer'`,
            description: "Verified professionals",
            features: [
              "Local checks",
              "Quality assured",
              `${county} reviews`,
              "Proven expertise"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${displayLocation} Connection Process`,
        steps: [
          {
            title: "Local Search",
            description: "Find nearby experts",
            features: [
              `${displayLocation} check`,
              "Service matching",
              "Local availability",
              "Quick connect"
            ]
          },
          {
            title: "Verification",
            description: "Quality assurance",
            features: [
              `${county} credentials`,
              "Insurance verify",
              "Local reviews",
              "History check"
            ]
          },
          {
            title: "Connection",
            description: "Expert matching",
            features: [
              "Direct contact",
              "Local schedule",
              "Service outline",
              "Quote setup"
            ]
          },
          {
            title: "Follow-up",
            description: "Quality control",
            features: [
              "Service check",
              "Satisfaction ensure",
              "Local feedback",
              "Ongoing support"
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

export default VoiceLocalRooferLocation;
