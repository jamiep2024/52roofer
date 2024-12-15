import React from 'react';

interface Review {
  author: string;
  reviewRating: number;
  reviewBody: string;
  datePublished: string;
}

interface ReviewSchemaProps {
  itemReviewed: {
    name: string;
    image?: string;
    description?: string;
  };
  reviews: Review[];
  aggregateRating: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
}

const ReviewSchema: React.FC<ReviewSchemaProps> = ({
  itemReviewed,
  reviews,
  aggregateRating
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: itemReviewed.name,
    image: itemReviewed.image,
    description: itemReviewed.description,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating || 5,
      worstRating: aggregateRating.worstRating || 1
    },
    review: reviews.map(review => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.reviewRating
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ReviewSchema;
