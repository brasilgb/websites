import{W as d,j as e,q as n,Y as i}from"./app-DTcgHplb.js";import{A as l}from"./aos-CXQBBsdZ.js";import{h as x}from"./moment-C5S46NFB.js";import{w as c,x as m,y as a}from"./index-D5NIJYVD.js";const p=r=>{const{post:s}=d(),t=o=>{o.preventDefault(),s(route("logout"))};return e.jsx("header",{className:"h-16 bg-gray-50 drop-shadow-sm",children:e.jsxs("div",{className:"container m-auto h-full flex items-center justify-between",children:[e.jsx("div",{className:"h-full w-20",children:e.jsx("img",{src:"/storage/images/default.png",alt:""})}),e.jsx("div",{children:e.jsx("button",{className:"rounded-md shadow px-3 py-1.5 bg-red-700 hover:bg-red-700/80 text-sm text-white font-semibold uppercase",onClick:o=>t(o),children:"Sair"})})]})})},u=r=>e.jsx("footer",{className:"bg-gray-50 drop-shadow-md",children:e.jsxs("div",{className:"container m-auto flex items-center justify-between",children:[e.jsx("div",{children:e.jsxs("p",{className:"text-sm text-gray-500 font-medium",children:["©",x().format("YYYY")," - empresa"," . Todos os direitos reservados."]})}),e.jsx("div",{children:"ok"})]})});l.init();const b=({children:r})=>(n().props,e.jsxs(e.Fragment,{children:[e.jsx(i,{}),e.jsxs("main",{className:"bg-gray-200 flex flex-col min-h-screen antialiased",children:[e.jsx(p,{}),e.jsx("div",{className:"flex-grow",children:r}),e.jsx(u,{})]})]})),y=({clientes:r})=>{var t;const{auth:s}=n().props;return e.jsx(b,{children:e.jsxs("main",{className:"container m-auto",children:[e.jsx("div",{className:"text-lg text-megb-red-primary font font-semibold py-6",children:(t=s==null?void 0:s.user)==null?void 0:t.name}),e.jsxs("div",{className:"flex items-center justify-start gap-4",children:[e.jsxs("button",{className:"px-6 py-4 drop-shadow-md border-2 border-white rounded-md bg-megb-blue-secundary hover:bg-megb-blue-secundary/80 text-xs text-white font-bold uppercase flex items-center justify-center gap-1",children:[e.jsx(c,{size:18}),e.jsx("span",{children:"texto por extenso"})]}),e.jsxs("button",{className:"px-6 py-4 drop-shadow-md border-2 border-white rounded-md bg-gray-50 hover:bg-megb-blue-secundary/80 text-xs text-megb-blue-plus font-bold uppercase flex items-center justify-center gap-1",children:[e.jsx(m,{size:18}),e.jsx("span",{children:"texto por extenso"})]}),e.jsxs("button",{className:"px-6 py-4 drop-shadow-md border-2 border-white rounded-md bg-gray-50 hover:bg-megb-blue-secundary/80 text-xs text-megb-blue-plus font-bold uppercase flex items-center justify-center gap-1",children:[e.jsx(a,{size:18}),e.jsx("span",{children:"texto por extenso"})]}),e.jsxs("button",{className:"px-6 py-4 drop-shadow-md border-2 border-white rounded-md bg-gray-50 hover:bg-megb-blue-secundary/80 text-xs text-megb-blue-plus font-bold uppercase flex items-center justify-center gap-1",children:[e.jsx(a,{size:18}),e.jsx("span",{children:"texto por extenso"})]})]})]})})};export{y as default};