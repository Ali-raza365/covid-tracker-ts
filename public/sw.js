const cacheName = 'site-static-v2';
const assets = [
    '/',
    '/favicon.ico',
    '/logo192.png',
];

// eslint-disable-next-line no-restricted-globals
self.addEventListener("activate", function(e) {
    console.log("[ServiceWorker] Activate");
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(assets);
        })
    );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', evt => {
    //console.log('fetch event', evt);
 // check if request is made by chrome extensions or web page
  // if request is made for web page url must contains http.
  if (!(evt.request.url.indexOf('http') === 0)) return; // skip the request. if request is not made with http protocol

    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(cacheName).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    return fetchRes;
                })
            });
        })
    );
});