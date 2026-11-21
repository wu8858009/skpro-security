// 讓手機可以「安裝」成 App（Android Chrome 需要有 service worker 才會出現安裝選項）。
// 刻意不做任何快取：資料都在雲端、網頁更新靠 version.json 偵測，快取反而會讓大家卡在舊版。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* 不攔截，照一般網路請求 */ });
