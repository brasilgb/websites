import{q as x,j as s,r as c}from"./app-CpI8P0e1.js";import{A as h,E as j,D as m}from"./index-DlCSlIWM.js";import{C as u,a as p,b as f,c as d,d as C,e as b}from"./index-CaKPsLkC.js";import{F as T}from"./index-YdMzWSi9.js";import{I as v,T as B,a as w,b as l,c as r,d as A,e as a,f as t,P as H}from"./colorActive-CWraVKz3.js";import{H as M,T as N,B as P}from"./index-jmTxESP8.js";import{A as g}from"./AuthenticatedLayout-BhtAW_EY.js";import{v as D}from"./index-Gxsh1Oo9.js";import{a as n}from"./functions-D_L-L-ad.js";import{h as E}from"./moment-C5S46NFB.js";import{I as F}from"./index-CnJz-jNu.js";import"./index-C31T19st.js";import"./index-DGfbJX4p.js";import"./ApplicationLogo-D0cvxzM-.js";const O=({categories:i})=>{const{flash:o}=x().props;return s.jsx(g,{children:s.jsxs(u,{children:[s.jsxs(M,{children:[s.jsxs(N,{children:[s.jsx(F,{size:30}),s.jsx("span",{className:"ml-2",children:"Categorias"})]}),s.jsx(P,{links:[{url:null,label:"Categorias"}]})]}),s.jsxs(p,{children:[s.jsxs(f,{children:[s.jsx(d,{children:s.jsx(v,{placeholder:"Buscar por categoria",url:"categories.index"})}),s.jsx(d,{children:s.jsx(h,{url:route("categories.create"),label:"Categorias"})})]}),s.jsx(T,{message:o}),s.jsx(C,{children:s.jsxs(B,{children:[s.jsx(w,{children:s.jsxs(l,{children:[s.jsx(r,{children:"#"}),s.jsx(r,{children:"Categoria"}),s.jsx(r,{children:"Slug"}),s.jsx(r,{children:"Parent"}),s.jsx(r,{children:"Módulo"}),s.jsx(r,{children:"N° Post/Prod"}),s.jsx(r,{children:"Ativa"}),s.jsx(r,{children:"Menu"}),s.jsx(r,{children:"Cadastro"}),s.jsx(r,{})]})}),s.jsx(A,{children:i.data.map(e=>s.jsx(c.Fragment,{children:s.jsxs(l,{children:[s.jsx(a,{children:e.id}),s.jsx(a,{children:e.name}),s.jsx(a,{children:e.slug}),s.jsx(a,{children:e.parent}),s.jsx(a,{children:D(e.module)}),s.jsx(a,{children:e.posts.length}),s.jsx(a,{children:s.jsx("div",{className:`flex items-center justify-center rounded-full w-8 h-8 shadow text-xs font-semibold drop-shadow-md uppercase ${t(e.active)}`,children:n(e.active)})}),s.jsx(a,{children:s.jsx("div",{className:`flex items-center justify-center rounded-full w-8 h-8 shadow text-xs font-semibold drop-shadow-md uppercase ${t(e.menu)}`,children:n(e.menu)})}),s.jsx(a,{children:E(e.created_at).format("DD/MM/YYYY")}),s.jsxs(a,{className:"flex items-center justify-end gap-2",children:[s.jsx(j,{url:route("categories.edit",e.id)}),s.jsx(m,{url:"categories.destroy",param:e.id,identify:`a categoria ${e.nome}`})]})]})},e.id))})]})}),s.jsx(b,{children:s.jsx(H,{data:i})})]})]})})};export{O as default};