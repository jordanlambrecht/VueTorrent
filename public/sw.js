if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const o=s=>l(s,r),u={module:{uri:r},exports:a,require:o};e[r]=Promise.all(i.map((s=>u[s]||o(s)))).then((s=>(n(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"eed821a5bbfee3a20aab9c51c4977743"},{url:"assets/AddModal-bb58f6ae.css",revision:null},{url:"assets/AddModal-f3f505d7.js",revision:null},{url:"assets/AppPreferences-9ee94fcd.js",revision:null},{url:"assets/ChangeLocationModal-2cff4c53.js",revision:null},{url:"assets/ConfirmDeleteModal-e484c2ee.js",revision:null},{url:"assets/ConfirmShutdownModal-ea9038f7.js",revision:null},{url:"assets/CreateCategoryDialog-bd776746.js",revision:null},{url:"assets/CreateTagDialog-d97c4250.js",revision:null},{url:"assets/Dashboard-ad42ab22.css",revision:null},{url:"assets/Dashboard-d49d1d31.js",revision:null},{url:"assets/FeedForm-9acc97c2.js",revision:null},{url:"assets/FullScreenModal-bced8cbb.js",revision:null},{url:"assets/index-02f2abaf.css",revision:null},{url:"assets/index-12e5dbd2.css",revision:null},{url:"assets/index-157ddd5d.js",revision:null},{url:"assets/Login-5ff76959.js",revision:null},{url:"assets/MagnetHandler-bf8abbea.js",revision:null},{url:"assets/Modal-572b592c.js",revision:null},{url:"assets/RenameModal-7d0f23c6.js",revision:null},{url:"assets/RssArticles-bc0fa509.js",revision:null},{url:"assets/RssArticles-e9eecac7.css",revision:null},{url:"assets/RuleForm-984d1f28.js",revision:null},{url:"assets/SearchEngine-2baeff66.js",revision:null},{url:"assets/SearchEngine-ee285b24.css",revision:null},{url:"assets/SearchPluginManager-1051aa91.js",revision:null},{url:"assets/Settings-78bde0b4.css",revision:null},{url:"assets/Settings-ca4f7f16.js",revision:null},{url:"assets/ShareLimitInput-88ecae5e.css",revision:null},{url:"assets/ShareLimitInput-bf74a32a.js",revision:null},{url:"assets/ShareLimitModal-122db0c2.css",revision:null},{url:"assets/ShareLimitModal-853dad5b.js",revision:null},{url:"assets/SpeedLimitModal-b239e5a9.js",revision:null},{url:"assets/TorrentDetail-5c6fa5ec.css",revision:null},{url:"assets/TorrentDetail-a739368d.js",revision:null},{url:"assets/VCheckbox-9020f9ce.css",revision:null},{url:"assets/VCheckbox-a32802d8.js",revision:null},{url:"assets/VContainer-30c73651.js",revision:null},{url:"assets/VDataTable-3eabd5c5.js",revision:null},{url:"assets/VDataTable-d676ab1c.css",revision:null},{url:"assets/VDialog-1c2aa677.css",revision:null},{url:"assets/VDialog-2b46dbb9.js",revision:null},{url:"assets/VForm-92f2f05b.js",revision:null},{url:"assets/VTabItem-6d2ee3b7.css",revision:null},{url:"assets/VTabItem-702fea00.js",revision:null},{url:"assets/VTextarea-2c27085e.js",revision:null},{url:"assets/VTextarea-eb1b260f.css",revision:null},{url:"assets/vue-9ef19677.js",revision:null},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"index.html",revision:"6b564b2e08d152d7958c8e96e0d11e8b"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"./icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"./icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"manifest.webmanifest",revision:"112d2a686dfcb44742c79ee217315d5c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
