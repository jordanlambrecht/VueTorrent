import{g as S,ae as kt,a2 as i,a3 as C,a4 as d,ab as f,W as A,Z as m,a9 as M,a7 as _,m as n,a8 as K,af as We,ag as Ze,F as x,K as Ie,d as N,r as Qe,c as E,N as De,x as Je,u,Y as J,ao as Se,D as be,$ as et,a1 as ze,n as F,ap as tt,aq as ot,S as Ne,a6 as se,O as Ee,Q as Ue,a0 as fe,ar as at,w as $t,q as Ct,A as Oe}from"./vue-XHfgLFXq.js";import{V as re,a as ge,b as xe,c as we,d as le,u as Ge,e as ie,f as Fe,g as ye,h as He,i as ee,j as Ke,k as R,l as de,m as Ye,n as Pe,o as St,p as Me,q as Ae,r as _e,s as Ce,t as Z,v as nt,w as Vt,x as W,C as rt,_ as Q,y as G,z as Ve,A as It,B as Dt,D as lt,E as st,F as Et,G as wt,H as w,I as it,J as Pt,T as Y,K as At,L as Bt,R as Lt,M as Ot,S as v,N as Mt,O as X,P as qe,Q as Re,U as Rt}from"./index-HZft94oT.js";import{_ as je}from"./dayjs-1V5b9TVn.js";import{d as ue}from"./dayjs.min-bb5lKVNH.js";import{Z as dt}from"./vuetify-9K5dQHv0.js";import{d as Nt}from"./index--Xpy-TFq.js";import{u as Ut}from"./ArrayPagination-YZF9XBMt.js";const xt={class:"d-flex"},Gt={key:2},Ft={key:3},Ht=S({__name:"RightClickMenuEntry",props:{text:{},icon:{},action:{type:Function},hidden:{type:Boolean},disabled:{type:Boolean},disabledText:{},disabledIcon:{},divider:{type:Boolean},children:{}},setup(h){return(e,r)=>{const t=kt("RightClickMenuEntry",!0);return e.hidden?M("",!0):(i(),C(le,{key:0,class:"px-3 pointer",disabled:e.disabled,onClick:e.action},{default:d(()=>[f("div",xt,[e.disabled&&e.disabledIcon?(i(),C(re,{key:0,class:"mr-2"},{default:d(()=>[A(m(e.disabledIcon),1)]),_:1})):e.icon?(i(),C(re,{key:1,class:"mr-2"},{default:d(()=>[A(m(e.icon),1)]),_:1})):M("",!0),e.disabled&&e.disabledText?(i(),_("span",Gt,m(e.disabledText),1)):(i(),_("span",Ft,m(e.text),1)),n(ge),!e.disabled&&e.children?(i(),C(re,{key:4},{default:d(()=>[A("mdi-chevron-right")]),_:1})):M("",!0)]),e.children?(i(),C(xe,{key:0,activator:"parent","open-on-hover":!0,"open-on-click":!0,"close-delay":"0","open-delay":"0",location:"right"},{default:d(()=>[n(we,null,{default:d(()=>[(i(!0),_(x,null,K(e.children,a=>(i(),C(t,We(Ze(a)),null,16))),256))]),_:1})]),_:1})):M("",!0)]),_:1},8,["disabled","onClick"]))}}}),Kt=S({__name:"RenameTorrentDialog",props:{guid:{},hash:{}},setup(h){const e=h,{isOpened:r}=Ge(e.guid),{t}=Ie(),a=ie(),l=N(),o=N(),s=N(!1),c=Qe({newName:""}),p=[g=>!!g||t("dialogs.renameTorrent.required"),g=>g!==V.value||t("dialogs.renameTorrent.sameName")],k=E(()=>a.getTorrentByHash(e.hash)),V=E(()=>k.value?.name);async function B(){await o.value?.validate(),s.value&&(await a.renameTorrent(e.hash,c.newName),b())}const b=()=>{r.value=!1};return De(()=>{c.newName=k.value?.name||""}),Je(()=>{l.value?.select()}),(g,y)=>(i(),C(Ye,{modelValue:u(r),"onUpdate:modelValue":y[3]||(y[3]=I=>be(r)?r.value=I:null)},{default:d(()=>[n(de,null,{default:d(()=>[n(Fe,null,{default:d(()=>[A(m(g.$t("dialogs.renameTorrent.title")),1)]),_:1}),n(ye,null,{default:d(()=>[n(u(He),{modelValue:s.value,"onUpdate:modelValue":y[1]||(y[1]=I=>s.value=I),ref_key:"form",ref:o,onSubmit:y[2]||(y[2]=J(()=>{},["prevent"]))},{default:d(()=>[V.value?(i(),C(ee,{key:0,"model-value":V.value,disabled:"",label:g.$t("dialogs.renameTorrent.oldName")},null,8,["model-value","label"])):M("",!0),n(ee,{modelValue:c.newName,"onUpdate:modelValue":y[0]||(y[0]=I=>c.newName=I),ref_key:"field",ref:l,rules:p,autofocus:"",label:g.$t("dialogs.renameTorrent.newName"),onKeydown:Se(B,["enter"])},null,8,["modelValue","label"])]),_:1},8,["modelValue"])]),_:1}),n(Ke,null,{default:d(()=>[n(ge),n(R,{color:"error",onClick:b},{default:d(()=>[A(m(g.$t("common.cancel")),1)]),_:1}),n(R,{color:"accent",disabled:!s.value,onClick:B},{default:d(()=>[A(m(g.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),ne=-2,j=-1,Yt=S({__name:"ShareLimitDialog",props:{guid:{},hashes:{}},setup(h){const e=h,{isOpened:r}=Ge(e.guid),t=Pe(),a=ie(),l=N(!1),o=N("global"),s=N(!1),c=N(0),p=N(!1),k=N(0),V=N(!1),B=N(0),b=E(()=>o.value!=="enabled");function g(){r.value=!1}async function y(){switch(o.value){case"global":await t.setShareLimit(e.hashes,ne,ne,ne);break;case"disabled":await t.setShareLimit(e.hashes,j,j,j);break;case"enabled":await t.setShareLimit(e.hashes,s.value?c.value:j,p.value?k.value:j,V.value?B.value:j);break}g()}return De(async()=>{const I=a.getTorrentByHash(e.hashes[0]);if(!I)return g();const $=I.ratio_limit,D=I.seeding_time_limit,z=I.inactive_seeding_time_limit;$===ne&&D===ne&&z===ne?o.value="global":$===j&&D===j&&z===j?o.value="disabled":(o.value="enabled",s.value=$>=0,c.value=s.value?$:0,p.value=D>=0,k.value=p.value?D:0,V.value=z>=0,B.value=V.value?z:0)}),(I,$)=>(i(),C(Ye,{modelValue:u(r),"onUpdate:modelValue":$[9]||($[9]=D=>be(r)?r.value=D:null),"max-width":"500"},{default:d(()=>[n(de,{title:I.$t("dialogs.share_limit.title")},{default:d(()=>[n(ye,null,{default:d(()=>[n(He,{modelValue:l.value,"onUpdate:modelValue":$[7]||($[7]=D=>l.value=D),onSubmit:$[8]||($[8]=J(()=>{},["prevent"])),onKeydown:Se(J(y,["prevent"]),["enter"])},{default:d(()=>[n(St,{modelValue:o.value,"onUpdate:modelValue":$[0]||($[0]=D=>o.value=D)},{default:d(()=>[n(Me,{label:I.$t("dialogs.share_limit.global"),value:"global"},null,8,["label"]),n(Me,{label:I.$t("dialogs.share_limit.disabled"),value:"disabled"},null,8,["label"]),n(Me,{label:I.$t("dialogs.share_limit.enabled"),value:"enabled"},null,8,["label"])]),_:1},8,["modelValue"]),n(Ae,null,{default:d(()=>[n(_e,{cols:"12",class:"d-flex align-center"},{default:d(()=>[f("span",null,[n(Ce,{modelValue:s.value,"onUpdate:modelValue":$[1]||($[1]=D=>s.value=D),disabled:b.value},null,8,["modelValue","disabled"])]),n(ee,{modelValue:c.value,"onUpdate:modelValue":$[2]||($[2]=D=>c.value=D),disabled:b.value||!s.value,density:"compact","hide-details":"",label:I.$t("dialogs.share_limit.ratio_limit")},null,8,["modelValue","disabled","label"])]),_:1}),n(_e,{cols:"12",class:"d-flex align-center"},{default:d(()=>[f("span",null,[n(Ce,{modelValue:p.value,"onUpdate:modelValue":$[3]||($[3]=D=>p.value=D),disabled:b.value},null,8,["modelValue","disabled"])]),n(ee,{modelValue:k.value,"onUpdate:modelValue":$[4]||($[4]=D=>k.value=D),disabled:b.value||!p.value,density:"compact","hide-details":"",label:I.$t("dialogs.share_limit.seeding_time_limit")},null,8,["modelValue","disabled","label"])]),_:1}),n(_e,{cols:"12",class:"d-flex align-center"},{default:d(()=>[f("span",null,[n(Ce,{modelValue:V.value,"onUpdate:modelValue":$[5]||($[5]=D=>V.value=D),disabled:b.value},null,8,["modelValue","disabled"])]),n(ee,{modelValue:B.value,"onUpdate:modelValue":$[6]||($[6]=D=>B.value=D),disabled:b.value||!V.value,density:"compact","hide-details":"",label:I.$t("dialogs.share_limit.inactive_seeding_time_limit")},null,8,["modelValue","disabled","label"])]),_:1})]),_:1})]),_:1},8,["modelValue","onKeydown"])]),_:1}),n(Ke,null,{default:d(()=>[n(ge),n(R,{color:"error",onClick:g},{default:d(()=>[A(m(I.$t("common.cancel")),1)]),_:1}),n(R,{color:"accent",disabled:!l.value,onClick:y},{default:d(()=>[A(m(I.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"]))}}),Xe=S({__name:"SpeedLimitDialog",props:{guid:{},hashes:{},mode:{}},setup(h){const e=h,{isOpened:r}=Ge(e.guid),t=Pe(),a=ie(),l=N(!1),o=N(0);function s(){r.value=!1}async function c(){const p=Math.max(0,o.value)*1e3;switch(e.mode){case"download":await t.setDownloadLimit(p,e.hashes);break;case"upload":await t.setUploadLimit(p,e.hashes);break}s()}return De(async()=>{const p=a.getTorrentByHash(e.hashes[0]);if(!p)return s();switch(e.mode){case"download":o.value=Math.max(0,Math.round(p.dl_limit/1e3));break;case"upload":o.value=Math.max(0,Math.round(p.up_limit/1e3));break}}),(p,k)=>(i(),C(Ye,{modelValue:u(r),"onUpdate:modelValue":k[3]||(k[3]=V=>be(r)?r.value=V:null)},{default:d(()=>[n(de,{title:p.$t(`dialogs.speed_limit.${p.mode}`)},{default:d(()=>[n(ye,null,{default:d(()=>[n(He,{modelValue:l.value,"onUpdate:modelValue":k[1]||(k[1]=V=>l.value=V),onSubmit:k[2]||(k[2]=J(()=>{},["prevent"])),onKeydown:Se(J(c,["prevent"]),["enter"])},{default:d(()=>[n(ee,{modelValue:o.value,"onUpdate:modelValue":k[0]||(k[0]=V=>o.value=V),type:"number",autofocus:"",clearable:"",label:p.$t("dialogs.speed_limit.label"),"prepend-inner-icon":"mdi-speedometer",suffix:"kB/s",onKeydown:Se(J(c,["prevent"]),["enter"])},null,8,["modelValue","label","onKeydown"])]),_:1},8,["modelValue","onKeydown"])]),_:1}),n(Ke,null,{default:d(()=>[n(ge),n(R,{color:"error",onClick:s},{default:d(()=>[A(m(p.$t("common.cancel")),1)]),_:1}),n(R,{color:"accent",disabled:!l.value,onClick:c},{default:d(()=>[A(m(p.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"]))}}),Be=h=>(tt("data-v-8f57aba4"),h=h(),ot(),h),zt={class:"d-flex justify-space-around"},qt=Be(()=>f("span",null,"Resume",-1)),jt=Be(()=>f("span",null,"Force Resume",-1)),Xt=Be(()=>f("span",null,"Pause",-1)),Wt=Be(()=>f("span",null,"Delete",-1)),Zt=S({__name:"RightClickMenu",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(h,{emit:e}){const r=h,t=e,{t:a}=Ie(),l=et(),o=Z(),s=nt(),c=Pe(),p=Vt(),k=ie(),V=E({get:()=>r.modelValue,set:P=>t("update:modelValue",P)}),B=E(()=>o.selectedTorrents.length>1),b=E(()=>o.selectedTorrents),g=E(()=>b.value[0]),y=E(()=>k.getTorrentByHash(g.value)),I=E(()=>o.selectedTorrents.map(k.getTorrentByHash).filter(P=>!!P)),$=E(()=>[{name:""},...c.categories]);async function D(){await k.resumeTorrents(b)}async function z(){await k.forceResumeTorrents(b)}async function H(){await k.pauseTorrents(b)}function ce(){s.createDialog(rt,{hashes:[...o.selectedTorrents]})}function Te(){s.createDialog(je,{hashes:[...o.selectedTorrents],mode:"dl"})}function Le(){s.createDialog(je,{hashes:[...o.selectedTorrents],mode:"save"})}function me(){s.createDialog(Kt,{hash:o.selectedTorrents[0]})}async function pe(){await k.recheckTorrents(b)}async function ve(){await c.reannounceTorrents(b)}async function te(){await c.toggleSeqDl(b)}async function ke(){await c.toggleFLPiecePrio(b)}async function he(){await c.toggleAutoTmm(b,!y.value?.auto_tmm)}function oe(P){return I.value.every(q=>q&&q.tags&&q.tags.includes(P))}async function $e(P){oe(P)?await k.removeTorrentTags(b.value,[P]):await k.addTorrentTags(b.value,[P])}async function T(P){try{await navigator.clipboard.writeText(P)}catch{ze.error(a("toast.copy.error"));return}ze.success(a("toast.copy.success"))}function L(){s.createDialog(Xe,{hashes:b.value,mode:"download"})}function O(){s.createDialog(Xe,{hashes:b.value,mode:"upload"})}function gt(){s.createDialog(Yt,{hashes:b.value})}async function yt(){b.value.forEach(P=>{k.exportTorrent(P).then(q=>{const U=window.URL.createObjectURL(q),ae=document.createElement("a");ae.href=U,ae.style.opacity="0",ae.setAttribute("download",`${P}.torrent`),document.body.appendChild(ae),ae.click(),document.body.removeChild(ae)})})}const Tt=E(()=>[{text:a("dashboard.right_click.advanced.title"),icon:"mdi-head-cog",children:[{text:a("dashboard.right_click.advanced.download_path"),icon:"mdi-tray-arrow-down",action:Te},{text:a("dashboard.right_click.advanced.save_path"),icon:"mdi-content-save",action:Le},{text:a("dashboard.right_click.advanced.rename"),icon:"mdi-rename-box",hidden:B.value,action:me},{text:a("dashboard.right_click.advanced.recheck"),icon:"mdi-playlist-check",action:pe},{text:a("dashboard.right_click.advanced.reannounce"),icon:"mdi-bullhorn",action:ve},{text:a("dashboard.right_click.advanced.seq_dl"),icon:y.value?.seq_dl?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",action:te},{text:a("dashboard.right_click.advanced.f_l_prio"),icon:y.value?.f_l_piece_prio?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",action:ke},{text:a("dashboard.right_click.advanced.auto_tmm"),icon:y.value?.auto_tmm?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",action:he}]},{text:a("dashboard.right_click.priority.title"),icon:"mdi-priority-high",hidden:!p.preferences.queueing_enabled,children:[{text:a("dashboard.right_click.priority.top"),icon:"mdi-priority-high",action:async()=>await k.setTorrentPriority(b.value,"topPrio")},{text:a("dashboard.right_click.priority.increase"),icon:"mdi-arrow-up",action:async()=>await k.setTorrentPriority(b.value,"increasePrio")},{text:a("dashboard.right_click.priority.decrease"),icon:"mdi-arrow-down",action:async()=>await k.setTorrentPriority(b.value,"decreasePrio")},{text:a("dashboard.right_click.priority.bottom"),icon:"mdi-priority-low",action:async()=>await k.setTorrentPriority(b.value,"bottomPrio")}]},{text:a("dashboard.right_click.tags.title"),icon:"mdi-tag",disabled:c.tags.length===0,disabledText:a("dashboard.right_click.tags.disabled_title"),disabledIcon:"mdi-tag-off",children:c.tags.map(P=>({text:P,icon:oe(P)?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",action:async()=>await $e(P)}))},{text:a("dashboard.right_click.category.title"),icon:"mdi-label",disabled:c.categories.length===0,disabledText:a("dashboard.right_click.category.disabled_title"),disabledIcon:"mdi-label-off",children:$.value.map(P=>({text:P.name===""?a("dashboard.right_click.category.clear"):P.name,action:async()=>await k.setTorrentCategory(b.value,P.name)}))},{text:a("dashboard.right_click.speed_limit.title"),icon:"mdi-speedometer-slow",children:[{text:a("dashboard.right_click.speed_limit.download"),icon:"mdi-download",action:L},{text:a("dashboard.right_click.speed_limit.upload"),icon:"mdi-upload",action:O},{text:a("dashboard.right_click.speed_limit.share"),icon:"mdi-account-group",action:gt}]},{text:a("dashboard.right_click.copy.title"),icon:"mdi-content-copy",hidden:B.value,children:[{text:a("dashboard.right_click.copy.name"),icon:"mdi-alphabetical-variant",action:async()=>y.value&&await T(y.value.name)},{text:a("dashboard.right_click.copy.hash"),icon:"mdi-pound",action:async()=>await T(g.value)},{text:a("dashboard.right_click.copy.magnet"),icon:"mdi-magnet",action:async()=>y.value&&await T(y.value.magnet)}]},{text:a("dashboard.right_click.export",o.selectedTorrents.length),icon:B.value?"mdi-download-multiple":"mdi-download",action:yt},{text:a("dashboard.right_click.info"),icon:"mdi-information",hidden:B.value,action:()=>l.push({name:"torrentDetail",params:{hash:g.value}})}]);return(P,q)=>V.value?(i(),C(xe,{key:0,modelValue:V.value,"onUpdate:modelValue":q[0]||(q[0]=U=>V.value=U),activator:"parent","close-on-content-click":!0,transition:"slide-y-transition","scroll-strategy":"none"},{default:d(()=>[n(we,null,{default:d(()=>[n(le,null,{default:d(()=>[f("div",zt,[n(W,{location:"top"},{activator:d(({props:U})=>[n(R,F({density:"compact",variant:"plain",icon:"mdi-play"},U,{onClick:D}),null,16)]),default:d(()=>[qt]),_:1}),n(W,{location:"top"},{activator:d(({props:U})=>[n(R,F({density:"compact",variant:"plain",icon:"mdi-fast-forward"},U,{onClick:z}),null,16)]),default:d(()=>[jt]),_:1}),n(W,{location:"top"},{activator:d(({props:U})=>[n(R,F({density:"compact",variant:"plain",icon:"mdi-pause"},U,{onClick:H}),null,16)]),default:d(()=>[Xt]),_:1}),n(W,{location:"top"},{activator:d(({props:U})=>[n(R,F({color:"red",density:"compact",variant:"plain",icon:"mdi-delete-forever"},U,{onClick:ce}),null,16)]),default:d(()=>[Wt]),_:1})])]),_:1}),(i(!0),_(x,null,K(Tt.value,U=>(i(),C(Ht,We(Ze(U)),null,16))),256))]),_:1})]),_:1},8,["modelValue"])):M("",!0)}}),Qt=Q(Zt,[["__scopeId","data-v-8f57aba4"]]),Jt={class:"d-flex flex-column"},eo={class:"text-caption text-grey"},to={class:"text-caption text-grey"},ut=S({__name:"ItemAmount",props:{torrent:{},title:{},value:{},total:{}},setup(h){return(e,r)=>(i(),_("div",Jt,[f("div",eo,m(e.$t(`torrent.properties.${e.title}`)),1),f("div",null,[A(m(e.torrent[e.value])+" ",1),f("span",to," / "+m(e.torrent[e.total]),1)])]))}}),oo={key:0,class:"d-flex flex-column"},ao={class:"text-caption text-grey"},no={class:"d-flex flex-row gap"},ro=S({__name:"ItemChip",props:{torrent:{},title:{},value:{},color:{}},setup(h){const e=h,r=G(),t=E(()=>{const l=e.torrent[e.value],o=typeof l;if(o==="string")return l.length>0?[l]:[];if(o==="object")return l}),a=E(()=>t.value.length<1);return(l,o)=>u(r).hideChipIfUnset&&a.value?M("",!0):(i(),_("div",oo,[f("div",ao,m(l.$t(`torrent.properties.${l.title}`)),1),f("div",no,[!t.value||a.value?(i(),C(Ve,{key:0,color:l.color.replace("$1",l.torrent[l.value]),variant:"flat"},{default:d(()=>[A(m(l.$t(`torrent.properties.empty_${l.value}`)),1)]),_:1},8,["color"])):(i(!0),_(x,{key:1},K(t.value,s=>(i(),C(Ve,{color:l.color.replace("$1",l.torrent.state),variant:"flat"},{default:d(()=>[A(m(s),1)]),_:2},1032,["color"]))),256))])]))}}),ct=Q(ro,[["__scopeId","data-v-08ef66f1"]]),lo={class:"d-flex flex-column"},so={class:"text-caption text-grey"},io={class:"text-caption text-grey"},mt=S({__name:"ItemData",props:{torrent:{},title:{},value:{}},setup(h){const e=G();return(r,t)=>(i(),_("div",lo,[f("div",so,m(r.$t(`torrent.properties.${r.title}`)),1),f("div",null,[A(m(u(It)(r.torrent[r.value],u(e).useBinarySize))+" ",1),f("span",io,m(u(Dt)(r.torrent[r.value],u(e).useBinarySize)),1)])]))}}),uo={class:"d-flex flex-column"},co={class:"text-caption text-grey"},mo={key:0},po={key:1},pt=S({__name:"ItemDateTime",props:{torrent:{},title:{},value:{}},setup(h){const e=G();return(r,t)=>(i(),_("div",uo,[f("div",co,m(r.$t(`torrent.properties.${r.title}`)),1),f("div",null,[r.torrent[r.value]>0?(i(),_("span",mo,m(u(ue)(r.torrent[r.value]*1e3).format(u(e).dateFormat??"DD/MM/YYYY, HH:mm:ss")),1)):(i(),_("span",po,m(r.$t("dashboard.not_complete")),1))])]))}}),vo={class:"d-flex flex-column"},ho={class:"text-caption text-grey"},fo={key:0},_o={key:1},vt=S({__name:"ItemDuration",props:{torrent:{},title:{},value:{}},setup(h){const e=h,r=E(()=>{const t=ue.duration(e.torrent[e.value],"seconds"),a=[t.years(),t.months(),t.days(),t.hours(),t.minutes(),t.seconds()],l=["Y","M","d","h","m","s"];let o=!1;return a.map((s,c)=>{if(o||s)return o=!0,`${s}${l[c]}`}).filter(s=>s).join(" ")});return(t,a)=>(i(),_("div",vo,[f("div",ho,m(t.$t(`torrent.properties.${t.title}`)),1),f("div",null,[t.torrent[t.value]>0?(i(),_("span",fo,m(r.value),1)):(i(),_("span",_o,m(t.$t("dashboard.not_complete")),1))])]))}}),bo={class:"d-flex flex-column"},go={class:"text-caption text-grey"},ht=S({__name:"ItemPercent",props:{torrent:{},title:{},value:{}},setup(h){return(e,r)=>(i(),_("div",bo,[f("div",go,m(e.$t(`torrent.properties.${e.title}`)),1),n(st,{"model-value":e.torrent[e.value],max:1,height:20,color:`torrent-${e.torrent.state}`,rounded:"sm",style:{width:"10em"}},{default:d(()=>[A(m(u(lt)(e.torrent[e.value])),1)]),_:1},8,["model-value","color"])]))}}),yo={class:"d-flex flex-column"},To={class:"text-caption text-grey"},ft=S({__name:"ItemRelativeTime",props:{torrent:{},title:{},value:{}},setup(h){return(e,r)=>(i(),_("div",yo,[f("div",To,m(e.$t(`torrent.properties.${e.title}`)),1),f("div",null,[f("span",null,m(u(ue)(e.torrent[e.value]*1e3).fromNow()),1)])]))}}),ko={class:"d-flex flex-column"},$o={class:"text-caption text-grey"},Co={class:"text-caption text-grey"},_t=S({__name:"ItemSpeed",props:{torrent:{},title:{},value:{}},setup(h){const e=G();return(r,t)=>(i(),_("div",ko,[f("div",$o,m(r.$t(`torrent.properties.${r.title}`)),1),f("div",null,[A(m(u(Et)(r.torrent[r.value],u(e).useBitSpeed))+" ",1),f("span",Co,m(u(wt)(r.torrent[r.value],u(e).useBitSpeed)),1)])]))}}),So={class:"d-flex flex-column"},Vo={class:"text-caption text-grey"},bt=S({__name:"ItemText",props:{torrent:{},title:{},value:{}},setup(h){return(e,r)=>(i(),_("div",So,[f("div",Vo,m(e.$t(`torrent.properties.${e.title}`)),1),f("div",null,m(e.torrent[e.value]),1)]))}}),Io={class:"d-flex gap flex-wrap"},Do=S({__name:"GridTorrent",props:{torrent:{}},emits:["onTorrentClick"],setup(h){const e=h,r=Z(),t=G(),a=E(()=>(e.torrent.progress===1?t.doneGridProperties:t.busyGridProperties).filter(c=>c.active).sort((c,p)=>c.order-p.order)),l=s=>{switch(s){case w.AMOUNT:return ut;case w.CHIP:return ct;case w.DATA:return mt;case w.DATETIME:return pt;case w.DURATION:return vt;case w.PERCENT:return ht;case w.RELATIVE:return ft;case w.SPEED:return _t;case w.TEXT:default:return bt}},o=E(()=>r.isTorrentInSelection(e.torrent.hash));return(s,c)=>(i(),C(de,{class:se(`sideborder ${s.torrent.state} pointer`),height:"100%",color:o.value?`torrent-${s.torrent.state}-darken-3`:void 0,onClick:c[0]||(c[0]=p=>s.$emit("onTorrentClick",p,s.torrent))},{default:d(()=>[n(Fe,{class:"text-wrap text-subtitle-1 pt-1 pb-0"},{default:d(()=>[A(m(s.torrent.name),1)]),_:1}),n(ye,null,{default:d(()=>[f("div",Io,[(i(!0),_(x,null,K(a.value,p=>(i(),C(Ne(l(p.type)),F({torrent:s.torrent},p.props),null,16,["torrent"]))),256))])]),_:1})]),_:1},8,["class","color"]))}}),Eo=Q(Do,[["__scopeId","data-v-4ea6ef97"]]),wo={class:"d-flex align-center",style:{height:"100%",width:"100%"}},Po=S({__name:"GridView",props:{paginatedTorrents:{}},emits:["onCheckboxClick","onTorrentClick","onTorrentDblClick","onTorrentRightClick","startPress","endPress"],setup(h){const e=dt(),r=Z();return(t,a)=>(i(),C(Ae,{id:"torrentList"},{default:d(()=>[(i(!0),_(x,null,K(t.paginatedTorrents,l=>(i(),C(_e,{cols:"12",lg:"3",md:"4",sm:"6",xl:"2",class:se([u(e).mobile?"pb-2":"pb-4","pt-0"]),onContextmenu:o=>t.$emit("onTorrentRightClick",o,l),onTouchcancel:a[1]||(a[1]=o=>t.$emit("endPress")),onTouchend:a[2]||(a[2]=o=>t.$emit("endPress")),onTouchmove:a[3]||(a[3]=o=>t.$emit("endPress")),onTouchstart:o=>t.$emit("startPress",o.touches.item(0),l),onDblclick:o=>t.$emit("onTorrentDblClick",l)},{default:d(()=>[f("div",wo,[n(it,null,{default:d(()=>[Ee(n(R,{color:`torrent-${l.state}`,icon:u(r).isTorrentInSelection(l.hash)?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",class:"mr-2",variant:"text",onClick:o=>t.$emit("onCheckboxClick",l)},null,8,["color","icon","onClick"]),[[Ue,u(r).isSelectionMultiple]])]),_:2},1024),n(Eo,{torrent:l,onOnTorrentClick:a[0]||(a[0]=(o,s)=>t.$emit("onTorrentClick",o,s))},null,8,["torrent"])])]),_:2},1032,["class","onContextmenu","onTouchstart","onDblclick"]))),256))]),_:1}))}}),Ao=Q(Po,[["__scopeId","data-v-8292d1aa"]]),Bo={class:"d-flex gap flex-wrap"},Lo=S({__name:"ListTorrent",props:{torrent:{}},emits:["onTorrentClick"],setup(h){const e=h,r=Z(),t=G(),a=E(()=>(e.torrent.progress===1?t.doneTorrentProperties:t.busyTorrentProperties).filter(c=>c.active).sort((c,p)=>c.order-p.order)),l=s=>{switch(s){case w.AMOUNT:return ut;case w.CHIP:return ct;case w.DATA:return mt;case w.DATETIME:return pt;case w.DURATION:return vt;case w.PERCENT:return ht;case w.RELATIVE:return ft;case w.SPEED:return _t;case w.TEXT:default:return bt}},o=E(()=>r.isTorrentInSelection(e.torrent.hash));return(s,c)=>(i(),C(de,{class:se(`sideborder ${s.torrent.state} pointer`),width:"100%",color:o.value?`torrent-${s.torrent.state}-darken-3`:void 0,onClick:c[0]||(c[0]=p=>s.$emit("onTorrentClick",p,s.torrent))},{default:d(()=>[n(Fe,{class:"text-wrap pt-1 pb-0 px-2 text-truncate",style:{"font-size":"0.97em"}},{default:d(()=>[A(m(s.torrent.name),1)]),_:1}),n(ye,{class:"pa-2 pt-0"},{default:d(()=>[f("div",Bo,[(i(!0),_(x,null,K(a.value,p=>(i(),C(Ne(l(p.type)),F({torrent:s.torrent},p.props),null,16,["torrent"]))),256))])]),_:1})]),_:1},8,["class","color"]))}}),Oo=Q(Lo,[["__scopeId","data-v-74669dd8"]]),Mo={class:"d-flex align-center"},Ro=S({__name:"ListView",props:{paginatedTorrents:{}},emits:["onCheckboxClick","onTorrentClick","onTorrentDblClick","onTorrentRightClick","startPress","endPress"],setup(h){const e=dt(),r=Z();return(t,a)=>(i(),C(we,{id:"torrentList",class:"pa-0"},{default:d(()=>[(i(!0),_(x,null,K(t.paginatedTorrents,l=>(i(),C(le,{id:`torrent-${l.hash}`,class:se([u(e).mobile?"mb-2":"mb-4","pa-0"]),onContextmenu:o=>t.$emit("onTorrentRightClick",o,l),onTouchcancel:a[1]||(a[1]=o=>t.$emit("endPress")),onTouchend:a[2]||(a[2]=o=>t.$emit("endPress")),onTouchmove:a[3]||(a[3]=o=>t.$emit("endPress")),onTouchstart:o=>t.$emit("startPress",o.touches.item(0),l),onDblclick:o=>t.$emit("onTorrentDblClick",l)},{default:d(()=>[f("div",Mo,[n(it,null,{default:d(()=>[Ee(n(R,{color:`torrent-${l.state}`,icon:u(r).isTorrentInSelection(l.hash)?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",class:"mr-2",variant:"text",onClick:o=>t.$emit("onCheckboxClick",l)},null,8,["color","icon","onClick"]),[[Ue,u(r).isSelectionMultiple]])]),_:2},1024),n(Oo,{torrent:l,onOnTorrentClick:a[0]||(a[0]=(o,s)=>t.$emit("onTorrentClick",o,s))},null,8,["torrent"])])]),_:2},1032,["id","class","onContextmenu","onTouchstart","onDblclick"]))),256))]),_:1}))}}),No=Q(Ro,[["__scopeId","data-v-2b24c5da"]]),Uo=S({__name:"ItemAmount",props:{torrent:{},title:{},value:{},total:{}},setup(h){return(e,r)=>(i(),_("td",null,m(e.torrent[e.value])+" / "+m(e.torrent[e.total]),1))}}),xo={key:0,class:"d-flex flex-row gap"},Go=S({__name:"ItemChip",props:{torrent:{},title:{},value:{},color:{}},setup(h){const e=h,r=G(),t=E(()=>{const l=e.torrent[e.value],o=typeof l;if(o==="string")return l.length>0?[l]:[];if(o==="object")return l}),a=E(()=>t.value.length<1);return(l,o)=>(i(),_("td",null,[u(r).hideChipIfUnset&&a.value?M("",!0):(i(),_("div",xo,[!t.value||a.value?(i(),C(Ve,{key:0,color:l.color.replace("$1",l.torrent[l.value]),variant:"flat"},{default:d(()=>[A(m(l.$t(`torrent.properties.empty_${l.value}`)),1)]),_:1},8,["color"])):(i(!0),_(x,{key:1},K(t.value,s=>(i(),C(Ve,{color:l.color.replace("$1",l.torrent.state),variant:"flat"},{default:d(()=>[A(m(s),1)]),_:2},1032,["color"]))),256))]))]))}}),Fo=Q(Go,[["__scopeId","data-v-23c01601"]]),Ho=S({__name:"ItemData",props:{torrent:{},title:{},value:{}},setup(h){const e=G();return(r,t)=>(i(),_("td",null,m(u(Pt)(r.torrent[r.value],u(e).useBinarySize)),1))}}),Ko={key:0},Yo={key:1},zo=S({__name:"ItemDateTime",props:{torrent:{},title:{},value:{}},setup(h){const e=G();return(r,t)=>r.torrent[r.value]>0?(i(),_("td",Ko,m(u(ue)(r.torrent[r.value]*1e3).format(u(e).dateFormat??"DD/MM/YYYY, HH:mm:ss")),1)):(i(),_("td",Yo,m(r.$t("dashboard.not_complete")),1))}}),qo={key:0},jo={key:1},Xo=S({__name:"ItemDuration",props:{torrent:{},title:{},value:{}},setup(h){const e=h,r=E(()=>{const t=ue.duration(e.torrent[e.value],"seconds"),a=[t.years(),t.months(),t.days(),t.hours(),t.minutes(),t.seconds()],l=["Y","M","d","h","m","s"];let o=!1;return a.map((s,c)=>{if(o||s)return o=!0,`${s}${l[c]}`}).filter(s=>s).join(" ")});return(t,a)=>t.torrent[t.value]>0?(i(),_("td",qo,m(r.value),1)):(i(),_("td",jo,m(t.$t("dashboard.not_complete")),1))}}),Wo=S({__name:"ItemPercent",props:{torrent:{},title:{},value:{}},setup(h){const e=h,r=E(()=>[Y.UPLOADING,Y.CHECKING_UP,Y.FORCED_UP,Y.ALLOCATING,Y.DOWNLOADING,Y.META_DL,Y.CHECKING_DL,Y.FORCED_DL,Y.CHECKING_RESUME_DATA,Y.MOVING].includes(e.torrent.state));return(t,a)=>(i(),_("td",null,[n(st,{"model-value":t.torrent[t.value],max:1,striped:r.value,height:20,color:`torrent-${t.torrent.state}`,rounded:"sm",style:{width:"10em"}},{default:d(()=>[A(m(u(lt)(t.torrent[t.value])),1)]),_:1},8,["model-value","striped","color"])]))}}),Zo=S({__name:"ItemRelativeTime",props:{torrent:{},title:{},value:{}},setup(h){return(e,r)=>(i(),_("td",null,m(u(ue)(e.torrent[e.value]*1e3).fromNow()),1))}}),Qo=S({__name:"ItemSpeed",props:{torrent:{},title:{},value:{}},setup(h){const e=G();return(r,t)=>(i(),_("td",null,m(u(At)(r.torrent[r.value],u(e).useBitSpeed)),1))}}),Jo=S({__name:"ItemText",props:{torrent:{},title:{},value:{}},setup(h){return(e,r)=>(i(),_("td",null,m(e.torrent[e.value]),1))}}),ea=S({__name:"TableTorrent",props:{torrent:{}},setup(h){const e=G(),r=E(()=>e.tableProperties.filter(a=>a.active).sort((a,l)=>a.order-l.order)),t=a=>{switch(a){case w.AMOUNT:return Uo;case w.CHIP:return Fo;case w.DATA:return Ho;case w.DATETIME:return zo;case w.DURATION:return Xo;case w.PERCENT:return Wo;case w.RELATIVE:return Zo;case w.SPEED:return Qo;case w.TEXT:default:return Jo}};return(a,l)=>(i(!0),_(x,null,K(r.value,o=>(i(),C(Ne(t(o.type)),F({torrent:a.torrent},o.props),null,16,["torrent"]))),256))}}),ta=h=>(tt("data-v-d4523ffc"),h=h(),ot(),h),oa=ta(()=>f("th",{class:"px-1"},null,-1)),aa={key:0},na={class:"text-left"},ra={class:"text-left"},la=["onContextmenu","onTouchstart","onClick","onDblclick"],sa={key:0},ia=S({__name:"TableView",props:{paginatedTorrents:{}},emits:["onCheckboxClick","onTorrentClick","onTorrentDblClick","onTorrentRightClick","startPress","endPress"],setup(h){const e=Z(),r=G(),t=E(()=>r.tableProperties.filter(o=>o.active).sort((o,s)=>o.order-s.order));function a(o){return e.isTorrentInSelection(o.hash)}const l=o=>["pointer",a(o)?`bg-torrent-${o.state}-darken-3 selected`:""];return(o,s)=>(i(),C(Bt,{id:"torrentList",class:"pa-0",density:"compact"},{default:d(()=>[f("thead",null,[f("tr",null,[oa,u(e).isSelectionMultiple?(i(),_("th",aa)):M("",!0),f("th",na,m(o.$t("torrent.properties.name")),1),(i(!0),_(x,null,K(t.value,c=>(i(),_("th",ra,m(o.$t(`torrent.properties.${c.props.title}`)),1))),256))])]),f("tbody",null,[(i(!0),_(x,null,K(o.paginatedTorrents,c=>Ee((i(),_("tr",{class:se(l(c)),onContextmenu:p=>o.$emit("onTorrentRightClick",p,c),onTouchcancel:s[0]||(s[0]=p=>o.$emit("endPress")),onTouchend:s[1]||(s[1]=p=>o.$emit("endPress")),onTouchmove:s[2]||(s[2]=p=>o.$emit("endPress")),onTouchstart:p=>o.$emit("startPress",p.touches.item(0),c),onClick:p=>o.$emit("onTorrentClick",p,c),onDblclick:p=>o.$emit("onTorrentDblClick",c)},[f("td",{class:se(`pa-0 bg-torrent-${c.state}`)},null,2),u(e).isSelectionMultiple?(i(),_("td",sa,[n(Ce,{"model-value":a(c),color:`torrent-${c.state}`,variant:"text",onClick:J(p=>o.$emit("onCheckboxClick",c),["stop"])},null,8,["model-value","color","onClick"])])):M("",!0),f("td",null,m(c.name),1),n(ea,{torrent:c},null,8,["torrent"])],42,la)),[[Lt]])),256))])]),_:1}))}}),da=Q(ia,[["__scopeId","data-v-d4523ffc"]]),ua={class:"d-flex my-3"},ca={class:"pa-0"},ma={class:"d-flex align-center text-uppercase",style:{"font-size":"0.8em"}},pa=S({__name:"Toolbar",setup(h){const{t:e}=Ie(),r=Z(),{torrentCountString:t,isSelectionMultiple:a,displayMode:l}=fe(r),{isDrawerOpen:o}=fe(Ot()),s=ie(),{sortOptions:c}=fe(s),p=[{value:v.ADDED_ON,title:e("dashboard.sortBy.added_on")},{value:v.AMOUNT_LEFT,title:e("dashboard.sortBy.amount_left")},{value:v.AUTO_TMM,title:e("dashboard.sortBy.auto_tmm")},{value:v.AVAILABILITY,title:e("dashboard.sortBy.availability")},{value:v.AVG_DOWNLOAD_SPEED,title:e("dashboard.sortBy.avg_download_speed")},{value:v.AVG_UPLOAD_SPEED,title:e("dashboard.sortBy.avg_upload_speed")},{value:v.CATEGORY,title:e("dashboard.sortBy.category")},{value:v.COMPLETED,title:e("dashboard.sortBy.completed")},{value:v.COMPLETION_ON,title:e("dashboard.sortBy.completion_on")},{value:v.CONTENT_PATH,title:e("dashboard.sortBy.content_path")},{value:v.DL_LIMIT,title:e("dashboard.sortBy.dl_limit")},{value:v.DLSPEED,title:e("dashboard.sortBy.dlspeed")},{value:v.DOWNLOAD_PATH,title:e("dashboard.sortBy.download_path")},{value:v.DOWNLOADED,title:e("dashboard.sortBy.downloaded")},{value:v.DOWNLOADED_SESSION,title:e("dashboard.sortBy.downloaded_session")},{value:v.ETA,title:e("dashboard.sortBy.eta")},{value:v.F_L_PIECE_PRIO,title:e("dashboard.sortBy.f_l_piece_prio")},{value:v.FORCE_START,title:e("dashboard.sortBy.force_start")},{value:v.GLOBALSPEED,title:e("dashboard.sortBy.globalSpeed")},{value:v.GLOBALVOLUME,title:e("dashboard.sortBy.globalVolume")},{value:v.HASH,title:e("dashboard.sortBy.hash")},{value:v.INFOHASH_V1,title:e("dashboard.sortBy.infohash_v1")},{value:v.INFOHASH_V2,title:e("dashboard.sortBy.infohash_v2")},{value:v.LAST_ACTIVITY,title:e("dashboard.sortBy.last_activity")},{value:v.MAGNET_URI,title:e("dashboard.sortBy.magnet_uri")},{value:v.MAX_RATIO,title:e("dashboard.sortBy.max_ratio")},{value:v.MAX_SEEDING_TIME,title:e("dashboard.sortBy.max_seeding_time")},{value:v.NAME,title:e("dashboard.sortBy.name")},{value:v.NUM_COMPLETE,title:e("dashboard.sortBy.num_complete")},{value:v.NUM_INCOMPLETE,title:e("dashboard.sortBy.num_incomplete")},{value:v.NUM_LEECHS,title:e("dashboard.sortBy.num_leechs")},{value:v.NUM_SEEDS,title:e("dashboard.sortBy.num_seeds")},{value:v.PRIORITY,title:e("dashboard.sortBy.priority")},{value:v.PROGRESS,title:e("dashboard.sortBy.progress")},{value:v.RATIO,title:e("dashboard.sortBy.ratio")},{value:v.RATIO_LIMIT,title:e("dashboard.sortBy.ratio_limit")},{value:v.SAVE_PATH,title:e("dashboard.sortBy.save_path")},{value:v.SEEDING_TIME,title:e("dashboard.sortBy.seeding_time")},{value:v.SEEDING_TIME_LIMIT,title:e("dashboard.sortBy.seeding_time_limit")},{value:v.SEEN_COMPLETE,title:e("dashboard.sortBy.seen_complete")},{value:v.SEQ_DL,title:e("dashboard.sortBy.seq_dl")},{value:v.SIZE,title:e("dashboard.sortBy.size")},{value:v.STATE,title:e("dashboard.sortBy.state")},{value:v.SUPER_SEEDING,title:e("dashboard.sortBy.super_seeding")},{value:v.TAGS,title:e("dashboard.sortBy.tags")},{value:v.TIME_ACTIVE,title:e("dashboard.sortBy.time_active")},{value:v.TOTAL_SIZE,title:e("dashboard.sortBy.total_size")},{value:v.TRACKER,title:e("dashboard.sortBy.tracker")},{value:v.TRACKERS_COUNT,title:e("dashboard.sortBy.trackers_count")},{value:v.UP_LIMIT,title:e("dashboard.sortBy.up_limit")},{value:v.UPLOADED,title:e("dashboard.sortBy.uploaded")},{value:v.UPLOADED_SESSION,title:e("dashboard.sortBy.uploaded_session")},{value:v.UPSPEED,title:e("dashboard.sortBy.upspeed")}].sort((b,g)=>b.title.localeCompare(g.title));p.splice(0,0,{value:v.DEFAULT,title:e("dashboard.sortBy.default")});function k(){s.textFilter=""}const V=E({get:()=>s.textFilter,set:Nt(b=>{s.textFilter=b??""},300)});function B(){a.value&&r.unselectAllTorrents(),a.value=!a.value}return(b,g)=>(i(),_(x,null,[n(Ae,null,{default:d(()=>[n(_e,{cols:"12"},{default:d(()=>[n(ee,{id:"searchInput",modelValue:V.value,"onUpdate:modelValue":g[0]||(g[0]=y=>V.value=y),label:u(e)("dashboard.searchInputLabel"),clearable:"",density:"compact","single-line":"","hide-details":"","prepend-inner-icon":"mdi-magnify",variant:"solo","onClick:clear":g[1]||(g[1]=y=>k())},null,8,["modelValue","label"])]),_:1})]),_:1}),f("div",ua,[n(W,{text:u(e)("dashboard.toggleSelectMode"),location:"top"},{activator:d(({props:y})=>[n(R,F({icon:u(a)?"mdi-checkbox-marked":"mdi-checkbox-blank-outline"},y,{variant:"plain",onClick:B}),null,16,["icon"])]),_:1},8,["text"]),n(xe,null,{activator:d(({props:y})=>[n(W,{text:b.$t("dashboard.displayMode.title"),location:"top"},{activator:d(({props:I})=>[n(R,F({icon:""},F(y,I),{variant:"plain"}),{default:d(()=>[u(l)===u(X).LIST?(i(),C(re,{key:0,icon:"mdi-view-list"})):M("",!0),u(l)===u(X).GRID?(i(),C(re,{key:1,icon:"mdi-view-grid"})):M("",!0),u(l)===u(X).TABLE?(i(),C(re,{key:2,icon:"mdi-table"})):M("",!0)]),_:2},1040)]),_:2},1032,["text"])]),default:d(()=>[n(we,null,{default:d(()=>[n(le,{title:b.$t("dashboard.displayMode.list"),"prepend-icon":"mdi-view-list",onClick:g[2]||(g[2]=y=>l.value=u(X).LIST)},null,8,["title"]),n(le,{title:b.$t("dashboard.displayMode.grid"),"prepend-icon":"mdi-view-grid",onClick:g[3]||(g[3]=y=>l.value=u(X).GRID)},null,8,["title"]),n(le,{title:b.$t("dashboard.displayMode.table"),"prepend-icon":"mdi-table",onClick:g[4]||(g[4]=y=>l.value=u(X).TABLE)},null,8,["title"])]),_:1})]),_:1}),n(W,{text:u(e)("dashboard.toggleSortOrder"),location:"top"},{activator:d(({props:y})=>[n(R,F({icon:u(c).reverseOrder?"mdi-arrow-up-thin":"mdi-arrow-down-thin"},y,{variant:"plain",onClick:g[5]||(g[5]=I=>u(c).reverseOrder=!u(c).reverseOrder)}),null,16,["icon"])]),_:1},8,["text"]),f("div",ca,[n(Mt,{modelValue:u(c).sortBy,"onUpdate:modelValue":g[6]||(g[6]=y=>u(c).sortBy=y),items:u(p),label:u(e)("dashboard.sortLabel"),"auto-select-first":"",density:"compact","hide-details":"",variant:"solo-filled",style:at(`width: ${b.$vuetify.display.xs||b.$vuetify.display.sm&&u(o)?180:300}px`)},null,8,["modelValue","items","label","style"])]),n(ge),f("div",ma,m(u(t)),1)])],64))}}),va={class:"pt-4 px-1 px-sm-5"},ha={class:"text-grey"},fa={key:0,class:"mt-5 text-xs-center"},_a={class:"text-grey"},ba={key:1},ga={key:5},Ia=S({__name:"Dashboard",setup(h){const{t:e}=Ie(),r=et(),t=Z(),{currentPage:a,isSelectionMultiple:l,selectedTorrents:o,displayMode:s}=fe(t),c=nt(),p=Pe(),k=ie(),{filteredTorrents:V}=fe(k),B=G(),b=E(()=>s.value===X.LIST),g=E(()=>s.value===X.GRID),y=E(()=>s.value===X.TABLE),{paginatedResults:I,currentPage:$,pageCount:D}=Ut(V,B.paginationSize,a),z=E(()=>V.value.length<=o.value.length),H=Qe({isVisible:!1,offset:[0,0]});function ce(){window.scrollTo({top:0,behavior:"smooth"})}function Te(T){if(T)return Oe(()=>{document.getElementById("searchInput")?.focus()});Oe(()=>{document.getElementById("searchInput")?.blur()})}function Le(){z.value?t.unselectAllTorrents():t.selectTorrents(...V.value.map(T=>T.hash))}function me(T){l.value||r.push({name:"torrentDetail",params:{hash:T.hash}})}function pe(T){t.toggleSelect(T.hash)}function ve(T,L){T.shiftKey?t.spanTorrentSelection(L.hash):(Re(T)||t.isSelectionMultiple)&&(t.isSelectionMultiple=!0,t.toggleSelect(L.hash))}async function te(T,L){H.isVisible&&(H.isVisible=!1,await Oe()),H.isVisible=!0,H.offset=[T.pageX,T.pageY],l.value?o.value.length===0&&t.selectTorrent(L.hash):(t.unselectAllTorrents(),t.selectTorrent(L.hash))}const ke=N();function he(T,L){ke.value=setTimeout(()=>{te(T,L)},500)}function oe(){clearTimeout(ke.value)}function $e(T){if(c.hasActiveDialog)return!1;const L=T.target;if(Re(T)&&T.key==="a"&&L.tagName!=="INPUT")return t.unselectAllTorrents(),t.selectTorrents(...V.value.map(O=>O.hash)),T.preventDefault(),!0;if(Re(T)&&T.key==="f"){const O=document.getElementById("searchInput");if(document.activeElement!==O)return Te(!0),T.preventDefault(),!0}if(T.key==="Escape"){const O=document.getElementById("searchInput");return document.activeElement===O?Te(!1):(l.value=!1,t.unselectAllTorrents()),T.preventDefault(),!0}if(T.key==="Delete")return o.value.length===0?void 0:(c.createDialog(rt,{hashes:o.value}),T.preventDefault(),!0);if(T.key==="/"){const O=document.getElementById("searchInput");return document.activeElement!==O&&(r.push({name:"searchEngine"}),T.preventDefault()),!0}}return $t(()=>H.isVisible,T=>{!T&&!l.value&&t.unselectAllTorrents()}),De(async()=>{await p.fetchCategories(),await p.fetchTags()}),Je(()=>{document.addEventListener("keydown",$e),l.value=!1,ce()}),Ct(()=>{document.removeEventListener("keydown",$e)}),(T,L)=>(i(),_(x,null,[f("div",va,[n(pa),n(Ae,{class:"ma-0 pa-0"},{default:d(()=>[n(Rt,null,{default:d(()=>[Ee(n(de,{color:"transparent"},{default:d(()=>[n(W,{text:u(e)("common.selectAll"),location:"bottom"},{activator:d(({props:O})=>[n(R,F({icon:z.value?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",class:"text-grey",color:"transparent",style:{left:"-8px"}},O,{onClick:Le}),null,16,["icon"])]),_:1},8,["text"]),f("span",ha,m(u(e)("dashboard.selectAll")),1)]),_:1},512),[[Ue,u(l)]])]),_:1})]),_:1}),u(V).length===0?(i(),_("div",fa,[f("p",_a,m(u(e)("common.emptyList")),1)])):M("",!0),u(B).isPaginationOnTop&&!u(B).isInfiniteScrollActive&&u(D)>1?(i(),_("div",ba,[n(qe,{modelValue:u($),"onUpdate:modelValue":L[0]||(L[0]=O=>be($)?$.value=O:null),length:u(D),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left",onInput:ce},null,8,["modelValue","length"])])):M("",!0),b.value?(i(),C(No,{key:2,"paginated-torrents":u(I),onOnTorrentClick:ve,onOnTorrentDblClick:me,onOnCheckboxClick:pe,onOnTorrentRightClick:te,onStartPress:he,onEndPress:oe},null,8,["paginated-torrents"])):g.value?(i(),C(Ao,{key:3,class:"mb-2","paginated-torrents":u(I),onOnTorrentClick:ve,onOnTorrentDblClick:me,onOnCheckboxClick:pe,onOnTorrentRightClick:te,onStartPress:he,onEndPress:oe},null,8,["paginated-torrents"])):y.value?(i(),C(da,{key:4,"paginated-torrents":u(I),onOnTorrentClick:ve,onOnTorrentDblClick:me,onOnCheckboxClick:pe,onOnTorrentRightClick:te,onStartPress:he,onEndPress:oe},null,8,["paginated-torrents"])):M("",!0),!u(B).isPaginationOnTop&&!u(B).isInfiniteScrollActive&&u(D)>1?(i(),_("div",ga,[n(qe,{modelValue:u($),"onUpdate:modelValue":L[1]||(L[1]=O=>be($)?$.value=O:null),length:u(D),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left",onInput:ce},null,8,["modelValue","length"])])):M("",!0)]),f("div",{style:at(`position: absolute; left: ${H.offset[0]}px; top: ${H.offset[1]}px;`)},[n(Qt,{modelValue:H.isVisible,"onUpdate:modelValue":L[2]||(L[2]=O=>H.isVisible=O)},null,8,["modelValue"])],4)],64))}});export{Ia as default};
