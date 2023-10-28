import{A as S,$ as l,a2 as _,a7 as s,Z as i,V as I,c as T,a0 as $,a1 as o,F as q,a3 as Q,u as n,D as a,R as Oe,I as L,a5 as Ve,ab as ze,a4 as O,ac as Se,ad as Ce,r as Y,d as Ie,C as De,h as Pe,Y as Ae,ag as He,i as ve,_ as Ee,ah as qe,ai as Ke,w as Ge,J as je,aj as Ye,q as Te,O as pe,Q as me}from"./vue-aae79161.js";import{V as $e,_ as ge,u as W,f as Xe,a as Je,T as N,b as Qe,c as We,d as Ze,e as et,g as re,h as ne,i as Re,j as Ne,k as X,l as _e,D as M,m as he,n as Me,o as Le,p as ye,q as J,r as tt,s as be,t as at,v as fe,w as ot,x as A,y as rt,z as Ue,A as nt,B as z,C as Fe,E as lt,F as st,G as xe,H as we,I as it,J as dt,K as ct,L as Be}from"./index-f856960a.js";import{_ as ut}from"./MoveTorrentDialog.vue_vue_type_script_setup_true_lang-1f466d12.js";import{d as ke}from"./dayjs.min-fafe225f.js";import{u as pt}from"./ArrayPagination-7cfb17c6.js";import{d as mt}from"./index-edd46a72.js";const ht={class:"d-flex flex-column"},vt={class:"text-caption text-grey"},_t={class:"text-caption text-grey"},ft=S({__name:"ItemAmount",props:{torrent:{},title:{},value:{},total:{}},setup(f){return(e,r)=>(l(),_("div",ht,[s("div",vt,i(e.$t(`torrent.properties.${e.title}`)),1),s("div",null,[I(i(e.torrent[e.value])+" ",1),s("span",_t," / "+i(e.torrent[e.total]),1)])]))}}),gt={class:"d-flex flex-column"},yt={class:"text-caption text-grey"},bt={class:"d-flex flex-row gap"},kt=S({__name:"ItemChip",props:{torrent:{},title:{},value:{},color:{}},setup(f){const e=f,r=T(()=>{const t=e.torrent[e.value],p=typeof t;if(p==="string")return t.length>0?[t]:[];if(p==="object")return t});return(t,p)=>(l(),_("div",gt,[s("div",yt,i(t.$t(`torrent.properties.${t.title}`)),1),s("div",bt,[!r.value||r.value.length<1?(l(),$($e,{key:0,color:t.color.replace("$1",t.torrent[t.value]),variant:"flat"},{default:o(()=>[I(i(t.$t(`torrent.properties.empty_${t.value}`)),1)]),_:1},8,["color"])):(l(!0),_(q,{key:1},Q(r.value,b=>(l(),$($e,{color:t.color.replace("$1",t.torrent.state),variant:"flat"},{default:o(()=>[I(i(b),1)]),_:2},1032,["color"]))),256))])]))}});const Tt=ge(kt,[["__scopeId","data-v-8eb4906a"]]),$t={class:"d-flex flex-column"},xt={class:"text-caption text-grey"},wt={class:"text-caption text-grey"},Bt=S({__name:"ItemData",props:{torrent:{},title:{},value:{}},setup(f){const e=W();return(r,t)=>(l(),_("div",$t,[s("div",xt,i(r.$t(`torrent.properties.${r.title}`)),1),s("div",null,[I(i(n(Xe)(r.torrent[r.value],n(e).useBinarySize))+" ",1),s("span",wt,i(n(Je)(r.torrent[r.value],n(e).useBinarySize)),1)])]))}}),Vt={class:"d-flex flex-column"},St={class:"text-caption text-grey"},Ct={key:0},It={key:1},Dt=S({__name:"ItemDateTime",props:{torrent:{},title:{},value:{}},setup(f){const e=W();return(r,t)=>(l(),_("div",Vt,[s("div",St,i(r.$t(`torrent.properties.${r.title}`)),1),s("div",null,[r.torrent[r.value]>0?(l(),_("span",Ct,i(n(ke)(r.torrent[r.value]*1e3).format(n(e).dateFormat??"DD/MM/YYYY, HH:mm:ss")),1)):(l(),_("span",It,i(r.$t("dashboard.not_complete")),1))])]))}}),Pt={class:"d-flex flex-column"},At={class:"text-caption text-grey"},Et={key:0},Rt={key:1},Nt="D[d] H[h] m[m] s[s]",Mt=S({__name:"ItemDuration",props:{torrent:{},title:{},value:{}},setup(f){return(e,r)=>(l(),_("div",Pt,[s("div",At,i(e.$t(`torrent.properties.${e.title}`)),1),s("div",null,[e.torrent[e.value]>0?(l(),_("span",Et,i(n(ke).duration(e.torrent[e.value],"seconds").format(Nt)),1)):(l(),_("span",Rt,i(e.$t("dashboard.not_complete")),1))])]))}}),Lt={class:"d-flex flex-column"},Ut={class:"text-caption text-grey"},Ft=S({__name:"ItemPercent",props:{torrent:{},title:{},value:{}},setup(f){const e=f,r=T(()=>[N.UPLOADING,N.CHECKING_UP,N.FORCED_UP,N.ALLOCATING,N.DOWNLOADING,N.META_DL,N.CHECKING_DL,N.FORCED_DL,N.CHECKING_RESUME_DATA,N.MOVING].includes(e.torrent.state));return(t,p)=>(l(),_("div",Lt,[s("div",Ut,i(t.$t(`torrent.properties.${t.title}`)),1),a(We,{"model-value":t.torrent[t.value],max:1,striped:r.value,height:20,color:`torrent-${t.torrent.state}`,rounded:"sm",style:{width:"10em"}},{default:o(()=>[I(i(n(Qe)(t.torrent[t.value])),1)]),_:1},8,["model-value","striped","color"])]))}}),Ot={class:"d-flex flex-column"},zt={class:"text-caption text-grey"},Ht=S({__name:"ItemRelativeTime",props:{torrent:{},title:{},value:{}},setup(f){return(e,r)=>(l(),_("div",Ot,[s("div",zt,i(e.$t(`torrent.properties.${e.title}`)),1),s("div",null,[s("span",null,i(n(ke)(e.torrent[e.value]*1e3).fromNow()),1)])]))}}),qt={class:"d-flex flex-column"},Kt={class:"text-caption text-grey"},Gt={class:"text-caption text-grey"},jt=S({__name:"ItemSpeed",props:{torrent:{},title:{},value:{}},setup(f){const e=W();return(r,t)=>(l(),_("div",qt,[s("div",Kt,i(r.$t(`torrent.properties.${r.title}`)),1),s("div",null,[I(i(n(Ze)(r.torrent[r.value],n(e).useBitSpeed))+" ",1),s("span",Gt,i(n(et)(r.torrent[r.value],n(e).useBitSpeed)),1)])]))}}),Yt={class:"d-flex flex-column"},Xt={class:"text-caption text-grey"},Jt=S({__name:"ItemText",props:{torrent:{},title:{},value:{}},setup(f){return(e,r)=>(l(),_("div",Yt,[s("div",Xt,i(e.$t(`torrent.properties.${e.title}`)),1),s("div",null,i(e.torrent[e.value]),1)]))}}),Qt={class:"d-flex gap flex-wrap"},Wt=S({__name:"Torrent",props:{torrent:{}},setup(f){const e=f,r=re(),t=ne(),p=W(),b=T(()=>(e.torrent.progress===1?p.doneTorrentProperties:p.busyTorrentProperties).filter(x=>x.active).sort((x,c)=>x.order-c.order));function E(g){g.shiftKey?r.spanTorrentSelection(t.getTorrentIndexByHash(e.torrent.hash)):(_e(g)||r.isSelectionMultiple)&&(r.isSelectionMultiple=!0,r.toggleSelect(e.torrent.hash))}const d=g=>{switch(g){case M.AMOUNT:return ft;case M.CHIP:return Tt;case M.DATA:return Bt;case M.DATETIME:return Dt;case M.DURATION:return Mt;case M.PERCENT:return Ft;case M.RELATIVE:return Ht;case M.SPEED:return jt;case M.TEXT:default:return Jt}},y=T(()=>r.isTorrentInSelection(e.torrent.hash));return(g,x)=>(l(),$(X,{class:Ve(`sideborder ${g.torrent.state} pointer`),color:y.value?`torrent-${g.torrent.state}-darken-3`:void 0,width:"100%",onClick:E},{default:o(()=>[a(Re,{class:"font-weight-bold"},{default:o(()=>[I(i(g.torrent.name),1)]),_:1}),a(Ne,null,{default:o(()=>[s("div",Qt,[(l(!0),_(q,null,Q(b.value,c=>(l(),$(Oe(d(c.type)),L({torrent:g.torrent},c.props),null,16,["torrent"]))),256))])]),_:1})]),_:1},8,["class","color"]))}});const Zt=ge(Wt,[["__scopeId","data-v-4ac323c1"]]),ea={class:"d-flex"},ta={key:2},aa={key:3},oa=S({__name:"RightClickMenuEntry",props:{text:{},icon:{},action:{type:Function},hidden:{type:Boolean},disabled:{type:Boolean},disabledText:{},disabledIcon:{},divider:{type:Boolean},children:{}},setup(f){return(e,r)=>{const t=ze("RightClickMenuEntry",!0);return e.hidden?O("",!0):(l(),$(J,{key:0,class:"px-3 pointer",disabled:e.disabled,onClick:e.action},{default:o(()=>[s("div",ea,[e.disabled&&e.disabledIcon?(l(),$(he,{key:0,class:"mr-2"},{default:o(()=>[I(i(e.disabledIcon),1)]),_:1})):e.icon?(l(),$(he,{key:1,class:"mr-2"},{default:o(()=>[I(i(e.icon),1)]),_:1})):O("",!0),e.disabled&&e.disabledText?(l(),_("span",ta,i(e.disabledText),1)):(l(),_("span",aa,i(e.text),1)),a(Me),e.children?(l(),$(he,{key:4},{default:o(()=>[I("mdi-chevron-right")]),_:1})):O("",!0)]),e.children?(l(),$(Le,{key:0,activator:"parent","open-on-hover":!0,"open-on-click":!0,"close-delay":"0","open-delay":"0",location:"right"},{default:o(()=>[a(ye,null,{default:o(()=>[(l(!0),_(q,null,Q(e.children,p=>(l(),$(t,Se(Ce(p)),null,16))),256))]),_:1})]),_:1})):O("",!0)]),_:1},8,["disabled","onClick"]))}}}),ra=S({__name:"RenameTorrentDialog",props:{guid:{},hash:{}},setup(f){const e=f,{isOpened:r}=tt(e.guid),{t}=be(),p=ne(),b=Y(),E=Y(),d=Y(!1),y=Ie({newName:""}),g=[k=>!!k||t("dialogs.renameTorrent.required"),k=>k!==c.value||t("dialogs.renameTorrent.sameName")],x=T(()=>p.getTorrentByHash(e.hash)),c=T(()=>x.value?.name);async function U(){await E.value?.validate(),d.value&&(await p.renameTorrent(e.hash,y.newName),B())}const B=()=>{r.value=!1};return De(()=>{y.newName=x.value?.name||""}),Pe(()=>{b.value?.select()}),(k,C)=>(l(),$(rt,{modelValue:n(r),"onUpdate:modelValue":C[3]||(C[3]=V=>ve(r)?r.value=V:null)},{default:o(()=>[a(X,null,{default:o(()=>[a(Re,null,{default:o(()=>[I(i(k.$t("dialogs.renameTorrent.title")),1)]),_:1}),a(Ne,null,{default:o(()=>[a(n(at),{modelValue:d.value,"onUpdate:modelValue":C[1]||(C[1]=V=>d.value=V),ref_key:"form",ref:E,onSubmit:C[2]||(C[2]=Ae(()=>{},["prevent"]))},{default:o(()=>[c.value?(l(),$(fe,{key:0,"model-value":c.value,disabled:"",label:k.$t("dialogs.renameTorrent.oldName")},null,8,["model-value","label"])):O("",!0),a(fe,{modelValue:y.newName,"onUpdate:modelValue":C[0]||(C[0]=V=>y.newName=V),ref_key:"field",ref:b,rules:g,autofocus:"",label:k.$t("dialogs.renameTorrent.newName"),onKeydown:He(U,["enter"])},null,8,["modelValue","label","onKeydown"])]),_:1},8,["modelValue"])]),_:1}),a(ot,null,{default:o(()=>[a(Me),a(A,{color:"error",onClick:B},{default:o(()=>[I(i(k.$t("common.cancel")),1)]),_:1}),a(A,{color:"accent",disabled:!d.value,onClick:U},{default:o(()=>[I(i(k.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),le=f=>(qe("data-v-45092f87"),f=f(),Ke(),f),na={class:"d-flex justify-space-around"},la=le(()=>s("span",null,"Resume",-1)),sa=le(()=>s("span",null,"Force Resume",-1)),ia=le(()=>s("span",null,"Pause",-1)),da=le(()=>s("span",null,"Delete",-1)),ca=S({__name:"RightClickMenu",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(f,{emit:e}){const r=f,{t}=be(),p=Ee(),b=re(),E=Ue(),d=ne(),y=nt(),g=T({get:()=>r.modelValue,set:h=>e("update:modelValue",h)}),x=T(()=>b.selectedTorrents.length>1),c=T(()=>b.selectedTorrents),U=T(()=>c.value[0]),B=T(()=>d.getTorrentByHash(U.value)),k=T(()=>b.selectedTorrents.map(d.getTorrentByHash).filter(h=>!!h)),C=T(()=>[{name:""},...d.categories]);async function V(){await d.resumeTorrents(c)}async function D(){await d.forceResumeTorrents(c)}async function Z(){await d.pauseTorrents(c)}function se(){E.createDialog(Fe,{hashes:[...b.selectedTorrents]})}function F(){E.createDialog(ut,{hashes:[...b.selectedTorrents]})}function ee(){E.createDialog(ra,{hash:b.selectedTorrents[0]})}async function ie(){await d.recheckTorrents(c)}async function te(){await d.reannounceTorrents(c)}async function H(){await d.toggleSeqDl(c)}async function de(){await d.toggleFLPiecePrio(c)}async function ce(){await d.toggleAutoTmm(c,!B.value?.auto_tmm)}function ae(h){return k.value.every(P=>P&&P.tags&&P.tags.includes(h))}async function K(h){ae(h)?await d.removeTorrentTags(c.value,[h]):await d.addTorrentTags(c.value,[h])}async function G(h){await navigator.clipboard.writeText(h)}async function ue(){c.value.forEach(h=>{d.exportTorrent(h).then(P=>{const w=window.URL.createObjectURL(P),R=document.createElement("a");R.href=w,R.style.opacity="0",R.setAttribute("download",`${h}.torrent`),document.body.appendChild(R),R.click(),document.body.removeChild(R)})})}const oe=T(()=>[{text:t("dashboard.right_click.advanced.title"),icon:"mdi-head-cog",children:[{text:t("dashboard.right_click.advanced.change_location"),icon:"mdi-folder",action:F},{text:t("dashboard.right_click.advanced.rename"),icon:"mdi-rename-box",hidden:x.value,action:ee},{text:t("dashboard.right_click.advanced.recheck"),icon:"mdi-playlist-check",action:ie},{text:t("dashboard.right_click.advanced.reannounce"),icon:"mdi-bullhorn",action:te},{text:t("dashboard.right_click.advanced.seq_dl"),icon:B.value?.seq_dl?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",action:H},{text:t("dashboard.right_click.advanced.f_l_prio"),icon:B.value?.f_l_piece_prio?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",action:de},{text:t("dashboard.right_click.advanced.auto_tmm"),icon:B.value?.auto_tmm?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",action:ce}]},{text:t("dashboard.right_click.priority.title"),icon:"mdi-priority-high",hidden:!y.preferences.queueing_enabled,children:[{text:t("dashboard.right_click.priority.top"),icon:"mdi-priority-high",action:async()=>await d.setTorrentPriority(c.value,"topPrio")},{text:t("dashboard.right_click.priority.increase"),icon:"mdi-arrow-up",action:async()=>await d.setTorrentPriority(c.value,"increasePrio")},{text:t("dashboard.right_click.priority.decrease"),icon:"mdi-arrow-down",action:async()=>await d.setTorrentPriority(c.value,"decreasePrio")},{text:t("dashboard.right_click.priority.bottom"),icon:"mdi-priority-low",action:async()=>await d.setTorrentPriority(c.value,"bottomPrio")}]},{text:t("dashboard.right_click.tags.title"),icon:"mdi-tag",disabled:d.tags.length===0,disabledText:t("dashboard.right_click.tags.disabled_title"),disabledIcon:"mdi-tag-off",children:d.tags.map(h=>({text:h,icon:ae(h)?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",action:async()=>await K(h)}))},{text:t("dashboard.right_click.category.title"),icon:"mdi-label",disabled:d.categories.length===0,disabledText:t("dashboard.right_click.category.disabled_title"),disabledIcon:"mdi-label-off",children:C.value.map(h=>({text:h.name===""?t("dashboard.right_click.category.clear"):h.name,action:async()=>await d.setTorrentCategory(c.value,h.name)}))},{text:t("dashboard.right_click.speed_limit.title"),icon:"mdi-speedometer-slow",children:[{text:t("dashboard.right_click.speed_limit.download"),icon:"mdi-download",action:()=>{}},{text:t("dashboard.right_click.speed_limit.upload"),icon:"mdi-upload",action:()=>{}},{text:t("dashboard.right_click.speed_limit.share"),icon:"mdi-account-group",action:()=>{}}]},{text:t("dashboard.right_click.copy.title"),icon:"mdi-content-copy",hidden:x.value,children:[{text:t("dashboard.right_click.copy.name"),icon:"mdi-alphabetical-variant",action:async()=>B.value&&await G(B.value.name)},{text:t("dashboard.right_click.copy.hash"),icon:"mdi-pound",action:async()=>await G(U.value)},{text:t("dashboard.right_click.copy.magnet"),icon:"mdi-magnet",action:async()=>B.value&&await G(B.value.magnet)}]},{text:t("dashboard.right_click.export",b.selectedTorrents.length),icon:x.value?"mdi-download-multiple":"mdi-download",action:ue},{text:t("dashboard.right_click.info"),icon:"mdi-information",hidden:x.value,action:()=>p.push({name:"torrentDetail",params:{hash:U.value}})}]);return(h,P)=>g.value?(l(),$(Le,{key:0,modelValue:g.value,"onUpdate:modelValue":P[0]||(P[0]=w=>g.value=w),activator:"parent","close-on-content-click":!0,transition:"slide-y-transition","scroll-strategy":"none"},{default:o(()=>[a(ye,null,{default:o(()=>[a(J,null,{default:o(()=>[s("div",na,[a(z,{location:"top"},{activator:o(({props:w})=>[a(A,L({density:"compact",variant:"plain",icon:"mdi-play"},w,{onClick:V}),null,16)]),default:o(()=>[la]),_:1}),a(z,{location:"top"},{activator:o(({props:w})=>[a(A,L({density:"compact",variant:"plain",icon:"mdi-fast-forward"},w,{onClick:D}),null,16)]),default:o(()=>[sa]),_:1}),a(z,{location:"top"},{activator:o(({props:w})=>[a(A,L({density:"compact",variant:"plain",icon:"mdi-pause"},w,{onClick:Z}),null,16)]),default:o(()=>[ia]),_:1}),a(z,{location:"top"},{activator:o(({props:w})=>[a(A,L({color:"red",density:"compact",variant:"plain",icon:"mdi-delete-forever"},w,{onClick:se}),null,16)]),default:o(()=>[da]),_:1})])]),_:1}),(l(!0),_(q,null,Q(oe.value,w=>(l(),$(oa,Se(Ce(w)),null,16))),256))]),_:1})]),_:1},8,["modelValue"])):O("",!0)}});const ua=ge(ca,[["__scopeId","data-v-45092f87"]]),pa={class:"pt-4 px-1 px-sm-5"},ma={class:"pa-0",style:{width:"10em"}},ha={class:"text-uppercase",style:{float:"right","font-size":"0.8em"}},va={class:"text-grey"},_a={key:0,class:"mt-5 text-xs-center"},fa={class:"text-grey"},ga={key:1},ya={class:"d-flex align-center"},Ba=S({__name:"Dashboard",setup(f){const{t:e}=be(),r=Ee(),t=lt(),p=re(),b=Ue(),{currentPage:E,filteredTorrents:d,isSelectionMultiple:y,searchFilter:g,selectedTorrents:x,sortOptions:c,torrentCountString:U}=st(re()),B=ne(),k=W(),C=[{value:"added_on",title:e("dashboard.sortBy.added_on")},{value:"amount_left",title:e("dashboard.sortBy.amount_left")},{value:"auto_tmm",title:e("dashboard.sortBy.auto_tmm")},{value:"availability",title:e("dashboard.sortBy.availability")},{value:"avg_download_speed",title:e("dashboard.sortBy.avg_download_speed")},{value:"avg_upload_speed",title:e("dashboard.sortBy.avg_upload_speed")},{value:"category",title:e("dashboard.sortBy.category")},{value:"completed",title:e("dashboard.sortBy.completed")},{value:"completion_on",title:e("dashboard.sortBy.completion_on")},{value:"content_path",title:e("dashboard.sortBy.content_path")},{value:"dl_limit",title:e("dashboard.sortBy.dl_limit")},{value:"dlspeed",title:e("dashboard.sortBy.dlspeed")},{value:"download_path",title:e("dashboard.sortBy.download_path")},{value:"downloaded",title:e("dashboard.sortBy.downloaded")},{value:"downloaded_session",title:e("dashboard.sortBy.downloaded_session")},{value:"eta",title:e("dashboard.sortBy.eta")},{value:"f_l_piece_prio",title:e("dashboard.sortBy.f_l_piece_prio")},{value:"force_start",title:e("dashboard.sortBy.force_start")},{value:"globalSpeed",title:e("dashboard.sortBy.globalSpeed")},{value:"globalVolume",title:e("dashboard.sortBy.globalVolume")},{value:"hash",title:e("dashboard.sortBy.hash")},{value:"infohash_v1",title:e("dashboard.sortBy.infohash_v1")},{value:"infohash_v2",title:e("dashboard.sortBy.infohash_v2")},{value:"last_activity",title:e("dashboard.sortBy.last_activity")},{value:"magnet_uri",title:e("dashboard.sortBy.magnet_uri")},{value:"max_ratio",title:e("dashboard.sortBy.max_ratio")},{value:"max_seeding_time",title:e("dashboard.sortBy.max_seeding_time")},{value:"name",title:e("dashboard.sortBy.name")},{value:"num_complete",title:e("dashboard.sortBy.num_complete")},{value:"num_incomplete",title:e("dashboard.sortBy.num_incomplete")},{value:"num_leechs",title:e("dashboard.sortBy.num_leechs")},{value:"num_seeds",title:e("dashboard.sortBy.num_seeds")},{value:"priority",title:e("dashboard.sortBy.priority")},{value:"progress",title:e("dashboard.sortBy.progress")},{value:"ratio",title:e("dashboard.sortBy.ratio")},{value:"ratio_limit",title:e("dashboard.sortBy.ratio_limit")},{value:"save_path",title:e("dashboard.sortBy.save_path")},{value:"seeding_time",title:e("dashboard.sortBy.seeding_time")},{value:"seeding_time_limit",title:e("dashboard.sortBy.seeding_time_limit")},{value:"seen_complete",title:e("dashboard.sortBy.seen_complete")},{value:"seq_dl",title:e("dashboard.sortBy.seq_dl")},{value:"size",title:e("dashboard.sortBy.size")},{value:"state",title:e("dashboard.sortBy.state")},{value:"super_seeding",title:e("dashboard.sortBy.super_seeding")},{value:"tags",title:e("dashboard.sortBy.tags")},{value:"time_active",title:e("dashboard.sortBy.time_active")},{value:"total_size",title:e("dashboard.sortBy.total_size")},{value:"tracker",title:e("dashboard.sortBy.tracker")},{value:"trackers_count",title:e("dashboard.sortBy.trackers_count")},{value:"up_limit",title:e("dashboard.sortBy.up_limit")},{value:"uploaded",title:e("dashboard.sortBy.uploaded")},{value:"uploaded_session",title:e("dashboard.sortBy.uploaded_session")},{value:"upspeed",title:e("dashboard.sortBy.upspeed")}].sort((m,v)=>m.title.localeCompare(v.title));C.splice(0,0,{value:"",title:e("dashboard.sortBy.default")});const V=Y(!1),D=Ie({isVisible:!1,offset:[0,0]}),Z=T({get:()=>g.value,set:mt(m=>{g.value=m},300)}),{paginatedResults:se,currentPage:F,pageCount:ee}=pt(d,k.paginationSize,E),ie=T(()=>!!g.value&&g.value.length>0),te=T(()=>d.value.length<=x.value.length);function H(m){V.value=m??!V.value,V.value&&Te(()=>{document.getElementById("searchInput")?.focus()})}function de(m){p.toggleSelect(m)}function ce(m){y.value||r.push({name:"torrentDetail",params:{hash:m}})}function ae(){g.value=""}function K(){window.scrollTo({top:0,behavior:"smooth"})}function G(){y.value&&p.unselectAllTorrents(),y.value=!y.value}function ue(){te.value?p.unselectAllTorrents():p.selectAllTorrents()}async function oe(m,v){m.preventDefault(),D.isVisible&&(D.isVisible=!1,await Te()),D.isVisible=!0,D.offset=[m.pageX,m.pageY],y.value?x.value.length===0&&p.selectTorrent(v.hash):(p.unselectAllTorrents(),p.selectTorrent(v.hash))}Ge(()=>D.isVisible,m=>{!m&&!y.value&&p.unselectAllTorrents()});function h(m){if(b.hasActiveDialog)return!1;const v=m.target;if(_e(m)&&m.key==="a"&&v.tagName!=="INPUT")return p.unselectAllTorrents(),p.selectTorrents(...d.value.map(u=>u.hash)),m.preventDefault(),!0;if(_e(m)&&m.key==="f"){const u=document.getElementById("searchInput");if(document.activeElement!==u)return H(!0),m.preventDefault(),!0}if(m.key==="Escape"){const u=document.getElementById("searchInput");return document.activeElement===u||V.value?H(!1):(y.value=!1,p.unselectAllTorrents()),m.preventDefault(),!0}if(m.key==="Delete")return x.value.length===0?void 0:(b.createDialog(Fe,{hashes:p.selectedTorrents}),m.preventDefault(),!0)}De(async()=>{await B.fetchCategories(),await B.fetchTags(),H(ie.value)}),Pe(()=>{document.addEventListener("keydown",h),y.value=!1,K()}),je(()=>{document.removeEventListener("keydown",h)});const P=Y();function w(m,v){P.value=setTimeout(()=>{oe(m,v)},500)}function R(){clearTimeout(P.value)}return(m,v)=>(l(),_(q,null,[s("div",pa,[a(xe,{class:"ma-0 pa-0 mb-2"},{default:o(()=>[a(we,null,{default:o(()=>[pe(a(X,{color:"transparent"},{default:o(()=>[a(fe,{id:"searchInput",modelValue:Z.value,"onUpdate:modelValue":v[0]||(v[0]=u=>Z.value=u),label:n(e)("dashboard.searchInputLabel"),clearable:"",density:"compact","hide-details":"","prepend-inner-icon":"mdi-magnify",rounded:"pill","single-line":"",style:{width:"200px"},variant:"solo","onClick:clear":v[1]||(v[1]=u=>ae())},null,8,["modelValue","label"])]),_:1},512),[[me,V.value]])]),_:1}),a(z,{text:n(e)("dashboard.toggleSearchFilter"),location:"top"},{activator:o(({props:u})=>[a(A,L({icon:V.value?"mdi-chevron-left-circle":"mdi-text-box-search"},u,{variant:"plain",onClick:v[2]||(v[2]=j=>H())}),null,16,["icon"])]),_:1},8,["text"]),a(z,{text:n(e)("dashboard.toggleSelectMode"),location:"top"},{activator:o(({props:u})=>[a(A,L({icon:n(y)?"mdi-checkbox-marked":"mdi-checkbox-blank-outline"},u,{variant:"plain",onClick:G}),null,16,["icon"])]),_:1},8,["text"]),a(z,{text:n(e)("dashboard.toggleSortOrder"),location:"top"},{activator:o(({props:u})=>[a(A,L({icon:n(c).reverseOrder?"mdi-arrow-up-thin":"mdi-arrow-down-thin"},u,{variant:"plain",onClick:v[3]||(v[3]=j=>n(c).reverseOrder=!n(c).reverseOrder)}),null,16,["icon"])]),_:1},8,["text"]),s("div",ma,[a(it,{modelValue:n(c).sortBy,"onUpdate:modelValue":v[4]||(v[4]=u=>n(c).sortBy=u),items:n(C),label:n(e)("dashboard.sortLabel"),"auto-select-first":"",density:"compact","hide-details":"",variant:"solo-filled"},null,8,["modelValue","items","label"])]),a(dt,{class:"align-center justify-center"},{default:o(()=>[s("span",ha,i(n(U)),1)]),_:1})]),_:1}),a(xe,{class:"ma-0 pa-0"},{default:o(()=>[a(ct,null,{default:o(()=>[pe(a(X,{color:"transparent"},{default:o(()=>[a(z,{text:n(e)("common.selectAll"),location:"bottom"},{activator:o(({props:u})=>[a(A,L({icon:te.value?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",class:"text-grey",color:"transparent",style:{left:"-8px"}},u,{onClick:ue}),null,16,["icon"])]),_:1},8,["text"]),s("span",va,i(n(e)("dashboard.selectAll")),1)]),_:1},512),[[me,n(y)]])]),_:1})]),_:1}),n(p).filteredTorrents.length===0?(l(),_("div",_a,[s("p",fa,i(n(e)("common.emptyList")),1)])):(l(),_("div",ga,[a(ye,{id:"torrentList",class:"pa-0",color:"transparent"},{default:o(()=>[n(k).isPaginationOnTop&&!n(k).isInfiniteScrollActive?(l(),$(J,{key:0},{default:o(()=>[a(Be,{modelValue:n(F),"onUpdate:modelValue":v[5]||(v[5]=u=>ve(F)?F.value=u:null),length:n(ee),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left",onInput:K},null,8,["modelValue","length"])]),_:1})):O("",!0),(l(!0),_(q,null,Q(n(se),u=>(l(),$(J,{id:`torrent-${u.hash}`,class:Ve([n(t).mobile?"mb-2":"mb-4","pa-0"]),onContextmenu:j=>oe(j,u),onTouchcancel:R,onTouchend:R,onTouchmove:R,onTouchstart:w,onDblclick:Ae(j=>ce(u.hash),["prevent"])},{default:o(()=>[s("div",ya,[a(we,null,{default:o(()=>[pe(a(X,{class:"mr-3",color:"transparent"},{default:o(()=>[a(A,{icon:n(p).isTorrentInSelection(u.hash)?"mdi-checkbox-marked":"mdi-checkbox-blank-outline",color:"transparent",variant:"flat",onClick:j=>de(u.hash)},null,8,["icon","onClick"])]),_:2},1536),[[me,n(p).isSelectionMultiple]])]),_:2},1024),a(Zt,{torrent:u},null,8,["torrent"])])]),_:2},1032,["id","class","onContextmenu","onDblclick"]))),256)),!n(k).isPaginationOnTop&&!n(k).isInfiniteScrollActive?(l(),$(J,{key:1},{default:o(()=>[a(Be,{modelValue:n(F),"onUpdate:modelValue":v[6]||(v[6]=u=>ve(F)?F.value=u:null),length:n(ee),"next-icon":"mdi-menu-right","prev-icon":"mdi-menu-left",onInput:K},null,8,["modelValue","length"])]),_:1})):O("",!0)]),_:1})]))]),s("div",{style:Ye(`position: absolute; left: ${D.offset[0]}px; top: ${D.offset[1]}px;`)},[a(ua,{modelValue:D.isVisible,"onUpdate:modelValue":v[7]||(v[7]=u=>D.isVisible=u)},null,8,["modelValue"])],4)],64))}});export{Ba as default};
