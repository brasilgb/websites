import{W as h,j as e,a}from"./app-AGlFTyZn.js";import{j as y}from"./index-BEb-29BK.js";import{R as o,a as i,b as c,c as x}from"./index-aJReHip1.js";const v=({placeholder:r,url:t,date:s})=>{const{data:n,setData:d,post:m,get:u,processing:b,errors:j}=h({q:""});function g(l){l.preventDefault(),u(route(t))}return e.jsx("div",{className:" w-96 border border-gray-300 rounded-md pl-2 py-1",children:e.jsxs("form",{onSubmit:g,className:"flex items-center justify-between",children:[e.jsx("div",{className:"w-full",children:e.jsx("input",{name:"search",value:n.q,onChange:l=>d("q",l.target.value),className:"w-full p-1 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none text-gray-500 placeholder:text-gray-400",type:s?"date":"search",placeholder:r,autoComplete:"off"})}),e.jsx("button",{type:"submit",disabled:b,children:e.jsx("div",{className:"mx-2 text-gray-500",children:e.jsx(y,{size:20})})})]})})},N=({data:r})=>{const t=[...r.links];return t.shift(),t.pop(),e.jsxs("ul",{className:"flex items-center justify-center py-2",children:[e.jsx("li",{children:r.prev_page_url!==null?e.jsx(a,{className:"flex items-center justify-center border border-gray-200 h-10 w-10 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-600 duration-300",href:r.first_page_url,children:e.jsx(o,{size:16})}):e.jsx("span",{className:"flex items-center justify-center border border-gray-200 h-10 w-10 text-sm text-gray-300",children:e.jsx(o,{size:16})})}),e.jsx("li",{children:r.prev_page_url!==null?e.jsx(a,{className:"flex items-center justify-center border-y border-r border-gray-200 h-10 w-10 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-600 duration-300",href:r.prev_page_url,children:e.jsx(i,{size:16})}):e.jsx("span",{className:"flex items-center justify-center border-y border-r h-10 w-10 text-sm text-gray-300",children:e.jsx(i,{size:16})})}),t.map((s,n)=>e.jsx("li",{children:e.jsx(a,{className:`flex items-center justify-center border-y border-r border-gray-200 h-10 w-10 text-sm ${s.active?"text-gray-50 bg-blue-700":"text-gray-500 hover:bg-gray-100 hover:text-gray-600"} duration-300`,href:s.url,children:s.label})},n)),e.jsx("li",{children:r.next_page_url!==null?e.jsx(a,{className:"flex items-center justify-center border-y border-r border-gray-200 h-10 w-10 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-600 duration-300",href:r.next_page_url,children:e.jsx(c,{size:16})}):e.jsx("span",{className:"flex items-center justify-center border-y border-r border-gray-200 h-10 w-10 text-sm text-gray-300 duration-300",children:e.jsx(c,{size:16})})}),e.jsx("li",{children:r.next_page_url!==null?e.jsx(a,{className:"flex items-center justify-center border-y border-r border-gray-200 h-10 w-10 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-600 duration-300",href:r.last_page_url,children:e.jsx(x,{size:16})}):e.jsx("span",{className:"flex items-center justify-center border-y border-r border-gray-200 h-10 w-10 text-sm text-gray-300 duration-300",children:e.jsx(x,{size:16})})})]})},_=({children:r,className:t})=>e.jsx("div",{className:"md:w-full overflow-y-auto",children:e.jsx("table",{className:`table-auto md:w-full  ${t} text-sm`,children:r})}),z=({children:r})=>e.jsx("thead",{children:r}),R=({children:r})=>e.jsx("tbody",{children:r}),L=({children:r,className:t,key:s})=>e.jsx("tr",{className:`${t}`,children:r},s),T=({children:r,className:t})=>e.jsx("th",{className:`text-left py-3 px-2 bg-gray-200 text-gray-600 ${t}`,children:r}),S=({children:r,className:t})=>e.jsx("td",{className:`border-b py-2 px-2 text-gray-500 ${t}`,children:r}),A=r=>{let t="";switch(r){case 0:t="bg-red-600 text-white";break;case 1:t="bg-green-600 text-white";break}return t};export{v as I,N as P,_ as T,z as a,L as b,T as c,R as d,S as e,A as f};