import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const VoiceRoofVentilationLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const initialFAQs = [
    {
      question: `Hey Google, find roof ventilation services in ${location}`,
      answer: `Our ${location} ventilation services include: 1) Complete system assessment for ${county} conditions, 2) New ventilation installation, 3) System upgrades and improvements, 4) Maintenance and repairs, 5) Energy efficiency solutions. Expert service across ${location}.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how much does roof ventilation cost in ${location}?`,
      answer: `${location} ventilation costs vary: 1) Basic vents: £200-£400, 2) Complete system: £800-£1,500, 3) Powered ventilation: £600-£1,200, 4) Installation: £300-£600, 5) Upgrades: From £400. Prices reflect ${county} market rates.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, what ventilation is best for ${location} homes?`,
      answer: `Best ventilation for ${location}'s climate: 1) Ridge vents suited to ${county} weather, 2) Soffit vents for proper airflow, 3) Power vents for larger spaces, 4) Solar-powered options, 5) Combined systems for optimal performance. All professionally installed.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, how long does ventilation installation take in ${location}?`,
      answer: `${location} installation times: 1) Basic vents: 1 day, 2) Complete ${county} systems: 1-2 days, 3) Complex installations: 2-3 days, 4) Multiple units: 2-4 days, 5) Weather factors: May affect timeline. Professional installation ensures quality.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, why do I need roof ventilation in ${location}?`,
      answer: `Ventilation benefits in ${location}: 1) Prevents moisture damage in ${county} weather, 2) Reduces energy costs, 3) Extends roof lifespan, 4) Improves indoor comfort, 5) Prevents ice dams in winter. Essential for property protection.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Professional Roof Ventilation in ${location}`,
    serviceName: `${location} Roof Ventilation`,
    serviceType: "voice-roof-ventilation",
    priceRange: "££",
    timeRequired: "P2D",
    heroTitle: `Need Roof Ventilation in ${location}? Just Ask!`,
    heroDescription: `Voice-activated roof ventilation services in ${location} - expert solutions for your property`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Install Roof Ventilation in ${location}!'`,
        description: `Looking for professional roof ventilation in ${location}? Simply ask your smart device about local ventilation services, and our experienced ${location} team will optimize your roof's airflow.`,
        features: [
          `• ${location} ventilation experts`,
          "• Professional installation",
          `• ${county} experience`,
          "• Energy efficiency"
        ]
      },
      problemSolvingSection: {
        title: `${location} Ventilation Solutions`,
        problems: [
          {
            emoji: "🌡️",
            title: `'${location} temperature control'`,
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
            title: `'${location} airflow'`,
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
            title: `'${location} moisture control'`,
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
            title: `'${location} energy saving'`,
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
        title: `Our ${location} Ventilation Process`,
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(locationData).map(location => ({
    params: { location }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const location = params?.location as string;
  const locationInfo = locationData[location];

  if (!locationInfo) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      location: locationInfo.name,
      county: locationInfo.county
    }
  };
};

export default VoiceRoofVentilationLocation;
