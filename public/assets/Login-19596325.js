import{e as b,_ as v,$ as q,a7 as x,r as C,b as h,x as k,a0 as S,a1 as K,a2 as s,k as e,V as c,X as p,u as l,W as f,an as g,a9 as y}from"./vue-b6920bd8.js";import{_ as A}from"./PasswordField.vue_vue_type_script_setup_true_lang-b50869ac.js";import{aM as F,aN as T,h as B,aF as M,i as N,s as U,t as I,l as L,v as O,w as R,j as $}from"./index-86d611d9.js";import"./faker-dcfab09f.js";import"./vuetify-00aeda0f.js";const G=b({__name:"Login",setup(j){const{t:a}=v(),V=q(),o=x(),u=F(),r=C({username:"",password:""}),m=h(!1),w={username:[d=>!!d||a("login.rules.username_required")],password:[d=>!!d||a("login.rules.password_required")]},i=async()=>{m.value&&(await u.login(r.username,r.password),u.isAuthenticated?(y.success(a("login.success")),_()):y.error(a("login.error")))},_=()=>{o.query.redirect?V.push(o.query.redirect):V.push({name:"dashboard"})};return k(async()=>{o.query.username&&o.query.password&&await u.login(o.query.username,o.query.password),u.isAuthenticated&&_()}),(d,t)=>(S(),K(T,{class:"mt-16"},{default:s(()=>[e($,{class:"mx-auto",rounded:"lg","min-width":"250"},{default:s(()=>[e(B,null,{default:s(()=>[c(p(l(a)("login.title")),1)]),_:1}),e(M,null,{default:s(()=>[c(p(l(a)("login.subtitle")),1)]),_:1}),e(N,null,{default:s(()=>[e(U,{modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=n=>m.value=n),onSubmit:f(i,["prevent"])},{default:s(()=>[e(I,{modelValue:r.username,"onUpdate:modelValue":t[0]||(t[0]=n=>r.username=n),label:l(a)("login.username"),autofocus:"",rules:w.username,onKeydown:g(f(i,["prevent"]),["enter"]),variant:"outlined"},{prepend:s(()=>[e(L,{color:"accent",icon:"mdi-account"})]),_:1},8,["modelValue","label","rules","onKeydown"]),e(A,{modelValue:r.password,"onUpdate:modelValue":t[1]||(t[1]=n=>r.password=n),label:l(a)("login.password"),rules:w.password,"prepend-icon":"mdi-lock",onKeydown:g(f(i,["prevent"]),["enter"]),variant:"outlined"},null,8,["modelValue","label","rules","onKeydown"])]),_:1},8,["modelValue","onSubmit"])]),_:1}),e(O,null,{default:s(()=>[e(R,{variant:"elevated",block:"",color:"accent",onClick:i},{default:s(()=>[c(p(l(a)("login.submit")),1)]),_:1})]),_:1})]),_:1})]),_:1}))}});export{G as default};
