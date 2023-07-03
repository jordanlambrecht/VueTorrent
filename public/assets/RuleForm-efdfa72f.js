import{d as C,m as b}from"./vue-9ef19677.js";import{P as l,r as x,R as y,Q as m,s as R,t as k,V as $,u as w,v as F,x as i,y as g,z as S,A as u,B as o,a as n,L as r,_,S as h,H as N,I as A,E as L}from"./index-9b3b9c7e.js";import{M as P}from"./Modal-572b592c.js";import{C as p}from"./AppPreferences-9ee94fcd.js";import{_ as M}from"./VDialog-1d6b3b70.js";import{_ as v}from"./VContainer-c83fbe84.js";import{_ as D}from"./VForm-ed16a01a.js";import{_ as f}from"./VCheckbox-868a6f66.js";import"./index-c65cf7d3.js";const E=C({name:"RuleForm",mixins:[P],props:["initialRule"],data:()=>({rule:{addPaused:null,affectedFeeds:[],assignedCategory:"",enabled:!0,episodeFilter:"",ignoreDays:0,lastMatch:"",mustContain:"",mustNotContain:"",name:"",savePath:"",smartFilter:!1,torrentContentLayout:null,useRegex:!1},addPausedOptions:[{text:l.t("useGlobalSettings"),value:null},{text:l.t("modals.newRule.def.addPaused.always"),value:!0},{text:l.t("modals.newRule.def.addPaused.never"),value:!1}],contentLayoutOptions:[{text:l.t("useGlobalSettings"),value:null},{text:l.t("enums.contentLayout.original"),value:p.ORIGINAL},{text:l.t("enums.contentLayout.subfolder"),value:p.SUBFOLDER},{text:l.t("enums.contentLayout.nosubfolder"),value:p.NO_SUBFOLDER}],loading:!1,matchingArticles:[],lastSavedName:"",mdiClose:x,mdiContentSave:y}),computed:{...b(["getFeeds","getCategories"]),lastMatch(){if(this.rule.lastMatch==="")return l.t("modals.newRule.def.lastMatch.unknownValue").toString();const s=new Date().getTime()-new Date(this.rule.lastMatch).getTime();return l.t("modals.newRule.def.lastMatch.knownValue").toString().replace("%1",Math.floor(s/(1e3*60*60*24)).toString())},availableFeeds(){return this.getFeeds()},availableCategories(){return this.getCategories().map(s=>s.name)},hasInitialRule(){return!!(this.initialRule&&this.initialRule.name)}},created(){this.$store.commit("FETCH_RULES"),this.hasInitialRule&&(this.rule={...this.initialRule},this.lastSavedName=this.initialRule.name)},mounted(){this.updateArticles()},methods:{async setRule(){(this.hasInitialRule||this.lastSavedName!=="")&&this.lastSavedName!==this.rule.name&&await m.renameRule(this.lastSavedName,this.rule.name),await m.setRule(this.rule),this.lastSavedName=this.rule.name,this.$store.commit("FETCH_RULES"),await this.updateArticles()},async updateArticles(){if(this.lastSavedName==="")return;this.loading=!0;const s=[],e=await m.getMatchingArticles(this.lastSavedName);for(const t in e){const a=e[t];s.length>0&&s.push({type:"divider"}),s.push({type:"subheader",value:t});for(const d in a){const c=a[d];s.push({type:"item",value:c})}}this.matchingArticles=s,this.loading=!1},selectNone(){this.rule.affectedFeeds=[]},selectAll(){this.rule.affectedFeeds=this.availableFeeds.map(s=>s.url)},close(){this.dialog=!1}}});var O=function(){var e=this,t=e._self._c;return e._self._setupProxy,t(M,{attrs:{"max-width":"1000px"},on:{keydown:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:(a.preventDefault(),e.setRule.apply(null,arguments))}},model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[t(k,{attrs:{flat:"",loading:e.loading}},[t(v,{staticClass:"pa-0 project done"},[t($,{staticClass:"justify-center"},[t(w,{staticClass:"transparent",attrs:{flat:"",dense:""}},[t(F,{staticClass:"mx-auto"},[t("h2",[e._v(e._s(this.lastSavedName!==""?e.$t("modals.newRule.titleEdit"):e.$t("modals.newRule.titleCreate")))])]),t(i,{staticClass:"transparent elevation-0",attrs:{fab:"",small:""},on:{click:e.close}},[t(g,[e._v(e._s(e.mdiClose))])],1)],1)],1),t(S,{staticClass:"pb-0"},[t(u,[t(o,{attrs:{cols:"12",sm:"6"}},[t(D,{ref:"form"},[t(v,[t(n,{attrs:{label:e.$t("modals.newRule.name"),required:""},model:{value:e.rule.name,callback:function(a){e.$set(e.rule,"name",a)},expression:"rule.name"}}),t(r),t(f,{attrs:{"hide-details":"",label:e.$t("modals.newRule.def.useRegex")},model:{value:e.rule.useRegex,callback:function(a){e.$set(e.rule,"useRegex",a)},expression:"rule.useRegex"}}),t(n,{attrs:{"hide-details":"",label:e.$t("modals.newRule.def.mustContain")},model:{value:e.rule.mustContain,callback:function(a){e.$set(e.rule,"mustContain",a)},expression:"rule.mustContain"}}),t(n,{attrs:{"hide-details":"",label:e.$t("modals.newRule.def.mustNotContain")},model:{value:e.rule.mustNotContain,callback:function(a){e.$set(e.rule,"mustNotContain",a)},expression:"rule.mustNotContain"}}),t(f,{attrs:{"hide-details":"",label:e.$t("modals.newRule.def.smartFilter")},model:{value:e.rule.smartFilter,callback:function(a){e.$set(e.rule,"smartFilter",a)},expression:"rule.smartFilter"}}),t(n,{attrs:{label:e.$t("modals.newRule.def.episodeFilter")},model:{value:e.rule.episodeFilter,callback:function(a){e.$set(e.rule,"episodeFilter",a)},expression:"rule.episodeFilter"}}),t(r),t(u,[t("p",{staticClass:"subtitle-1 mb-1"},[e._v(e._s(e.$t("modals.newRule.def.assignedCategory")))]),t(_,{staticClass:"rounded-xl",attrs:{flat:"",solo:"",dense:"","hide-details":"","background-color":"background",items:e.availableCategories},model:{value:e.rule.assignedCategory,callback:function(a){e.$set(e.rule,"assignedCategory",a)},expression:"rule.assignedCategory"}})],1),t(n,{attrs:{"hide-details":"",label:e.$t("modals.newRule.def.savePath")},model:{value:e.rule.savePath,callback:function(a){e.$set(e.rule,"savePath",a)},expression:"rule.savePath"}}),t(n,{attrs:{"hide-details":"",label:e.$t("modals.newRule.def.ignoreDays"),required:"",type:"number",min:"0"},model:{value:e.rule.ignoreDays,callback:function(a){e.$set(e.rule,"ignoreDays",a)},expression:"rule.ignoreDays"}}),t(n,{attrs:{disabled:"",value:e.lastMatch,label:e.$t("modals.newRule.def.lastMatch.title")}}),t(r),t(u,{staticClass:"my-2 flex-gap"},[t(o,[t("div",{staticClass:"d-flex flex-column align-center"},[t("p",{staticClass:"subtitle-1 mb-1"},[e._v(e._s(e.$t("modals.newRule.def.addPaused.title")))]),t(_,{staticClass:"rounded-xl",attrs:{flat:"",solo:"",dense:"","hide-details":"","background-color":"background",items:e.addPausedOptions},model:{value:e.rule.addPaused,callback:function(a){e.$set(e.rule,"addPaused",a)},expression:"rule.addPaused"}})],1)]),t(o,[t("div",{staticClass:"d-flex flex-column align-center"},[t("p",{staticClass:"subtitle-1 mb-1"},[e._v(e._s(e.$t("enums.contentLayout.title")))]),t(_,{staticClass:"rounded-xl",attrs:{flat:"",solo:"",dense:"","hide-details":"","background-color":"background",items:e.contentLayoutOptions},model:{value:e.rule.torrentContentLayout,callback:function(a){e.$set(e.rule,"torrentContentLayout",a)},expression:"rule.torrentContentLayout"}})],1)])],1),t(h,{staticClass:"pa-0"},[e._v(" "+e._s(e.$t("modals.newRule.def.affectedFeeds"))+" ")]),t(u,[t(o,{staticClass:"d-flex align-center justify-center",attrs:{cols:"6"}},[t(i,{attrs:{color:"accent"},on:{click:e.selectAll}},[e._v(e._s(e.$t("selectAll")))])],1),t(o,{staticClass:"d-flex align-center justify-center",attrs:{cols:"6"}},[t(i,{attrs:{color:"primary"},on:{click:e.selectNone}},[e._v(e._s(e.$t("selectNone")))])],1)],1),e._l(e.availableFeeds,function(a,d){return t(f,{key:d,attrs:{"hide-details":"",label:a.name,value:a.url},model:{value:e.rule.affectedFeeds,callback:function(c){e.$set(e.rule,"affectedFeeds",c)},expression:"rule.affectedFeeds"}})})],2)],1)],1),e.$vuetify.breakpoint.smAndUp?t(o,{attrs:{cols:"6"}},[t("h2",[e._v(e._s(e.$t("modals.matchingArticles.title")))]),t(N,{attrs:{subheader:""}},[e._l(e.matchingArticles,function(a){return[a.type==="divider"?t(r,{key:a.value}):a.type==="subheader"?t(h,{attrs:{inset:""}},[e._v(e._s(a.value))]):t(A,{staticClass:"mb-3"},[e._v(e._s(a.value))])]})],2)],1):e._e()],1),t(i,{attrs:{fab:"",color:"accent",fixed:"",right:"",bottom:""},on:{click:e.setRule}},[t(g,[e._v(e._s(e.mdiContentSave))])],1)],1),t(r),t(L,{staticClass:"justify-end"},[t(i,{staticClass:"accent white--text elevation-0 px-4",on:{click:e.setRule}},[e._v(" "+e._s(e.$t("save"))+" ")]),t(i,{staticClass:"white--text elevation-0 px-4",attrs:{color:"primary"},on:{click:e.close}},[e._v(" "+e._s(e.$t("close"))+" ")])],1)],1)],1)],1)},T=[],V=R(E,O,T,!1,null,null,null,null);const J=V.exports;export{J as default};
