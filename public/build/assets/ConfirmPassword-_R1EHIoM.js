import{W as p,r as d,j as s,Y as l}from"./app-C2X4yf6J.js";import{G as c}from"./GuestLayout-DfkT5PDk.js";import{T as u,I as f}from"./TextInput-C0vNVdH4.js";import{I as x}from"./InputLabel-AuTFgzZ_.js";import{P as w}from"./PrimaryButton-D2FKUG93.js";import"./ApplicationLogo-DwNPlkyt.js";import"./moment-C5S46NFB.js";import"./index-C0USx7X1.js";import"./index-DK4wAyd8.js";import"./aos-DvcLnD0L.js";function E(){const{data:t,setData:e,post:a,processing:o,errors:i,reset:m}=p({password:""});d.useEffect(()=>()=>{m("password")},[]);const n=r=>{r.preventDefault(),a(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-50",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(x,{htmlFor:"password",value:"Password"}),s.jsx(u,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>e("password",r.target.value)}),s.jsx(f,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(w,{className:"ms-4",disabled:o,children:"Confirm"})})]})]})}export{E as default};