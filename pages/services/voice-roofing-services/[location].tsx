import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const VoiceRoofingServicesLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const initialFAQs = [
    {
      question: `Hey Google, what roofing services are available in ${location}?`,
      answer: `Our ${location} roofing services include: 1) Complete installations for ${county} properties, 2) Repairs and maintenance, 3) Emergency services, 4) Inspections and surveys, 5) Specialist services like skylights and ventilation. Full service coverage across ${location}.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, find a complete roofing service in ${location}`,
      answer: `We provide comprehensive ${location} services including: 1) New roof installations suited to ${county}, 2) Emergency repairs 24/7, 3) Regular maintenance programs, 4) Commercial and residential work, 5) Specialist installations. One-stop roofing solution.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, what roofing work can you do in ${location}?`,
      answer: `Our ${location} expertise covers: 1) All roof types common in ${county}, 2) Emergency and routine repairs, 3) Maintenance and inspections, 4) Improvements and upgrades, 5) Specialist installations. Professional service for all needs.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, what makes your ${location} roofing service different?`,
      answer: `We stand out in ${location} through: 1) Extensive ${county} experience, 2) Comprehensive service range, 3) Emergency 24/7 availability, 4) Quality guarantees, 5) Professional expertise. Complete customer satisfaction.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, do you offer full roofing services in ${location}?`,
      answer: `Yes, our ${location} full service includes: 1) Free consultations for ${county} properties, 2) Complete project management, 3) All types of roofing work, 4) Emergency response service, 5) Aftercare and maintenance. Everything you need.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Complete Roofing Services in ${location}`,
    serviceName: `${location} Roofing Services`,
    serviceType: "voice-roofing-services",
    priceRange: "£££",
    timeRequired: "P1D",
    heroTitle: `Need Roofing Services in ${location}? Just Ask!`,
    heroDescription: `Voice-activated roofing services in ${location} - complete solutions for all your roofing needs`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Find Roofing Services in ${location}!'`,
        description: `Looking for comprehensive roofing services in ${location}? Simply ask your smart device about local roofing services, and our experienced ${location} team will handle all your roofing needs.`,
        features: [
          `• Complete ${location} service`,
          "• Professional team",
          `• ${county} expertise`,
          "• Quality guaranteed"
        ]
      },
      problemSolvingSection: {
        title: `${location} Roofing Solutions`,
        problems: [
          {
            emoji: "🏠",
            title: `'${location} new roof'`,
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
            title: `'${location} repairs'`,
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
            title: `'${location} inspection'`,
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
            title: `'${location} emergency'`,
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
        title: `Our ${location} Service Process`,
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

export default VoiceRoofingServicesLocation;
