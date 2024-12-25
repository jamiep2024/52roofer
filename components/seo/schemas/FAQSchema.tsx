import React from "react";

interface FAQ {
  question: string;
  answer: string;
  views?: number;
  lastUpdated?: string;
}

interface Props {
  faqs: FAQ[];
  category?: string;
}

const FAQSchema: React.FC<Props> = ({ faqs, category }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
      ...(faq.lastUpdated && {
        dateModified: faq.lastUpdated,
      }),
    })),
    ...(category && {
      about: {
        "@type": "Thing",
        name: category,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default FAQSchema;
