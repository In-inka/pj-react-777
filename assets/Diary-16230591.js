import{R as c,r as w,j as e,s as n,L as j,g as l}from"./index-d53395fd.js";import{D as $,S as z,t as I,C as D,a as P,b as B,s as N,c as S}from"./DaySwitch.styled-2a853ce8.js";import{n as u}from"./emotion-styled.browser.esm-a51d0c41.js";import{C as _}from"./ContainerStyled-7dc4dca2.js";import"./createClass-57adcd74.js";var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},y=c.createContext&&c.createContext(v),o=globalThis&&globalThis.__assign||function(){return o=Object.assign||function(i){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])}return i},o.apply(this,arguments)},O=globalThis&&globalThis.__rest||function(i,r){var t={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&r.indexOf(a)<0&&(t[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(i);s<a.length;s++)r.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(i,a[s])&&(t[a[s]]=i[a[s]]);return t};function k(i){return i&&i.map(function(r,t){return c.createElement(r.tag,o({key:t},r.attr),k(r.child))})}function C(i){return function(r){return c.createElement(L,o({attr:o({},i.attr)},r),k(i.child))}}function L(i){var r=function(t){var a=i.attr,s=i.size,d=i.title,p=O(i,["attr","size","title"]),b=s||t.size||"1em",g;return t.className&&(g=t.className),i.className&&(g=(g?g+" ":"")+i.className),c.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,p,{className:g,style:o(o({color:i.color||t.color},t.style),i.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),d&&c.createElement("title",null,d),i.children)};return y!==void 0?c.createElement(y.Consumer,null,function(t){return r(t)}):r(v)}function F(i){return C({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(i)}function W(i){return C({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"}}]})(i)}const A="/pj-react-777/assets/sprite-d844823b.svg",q=()=>{const[i,r]=w.useState(new Date),t="dd MM yyyy",a=w.useRef(null),s=()=>{a.current&&a.current.setOpen(!0)};return e.jsxs($,{children:[e.jsxs(z,{children:[e.jsx(I,{selected:i,onChange:d=>r(d),dateFormat:t,customInput:e.jsx(D,{}),ref:a}),e.jsx(P,{onClick:s,children:e.jsx("use",{href:`${A}#icon-calendar`})})]}),e.jsxs(B,{children:[e.jsx(F,{onClick:()=>r(N(i,1)),style:{cursor:"pointer",fontSize:"16px",color:"grey"}}),e.jsx(W,{onClick:()=>r(S(i,1)),style:{cursor:"pointer",fontSize:"16px",color:"white"}})]})]})},M=n.div`
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
`,R=n.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,H=n.p`
  /* 320-375 */
  
  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,U=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,V=n.div`
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
`,G=n.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;
  
  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1.0;
     
  }
`,Y=n.div`
  /* 320-375 */
  flex: 1.2;
  color: rgb(230, 83, 60);

  @media screen and (min-width: 768px) {
    flex: ${i=>i.name==="Title"?1.3:1.2};
  }
  @media screen and (min-width: 1440px) {
  }
`,J=n.p`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;    
  }
  @media screen and (min-width: 1440px) {
  }
`,K=n.div`
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
`,Q=n.div`
    font-size: 14px;
  @media screen and (min-width: 768px) {
    display: none;
   }
  @media screen and (min-width: 1440px) {
  }
`,X=n.div`
    display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`,Z=n.svg`
  width: ${i=>i.size||"13px"};
  height: ${i=>i.size||"13px"};
  fill: ${i=>i.color||"#ffffff"};
  display: inline-block;
  margin-left: 9px;
`;n(Z)`
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;const ee=n(j)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
  
`;const ie=n.button`
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
`,ne=n.ul`
  
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
`,te=n.li`
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
`,re=n.div`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${i=>i.value?"#419B09":"#E9101D"};
`,ae=n.div`
  height: 335px;
  width: 100%;
  color: rgb(239,237,232,0.5);
  font-size: 14;
  display: grid;
  place-items: center;
`,se=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;

    
    
  }
  @media screen and (min-width: 1440px) {
    
  }
`,de=n.div`
`,oe=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 182px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 220px;
  }
`,le=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 145px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 176px;
  }
`,ce=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 37px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 55px;
  }
`,pe=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 46px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 65px;
  }
`,xe=n.svg`
  &orange {
    fill: ${({theme:i})=>i.secondaryOrange};
    stroke: ${({theme:i})=>i.withe};
  }
`,me=({children:i})=>e.jsxs(M,{children:[e.jsxs(R,{children:[e.jsx(H,{children:"Products"}),e.jsxs(ee,{to:"/products",children:[e.jsx(U,{children:"Add product"}),e.jsx(xe,{width:16,height:16,stroke:"#E6533C",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-start"})})]})]}),T.length?e.jsx(he,{children:i}):e.jsx(fe,{})]}),he=()=>e.jsxs(e.Fragment,{children:[e.jsx(ge,{}),e.jsx(ne,{children:T.map(({_id:{$oid:i},title:r,category:t,calories:a,weight:s,groupBloodNotAllowed:d})=>e.jsxs(te,{children:[e.jsx(f,{value:r,children:"Title"}),e.jsx(f,{value:t,children:"Category"}),e.jsxs(V,{children:[e.jsxs(G,{children:[e.jsx(f,{value:a,children:"Calories"}),e.jsx(f,{value:s,children:"Weight"}),e.jsx(f,{value:d[1],children:"Recommend"})]}),e.jsx(ie,{onClick:()=>console.log(" del btn "),children:e.jsx("div",{style:{marginLeft:"10px",width:"20px",height:"20px",backgroundColor:"#EF8964"}})})]})]},i))})]}),f=({width:i,value:r,children:t})=>{let a=r;const s=typeof r=="boolean";s&&(a=r?"Yes":"No");let d=a;return r.length>18&&(d=r.slice(0,18)+"..."),e.jsxs(Y,{name:t,children:[e.jsx(J,{children:t}),e.jsxs(K,{width:i,children:[s&&e.jsx(re,{value:r}),e.jsx(Q,{children:a}),e.jsx(X,{children:d})]})]})},ge=()=>e.jsxs(se,{children:[e.jsx(de,{children:"Title"}),e.jsx(oe,{children:"Category"}),e.jsx(le,{children:"Calories"}),e.jsx(ce,{children:"Weight"}),e.jsx(pe,{children:"Recommend"})]}),fe=()=>e.jsx(ae,{children:"Not found products"}),T=[{_id:{$oid:"5d51694902b2373622ff5773"},weight:100,calories:340,category:"dairy",title:"Danbo cheese",groupBloodNotAllowed:{1:!0,2:!0,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b7f"},weight:100,calories:112,category:"fish",title:"marlin",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5e13"},weight:100,calories:17,category:"vegetables and herbs",title:"Salads Belaya Dacha Delicate root",groupBloodNotAllowed:{1:!0,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b6f"},weight:100,calories:160,category:"fish",title:"Cold smoked bream",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b8d"},weight:100,calories:281,category:"fish",title:"Pollock in batter",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff590d"},weight:100,calories:232,category:"meat",title:"Lamb ham",groupBloodNotAllowed:{1:!0,2:!0,3:!1,4:!0}},{_id:{$oid:"5d51694902b2373622ff5f16"},weight:100,calories:38,category:"soft drinks",title:"Pepsi",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}}],ue=n.div`
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
`,be=n.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,we=n.p`
  /* 320-375 */

  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,ye=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,je=n.div`
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
`,ve=n.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1;
    
  }
`,ke=n.div`
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
`,Ce=n.div`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,Te=n.div`
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
`,Ee=n.div`
  display: flex;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,$e=n.div`
   display: none;
   font-size: 16px;
  @media screen and (min-width: 768px) {
    display: flex;
    /* display: none;
    font-size: 16px; */
  }
  @media screen and (min-width: 1440px) {
  }
`,ze=n.div`
  font-size: 12px;
  display: none;
  @media screen and (min-width: 768px) {
    display: none;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    /* display: none; */
  }
`,Ie=n.div`
  font-size: 11px;
  @media screen and (min-width: 768px) {
    /* display: flex; */
    display: flex;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`,De=n.svg`
  width: ${i=>i.size||"13px"};
  height: ${i=>i.size||"13px"};
  fill: ${i=>i.color||"#ffffff"};
  display: inline-block;
  margin-left: 9px;
`;n(De)`
  margin-top: 8px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;const Pe=n(j)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
`;const Be=n.button`
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
`,Ne=n.ul`
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
`,Se=n.li`
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
`;const _e=n.div`
  height: 335px;
  width: 100%;
  color: rgb(239, 237, 232, 0.5);
  font-size: 14;
  display: grid;
  place-items: center;
`,Oe=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1440px) {
  }
`,Le=n.div``,Fe=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 80px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 80px;
  }
`,We=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 75px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 100px;
  }
`,Ae=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 100px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 130px;
  }
`,qe=n.div`
  @media screen and (min-width: 768px) {
    display: none;
    margin-left: 60px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-left: 95px;
  }
`,Me=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 67px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
    margin-left: 95px;
  }
`,Re=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 5px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 22px;
  }
`,He=n.svg`
  &orange {
    fill: ${({theme:i})=>i.secondaryOrange};
    stroke: ${({theme:i})=>i.withe};
  }
`,Ue=({children:i})=>e.jsxs(ue,{children:[e.jsxs(be,{children:[e.jsx(we,{children:"Execrcises"}),e.jsxs(Pe,{to:"/exercises",children:[e.jsx(ye,{children:"Add exercise"}),e.jsx(He,{width:16,height:16,stroke:"#E6533C",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-start"})})]})]}),E.length?e.jsx(Ve,{children:i}):e.jsx(Ye,{})]}),Ve=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ge,{}),e.jsx(Ne,{children:E.map(({_id:{$oid:i},bodyPart:r,equipment:t,name:a,target:s,burnedCalories:d,time:p})=>e.jsxs(Se,{children:[e.jsx(x,{value:r,children:"Body Part"}),e.jsx(x,{value:t,children:"Equipment"}),e.jsx(x,{value:a,children:"name"}),e.jsxs(je,{children:[e.jsxs(ve,{children:[e.jsx(x,{value:s,children:"Target"}),e.jsx(x,{value:d,children:"Burned Calories"}),e.jsx(x,{value:p,children:"Time"})]}),e.jsx(Be,{onClick:()=>console.log(" del btn "),children:e.jsx("div",{style:{marginLeft:"10px",width:"20px",height:"20px",backgroundColor:"#EF8964"}})})]})]},i))})]}),x=({width:i,value:r,children:t})=>{let a=r,s=a;r.length>10&&(s=r.slice(0,10)+"...");let d=t,p=d;return t.length>10&&(p=t.slice(0,10)+"..."),e.jsxs(ke,{name:t,children:[e.jsxs(Ce,{children:[e.jsx(ze,{children:d}),e.jsx(Ie,{children:p})]}),e.jsxs(Te,{width:i,name:t,children:[e.jsx(Ee,{children:a}),e.jsx($e,{children:s})]})]})},Ge=()=>e.jsxs(Oe,{children:[e.jsx(Le,{children:"Body Part"}),e.jsx(Fe,{children:"Equipment"}),e.jsx(We,{children:"Name"}),e.jsx(Ae,{children:"Target"}),e.jsx(Me,{children:"Burned Calor..."}),e.jsx(qe,{children:"Burned Calories"}),e.jsx(Re,{children:"Time"})]}),Ye=()=>e.jsx(_e,{children:"Not found products"}),E=[{_id:{$oid:"64f2458d6f67bc34bae4f7f7"},bodyPart:"chest",equipment:"leverage machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0009.gif",name:"assisted chest dip (kneeling)",target:"pectorals",burnedCalories:329,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f801"},bodyPart:"upper arms",equipment:"leverage machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0019.gif",name:"assisted triceps dip (kneeling)",target:"triceps",burnedCalories:233,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f813"},bodyPart:"upper arms",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0038.gif",name:"barbell drag curl",target:"biceps",burnedCalories:84,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f7f4"},bodyPart:"waist",equipment:"body weight",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0003.gif",name:"air bike",target:"abs",burnedCalories:312,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f819"},bodyPart:"upper legs",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0044.gif",name:"barbell good morning",target:"hamstrings",burnedCalories:335,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f7fe"},bodyPart:"upper legs",equipment:"assisted",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0016.gif",name:"assisted prone hamstring",target:"hamstrings",burnedCalories:316,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f809"},bodyPart:"upper legs",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0028.gif",name:"barbell clean and press",target:"quads",burnedCalories:272,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f80e"},bodyPart:"chest",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0033.gif",name:"barbell decline bench press",target:"pectorals",burnedCalories:129,time:3}],Je=n.div`
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
`,Ke=n.div`
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
`,Qe=n.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Xe=n.p`
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
`,Ze=n.p`
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
`,m=n.svg`
  &orange {
    fill: ${({theme:i})=>i.secondaryOrange};
    stroke: ${({theme:i})=>i.withe};
  }
`,ei=()=>e.jsxs(Je,{children:[e.jsx(h,{value:2200,children:"Daily calorie intake"}),e.jsx(h,{value:110,children:"Daily norm of sports"}),e.jsx(h,{value:2300,children:"Calories consumed"}),e.jsx(h,{value:855,children:"Calories burned"}),e.jsx(h,{value:-100,children:"The rest of the calories"}),e.jsx(h,{value:30,children:"The rest of sports"})]}),h=({value:i,children:r})=>{let t="",a="",s="";switch(r==="The rest of sports"&&i===30&&(s="+"),r){case"Daily calorie intake":t=e.jsx(m,{width:20,height:20,fill:"#EF8964",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-fluent_food"})});break;case"Daily norm of sports":t=e.jsx(m,{width:20,height:20,fill:"#EF8964",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-dumbbell"})}),a=" min";break;case"Calories consumed":t=e.jsx(m,{width:20,height:20,fill:"#EF8964",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-apple"})});break;case"Calories burned":t=e.jsx(m,{width:20,height:20,fill:"#EF8964",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-calories"})});break;case"The rest of the calories":t=e.jsx(m,{width:20,height:20,fill:"#EF8964",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-bubble"})});break;case"The rest of sports":t=e.jsx(m,{width:20,height:20,fill:"#EF8964",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-running"})}),a=" min";break}return e.jsxs(Ke,{value:i,title:r,children:[e.jsxs(Qe,{children:[t,e.jsx(Xe,{children:r})]}),e.jsxs(Ze,{children:[s,i,a]})]})},ii=u.div`
  ${_}
  margin-top: 61px;
  padding-top: 40px;
  padding-bottom: 80px;

  /* background-color: #482c01; */

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,ni=u.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.17;
  color: ${l.withe};

  /* @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 1.38;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  } */
`,ti=u.div`
display: flex;
justify-content: space-between;
margin-bottom: 40px;
`,ri=u.p`
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 14px;
  font-style: normal ;
  line-height: 18px;
  color: ${l.title};
`,ci=()=>e.jsxs(ii,{children:[e.jsxs(ti,{children:[e.jsx(ni,{children:"Dairy"}),e.jsx(q,{})]}),e.jsx(ei,{}),e.jsx(ri,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."}),e.jsx(me,{}),e.jsx(Ue,{})]});export{ci as default};
