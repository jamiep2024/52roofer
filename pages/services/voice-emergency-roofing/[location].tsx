import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { serviceAreas } from '../../../data/serviceAreas';

interface LocationPageProps {
  location: string;
  county: string;
  displayLocation: string;
}

const VoiceEmergencyRoofingLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const initialFAQs = [
    {
      question: `Hey Google, I need emergency roof repair in ${displayLocation}`,
      answer: `Our 24/7 emergency roofing services in ${displayLocation}, ${county} include: 1) Immediate local response team, 2) Storm damage repairs, 3) Temporary protective measures, 4) Structural stabilization, 5) Water damage prevention. We'll dispatch our ${displayLocation} team quickly.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how fast can I get emergency roof repair in ${displayLocation}?`,
      answer: `Our ${displayLocation} emergency response times: 1) Initial phone response: Within 15 minutes, 2) Local team dispatch: 1-2 hours, 3) On-site arrival: 2-4 hours, 4) Emergency repairs: Immediate start, 5) 24/7 availability in ${displayLocation} area.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, what emergency roof services do you offer in ${displayLocation}?`,
      answer: `Our ${displayLocation} emergency services cover: 1) Local storm damage assessment, 2) Rapid waterproofing, 3) Structural support, 4) Emergency leak repairs, 5) Complete area coverage. Our ${displayLocation} team handles all urgent situations.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, how much is emergency roof repair in ${displayLocation}?`,
      answer: `${displayLocation} emergency repair costs: 1) Emergency call-out: £200-£400, 2) Temporary repairs: £300-£800, 3) Storm damage fixes: £500-£2,000, 4) Emergency tarping: £400-£700, 5) After-hours service: Additional £100-£200. Local rates may vary.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, do you handle storm roof damage in ${displayLocation}?`,
      answer: `Yes, our ${displayLocation} team handles all storm emergencies: 1) Local damage assessment, 2) Emergency water diversion, 3) Temporary covering, 4) Structure stabilization, 5) Insurance documentation. Available 24/7 in ${displayLocation} and surrounding areas.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `24/7 Emergency Roof Repair in ${displayLocation}`,
    serviceName: `${displayLocation} Emergency Roofing`,
    serviceType: "voice-emergency-roofing",
    priceRange: "£££",
    timeRequired: "P1D",
    heroTitle: `Emergency Roof Help in ${displayLocation}? Just Ask!`,
    heroDescription: `Voice-activated emergency roofing services in ${displayLocation} - available 24/7`,
    mainContent: {
      introSection: {
        title: `Just Say: 'I Need Emergency Roof Repair in ${displayLocation}!'`,
        description: `Experiencing a roofing emergency in ${displayLocation}? Simply ask your smart device for emergency roof repair, and our local ${displayLocation} team will respond immediately with 24/7 emergency services.`,
        features: [
          `• 24/7 ${displayLocation} emergency response`,
          "• Local rapid damage assessment",
          "• Immediate temporary repairs",
          `• ${displayLocation} storm specialists`
        ]
      },
      problemSolvingSection: {
        title: `${displayLocation} Emergency Roofing Solutions`,
        problems: [
          {
            emoji: "🌧️",
            title: `'Help, my ${displayLocation} roof is leaking!'`,
            description: "Local immediate response",
            features: [
              "Local assessment",
              "Water diversion",
              "Temporary sealing",
              "Damage prevention"
            ]
          },
          {
            emoji: "🌪️",
            title: `'Storm damage in ${displayLocation}'`,
            description: "Local storm repair",
            features: [
              "Emergency tarping",
              "Local team response",
              "Structure securing",
              "Weather protection"
            ]
          },
          {
            emoji: "⚡",
            title: `'Need urgent ${displayLocation} repairs'`,
            description: "Rapid local service",
            features: [
              "Quick response",
              "Priority service",
              "24/7 availability",
              "Local emergency team"
            ]
          },
          {
            emoji: "🏠",
            title: `'Protect my ${displayLocation} property'`,
            description: "Immediate protection",
            features: [
              "Local securing",
              "Content protection",
              "Weather defense",
              "Safety measures"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${displayLocation} Emergency Response Process`,
        steps: [
          {
            title: "Local Response",
            description: "24/7 emergency contact",
            features: [
              "Local assessment",
              "Priority scheduling",
              `${displayLocation} team dispatch`,
              "Initial guidance"
            ]
          },
          {
            title: "Emergency Assessment",
            description: "Local situation evaluation",
            features: [
              "Damage inspection",
              "Safety check",
              "Solution planning",
              "Cost estimation"
            ]
          },
          {
            title: "Immediate Action",
            description: "Local repairs begin",
            features: [
              "Water diversion",
              "Temporary repairs",
              "Structure securing",
              "Content protection"
            ]
          },
          {
            title: "Local Follow-up",
            description: "Ongoing support",
            features: [
              "Repair monitoring",
              "Weather watching",
              "Further assessment",
              "Permanent solutions"
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

export default VoiceEmergencyRoofingLocation;
