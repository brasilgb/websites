import{W as p,r as d,j as s,Y as l}from"./app-OML9pDKY.js";import{G as c}from"./GuestLayout-p1UCaz1l.js";import{T as u,I as f}from"./TextInput-D5GUnJFe.js";import{I as x}from"./InputLabel-Cy7MNH37.js";import{P as w}from"./PrimaryButton-Df3uEnef.js";import"./ApplicationLogo-Dmr6tjTZ.js";import"./moment-C5S46NFB.js";import"./index-BXi4KBic.js";import"./index-DuwxHAbx.js";function C(){const{data:e,setData:t,post:a,processing:o,errors:i,reset:m}=p({password:""});d.useEffect(()=>()=>{m("password")},[]);const n=r=>{r.preventDefault(),a(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(x,{htmlFor:"password",value:"Password"}),s.jsx(u,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>t("password",r.target.value)}),s.jsx(f,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(w,{className:"ms-4",disabled:o,children:"Confirm"})})]})]})}export{C as default};