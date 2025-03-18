import{d,r as c,u as g,j as t,b as f,S as j,C as v}from"./index-DNJJHnKt.js";import{a as y}from"./quiz-DrvXodiZ.js";import{T as S}from"./TitlePage-Dw6_r2P_.js";import{c as $,F as b,a as I}from"./formik.esm-L-d8N29t.js";const T=d.h3`
  margin-bottom: 20px;
`,F=d.div`
  margin-bottom: 20px;
`,k=d.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
`,p=d($)`
  max-width: 400px;
  margin-right: 10px;
`,w=s=>{if(s<60)return`${s} seconds`;if(s<3600){const n=Math.floor(s/60),u=s%60;return`${n} minutes ${u} seconds`}const r=Math.floor(s/3600),o=Math.floor(s%3600/60),l=s%60;return`${r} hours ${o} minutes ${l} seconds`},Q=({quiz:s})=>{const[r,o]=c.useState(0),[l,n]=c.useState(null),u=g(),h=s.questions;c.useEffect(()=>{const e=setInterval(()=>{o(i=>i+1)},1e3);return n(e),()=>{clearInterval(e)}},[]);const m={};return h.forEach(e=>{const i=`${e.question}-${e._id}`;e.type==="Text"&&(m[i]=""),e.type==="Single choice"&&(m[i]=""),e.type==="Multiple choices"&&(m[i]=[])}),t.jsxs(t.Fragment,{children:[t.jsxs(T,{children:["Name: ",s.name]}),t.jsxs(F,{children:["Description: ",s.description]}),t.jsx(b,{initialValues:m,onSubmit:e=>{console.log("values",e),clearInterval(l);const i=w(r);localStorage.setItem("owner",JSON.stringify(s._id)),localStorage.setItem("take-quiz-duration",JSON.stringify(i)),localStorage.setItem("preview-take-quiz",JSON.stringify(e)),u("/create-take-quiz")},children:t.jsxs(I,{children:[h.map((e,i)=>t.jsxs(k,{children:[i+1,". ",e.question,e.type==="Text"&&t.jsx(p,{name:`${e.question}-${e._id}`,placeholder:"Text"}),e.type==="Single choice"&&t.jsx("div",{children:e.answers.map((a,x)=>t.jsxs("div",{children:[t.jsx(p,{type:"radio",name:`${e.question}-${e._id}`,value:a}),a]},x))}),e.type==="Multiple choices"&&t.jsx(t.Fragment,{children:e.answers.map((a,x)=>t.jsxs("div",{children:[t.jsx(p,{type:"checkbox",name:`${e.question}-${e._id}`,value:a}),a]},x))})]},e._id)),t.jsx("button",{type:"submit",children:"Preview"})]})})]})},J=()=>{const{id:s}=f(),[r,o]=c.useState();return c.useEffect(()=>{(async()=>{try{const{data:n}=await y(s);o(n)}catch(n){console.log(n)}})()},[s]),t.jsx(j,{children:t.jsx(v,{children:r&&t.jsxs(t.Fragment,{children:[t.jsx(S,{children:"Take Quiz"}),t.jsx(Q,{quiz:r})]})})})};export{J as default};
