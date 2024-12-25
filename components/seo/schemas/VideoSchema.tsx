import React from "react";

interface Props {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  embedUrl: string;
  contentUrl?: string;
}

const VideoSchema: React.FC<Props> = ({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  embedUrl,
  contentUrl,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: name,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: uploadDate,
    duration: duration,
    embedUrl: embedUrl,
    ...(contentUrl && { contentUrl: contentUrl }),
    publisher: {
      "@type": "Organization",
      name: "52Roofer",
      logo: {
        "@type": "ImageObject",
        url: "https://www.52roofer.com/images/logo.png",
      },
    },
    isFamilyFriendly: true,
    potentialAction: {
      "@type": "WatchAction",
      target: embedUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default VideoSchema;
