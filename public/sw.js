// /* eslint-disable no-restricted-globals */
// /* eslint-disable array-callback-return */
// /* eslint-disable consistent-return */
// /* eslint-disable no-console */
// /* eslint-disable no-var */

// self.addEventListener('active', (event) => {
//   var cacheWhiteList = ['pwa-task-manager'];
//   event.waitUntil(
//     caches.keys().then((cacheNames) => Promise.all(
//       cacheNames.map((cacheName) => {
//         if (cacheWhiteList.indexOf(cacheName) === -1) {
//           return caches.delete(cacheName);
//         }
//       }),
//     )),
//   );
// });

/* eslint-disable */
const CACHE_NAME = 'pwa-guilhermano-silva';
const urlsToCache = [
  '/',
  '/static/',
  '/index.html',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME)
    .then((cache) => cache.addAll(urlsToCache))
  )
});

self.addEventListener('activate', (event) => {
  const cacheWhiteList = ['pwa-task-manager'];
  event.waitUntil(caches.keys()
    .then((cacheNames) => Promise.all(cacheNames.map((cacheName) => {
      if (cacheWhiteList.indexOf(cacheName) === -1) {
        return caches.delete(cacheName);
      }
    })))
  )
});

// self.skipWaiting();

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) => cache.match(event.request)
      .then((response) => response || fetch(event.request)
        .then((res) => {
          cache.put(event.request, res.clone());
          return res;
        })
      )
    )
  )
});
