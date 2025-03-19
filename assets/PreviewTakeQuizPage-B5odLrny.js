import{d as s,u as g,j as e,r as a,S as h,C as p}from"./index-BTFs3FKK.js";import{T as x}from"./TitlePage-Dx6D5E7W.js";import{c as j}from"./quiz-4uUA3HIg.js";const k=s.ul`
  margin-bottom: 30px;
`,z=s.li`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`,w=s.div`
  display: flex;
  gap: 4px;
`,S=s.div`
  margin-bottom: 30px;
`,v=s.button`
  height: 35px;
`,f=({previewTakeQuiz:t,takeQuizDuration:i,owner:o})=>{const l=g(),c={};for(const n in t){const r=n.split("-")[0];c[r]=t[n]}const d=Object.entries(c),m=async()=>{try{await j({questions:c,quizId:o}),l("/create-take-quiz-result",{state:{success:!0,message:"Take quiz created successfully!"}})}catch{l("/create-take-quiz-result",{state:{error:!0,message:"An error occurred while creating the take quiz."}})}};return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:d.map(([n,r],u)=>e.jsxs(z,{children:[e.jsxs("div",{children:[u+1,". ",n]}),typeof r=="object"?e.jsxs(w,{children:[e.jsx("div",{children:"Answer:"}),e.jsx("div",{children:r.join(", ")})]}):e.jsxs("div",{children:["Answer: ",r]})]},u))}),e.jsxs(S,{children:["Time Taken for the Quiz: ",i]}),e.jsx(v,{type:"button",onClick:m,children:"Submit"})]})},T=()=>{const t=localStorage.getItem("preview-take-quiz");return t?JSON.parse(t):null},I=()=>{const t=localStorage.getItem("take-quiz-duration");return t?JSON.parse(t):null},q=()=>{const t=localStorage.getItem("quizId");return console.log("owner",t),t?JSON.parse(t):null},P=()=>{const[t]=a.useState(T),[i]=a.useState(I),[o]=a.useState(q);return a.useEffect(()=>()=>{localStorage.removeItem("owner"),localStorage.removeItem("preview-take-quiz"),localStorage.removeItem("take-quiz-duration")},[]),console.log("PreviewTakeQuizPage "),e.jsx(h,{children:e.jsx(p,{children:t&&e.jsxs(e.Fragment,{children:[e.jsx(x,{children:"Preview Take Quiz"}),e.jsx(f,{previewTakeQuiz:t,takeQuizDuration:i,owner:o})]})})})};export{P as default};
