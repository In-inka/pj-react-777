import{R as p,r as y,j as e,s as n,L as v,g as c}from"./index-87b8429a.js";import{D as z,S as N,t as I,C as D,a as P,b as B,s as S,c as _}from"./DaySwitch.styled-c57cb53f.js";import{s as o}from"./sprite-85692b3f.js";import{n as b}from"./emotion-styled.browser.esm-ca420e0f.js";import{C as O}from"./ContainerStyled-bb0b3bf9.js";var C={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},j=p.createContext&&p.createContext(C),l=globalThis&&globalThis.__assign||function(){return l=Object.assign||function(i){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])}return i},l.apply(this,arguments)},L=globalThis&&globalThis.__rest||function(i,r){var t={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&r.indexOf(a)<0&&(t[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(i);s<a.length;s++)r.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(i,a[s])&&(t[a[s]]=i[a[s]]);return t};function k(i){return i&&i.map(function(r,t){return p.createElement(r.tag,l({key:t},r.attr),k(r.child))})}function T(i){return function(r){return p.createElement(W,l({attr:l({},i.attr)},r),k(i.child))}}function W(i){var r=function(t){var a=i.attr,s=i.size,d=i.title,x=L(i,["attr","size","title"]),w=s||t.size||"1em",f;return t.className&&(f=t.className),i.className&&(f=(f?f+" ":"")+i.className),p.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,x,{className:f,style:l(l({color:i.color||t.color},t.style),i.style),height:w,width:w,xmlns:"http://www.w3.org/2000/svg"}),d&&p.createElement("title",null,d),i.children)};return j!==void 0?p.createElement(j.Consumer,null,function(t){return r(t)}):r(C)}function A(i){return T({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(i)}function q(i){return T({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"}}]})(i)}const F=()=>{const[i,r]=y.useState(new Date),t="dd MM yyyy",a=y.useRef(null),s=()=>{a.current&&a.current.setOpen(!0)};return e.jsxs(z,{children:[e.jsxs(N,{children:[e.jsx(I,{selected:i,onChange:d=>r(d),dateFormat:t,customInput:e.jsx(D,{}),ref:a}),e.jsx(P,{onClick:s,children:e.jsx("use",{href:`${o}#icon-calendar`})})]}),e.jsxs(B,{children:[e.jsx(A,{onClick:()=>r(S(i,1)),style:{cursor:"pointer",fontSize:"16px",color:"grey"}}),e.jsx(q,{onClick:()=>r(_(i,1)),style:{cursor:"pointer",fontSize:"16px",color:"white"}})]})]})},M=n.div`
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
`,U=n.p`
  /* 320-375 */
  
  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,V=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,G=n.div`
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
`,Y=n.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;
  
  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1.0;
     
  }
`,H=n.div`
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
`;const ee=n(v)`
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
  &.orange {
    stroke: ${({theme:i})=>i.acceptColor};
  }
`,me=({children:i})=>e.jsxs(M,{children:[e.jsxs(R,{children:[e.jsx(U,{children:"Products"}),e.jsxs(ee,{to:"/products",children:[e.jsx(V,{children:"Add product"}),e.jsx(xe,{width:16,height:16,className:"orange",children:e.jsx("use",{href:`${o}#icon-start`})})]})]}),$.length?e.jsx(he,{children:i}):e.jsx(fe,{})]}),he=()=>e.jsxs(e.Fragment,{children:[e.jsx(ge,{}),e.jsx(ne,{children:$.map(({_id:{$oid:i},title:r,category:t,calories:a,weight:s,groupBloodNotAllowed:d})=>e.jsxs(te,{children:[e.jsx(u,{value:r,children:"Title"}),e.jsx(u,{value:t,children:"Category"}),e.jsxs(G,{children:[e.jsxs(Y,{children:[e.jsx(u,{value:a,children:"Calories"}),e.jsx(u,{value:s,children:"Weight"}),e.jsx(u,{value:d[1],children:"Recommend"})]}),e.jsx(ie,{onClick:()=>console.log(" del btn "),children:e.jsx("div",{style:{marginLeft:"10px",width:"20px",height:"20px",backgroundColor:"#EF8964"}})})]})]},i))})]}),u=({width:i,value:r,children:t})=>{let a=r;const s=typeof r=="boolean";s&&(a=r?"Yes":"No");let d=a;return r.length>18&&(d=r.slice(0,18)+"..."),e.jsxs(H,{name:t,children:[e.jsx(J,{children:t}),e.jsxs(K,{width:i,children:[s&&e.jsx(re,{value:r}),e.jsx(Q,{children:a}),e.jsx(X,{children:d})]})]})},ge=()=>e.jsxs(se,{children:[e.jsx(de,{children:"Title"}),e.jsx(oe,{children:"Category"}),e.jsx(le,{children:"Calories"}),e.jsx(ce,{children:"Weight"}),e.jsx(pe,{children:"Recommend"})]}),fe=()=>e.jsx(ae,{children:"Not found products"}),$=[{_id:{$oid:"5d51694902b2373622ff5773"},weight:100,calories:340,category:"dairy",title:"Danbo cheese",groupBloodNotAllowed:{1:!0,2:!0,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b7f"},weight:100,calories:112,category:"fish",title:"marlin",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5e13"},weight:100,calories:17,category:"vegetables and herbs",title:"Salads Belaya Dacha Delicate root",groupBloodNotAllowed:{1:!0,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b6f"},weight:100,calories:160,category:"fish",title:"Cold smoked bream",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b8d"},weight:100,calories:281,category:"fish",title:"Pollock in batter",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff590d"},weight:100,calories:232,category:"meat",title:"Lamb ham",groupBloodNotAllowed:{1:!0,2:!0,3:!1,4:!0}},{_id:{$oid:"5d51694902b2373622ff5f16"},weight:100,calories:38,category:"soft drinks",title:"Pepsi",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}}],ue=n.div`
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
`,Ce=n.div`
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
`,ke=n.div`
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
`,$e=n.div`
  display: flex;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,Ee=n.div`
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
`,Ne=n.div`
  font-size: 11px;
  @media screen and (min-width: 768px) {
    /* display: flex; */
    display: flex;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`,Ie=n.svg`
  width: ${i=>i.size||"13px"};
  height: ${i=>i.size||"13px"};
  fill: ${i=>i.color||"#ffffff"};
  display: inline-block;
  margin-left: 9px;
`;n(Ie)`
  margin-top: 8px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;const De=n(v)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
`;const Pe=n.button`
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
`,Be=n.ul`
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
`,Le=n.div``,We=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 80px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 80px;
  }
`,Ae=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 75px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 100px;
  }
`,qe=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 100px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 130px;
  }
`,Fe=n.div`
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
`,Ue=n.svg`
  &.orange {
    stroke: ${({theme:i})=>i.acceptColor};
  }
`,Ve=({children:i})=>e.jsxs(ue,{children:[e.jsxs(be,{children:[e.jsx(we,{children:"Execrcises"}),e.jsxs(De,{to:"/exercises",children:[e.jsx(ye,{children:"Add exercise"}),e.jsx(Ue,{width:16,height:16,className:"orange",children:e.jsx("use",{href:`${o}#icon-start`})})]})]}),E.length?e.jsx(Ge,{children:i}):e.jsx(He,{})]}),Ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ye,{}),e.jsx(Be,{children:E.map(({_id:{$oid:i},bodyPart:r,equipment:t,name:a,target:s,burnedCalories:d,time:x})=>e.jsxs(Se,{children:[e.jsx(m,{value:r,children:"Body Part"}),e.jsx(m,{value:t,children:"Equipment"}),e.jsx(m,{value:a,children:"name"}),e.jsxs(je,{children:[e.jsxs(ve,{children:[e.jsx(m,{value:s,children:"Target"}),e.jsx(m,{value:d,children:"Burned Calories"}),e.jsx(m,{value:x,children:"Time"})]}),e.jsx(Pe,{onClick:()=>console.log(" del btn "),children:e.jsx("div",{style:{marginLeft:"10px",width:"20px",height:"20px",backgroundColor:"#EF8964"}})})]})]},i))})]}),m=({width:i,value:r,children:t})=>{let a=r,s=a;r.length>10&&(s=r.slice(0,10)+"...");let d=t,x=d;return t.length>10&&(x=t.slice(0,10)+"..."),e.jsxs(Ce,{name:t,children:[e.jsxs(ke,{children:[e.jsx(ze,{children:d}),e.jsx(Ne,{children:x})]}),e.jsxs(Te,{width:i,name:t,children:[e.jsx($e,{children:a}),e.jsx(Ee,{children:s})]})]})},Ye=()=>e.jsxs(Oe,{children:[e.jsx(Le,{children:"Body Part"}),e.jsx(We,{children:"Equipment"}),e.jsx(Ae,{children:"Name"}),e.jsx(qe,{children:"Target"}),e.jsx(Me,{children:"Burned Calor..."}),e.jsx(Fe,{children:"Burned Calories"}),e.jsx(Re,{children:"Time"})]}),He=()=>e.jsx(_e,{children:"Not found products"}),E=[{_id:{$oid:"64f2458d6f67bc34bae4f7f7"},bodyPart:"chest",equipment:"leverage machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0009.gif",name:"assisted chest dip (kneeling)",target:"pectorals",burnedCalories:329,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f801"},bodyPart:"upper arms",equipment:"leverage machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0019.gif",name:"assisted triceps dip (kneeling)",target:"triceps",burnedCalories:233,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f813"},bodyPart:"upper arms",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0038.gif",name:"barbell drag curl",target:"biceps",burnedCalories:84,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f7f4"},bodyPart:"waist",equipment:"body weight",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0003.gif",name:"air bike",target:"abs",burnedCalories:312,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f819"},bodyPart:"upper legs",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0044.gif",name:"barbell good morning",target:"hamstrings",burnedCalories:335,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f7fe"},bodyPart:"upper legs",equipment:"assisted",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0016.gif",name:"assisted prone hamstring",target:"hamstrings",burnedCalories:316,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f809"},bodyPart:"upper legs",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0028.gif",name:"barbell clean and press",target:"quads",burnedCalories:272,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f80e"},bodyPart:"chest",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0033.gif",name:"barbell decline bench press",target:"pectorals",burnedCalories:129,time:3}],Je=n.div`
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
  border: 1px solid ${c.bgCards};
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
          border-color: ${c.red};          
        `;case(i.title==="The rest of sports"&&i.value===30):return`
          border-color:${c.green};          
        `}switch(!0){case(i.title==="Daily calorie intake"||i.title==="Daily norm of sports"):return`
          background-color: ${c.acceptColor};          
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
          color: ${c.dashboardTextAccept}
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
`,h=n.svg`
  &.orange {
    fill: ${({theme:i})=>i.secondaryOrange};
  }
`,ei=()=>e.jsxs(Je,{children:[e.jsx(g,{value:2200,children:"Daily calorie intake"}),e.jsx(g,{value:110,children:"Daily norm of sports"}),e.jsx(g,{value:2300,children:"Calories consumed"}),e.jsx(g,{value:855,children:"Calories burned"}),e.jsx(g,{value:-100,children:"The rest of the calories"}),e.jsx(g,{value:30,children:"The rest of sports"})]}),g=({value:i,children:r})=>{let t="",a="",s="";switch(r==="The rest of sports"&&i===30&&(s="+"),r){case"Daily calorie intake":t=e.jsx(h,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${o}#icon-fluent_food`})});break;case"Daily norm of sports":t=e.jsx(h,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${o}#icon-dumbbell`})}),a=" min";break;case"Calories consumed":t=e.jsx(h,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${o}#icon-apple`})});break;case"Calories burned":t=e.jsx(h,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${o}#icon-calories`})});break;case"The rest of the calories":t=e.jsx(h,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${o}#icon-bubble`})});break;case"The rest of sports":t=e.jsx(h,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${o}#icon-running`})}),a=" min";break}return e.jsxs(Ke,{value:i,title:r,children:[e.jsxs(Qe,{children:[t,e.jsx(Xe,{children:r})]}),e.jsxs(Ze,{children:[s,i,a]})]})},ii=b.div`
  ${O}
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
`,ni=b.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.17;
  color: ${c.withe};

  /* @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 1.38;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  } */
`,ti=b.div`
display: flex;
justify-content: space-between;
margin-bottom: 40px;
`,ri=b.p`
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 14px;
  font-style: normal ;
  line-height: 18px;
  color: ${c.title};
`,ci=()=>e.jsxs(ii,{children:[e.jsxs(ti,{children:[e.jsx(ni,{children:"Dairy"}),e.jsx(F,{})]}),e.jsx(ei,{}),e.jsx(ri,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."}),e.jsx(me,{}),e.jsx(Ve,{})]});export{ci as default};
