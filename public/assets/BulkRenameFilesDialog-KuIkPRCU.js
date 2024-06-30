import{a as le,b as ae,V as te,I as oe,J as ne,h as q,c as se,d as de,p as re,r as h,K as z,M as G,t as ue,k as u,N as ie,O as ce,P as fe,v as J,Q as I,q as pe,s as ge,w as ye,i as me,j as he,__tla as __tla_0}from"./index-BV5AWKIA.js";import{g as O}from"./FileIcon-DH65fwz5.js";import{j as ke,E as ve,f as p,d as Ve,r as be,c as Ne,w as Fe,Y as _e,H as n,I as r,J as o,n as s,K as y,L as i,u as c,_ as R,U as k,N as v,W as Q,Q as V,V as Ce,F as W,P as Re,Z as B}from"./vue-CfSjRv-x.js";import"./vuetify-PctCzU6r.js";let Ke;let __tla=Promise.all([(()=>{try{return __tla_0}catch{}})()]).then(async()=>{let $e,we,Ee,Te;$e=["onClick"];we={key:1};Ee={key:1};Te={class:"d-flex flex-column pl-3"};Ke=ke({__name:"BulkRenameFilesDialog",props:{guid:{},node:{},hash:{}},setup(X){const m=X,{isOpened:b}=le(m.guid),{t:g}=ve(),K=ae(),L=p(),N=p(!1),$=p(!1),F=p(""),D=p(),_=p([]),C=p(""),S=p(),w=p(!1),M=[a=>!!a],Y=Ve([{fixed:!0,sortable:!1,key:"selected",width:"50px"},{title:g("dialogs.bulkRenameFiles.col_origin_name"),sortable:!1,key:"name"},{title:g("dialogs.bulkRenameFiles.col_result_name"),sortable:!1,key:"targetName"}]),f=be([]),E=Ne(()=>f.filter(a=>a.type==="file"&&a.selected&&a.targetName&&a.name!==a.targetName)),j=(a,t,l=0)=>{const e={indent:l,name:a.name,fullName:a.fullName,parentItem:t,show:!0,folded:!1,selected:!1,type:a.type,node:a};if(f.push(e),a.type==="folder")for(const d of a.children)j(d,e,l+1)},T=(a,t)=>{a.folded=t,a.node.children.forEach(l=>{const e=f.find(d=>d.node.id===l.id);e.show=!t,e.type==="folder"&&t&&T(e,t)})},x=a=>{const t=f.find(l=>l.node.id===a.id);if(a.type==="folder"){let l=0,e=0;return a.children.forEach(d=>{switch(x(d)){case 1:l++;break;case 0:e++;break}}),l===0&&e===0?(t.selected=!1,t.indeterminate=!1,-1):l===a.children.length?(t.selected=!0,t.indeterminate=!1,1):(t.indeterminate=!0,0)}else return t.indeterminate=!1,t.selected?1:-1},H=a=>{const t=l=>{l.node.children.forEach(e=>{const d=f.find(ee=>ee.node.id===e.id);d&&(d.selected=l.selected,d.selected&&(d.show=!0,d.folded=!1),d.type==="folder"&&t(d))}),l.selected&&(l.show=!0,l.folded=!1)};t(a),x(m.node),U()},P=a=>{x(m.node),U([a])},U=async a=>{if(await L.value?.validate(),!N.value)return;let t;try{t=new RegExp(F.value,_.value.join(""))}catch{return}(a||f).forEach(e=>{e.type==="file"&&(e.selected&&t.test(e.name)?(e.targetName=e.name.replace(t,C.value),e.targetFullName=(e.parentItem.fullName===""?"":e.parentItem.fullName+"/")+e.targetName):(e.targetName=void 0,e.targetFullName=void 0),e.notChanged=e.name===e.targetName)}),$.value=!1;const l=new Map;f.filter(e=>!!e.targetFullName).forEach(e=>{l.set(e.targetFullName,(l.get(e.targetFullName)||0)+1)}),f.forEach(e=>{e.duplicated=l.get(e.targetFullName)>1,e.duplicated&&($.value=!0)})},Z=async()=>{if(!E.value.length)return B.warn(g("dialogs.bulkRenameFiles.nothing_to_do"));const a=[];for(const t of E.value)a.push(K.renameTorrentFile(m.hash,t.fullName,t.targetFullName));w.value=!0,Promise.all(a).then(()=>{B.success(g("dialogs.bulkRenameFiles.success")),D.value?.saveValueToHistory(),S.value?.saveValueToHistory()}).catch(t=>{B.error(t.toString())}).finally(()=>{w.value=!1,K.updateFileTreeTask.perform(),A()})},A=()=>{b.value=!1};return Fe([F,_,C],()=>{U()}),_e(()=>{j(m.node)}),(a,t)=>(n(),r(he,{modelValue:c(b),"onUpdate:modelValue":t[6]||(t[6]=l=>Re(b)?b.value=l:null),persistent:"",fullscreen:""},{default:o(()=>[s(me,{density:"compact"},{default:o(()=>[s(te,null,{default:o(()=>[s(oe,{density:"compact",color:"transparent"},{default:o(()=>[s(ne,null,{default:o(()=>[y(i(a.$t("dialogs.bulkRenameFiles.title")),1)]),_:1}),s(q,{icon:"mdi-close",onClick:t[0]||(t[0]=l=>A())})]),_:1})]),_:1}),s(se,{class:"d-flex flex-column"},{default:o(()=>[s(c(de),{modelValue:N.value,"onUpdate:modelValue":t[5]||(t[5]=l=>N.value=l),ref_key:"form",ref:L},{default:o(()=>[s(re,{"no-gutters":"",align:"center",justify:"center"},{default:o(()=>[s(h,{cols:a.$vuetify.display.mobile?9:void 0},{default:o(()=>[s(z,{historyKey:c(G).BULK_RENAME_REGEXP,ref_key:"regexpEl",ref:D,"hide-details":"",density:"compact",modelValue:F.value,"onUpdate:modelValue":t[1]||(t[1]=l=>F.value=l),rules:M,label:a.$t("dialogs.bulkRenameFiles.regexp")},null,8,["historyKey","modelValue","label"])]),_:1},8,["cols"]),s(h,{cols:a.$vuetify.display.mobile?3:"auto"},{default:o(()=>[s(ue,{class:"ml-2",modelValue:_.value,"onUpdate:modelValue":t[2]||(t[2]=l=>_.value=l),items:["d","g","i","m","s","u","v","y"],placeholder:c(g)("dialogs.bulkRenameFiles.select_regex_flags"),label:a.$t("dialogs.bulkRenameFiles.flags"),density:"compact",multiple:"","hide-details":""},null,8,["modelValue","placeholder","label"])]),_:1},8,["cols"]),s(h,{cols:"auto"},{default:o(()=>[s(u,{class:"mx-2",icon:`mdi-arrow-${a.$vuetify.display.mobile?"down":"right"}`},null,8,["icon"])]),_:1}),s(h,{cols:a.$vuetify.display.mobile?12:void 0},{default:o(()=>[s(z,{historyKey:c(G).BULK_RENAME_TARGET,ref_key:"targetEl",ref:S,"hide-details":"",density:"compact",modelValue:C.value,"onUpdate:modelValue":t[3]||(t[3]=l=>C.value=l),rules:M,label:a.$t("dialogs.bulkRenameFiles.target")},null,8,["historyKey","modelValue","label"])]),_:1},8,["cols"]),s(h,{cols:"auto"},{default:o(()=>[s(ie,{class:R(a.$vuetify.display.mobile?"mt-2":"ml-5"),color:"success",location:"top left",content:E.value.length},{default:o(()=>[s(q,{loading:w.value,disabled:!N.value||$.value,color:"primary",onClick:t[4]||(t[4]=l=>Z())},{default:o(()=>[y(i(a.$t("dialogs.bulkRenameFiles.run")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["class","content"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a.$vuetify.display.mobile?(n(),r(pe,{key:1},{default:o(()=>[(n(!0),V(W,null,Ce(f,(l,e)=>(n(),V(W,null,[l.show?(n(),r(ge,{key:0},{default:o(()=>[e>0?(n(),r(ye,{key:0,class:"my-2"})):v("",!0),k("div",{class:"d-flex align-center",style:Q({"padding-left":`${l.indent*16}px`})},[s(J,{modelValue:l.selected,"onUpdate:modelValue":d=>l.selected=d,inline:"",color:l.targetName&&"accent",indeterminate:l.type==="folder"&&l.indeterminate,onChange:d=>l.type==="file"?P(l):H(l)},null,8,["modelValue","onUpdate:modelValue","color","indeterminate","onChange"]),l.type==="folder"?(n(),r(u,{key:0,onClick:d=>l.type==="folder"&&T(l,!l.folded)},{default:o(()=>[y(i(`mdi-chevron-${l.folded?"down":"up"}`),1)]),_:2},1032,["onClick"])):v("",!0),l.fullName===""?(n(),r(u,{key:1,icon:"mdi-file-tree"})):l.type==="file"?(n(),r(u,{key:2,icon:c(O)(l.name)},null,8,["icon"])):l.folded?(n(),r(u,{key:4,icon:"mdi-folder",color:"#ffe476"})):(n(),r(u,{key:3,icon:"mdi-folder-open",color:"#ffe476"})),k("div",Te,[k("span",{class:R({"text-grey strikethrough":l.targetName})},i(l.name),3),k("span",null,i(l.targetName),1)])],4)]),_:2},1024)):v("",!0)],64))),256))]),_:1})):(n(),r(ce,{key:0,headers:c(Y),items:f,density:"compact","fixed-header":""},{item:o(({internalItem:l})=>[l.raw.show?(n(),r(fe,{key:0,item:l},{"item.selected":o(({item:e})=>[s(J,{modelValue:e.selected,"onUpdate:modelValue":d=>e.selected=d,color:e.targetName&&"accent",indeterminate:e.type==="folder"&&e.indeterminate,onChange:d=>e.type==="file"?P(e):H(e)},null,8,["modelValue","onUpdate:modelValue","color","indeterminate","onChange"])]),"item.name":o(({item:e})=>[k("span",{class:R(["fold-toggle",{"cursor-pointer":e.type==="folder"}]),style:Q({"padding-left":`${e.indent*16}px`}),onClick:d=>e.type==="folder"&&T(e,!e.folded)},[e.type==="folder"?(n(),r(I,{key:0,location:"top",activator:"parent"},{default:o(()=>[y(i(c(g)(`dialogs.bulkRenameFiles.${e.folded?"unfold":"fold"}`)),1)]),_:2},1024)):v("",!0),e.type==="folder"?(n(),r(u,{key:1},{default:o(()=>[y(i(`mdi-chevron-${e.folded?"down":"up"}`),1)]),_:2},1024)):(n(),r(u,{key:2})),e.fullName===""?(n(),r(u,{key:3,icon:"mdi-file-tree"})):e.type==="file"?(n(),r(u,{key:4,icon:c(O)(e.name)},null,8,["icon"])):e.folded?(n(),r(u,{key:6,icon:"mdi-folder",color:"#ffe476"})):(n(),r(u,{key:5,icon:"mdi-folder-open",color:"#ffe476"})),y(" "+i(e.name),1)],14,$e)]),"item.targetName":o(({item:e})=>[e.type==="file"?(n(),V("span",{key:0,class:R(["target-name",{duplicated:e.duplicated,"not-changed":e.notChanged}])},[e.duplicated||e.notChanged?(n(),r(I,{key:0,activator:"parent"},{default:o(()=>[y(i(c(g)(`dialogs.bulkRenameFiles.${e.duplicated?"duplicated":"not_changed"}`)),1)]),_:2},1024)):(n(),V("span",we,i(e.targetName),1))],2)):(n(),V("span",Ee,[s(u,{icon:"mdi-cancel",color:"grey-lighten-1"}),s(I,{activator:"parent"},{default:o(()=>[y(i(c(g)("dialogs.bulkRenameFiles.notForFolder")),1)]),_:1})]))]),_:2},1032,["item"])):v("",!0)]),_:1},8,["headers","items"]))]),_:1})]),_:1})]),_:1},8,["modelValue"]))}})});export{Ke as default,__tla};