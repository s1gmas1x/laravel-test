import{T as d,o as l,c as u,w as i,a,u as s,Z as c,f,t as p,g,b as t,d as w,n as _,e as b}from"./app-ce7de424.js";import{_ as y}from"./GuestLayout-d93edb84.js";import{_ as h,a as k,b as x}from"./TextInput-fe0ad996.js";import{P as v}from"./PrimaryButton-05c0cb2c.js";import"./ApplicationLogo-53388636.js";import"./_plugin-vue_export-helper-c27b6911.js";const V=t("div",{class:"mb-4 w-96 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),B={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],P={class:"flex items-center justify-end mt-4"},q={__name:"ForgotPassword",props:{status:{type:String}},setup(o){const e=d({email:""}),n=()=>{e.post(route("password.email"))};return(S,r)=>(l(),u(y,null,{default:i(()=>[a(s(c),{title:"Forgot Password"}),V,o.status?(l(),f("div",B,p(o.status),1)):g("",!0),t("form",{class:"scale-100 p-6 w-96 bg-gray-800/50 dark:bg-gradient-to-bl backdrop-blur-sm from-gray-700/50 via-transparent ring-1 ring-inset ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex-col motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500",onSubmit:b(n,["prevent"])},[t("div",null,[a(h,{for:"email",value:"Email"}),a(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":r[0]||(r[0]=m=>s(e).email=m),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(x,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",P,[a(v,{class:_({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:i(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,N)]),_:1}))}};export{q as default};
