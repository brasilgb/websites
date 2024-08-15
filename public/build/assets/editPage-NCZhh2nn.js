import{r as u,q as f,W as b,j as e,y as x}from"./app-BA5JBkOF.js";import{C as h,a as g,b as p,c as n,B as j,d as y,e as k,S as v}from"./index-rKFfZRhT.js";import{F as N}from"./index-BWsIRZND.js";import{H as C,T as F,B}from"./index-BZyymVqs.js";import{A as w}from"./AuthenticatedLayout-BxB2s5S-.js";import{E}from"./Editor-DzMGsPag.js";import{c as S}from"./index-CSd9lkrR.js";import"./index-DYrfOIRH.js";import"./moment-C5S46NFB.js";import"./ApplicationLogo-DKyyGt-u.js";const K=({page:a})=>{const i=u.useRef(),{flash:o,errors:s}=f().props,{data:t,setData:l,patch:T,processing:c}=b({title:a.title,summary:a.summary,content:a.content,featured:a.featured,active:a.active,menu:a.menu,social:a.social,linked:a.linked,type:a.type});function d(r){r.preventDefault(),x.post(`/admin/pages/${a.id}`,{_method:"put",title:t.title,summary:t.summary,content:t.content,featured:t.featured,active:t.active,menu:t.menu,social:t.social,linked:t.linked,type:t.type})}return e.jsx(w,{children:e.jsxs(h,{children:[e.jsxs(C,{children:[e.jsxs(F,{children:[e.jsx(S,{size:30}),e.jsx("span",{className:"ml-2",children:"Páginas"})]}),e.jsx(B,{links:[{url:route("pages.index"),label:"Páginas"},{url:null,label:"Editar página"}]})]}),e.jsxs(g,{children:[e.jsx(N,{message:o}),e.jsxs(p,{children:[e.jsx(n,{children:e.jsx(j,{url:route("pages.index"),label:"Voltar"})}),e.jsx(n,{children:e.jsx(e.Fragment,{})})]}),e.jsx("form",{onSubmit:d,autoComplete:"off",children:e.jsxs(y,{className:" border-y border-gray-100",children:[e.jsxs("div",{className:"mt-4 px-3 my-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"title",children:"Título"}),e.jsx("input",{id:"title",type:"text",value:t.title,onChange:r=>l("title",r.target.value),className:"input-form"}),s.title&&e.jsx("div",{className:"text-red-500",children:s.title})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"summary",children:"Descrição"}),e.jsx("textarea",{id:"summary",value:t.summary,onChange:r=>l("summary",r.target.value),className:"input-form"}),s.summary&&e.jsx("div",{className:"text-red-500",children:s.summary})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"content",children:"Conteúdo"}),e.jsx(E,{apiKey:"7sutxbbo4bpajl4d3vp8gajm3x9y26c1g6ruq3mngukohyb1",onInit:(r,m)=>i.current=m,initialValue:t.content,onChange:()=>{var r;return l("content",(r=i.current)==null?void 0:r.getContent())},id:"content",init:{language:"pt_BR",height:300,menubar:!1,plugins:"autolink lists link charmap print preview anchor image",toolbar:"undo redo link bold italic image alignleft aligncenter alignright alignjustify  bullist numlist outdent indent"}}),s.content&&e.jsx("div",{className:"text-red-500",children:s.content})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{className:"label-form",htmlFor:"featured",children:"Imagem destacada"}),e.jsx("input",{id:"featured",type:"file",onChange:r=>l("featured",r.target.files[0]),className:`block w-full text-base text-gray-600
                                            file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md
                                            file:border-0 file:text-sm file:font-semibold
                                            file:bg-blue-700 file:text-gray-50 file:cursor-pointer
                                            hover:file:bg-blue-600 border border-gray-300 rounded-md bg-transparent`}),s.featured&&e.jsx("div",{className:"text-red-500",children:s.featured})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"active",checked:t.active,onChange:r=>l("active",r.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"active",children:"Ativar página"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"menu",checked:t.menu,onChange:r=>l("menu",r.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"menu",children:"Inserir no menu"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"linked",checked:t.linked,onChange:r=>l("linked",r.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"linked",children:"Abrir em outra página"})]}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("input",{type:"checkbox",id:"social",checked:t.social,onChange:r=>l("social",r.target.checked),className:"block mr-2 p-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"}),e.jsx("label",{className:"label-form",htmlFor:"social",children:"Botões redes sociais"})]})]}),e.jsx(k,{className:"border-t border-gray-100",children:e.jsx(v,{processing:c})})]})})]})]})})};export{K as default};