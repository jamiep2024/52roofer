import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { serviceAreas } from '../../../data/serviceAreas';

interface LocationPageProps {
  location: string;
  county: string;
  displayLocation: string;
}

const VoiceCommercialRoofingLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const initialFAQs = [
    {
      question: `Hey Google, find commercial roofing in ${displayLocation}`,
      answer: `Our ${displayLocation} commercial roofing services include: 1) Large-scale ${county} installations, 2) Commercial property maintenance, 3) Industrial roofing solutions, 4) Business roof repairs, 5) Emergency commercial services. We handle all ${displayLocation} commercial projects.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, what commercial roofing services are available in ${displayLocation}?`,
      answer: `${displayLocation} commercial services include: 1) Flat roof installations for ${county} businesses, 2) Industrial roof maintenance, 3) Commercial waterproofing, 4) Business property repairs, 5) Emergency commercial response. All backed by comprehensive warranties.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, how much does commercial roofing cost in ${displayLocation}?`,
      answer: `${displayLocation} commercial roofing costs vary: 1) Large flat roofs: £20-£40/m², 2) Industrial installations: £30-£50/m², 3) Commercial repairs: From £500, 4) Maintenance contracts: Custom quotes, 5) Emergency services: Variable rates. Contact us for detailed ${county} pricing.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, find commercial roof maintenance in ${displayLocation}`,
      answer: `Our ${displayLocation} maintenance includes: 1) Regular ${county} inspections, 2) Preventive maintenance programs, 3) Commercial cleaning services, 4) Repair identification, 5) Emergency response plans. Keeping ${displayLocation} businesses protected.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, what commercial roofing materials do you use in ${displayLocation}?`,
      answer: `For ${displayLocation} commercial properties we offer: 1) EPDM systems suited for ${county} weather, 2) TPO membranes, 3) Built-up roofing (BUR), 4) Modified bitumen, 5) Metal roofing systems. All materials meet local commercial standards.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Commercial Roofing Services in ${displayLocation}`,
    serviceName: `${displayLocation} Commercial Roofing`,
    serviceType: "voice-commercial-roofing",
    priceRange: "££££",
    timeRequired: "P5D",
    heroTitle: `Need Commercial Roofing in ${displayLocation}? Just Ask!`,
    heroDescription: `Voice-activated commercial roofing services in ${displayLocation} - expert solutions for your business`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Find Commercial Roofing in ${displayLocation}!'`,
        description: `Looking for commercial roofing expertise in ${displayLocation}? Simply ask your smart device about commercial roofing services, and we'll connect you with our experienced ${displayLocation} commercial team.`,
        features: [
          `• ${displayLocation} commercial experts`,
          "• Business property solutions",
          `• ${county} industrial roofing`,
          "• Commercial maintenance"
        ]
      },
      problemSolvingSection: {
        title: `${displayLocation} Commercial Solutions`,
        problems: [
          {
            emoji: "🏢",
            title: `'${displayLocation} business roof'`,
            description: "Commercial installation",
            features: [
              "Business solutions",
              "Commercial grade",
              "Local expertise",
              "Quality materials"
            ]
          },
          {
            emoji: "🏭",
            title: `'${displayLocation} industrial roofing'`,
            description: "Industrial solutions",
            features: [
              "Heavy duty",
              "Industrial grade",
              "Large scale",
              "Durable systems"
            ]
          },
          {
            emoji: "🔧",
            title: `'${displayLocation} maintenance'`,
            description: "Commercial maintenance",
            features: [
              "Regular checks",
              "Preventive care",
              "Quick repairs",
              "System updates"
            ]
          },
          {
            emoji: "⚡",
            title: `'${displayLocation} emergency service'`,
            description: "Emergency response",
            features: [
              "24/7 service",
              "Quick response",
              "Business protection",
              "Rapid repair"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${displayLocation} Commercial Process`,
        steps: [
          {
            title: "Business Assessment",
            description: "Property evaluation",
            features: [
              "Site survey",
              "Need analysis",
              "System planning",
              "Cost estimation"
            ]
          },
          {
            title: "Commercial Planning",
            description: "Project preparation",
            features: [
              "Material selection",
              "Timeline creation",
              "Team allocation",
              "Safety planning"
            ]
          },
          {
            title: "Professional Installation",
            description: "Expert implementation",
            features: [
              "Quality materials",
              "Skilled teams",
              "Safety measures",
              "Business protection"
            ]
          },
          {
            title: "Business Support",
            description: "Ongoing service",
            features: [
              "Regular checks",
              "Maintenance plans",
              "Quick response",
              "Business care"
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

export default VoiceCommercialRoofingLocation;
