const CACHE_NAME = 'egec-static-v2'; // Changed version for updates
const PRECACHE_URLS = [
  // CSS
  '/assets/css/main.css',
  '/assets/css/style.css',
  '/vendors/flowbite/flowbite.min.css',
  '/vendors/swiper/swiper-bundle.min.css',
  
  // JavaScript
  '/vendors/swiper/swiper-bundle.min.js',
  '/assets/js/main.js',
  '/assets/js/home.js',
  
  // Images
  '/assets/images/home/logo.webp',
  '/assets/images/shared/digital-bond-logo.webp',
  
  // Icons (consolidated and corrected paths)
  '/assets/icons/three-buble.webp',
  '/assets/icons/exclamation-mark.webp',
  '/assets/icons/double-green-line.webp',
  '/assets/icons/single-line.webp',
  '/assets/icons/low-wave.webp',
  '/assets/icons/single-green-line.webp',
  '/assets/icons/down-arrow.webp',
  '/assets/icons/three-lines-vertical.webp',
  '/assets/icons/testimonials-icon.webp',
  '/assets/icons/quotation.webp',
  '/assets/icons/xl-Scribbles.webp',
  '/assets/icons/wide-Scribbles.webp',
  '/assets/icons/accepted-icon.webp',
  '/assets/icons/chat-with-us-icon.webp',
  '/assets/icons/contact-EGEC-icon.webp',
  '/assets/icons/Suggestions-icon.webp',
  '/assets/icons/dashed-circle.webp',
  '/assets/icons/dashed-circle-main.webp',
  '/assets/icons/double-exclamation-green.webp',
  '/assets/icons/green-dots.webp',
  '/assets/icons/half-circle.webp',
  '/assets/icons/left-arrow.webp',
  '/assets/icons/question-mark.webp',
  '/assets/icons/bullets.webp',
  
  // Fonts
  '/assets/font/static/Alexandria-Regular.ttf',
  '/assets/font/static/Alexandria-SemiBold.ttf',
  '/assets/font/static/Alexandria-Bold.ttf',
  '/assets/font/static/Alexandria-Light.ttf'
];

// Remove duplicates and normalize URLs
const UNIQUE_URLS = [...new Set(PRECACHE_URLS)];

self.addEventListener('install', event => {
  self.skipWaiting();
  
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      
      // Use cache.addAll for better performance
      try {
        await cache.addAll(UNIQUE_URLS);
        console.log('Pre-caching successful');
      } catch (error) {
        console.warn('Some resources failed to cache:', error);
        
        // Cache individually to handle failures gracefully
        const promises = UNIQUE_URLS.map(async (url) => {
          try {
            await cache.add(url);
          } catch (err) {
            console.warn('Failed to cache:', url, err);
          }
        });
        
        await Promise.allSettled(promises);
      }
    })()
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      // Clean up old caches
      const cacheKeys = await caches.keys();
      await Promise.all(
        cacheKeys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
      
      // Take control immediately
      await self.clients.claim();
      console.log('Service Worker activated');
    })()
  );
});

self.addEventListener('fetch', event => {
  // Only handle GET requests and same-origin requests
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    (async () => {
      const cachedResponse = await caches.match(event.request);
      
      // Return cached version if available
      if (cachedResponse) {
        // Update cache in background
        updateCache(event.request);
        return cachedResponse;
      }
      
      // Try network
      try {
        const networkResponse = await fetch(event.request);
        
        // Cache successful responses
        if (networkResponse.status === 200) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, networkResponse.clone());
        }
        
        return networkResponse;
      } catch (error) {
        // Network failed - return appropriate fallback
        return handleFetchError(event.request, error);
      }
    })()
  );
});

// Helper function to update cache in background
async function updateCache(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, networkResponse);
    }
  } catch (error) {
    // Silent fail - we have cached version
  }
}

// Helper function to handle fetch errors
async function handleFetchError(request, error) {
  console.warn('Fetch failed:', request.url, error);
  
  // For navigation requests, return offline page
  if (request.mode === 'navigate') {
    // You could return a custom offline page here
    return new Response('Network error', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
  
  // For images, you could return a placeholder image
  if (request.destination === 'image') {
    // Return a placeholder image response if needed
    // return caches.match('/assets/images/placeholder.webp');
  }
  
  return new Response('Network error', {
    status: 408,
    statusText: 'Network Request Failed'
  });
}