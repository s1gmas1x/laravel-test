import{T as f,o as p,c as w,w as m,a,u as s,Z as g,b as l,d,j as _,n as b,e as V}from"./app-836c0528.js";import{_ as v}from"./GuestLayout-b01de768.js";import{_ as t,a as i,b as n}from"./TextInput-f7085b25.js";import{P as y}from"./PrimaryButton-faa0f106.js";import"./ApplicationLogo-6109f279.js";import"./_plugin-vue_export-helper-c27b6911.js";const x={class:"mt-4"},h={class:"mt-4"},k={class:"mt-4"},q={class:"flex items-center justify-end mt-4"},j={__name:"Register",setup(B){const e=f({name:"",email:"",password:"",password_confirmation:"",terms:!1}),u=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(c,o)=>(p(),w(v,null,{default:m(()=>[a(s(g),{title:"Register"}),l("form",{class:"scale-100 p-6 w-96 bg-gray-800/50 bg-gradient-to-bl backdrop-blur-sm from-gray-700/50 via-transparent ring-1 ring-inset ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex-col motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500",onSubmit:V(u,["prevent"])},[l("div",null,[a(t,{for:"name",value:"Name"}),a(i,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).name=r),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(n,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),l("div",x,[a(t,{for:"email",value:"Email"}),a(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).email=r),required:"",autocomplete:"username"},null,8,["modelValue"]),a(n,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),l("div",h,[a(t,{for:"password",value:"Password"}),a(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[2]||(o[2]=r=>s(e).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(n,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),l("div",k,[a(t,{for:"password_confirmation",value:"Confirm Password"}),a(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=r=>s(e).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(n,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),l("div",q,[a(s(_),{href:c.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:m(()=>[d(" Already registered? ")]),_:1},8,["href"]),a(y,{class:b(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{j as default};
