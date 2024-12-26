import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const VoiceSkylightInstallationLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const initialFAQs = [
    {
      question: `Hey Google, find skylight installation in ${location}`,
      answer: `Our ${location} skylight services include: 1) Professional installation for ${county} homes, 2) Custom skylight solutions, 3) Energy-efficient options, 4) Roof preparation work, 5) Weatherproofing and sealing. Expert installation across ${location}.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how much does skylight installation cost in ${location}?`,
      answer: `${location} skylight costs vary: 1) Standard skylights: £800-£1,500, 2) Solar-powered: £1,200-£2,000, 3) Custom designs: £1,500-£3,000, 4) Installation: £500-£1,000, 5) Additional features: From £200. Prices reflect ${county} market rates.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, what skylights are best for ${location}?`,
      answer: `Best skylights for ${location}'s climate: 1) Solar-powered venting for ${county} weather, 2) Fixed skylights with excellent insulation, 3) Manual venting options, 4) Energy Star rated models, 5) Custom solutions for local conditions. All professionally installed.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, how long does skylight installation take in ${location}?`,
      answer: `${location} installation times: 1) Standard installation: 1-2 days, 2) Complex ${county} projects: 2-3 days, 3) Multiple skylights: 2-4 days, 4) Custom work: 3-5 days, 5) Weather factors: May add time. Professional installation ensures quality.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, what's included in ${location} skylight installation?`,
      answer: `Our ${location} installation includes: 1) Complete roof assessment for ${county} conditions, 2) Professional fitting, 3) Weatherproofing, 4) Interior finishing, 5) Full warranty coverage. Everything handled by local experts.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Professional Skylight Installation in ${location}`,
    serviceName: `${location} Skylight Installation`,
    serviceType: "voice-skylight-installation",
    priceRange: "£££",
    timeRequired: "P2D",
    heroTitle: `Need Skylights in ${location}? Just Ask!`,
    heroDescription: `Voice-activated skylight installation services in ${location} - bring natural light to your home`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Install Skylights in ${location}!'`,
        description: `Looking for professional skylight installation in ${location}? Simply ask your smart device about local skylight services, and our experienced ${location} team will transform your home with natural light.`,
        features: [
          `• ${location} skylight experts`,
          "• Professional installation",
          `• ${county} experience`,
          "• Quality guarantees"
        ]
      },
      problemSolvingSection: {
        title: `${location} Skylight Solutions`,
        problems: [
          {
            emoji: "🌞",
            title: `'New ${location} skylight'`,
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
            title: `'${location} home upgrade'`,
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
            title: `'${location} ventilation'`,
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
            title: `'${location} custom design'`,
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
        title: `Our ${location} Installation Process`,
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

export default VoiceSkylightInstallationLocation;
