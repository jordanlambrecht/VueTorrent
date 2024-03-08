import{g as b,K as h,$ as v,a1 as C,r as q,d as x,x as k,a as K,a5 as S,a6 as A,a7 as s,m as e,W as c,Z as p,u as l,Y as f,ar as _,a2 as y}from"./vue-f0YmIZr-.js";import{_ as T,__tla as __tla_0}from"./PasswordField.vue_vue_type_script_setup_true_lang-B2oqX4nn.js";import{b0 as B,ah as F,l as U,aV as I,m as M,n as N,V as O,h as R,o as $,g as D,p as E,__tla as __tla_1}from"./index-fSRjCQlz.js";import"./vuetify-eyF14hZT.js";let z;let __tla=Promise.all([(()=>{try{return __tla_0}catch{}})(),(()=>{try{return __tla_1}catch{}})()]).then(async()=>{z=b({__name:"Login",setup(L){const{t:a}=h(),V=v(),o=C(),u=B(),r=q({username:"",password:""}),m=x(!1),w={username:[d=>!!d||a("login.rules.username_required")],password:[d=>!!d||a("login.rules.password_required")]},i=async()=>{m.value&&(await u.login(r.username,r.password),u.isAuthenticated?(y.success(a("login.success")),g()):y.error(a("login.error")))},g=()=>{o.query.redirect?V.push(o.query.redirect):V.push({name:"dashboard"})};return k(async()=>{o.query.username&&o.query.password&&await u.login(o.query.username,o.query.password)}),K(()=>{u.isAuthenticated&&g()}),(d,n)=>(S(),A(F,{class:"fill-height"},{default:s(()=>[e(E,{class:"mx-auto",rounded:"lg","min-width":"250"},{default:s(()=>[e(U,null,{default:s(()=>[c(p(l(a)("login.title")),1)]),_:1}),e(I,null,{default:s(()=>[c(p(l(a)("login.subtitle")),1)]),_:1}),e(M,null,{default:s(()=>[e(N,{modelValue:m.value,"onUpdate:modelValue":n[2]||(n[2]=t=>m.value=t),onSubmit:f(i,["prevent"])},{default:s(()=>[e(O,{modelValue:r.username,"onUpdate:modelValue":n[0]||(n[0]=t=>r.username=t),id:"username",name:"username",label:l(a)("login.username"),autofocus:"",rules:w.username,onKeydown:_(f(i,["prevent"]),["enter"]),variant:"outlined"},{prepend:s(()=>[e(R,{color:"accent",icon:"mdi-account"})]),_:1},8,["modelValue","label","rules","onKeydown"]),e(T,{modelValue:r.password,"onUpdate:modelValue":n[1]||(n[1]=t=>r.password=t),id:"password",label:l(a)("login.password"),rules:w.password,"prepend-icon":"mdi-lock",onKeydown:_(f(i,["prevent"]),["enter"]),variant:"outlined"},null,8,["modelValue","label","rules","onKeydown"])]),_:1},8,["modelValue"])]),_:1}),e($,null,{default:s(()=>[e(D,{variant:"elevated",block:"",color:"accent",onClick:i},{default:s(()=>[c(p(l(a)("login.submit")),1)]),_:1})]),_:1})]),_:1})]),_:1}))}})});export{z as default,__tla};