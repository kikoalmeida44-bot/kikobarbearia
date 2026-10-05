self.addEventListener('install', (e) => {
  self.skipWaiting(); // Força a instalação imediata da App
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim()); // Assume o controlo do site na hora
});

self.addEventListener('fetch', (e) => {
  // Diz ao Chrome que a App consegue funcionar mesmo com internet fraca
  e.respondWith(
    fetch(e.request).catch(() => new Response('Página offline.'))
  );
});
