if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const o=s=>l(s,n),u={module:{uri:n},exports:a,require:o};e[n]=Promise.all(i.map((s=>u[s]||o(s)))).then((s=>(r(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"eed821a5bbfee3a20aab9c51c4977743"},{url:"assets/AddModal-2f1c59b6.js",revision:null},{url:"assets/AddModal-4c7242e1.css",revision:null},{url:"assets/AppPreferences-9ee94fcd.js",revision:null},{url:"assets/ChangeLocationModal-2d87e550.js",revision:null},{url:"assets/ConfirmDeleteModal-e2c7af27.js",revision:null},{url:"assets/ConfirmShutdownModal-af3b6b44.js",revision:null},{url:"assets/CreateNewCategoryDialog-fafe12e7.js",revision:null},{url:"assets/CreateNewTagDialog-1cbde75e.js",revision:null},{url:"assets/Dashboard-be52ce27.css",revision:null},{url:"assets/Dashboard-db6b35de.js",revision:null},{url:"assets/FeedForm-fc779669.js",revision:null},{url:"assets/FullScreenModal-bced8cbb.js",revision:null},{url:"assets/index-12e5dbd2.css",revision:null},{url:"assets/index-460c23b8.js",revision:null},{url:"assets/index-fa553f6d.css",revision:null},{url:"assets/Login-b5d80950.js",revision:null},{url:"assets/Logs-5504c4d5.js",revision:null},{url:"assets/Logs-b79cb50b.css",revision:null},{url:"assets/MagnetHandler-377aace4.js",revision:null},{url:"assets/Modal-572b592c.js",revision:null},{url:"assets/RenameTorrentFileModal-b66ece5d.js",revision:null},{url:"assets/RenameTorrentModal-9a4ef499.js",revision:null},{url:"assets/RssArticles-f4f86cd9.js",revision:null},{url:"assets/RssArticles-fc2a926c.css",revision:null},{url:"assets/RuleForm-89b443b0.js",revision:null},{url:"assets/SearchEngine-4e7a5f8f.css",revision:null},{url:"assets/SearchEngine-d4260a91.js",revision:null},{url:"assets/SearchPluginManager-d4ebb577.js",revision:null},{url:"assets/Settings-0b76b180.js",revision:null},{url:"assets/Settings-86f22058.css",revision:null},{url:"assets/ShareLimitInput-88ecae5e.css",revision:null},{url:"assets/ShareLimitInput-fb3418ef.js",revision:null},{url:"assets/ShareLimitModal-5dd630be.js",revision:null},{url:"assets/ShareLimitModal-9da1db21.css",revision:null},{url:"assets/SpeedLimitModal-b184ce2b.js",revision:null},{url:"assets/TorrentDetail-5ed6e461.js",revision:null},{url:"assets/TorrentDetail-d183173c.css",revision:null},{url:"assets/VCheckbox-07e4192e.js",revision:null},{url:"assets/VCheckbox-9020f9ce.css",revision:null},{url:"assets/VContainer-46095e80.js",revision:null},{url:"assets/VDataTable-24fcb0f1.js",revision:null},{url:"assets/VDataTable-d676ab1c.css",revision:null},{url:"assets/VDialog-1c2aa677.css",revision:null},{url:"assets/VDialog-2d9a30b7.js",revision:null},{url:"assets/VForm-8b91e4f3.js",revision:null},{url:"assets/VTab-456efe7c.js",revision:null},{url:"assets/VTab-e1f8d77a.css",revision:null},{url:"assets/VTabItem-b6ae6076.js",revision:null},{url:"assets/VTextarea-524c64e7.js",revision:null},{url:"assets/VTextarea-64b487a8.css",revision:null},{url:"assets/vue-9ef19677.js",revision:null},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"index.html",revision:"2d7028ddd3fd8ce0ed35fab95bbbc972"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"manifest.webmanifest",revision:"112d2a686dfcb44742c79ee217315d5c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
