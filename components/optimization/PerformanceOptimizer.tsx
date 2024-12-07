import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Lazy load images
    const lazyLoadImages = () => {
      if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
        });
      } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
      }
    };

    // Preload critical resources
    const preloadResources = () => {
      const preloadLinks = [
        { rel: 'preload', href: '/fonts/main-font.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        { rel: 'preload', href: '/images/hero-bg.jpg', as: 'image' },
        { rel: 'preload', href: '/images/logo.png', as: 'image' }
      ];

      preloadLinks.forEach(link => {
        const linkEl = document.createElement('link');
        Object.entries(link).forEach(([key, value]) => {
          linkEl.setAttribute(key, value);
        });
        document.head.appendChild(linkEl);
      });
    };

    // Optimize third-party scripts
    const optimizeThirdParty = () => {
      // Defer non-critical third-party scripts
      const deferScripts = [
        'https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID',
        'https://connect.facebook.net/en_US/sdk.js'
      ];

      deferScripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        document.body.appendChild(script);
      });
    };

    // Resource hints
    const addResourceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
      ];

      hints.forEach(hint => {
        const link = document.createElement('link');
        Object.entries(hint).forEach(([key, value]) => {
          link.setAttribute(key, value);
        });
        document.head.appendChild(link);
      });
    };

    // Initialize performance optimizations
    lazyLoadImages();
    preloadResources();
    optimizeThirdParty();
    addResourceHints();

    // Clean up function
    return () => {
      // Remove any event listeners or cleanup tasks
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
