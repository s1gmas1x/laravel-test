import{T as c,o as f,c as w,w as m,a as o,u as e,Z as _,b as t,d as g,n as b,e as V}from"./app-214aa428.js";import{_ as y}from"./GuestLayout-ffe8f443.js";import{_ as l,a as i,b as n}from"./TextInput-7bbbcfea.js";import{P as k}from"./PrimaryButton-3c1b9b96.js";import"./ApplicationLogo-803decde.js";import"./_plugin-vue_export-helper-c27b6911.js";const v={class:"mt-4"},x={class:"mt-4"},P={class:"flex items-center justify-end mt-4"},S={__name:"ResetPassword",props:{email:{type:String,required:!0},token:{type:String,required:!0}},setup(u){const d=u,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),p=()=>{s.post(route("password.store"),{onFinish:()=>s.reset("password","password_confirmation")})};return(h,a)=>(f(),w(y,null,{default:m(()=>[o(e(_),{title:"Reset Password"}),t("form",{class:"scale-100 p-6 bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent ring-1 ring-inset ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500",onSubmit:V(p,["prevent"])},[t("div",null,[o(l,{for:"email",value:"Email"}),o(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(n,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",v,[o(l,{for:"password",value:"Password"}),o(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(n,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",x,[o(l,{for:"password_confirmation",value:"Confirm Password"}),o(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(n,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",P,[o(k,{class:b({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:m(()=>[g(" Reset Password ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{S as default};