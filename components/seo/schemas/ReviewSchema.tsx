import React from "react";

interface Review {
  author: string;
  reviewRating: number;
  reviewBody: string;
  datePublished: string;
}

interface ItemReviewed {
  name: string;
  image: string;
  description: string;
}

interface AggregateRating {
  ratingValue: number;
  reviewCount: number;
}

interface Props {
  itemReviewed: ItemReviewed;
  reviews: Review[];
  aggregateRating: AggregateRating;
}

const ReviewSchema: React.FC<Props> = ({
  itemReviewed,
  reviews,
  aggregateRating,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `#business-reviews`,
    name: itemReviewed.name,
    image: itemReviewed.image,
    description: itemReviewed.description,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.reviewRating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ReviewSchema;
