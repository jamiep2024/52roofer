import React from "react";
import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
}

export default function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="absolute inset-0 bg-blue-600">
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
          loading="eager"
          quality={85}
          onError={(e) => {
            const imgElement = e.target as HTMLImageElement;
            imgElement.style.display = "none";
          }}
        />
      </div>
    </div>
  );
}
