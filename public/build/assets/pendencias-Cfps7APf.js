import{j as s}from"./app-DHfQ1g9S.js";import{m as x}from"./index-BRaH1Vhi.js";import{b as n}from"./functions-D_L-L-ad.js";import{h as p}from"./moment-C5S46NFB.js";const b=({data:t})=>{var r;const c=e=>{switch(e){case 1:return"bg-rose-600/80 border border-gray-300 text-gray-50 text-xs uppercase";case 2:return"bg-cyan-600/50 border border-cyan-600 text-cyan-800 text-xs uppercase";case 3:return"bg-orange-600/50 border border-orange-600 text-orange-800 text-xs uppercase";case 4:return"bg-sky-600/50 border border-sky-600 text-sky-800 text-xs uppercase";case 5:return"bg-red-600/50 border border-red-600 text-red-800 text-xs uppercase";case 6:return"bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";case 7:return"bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";case 8:return"bg-blue-600/50 border border-blue-600 text-blue-800 text-xs uppercase"}};return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"p-2",children:s.jsxs("h1",{className:"md:text-base text-xs font-semibold border-b text-megb-red-primary/80 uppercase",children:["Ordens de serviço pendentes - ",(r=t==null?void 0:t.orders)==null?void 0:r.filter(e=>e.status!=8).length]})}),s.jsx("div",{className:"w-full px-2 pb-2 overflow-auto max-h-[650px]",children:s.jsxs("table",{className:"table w-full",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-left bg-slate-200 md:text-base text-sm text-gray-600",children:[s.jsx("th",{className:"px-2 py-1 whitespace-nowrap",children:"N° OS"}),s.jsx("th",{className:"px-2 py-1 whitespace-nowrap",children:"Defeito"}),s.jsx("th",{className:"px-2 py-1 whitespace-nowrap",children:"Desc. Orçamento"}),s.jsx("th",{className:"px-2 py-1 whitespace-nowrap",children:"Val. Orçamento"}),s.jsx("th",{className:"px-2 py-1",children:"Entrada"}),s.jsx("th",{className:"px-2 py-1",children:"Status"})]})}),s.jsx("tbody",{children:t.orders.filter(e=>e.status!=8).sort((e,a)=>e.id<a.id?1:-1).map((e,a)=>s.jsxs("tr",{className:`${a%2===0?"bg-slate-100 text-gray-600":"text-gray-500"}`,children:[s.jsx("td",{className:"px-2 py-1",children:e==null?void 0:e.id}),s.jsx("td",{className:"px-2 py-1",children:e==null?void 0:e.defeito}),s.jsx("td",{className:"px-2 py-1",children:e==null?void 0:e.descorcamento}),s.jsx("td",{className:"px-2 py-1 whitespace-nowrap",children:x(e==null?void 0:e.valorcamento)}),s.jsx("td",{className:"px-2 py-1",children:p(e==null?void 0:e.dtentrada).format("DD/MM/YYYY")}),s.jsx("td",{className:"py-1 whitespace-nowrap",children:s.jsx("span",{className:`px-3 py-1 rounded-full font-semibold drop-shadow-md ${c(parseInt(e==null?void 0:e.status))}`,children:n(parseInt(e==null?void 0:e.status))})})]},a))})]})})]})};export{b as default};
