if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const o=s=>l(s,r),u={module:{uri:r},exports:a,require:o};e[r]=Promise.all(i.map((s=>u[s]||o(s)))).then((s=>(n(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"eed821a5bbfee3a20aab9c51c4977743"},{url:"assets/AddModal-4c7242e1.css",revision:null},{url:"assets/AddModal-cb7d01d5.js",revision:null},{url:"assets/AppPreferences-9ee94fcd.js",revision:null},{url:"assets/ChangeLocationModal-b61c55d6.js",revision:null},{url:"assets/ConfirmDeleteModal-7a942246.js",revision:null},{url:"assets/ConfirmShutdownModal-48f59135.js",revision:null},{url:"assets/CreateCategoryDialog-1a73775f.js",revision:null},{url:"assets/CreateTagDialog-a31271cc.js",revision:null},{url:"assets/Dashboard-29cc607c.js",revision:null},{url:"assets/Dashboard-ad42ab22.css",revision:null},{url:"assets/FeedForm-b1f1c6e8.js",revision:null},{url:"assets/FullScreenModal-bced8cbb.js",revision:null},{url:"assets/index-12e5dbd2.css",revision:null},{url:"assets/index-a6c83169.js",revision:null},{url:"assets/index-adff5842.css",revision:null},{url:"assets/Login-a2ee6c25.js",revision:null},{url:"assets/Logs-0694c36f.css",revision:null},{url:"assets/Logs-e0c6676d.js",revision:null},{url:"assets/MagnetHandler-bee87ea2.js",revision:null},{url:"assets/Modal-572b592c.js",revision:null},{url:"assets/RenameModal-4573fff0.js",revision:null},{url:"assets/RssArticles-2e417d81.js",revision:null},{url:"assets/RssArticles-9b9b7057.css",revision:null},{url:"assets/RuleForm-292587e0.js",revision:null},{url:"assets/SearchEngine-0896b960.css",revision:null},{url:"assets/SearchEngine-17097620.js",revision:null},{url:"assets/SearchPluginManager-0f6a91e4.js",revision:null},{url:"assets/Settings-3e86eabc.js",revision:null},{url:"assets/Settings-a39141b3.css",revision:null},{url:"assets/ShareLimitInput-88ecae5e.css",revision:null},{url:"assets/ShareLimitInput-c393eb8b.js",revision:null},{url:"assets/ShareLimitModal-5d4b3e5e.js",revision:null},{url:"assets/ShareLimitModal-9da1db21.css",revision:null},{url:"assets/SpeedLimitModal-e8c6125c.js",revision:null},{url:"assets/TorrentDetail-0641ce16.js",revision:null},{url:"assets/TorrentDetail-5c6fa5ec.css",revision:null},{url:"assets/VCheckbox-2562e856.js",revision:null},{url:"assets/VCheckbox-9020f9ce.css",revision:null},{url:"assets/VContainer-367a9d42.js",revision:null},{url:"assets/VDataTable-d676ab1c.css",revision:null},{url:"assets/VDataTable-e36af267.js",revision:null},{url:"assets/VDialog-1c2aa677.css",revision:null},{url:"assets/VDialog-f509aca1.js",revision:null},{url:"assets/VForm-b8915835.js",revision:null},{url:"assets/VTabItem-1be16e2e.js",revision:null},{url:"assets/VTabItem-6d2ee3b7.css",revision:null},{url:"assets/VTextarea-eb1b260f.css",revision:null},{url:"assets/VTextarea-f09a0806.js",revision:null},{url:"assets/vue-9ef19677.js",revision:null},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"index.html",revision:"a9568e1115eee344dfab13e422692ed1"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"./icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"./icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"manifest.webmanifest",revision:"112d2a686dfcb44742c79ee217315d5c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
