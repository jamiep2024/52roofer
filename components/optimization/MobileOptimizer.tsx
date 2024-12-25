import React, { useEffect } from "react";

const MobileOptimizer: React.FC = () => {
  useEffect(() => {
    const optimizeImages = () => {
      const images = document.querySelectorAll("img[data-src]");
      const isMobile = window.innerWidth <= 768;

      images.forEach((element) => {
        const img = element as HTMLImageElement;
        const src = img.getAttribute("data-src");
        const mobileSrc = img.getAttribute("data-mobile-src");

        if (isMobile && mobileSrc) {
          img.src = mobileSrc;
        } else if (src) {
          img.src = src;
        }

        // Remove data attributes after setting src
        img.removeAttribute("data-src");
        img.removeAttribute("data-mobile-src");
      });
    };

    const optimizeFonts = () => {
      const fontLinks = document.querySelectorAll(
        'link[rel="preload"][as="font"]',
      );
      const isMobile = window.innerWidth <= 768;

      fontLinks.forEach((link) => {
        if (isMobile) {
          // Adjust font loading strategy for mobile
          link.setAttribute("media", "(max-width: 768px)");
        }
      });
    };

    const optimizeTouchEvents = () => {
      const clickableElements = document.querySelectorAll(
        'a, button, [role="button"]',
      );

      clickableElements.forEach((element) => {
        element.setAttribute("touch-action", "manipulation");
      });
    };

    // Run optimizations
    optimizeImages();
    optimizeFonts();
    optimizeTouchEvents();

    // Add resize listener for responsive optimizations
    window.addEventListener("resize", optimizeImages);

    // Cleanup
    return () => {
      window.removeEventListener("resize", optimizeImages);
    };
  }, []);

  return null;
};

export default MobileOptimizer;
