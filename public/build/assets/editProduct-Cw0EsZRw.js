import{r as p,q as g,W as v,j as e,y as j}from"./app-AGlFTyZn.js";import{B as y,S as N}from"./index-CNxVL6js.js";import{C as k,a as C,b as F,c as n,d as B,e as S}from"./index-qaAMYaGm.js";import{F as _}from"./index-XOLssqTq.js";import{H as w,T as E,B as V}from"./index-CRszGlMh.js";import{A}from"./AuthenticatedLayout-Df4sCNoO.js";import{E as D}from"./Editor-CS9LXzrB.js";import{d as H}from"./index-BEb-29BK.js";import{S as M}from"./react-select.esm-DEf9O0-5.js";import"./index-vCB85cUu.js";import"./moment-C5S46NFB.js";import"./ApplicationLogo-CFZOwQSy.js";const Q=({product:t,categories:d,productCategory:c})=>{const i=p.useRef(),{flash:m}=g().props,u=c.map(a=>({value:a.id,label:a.name})),x=d.map(a=>({value:a.id,label:a.name})),{data:l,setData:s,patch:P,processing:f,errors:r}=v({brand:t.brand,title:t.title,summary:t.summary,content:t.content,category_id:[],featured:t.featured,valnormal:t.valnormal,valpromo:t.valpromo,prodfeatured:t.prodfeatured,active:t.active,social:t.social,linked:t.linked,type:t.type});function b(a){a.preventDefault(),j.post(`/admin/products/${t.id}`,{_method:"put",brand:l.brand,title:l.title,summary:l.summary,content:l.content,category_id:l.category_id,featured:l.featured,valnormal:l.valnormal,valpromo:l.valpromo,prodfeatured:l.prodfeatured,active:l.active,social:l.social,linked:l.linked,type:l.type})}const h=a=>{s("category_id",a.map(o=>o.value))};return e.jsx(A,{children:e.jsxs(k,{children:[e.jsxs(w,{children:[e.jsxs(E,{children:[e.jsx(H,{size:30}),e.jsx("span",{className:"ml-2",children:"Produtos"})]}),e.jsx(V,{links:[{url:route("products.index"),label:"Produtos"},{url:null,label:"Editar produto"}]})]}),e.jsxs(C,{children:[e.jsx(_,{message:m}),e.jsxs(F,{children:[e.jsx(n,{children:e.jsx(y,{url:route("products.index"),label:"Voltar"})}),e.jsx(n,{children:e.jsx(e.Fragment,{})})]}),e.jsx("form",{onSubmit:b,autoComplete:"off",children:e.jsxs(B,{className:" border-y border-gray-100",children:[e.jsxs("div",{className:"mt-4 px-3 my-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"title",children:"Marca do produto"}),e.jsx("input",{id:"brand",type:"text",value:l.brand,onChange:a=>s("brand",a.target.value),className:"input-form"}),r.brand&&e.jsx("div",{className:"text-red-500",children:r.brand})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"title",children:"Nome do produto"}),e.jsx("input",{id:"title",type:"text",value:l.title,onChange:a=>s("title",a.target.value),className:"input-form"}),r.title&&e.jsx("div",{className:"text-red-500",children:r.title})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"summary",children:"Detalhes"}),e.jsx("textarea",{id:"summary",value:l.summary,onChange:a=>s("summary",a.target.value),className:"input-form"}),r.summary&&e.jsx("div",{className:"text-red-500",children:r.summary})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"content",children:"Descrição completa"}),e.jsx(D,{apiKey:"7sutxbbo4bpajl4d3vp8gajm3x9y26c1g6ruq3mngukohyb1",onInit:(a,o)=>i.current=o,initialValue:l.content,onChange:()=>{var a;return s("content",(a=i.current)==null?void 0:a.getContent())},id:"content",init:{language:"pt_BR",height:300,menubar:!1,plugins:"autolink lists link charmap print preview anchor image",toolbar:"undo redo link bold italic image alignleft aligncenter alignright alignjustify  bullist numlist outdent indent"}}),r.content&&e.jsx("div",{className:"text-red-500",children:r.content})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"featured",children:"Imagem destacada"}),e.jsx("input",{id:"featured",type:"file",onChange:a=>s("featured",a.target.files[0]),className:`block w-full text-base text-gray-600
                                            file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md
                                            file:border-0 file:text-sm file:font-semibold
                                            file:bg-blue-700 file:text-gray-50 file:cursor-pointer
                                            hover:file:bg-blue-600 border border-gray-300 rounded-md bg-transparent`}),r.featured&&e.jsx("div",{className:"text-red-500",children:r.featured})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"title",children:"Categorias"}),e.jsx(M,{options:x,isMulti:!0,defaultValue:u,onChange:h,placeholder:"Selecione a(s) categoria(s)",styles:{multiValueLabel:a=>({...a,backgroundColor:"#00AEEF",color:"white"})}}),r.category_id&&e.jsx("div",{className:"text-red-500",children:r.category_id})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mt-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"valnormal",children:"Valor venda"}),e.jsx("input",{id:"valnormal",type:"text",value:l.valnormal,onChange:a=>s("valnormal",a.target.value),className:"input-form"}),r.valnormal&&e.jsx("div",{className:"text-red-500",children:r.valnormal})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"valpromo",children:"Valor com deconto"}),e.jsx("input",{id:"valpromo",type:"text",value:l.valpromo,onChange:a=>s("valpromo",a.target.value),className:"input-form"}),r.valpromo&&e.jsx("div",{className:"text-red-500",children:r.valpromo})]})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"prodfeatured",checked:l.prodfeatured,onChange:a=>s("prodfeatured",a.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"prodfeatured",children:"Produto destacado"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"active",checked:l.active,onChange:a=>s("active",a.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"active",children:"Ativar produto"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"linked",checked:l.linked,onChange:a=>s("linked",a.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"linked",children:"Abrir em outra página"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"social",checked:l.social,onChange:a=>s("social",a.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"social",children:"Botões redes sociais"})]})]}),e.jsx(S,{className:"border-t border-gray-100",children:e.jsx(N,{processing:f})})]})})]})]})})};export{Q as default};