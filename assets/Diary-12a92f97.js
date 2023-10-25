import{R as l,r as b,j as e,s as n,L as y,g as f}from"./index-8579106d.js";import{D as T,S as $,t as z,C as D,a as I,b as N,s as B,c as P}from"./DaySwitch.styled-95cbc6a9.js";import"./createClass-c8526b12.js";var j={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},w=l.createContext&&l.createContext(j),o=globalThis&&globalThis.__assign||function(){return o=Object.assign||function(i){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])}return i},o.apply(this,arguments)},S=globalThis&&globalThis.__rest||function(i,r){var t={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&r.indexOf(a)<0&&(t[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(i);s<a.length;s++)r.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(i,a[s])&&(t[a[s]]=i[a[s]]);return t};function v(i){return i&&i.map(function(r,t){return l.createElement(r.tag,o({key:t},r.attr),v(r.child))})}function k(i){return function(r){return l.createElement(_,o({attr:o({},i.attr)},r),v(i.child))}}function _(i){var r=function(t){var a=i.attr,s=i.size,d=i.title,c=S(i,["attr","size","title"]),u=s||t.size||"1em",h;return t.className&&(h=t.className),i.className&&(h=(h?h+" ":"")+i.className),l.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:h,style:o(o({color:i.color||t.color},t.style),i.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),d&&l.createElement("title",null,d),i.children)};return w!==void 0?l.createElement(w.Consumer,null,function(t){return r(t)}):r(j)}function O(i){return k({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(i)}function L(i){return k({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"}}]})(i)}const F="/pj-react-777/assets/sprite-d844823b.svg",A=()=>{const[i,r]=b.useState(new Date),t="dd MM yyyy",a=b.useRef(null),s=()=>{a.current&&a.current.setOpen(!0)};return e.jsxs(T,{children:[e.jsxs($,{children:[e.jsx(z,{selected:i,onChange:d=>r(d),dateFormat:t,customInput:e.jsx(D,{}),ref:a}),e.jsx(I,{onClick:s,children:e.jsx("use",{href:`${F}#icon-calendar`})})]}),e.jsxs(N,{children:[e.jsx(O,{onClick:()=>r(B(i,1)),style:{cursor:"pointer",fontSize:"16px",color:"grey"}}),e.jsx(L,{onClick:()=>r(P(i,1)),style:{cursor:"pointer",fontSize:"16px",color:"white"}})]})]})},W=n.div`
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
`,q=n.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,M=n.p`
  /* 320-375 */
  
  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,H=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,R=n.div`
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
`,U=n.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;
  
  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1.0;
     
  }
`,V=n.div`
  /* 320-375 */
  flex: 1.2;
  color: rgb(230, 83, 60);

  @media screen and (min-width: 768px) {
    flex: ${i=>i.name==="Title"?1.3:1.2};
  }
  @media screen and (min-width: 1440px) {
  }
`,G=n.p`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;    
  }
  @media screen and (min-width: 1440px) {
  }
`,Y=n.div`
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
`,J=n.div`
    font-size: 14px;
  @media screen and (min-width: 768px) {
    display: none;
   }
  @media screen and (min-width: 1440px) {
  }
`,K=n.div`
    display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`,Q=n.svg`
  width: ${i=>i.size||"13px"};
  height: ${i=>i.size||"13px"};
  fill: ${i=>i.color||"#ffffff"};
  display: inline-block;
  margin-left: 9px;
`;n(Q)`
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;const X=n(y)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
  
`;const Z=n.button`
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
`,ee=n.ul`
  
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
`,ie=n.li`
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
`,ne=n.div`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${i=>i.value?"#419B09":"#E9101D"};
`,te=n.div`
  height: 335px;
  width: 100%;
  color: rgb(239,237,232,0.5);
  font-size: 14;
  display: grid;
  place-items: center;
`,re=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;

    
    
  }
  @media screen and (min-width: 1440px) {
    
  }
`,ae=n.div`
`,se=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 182px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 220px;
  }
`,de=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 145px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 176px;
  }
`,oe=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 37px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 55px;
  }
`,le=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 46px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 65px;
  }
`,ce=n.svg`
  &orange {
    fill: ${({theme:i})=>i.secondaryOrange};
    stroke: ${({theme:i})=>i.withe};
  }
`,pe=({children:i})=>e.jsxs(W,{children:[e.jsxs(q,{children:[e.jsx(M,{children:"Products"}),e.jsxs(X,{to:"/products",children:[e.jsx(H,{children:"Add product"}),e.jsx(ce,{width:16,height:16,stroke:"#E6533C",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-start"})})]})]}),C.length?e.jsx(xe,{children:i}):e.jsx(he,{})]}),xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(me,{}),e.jsx(ee,{children:C.map(({_id:{$oid:i},title:r,category:t,calories:a,weight:s,groupBloodNotAllowed:d})=>e.jsxs(ie,{children:[e.jsx(g,{value:r,children:"Title"}),e.jsx(g,{value:t,children:"Category"}),e.jsxs(R,{children:[e.jsxs(U,{children:[e.jsx(g,{value:a,children:"Calories"}),e.jsx(g,{value:s,children:"Weight"}),e.jsx(g,{value:d[1],children:"Recommend"})]}),e.jsx(Z,{onClick:()=>console.log(" del btn "),children:e.jsx("div",{style:{marginLeft:"10px",width:"20px",height:"20px",backgroundColor:"#EF8964"}})})]})]},i))})]}),g=({width:i,value:r,children:t})=>{let a=r;const s=typeof r=="boolean";s&&(a=r?"Yes":"No");let d=a;return r.length>18&&(d=r.slice(0,18)+"..."),e.jsxs(V,{name:t,children:[e.jsx(G,{children:t}),e.jsxs(Y,{width:i,children:[s&&e.jsx(ne,{value:r}),e.jsx(J,{children:a}),e.jsx(K,{children:d})]})]})},me=()=>e.jsxs(re,{children:[e.jsx(ae,{children:"Title"}),e.jsx(se,{children:"Category"}),e.jsx(de,{children:"Calories"}),e.jsx(oe,{children:"Weight"}),e.jsx(le,{children:"Recommend"})]}),he=()=>e.jsx(te,{children:"Not found products"}),C=[{_id:{$oid:"5d51694902b2373622ff5773"},weight:100,calories:340,category:"dairy",title:"Danbo cheese",groupBloodNotAllowed:{1:!0,2:!0,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b7f"},weight:100,calories:112,category:"fish",title:"marlin",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5e13"},weight:100,calories:17,category:"vegetables and herbs",title:"Salads Belaya Dacha Delicate root",groupBloodNotAllowed:{1:!0,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b6f"},weight:100,calories:160,category:"fish",title:"Cold smoked bream",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b8d"},weight:100,calories:281,category:"fish",title:"Pollock in batter",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff590d"},weight:100,calories:232,category:"meat",title:"Lamb ham",groupBloodNotAllowed:{1:!0,2:!0,3:!1,4:!0}},{_id:{$oid:"5d51694902b2373622ff5f16"},weight:100,calories:38,category:"soft drinks",title:"Pepsi",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}}],ge=n.div`
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
`,fe=n.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,ue=n.p`
  /* 320-375 */

  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,be=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,we=n.div`
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
`,ye=n.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1;
    
  }
`,je=n.div`
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
`,ve=n.div`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,ke=n.div`
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
`,Ce=n.div`
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
`,Te=n.div`
  font-size: 12px;
  display: none;
  @media screen and (min-width: 768px) {
    display: none;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    /* display: none; */
  }
`,$e=n.div`
  font-size: 11px;
  @media screen and (min-width: 768px) {
    /* display: flex; */
    display: flex;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`,ze=n.svg`
  width: ${i=>i.size||"13px"};
  height: ${i=>i.size||"13px"};
  fill: ${i=>i.color||"#ffffff"};
  display: inline-block;
  margin-left: 9px;
`;n(ze)`
  margin-top: 8px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;const De=n(y)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
`;const Ie=n.button`
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
`,Be=n.li`
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
`;const Pe=n.div`
  height: 335px;
  width: 100%;
  color: rgb(239, 237, 232, 0.5);
  font-size: 14;
  display: grid;
  place-items: center;
`,Se=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1440px) {
  }
`,_e=n.div``,Oe=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 80px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 80px;
  }
`,Le=n.div`
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
`,Ae=n.div`
  @media screen and (min-width: 768px) {
    display: none;
    margin-left: 60px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-left: 95px;
  }
`,We=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 67px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
    margin-left: 95px;
  }
`,qe=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 5px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 22px;
  }
`,Me=n.svg`
  &orange {
    fill: ${({theme:i})=>i.secondaryOrange};
    stroke: ${({theme:i})=>i.withe};
  }
`,He=({children:i})=>e.jsxs(ge,{children:[e.jsxs(fe,{children:[e.jsx(ue,{children:"Execrcises"}),e.jsxs(De,{to:"/exercises",children:[e.jsx(be,{children:"Add exercise"}),e.jsx(Me,{width:16,height:16,stroke:"#E6533C",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-start"})})]})]}),E.length?e.jsx(Re,{children:i}):e.jsx(Ve,{})]}),Re=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ue,{}),e.jsx(Ne,{children:E.map(({_id:{$oid:i},bodyPart:r,equipment:t,name:a,target:s,burnedCalories:d,time:c})=>e.jsxs(Be,{children:[e.jsx(p,{value:r,children:"Body Part"}),e.jsx(p,{value:t,children:"Equipment"}),e.jsx(p,{value:a,children:"name"}),e.jsxs(we,{children:[e.jsxs(ye,{children:[e.jsx(p,{value:s,children:"Target"}),e.jsx(p,{value:d,children:"Burned Calories"}),e.jsx(p,{value:c,children:"Time"})]}),e.jsx(Ie,{onClick:()=>console.log(" del btn "),children:e.jsx("div",{style:{marginLeft:"10px",width:"20px",height:"20px",backgroundColor:"#EF8964"}})})]})]},i))})]}),p=({width:i,value:r,children:t})=>{let a=r,s=a;r.length>10&&(s=r.slice(0,10)+"...");let d=t,c=d;return t.length>10&&(c=t.slice(0,10)+"..."),e.jsxs(je,{name:t,children:[e.jsxs(ve,{children:[e.jsx(Te,{children:d}),e.jsx($e,{children:c})]}),e.jsxs(ke,{width:i,name:t,children:[e.jsx(Ce,{children:a}),e.jsx(Ee,{children:s})]})]})},Ue=()=>e.jsxs(Se,{children:[e.jsx(_e,{children:"Body Part"}),e.jsx(Oe,{children:"Equipment"}),e.jsx(Le,{children:"Name"}),e.jsx(Fe,{children:"Target"}),e.jsx(We,{children:"Burned Calor..."}),e.jsx(Ae,{children:"Burned Calories"}),e.jsx(qe,{children:"Time"})]}),Ve=()=>e.jsx(Pe,{children:"Not found products"}),E=[{_id:{$oid:"64f2458d6f67bc34bae4f7f7"},bodyPart:"chest",equipment:"leverage machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0009.gif",name:"assisted chest dip (kneeling)",target:"pectorals",burnedCalories:329,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f801"},bodyPart:"upper arms",equipment:"leverage machine",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0019.gif",name:"assisted triceps dip (kneeling)",target:"triceps",burnedCalories:233,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f813"},bodyPart:"upper arms",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0038.gif",name:"barbell drag curl",target:"biceps",burnedCalories:84,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f7f4"},bodyPart:"waist",equipment:"body weight",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0003.gif",name:"air bike",target:"abs",burnedCalories:312,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f819"},bodyPart:"upper legs",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0044.gif",name:"barbell good morning",target:"hamstrings",burnedCalories:335,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f7fe"},bodyPart:"upper legs",equipment:"assisted",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0016.gif",name:"assisted prone hamstring",target:"hamstrings",burnedCalories:316,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f809"},bodyPart:"upper legs",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0028.gif",name:"barbell clean and press",target:"quads",burnedCalories:272,time:3},{_id:{$oid:"64f2458d6f67bc34bae4f80e"},bodyPart:"chest",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0033.gif",name:"barbell decline bench press",target:"pectorals",burnedCalories:129,time:3}],Ge=n.div`
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
`,Ye=n.div`
  height: 96px;
  padding: 14px;
  border: 1px solid ${f.bgCards};
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
          border-color: ${f.red};          
        `;case(i.title==="The rest of sports"&&i.value===30):return`
          border-color:${f.green};          
        `}switch(!0){case(i.title==="Daily calorie intake"||i.title==="Daily norm of sports"):return`
          background-color: ${f.acceptColor};          
        `;default:return`            
            background-color: rgb(239,237,232, 0.05);          
        `}}}
`,Je=n.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Ke=n.p`
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
          color: ${f.dashboardTextAccept}
        `;default:return"color: rgb(239, 237, 232, 0.4)"}}}
`,Qe=n.p`
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
`,x=n.svg`
  &orange {
    fill: ${({theme:i})=>i.secondaryOrange};
    stroke: ${({theme:i})=>i.withe};
  }
`,Xe=()=>e.jsxs(Ge,{children:[e.jsx(m,{value:2200,children:"Daily calorie intake"}),e.jsx(m,{value:110,children:"Daily norm of sports"}),e.jsx(m,{value:2300,children:"Calories consumed"}),e.jsx(m,{value:855,children:"Calories burned"}),e.jsx(m,{value:-100,children:"The rest of the calories"}),e.jsx(m,{value:30,children:"The rest of sports"})]}),m=({value:i,children:r})=>{let t="",a="",s="";switch(r==="The rest of sports"&&i===30&&(s="+"),r){case"Daily calorie intake":t=e.jsx(x,{width:20,height:20,fill:"#EF8964",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-fluent_food"})});break;case"Daily norm of sports":t=e.jsx(x,{width:20,height:20,fill:"#EF8964",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-dumbbell"})}),a=" min";break;case"Calories consumed":t=e.jsx(x,{width:20,height:20,fill:"#EF8964",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-apple"})});break;case"Calories burned":t=e.jsx(x,{width:20,height:20,fill:"#EF8964",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-calories"})});break;case"The rest of the calories":t=e.jsx(x,{width:20,height:20,fill:"#EF8964",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-bubble"})});break;case"The rest of sports":t=e.jsx(x,{width:20,height:20,fill:"#EF8964",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-running"})}),a=" min";break}return e.jsxs(Ye,{value:i,title:r,children:[e.jsxs(Je,{children:[t,e.jsx(Ke,{children:r})]}),e.jsxs(Qe,{children:[s,i,a]})]})},ni=()=>e.jsxs("div",{className:"container",children:[e.jsx("p",{children:"Diary"}),e.jsx(A,{}),e.jsx("div",{style:{paddingLeft:"50px",paddingTop:"50px"},children:e.jsx(Xe,{})}),e.jsx("div",{style:{paddingLeft:"50px",paddingTop:"50px"},children:e.jsx(pe,{})}),e.jsx("div",{style:{paddingLeft:"50px",paddingTop:"50px"},children:e.jsx(He,{})})]});export{ni as default};
