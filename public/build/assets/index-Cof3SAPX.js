import{q as g,j as s,r as o}from"./app-C2X4yf6J.js";import{m as h}from"./index-BRaH1Vhi.js";import{v as w}from"./index-C0USx7X1.js";import{d as $}from"./index-RmIlH70D.js";import{H as C}from"./HeaderSection-DVToJNQn.js";const k=({product:e})=>{var t;const{datasite:x}=g().props;return s.jsxs("div",{className:"relative bg-white shadow-md rounded-md duration-500 hover:shadow-xl pb-6",children:[s.jsx("img",{src:`/storage/uploads/${e==null?void 0:e.featured}`,alt:"Product",className:" object-cover rounded-t-md"}),s.jsxs("div",{className:"px-4 py-3",children:[s.jsx("span",{className:"text-gray-400 mr-3 uppercase text-xs",children:e==null?void 0:e.brand}),s.jsx("p",{className:"text-sm font-bold text-black truncate block capitalize",children:e==null?void 0:e.title}),s.jsxs("div",{className:"flex items-center",children:[s.jsxs("div",{className:"flex items-center justify-end w-full pb-2",children:[(e==null?void 0:e.valnormal)&&!(e!=null&&e.valpromo)&&s.jsxs("p",{className:"text:base md:text-lg font-semibold text-megb-blue-secundary cursor-auto",children:["R$ ",h(e==null?void 0:e.valnormal)]}),(e==null?void 0:e.valnormal)&&(e==null?void 0:e.valpromo)&&s.jsxs(s.Fragment,{children:[s.jsxs("p",{className:"text-lg font-semibold text-megb-blue-secundary cursor-auto",children:["R$ ",h(e==null?void 0:e.valpromo)]}),s.jsx("del",{children:s.jsxs("p",{className:"text-sm text-megb-red-primary cursor-auto ml-2",children:["R$ ",h(e==null?void 0:e.valnormal)]})})]})]}),s.jsx("a",{href:`https://wa.me/${(t=x.config)==null?void 0:t.whatsapp}?text=Quero informações sobre ${e==null?void 0:e.title}`,target:"_blank",className:"flex justify-end absolute text-color bottom-2 right-2 text-[#25D366] hover:text-[#25D366]/90",children:s.jsx(w,{size:30})})]})]})]})},M=({data:e})=>{var j,f;const{url:x}=g(),{datasite:t}=g().props,[i,v]=o.useState([]),[a,b]=o.useState(10),[N,c]=o.useState("Carregar Mais"),d=(j=t==null?void 0:t.allcat)==null?void 0:j.filter(l=>{var n,m;return l.id===((m=(n=e[0])==null?void 0:n.pivot)==null?void 0:m.category_id)}),r=10,y=()=>{a<e.length?b(a+r):b(r)};return o.useEffect(()=>{const l=e==null?void 0:e.filter((n,m)=>m<a);v(l),a<e.length?c("Carregar Mais"):c("Carregar Menos")},[e,a,r]),s.jsx("section",{className:"px-4 py-8 bg-gray-50",children:s.jsxs("div",{className:"container mx-auto",children:[s.jsx(C,{title:x.split("/")[3]?(f=d[0])==null?void 0:f.name:"Produtos"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-8",children:i==null?void 0:i.map((l,n)=>s.jsx("div",{"data-aos":"zoom-in",children:s.jsx(k,{product:l})},n))}),e.length>r&&s.jsxs("div",{className:"mt-4 flex flex-col items-center justify-center",children:[s.jsxs("div",{className:"pb-2 text-sm font-semibold text-gray-500",children:[i.length," produtos de ",e.length]}),s.jsxs("button",{className:"flex items-center justify-center gap-1 px-3 py-1 text-white bg-megb-red-primary hover:bg-megb-red-primary/80 transition-colors duration-300 text-sm font-semibold border border-megb-red-primary/20 rounded-md shadow-md",onClick:()=>y(),type:"button",children:[s.jsx("span",{className:`hover:rotate-0 ${a<e.length?"rotate-0":"-rotate-180"} transition-all duration-300`,children:s.jsx($,{size:25})}),s.jsx("span",{children:N})]})]})]})})};export{M as P};