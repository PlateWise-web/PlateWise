// Minimal service worker: makes PlateWise installable. Always uses the network (no stale pages).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
