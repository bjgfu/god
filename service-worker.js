self.addEventListener("install", (e) => {
  console.log("서비스워커 설치됨");
  self.skipWaiting();
});

self.addEventListener("fetch", function (event) {
  event.respondWith(fetch(event.request));
});