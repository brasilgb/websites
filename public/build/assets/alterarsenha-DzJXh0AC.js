import{r as d,q as j,W as u,j as s,y as v}from"./app-DHfQ1g9S.js";import{S as b}from"./index-TDlNVz8w.js";import{F as w}from"./index-BAsBm0M_.js";import{h as n,i as m}from"./index-DSQCK1Xz.js";import"./index-x4530_er.js";const P=({customer:t})=>{const[i,c]=d.useState(!1),[o,x]=d.useState(!1),{flash:p}=j().props,{data:a,setData:l,patch:g,progress:N,processing:f,errors:r,setDefaults:y}=u({avatar:null,password:"",password_confirmation:""});function h(e){e.preventDefault(),v.post(`alterpassword/${t.id}`,{_method:"put",avatar:a.avatar,password:a.password,password_confirmation:a.password_confirmation})}return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"p-2",children:s.jsx("h1",{className:"text-base font-semibold border-b text-megb-red-primary/80 uppercase",children:"Meu Perfil"})}),s.jsxs("div",{className:"md:p-4 p-2",children:[s.jsxs("div",{className:"",children:[s.jsxs("div",{className:"text-base text-gray-600",children:[s.jsx("span",{className:"font-medium",children:"Nome: "}),s.jsx("span",{className:"font-semibold",children:t.name})]}),s.jsxs("div",{className:"text-base text-gray-600",children:[s.jsx("span",{className:"font-medium",children:"E-mail: "}),s.jsx("span",{className:"font-semibold",children:t.email})]})]}),s.jsxs("div",{className:"bg-white rounded-md border p-4 mt-4",children:[s.jsx(w,{message:p}),s.jsxs("form",{onSubmit:h,autoComplete:"off",children:[s.jsxs("div",{className:"flex flex-col mt-4",children:[s.jsx("label",{className:"label-form",htmlFor:"avatar",children:"Avatar"}),s.jsx("input",{id:"avatar",type:"file",onChange:e=>l("avatar",e.target.files[0]),className:`block w-full text-base text-gray-600
                                            file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md
                                            file:border-0 file:text-sm file:font-semibold
                                            file:bg-blue-700 file:text-gray-50 file:cursor-pointer
                                            hover:file:bg-blue-600 border border-gray-300 rounded-md bg-transparent`}),r.avatar&&s.jsx("div",{className:"text-red-500",children:r.avatar})]}),s.jsxs("div",{className:"grid md:grid-cols-2 md:gap-4 gap-2 mt-6",children:[s.jsxs("div",{className:"flex flex-col",children:[s.jsx("label",{className:"label-form",htmlFor:"password",children:"Senha"}),s.jsxs("div",{className:"flex items-center justify-between relative",children:[s.jsx("input",{id:"password",type:i?"text":"password",value:a.password,onChange:e=>l("password",e.target.value),className:"input-form w-full"}),s.jsx("div",{className:"absolute right-2 cursor-pointer text-gray-500",onClick:()=>c(e=>!e),children:i?s.jsx(n,{size:24}):s.jsx(m,{size:24})})]}),r.password&&s.jsx("div",{className:"text-sm text-red-500",children:r.password})]}),s.jsxs("div",{className:"flex flex-col",children:[s.jsx("label",{className:"label-form",htmlFor:"password_confirmation",children:"Repita a senha"}),s.jsxs("div",{className:"flex items-center justify-between relative",children:[s.jsx("input",{id:"password_confirmation",type:o?"text":"password",value:a.password_confirmation,onChange:e=>l("password_confirmation",e.target.value),className:"input-form w-full"}),s.jsx("div",{className:"absolute right-2 cursor-pointer text-gray-500",onClick:()=>x(e=>!e),children:o?s.jsx(n,{size:24}):s.jsx(m,{size:24})})]})]})]}),s.jsx("div",{className:"mt-6 py-2 px-2",children:s.jsx(b,{processing:f})})]})]})]})]})};export{P as default};
