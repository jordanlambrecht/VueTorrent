import{h as z,E as G,f as q,b as J,c as W,G as Y,T as Z,_ as O,H as i,Y as v,n as e,J as s,S as X,W as r,L as u,u as o,V as R,I as _,P as S,N as m,F as $,Z as ee,K as C,M as A}from"./vue-CMGd_gjG.js";import{u as te,__tla as __tla_0}from"./ArrayPagination-CzTl7Nho.js";import{l as le,m as se,a0 as ne,G as oe,I as ae,s as D,C as F,j as re,t as y,i as d,D as f,f as ie,a1 as ue,h as N,K as I,E as de,a2 as ce,a3 as me,V as fe,c as pe,q as ve,r as Ve,d as ge,R as ke,__tla as __tla_1}from"./index-BWnwvcbv.js";import{d as he}from"./index-CBVUMrnM.js";import"./vuetify-DtNd5Sc7.js";let Ue;let __tla=Promise.all([(()=>{try{return __tla_0}catch{}})(),(()=>{try{return __tla_1}catch{}})()]).then(async()=>{let _e,ye,be,Ce,Ae,xe,we,Te,Le,Re;_e={class:"pa-3"};ye={class:"subtitle-1 ml-2",style:{"font-size":"1.6em !important"}};be={class:"d-flex justify-end"};Ce={class:"d-flex flex-row align-center justify-center"};Ae={class:"d-flex"};xe={key:0};we={key:1};Te={class:"d-flex flex-column"};Le=["innerHTML"];Re=z({__name:"RssArticles",setup(Se){const U=X(),{t:V}=G(),B=le(),E=se(),a=ne(),M=oe(),p=q(!1),g=J({title:"",content:""}),b=W({get:()=>a.filters.title,set:he(l=>{a.filters.title=l??""},300)}),k=ae(()=>a.articles.sort((l,n)=>Number(n.parsedDate)-Number(l.parsedDate)),()=>b.value,l=>l.title),{paginatedResults:j,currentPage:c,pageCount:x}=te(k.results,15);function H(l){const n=M.useIdForRssLinks?l.id:l.link;window.open(n,"_blank","noreferrer")}function P(l){l.description&&(g.title=l.title.trim(),g.content=l.description.trim(),p.value=!0)}function K(l){B.pushTorrentToQueue(l.torrentURL)}async function w(l){await a.markArticleAsRead(l.id)}function T(){U.push({name:"dashboard"})}function L(l){if(E.hasActiveDialog||p.value)return!1;l.key==="Escape"&&T()}return Y(async()=>{await a.fetchFeeds()}),Z(()=>{document.addEventListener("keydown",L)}),O(()=>{document.removeEventListener("keydown",L)}),(l,n)=>(i(),v("div",_e,[e(D,{align:"center",justify:"center","no-gutters":""},{default:s(()=>[e(y,null,{default:s(()=>[r("h1",ye,u(o(V)("rssArticles.title")),1)]),_:1}),e(y,null,{default:s(()=>[r("div",be,[e(d,{icon:"mdi-close",variant:"plain",onClick:T})])]),_:1})]),_:1}),e(F,null,{default:s(()=>[e(f,null,{default:s(()=>[e(D,null,{default:s(()=>[e(y,{cols:"12"},{default:s(()=>[e(ie,{modelValue:b.value,"onUpdate:modelValue":n[0]||(n[0]=t=>b.value=t),label:l.$t("rssArticles.filters.title"),clearable:"","hide-details":""},null,8,["modelValue","label"])]),_:1}),e(y,{cols:"12"},{default:s(()=>[r("div",Ce,[e(ue,{modelValue:o(a).filters.unread,"onUpdate:modelValue":n[1]||(n[1]=t=>o(a).filters.unread=t),label:l.$t("rssArticles.filters.unread"),"hide-details":""},null,8,["modelValue","label"]),e(N),r("div",{class:R({"d-flex button-group":!0,"flex-column":l.$vuetify.display.mobile})},[e(d,{disabled:o(a).unreadArticles.length===0,text:l.$t("rssArticles.markAllAsRead"),color:"primary",onClick:n[2]||(n[2]=t=>o(a).markAllAsRead())},null,8,["disabled","text"]),e(d,{disabled:o(a).feeds.length===0,text:l.$t("rssArticles.refreshAllFeeds"),color:"primary",onClick:n[3]||(n[3]=t=>o(a).refreshAllFeeds())},null,8,["disabled","text"])],2)])]),_:1})]),_:1})]),_:1}),o(k).results.value.length?(i(),_(f,{key:0},{default:s(()=>[e(I,{modelValue:o(c),"onUpdate:modelValue":n[4]||(n[4]=t=>S(c)?c.value=t:null),length:o(x),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},null,8,["modelValue","length"])]),_:1})):m("",!0),e(f,null,{default:s(()=>[e(F,null,{default:s(()=>[(i(!0),v($,null,ee(o(j),(t,Q)=>(i(),v($,null,[Q>0?(i(),_(de,{key:0,color:"white"})):m("",!0),e(f,{class:R({"rss-read":t.isRead}),onClick:h=>P(t),onContextmenu:h=>w(t)},{default:s(()=>[r("div",Ae,[r("div",null,[e(ce,{class:"wrap-anywhere",style:{"white-space":"unset"}},{default:s(()=>[C(u(t.title),1)]),_:2},1024),e(me,{class:"d-block"},{default:s(()=>[r("div",null,u(t.parsedDate.toLocaleString()),1),r("div",null,u(o(V)("rssArticles.item.feedName",{name:o(a).getFeedNames(t.id).join(" | ")})),1),t.author?(i(),v("div",xe,u(o(V)("rssArticles.item.author",{author:t.author})),1)):m("",!0),t.category?(i(),v("div",we,u(o(V)("rssArticles.item.category",{category:t.category})),1)):m("",!0)]),_:2},1024)]),e(N),r("div",Te,[e(d,{icon:"mdi-open-in-new",variant:"text",onClick:A(h=>H(t),["stop"])},null,8,["onClick"]),e(d,{color:"accent",icon:"mdi-check",variant:"text",onClick:A(h=>w(t),["stop"])},null,8,["onClick"]),e(d,{icon:"mdi-download",variant:"text",onClick:A(h=>K(t),["stop"])},null,8,["onClick"])])])]),_:2},1032,["class","onClick","onContextmenu"])],64))),256)),o(k).results.value.length===0?(i(),_(f,{key:0},{default:s(()=>[C(u(l.$t("common.emptyList")),1)]),_:1})):m("",!0)]),_:1})]),_:1}),o(k).results.value.length?(i(),_(f,{key:1},{default:s(()=>[e(I,{modelValue:o(c),"onUpdate:modelValue":n[5]||(n[5]=t=>S(c)?c.value=t:null),length:o(x),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},null,8,["modelValue","length"])]),_:1})):m("",!0)]),_:1}),e(re,{modelValue:p.value,"onUpdate:modelValue":n[7]||(n[7]=t=>p.value=t)},{default:s(()=>[e(fe,null,{default:s(()=>[e(pe,null,{default:s(()=>[e(ve,{color:"transparent"},{default:s(()=>[e(Ve,null,{default:s(()=>[C(u(g.title),1)]),_:1}),e(d,{icon:"mdi-close",onClick:n[6]||(n[6]=t=>p.value=!1)})]),_:1})]),_:1}),e(ge,null,{default:s(()=>[r("div",{class:"description-container",innerHTML:g.content},null,8,Le)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}});Ue=ke(Re,[["__scopeId","data-v-8c4ff42f"]])});export{Ue as default,__tla};