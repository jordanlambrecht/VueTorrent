if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const o=s=>l(s,r),u={module:{uri:r},exports:a,require:o};e[r]=Promise.all(i.map((s=>u[s]||o(s)))).then((s=>(n(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"eed821a5bbfee3a20aab9c51c4977743"},{url:"assets/AddModal-4c7242e1.css",revision:null},{url:"assets/AddModal-580588e1.js",revision:null},{url:"assets/AppPreferences-9ee94fcd.js",revision:null},{url:"assets/ChangeLocationModal-6855eabb.js",revision:null},{url:"assets/ConfirmDeleteModal-7dcde887.js",revision:null},{url:"assets/ConfirmShutdownModal-4a80cc4b.js",revision:null},{url:"assets/CreateCategoryDialog-20a3106f.js",revision:null},{url:"assets/CreateTagDialog-bd821cd1.js",revision:null},{url:"assets/Dashboard-74a6e3c5.js",revision:null},{url:"assets/Dashboard-ad42ab22.css",revision:null},{url:"assets/FeedForm-143ddd72.js",revision:null},{url:"assets/FullScreenModal-bced8cbb.js",revision:null},{url:"assets/index-12e5dbd2.css",revision:null},{url:"assets/index-407a3ef2.js",revision:null},{url:"assets/index-adff5842.css",revision:null},{url:"assets/Login-dccc3797.js",revision:null},{url:"assets/Logs-4988786b.js",revision:null},{url:"assets/Logs-b79cb50b.css",revision:null},{url:"assets/MagnetHandler-2e8997df.js",revision:null},{url:"assets/Modal-572b592c.js",revision:null},{url:"assets/RenameModal-1a7e922c.js",revision:null},{url:"assets/RssArticles-9f1e9bb5.js",revision:null},{url:"assets/RssArticles-c867a82f.css",revision:null},{url:"assets/RuleForm-271a81be.js",revision:null},{url:"assets/SearchEngine-4e7c0a00.js",revision:null},{url:"assets/SearchEngine-c511971c.css",revision:null},{url:"assets/SearchPluginManager-12d293a9.js",revision:null},{url:"assets/Settings-adcd9bdf.css",revision:null},{url:"assets/Settings-b67023aa.js",revision:null},{url:"assets/ShareLimitInput-159973f8.js",revision:null},{url:"assets/ShareLimitInput-88ecae5e.css",revision:null},{url:"assets/ShareLimitModal-9da1db21.css",revision:null},{url:"assets/ShareLimitModal-eb6ab8ba.js",revision:null},{url:"assets/SpeedLimitModal-f2d94f55.js",revision:null},{url:"assets/TorrentDetail-6b6b2280.js",revision:null},{url:"assets/TorrentDetail-8d6cf2af.css",revision:null},{url:"assets/VCheckbox-30290700.js",revision:null},{url:"assets/VCheckbox-9020f9ce.css",revision:null},{url:"assets/VContainer-ef8cc1b2.js",revision:null},{url:"assets/VDataTable-cda30375.js",revision:null},{url:"assets/VDataTable-d676ab1c.css",revision:null},{url:"assets/VDialog-1c2aa677.css",revision:null},{url:"assets/VDialog-3cf2be1e.js",revision:null},{url:"assets/VForm-a2022d5a.js",revision:null},{url:"assets/VTabItem-6d2ee3b7.css",revision:null},{url:"assets/VTabItem-d617dc12.js",revision:null},{url:"assets/VTextarea-59c8a15c.js",revision:null},{url:"assets/VTextarea-eb1b260f.css",revision:null},{url:"assets/vue-9ef19677.js",revision:null},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"index.html",revision:"6ef37b95d11d8cc2f0e495556c0d2564"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"./icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"./icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"manifest.webmanifest",revision:"112d2a686dfcb44742c79ee217315d5c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
