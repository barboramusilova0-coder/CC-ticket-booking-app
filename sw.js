/* Service worker – offline cache aplikace (data z Firestore řeší Firestore persistence) */
const VER='cc-tickets-v2.0.0',CORE=['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];
const LIB=['www.gstatic.com','cdnjs.cloudflare.com'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VER).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VER).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
  if(u.origin===location.origin){/* síť má přednost (vždy čerstvá verze), cache jako záloha offline */
    e.respondWith(fetch(r).then(res=>{if(res.ok){const c=res.clone();caches.open(VER).then(x=>x.put(r,c))}return res}).catch(()=>caches.match(r).then(m=>m||(r.mode==='navigate'?caches.match('./index.html'):undefined))));return}
  if(LIB.includes(u.hostname)){e.respondWith(caches.open(VER).then(c=>c.match(r).then(m=>{const f=fetch(r).then(res=>{if(res.ok)c.put(r,res.clone());return res}).catch(()=>m);return m||f})))}
});
