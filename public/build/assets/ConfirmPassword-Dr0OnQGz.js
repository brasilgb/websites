import{W as p,r as d,j as s,Y as l}from"./app-DHfQ1g9S.js";import{G as c}from"./GuestLayout-DaVrV897.js";import{T as u,I as f}from"./TextInput-Dwz-zv83.js";import{I as x}from"./InputLabel-DmXmnNZG.js";import{P as w}from"./PrimaryButton-DIkpZc0v.js";import"./ApplicationLogo-XtKG5guV.js";import"./moment-C5S46NFB.js";import"./index-DSQCK1Xz.js";import"./index-x4530_er.js";import"./aos-U_EjRNfh.js";function E(){const{data:t,setData:e,post:a,processing:o,errors:i,reset:m}=p({password:""});d.useEffect(()=>()=>{m("password")},[]);const n=r=>{r.preventDefault(),a(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-50",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(x,{htmlFor:"password",value:"Password"}),s.jsx(u,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>e("password",r.target.value)}),s.jsx(f,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(w,{className:"ms-4",disabled:o,children:"Confirm"})})]})]})}export{E as default};
