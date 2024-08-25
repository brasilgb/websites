import{r as n,q as N,W as v,j as e,Y as w}from"./app-1b4wfo6X.js";import{B as b,S as C}from"./index-DUDmXDHs.js";import{C as y,a as F,b as S,c as d,d as B,e as E}from"./index-Bj80Tr9T.js";import{F as P}from"./index-9IBho1N9.js";import{H as U,T as $,B as k}from"./index-CY6bqAi4.js";import{A as z}from"./AuthenticatedLayout-u56AKdMf.js";import{r as D,s as _}from"./dataSelect-Dw0r5RPk.js";import{g as H,h as c,i as m}from"./index-CmhbdEVu.js";import"./index-D4Ms-qfv.js";import"./moment-C5S46NFB.js";import"./ApplicationLogo-BMxl4DzS.js";function x(a){if(a)return a.length<11?(a=a.replace(/\D/g,""),a=a.replace(/^(\d{2})(\d{4})(\d{4})/,"($1) $2-$3"),a):(a=a.replace(/\D/g,""),a=a.replace(/^(\d{2})(\d{5})(\d{4})/,"($1) $2-$3"),a)}const K=({user:a})=>{const[i,p]=n.useState(!1),[o,h]=n.useState(!1),{flash:f}=N().props,{data:r,setData:t,patch:u,progress:T,processing:j,errors:l,setDefaults:A}=v({name:a.name,email:a.email,telefone:a.telefone,whatsapp:a.whatsapp,roles:a.roles,status:a.status,password:"",password_confirmation:""});function g(s){s.preventDefault(),u(route("users.update",a.id))}return e.jsxs(z,{children:[e.jsx(w,{title:"Usuários"}),e.jsxs(y,{children:[e.jsxs(U,{children:[e.jsxs($,{children:[e.jsx(H,{size:30}),e.jsx("span",{className:"ml-2",children:"Usuários"})]}),e.jsx(k,{links:[{url:route("users.index"),label:"Usuários"},{url:null,label:"Adicionar usuário"}]})]}),e.jsxs(F,{children:[e.jsx(P,{message:f}),e.jsxs(S,{children:[e.jsx(d,{children:e.jsx(b,{url:route("users.index"),label:"Voltar"})}),e.jsx(d,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:g,autoComplete:"off",children:[e.jsx(B,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-4",children:[e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"nome",children:"Nome"}),e.jsx("input",{id:"name",type:"text",value:r.name,onChange:s=>t("name",s.target.value),className:"input-form"}),l.name&&e.jsx("div",{className:"text-sm text-red-500",children:l.name})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"email",children:"E-mail"}),e.jsx("input",{id:"email",type:"text",value:r.email,onChange:s=>t("email",s.target.value),className:"input-form"}),l.email&&e.jsx("div",{className:"text-red-500",children:l.email})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"telefone",children:"Celular"}),e.jsx("input",{id:"telefone",type:"text",value:x(r.telefone),onChange:s=>t("telefone",s.target.value),className:"input-form",maxLength:15}),l.telefone&&e.jsx("div",{className:"text-sm text-red-500",children:l.telefone})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"whatsapp",children:"Whatsapp"}),e.jsx("input",{id:"whatsapp",type:"text",value:x(r.whatsapp),onChange:s=>t("whatsapp",s.target.value),className:"input-form",maxLength:15}),l.whatsapp&&e.jsx("div",{className:"text-sm text-red-500",children:l.whatsapp})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"password",children:"Senha"}),e.jsxs("div",{className:"flex items-center justify-between relative",children:[e.jsx("input",{id:"password",type:i?"text":"password",value:r.password,onChange:s=>t("password",s.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-2 cursor-pointer text-gray-500",onClick:()=>p(s=>!s),children:i?e.jsx(c,{size:24}):e.jsx(m,{size:24})})]}),l.password&&e.jsx("div",{className:"text-sm text-red-500",children:l.password})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"password_confirmation",children:"Repita a senha"}),e.jsxs("div",{className:"flex items-center justify-between relative",children:[e.jsx("input",{id:"password_confirmation",type:o?"text":"password",value:r.password_confirmation,onChange:s=>t("password_confirmation",s.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-2 cursor-pointer text-gray-500",onClick:()=>h(s=>!s),children:o?e.jsx(c,{size:24}):e.jsx(m,{size:24})})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"role",children:"Função"}),e.jsxs("select",{id:"role",value:r.roles,onChange:s=>t("roles",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione a função"}),D.map(s=>e.jsx("option",{value:s==null?void 0:s.value,children:s==null?void 0:s.label},s==null?void 0:s.value))]}),l.roles&&e.jsx("div",{className:"text-sm text-red-500",children:l.roles})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"status",children:"Status"}),e.jsx("select",{id:"status",value:r.status,onChange:s=>t("status",s.target.value),className:"input-form",children:_.map(s=>e.jsx("option",{value:s==null?void 0:s.value,children:s==null?void 0:s.label},s==null?void 0:s.value))})]})]})]})}),e.jsx(E,{children:e.jsx(C,{processing:j})})]})]})]})]})};export{K as default};
