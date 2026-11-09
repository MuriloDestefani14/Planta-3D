// Guarda tudo no aparelho: depois da primeira visita o app abre sem internet.
// Para publicar uma versão nova, troque o número abaixo.
const VERSAO = 'planta3d-v4';
const ARQUIVOS = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'libs/three.min.js', 'libs/OrbitControls.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request, { cache: 'no-cache' }).then(r => { const cp = r.clone(); caches.open(VERSAO).then(c => c.put(e.request, cp)); return r; }).catch(() => caches.match(e.request).then(m => m || caches.match('index.html'))));
});
