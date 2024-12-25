import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface FAQ {
  question: string;
  answer: string;
  views: number;
  lastUpdated: string;
}

interface Props {
  initialFAQs: FAQ[];
  category: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const DynamicFAQ: React.FC<Props> = ({ initialFAQs, category }) => {
  const [faqs, setFaqs] = useState(initialFAQs);
  const [trendingQuestions, setTrendingQuestions] = useState<string[]>([]);
  const router = useRouter();

  // Track FAQ views and update trending questions
  const handleFAQClick = (index: number) => {
    const updatedFAQs = [...faqs];
    updatedFAQs[index] = {
      ...updatedFAQs[index],
      views: updatedFAQs[index].views + 1,
      lastUpdated: new Date().toISOString(),
    };
    setFaqs(updatedFAQs);
    updateTrendingQuestions(updatedFAQs);
  };

  // Update trending questions based on view count
  const updateTrendingQuestions = (currentFAQs: FAQ[]) => {
    const sorted = [...currentFAQs].sort((a, b) => b.views - a.views);
    setTrendingQuestions(sorted.slice(0, 3).map((faq) => faq.question));
  };

  // Simulate AI-powered FAQ updates based on user behavior
  useEffect(() => {
    const updateFAQsWithAI = async () => {
      // In a real implementation, this would call an AI service
      // For now, we'll simulate dynamic updates based on view patterns
      const mostViewed = Math.max(...faqs.map((faq) => faq.views));
      if (mostViewed > 5) {
        const newFAQ = {
          question: `What are the latest trends in ${category} for ${new Date().getFullYear()}?`,
          answer:
            "Our AI has noticed increased interest in sustainable materials, smart roofing technology, and energy-efficient solutions. We regularly update this information based on industry developments and customer inquiries.",
          views: 0,
          lastUpdated: new Date().toISOString(),
        };
        setFaqs((prev) => [...prev, newFAQ]);
      }
    };

    const interval = setInterval(updateFAQsWithAI, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [faqs, category]);

  return (
    <div className="space-y-8">
      {/* Trending Questions Section */}
      {trendingQuestions.length > 0 && (
        <div className="bg-primary-50 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3">Trending Questions</h3>
          <ul className="space-y-2">
            {trendingQuestions.map((question, index) => (
              <li
                key={index}
                className="text-primary-600 hover:text-primary-700 cursor-pointer"
              >
                {question}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <button
              className="w-full text-left p-4 focus:outline-none"
              onClick={() => handleFAQClick(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="text-gray-500 text-sm">
                  {formatDate(faq.lastUpdated)}
                </span>
              </div>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicFAQ;
