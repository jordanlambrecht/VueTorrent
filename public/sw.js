if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const o=s=>l(s,r),u={module:{uri:r},exports:a,require:o};e[r]=Promise.all(i.map((s=>u[s]||o(s)))).then((s=>(n(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"eed821a5bbfee3a20aab9c51c4977743"},{url:"assets/AddModal-4c7242e1.css",revision:null},{url:"assets/AddModal-cf90214d.js",revision:null},{url:"assets/AppPreferences-9ee94fcd.js",revision:null},{url:"assets/ChangeLocationModal-3ab4b78a.js",revision:null},{url:"assets/ConfirmDeleteModal-dda1528a.js",revision:null},{url:"assets/ConfirmShutdownModal-7dc3dbae.js",revision:null},{url:"assets/CreateCategoryDialog-2a6ea4c8.js",revision:null},{url:"assets/CreateTagDialog-f0ec09c9.js",revision:null},{url:"assets/Dashboard-0a595efc.js",revision:null},{url:"assets/Dashboard-ad42ab22.css",revision:null},{url:"assets/FeedForm-3fcf427b.js",revision:null},{url:"assets/FullScreenModal-bced8cbb.js",revision:null},{url:"assets/index-12e5dbd2.css",revision:null},{url:"assets/index-adff5842.css",revision:null},{url:"assets/index-c9a58279.js",revision:null},{url:"assets/Login-ce84897a.js",revision:null},{url:"assets/Logs-0694c36f.css",revision:null},{url:"assets/Logs-1dba3071.js",revision:null},{url:"assets/MagnetHandler-b7fe2e0c.js",revision:null},{url:"assets/Modal-572b592c.js",revision:null},{url:"assets/RenameModal-b24d3183.js",revision:null},{url:"assets/RssArticles-4fead7d0.js",revision:null},{url:"assets/RssArticles-9b9b7057.css",revision:null},{url:"assets/RuleForm-ed04a48b.js",revision:null},{url:"assets/SearchEngine-0896b960.css",revision:null},{url:"assets/SearchEngine-0f543bbb.js",revision:null},{url:"assets/SearchPluginManager-a634dab0.js",revision:null},{url:"assets/Settings-3a40a8f0.js",revision:null},{url:"assets/Settings-a39141b3.css",revision:null},{url:"assets/ShareLimitInput-88ecae5e.css",revision:null},{url:"assets/ShareLimitInput-8a0d8b43.js",revision:null},{url:"assets/ShareLimitModal-7302879e.js",revision:null},{url:"assets/ShareLimitModal-9da1db21.css",revision:null},{url:"assets/SpeedLimitModal-e588066f.js",revision:null},{url:"assets/TorrentDetail-6dada135.js",revision:null},{url:"assets/TorrentDetail-8d6cf2af.css",revision:null},{url:"assets/VCheckbox-9020f9ce.css",revision:null},{url:"assets/VCheckbox-d7336f9b.js",revision:null},{url:"assets/VContainer-14b499f0.js",revision:null},{url:"assets/VDataTable-54063533.js",revision:null},{url:"assets/VDataTable-d676ab1c.css",revision:null},{url:"assets/VDialog-1c2aa677.css",revision:null},{url:"assets/VDialog-3fba51eb.js",revision:null},{url:"assets/VForm-9d7493e7.js",revision:null},{url:"assets/VTabItem-5d996132.js",revision:null},{url:"assets/VTabItem-6d2ee3b7.css",revision:null},{url:"assets/VTextarea-db8923ad.js",revision:null},{url:"assets/VTextarea-eb1b260f.css",revision:null},{url:"assets/vue-9ef19677.js",revision:null},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"index.html",revision:"c0bccca057809ac5fc73974eecb21cb5"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"./icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"./icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"manifest.webmanifest",revision:"112d2a686dfcb44742c79ee217315d5c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
