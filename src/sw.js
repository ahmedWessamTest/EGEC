// const CACHE_NAME = 'egec-static-v1';
// const PRECACHE_URLS = [
//   './assets/css/main.css',
//   './assets/css/style.css',
//   './vendors/flowbite/flowbite.min.css',
//   './vendors/swiper/swiper-bundle.min.css',
//   './vendors/flowbite/flowbite.min.css',
//   './vendors/swiper/swiper-bundle.min.js',
//   './assets/js/main.js',
//   './assets/js/home.js',
//   './assets/images/home/logo.webp',
//   './assets/icons/three-buble.webp',
//   './assets/icons/exclamation-mark.webp',
//   './assets/icons/double-green-line.webp',
//   './assets/icons/single-line.webp',
//   '/assets/icons/low-wave.webp',
//   './assets/icons/single-green-line.webp',
//   '/assets/icons/down-arrow.webp',
//   '/assets/icons/three-lines-vertical.webp',
//   './assets/icons/testimonials-icon.webp',
//   '/assets/icons/quotation.webp',
//   '/assets/icons/xl-Scribbles.webp',
//   '/assets/icons/wide-Scribbles.webp',
//   '/assets/icons/accepted-icon.webp',
//   '/assets/icons/chat-with-us-icon.webp',
//   '/assets/icons/contact-EGEC-icon.webp',
//   '/assets/icons/Suggestions-icon.webp',
//   '/assets/icons/dashed-circle.webp',
//   '/assets/icons/dashed-circle-main.webp',
//   '/assets/icons/double-exclamation-green.webp',
//   '/assets/icons/green-dots.webp',
//   '/assets/icons/half-circle.webp',
//   '/assets/icons/left-arrow.webp',
//   '/assets/icons/question-mark.webp',
//   '/assets/icons/bullets.webp',
//   '/assets/images/shared/digital-bond-logo.webp',
//   './assets/font/static/Alexandria-Regular.ttf',
//   './assets/font/static/Alexandria-SemiBold.ttf',
//   './assets/font/static/Alexandria-Bold.ttf',
//   './assets/font/static/Alexandria-Light.ttf'
// ];

// self.addEventListener('install', event => {
//   event.waitUntil(
//     (async () => {
//       const cache = await caches.open(CACHE_NAME);

//       for (const url of PRECACHE_URLS) {
//         try {
//           const response = await fetch(url);
//           if (response.ok) {
//             await cache.put(url, response);
//           } else {
//             console.warn('Skipped (not found):', url);
//           }
//         } catch (err) {
//           console.warn('Failed to cache:', url);
//         }
//       }
//     })()
//   );

//   self.skipWaiting();
// });


// self.addEventListener('activate', event => {
//   event.waitUntil(
//     caches.keys().then(keys =>
//       Promise.all(
//         keys.map(key => {
//           if (key !== CACHE_NAME) return caches.delete(key);
//         })
//       )
//     )
//   );
//   self.clients.claim();
// });

// self.addEventListener('fetch', event => {
//   const request = event.request;

//   if (request.mode === 'navigate') {
//     event.respondWith(
//       fetch(request)
//         .then(response => {
//           const resClone = response.clone();
//           caches.open(CACHE_NAME).then(cache => cache.put(request, resClone));
//           return response;
//         })
//         .catch(() => caches.match('/'))
//     );
//     return;
//   }

//   // باقي الملفات → cache-first with background update
//   if (request.method === 'GET' && request.url.startsWith(self.location.origin)) {
//     event.respondWith(
//       caches.match(request).then(cachedResponse => {
//         const fetchPromise = fetch(request)
//           .then(networkResponse => {
//             const clone = networkResponse.clone();
//             caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
//             return networkResponse;
//           })
//           .catch(() => null);

//         return cachedResponse || fetchPromise;
//       })
//     );
//   }
// });


// // Note: GitHub Pages may add its own cache headers; the service worker provides an effective client-side cache for repeat visits.
