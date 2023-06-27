import{d,a as m}from"./vue-9ef19677.js";import{a5 as u,b2 as _,av as f,r as p,Q as i,s as y,A as l,B as r,E as v,x as o,y as n,a as h,L as k}from"./index-b128ceeb.js";import{_ as g}from"./VDataTable-41462ebb.js";import{_ as x}from"./VCheckbox-5b4f9c86.js";import"./index-a8fddadb.js";const C=d({name:"RssArticles",mixins:[u],data(){return{headers:[{text:this.$t("modals.rss.columnTitle.id"),value:"id"},{text:this.$t("modals.rss.columnTitle.title"),value:"title"},{text:this.$t("modals.rss.columnTitle.category"),value:"category"},{text:this.$t("modals.rss.columnTitle.author"),value:"author"},{text:this.$t("modals.rss.columnTitle.date"),value:"parsedDate"},{text:this.$t("modals.rss.columnTitle.feedName"),value:"feedName"},{text:this.$t("modals.rss.columnTitle.actions"),value:"actions",sortable:!1}],filter:"",filterUnread:!1,mdiEmailOpen:_,mdiDownload:f,mdiClose:p}},created(){this.$store.commit("FETCH_FEEDS")},computed:{...m(["rss"]),articles(){const a=[];return this.rss.feeds.forEach(t=>{t.articles&&a.push(...t.articles.map(e=>({key:`${t.uid}|${e.id}`,feedName:t.name,parsedDate:new Date(e.date),...e})))}),a},unreadArticles(){return this.articles.filter(a=>!a.isRead)}},methods:{close(){this.$router.back()},customFilter(a,t,e){return e.title.toLowerCase().indexOf(t.toLowerCase())!==-1},getRowStyle(a){return a.isRead?"rss-read":"rss-unread"},downloadTorrent(a){this.createModal("AddModal",{initialMagnet:a.torrentURL})},async markAsRead(a){await i.markAsRead(a.feedName,a.id),this.$store.commit("FETCH_FEEDS")},async markAllAsRead(){for(const a of this.unreadArticles)await i.markAsRead(a.feedName,a.id);this.$store.commit("FETCH_FEEDS")}}});var A=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"px-1 px-sm-5 background noselect",on:{keydown:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"esc",27,s.key,["Esc","Escape"])?null:(s.preventDefault(),t.close.apply(null,arguments))}}},[e(l,{staticClass:"grey--text",attrs:{"no-gutters":"",align:"center",justify:"center"}},[e(r,[e("h1",{staticClass:"subtitle-1 ml-2",staticStyle:{"font-size":"1.6em !important"}},[t._v(" "+t._s(t.$t("modals.rss.title"))+" ")])]),e(r,{staticClass:"align-center justify-center"},[e(v,{staticClass:"justify-end"},[e(o,{attrs:{small:"",elevation:"0"},on:{click:t.close}},[e(n,[t._v(t._s(t.mdiClose))])],1)],1)],1)],1),e(l,{staticClass:"ma-0 pa-0"},[e(g,{attrs:{id:"articlesTable",headers:t.headers,items:t.filterUnread?t.unreadArticles:t.articles,"items-per-page":15,"item-key":"key",search:t.filter,"custom-filter":t.customFilter,"multi-sort":"","sort-by":["parsedDate"],"sort-desc":[!0],"item-class":t.getRowStyle},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"mx-4 mb-5"},[e(h,{attrs:{label:t.$t("filter")},model:{value:t.filter,callback:function(s){t.filter=s},expression:"filter"}}),e(l,[e(r,[e(x,{staticClass:"my-0",attrs:{label:t.$t("modals.rss.filterRead"),"hide-details":""},model:{value:t.filterUnread,callback:function(s){t.filterUnread=s},expression:"filterUnread"}})],1),e(r,[e(o,{staticStyle:{float:"right"},attrs:{small:"",elevation:"3"},on:{click:t.markAllAsRead}},[t._v(" "+t._s(t.$t("modals.rss.markAllAsRead"))+" ")])],1)],1)],1),e(k)]},proxy:!0},{key:"item.title",fn:function({item:s}){return[e("a",{attrs:{href:s.link,target:"_blank"},domProps:{textContent:t._s(s.title)}})]}},{key:"item.parsedDate",fn:function({item:s}){return[t._v(" "+t._s(s.parsedDate.toLocaleString())+" ")]}},{key:"item.actions",fn:function({item:s}){return[e("span",{staticClass:"rss-actions"},[e(n,{on:{click:function(c){return t.markAsRead(s)}}},[t._v(t._s(t.mdiEmailOpen))]),e(n,{on:{click:function(c){return t.downloadTorrent(s)}}},[t._v(t._s(t.mdiDownload))])],1)]}}],null,!0)})],1)],1)},R=[],$=y(C,A,R,!1,null,"b8faf6d6",null,null);const S=$.exports;export{S as default};
