import React, { useState, useEffect } from 'react';
import FAQSchema from '../seo/schemas/FAQSchema';

interface FAQItem {
  question: string;
  answer: string;
  views?: number;
  lastUpdated?: string;
}

interface DynamicFAQProps {
  initialFAQs: FAQItem[];
  category?: string;
}

const DynamicFAQ: React.FC<DynamicFAQProps> = ({ initialFAQs, category }) => {
  const [faqs, setFaqs] = useState<FAQItem[]>(initialFAQs);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Track FAQ interactions
  const trackFAQInteraction = (question: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      const analyticsData = {
        event: 'faq_interaction',
        faq_question: question,
        category: category
      };
      window.dataLayer.push(analyticsData);
    }
  };

  const handleFAQClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    
    // Update view count
    setFaqs(prevFaqs => 
      prevFaqs.map((faq, i) => 
        i === index 
          ? { ...faq, views: (faq.views || 0) + 1 }
          : faq
      )
    );

    // Track interaction
    try {
      trackFAQInteraction(faqs[index].question);
    } catch (error) {
      console.error('Error tracking FAQ interaction:', error);
    }
  };

  // Sort FAQs by view count (most viewed first)
  useEffect(() => {
    const sortedFAQs = [...faqs].sort((a, b) => 
      (b.views || 0) - (a.views || 0)
    );
    setFaqs(sortedFAQs);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-accent flex justify-between items-center"
              onClick={() => handleFAQClick(index)}
              aria-expanded={activeIndex === index}
            >
              <span className="text-lg font-medium text-gray-900">{faq.question}</span>
              <span className="ml-6">
                <svg
                  className={`w-6 h-6 transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  } transition-transform duration-200`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
                {faq.lastUpdated && (
                  <p className="text-sm text-gray-400 mt-2">
                    Last updated: {new Date(faq.lastUpdated).toLocaleDateString()}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Schema markup */}
      <FAQSchema mainEntity={faqs} />
    </div>
  );
};

export default DynamicFAQ;
