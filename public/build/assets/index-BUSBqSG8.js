import{q as x,j as e,r as j}from"./app-DTcgHplb.js";import{C as h,a as m,b as u,c as t,A as p,d as f,E as b,D as C,e as g}from"./index-COzmIudd.js";import{F as y}from"./index-DWhsWmdS.js";import{I as B,T,a as v,b as l,c as a,d as w,e as r,f as P,p as A,P as D}from"./functions-BvjGqWPS.js";import{H,T as N,B as E}from"./index-D4KuRdjM.js";import{A as F}from"./AuthenticatedLayout-DUMWS4Nd.js";import{h as Y}from"./moment-C5S46NFB.js";import{d as k}from"./index-D5NIJYVD.js";import{c as i}from"./colorActive-CNtVMDqs.js";import"./index-Qo9ZMlpi.js";import"./index-ByOS41Td.js";import"./ApplicationLogo-C8bAqzIq.js";const L=({products:d})=>{const{flash:o}=x().props;return e.jsx(F,{children:e.jsxs(h,{children:[e.jsxs(H,{children:[e.jsxs(N,{children:[e.jsx(k,{size:30}),e.jsx("span",{className:"ml-2",children:"Produtos"})]}),e.jsx(E,{links:[{url:null,label:"Produtos"}]})]}),e.jsxs(m,{children:[e.jsxs(u,{children:[e.jsx(t,{children:e.jsx(B,{placeholder:"Buscar por produto",url:"products.index"})}),e.jsx(t,{children:e.jsx(p,{url:route("products.create"),label:"Produtos"})})]}),e.jsx(y,{message:o}),e.jsx(f,{children:e.jsxs(T,{children:[e.jsx(v,{children:e.jsxs(l,{children:[e.jsx(a,{children:"#"}),e.jsx(a,{children:"Produto"}),e.jsx(a,{children:"Slug"}),e.jsx(a,{children:"Categorias"}),e.jsx(a,{children:"Ativa"}),e.jsx(a,{children:"Destaque"}),e.jsx(a,{children:"Cadastro"}),e.jsx(a,{})]})}),e.jsx(w,{children:d.data.map(s=>e.jsx(j.Fragment,{children:e.jsxs(l,{children:[e.jsx(r,{children:s.id}),e.jsx(r,{children:s.title}),e.jsx(r,{children:s.slug}),e.jsx(r,{children:e.jsx("div",{className:"flex items-center justify-start gap-2",children:s.categories.map((n,c)=>e.jsx("span",{className:"bg-yellow-100 rounded border p-1",children:n.name},c))})}),e.jsx(r,{children:e.jsx("div",{className:`flex items-center justify-center rounded-full w-8 h-8 shadow text-xs font-semibold drop-shadow-md uppercase ${i(s.active)}`,children:P(s.active)})}),e.jsx(r,{children:e.jsx("div",{className:`flex items-center justify-center rounded-full w-8 h-8 shadow text-xs font-semibold drop-shadow-md uppercase ${i(s.prodfeatured)}`,children:A(s.prodfeatured)})}),e.jsx(r,{children:Y(s.created_at).format("DD/MM/YYYY")}),e.jsxs(r,{className:"flex items-center justify-end gap-2",children:[e.jsx(b,{url:route("products.edit",s.id)}),e.jsx(C,{url:"products.destroy",param:s.id,identify:`a postagem ${s.title}`})]})]})},s.id))})]})}),e.jsx(g,{children:e.jsx(D,{data:d})})]})]})})};export{L as default};