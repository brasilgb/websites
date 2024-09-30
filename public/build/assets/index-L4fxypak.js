import{q as o,j as s,a as n,r as m,Y as a}from"./app-C2X4yf6J.js";import{G as c}from"./GuestLayout-DfkT5PDk.js";import{P as h}from"./index-Cof3SAPX.js";import{H as d}from"./HeaderSection-DVToJNQn.js";import{C as p,v as j}from"./index-C0USx7X1.js";import"./ApplicationLogo-DwNPlkyt.js";import"./moment-C5S46NFB.js";import"./index-DK4wAyd8.js";import"./aos-DvcLnD0L.js";import"./index-BRaH1Vhi.js";import"./index-RmIlH70D.js";const u=({data:e})=>{const{url:t}=o();return s.jsx(n,{href:`${t}/${e==null?void 0:e.slug}`,children:s.jsxs("div",{className:"relative bg-white shadow-md rounded-md overflow-hidden duration-500 hover:shadow-xl",children:[s.jsx("img",{src:`/storage/uploads/${e==null?void 0:e.featured}`,alt:"",className:"w-full md:h-[250px] object-bottom object-fill"}),s.jsxs("div",{className:"p-2 md:p-4 flex flex-col",children:[s.jsxs("div",{className:"flex flex-col flex-1 flex-grow",children:[s.jsx("h3",{className:"md:text-xl font-semibold text-blue-900 mb-2",children:e==null?void 0:e.name}),s.jsx("p",{className:"text-gray-700 mb-4 two-lines",children:e==null?void 0:e.description})]}),s.jsx("div",{className:"flex justify-end absolute bottom-2 right-2"})]})]})})},f=({data:e})=>s.jsx("section",{className:"px-4 py-8","data-aos":"zoom-in",children:e.length>0&&s.jsxs("div",{className:"container mx-auto",children:[s.jsx(d,{title:"Serviços"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:e==null?void 0:e.map((t,i)=>s.jsx(m.Fragment,{children:s.jsx(u,{data:t})},i))})]})}),b=e=>{var t;return s.jsx("main",{className:"bg-gray-100 flex items-center justify-center py-6 px-4",children:s.jsxs("div",{className:"container m-auto flex items-center justify-start gap-2 w-full overflow-auto py-2",children:[s.jsx(n,{className:"text-xs font-medium uppercase text-gray-700/70 hover:text-gray-700 transition-colors duration-300",href:"/produtos",children:s.jsxs("div",{className:"flex flex-col items-center justify-center gap-2",children:[s.jsx("div",{className:"w-24 h-24 bg-gray-50 shadow border-4 border-white rounded-full flex items-center justify-center",children:s.jsx(p,{size:50})}),s.jsx("div",{children:"Destaques"})]})}),(t=e.data)==null?void 0:t.map((i,r)=>s.jsx(n,{className:"text-xs font-medium uppercase text-gray-700/70 hover:text-gray-700 transition-colors duration-300",href:`/produtos/categoria/${i.slug}`,children:s.jsxs("div",{className:"flex flex-col items-center justify-center gap-2",children:[s.jsx("div",{className:"w-24 h-24 bg-gray-500 shadow border-4 border-white rounded-full flex items-center justify-center",children:s.jsx("img",{className:"rounded-full w-full h-full",src:`/storage/uploads/${i.thumbnail}`,alt:""})}),s.jsx("div",{children:i.name})]})},r))]})})},N=({data:e})=>{var i,r;o();const{datasite:t}=o().props;return s.jsx("section",{className:"px-4 py-8","data-aos":"zoom-in",children:s.jsx("div",{className:"container mx-auto",children:((i=e==null?void 0:e.posts)==null?void 0:i.length)>0&&s.jsxs(s.Fragment,{children:[s.jsx(d,{title:e==null?void 0:e.name}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:(r=e==null?void 0:e.posts)==null?void 0:r.map((l,g)=>{var x;return s.jsxs("div",{className:"relative bg-white shadow-md rounded-md overflow-hidden duration-500 hover:scale-105 hover:shadow-lg",children:[s.jsx("img",{src:`/storage/uploads/${l==null?void 0:l.featured}`,alt:"",className:"w-full h-[250px] object-bottom object-fill"}),s.jsxs("div",{className:"p-2 md:p-4 flex flex-col",children:[s.jsxs("div",{className:"flex flex-col flex-1 flex-grow pb-6",children:[s.jsx("h3",{className:"text-base md:text-xl font-bold text-blue-900/80 uppercase mb-2",children:l==null?void 0:l.title}),s.jsx("p",{className:"text-gray-700 mb-4 two-lines",children:l==null?void 0:l.summary})]}),s.jsxs("a",{href:`https://wa.me/${(x=t.config)==null?void 0:x.whatsapp}?text=Gostaria de um orçamento de ${l==null?void 0:l.title}.`,target:"_blank",className:"flex justify-end absolute bottom-2 right-2 bg-[#25D366] gap-1 py-2 p-3 rounded-2xl text-white font-semibold",children:[s.jsx(j,{size:24}),s.jsx("span",{children:"Solicite orçamento"})]})]})]})})})]})})})},q=({category:e,products:t,imagefeatured:i,query:r})=>{const{url:l}=o();return s.jsx(c,{children:s.jsxs(s.Fragment,{children:[s.jsx(a,{children:s.jsx("title",{children:e==null?void 0:e.name})}),s.jsxs("div",{className:"relative h-16 md:h-60 w-full",children:[s.jsx("img",{src:`/storage/uploads/${l.split("/")[1]==="servicos"?i:e==null?void 0:e.featured}`,alt:"",className:"object-fill object-center w-full h-full"}),s.jsx("div",{className:"absolute bg-gray-700 bg-opacity-60 w-full -bottom-4 md:bottom-0 text-gray-50 md:px-0 px-4",children:s.jsxs("div",{className:"container mx-auto",children:[s.jsx("h1",{className:"md:text-4xl font-bold text-left text-red-um md:py-4",children:s.jsx("span",{className:"drop-shadow",children:e==null?void 0:e.name})}),s.jsx("div",{className:"container m-auto",children:s.jsxs("ul",{className:"flex items-center justify-start gap-1 text-xs md:text-base font-medium",children:[s.jsx("li",{children:s.jsx(n,{className:"text-gray-300 hover:text-gray-400",href:"/",children:s.jsx("span",{children:"Home"})})}),s.jsx("li",{children:"/"}),s.jsx("li",{children:l.split("/")[2]?s.jsx(n,{className:"text-gray-300 hover:text-gray-400",href:`/${l.split("/")[1]}`,children:s.jsx("span",{children:l.split("/")[1]==="servicos"?"Serviços":l.split("/")[1]})}):s.jsx("span",{className:"text-gray-50",children:l.split("/")[1]==="servicos"?"Serviços":l.split("/")[1]})}),l.split("/")[3]&&s.jsxs(s.Fragment,{children:[s.jsx("li",{children:"/"}),s.jsx("li",{children:s.jsx("span",{className:"text-gray-50",children:l.split("/")[3]})})]})]})})]})})]}),l==="/produtos"||r?s.jsxs(s.Fragment,{children:[s.jsx(b,{data:e==null?void 0:e.sub_categories}),s.jsx(h,{data:t})]}):s.jsxs(s.Fragment,{children:[(e==null?void 0:e.posts.length)>0&&s.jsx(N,{data:e}),(e==null?void 0:e.sub_categories.length)>0&&s.jsx(f,{data:e==null?void 0:e.sub_categories})]})]})})};export{q as default};