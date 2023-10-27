import{R as h,r as y,j as e,g as l,s as n,L as C}from"./index-42eecfdf.js";import{D as B,S as P,t as _,C as W,a as O,b as L,s as A,c as q}from"./DaySwitch.styled-9600f301.js";import{s as o}from"./sprite-e23f1a49.js";import{n as c}from"./emotion-styled.browser.esm-6d0e720e.js";import{C as M}from"./ContainerStyled-bb0b3bf9.js";import"./createClass-0fdb6aea.js";var $={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},j=h.createContext&&h.createContext($),m=globalThis&&globalThis.__assign||function(){return m=Object.assign||function(i){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])}return i},m.apply(this,arguments)},R=globalThis&&globalThis.__rest||function(i,r){var t={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&r.indexOf(a)<0&&(t[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(i);s<a.length;s++)r.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(i,a[s])&&(t[a[s]]=i[a[s]]);return t};function k(i){return i&&i.map(function(r,t){return h.createElement(r.tag,m({key:t},r.attr),k(r.child))})}function T(i){return function(r){return h.createElement(F,m({attr:m({},i.attr)},r),k(i.child))}}function F(i){var r=function(t){var a=i.attr,s=i.size,d=i.title,x=R(i,["attr","size","title"]),w=s||t.size||"1em",p;return t.className&&(p=t.className),i.className&&(p=(p?p+" ":"")+i.className),h.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,x,{className:p,style:m(m({color:i.color||t.color},t.style),i.style),height:w,width:w,xmlns:"http://www.w3.org/2000/svg"}),d&&h.createElement("title",null,d),i.children)};return j!==void 0?h.createElement(j.Consumer,null,function(t){return r(t)}):r($)}function U(i){return T({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(i)}function V(i){return T({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"}}]})(i)}const v=({textSize:i,textWeight:r,iconColor:t,sizeArrow:a,textHeight:s})=>{const[d,x]=y.useState(new Date),w="dd/MM/yyyy",p=y.useRef(null),I=()=>{p.current&&p.current.setOpen(!0)};return e.jsxs(B,{children:[e.jsxs(P,{children:[e.jsx(_,{selected:d,onChange:S=>x(S),dateFormat:w,customInput:e.jsx(W,{$textSize:i,$textWeight:r,$textHeight:s}),ref:p}),e.jsx(O,{onClick:I,stroke:t,children:e.jsx("use",{href:`${o}#icon-calendar`})})]}),e.jsxs(L,{children:[e.jsx(U,{onClick:()=>x(A(d,1)),style:{cursor:"pointer",fontSize:a?`${a}px`:"16px",color:l.bgCards}}),e.jsx(V,{onClick:()=>x(q(d,1)),style:{cursor:"pointer",fontSize:a?`${a}px`:"16px",color:l.withe}})]})]})},H=n.div`
  /* 320-375 */
  box-sizing: border-box;
  max-height: 824px;
  width: 335px;
  padding: 16px;
  padding-right: 8px;
  border: 1px solid rgb(239, 237, 235, 0.2);
  border-radius: 12px;
  background-color: rgb(239, 237, 235, 0.05);
  font-size: 12px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 234px;
    padding-top: 19px;
  }
  @media screen and (min-width: 1440px) {
    width: 826px;
    height: 234px;
  }
`,G=n.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,Y=n.p`
  /* 320-375 */
  
  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,J=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,K=n.div`
  display: flex;
  gap: 0;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex: 1.8;
    gap: 0px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
  }
`,Q=n.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;
  
  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1.0;
     
  }
`,X=n.div`
  /* 320-375 */
  flex: 1.2;
  color: rgb(230, 83, 60);

  @media screen and (min-width: 768px) {
    flex: ${i=>i.name==="Title"?1.3:1.2};
  }
  @media screen and (min-width: 1440px) {
  }
`,Z=n.p`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;    
  }
  @media screen and (min-width: 1440px) {
  }
`,ee=n.div`
  /* 320-375 */

  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 8px 14px;
  font-size: 16px;
  color: rgb(239, 237, 232);
  max-width: ${i=>i.width||"100%"};
  height: ${i=>i.height||"auto"};
  border: 1px solid rgb(239, 237, 235, 0.2);
  border-radius: 12px;
  background-color: rgb(239, 237, 235, 0.05);

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding: 8px 14px;
  }
  @media screen and (min-width: 1440px) {
    
  }
`,ie=n.div`
    font-size: 14px;
  @media screen and (min-width: 768px) {
    display: none;
   }
  @media screen and (min-width: 1440px) {
  }
`,ne=n.div`
    display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`;n.svg`
  width: ${i=>i.size||"13px"};
  height: ${i=>i.size||"13px"};
  fill: ${i=>i.color||"#ffffff"};
  display: inline-block;
  margin-left: 9px;
`;const te=n.div`
  margin-top: 10px;
  margin-left: 9px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,re=n(C)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
  
`;const ae=n.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    height: fit-content;
    
  }
`,se=n.ul`
  
  box-sizing: border-box;

  max-height: 755px;
  overflow-y: auto;
  padding-right: 8px;
  padding-bottom: 16px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(239, 237, 232, 0.1);
    border-radius: 12px;
    height: 90px;
  }

  @media screen and (min-width: 768px) {
    max-height: 130px;
    
  }
  @media screen and (min-width: 1440px) {
  }
`,de=n.li`
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1440px) {
  }
`,oe=n.div`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${i=>i.value?"#419B09":"#E9101D"};
`,le=n.div`
  height: 335px;
  width: 100%;
  color: rgb(239,237,232,0.5);
  font-size: 14;
  display: grid;
  place-items: center;
`,ce=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;

    
    
  }
  @media screen and (min-width: 1440px) {
    
  }
`,xe=n.div`
`,pe=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 182px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 220px;
  }
`,me=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 145px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 176px;
  }
`,he=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 37px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 55px;
  }
`,ge=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 46px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 65px;
  }
`,E=n.svg`
  &.orange {
    stroke: ${({theme:i})=>i.acceptColor};
  }
`,fe=({children:i})=>e.jsxs(H,{children:[e.jsxs(G,{children:[e.jsx(Y,{children:"Products"}),e.jsxs(re,{to:"/products",children:[e.jsx(J,{children:"Add product"}),e.jsx(E,{width:16,height:16,className:"orange",children:e.jsx("use",{href:`${o}#icon-start`})})]})]}),z.length?e.jsx(ue,{children:i}):e.jsx(we,{})]}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(be,{}),e.jsx(se,{children:z.map(({_id:{$oid:i},title:r,category:t,calories:a,weight:s,groupBloodNotAllowed:d})=>e.jsxs(de,{children:[e.jsx(b,{value:r,children:"Title"}),e.jsx(b,{value:t,children:"Category"}),e.jsxs(K,{children:[e.jsxs(Q,{children:[e.jsx(b,{value:a,children:"Calories"}),e.jsx(b,{value:s,children:"Weight"}),e.jsx(b,{value:d[1],children:"Recommend"})]}),e.jsx(ae,{onClick:()=>console.log(" del btn "),children:e.jsx(te,{children:e.jsx(E,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${o}#icon-trash`})})})})]})]},i))})]}),b=({width:i,value:r,children:t})=>{let a=r;const s=typeof r=="boolean";s&&(a=r?"Yes":"No");let d=a;return r.length>18&&(d=r.slice(0,18)+"..."),e.jsxs(X,{name:t,children:[e.jsx(Z,{children:t}),e.jsxs(ee,{width:i,children:[s&&e.jsx(oe,{value:r}),e.jsx(ie,{children:a}),e.jsx(ne,{children:d})]})]})},be=()=>e.jsxs(ce,{children:[e.jsx(xe,{children:"Title"}),e.jsx(pe,{children:"Category"}),e.jsx(me,{children:"Calories"}),e.jsx(he,{children:"Weight"}),e.jsx(ge,{children:"Recommend"})]}),we=()=>e.jsx(le,{children:"Not found products"}),z=[{_id:{$oid:"5d51694902b2373622ff5773"},weight:100,calories:340,category:"dairy",title:"Danbo cheese",groupBloodNotAllowed:{1:!0,2:!0,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b7f"},weight:100,calories:112,category:"fish",title:"marlin",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5e13"},weight:100,calories:17,category:"vegetables and herbs",title:"Salads Belaya Dacha Delicate root",groupBloodNotAllowed:{1:!0,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b6f"},weight:100,calories:160,category:"fish",title:"Cold smoked bream",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b8d"},weight:100,calories:281,category:"fish",title:"Pollock in batter",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff590d"},weight:100,calories:232,category:"meat",title:"Lamb ham",groupBloodNotAllowed:{1:!0,2:!0,3:!1,4:!0}},{_id:{$oid:"5d51694902b2373622ff5f16"},weight:100,calories:38,category:"soft drinks",title:"Pepsi",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}}],ye=n.div`
  /* 320-375 */
  box-sizing: border-box;
  max-height: 824px;
  width: 335px;
  padding: 16px;
  padding-right: 8px;
  border: 1px solid rgb(239, 237, 235, 0.2);
  border-radius: 12px;
  background-color: rgb(239, 237, 235, 0.05);
  font-size: 12px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 234px;
    padding-top: 19px;
  }
  @media screen and (min-width: 1440px) {
    width: 826px;
    height: 234px;
  }
`,je=n.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,ve=n.p`
  /* 320-375 */

  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Ce=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,$e=n.div`
  display: flex;
  gap: 0;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex: 2.2;
    gap: 0px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
  }
`,ke=n.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1;
    
  }
`,Te=n.div`
  /* 320-375 */
  flex: 1;
  color: rgb(230, 83, 60);

  @media screen and (min-width: 768px) {
    /* flex: 1; */
    /* flex: ${i=>i.name==="Target"?1.3:1}; */
    flex: ${i=>{switch(i.name){case"Time":return .55;case"Burned Calories":return .8;case"Name":return .8}}};
  }
  @media screen and (min-width: 1440px) {
    flex: ${i=>{switch(i.name){case"Body Part":return .8}}};
  }
`,Ee=n.div`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,ze=n.div`
  /* 320-375 */

  display: flex;
  
  align-items: center;
  margin-bottom: 16px;
  padding: 8px 14px;
  font-size: 16px;
  color: rgb(239, 237, 232);
  max-width: ${i=>i.width||"100%"};
  height: ${i=>i.height||"auto"};
  border: 1px solid rgb(239, 237, 235, 0.2);
  border-radius: 12px;
  background-color: rgb(239, 237, 235, 0.05);

  @media screen and (min-width: 768px) {
    flex:1;
    margin-bottom: 0;
    padding: 8px 14px;
  }
  @media screen and (min-width: 1440px) {
  }
`,Ne=n.div`
  display: flex;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,De=n.div`
   display: none;
   font-size: 16px;
  @media screen and (min-width: 768px) {
    display: flex;
    /* display: none;
    font-size: 16px; */
  }
  @media screen and (min-width: 1440px) {
  }
`,Ie=n.div`
  font-size: 12px;
  display: none;
  @media screen and (min-width: 768px) {
    display: none;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    /* display: none; */
  }
`,Se=n.div`
  font-size: 11px;
  @media screen and (min-width: 768px) {
    /* display: flex; */
    display: flex;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`,Be=n.div`
  margin-top: 10px;
  margin-left: 9px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,Pe=n(C)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
`;const _e=n.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    height: fit-content;
  }
`,We=n.ul`
  box-sizing: border-box;

  max-height: 755px;
  overflow-y: auto;
  padding-right: 8px;
  padding-bottom: 16px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(239, 237, 232, 0.1);
    border-radius: 12px;
    height: 90px;
  }

  @media screen and (min-width: 768px) {
    max-height: 130px;
  }
  @media screen and (min-width: 1440px) {
  }
`,Oe=n.li`
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1440px) {
  }
`;n.div`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${i=>i.value?"#419B09":"#E9101D"};
`;const Le=n.div`
  height: 335px;
  width: 100%;
  color: rgb(239, 237, 232, 0.5);
  font-size: 14;
  display: grid;
  place-items: center;
`,Ae=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1440px) {
  }
`,qe=n.div``,Me=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 80px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 80px;
  }
`,Re=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 75px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 100px;
  }
`,Fe=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 100px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 130px;
  }
`,Ue=n.div`
  @media screen and (min-width: 768px) {
    display: none;
    margin-left: 60px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-left: 95px;
  }
`,Ve=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 67px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
    margin-left: 95px;
  }
`,He=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 5px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 22px;
  }
`,N=n.svg`
  &.orange {
    stroke: ${({theme:i})=>i.acceptColor};
  }
`,Ge=({children:i})=>e.jsxs(ye,{children:[e.jsxs(je,{children:[e.jsx(ve,{children:"Execrcises"}),e.jsxs(Pe,{to:"/exercises",children:[e.jsx(Ce,{children:"Add exercise"}),e.jsx(N,{width:16,height:16,className:"orange",children:e.jsx("use",{href:`${o}#icon-start`})})]})]}),D.length?e.jsx(Ye,{children:i}):e.jsx(Ke,{})]}),Ye=()=>e.jsxs(e.Fragment,{children:[e.jsx(Je,{}),e.jsx(We,{children:D.map(({_id:{$oid:i},bodyPart:r,equipment:t,name:a,target:s,burnedCalories:d,time:x})=>e.jsxs(Oe,{children:[e.jsx(g,{value:r,children:"Body Part"}),e.jsx(g,{value:t,children:"Equipment"}),e.jsx(g,{value:a,children:"name"}),e.jsxs($e,{children:[e.jsxs(ke,{children:[e.jsx(g,{value:s,children:"Target"}),e.jsx(g,{value:d,children:"Burned Calories"}),e.jsx(g,{value:x,children:"Time"})]}),e.jsx(_e,{onClick:()=>console.log(" del btn "),children:e.jsx(Be,{children:e.jsx(N,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${o}#icon-trash`})})})})]})]},i))})]}),g=({width:i,value:r,children:t})=>{let a=r,s=a;r.length>10&&(s=r.slice(0,10)+"...");let d=t,x=d;return t.length>10&&(x=t.slice(0,10)+"..."),e.jsxs(Te,{name:t,children:[e.jsxs(Ee,{children:[e.jsx(Ie,{children:d}),e.jsx(Se,{children:x})]}),e.jsxs(ze,{width:i,name:t,children:[e.jsx(Ne,{children:a}),e.jsx(De,{children:s})]})]})},Je=()=>e.jsxs(Ae,{children:[e.jsx(qe,{children:"Body Part"}),e.jsx(Me,{children:"Equipment"}),e.jsx(Re,{children:"Name"}),e.jsx(Fe,{children:"Target"}),e.jsx(Ve,{children:"Burned Calor..."}),e.jsx(Ue,{children:"Burned Calories"}),e.jsx(He,{children:"Time"})]}),Ke=()=>e.jsx(Le,{children:"Not found products"}),D=[{_id:{$oid:"64f2458d6f67bc34bae4f7f7"},bodyPart:"chest",equipment:"leverage machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0009.gif",name:"assisted chest dip (kneeling)",target:"pectorals",burnedCalories:329,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f801"},bodyPart:"upper arms",equipment:"leverage machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0019.gif",name:"assisted triceps dip (kneeling)",target:"triceps",burnedCalories:233,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f813"},bodyPart:"upper arms",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0038.gif",name:"barbell drag curl",target:"biceps",burnedCalories:84,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f7f4"},bodyPart:"waist",equipment:"body weight",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0003.gif",name:"air bike",target:"abs",burnedCalories:312,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f819"},bodyPart:"upper legs",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0044.gif",name:"barbell good morning",target:"hamstrings",burnedCalories:335,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f7fe"},bodyPart:"upper legs",equipment:"assisted",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0016.gif",name:"assisted prone hamstring",target:"hamstrings",burnedCalories:316,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f809"},bodyPart:"upper legs",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0028.gif",name:"barbell clean and press",target:"quads",burnedCalories:272,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f80e"},bodyPart:"chest",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0033.gif",name:"barbell decline bench press",target:"pectorals",burnedCalories:129,time:3}],Qe=n.div`
  display: flex;
  max-width: 335px;
  justify-content: space-between;
  flex-wrap: wrap;

  column-gap: 13px;
  row-gap: 20px;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    max-width: 593px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 390px;
    gap: 16px 16px;
  }
`,Xe=n.div`
  height: 96px;
  padding: 14px;
  border: 1px solid ${l.bgCards};
  border-radius: 12px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    &:nth-child(odd) {
      width: 157px;
    }
    &:nth-child(even) {
      width: 165px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
    order: ${i=>{switch(i.title){case"Daily calorie intake":return 0;case"Daily norm of sports":return 3;case"Calories consumed":return 1;case"Calories burned":return 4;case"The rest of the calories":return 2;case"The rest of sports":return 5}}};
  }
  @media screen and (min-width: 1440px) {
    order: 0;
  }

  ${i=>{switch(!0){case(i.title==="The rest of the calories"&&i.value===-100):return`
          border-color: ${l.red};          
        `;case(i.title==="The rest of sports"&&i.value===30):return`
          border-color:${l.green};          
        `}switch(!0){case(i.title==="Daily calorie intake"||i.title==="Daily norm of sports"):return`
          background-color: ${l.acceptColor};          
        `;default:return`            
            background-color: rgb(239,237,232, 0.05);          
        `}}}
`,Ze=n.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,ei=n.p`
  margin-left: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  white-space: ${i=>i.children==="The rest of the calories"?"normal":"nowrap"};

  @media screen and (min-width: 768px) {
    line-height: 18px;
  }
  @media screen and (min-width: 1440px) {

  }

  ${i=>{switch(!0){case(i.children==="Daily calorie intake"||i.children==="Daily norm of sports"):return`
          color: ${l.dashboardTextAccept}
        `;default:return"color: rgb(239, 237, 232, 0.4)"}}}
`,ii=n.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #efede8;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
  @media screen and (min-width: 1440px) {
  }
`,f=n.svg`
  &.orange {
    fill: ${({theme:i})=>i.secondaryOrange};
  }
`,ni=()=>e.jsxs(Qe,{children:[e.jsx(u,{value:2200,children:"Daily calorie intake"}),e.jsx(u,{value:110,children:"Daily norm of sports"}),e.jsx(u,{value:2300,children:"Calories consumed"}),e.jsx(u,{value:855,children:"Calories burned"}),e.jsx(u,{value:-100,children:"The rest of the calories"}),e.jsx(u,{value:30,children:"The rest of sports"})]}),u=({value:i,children:r})=>{let t="",a="",s="";switch(r==="The rest of sports"&&i===30&&(s="+"),r){case"Daily calorie intake":t=e.jsx(f,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${o}#icon-fluent_food`})});break;case"Daily norm of sports":t=e.jsx(f,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${o}#icon-dumbbell`})}),a=" min";break;case"Calories consumed":t=e.jsx(f,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${o}#icon-apple`})});break;case"Calories burned":t=e.jsx(f,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${o}#icon-calories`})});break;case"The rest of the calories":t=e.jsx(f,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${o}#icon-bubble`})});break;case"The rest of sports":t=e.jsx(f,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${o}#icon-running`})}),a=" min";break}return e.jsxs(Xe,{value:i,title:r,children:[e.jsxs(Ze,{children:[t,e.jsx(ei,{children:r})]}),e.jsxs(ii,{children:[s,i,a]})]})},ti=c.div`
  ${M}
  margin-top: 61px;
  padding-top: 40px;
  padding-bottom: 80px;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,ri=c.h2`
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  color: ${l.withe};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 44px;
    display: flex;
    align-items: end;
  }
`,ai=c.div`
  display: flex;
  
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`,si=c.div`
  @media screen and (min-width: 768px) {
    display: none;
  }  
`,di=c.div`
  display: none;
  @media screen and (min-width: 768px) {
  display: flex;
  }
`,oi=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    height: 64px;
    margin-bottom: 32px;
    align-items: normal;
  }
`,li=c.p`
  /* font-family: Roboto, sans-serif; */
  margin-left: 8px;
  font-size: 14px;
  font-style: normal;
  line-height: 18px;
  letter-spacing: 0;
  color: ${l.title};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,ci=c.div`
  max-width: 335px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    max-width: 593px;
    margin-top: 32px;
    margin-bottom: 64px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 390px;
  }
`,xi=c.div`
  @media screen and (min-width: 768px) {
    order: 1;    
  }
`,pi=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 62px;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 826px;
    margin: 0;
  }
`,mi=c.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1440px) {
   column-gap: 32px;
  }
`,hi=n.svg`
  &.orange {
    fill: ${({theme:i})=>i.secondaryOrange};
  }
`,vi=()=>e.jsxs(ti,{children:[e.jsxs(oi,{children:[e.jsx(ri,{children:"Diary"}),e.jsxs(ai,{children:[e.jsx(si,{children:e.jsx(v,{textSize:18,textWeight:"bold",textHeight:20,sizeArrow:18,iconColor:l.secondaryOrange})}),e.jsx(di,{children:e.jsx(v,{textSize:24,textWeight:"bold",textHeight:32,sizeArrow:18,iconColor:l.secondaryOrange})})]})]}),e.jsxs(mi,{children:[e.jsxs(xi,{children:[e.jsx(ni,{}),e.jsxs(ci,{children:[e.jsx(gi,{size:24}),e.jsx(li,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]}),e.jsxs(pi,{children:[e.jsx(fe,{}),e.jsx(Ge,{})]})]})]}),gi=({size:i})=>e.jsx("div",{style:{width:`${i}px`,height:`${i}px`},children:e.jsx(hi,{width:i,height:i,className:"orange",children:e.jsx("use",{href:`${o}#icon-exclamation-mark`})})});export{gi as IconInfo,vi as default};
