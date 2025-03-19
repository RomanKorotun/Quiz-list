import{R as l,d as a,r as x,u as y,j as i,S as O,C as w,L as P}from"./index-mwKOVFtY.js";import{g as C,d as z}from"./quiz-4uUA3HIg.js";import{T as E}from"./TitlePage-CAOL2aQT.js";import{L as S}from"./Loader-DNLx1fXB.js";var b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g=l.createContext&&l.createContext(b),_=["attr","size","title"];function N(t,e){if(t==null)return{};var n=Q(t,e),r,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)r=c[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Q(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function p(){return p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},p.apply(this,arguments)}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?h(Object(n),!0).forEach(function(r){D(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function D(t,e,n){return e=k(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function k(t){var e=I(t,"string");return typeof e=="symbol"?e:e+""}function I(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function j(t){return t&&t.map((e,n)=>l.createElement(e.tag,f({key:n},e.attr),j(e.child)))}function L(t){return e=>l.createElement(R,p({attr:f({},t.attr)},e),j(t.child))}function R(t){var e=n=>{var{attr:r,size:o,title:c}=t,d=N(t,_),u=o||n.size||"1em",s;return n.className&&(s=n.className),t.className&&(s=(s?s+" ":"")+t.className),l.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,d,{className:s,style:f(f({color:t.color||n.color},n.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),t.children)};return g!==void 0?l.createElement(g.Consumer,null,n=>e(n)):e(b)}function T(t){return L({attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"},child:[]}]})(t)}const W=a.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border: 1px solid #dee2df;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 10px;
  height: 100%;
`,B=a.div`
  font-weight: 600;
  margin-bottom: 10px;
`,V=a.div`
  font-size: 13px;
`,M=a.div`
  font-size: 13px;
  color: #3f75bc;
  margin-bottom: 10px;
`,$=a.div`
  font-size: 13px;
  color: #3f75bc;
`,A=a.button`
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 6px;
`,F=a.div`
  border: 1px solid #dee2df;
  padding: 13px;
  font-size: 13px;
  background-color: #e5e7e9;
  position: absolute;
  top: 40px;
  right: -20px;
`,m=a.div`
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`,G=({quiz:t,quizDelete:e})=>{const[n,r]=x.useState(!1),o=y(),c=s=>{o(`/create-take-quiz/${s}`)},d=s=>{o(`/update-quiz/${s}`)},u=s=>{e(s),r(v=>!v)};return i.jsxs(W,{children:[i.jsxs("div",{children:[i.jsx(B,{children:t.name}),i.jsx(V,{children:t.description})]}),i.jsxs("div",{children:[i.jsxs(M,{children:["Questions: ",t.questionsCount]}),i.jsxs($,{children:["Number of submissions: ",t.count]})]}),i.jsx(A,{onClick:()=>r(s=>!s),children:i.jsx(T,{})}),n&&i.jsxs(F,{children:[i.jsx(m,{onClick:()=>c(t._id),children:"Run"}),i.jsx(m,{onClick:()=>d(t._id),children:"Edit"}),i.jsx(m,{onClick:()=>u(t._id),children:"Delete"})]})]})},K=a.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`,U=a.li`
  flex-basis: calc((100% - 30px * 2) / 3);
  min-height: 170px;
`,H=({quizList:t,quizDelete:e})=>i.jsx(K,{children:t.map((n,r)=>i.jsx(U,{children:i.jsx(G,{quiz:n,quizDelete:e})},r))}),q=()=>{const[t,e]=x.useState(null),n=async r=>{try{const{data:o}=await z(r);e(c=>c.filter(d=>d._id!==o._id))}catch(o){console.log(o)}};return x.useEffect(()=>{(async()=>{try{const{data:o}=await C();e(o)}catch(o){console.log(o)}})()},[]),i.jsx(O,{children:i.jsxs(w,{children:[!t&&i.jsx(S,{}),t&&i.jsx(E,{children:"Quizzes"}),(t==null?void 0:t.length)>0&&i.jsx(H,{quizList:t,quizDelete:n}),(t==null?void 0:t.length)===0&&i.jsxs("div",{children:["Квізів не знайдено... Щоб стоврити квіт перейденть на ",i.jsx(P,{to:"/create-quiz",children:"сторінку створення квіза!"})]})]})})};export{q as default};
