if(!self.define){let s,e={};const o=(o,l)=>(o=new URL(o+".js",l).href,e[o]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=o,s.onload=e,document.head.appendChild(s)}else s=o,importScripts(o),e()})).then((()=>{let s=e[o];if(!s)throw new Error(`Module ${o} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let i={};const a=s=>o(s,n),t={module:{uri:n},exports:i,require:a};e[n]=Promise.all(l.map((s=>t[s]||a(s)))).then((s=>(r(...s),i)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"eed821a5bbfee3a20aab9c51c4977743"},{url:"assets/ArrayPagination-6daca21d.js",revision:null},{url:"assets/Dashboard-4b06aff6.js",revision:null},{url:"assets/Dashboard-cf4a4360.css",revision:null},{url:"assets/dayjs.min-35912dac.js",revision:null},{url:"assets/faker-dcfab09f.js",revision:null},{url:"assets/index-34ed039f.js",revision:null},{url:"assets/index-4904e4b9.js",revision:null},{url:"assets/index-6d617b6c.css",revision:null},{url:"assets/Login-1539cffc.js",revision:null},{url:"assets/Logs-3bee428a.js",revision:null},{url:"assets/Logs-72dd2677.css",revision:null},{url:"assets/MagnetHandler-85dc3add.js",revision:null},{url:"assets/materialdesignicons-webfont-28c8f97f.woff",revision:null},{url:"assets/materialdesignicons-webfont-31010194.woff2",revision:null},{url:"assets/MoveTorrentDialog.vue_vue_type_script_setup_true_lang-038612fa.js",revision:null},{url:"assets/PasswordField.vue_vue_type_script_setup_true_lang-ceb98add.js",revision:null},{url:"assets/roboto-cyrillic-400-normal-495d38d4.woff2",revision:null},{url:"assets/roboto-cyrillic-400-normal-adba67d2.woff",revision:null},{url:"assets/roboto-cyrillic-ext-400-normal-0a32035a.woff",revision:null},{url:"assets/roboto-cyrillic-ext-400-normal-b7ef2cd1.woff2",revision:null},{url:"assets/roboto-greek-400-normal-076b9dc1.woff",revision:null},{url:"assets/roboto-greek-400-normal-daf51ab5.woff2",revision:null},{url:"assets/roboto-latin-400-normal-a9fdbefa.woff",revision:null},{url:"assets/roboto-latin-400-normal-f6734f81.woff2",revision:null},{url:"assets/roboto-latin-ext-400-normal-3c23eb02.woff2",revision:null},{url:"assets/roboto-latin-ext-400-normal-c2b94086.woff",revision:null},{url:"assets/roboto-mono-cyrillic-400-normal-8c367f2f.woff2",revision:null},{url:"assets/roboto-mono-cyrillic-400-normal-f32fcdb5.woff",revision:null},{url:"assets/roboto-mono-cyrillic-ext-400-normal-ae7d87eb.woff",revision:null},{url:"assets/roboto-mono-cyrillic-ext-400-normal-eef02d41.woff2",revision:null},{url:"assets/roboto-mono-greek-400-normal-3355834d.woff",revision:null},{url:"assets/roboto-mono-greek-400-normal-53a8927b.woff2",revision:null},{url:"assets/roboto-mono-latin-400-normal-7295944e.woff2",revision:null},{url:"assets/roboto-mono-latin-400-normal-d5d7d67f.woff",revision:null},{url:"assets/roboto-mono-latin-ext-400-normal-20f2c9c1.woff",revision:null},{url:"assets/roboto-mono-latin-ext-400-normal-820adbd1.woff2",revision:null},{url:"assets/roboto-mono-vietnamese-400-normal-9a7a0360.woff",revision:null},{url:"assets/roboto-vietnamese-400-normal-77b24796.woff2",revision:null},{url:"assets/roboto-vietnamese-400-normal-d2390f1a.woff",revision:null},{url:"assets/rss-97c88cc0.js",revision:null},{url:"assets/RssArticles-d81b688a.js",revision:null},{url:"assets/RssArticles-fc6a9be3.css",revision:null},{url:"assets/SearchEngine-a2c53bab.js",revision:null},{url:"assets/Settings-2dd185e1.js",revision:null},{url:"assets/Settings-8a0788c7.css",revision:null},{url:"assets/TorrentDetail-30929231.css",revision:null},{url:"assets/TorrentDetail-5569f59c.js",revision:null},{url:"assets/torrents-f1a47456.js",revision:null},{url:"assets/vue-41465b3a.js",revision:null},{url:"assets/vuetify-7c124399.js",revision:null},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"index.html",revision:"d8cd8fba7ad7fb20a01515e3b67d7f8d"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"manifest.webmanifest",revision:"112d2a686dfcb44742c79ee217315d5c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
