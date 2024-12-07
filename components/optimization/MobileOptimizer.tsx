import React, { useEffect } from 'react';

const MobileOptimizer: React.FC = () => {
  useEffect(() => {
    // Optimize images based on device
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const isMobile = window.innerWidth <= 768;

      images.forEach((img: HTMLImageElement) => {
        const src = img.getAttribute('data-src');
        const mobileSrc = img.getAttribute('data-mobile-src');
        
        if (isMobile && mobileSrc) {
          img.src = mobileSrc;
        } else if (src) {
          img.src = src;
        }
      });
    };

    // Optimize font loading
    const optimizeFonts = () => {
      const fontLinks = document.querySelectorAll('link[rel="stylesheet"][href*="fonts"]');
      fontLinks.forEach((link: HTMLLinkElement) => {
        link.setAttribute('media', 'print');
        link.setAttribute('onload', "this.media='all'");
      });
    };

    // Add touch optimization
    const optimizeTouch = () => {
      document.addEventListener('touchstart', () => {}, {passive: true});
      document.addEventListener('touchmove', () => {}, {passive: true});
      document.addEventListener('wheel', () => {}, {passive: true});
    };

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false;
      document.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            // Perform scroll optimizations
            ticking = false;
          });
          ticking = true;
        }
      });
    };

    // Initialize optimizations
    optimizeImages();
    optimizeFonts();
    optimizeTouch();
    optimizeScroll();

    // Add resize listener for responsive optimizations
    window.addEventListener('resize', optimizeImages);

    // Cleanup
    return () => {
      window.removeEventListener('resize', optimizeImages);
    };
  }, []);

  return null;
};

export default MobileOptimizer;
