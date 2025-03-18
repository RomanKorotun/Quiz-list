import{R as l,d as a,r as x,u as O,j as i,S as y,C as w,L as P}from"./index-CAIwYpWY.js";import{g as C,d as z}from"./quiz-TtYzVCQU.js";import{T as E}from"./TitlePage-DOk0bin3.js";var h={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=l.createContext&&l.createContext(h),S=["attr","size","title"];function _(t,e){if(t==null)return{};var n=N(t,e),r,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)r=c[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function N(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function p(){return p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},p.apply(this,arguments)}function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?g(Object(n),!0).forEach(function(r){Q(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Q(t,e,n){return e=D(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function D(t){var e=k(t,"string");return typeof e=="symbol"?e:e+""}function k(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function j(t){return t&&t.map((e,n)=>l.createElement(e.tag,f({key:n},e.attr),j(e.child)))}function I(t){return e=>l.createElement(R,p({attr:f({},t.attr)},e),j(t.child))}function R(t){var e=n=>{var{attr:r,size:o,title:c}=t,u=_(t,S),d=o||n.size||"1em",s;return n.className&&(s=n.className),t.className&&(s=(s?s+" ":"")+t.className),l.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,u,{className:s,style:f(f({color:t.color||n.color},n.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),t.children)};return b!==void 0?l.createElement(b.Consumer,null,n=>e(n)):e(h)}function L(t){return I({attr:{viewBox:"0 0 192 512"},child:[{tag:"path",attr:{d:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"},child:[]}]})(t)}const T=a.div`
  position: relative;
  border: 1px solid #dee2df;
  padding: 10px;
`,W=a.div`
  font-weight: 600;
  margin-bottom: 10px;
`,B=a.div`
  margin-bottom: 50px;
  font-size: 13px;
`,V=a.div`
  font-size: 13px;
  color: #3f75bc;
  margin-bottom: 10px;
`,M=a.div`
  font-size: 13px;
  color: #3f75bc;
`,$=a.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`,A=a.div`
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
`,F=({quiz:t,quizDelete:e})=>{const[n,r]=x.useState(!1),o=O(),c=s=>{o(`/take-quiz/${s}`)},u=s=>{o(`/update-quiz/${s}`)},d=s=>{e(s),r(v=>!v)};return i.jsxs(T,{children:[i.jsx(W,{children:t.name}),i.jsx(B,{children:t.description}),i.jsxs(V,{children:["Questions: ",t.questionsCount]}),i.jsxs(M,{children:["Number of submissions: ",t.count]}),i.jsx($,{onClick:()=>r(s=>!s),children:i.jsx(L,{})}),n&&i.jsxs(A,{children:[i.jsx(m,{onClick:()=>c(t._id),children:"Run"}),i.jsx(m,{onClick:()=>u(t._id),children:"Edit"}),i.jsx(m,{onClick:()=>d(t._id),children:"Delete"})]})]})},G=a.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`,K=a.li`
  flex-basis: calc((100% - 30px * 2) / 3);
`,U=({quizList:t,quizDelete:e})=>i.jsx(G,{children:t.map((n,r)=>i.jsx(K,{children:i.jsx(F,{quiz:n,quizDelete:e})},r))}),Y=()=>{const[t,e]=x.useState(null),n=async r=>{try{const{data:o}=await z(r);e(c=>c.filter(u=>u._id!==o._id))}catch(o){console.log(o)}};return x.useEffect(()=>{(async()=>{try{const{data:o}=await C();e(o)}catch(o){console.log(o)}})()},[]),i.jsx(y,{children:i.jsxs(w,{children:[i.jsx(E,{children:"Quizzes"}),(t==null?void 0:t.length)>0&&i.jsx(U,{quizList:t,quizDelete:n}),(t==null?void 0:t.length)===0&&i.jsxs("div",{children:["Квізів не знайдено... Щоб стоврити квіт перейденть на ",i.jsx(P,{to:"/create-quiz",children:"сторінку створення квіза!"})]})]})})};export{Y as default};
