if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const o=s=>l(s,r),u={module:{uri:r},exports:a,require:o};e[r]=Promise.all(i.map((s=>u[s]||o(s)))).then((s=>(n(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"eed821a5bbfee3a20aab9c51c4977743"},{url:"assets/AddModal-4c7242e1.css",revision:null},{url:"assets/AddModal-e7b418cb.js",revision:null},{url:"assets/AppPreferences-9ee94fcd.js",revision:null},{url:"assets/ChangeLocationModal-c2faa0e0.js",revision:null},{url:"assets/ConfirmDeleteModal-1c7bee0a.js",revision:null},{url:"assets/ConfirmShutdownModal-aa4b5794.js",revision:null},{url:"assets/CreateCategoryDialog-d49c4a33.js",revision:null},{url:"assets/CreateTagDialog-d5412085.js",revision:null},{url:"assets/Dashboard-732b74e8.js",revision:null},{url:"assets/Dashboard-ad42ab22.css",revision:null},{url:"assets/FeedForm-bde50a74.js",revision:null},{url:"assets/FullScreenModal-bced8cbb.js",revision:null},{url:"assets/index-12e5dbd2.css",revision:null},{url:"assets/index-adff5842.css",revision:null},{url:"assets/index-c65cf7d3.js",revision:null},{url:"assets/Login-9350822c.js",revision:null},{url:"assets/Logs-0694c36f.css",revision:null},{url:"assets/Logs-fcdb980e.js",revision:null},{url:"assets/MagnetHandler-ad40d836.js",revision:null},{url:"assets/Modal-572b592c.js",revision:null},{url:"assets/RenameModal-56bd6b3c.js",revision:null},{url:"assets/RssArticles-17fe369c.js",revision:null},{url:"assets/RssArticles-9b9b7057.css",revision:null},{url:"assets/RuleForm-efdfa72f.js",revision:null},{url:"assets/SearchEngine-0896b960.css",revision:null},{url:"assets/SearchEngine-22710a95.js",revision:null},{url:"assets/SearchPluginManager-448db1f6.js",revision:null},{url:"assets/Settings-6868a43a.js",revision:null},{url:"assets/Settings-adcd9bdf.css",revision:null},{url:"assets/ShareLimitInput-73c601b9.js",revision:null},{url:"assets/ShareLimitInput-88ecae5e.css",revision:null},{url:"assets/ShareLimitModal-9da1db21.css",revision:null},{url:"assets/ShareLimitModal-ba571654.js",revision:null},{url:"assets/SpeedLimitModal-35739d35.js",revision:null},{url:"assets/TorrentDetail-8d6cf2af.css",revision:null},{url:"assets/TorrentDetail-ad37b951.js",revision:null},{url:"assets/VCheckbox-868a6f66.js",revision:null},{url:"assets/VCheckbox-9020f9ce.css",revision:null},{url:"assets/VContainer-c83fbe84.js",revision:null},{url:"assets/VDataTable-3b55f3d7.js",revision:null},{url:"assets/VDataTable-d676ab1c.css",revision:null},{url:"assets/VDialog-1c2aa677.css",revision:null},{url:"assets/VDialog-1d6b3b70.js",revision:null},{url:"assets/VForm-ed16a01a.js",revision:null},{url:"assets/VTabItem-3f316c2a.js",revision:null},{url:"assets/VTabItem-6d2ee3b7.css",revision:null},{url:"assets/VTextarea-c2a2f6c0.js",revision:null},{url:"assets/VTextarea-eb1b260f.css",revision:null},{url:"assets/vue-9ef19677.js",revision:null},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"index.html",revision:"30d29800141914737af9acec1099f208"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"./icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"./icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"manifest.webmanifest",revision:"112d2a686dfcb44742c79ee217315d5c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
