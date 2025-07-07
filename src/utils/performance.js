// Performance monitoring utilities

export function measureWebVitals(callback) {
  // Only run in production
  if (process.env.NODE_ENV !== 'production') return;

  // Dynamic import for better performance
  import('web-vitals').then(({ getLCP, getFID, getFCP, getCLS, getTTFB }) => {
    getLCP(callback);
    getFID(callback);
    getFCP(callback);
    getCLS(callback);
    getTTFB(callback);
  }).catch(error => {
    console.warn('Web Vitals could not be loaded:', error);
  });
}

export function logPerformanceMetrics() {
  if (typeof window === 'undefined' || !window.performance) return;

  // Log navigation timing
  const navigation = performance.getEntriesByType('navigation')[0];
  if (navigation) {
    const metrics = {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      firstPaint: 0,
      firstContentfulPaint: 0
    };

    // Get paint metrics
    const paintMetrics = performance.getEntriesByType('paint');
    paintMetrics.forEach(metric => {
      if (metric.name === 'first-paint') {
        metrics.firstPaint = metric.startTime;
      } else if (metric.name === 'first-contentful-paint') {
        metrics.firstContentfulPaint = metric.startTime;
      }
    });

    console.log('Performance Metrics:', metrics);
  }
}

export function preloadCriticalResources() {
  // Preload critical fonts
  const fontPreload = document.createElement('link');
  fontPreload.rel = 'preload';
  fontPreload.href = '/fonts/hatton/PP Hatton Bold 700.otf';
  fontPreload.as = 'font';
  fontPreload.type = 'font/otf';
  fontPreload.crossOrigin = 'anonymous';
  document.head.appendChild(fontPreload);

  // Preload critical images
  const criticalImages = [
    '/images/oak-left.png',
    '/images/oak-right.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = 'image';
    document.head.appendChild(link);
  });
}

// Service worker registration
export function registerServiceWorker() {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}