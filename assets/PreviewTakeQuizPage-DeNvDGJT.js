import{d as s,u as h,j as e,r as a,S as p,C as x}from"./index-DXT-cwkx.js";import{T as g}from"./TitlePage-u0MNtKVV.js";import{c as j}from"./quiz-4uUA3HIg.js";const k=s.ul`
  margin-bottom: 30px;
`,z=s.li`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`,S=s.div`
  display: flex;
  gap: 4px;
`,f=s.div`
  margin-bottom: 30px;
`,v=s.button`
  height: 35px;
`,w=({previewTakeQuiz:t,takeQuizDuration:i,owner:o})=>{const l=h(),c={};for(const n in t){const r=n.split("-")[0];c[r]=t[n]}const d=Object.entries(c),m=async()=>{try{await j({questions:c,quizId:o}),l("/create-take-quiz-result",{state:{success:!0,message:"Take quiz created successfully!"}})}catch{l("/create-take-quiz-result",{state:{error:!0,message:"An error occurred while creating the take quiz."}})}};return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:d.map(([n,r],u)=>e.jsxs(z,{children:[e.jsxs("div",{children:[u+1,". ",n]}),typeof r=="object"?e.jsxs(S,{children:[e.jsx("div",{children:"Answer:"}),e.jsx("div",{children:r.join(", ")})]}):e.jsxs("div",{children:["Answer: ",r]})]},u))}),e.jsxs(f,{children:["Time Taken for the Quiz: ",i]}),e.jsx(v,{type:"button",onClick:m,children:"Submit"})]})},I=()=>{const t=localStorage.getItem("preview-take-quiz");return t?JSON.parse(t):null},T=()=>{const t=localStorage.getItem("take-quiz-duration");return t?JSON.parse(t):null},q=()=>{const t=localStorage.getItem("quizId");return t?JSON.parse(t):null},O=()=>{const[t]=a.useState(I),[i]=a.useState(T),[o]=a.useState(q);return a.useEffect(()=>()=>{localStorage.removeItem("owner"),localStorage.removeItem("preview-take-quiz"),localStorage.removeItem("take-quiz-duration")},[]),e.jsx(p,{children:e.jsx(x,{children:t&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Preview Take Quiz"}),e.jsx(w,{previewTakeQuiz:t,takeQuizDuration:i,owner:o})]})})})};export{O as default};
