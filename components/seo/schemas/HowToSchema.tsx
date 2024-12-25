import React from "react";

interface Step {
  name: string;
  text: string;
  image: string;
}

interface Props {
  name: string;
  description: string;
  steps: Step[];
  totalTime: string;
}

const HowToSchema: React.FC<Props> = ({
  name,
  description,
  steps,
  totalTime,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: name,
    description: description,
    totalTime: totalTime,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: {
        "@type": "ImageObject",
        url: step.image,
        height: "300",
        width: "400",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default HowToSchema;
