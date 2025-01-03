import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { serviceAreas } from '../../../data/serviceAreas';

interface LocationPageProps {
  location: string;
  county: string;
  displayLocation: string;
}

const VoiceSkylightInstallationLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const initialFAQs = [
    {
      question: `Hey Google, find skylight installation in ${displayLocation}`,
      answer: `Our ${displayLocation} skylight services include: 1) Professional installation for ${county} homes, 2) Custom skylight solutions, 3) Energy-efficient options, 4) Roof preparation work, 5) Weatherproofing and sealing. Expert installation across ${displayLocation}.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how much does skylight installation cost in ${displayLocation}?`,
      answer: `${displayLocation} skylight costs vary: 1) Standard skylights: £800-£1,500, 2) Solar-powered: £1,200-£2,000, 3) Custom designs: £1,500-£3,000, 4) Installation: £500-£1,000, 5) Additional features: From £200. Prices reflect ${county} market rates.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, what skylights are best for ${displayLocation}?`,
      answer: `Best skylights for ${displayLocation}'s climate: 1) Solar-powered venting for ${county} weather, 2) Fixed skylights with excellent insulation, 3) Manual venting options, 4) Energy Star rated models, 5) Custom solutions for local conditions. All professionally installed.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, how long does skylight installation take in ${displayLocation}?`,
      answer: `${displayLocation} installation times: 1) Standard installation: 1-2 days, 2) Complex ${county} projects: 2-3 days, 3) Multiple skylights: 2-4 days, 4) Custom work: 3-5 days, 5) Weather factors: May add time. Professional installation ensures quality.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, what's included in ${displayLocation} skylight installation?`,
      answer: `Our ${displayLocation} installation includes: 1) Complete roof assessment for ${county} conditions, 2) Professional fitting, 3) Weatherproofing, 4) Interior finishing, 5) Full warranty coverage. Everything handled by local experts.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Professional Skylight Installation in ${displayLocation}`,
    serviceName: `${displayLocation} Skylight Installation`,
    serviceType: "voice-skylight-installation",
    priceRange: "£££",
    timeRequired: "P2D",
    heroTitle: `Need Skylights in ${displayLocation}? Just Ask!`,
    heroDescription: `Voice-activated skylight installation services in ${displayLocation} - bring natural light to your home`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Install Skylights in ${displayLocation}!'`,
        description: `Looking for professional skylight installation in ${displayLocation}? Simply ask your smart device about local skylight services, and our experienced ${displayLocation} team will transform your home with natural light.`,
        features: [
          `• ${displayLocation} skylight experts`,
          "• Professional installation",
          `• ${county} experience`,
          "• Quality guarantees"
        ]
      },
      problemSolvingSection: {
        title: `${displayLocation} Skylight Solutions`,
        problems: [
          {
            emoji: "🌞",
            title: `'New ${displayLocation} skylight'`,
            description: "Complete installation",
            features: [
              "Quality products",
              "Expert fitting",
              "Weather sealing",
              "Full warranty"
            ]
          },
          {
            emoji: "🏠",
            title: `'${displayLocation} home upgrade'`,
            description: "Home improvement",
            features: [
              "Natural light",
              "Energy savings",
              "Value addition",
              "Modern design"
            ]
          },
          {
            emoji: "🌡️",
            title: `'${displayLocation} ventilation'`,
            description: "Ventilation solutions",
            features: [
              "Fresh air",
              "Temperature control",
              "Energy efficiency",
              "Smart controls"
            ]
          },
          {
            emoji: "💎",
            title: `'${displayLocation} custom design'`,
            description: "Custom solutions",
            features: [
              "Unique designs",
              "Size options",
              "Style choices",
              "Special features"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${displayLocation} Installation Process`,
        steps: [
          {
            title: "Initial Consultation",
            description: "Project planning",
            features: [
              "Site assessment",
              "Design discussion",
              "Option review",
              "Quote provision"
            ]
          },
          {
            title: "Preparation Work",
            description: "Installation prep",
            features: [
              "Roof inspection",
              "Area preparation",
              "Material delivery",
              "Safety setup"
            ]
          },
          {
            title: "Expert Installation",
            description: "Professional fitting",
            features: [
              "Precise cutting",
              "Proper mounting",
              "Weather sealing",
              "Interior finish"
            ]
          },
          {
            title: "Final Inspection",
            description: "Quality assurance",
            features: [
              "Leak testing",
              "Operation check",
              "Clean-up verify",
              "Warranty provide"
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

export default VoiceSkylightInstallationLocation;
