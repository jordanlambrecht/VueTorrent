import{g as z,$ as K,K as q,d as W,r as Y,c as Z,M as G,x as J,I as O,a2 as r,a7 as V,m as e,a4 as s,ab as i,Z as u,u as n,a3 as h,D as R,a9 as m,F as S,a8 as X,a6 as ee,W as b,Y as x}from"./vue-EkRptf2M.js";import{u as te}from"./ArrayPagination-JjYmrbrK.js";import{av as le,v as se,ai as ae,y as ne,aw as oe,q as D,c as $,r as y,k as f,d as p,i as re,a3 as ie,a as N,N as F,a4 as ue,ax as de,ay as ce,m as me,l as fe,f as pe,ae as ve,af as Ve,g as _e,_ as ge}from"./index-fj5-vamU.js";import{d as ke}from"./index-sIPFeh3n.js";import"./vuetify-FD_HUlNY.js";const he={class:"pa-3"},ye={class:"subtitle-1 ml-2",style:{"font-size":"1.6em !important"}},Ce={class:"d-flex justify-end"},be={class:"d-flex flex-row align-center justify-center"},xe={class:"d-flex"},Ae={key:0},we={key:1},Te={class:"d-flex flex-column"},Le=["innerHTML"],Re=z({__name:"RssArticles",setup(Se){const I=K(),{t:_}=q(),U=le(),B=se(),o=ae(),M=ne(),v=W(!1),g=Y({title:"",content:""}),C=Z({get:()=>o.filters.title,set:ke(t=>{o.filters.title=t??""},300)}),k=oe(()=>o.articles.sort((t,a)=>Number(a.parsedDate)-Number(t.parsedDate)),()=>C.value,t=>t.title),{paginatedResults:j,currentPage:c,pageCount:A}=te(k.results,15);function E(t){const a=M.useIdForRssLinks?t.id:t.link;window.open(a,"_blank","noreferrer")}function H(t){t.description&&(g.title=t.title.trim(),g.content=t.description.trim(),v.value=!0)}function P(t){U.pushTorrentToQueue(t.torrentURL)}async function w(t){await o.markArticleAsRead(t.id)}function T(){I.push({name:"dashboard"})}function L(t){if(B.hasActiveDialog||v.value)return!1;t.key==="Escape"&&T()}return G(async()=>{await o.fetchFeeds()}),J(()=>{document.addEventListener("keydown",L)}),O(()=>{document.removeEventListener("keydown",L)}),(t,a)=>(r(),V("div",he,[e(D,{align:"center",justify:"center","no-gutters":""},{default:s(()=>[e(y,null,{default:s(()=>[i("h1",ye,u(n(_)("rssArticles.title")),1)]),_:1}),e(y,null,{default:s(()=>[i("div",Ce,[e(f,{icon:"mdi-close",variant:"plain",onClick:T})])]),_:1})]),_:1}),e($,null,{default:s(()=>[e(p,null,{default:s(()=>[e(D,null,{default:s(()=>[e(y,{cols:"12"},{default:s(()=>[e(re,{modelValue:C.value,"onUpdate:modelValue":a[0]||(a[0]=l=>C.value=l),label:t.$t("rssArticles.filters.title"),clearable:"","hide-details":""},null,8,["modelValue","label"])]),_:1}),e(y,{cols:"12"},{default:s(()=>[i("div",be,[e(ie,{modelValue:n(o).filters.unread,"onUpdate:modelValue":a[1]||(a[1]=l=>n(o).filters.unread=l),label:t.$t("rssArticles.filters.unread"),"hide-details":""},null,8,["modelValue","label"]),e(N),e(f,{disabled:n(o).unreadArticles.length===0,text:t.$t("rssArticles.markAllAsRead"),color:"primary",onClick:a[2]||(a[2]=l=>n(o).markAllAsRead())},null,8,["disabled","text"])])]),_:1})]),_:1})]),_:1}),n(k).results.value.length?(r(),h(p,{key:0},{default:s(()=>[e(F,{modelValue:n(c),"onUpdate:modelValue":a[3]||(a[3]=l=>R(c)?c.value=l:null),length:n(A),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},null,8,["modelValue","length"])]),_:1})):m("",!0),e(p,null,{default:s(()=>[e($,null,{default:s(()=>[(r(!0),V(S,null,X(n(j),(l,Q)=>(r(),V(S,null,[Q>0?(r(),h(ue,{key:0,color:"white"})):m("",!0),e(p,{class:ee({"rss-read":l.isRead}),onClick:d=>H(l),onContextmenu:d=>w(l)},{default:s(()=>[i("div",xe,[i("div",null,[e(de,{class:"wrap-anywhere",style:{"white-space":"unset"}},{default:s(()=>[b(u(l.title),1)]),_:2},1024),e(ce,{class:"d-block"},{default:s(()=>[i("div",null,u(l.parsedDate.toLocaleString()),1),i("div",null,u(n(_)("rssArticles.item.feedName",{name:n(o).getFeedNames(l.id).join(" | ")})),1),l.author?(r(),V("div",Ae,u(n(_)("rssArticles.item.author",{author:l.author})),1)):m("",!0),l.category?(r(),V("div",we,u(n(_)("rssArticles.item.category",{category:l.category})),1)):m("",!0)]),_:2},1024)]),e(N),i("div",Te,[e(f,{icon:"mdi-open-in-new",variant:"text",onClick:x(d=>E(l),["stop"])},null,8,["onClick"]),e(f,{color:"accent",icon:"mdi-check",variant:"text",onClick:x(d=>w(l),["stop"])},null,8,["onClick"]),e(f,{icon:"mdi-download",variant:"text",onClick:x(d=>P(l),["stop"])},null,8,["onClick"])])]),e(me,{modelValue:v.value,"onUpdate:modelValue":a[5]||(a[5]=d=>v.value=d)},{default:s(()=>[e(fe,null,{default:s(()=>[e(pe,null,{default:s(()=>[e(ve,{color:"transparent"},{default:s(()=>[e(Ve,null,{default:s(()=>[b(u(g.title),1)]),_:1}),e(f,{icon:"mdi-close",onClick:a[4]||(a[4]=d=>v.value=!1)})]),_:1})]),_:1}),e(_e,null,{default:s(()=>[i("div",{class:"description-container",innerHTML:g.content},null,8,Le)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:2},1032,["class","onClick","onContextmenu"])],64))),256)),n(k).results.value.length===0?(r(),h(p,{key:0},{default:s(()=>[b(u(t.$t("common.emptyList")),1)]),_:1})):m("",!0)]),_:1})]),_:1}),n(k).results.value.length?(r(),h(p,{key:1},{default:s(()=>[e(F,{modelValue:n(c),"onUpdate:modelValue":a[6]||(a[6]=l=>R(c)?c.value=l:null),length:n(A),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left"},null,8,["modelValue","length"])]),_:1})):m("",!0)]),_:1})]))}}),Ue=ge(Re,[["__scopeId","data-v-40701c63"]]);export{Ue as default};
