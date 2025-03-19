import{d as a,r as l,u as F,j as e,b as $,S as N,C as Q}from"./index-BfY3Aw2M.js";import{a as q}from"./quiz-4uUA3HIg.js";import{T as z}from"./TitlePage-C1yB1Wq_.js";import{a as B,c as v,F as E}from"./formik.esm-DhxhVUgA.js";const I=a(B)`
  min-height: 200px;
`,M=a(v)`
  max-width: 200px;
`,O=a.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 250px;
`,w=a.div`
  display: flex;
  gap: 20px;
`,T=a.button`
  height: 30px;
`,A=a.div`
  color: #e32636;
`,D=({questions:n,questionItem:s,isBackDisabled:m,isNextDisabled:r,isSubmitAction:u,currentIndex:d,handleClickBack:h,handleClickNext:p,time:f,quizId:g})=>{const[j,x]=l.useState(!1),k=F(),y=n.reduce((t,i)=>{const c=`${i.question}-${i._id}`;return t[c]=i.type==="Multiple choices"?[]:"",t},{}),b=(t,i)=>{const c=`${t.question}-${t._id}`;switch(t.type){case"Text":return e.jsx(M,{name:c,placeholder:"Text",value:i[c]||""});case"Single choice":return t.answers.map((o,S)=>e.jsxs("div",{children:[e.jsx(v,{type:"radio",name:c,value:o,checked:i[c]===o}),o]},S));case"Multiple choices":return t.answers.map((o,S)=>{var C;return e.jsxs("div",{children:[e.jsx(v,{type:"checkbox",name:c,value:o,checked:((C=i[c])==null?void 0:C.includes(o))||!1}),o]},S)});default:return null}};return e.jsx(E,{initialValues:y,onSubmit:t=>{Object.keys(t).some(o=>t[o]===""||Array.isArray(t[o])&&t[o].length===0)?x(!0):(localStorage.setItem("quizId",JSON.stringify(g)),localStorage.setItem("preview-take-quiz",JSON.stringify(t)),localStorage.setItem("take-quiz-duration",JSON.stringify(f)),k("/preview-take-quiz"))},children:({values:t})=>e.jsxs(I,{children:[e.jsxs(O,{children:[e.jsxs("h4",{children:[d+1," ",s.question]}),b(s,t),j&&e.jsx(A,{children:"One or more fields are empty!"})]}),e.jsxs(w,{children:[e.jsxs("div",{children:[e.jsx(T,{type:"button",onClick:()=>{h(),x(!1)},disabled:m,children:"Back"}),e.jsx(T,{type:"button",onClick:p,disabled:r,children:"Next"})]}),u&&e.jsx(T,{type:"submit",children:"Submit"})]})]})})},J=n=>{if(n<60)return`${n} seconds`;if(n<3600){const u=Math.floor(n/60),d=n%60;return`${u} minutes ${d} seconds`}const s=Math.floor(n/3600),m=Math.floor(n%3600/60),r=n%60;return`${s} hours ${m} minutes ${r} seconds`},P=a.h3`
  margin-bottom: 10px;
`,V=a.div`
  margin-bottom: 50px;
`,_=a.div`
  margin-bottom: 30px;
`,H=()=>{const{id:n}=$(),[s,m]=l.useState(null),[r,u]=l.useState(0),[d,h]=l.useState(),[p,f]=l.useState(0);l.useEffect(()=>{(async()=>{try{const{data:i}=await q(n);m(i),h(i.questions[0])}catch(i){console.log(i)}})()},[n]);const g=()=>{r>0&&(u(r-1),h(s.questions[r-1]))},j=()=>{r<s.questions.length-1&&(u(r+1),h(s.questions[r+1]))};l.useEffect(()=>{const t=setInterval(()=>{f(i=>i+1)},1e3);return()=>{clearInterval(t)}},[]);const x=J(p),k=r===0,y=r===(s==null?void 0:s.questions.length)-1,b=r===(s==null?void 0:s.questions.length)-1;return e.jsx(N,{children:e.jsx(Q,{children:s&&d&&e.jsxs(e.Fragment,{children:[e.jsx(z,{children:"Take Quiz"}),e.jsx(P,{children:s.name}),e.jsx(V,{children:s.description}),e.jsxs(_,{children:["Time Taken for the Quiz: ",x]}),e.jsx(D,{questions:s.questions,questionItem:d,isBackDisabled:k,isNextDisabled:y,isSubmitAction:b,currentIndex:r,time:x,quizId:n,handleClickBack:g,handleClickNext:j})]})})})};export{_ as Time,H as default};
