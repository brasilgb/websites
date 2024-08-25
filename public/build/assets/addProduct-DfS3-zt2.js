import{r as f,W as b,j as e}from"./app-1b4wfo6X.js";import{B as h,S as p}from"./index-DUDmXDHs.js";import{C as g,a as j,b as v,c as i,d as N,e as y}from"./index-Bj80Tr9T.js";import{H as k,T as C,B as F}from"./index-CY6bqAi4.js";import{A as B}from"./AuthenticatedLayout-u56AKdMf.js";import{d as S}from"./index-CmhbdEVu.js";import{E as w}from"./Editor-DFoJQDbU.js";import{S as A}from"./react-select.esm-D3UtH4V6.js";import"./index-D4Ms-qfv.js";import"./moment-C5S46NFB.js";import"./ApplicationLogo-BMxl4DzS.js";const z=({categories:d})=>{const o=f.useRef(),n=d.map(a=>({value:a.id,label:a.name})),{data:t,setData:r,post:c,processing:m,errors:l}=b({brand:"",title:"",summary:"",content:"",category_id:[],featured:null,valnormal:"",valpromo:"",prodfeatured:!1,active:!1,social:!1,linked:!1,type:2});function u(a){a.preventDefault(),c(route("products.store"))}const x=a=>{r("category_id",a.map(s=>s.value))};return e.jsx(B,{children:e.jsxs(g,{children:[e.jsxs(k,{children:[e.jsxs(C,{children:[e.jsx(S,{size:30}),e.jsx("span",{className:"ml-2",children:"Produtos"})]}),e.jsx(F,{links:[{url:route("products.index"),label:"Produtos"},{url:null,label:"Adicionar produto"}]})]}),e.jsxs(j,{children:[e.jsxs(v,{children:[e.jsx(i,{children:e.jsx(h,{url:route("products.index"),label:"Voltar"})}),e.jsx(i,{children:e.jsx(e.Fragment,{})})]}),e.jsx("form",{onSubmit:u,autoComplete:"off",children:e.jsxs(N,{className:" border-y border-gray-100",children:[e.jsxs("div",{className:"mt-4 px-3 my-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"title",children:"Marca do produto"}),e.jsx("input",{id:"brand",type:"text",value:t.brand,onChange:a=>r("brand",a.target.value),className:"input-form"}),l.brand&&e.jsx("div",{className:"text-red-500",children:l.brand})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"title",children:"Nome do produto"}),e.jsx("input",{id:"title",type:"text",value:t.title,onChange:a=>r("title",a.target.value),className:"input-form"}),l.title&&e.jsx("div",{className:"text-red-500",children:l.title})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"summary",children:"Detalhes"}),e.jsx("textarea",{id:"summary",value:t.summary,onChange:a=>r("summary",a.target.value),className:"input-form"}),l.summary&&e.jsx("div",{className:"text-red-500",children:l.summary})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"content",children:"Descrição completa"}),e.jsx(w,{apiKey:"7sutxbbo4bpajl4d3vp8gajm3x9y26c1g6ruq3mngukohyb1",onInit:(a,s)=>o.current=s,initialValue:t.content,onChange:()=>{var a;return r("content",(a=o.current)==null?void 0:a.getContent())},id:"content",init:{language:"pt_BR",height:300,menubar:!1,plugins:"autolink lists link charmap print preview anchor image",toolbar:"undo redo link bold italic image alignleft aligncenter alignright alignjustify  bullist numlist outdent indent"}}),l.content&&e.jsx("div",{className:"text-red-500",children:l.content})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"featured",children:"Imagem destacada"}),e.jsx("input",{id:"featured",type:"file",onChange:a=>r("featured",a.target.files[0]),className:`block w-full text-base text-gray-600
                                            file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md
                                            file:border-0 file:text-sm file:font-semibold
                                            file:bg-blue-700 file:text-gray-50 file:cursor-pointer
                                            hover:file:bg-blue-600 border border-gray-300 rounded-md bg-transparent`}),l.featured&&e.jsx("div",{className:"text-red-500",children:l.featured})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"title",children:"Categorias"}),e.jsx(A,{options:n,isMulti:!0,onChange:x,placeholder:"Selecione a(s) categoria(s)",styles:{multiValueLabel:a=>({...a,backgroundColor:"#00AEEF",color:"white"})}}),l.category_id&&e.jsx("div",{className:"text-red-500",children:l.category_id})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mt-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"valnormal",children:"Valor venda"}),e.jsx("input",{id:"valnormal",type:"text",value:t.valnormal,onChange:a=>r("valnormal",a.target.value),className:"input-form"}),l.valnormal&&e.jsx("div",{className:"text-red-500",children:l.valnormal})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"valpromo",children:"Valor com deconto"}),e.jsx("input",{id:"valpromo",type:"text",value:t.valpromo,onChange:a=>r("valpromo",a.target.value),className:"input-form"}),l.valpromo&&e.jsx("div",{className:"text-red-500",children:l.valpromo})]})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"prodfeatured",checked:t.prodfeatured,onChange:a=>r("prodfeatured",a.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"prodfeatured",children:"Produto em destacado"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"active",checked:t.active,onChange:a=>r("active",a.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"active",children:"Ativar produto"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"linked",checked:t.linked,onChange:a=>r("linked",a.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"linked",children:"Abrir em outra página"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"social",checked:t.social,onChange:a=>r("social",a.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"social",children:"Botões redes sociais"})]})]}),e.jsx(y,{className:"border-t border-gray-100",children:e.jsx(p,{processing:m})})]})})]})]})})};export{z as default};
