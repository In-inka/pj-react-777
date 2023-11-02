import{R as b,r as C,j as e,g as l,s as n,L as S,f as F,u as p,d as $,h as D,b as k,k as R,Q as A}from"./index-c14b35a9.js";import{D as _,S as V,t as q,C as H,a as U,b as Y,s as G,c as Q}from"./DaySwitch.styled-ec3147d1.js";import{s as x,C as J}from"./sprite-1fbabb91.js";import{d as u}from"./diarySelectors-dce7fdba.js";import{n as m}from"./emotion-styled.browser.esm-91be7a76.js";import"./createClass-5be1db1a.js";var N={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},z=b.createContext&&b.createContext(N),w=globalThis&&globalThis.__assign||function(){return w=Object.assign||function(i){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},w.apply(this,arguments)},K=globalThis&&globalThis.__rest||function(i,t){var r={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&t.indexOf(a)<0&&(r[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(i);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(i,a[s])&&(r[a[s]]=i[a[s]]);return r};function P(i){return i&&i.map(function(t,r){return b.createElement(t.tag,w({key:r},t.attr),P(t.child))})}function B(i){return function(t){return b.createElement(X,w({attr:w({},i.attr)},t),P(i.child))}}function X(i){var t=function(r){var a=i.attr,s=i.size,d=i.title,c=K(i,["attr","size","title"]),h=s||r.size||"1em",o;return r.className&&(o=r.className),i.className&&(o=(o?o+" ":"")+i.className),b.createElement("svg",w({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,c,{className:o,style:w(w({color:i.color||r.color},r.style),i.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),d&&b.createElement("title",null,d),i.children)};return z!==void 0?b.createElement(z.Consumer,null,function(r){return t(r)}):t(N)}function Z(i){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(i)}function ee(i){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"}}]})(i)}const I=({textSize:i,textWeight:t,iconColor:r,sizeArrow:a,textHeight:s,handlerDate:d,currentDate:c,birthdayDate:h})=>{const o="dd/MM/yyyy",g=C.useRef(null),f=M=>{d(M)},L=()=>{g.current&&g.current.setOpen(!0)};return e.jsxs(_,{children:[e.jsxs(V,{children:[e.jsx(q,{selected:c,onChange:f,dateFormat:o,minDate:h,customInput:e.jsx(H,{$textSize:i,$textWeight:t,$textHeight:s}),ref:g,shouldCloseOnSelect:!0}),e.jsx(U,{onClick:L,stroke:r,children:e.jsx("use",{href:`${x}#icon-calendar`})})]}),e.jsxs(Y,{children:[e.jsx(Z,{onClick:()=>{f(G(c,1))},style:{cursor:"pointer",fontSize:a?`${a}px`:"16px",color:l.bgCards,userSelect:"none"}}),e.jsx(ee,{onClick:()=>{f(Q(c,1))},style:{cursor:"pointer",fontSize:a?`${a}px`:"16px",color:l.withe,userSelect:"none"}})]})]})},ie=n.div`
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
`,ne=n.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,te=n.p`
  /* 320-375 */
  
  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,re=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,ae=n.div`
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
`,se=n.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;
  
  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1.0;
     
  }
`,de=n.div`
  /* 320-375 */
  flex: 1.2;
  color: rgb(230, 83, 60);

  @media screen and (min-width: 768px) {
    flex: ${i=>i.name==="Title"?1.3:1.2};
  }
  @media screen and (min-width: 1440px) {
  }
`,oe=n.p`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;    
  }
  @media screen and (min-width: 1440px) {
  }
`,ce=n.div`
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
`,le=n.div`
    font-size: 14px;
  @media screen and (min-width: 768px) {
    display: none;
   }
  @media screen and (min-width: 1440px) {
  }
`,xe=n.div`
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
`;const pe=n.div`
  margin-top: 10px;
  margin-left: 9px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,me=n(S)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
  
`;const he=n.button`
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
`,ge=n.ul`
  
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
`,fe=n.li`
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
`,ue=n.div`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${i=>i.value?"#419B09":"#E9101D"};
`,we=n.div`
  height: 335px;
  width: 100%;
  padding-top: 125px;
  color: ${l.title};
  font-size: 14;
  font-weight: normal; 
  line-height: 18px; 
  text-align: center;  
  
  @media screen and (min-width: 768px) {
  height: auto;
  padding-top: 55px;
  font-size: 16;
  line-height: 24px; 
  }
`,be=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;

    
    
  }
  @media screen and (min-width: 1440px) {
    
  }
`,ye=n.div`
`,je=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 182px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 220px;
  }
`,ve=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 145px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 176px;
  }
`,Te=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 37px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 55px;
  }
`,Ce=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 46px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 65px;
  }
`,E=({display:i})=>e.jsx("div",{style:{display:i,justifyContent:"center",width:"100%"},children:e.jsx(F,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"20%",visible:!0})}),W=n.svg`
  &.orange {
    stroke: ${({theme:i})=>i.acceptColor};
  }
`,ke=()=>{const i=p(u.getDiary).eatenProducts;return e.jsxs(ie,{children:[e.jsxs(ne,{children:[e.jsx(te,{children:"Products"}),e.jsxs(me,{to:"/products",children:[e.jsx(re,{children:"Add product"}),e.jsx(W,{width:16,height:16,className:"orange",children:e.jsx("use",{href:`${x}#icon-start`})})]})]}),e.jsx($e,{products:i})]})},$e=({products:i})=>{const t=$(),r=p(u.getIsLoading);return e.jsx(e.Fragment,{children:r?e.jsx(E,{display:"flex"}):i.length?e.jsxs(e.Fragment,{children:[e.jsx(De,{}),e.jsx(ge,{children:i.map(({_id:a,calories:s,amount:d,recommend:c,date:h,productId:{category:o,title:g}})=>e.jsxs(fe,{children:[e.jsx(T,{value:g,children:"Title"}),e.jsx(T,{value:o,children:"Category"}),e.jsxs(ae,{children:[e.jsxs(se,{children:[e.jsx(T,{value:s,children:"Calories"}),e.jsx(T,{value:d,children:"Weight"}),e.jsx(T,{value:c,children:"Recommend"})]}),e.jsx(he,{onClick:()=>{t(D.deleteDiaryProduct({productId:a,date:h}))},children:e.jsx(pe,{children:e.jsx(W,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-trash`})})})})]})]},a))})]}):e.jsx(Ee,{})})},T=({width:i,value:t,children:r})=>{let a=t;const s=typeof t=="boolean";s&&(a=t?"Yes":"No");let d=a;return typeof t>"u"&&(t=""),t.length>18&&(d=t.slice(0,18)+"..."),e.jsxs(de,{name:r,children:[e.jsx(oe,{children:r}),e.jsxs(ce,{width:i,children:[s&&e.jsx(ue,{value:t}),e.jsx(le,{children:a}),e.jsx(xe,{children:d})]})]})},De=()=>e.jsxs(be,{children:[e.jsx(ye,{children:"Title"}),e.jsx(je,{children:"Category"}),e.jsx(ve,{children:"Calories"}),e.jsx(Te,{children:"Weight"}),e.jsx(Ce,{children:"Recommend"})]}),Ee=()=>e.jsx(we,{children:"Not found products"}),ze=n.div`
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
`,Ie=n.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,Se=n.p`
  /* 320-375 */

  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Ne=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Pe=n.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex: 1.4;
    column-gap: 8px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    flex: 1.3;
  }
`,Be=n.div`
  display: flex;
  gap: 0;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex: 1;
    gap: 0px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
  }
`,We=n.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1;
    
  }
`,Oe=n.div`
  /* 320-375 */
  flex: 1;
  color: rgb(230, 83, 60);

  @media screen and (min-width: 768px) {
    /* flex: 1; */
    /* flex: ${i=>i.name==="Target"?1.3:1}; */
    flex: ${i=>{switch(i.name){case"Body Part":return .3;case"Equipment":return .4;case"Name":return .35;case"Target":return .8;case"Burned Calories":return .5;case"Time":return .4}}};
    @media screen and (min-width: 1440px) {
       flex: ${i=>{switch(i.name){case"Body Part":return .3;case"Equipment":return .4;case"Name":return .35;case"Target":return .6;case"Burned Calories":return .5;case"Time":return .4}}}


    };
  }
`,Le=n.div`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,Me=n.div`
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
`,Fe=n.div`
  display: flex;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,Re=n.div`
   display: none;
   font-size: 16px;
  @media screen and (min-width: 768px) {
    display: flex;
    /* display: none;
    font-size: 16px; */
  }
  @media screen and (min-width: 1440px) {
  }
`,Ae=n.div`
  font-size: 12px;
  display: none;
  @media screen and (min-width: 768px) {
    display: none;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    /* display: none; */
  }
`,_e=n.div`
  font-size: 11px;
  @media screen and (min-width: 768px) {
    /* display: flex; */
    display: flex;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`,Ve=n.div`
  margin-top: 10px;
  margin-left: 9px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,qe=n(S)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
`;const He=n.button`
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
`,Ue=n.ul`
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
`,Ye=n.li`
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
`;const Ge=n.div`
  height: 335px;
  width: 100%;
  padding-top: 125px;
  color: ${l.title};
  font-size: 14;
  font-weight: normal; 
  line-height: 18px; 
  text-align: center;  
  
  @media screen and (min-width: 768px) {
  height: auto;
  padding-top: 55px;
  font-size: 16;
  line-height: 24px; 
  }
`,Qe=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1440px) {
  }
`,Je=n.div``,Ke=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 65px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 80px;
  }
`,Xe=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 90px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 112px;
  }
`,Ze=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 100px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 115px;
  }
`,ei=n.div`
  @media screen and (min-width: 768px) {
    display: none;
    margin-left: 62px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-left: 95px;
  }
`,ii=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 77px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
    margin-left: 95px;
  }
`,ni=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 3px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 18px;
  }
`,O=n.svg`
  &.orange {
    stroke: ${({theme:i})=>i.acceptColor};
  }
`,ti=()=>{const i=p(u.getDiary).doneExercises;return e.jsxs(ze,{children:[e.jsxs(Ie,{children:[e.jsx(Se,{children:"Execrcises"}),e.jsxs(qe,{to:"/exercises/bodyParts",children:[e.jsx(Ne,{children:"Add exercise"}),e.jsx(O,{width:16,height:16,className:"orange",children:e.jsx("use",{href:`${x}#icon-start`})})]})]}),e.jsx(ri,{exercises:i})]})},ri=({exercises:i})=>{const t=$(),r=p(u.getIsLoading);return e.jsx(e.Fragment,{children:r?e.jsx(E,{display:"flex"}):i.length?e.jsxs(e.Fragment,{children:[e.jsx(ai,{}),e.jsx(Ue,{children:i.map(({burnedCalories:a,date:s,exerciseId:{bodyPart:d,equipment:c,name:h,target:o},time:g,_id:f})=>e.jsxs(Ye,{children:[e.jsxs(Pe,{children:[e.jsx(y,{value:d,children:"Body Part"}),e.jsx(y,{value:c,children:"Equipment"}),e.jsx(y,{value:h,children:"Name"})]}),e.jsxs(Be,{children:[e.jsxs(We,{children:[e.jsx(y,{value:o,children:"Target"}),e.jsx(y,{value:a,children:"Burned Calories"}),e.jsx(y,{value:g,children:"Time"})]}),e.jsx(He,{onClick:()=>{t(D.deleteDiaryExercise({exerciseId:f,date:s}))},children:e.jsx(Ve,{children:e.jsx(O,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-trash`})})})})]})]},f))})]}):e.jsx(si,{})})},y=({width:i,value:t,children:r})=>{let a=t,s=a;t.length>8&&(s=t.slice(0,8)+"...");let d=r,c=d;return r.length>10&&(c=r.slice(0,10)+"..."),e.jsxs(Oe,{name:r,children:[e.jsxs(Le,{children:[e.jsx(Ae,{children:d}),e.jsx(_e,{children:c})]}),e.jsxs(Me,{width:i,name:r,children:[e.jsx(Fe,{children:a}),e.jsx(Re,{children:s})]})]})},ai=()=>e.jsxs(Qe,{children:[e.jsx(Je,{children:"Body Part"}),e.jsx(Ke,{children:"Equipment"}),e.jsx(Xe,{children:"Name"}),e.jsx(Ze,{children:"Target"}),e.jsx(ii,{children:"Burned Calor..."}),e.jsx(ei,{children:"Burned Calories"}),e.jsx(ni,{children:"Time"})]}),si=()=>e.jsx(Ge,{children:"Not found exercises"}),di=n.div`
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
`,oi=n.div`
  height: 96px;
  padding: 14px;
  border: 1px solid ${l.bgCards};
  border-radius: 12px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 374px) {
    min-width: 118px;
    max-width: 157px;
  }
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

  ${i=>{switch(!0){case(i.title==="The rest of the calories"&&i.value<0):return`
          border-color: ${l.red};          
        `;case(i.title==="The rest of sports"&&i.value<0):return`
          border-color:${l.green};          
        `}switch(!0){case(i.title==="Daily calorie intake"||i.title==="Daily norm of sports"):return`
          background-color: ${l.acceptColor};          
        `;default:return`            
            background-color: rgb(239,237,232, 0.05);          
        `}}}
`,ci=n.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,li=n.p`
  margin-left: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  @media screen and (min-width: 375px) {
    white-space: ${i=>i.children==="The rest of the calories"?"normal":"nowrap"};
  }

  @media screen and (min-width: 768px) {
    line-height: 18px;
  }
  @media screen and (min-width: 1440px) {

  }

  ${i=>{switch(!0){case(i.children==="Daily calorie intake"||i.children==="Daily norm of sports"):return`
          color: ${l.dashboardTextAccept}
        `;default:return"color: rgb(239, 237, 232, 0.4)"}}}
`,xi=n.p`
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
`,j=n.svg`
  &.orange {
    fill: ${({theme:i})=>i.secondaryOrange};
  }
`,pi=()=>{const i=p(k.getUserMetricData).dailyIntakeCalories,t=p(k.getUserMetricData).dailyNormOfSport,r=p(u.getDiary).consumedCalories,a=p(u.getDiary).burnedCalories,s=i-r,d=t-Math.round(p(u.getDiary).sportTime/60);return e.jsxs(di,{children:[e.jsx(v,{value:i,children:"Daily calorie intake"}),e.jsx(v,{value:t,children:"Daily norm of sports"}),e.jsx(v,{value:r,children:"Calories consumed"}),e.jsx(v,{value:a,children:"Calories burned"}),e.jsx(v,{value:s,children:"The rest of the calories"}),e.jsx(v,{value:d,children:"The rest of sports"})]})},v=({value:i,children:t})=>{const r=p(u.getIsLoading);let a="",s=i;switch(t){case"Daily calorie intake":a=e.jsx(j,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-fluent_food`})});break;case"Daily norm of sports":a=e.jsx(j,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-dumbbell`})}),s=s.toString()+" min";break;case"Calories consumed":a=e.jsx(j,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-apple`})});break;case"Calories burned":a=e.jsx(j,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-calories`})});break;case"The rest of the calories":a=e.jsx(j,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-bubble`})});break;case"The rest of sports":a=e.jsx(j,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-running`})}),s=s.toString()+" min";break}return t==="The rest of the calories"&&i<0&&(s="- "+Math.abs(i).toString()),t==="The rest of sports"&&i<0&&(s="+ "+Math.abs(i).toString()+" min"),s||(s=0),e.jsxs(oi,{value:i,title:t,children:[e.jsxs(ci,{children:[a,e.jsx(li,{children:t})]}),r?e.jsx(E,{display:"block"}):e.jsxs(xi,{children:[" ",s]})]})},mi=m.div`
  ${J}
  padding-top: 106px;
  padding-bottom: 80px;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    padding-top: 136px;
  }
  @media screen and (min-width: 1440px) {
  }
`,hi=m.h2`
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
`,gi=m.div`
  display: flex;
  
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`,fi=m.div`
  @media screen and (min-width: 768px) {
    display: none;
  }  
`,ui=m.div`
  display: none;
  @media screen and (min-width: 768px) {
  display: flex;
  }
`,wi=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    height: 64px;
    margin-bottom: 32px;
    align-items: normal;
  }
`,bi=m.p`
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
`,yi=m.div`
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
`,ji=m.div`
  @media screen and (min-width: 768px) {
    order: 1;    
  }
`,vi=m.div`
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
`,Ti=m.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1440px) {
   column-gap: 32px;
  }
`,Ci=n.svg`
  &.orange {
    fill: ${({theme:i})=>i.secondaryOrange};
  }
`;function ki(i){let t=i.getDate(),r=i.getMonth()+1;const a=i.getFullYear();return t=t<10?`0${t}`:t,r=r<10?`0${r}`:r,`${t}/${r}/${a}`}const $i=()=>{A.warn("the date must be greater than your birthday",{theme:"dark"})},Bi=()=>{const i=localStorage.getItem("PowerPulsDate"),t=i?new Date(i):new Date,[r,a]=C.useState(t),s=$(),d=p(u.getDiary),{eatenProducts:c,doneExercises:h}=d,o=new Date(p(k.getUserMetricData).birthday),g=f=>{f<o?($i(),a(o)):a(f),localStorage.setItem("PowerPulsDate",f)};return C.useEffect(()=>{s(D.getDiary("?date="+ki(r)))},[s,r,c.length,h.length]),e.jsxs(mi,{children:[e.jsx(R,{}),e.jsxs(wi,{children:[e.jsx(hi,{children:"Diary"}),e.jsxs(gi,{children:[e.jsx(fi,{children:e.jsx(I,{currentDate:r,handlerDate:g,birthdayDate:o,textSize:18,textWeight:"bold",textHeight:20,sizeArrow:18,iconColor:l.secondaryOrange})}),e.jsx(ui,{children:e.jsx(I,{currentDate:r,handlerDate:g,textSize:24,textWeight:"bold",textHeight:32,sizeArrow:18,iconColor:l.secondaryOrange})})]})]}),e.jsxs(Ti,{children:[e.jsxs(ji,{children:[e.jsx(pi,{}),e.jsxs(yi,{children:[e.jsx(Di,{size:24}),e.jsx(bi,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]}),e.jsxs(vi,{children:[e.jsx(ke,{}),e.jsx(ti,{})]})]})]})},Di=({size:i})=>e.jsx("div",{style:{width:`${i}px`,height:`${i}px`},children:e.jsx(Ci,{width:i,height:i,className:"orange",children:e.jsx("use",{href:`${x}#icon-exclamation-mark`})})});export{Di as IconInfo,Bi as default};
