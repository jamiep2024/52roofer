import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { serviceAreas } from '../../../data/serviceAreas';

interface LocationPageProps {
  location: string;
  county: string;
  displayLocation: string;
}

const VoiceRoofCostNearMeLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const initialFAQs = [
    {
      question: `Hey Google, how much does a roof cost in ${displayLocation}?`,
      answer: `${displayLocation} roof costs vary by type: 1) Standard tiles: £5,000-£8,000 for typical ${county} homes, 2) Slate roofing: £9,000-£18,000, 3) Flat roofs: £3,000-£6,000, 4) Premium materials: £10,000-£20,000, 5) Complex designs: Custom quotes. Free local estimates available.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, what affects roof costs in ${displayLocation}?`,
      answer: `${displayLocation} roof pricing factors: 1) Property size and complexity in ${county}, 2) Material quality and type, 3) Required structural work, 4) Access and scaffolding needs, 5) Additional features like insulation. We provide detailed breakdowns.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, what's the cheapest roof option in ${displayLocation}?`,
      answer: `Affordable ${displayLocation} roofing includes: 1) Standard concrete tiles suited for ${county}, 2) Basic felt flat roofing, 3) Value composite materials, 4) Phased payment options, 5) Maintenance plans to extend life. Quality solutions at every budget.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, how much is roof repair vs replacement in ${displayLocation}?`,
      answer: `${displayLocation} cost comparison: 1) Basic repairs: £150-£500, 2) Major repairs in ${county}: £500-£2,000, 3) Partial replacement: £2,000-£5,000, 4) Full replacement: £5,000+, 5) Emergency work: Additional costs. We help you choose the most cost-effective option.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, what's included in ${displayLocation} roof costs?`,
      answer: `Our ${displayLocation} pricing includes: 1) Complete material costs for ${county} conditions, 2) Professional labor charges, 3) Scaffolding and access, 4) Waste removal and cleanup, 5) Full warranty coverage. No hidden costs or surprises.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Roof Cost Guide for ${displayLocation}`,
    serviceName: `${displayLocation} Roof Cost Guide`,
    serviceType: "voice-roof-cost-near-me",
    priceRange: "FREE",
    timeRequired: "P1D",
    heroTitle: `Want to Know Roof Costs in ${displayLocation}? Just Ask!`,
    heroDescription: `Voice-activated roof cost information in ${displayLocation} - get accurate local pricing`,
    mainContent: {
      introSection: {
        title: `Just Say: 'How Much Does a Roof Cost in ${displayLocation}?'`,
        description: `Looking for accurate roof pricing in ${displayLocation}? Simply ask your smart device about local roof costs, and we'll provide detailed pricing information for your ${displayLocation} project.`,
        features: [
          `• ${displayLocation} price guide`,
          "• Free estimates",
          `• ${county} rates`,
          "• Clear breakdowns"
        ]
      },
      problemSolvingSection: {
        title: `${displayLocation} Roofing Cost Solutions`,
        problems: [
          {
            emoji: "💰",
            title: `'${displayLocation} roof prices'`,
            description: "Complete pricing",
            features: [
              "Material costs",
              "Labor rates",
              "Local factors",
              "Clear quotes"
            ]
          },
          {
            emoji: "🏠",
            title: `'${displayLocation} budget options'`,
            description: "Affordable solutions",
            features: [
              "Value materials",
              "Payment plans",
              "Cost savings",
              "Quality work"
            ]
          },
          {
            emoji: "📊",
            title: `'Compare ${displayLocation} costs'`,
            description: "Price comparison",
            features: [
              "Material options",
              "Service levels",
              "Local rates",
              "Best value"
            ]
          },
          {
            emoji: "📝",
            title: `'${displayLocation} cost estimate'`,
            description: "Free quotes",
            features: [
              "Detailed breakdown",
              "Clear pricing",
              "No obligation",
              "Expert advice"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${displayLocation} Cost Guide Process`,
        steps: [
          {
            title: "Initial Assessment",
            description: "Project evaluation",
            features: [
              "Need analysis",
              "Size calculation",
              "Access check",
              "Basic estimate"
            ]
          },
          {
            title: "Detailed Survey",
            description: "Accurate costing",
            features: [
              "Full measurement",
              "Material options",
              "Work scope",
              "Price factors"
            ]
          },
          {
            title: "Cost Breakdown",
            description: "Clear pricing",
            features: [
              "Material costs",
              "Labor charges",
              "Additional items",
              "Total estimate"
            ]
          },
          {
            title: "Options Review",
            description: "Value choices",
            features: [
              "Budget options",
              "Quality levels",
              "Payment plans",
              "Best value"
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

export default VoiceRoofCostNearMeLocation;
