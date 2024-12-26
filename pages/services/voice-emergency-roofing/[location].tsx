import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const VoiceEmergencyRoofingLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const initialFAQs = [
    {
      question: `Hey Google, I need emergency roof repair in ${location}`,
      answer: `Our 24/7 emergency roofing services in ${location}, ${county} include: 1) Immediate local response team, 2) Storm damage repairs, 3) Temporary protective measures, 4) Structural stabilization, 5) Water damage prevention. We'll dispatch our ${location} team quickly.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how fast can I get emergency roof repair in ${location}?`,
      answer: `Our ${location} emergency response times: 1) Initial phone response: Within 15 minutes, 2) Local team dispatch: 1-2 hours, 3) On-site arrival: 2-4 hours, 4) Emergency repairs: Immediate start, 5) 24/7 availability in ${location} area.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, what emergency roof services do you offer in ${location}?`,
      answer: `Our ${location} emergency services cover: 1) Local storm damage assessment, 2) Rapid waterproofing, 3) Structural support, 4) Emergency leak repairs, 5) Complete area coverage. Our ${location} team handles all urgent situations.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, how much is emergency roof repair in ${location}?`,
      answer: `${location} emergency repair costs: 1) Emergency call-out: £200-£400, 2) Temporary repairs: £300-£800, 3) Storm damage fixes: £500-£2,000, 4) Emergency tarping: £400-£700, 5) After-hours service: Additional £100-£200. Local rates may vary.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, do you handle storm roof damage in ${location}?`,
      answer: `Yes, our ${location} team handles all storm emergencies: 1) Local damage assessment, 2) Emergency water diversion, 3) Temporary covering, 4) Structure stabilization, 5) Insurance documentation. Available 24/7 in ${location} and surrounding areas.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `24/7 Emergency Roof Repair in ${location}`,
    serviceName: `${location} Emergency Roofing`,
    serviceType: "voice-emergency-roofing",
    priceRange: "£££",
    timeRequired: "P1D",
    heroTitle: `Emergency Roof Help in ${location}? Just Ask!`,
    heroDescription: `Voice-activated emergency roofing services in ${location} - available 24/7`,
    mainContent: {
      introSection: {
        title: `Just Say: 'I Need Emergency Roof Repair in ${location}!'`,
        description: `Experiencing a roofing emergency in ${location}? Simply ask your smart device for emergency roof repair, and our local ${location} team will respond immediately with 24/7 emergency services.`,
        features: [
          `• 24/7 ${location} emergency response`,
          "• Local rapid damage assessment",
          "• Immediate temporary repairs",
          `• ${location} storm specialists`
        ]
      },
      problemSolvingSection: {
        title: `${location} Emergency Roofing Solutions`,
        problems: [
          {
            emoji: "🌧️",
            title: `'Help, my ${location} roof is leaking!'`,
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
            title: `'Storm damage in ${location}'`,
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
            title: `'Need urgent ${location} repairs'`,
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
            title: `'Protect my ${location} property'`,
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
        title: `Our ${location} Emergency Response Process`,
        steps: [
          {
            title: "Local Response",
            description: "24/7 emergency contact",
            features: [
              "Local assessment",
              "Priority scheduling",
              `${location} team dispatch`,
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

export default VoiceEmergencyRoofingLocation;
