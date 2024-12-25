import React from "react";

interface FAQ {
  question: string;
  answer: string;
  views: number;
  lastUpdated: string;
}

interface Problem {
  emoji: string;
  title: string;
  description: string;
  features: string[];
}

interface ProcessStep {
  title: string;
  description: string;
  features: string[];
}

interface PageConfig {
  title: string;
  serviceName: string;
  serviceType: string;
  priceRange: string;
  timeRequired: string;
  heroTitle: string;
  heroDescription: string;
  mainContent: {
    introSection: {
      title: string;
      description: string;
      features: string[];
    };
    problemSolvingSection: {
      title: string;
      problems: Problem[];
    };
    processSection: {
      title: string;
      steps: ProcessStep[];
    };
  };
  initialFAQs: FAQ[];
}

interface Props {
  config: PageConfig;
}

const ConversationalRoofingTemplate: React.FC<Props> = ({ config }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {config.heroTitle}
        </h1>
        <p className="text-xl text-gray-600">{config.heroDescription}</p>
      </div>

      {/* Intro Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {config.mainContent.introSection.title}
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          {config.mainContent.introSection.description}
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {config.mainContent.introSection.features.map((feature, index) => (
            <li key={index} className="text-gray-700 flex items-center">
              <span className="mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Problem Solving Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {config.mainContent.problemSolvingSection.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.mainContent.problemSolvingSection.problems.map(
            (problem, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl mb-4">{problem.emoji}</div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-gray-600 mb-4">{problem.description}</p>
                <ul className="space-y-2">
                  {problem.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-gray-700 flex items-center"
                    >
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {config.mainContent.processSection.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.mainContent.processSection.steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-2xl font-bold text-blue-600 mb-3">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <ul className="space-y-2">
                {step.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-gray-700 flex items-center"
                  >
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Voice Assistant FAQs
        </h2>
        <div className="space-y-6">
          {config.initialFAQs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConversationalRoofingTemplate;
