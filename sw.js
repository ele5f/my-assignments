const CACHE_NAME = "my-assignments-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./list.html",
  "./hobby.html",
  "./styles.css",
  "./Converter.html",
  "./Distance.html",
  "./calculate_grade.html",
  "./Change.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
