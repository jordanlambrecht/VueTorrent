if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const o=s=>l(s,r),u={module:{uri:r},exports:a,require:o};e[r]=Promise.all(i.map((s=>u[s]||o(s)))).then((s=>(n(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"eed821a5bbfee3a20aab9c51c4977743"},{url:"assets/AddModal-13e6708b.js",revision:null},{url:"assets/AddModal-4c7242e1.css",revision:null},{url:"assets/AppPreferences-9ee94fcd.js",revision:null},{url:"assets/ChangeLocationModal-8a988dec.js",revision:null},{url:"assets/ConfirmDeleteModal-553ac204.js",revision:null},{url:"assets/ConfirmShutdownModal-92bcf5ae.js",revision:null},{url:"assets/CreateCategoryDialog-09ba53fe.js",revision:null},{url:"assets/CreateTagDialog-23013e44.js",revision:null},{url:"assets/Dashboard-9dad51ac.js",revision:null},{url:"assets/Dashboard-ad42ab22.css",revision:null},{url:"assets/FeedForm-453ec215.js",revision:null},{url:"assets/FullScreenModal-bced8cbb.js",revision:null},{url:"assets/index-12e5dbd2.css",revision:null},{url:"assets/index-adff5842.css",revision:null},{url:"assets/index-ea6ddb9d.js",revision:null},{url:"assets/Login-59c01f6a.js",revision:null},{url:"assets/Logs-b79cb50b.css",revision:null},{url:"assets/Logs-c133141c.js",revision:null},{url:"assets/MagnetHandler-d04b411b.js",revision:null},{url:"assets/Modal-572b592c.js",revision:null},{url:"assets/RenameModal-616e8aa0.js",revision:null},{url:"assets/RssArticles-c4f5f781.js",revision:null},{url:"assets/RssArticles-c867a82f.css",revision:null},{url:"assets/RuleForm-ed8f064e.js",revision:null},{url:"assets/SearchEngine-6aa10279.js",revision:null},{url:"assets/SearchEngine-89a2e20c.css",revision:null},{url:"assets/SearchPluginManager-aa4f1240.js",revision:null},{url:"assets/Settings-3996f972.css",revision:null},{url:"assets/Settings-ccf5b19d.js",revision:null},{url:"assets/ShareLimitInput-88ecae5e.css",revision:null},{url:"assets/ShareLimitInput-fcb82817.js",revision:null},{url:"assets/ShareLimitModal-418538dd.js",revision:null},{url:"assets/ShareLimitModal-9da1db21.css",revision:null},{url:"assets/SpeedLimitModal-db8833fc.js",revision:null},{url:"assets/TorrentDetail-59445b0e.js",revision:null},{url:"assets/TorrentDetail-72b2c182.css",revision:null},{url:"assets/VCheckbox-9020f9ce.css",revision:null},{url:"assets/VCheckbox-9981f8b5.js",revision:null},{url:"assets/VContainer-c59f8ae7.js",revision:null},{url:"assets/VDataTable-a94f489a.js",revision:null},{url:"assets/VDataTable-d676ab1c.css",revision:null},{url:"assets/VDialog-1c2aa677.css",revision:null},{url:"assets/VDialog-79092dcd.js",revision:null},{url:"assets/VForm-5fc9c05d.js",revision:null},{url:"assets/VTabItem-5f8f8563.js",revision:null},{url:"assets/VTabItem-6d2ee3b7.css",revision:null},{url:"assets/VTextarea-eabb67c0.js",revision:null},{url:"assets/VTextarea-eb1b260f.css",revision:null},{url:"assets/vue-9ef19677.js",revision:null},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"index.html",revision:"291b9d39e17921727139552ce78fed36"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"621ef878b9a700bd2249dad60d9f1141"},{url:"icon.svg",revision:"1a5efa1aa226aa0533605b7e84667ecd"},{url:"icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"./icon-192.png",revision:"1a475d65497c0b3609661246d8639ff4"},{url:"./icon-512.png",revision:"fa311af470073dfeb0673806ae3e0e2f"},{url:"manifest.webmanifest",revision:"112d2a686dfcb44742c79ee217315d5c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
