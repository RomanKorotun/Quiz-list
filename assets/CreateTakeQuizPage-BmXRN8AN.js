import{d as s,u as h,j as e,r as i,S as p,C as x}from"./index-BDxS8IbK.js";import{T as g}from"./TitlePage-D2C_BDv_.js";import{c as j}from"./quiz-DrvXodiZ.js";const k=s.ul`
  margin-bottom: 30px;
`,z=s.li`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`,S=s.div`
  display: flex;
  gap: 4px;
`,w=s.div`
  margin-bottom: 30px;
`,f=s.button`
  height: 35px;
`,v=({previewTakeQuiz:t,takeQuizDuration:n,owner:o})=>{const l=h(),c={};for(const a in t){const r=a.split("-")[0];c[r]=t[a]}const d=Object.entries(c),m=async()=>{try{await j({questions:c,quizId:o}),l("/create-take-quiz-result",{state:{success:!0,message:"Take quiz created successfully!"}})}catch{l("/create-take-quiz-result",{state:{error:!0,message:"An error occurred while creating the take quiz."}})}};return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:d.map(([a,r],u)=>e.jsxs(z,{children:[e.jsxs("div",{children:[u+1,". ",a]}),typeof r=="object"?e.jsxs(S,{children:[e.jsx("div",{children:"Answer:"}),e.jsx("div",{children:r.join(", ")})]}):e.jsxs("div",{children:["Answer: ",r]})]},u))}),e.jsxs(w,{children:["Time Taken for the Quiz: ",n]}),e.jsx(f,{type:"button",onClick:m,children:"Submit"})]})},T=()=>{const t=localStorage.getItem("preview-take-quiz");return t?JSON.parse(t):null},I=()=>{const t=localStorage.getItem("take-quiz-duration");return t?JSON.parse(t):null},q=()=>{const t=localStorage.getItem("owner");return t?JSON.parse(t):null},O=()=>{const[t]=i.useState(T),[n]=i.useState(I),[o]=i.useState(q);return i.useEffect(()=>()=>{localStorage.removeItem("owner"),localStorage.removeItem("preview-take-quiz"),localStorage.removeItem("take-quiz-duration")},[]),e.jsx(p,{children:e.jsx(x,{children:t&&n&&e.jsxs(e.Fragment,{children:[e.jsx(g,{children:"Preview Take Quiz"}),e.jsx(v,{previewTakeQuiz:t,takeQuizDuration:n,owner:o})]})})})};export{O as default};
