if(!self.define){let s,o={};const e=(e,l)=>(e=new URL(e+".js",l).href,o[e]||new Promise((o=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=o,document.head.appendChild(s)}else s=e,importScripts(e),o()})).then((()=>{let s=o[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(o[n])return;let i={};const t=s=>e(s,n),a={module:{uri:n},exports:i,require:t};o[n]=Promise.all(l.map((s=>a[s]||t(s)))).then((s=>(r(...s),i)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"eed821a5bbfee3a20aab9c51c4977743"},{url:"assets/ArrayPagination-tIryP59R.js",revision:null},{url:"assets/Dashboard-4vPUDdV-.css",revision:null},{url:"assets/Dashboard-B6R9bu9z.js",revision:null},{url:"assets/dayjs-hIiH2bV9.js",revision:null},{url:"assets/dayjs.min-NGT9oW3O.js",revision:null},{url:"assets/index-7yCiXbeJ.css",revision:null},{url:"assets/index-ERB9bWG7.js",revision:null},{url:"assets/index-fqTm_soC.js",revision:null},{url:"assets/Login-aUnbIyM7.js",revision:null},{url:"assets/Logs-k-LpCosq.css",revision:null},{url:"assets/Logs-uX4am0dJ.js",revision:null},{url:"assets/MagnetHandler-pA1r_je1.js",revision:null},{url:"assets/materialdesignicons-webfont-6eb_lmTU.woff2",revision:null},{url:"assets/materialdesignicons-webfont-D15t_tsC.woff",revision:null},{url:"assets/PasswordField.vue_vue_type_script_setup_true_lang-OSgCB3w1.js",revision:null},{url:"assets/roboto-cyrillic-400-normal-1Q02bZlk.woff2",revision:null},{url:"assets/roboto-cyrillic-400-normal-wkKjpXzZ.woff",revision:null},{url:"assets/roboto-cyrillic-ext-400-normal-PiqLoFV_.woff",revision:null},{url:"assets/roboto-cyrillic-ext-400-normal-zkSvWxgI.woff2",revision:null},{url:"assets/roboto-greek-400-normal-UVhwlGKP.woff2",revision:null},{url:"assets/roboto-greek-400-normal-ZxjWinlq.woff",revision:null},{url:"assets/roboto-latin-400-normal-JkyEVz-m.woff2",revision:null},{url:"assets/roboto-latin-400-normal-VNUqCuId.woff",revision:null},{url:"assets/roboto-latin-ext-400-normal-5aATcKHE.woff",revision:null},{url:"assets/roboto-latin-ext-400-normal-OGy6Zcg4.woff2",revision:null},{url:"assets/roboto-mono-cyrillic-400-normal-eoOUqCpM.woff",revision:null},{url:"assets/roboto-mono-cyrillic-400-normal-xDevZbqQ.woff2",revision:null},{url:"assets/roboto-mono-cyrillic-ext-400-normal-EOqNCTb0.woff2",revision:null},{url:"assets/roboto-mono-cyrillic-ext-400-normal-uLllddJE.woff",revision:null},{url:"assets/roboto-mono-greek-400-normal-6dB6LRr6.woff",revision:null},{url:"assets/roboto-mono-greek-400-normal-XRETARFo.woff2",revision:null},{url:"assets/roboto-mono-latin-400-normal-dLuruHlQ.woff",revision:null},{url:"assets/roboto-mono-latin-400-normal-v-cFAluQ.woff2",revision:null},{url:"assets/roboto-mono-latin-ext-400-normal-_xD1OgjO.woff2",revision:null},{url:"assets/roboto-mono-latin-ext-400-normal-hZ4_iJW8.woff",revision:null},{url:"assets/roboto-mono-vietnamese-400-normal-SW7adlF6.woff",revision:null},{url:"assets/roboto-mono-vietnamese-400-normal-SZ_VqEuC.woff2",revision:null},{url:"assets/roboto-vietnamese-400-normal-JAkXt1WZ.woff2",revision:null},{url:"assets/roboto-vietnamese-400-normal-ZBATgFfY.woff",revision:null},{url:"assets/RssArticles-_OulcYvY.css",revision:null},{url:"assets/RssArticles-icdNnui0.js",revision:null},{url:"assets/SearchEngine-GwI4gvHY.js",revision:null},{url:"assets/Settings-1rctzajA.js",revision:null},{url:"assets/Settings-HpcqpWK7.css",revision:null},{url:"assets/TorrentDetail-sTcQeMYW.css",revision:null},{url:"assets/TorrentDetail-YjpLbzB0.js",revision:null},{url:"assets/vue-zMKsYpAV.js",revision:null},{url:"assets/vuetify-LvpKcXHf.js",revision:null},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"index.html",revision:"b2de82af9d9e9692f5e21a170514b376"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"manifest.webmanifest",revision:"112d2a686dfcb44742c79ee217315d5c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
