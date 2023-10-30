import{R as u,r as C,j as e,g as l,s as n,L as I,u as h,d as k,e as $,b as E}from"./index-94a13a7e.js";import{D as L,S as M,t as F,C as R,a as A,b as _,s as V,c as q}from"./DaySwitch.styled-606ceca3.js";import{s as x,C as H}from"./sprite-a86c3207.js";import{n as p}from"./emotion-styled.browser.esm-5a0767e5.js";import"./createClass-e4ce5c00.js";var S={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},D=u.createContext&&u.createContext(S),g=globalThis&&globalThis.__assign||function(){return g=Object.assign||function(i){for(var a,t=1,r=arguments.length;t<r;t++){a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(i[s]=a[s])}return i},g.apply(this,arguments)},U=globalThis&&globalThis.__rest||function(i,a){var t={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&a.indexOf(r)<0&&(t[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(i);s<r.length;s++)a.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(i,r[s])&&(t[r[s]]=i[r[s]]);return t};function N(i){return i&&i.map(function(a,t){return u.createElement(a.tag,g({key:t},a.attr),N(a.child))})}function B(i){return function(a){return u.createElement(Y,g({attr:g({},i.attr)},a),N(i.child))}}function Y(i){var a=function(t){var r=i.attr,s=i.size,d=i.title,o=U(i,["attr","size","title"]),m=s||t.size||"1em",c;return t.className&&(c=t.className),i.className&&(c=(c?c+" ":"")+i.className),u.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,o,{className:c,style:g(g({color:i.color||t.color},t.style),i.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),d&&u.createElement("title",null,d),i.children)};return D!==void 0?u.createElement(D.Consumer,null,function(t){return a(t)}):a(S)}function G(i){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(i)}function J(i){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"}}]})(i)}const z=({textSize:i,textWeight:a,iconColor:t,sizeArrow:r,textHeight:s,handlerDate:d,currentDate:o})=>{const m="dd/MM/yyyy",c=C.useRef(null),f=T=>{d(T)},O=()=>{c.current&&c.current.setOpen(!0)};return e.jsxs(L,{children:[e.jsxs(M,{children:[e.jsx(F,{selected:o,onChange:f,dateFormat:m,customInput:e.jsx(R,{onChange:T=>console.log(T),$textSize:i,$textWeight:a,$textHeight:s}),ref:c,shouldCloseOnSelect:!0}),e.jsx(A,{onClick:O,stroke:t,children:e.jsx("use",{href:`${x}#icon-calendar`})})]}),e.jsxs(_,{children:[e.jsx(G,{onClick:()=>{f(V(o,1))},style:{cursor:"pointer",fontSize:r?`${r}px`:"16px",color:l.bgCards,userSelect:"none"}}),e.jsx(J,{onClick:()=>{f(q(o,1))},style:{cursor:"pointer",fontSize:r?`${r}px`:"16px",color:l.withe,userSelect:"none"}})]})]})},K=n.div`
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
`,Q=n.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,X=n.p`
  /* 320-375 */
  
  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Z=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,ee=n.div`
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
`,ie=n.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;
  
  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1.0;
     
  }
`,ne=n.div`
  /* 320-375 */
  flex: 1.2;
  color: rgb(230, 83, 60);

  @media screen and (min-width: 768px) {
    flex: ${i=>i.name==="Title"?1.3:1.2};
  }
  @media screen and (min-width: 1440px) {
  }
`,te=n.p`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;    
  }
  @media screen and (min-width: 1440px) {
  }
`,re=n.div`
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
`,ae=n.div`
    font-size: 14px;
  @media screen and (min-width: 768px) {
    display: none;
   }
  @media screen and (min-width: 1440px) {
  }
`,se=n.div`
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
`;const de=n.div`
  margin-top: 10px;
  margin-left: 9px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,oe=n(I)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
  
`;const ce=n.button`
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
`,le=n.ul`
  
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
`,xe=n.li`
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
`,pe=n.div`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${i=>i.value?"#419B09":"#E9101D"};
`,me=n.div`
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
`,he=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;

    
    
  }
  @media screen and (min-width: 1440px) {
    
  }
`,ge=n.div`
`,ue=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 182px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 220px;
  }
`,fe=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 145px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 176px;
  }
`,we=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 37px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 55px;
  }
`,be=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 46px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 65px;
  }
`,ye=i=>i.diary.data,je=i=>i.diary.isLoading,ve=i=>i.diary.error,j={getDiary:ye,getIsLoading:je,getIsError:ve},P=n.svg`
  &.orange {
    stroke: ${({theme:i})=>i.acceptColor};
  }
`,Te=()=>{const i=h(j.getDiary).eatenProducts;return e.jsxs(K,{children:[e.jsxs(Q,{children:[e.jsx(X,{children:"Products"}),e.jsxs(oe,{to:"/products",children:[e.jsx(Z,{children:"Add product"}),e.jsx(P,{width:16,height:16,className:"orange",children:e.jsx("use",{href:`${x}#icon-start`})})]})]}),i.length?e.jsx(Ce,{products:i}):e.jsx($e,{})]})},Ce=({products:i})=>{const a=k();return e.jsxs(e.Fragment,{children:[e.jsx(ke,{}),e.jsx(le,{children:i.map(({_id:t,calories:r,amount:s,recommend:d,date:o,productId:{category:m,title:c}})=>e.jsxs(xe,{children:[e.jsx(v,{value:c,children:"Title"}),e.jsx(v,{value:m,children:"Category"}),e.jsxs(ee,{children:[e.jsxs(ie,{children:[e.jsx(v,{value:r,children:"Calories"}),e.jsx(v,{value:s,children:"Weight"}),e.jsx(v,{value:d,children:"Recommend"})]}),e.jsx(ce,{onClick:()=>{a($.deleteDiaryProduct({productId:t,date:o}))},children:e.jsx(de,{children:e.jsx(P,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-trash`})})})})]})]},t))})]})},v=({width:i,value:a,children:t})=>{let r=a;const s=typeof a=="boolean";s&&(r=a?"Yes":"No");let d=r;return a.length>18&&(d=a.slice(0,18)+"..."),e.jsxs(ne,{name:t,children:[e.jsx(te,{children:t}),e.jsxs(re,{width:i,children:[s&&e.jsx(pe,{value:a}),e.jsx(ae,{children:r}),e.jsx(se,{children:d})]})]})},ke=()=>e.jsxs(he,{children:[e.jsx(ge,{children:"Title"}),e.jsx(ue,{children:"Category"}),e.jsx(fe,{children:"Calories"}),e.jsx(we,{children:"Weight"}),e.jsx(be,{children:"Recommend"})]}),$e=()=>e.jsx(me,{children:"Not found products"}),Ee=n.div`
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
`,De=n.div`
  /* 320-375 */
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  padding-right: 8px;
  
  
  @media screen and (min-width: 768px) {
        
  }
  @media screen and (min-width: 1440px) {
  }
`,ze=n.p`
  /* 320-375 */

  color: rgb(239, 237, 232, 0.5);
  margin: 0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Ie=n.p`
  /* 320-375 */
  font-size: 14px;
  color: rgb(230, 83, 60);
  margin: 0;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Se=n.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex: 1.4;
    column-gap: 8px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    flex: 1.3;
  }
`,Ne=n.div`
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
`,Be=n.div`
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    flex: 1;
    
  }
`,Pe=n.div`
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
`,We=n.div`
  /* 320-375 */
  font-size: 12px;
  color: rgb(239, 137, 100);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,Oe=n.div`
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
`,Le=n.div`
  display: flex;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
  }
`,Me=n.div`
   display: none;
   font-size: 16px;
  @media screen and (min-width: 768px) {
    display: flex;
    /* display: none;
    font-size: 16px; */
  }
  @media screen and (min-width: 1440px) {
  }
`,Fe=n.div`
  font-size: 12px;
  display: none;
  @media screen and (min-width: 768px) {
    display: none;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    /* display: none; */
  }
`,Re=n.div`
  font-size: 11px;
  @media screen and (min-width: 768px) {
    /* display: flex; */
    display: flex;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`,Ae=n.div`
  margin-top: 10px;
  margin-left: 9px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`,_e=n(I)`
   display: flex;
   align-items: center;
   color: rgb(230, 83, 60);
 `;n.div`
  display: flex;
  flex-wrap: nowrap;
`;const Ve=n.button`
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
`,qe=n.ul`
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
`,He=n.li`
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
`;const Ue=n.div`
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
`,Ye=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 12px;
    color: rgb(239, 137, 100);
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1440px) {
  }
`,Ge=n.div``,Je=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 65px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 80px;
  }
`,Ke=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 90px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 112px;
  }
`,Qe=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 100px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 115px;
  }
`,Xe=n.div`
  @media screen and (min-width: 768px) {
    display: none;
    margin-left: 62px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-left: 95px;
  }
`,Ze=n.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 67px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
    margin-left: 95px;
  }
`,ei=n.div`
  @media screen and (min-width: 768px) {
    margin-left: 3px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 18px;
  }
`,W=n.svg`
  &.orange {
    stroke: ${({theme:i})=>i.acceptColor};
  }
`,ii=()=>{const i=h(j.getDiary).doneExercises;return e.jsxs(Ee,{children:[e.jsxs(De,{children:[e.jsx(ze,{children:"Execrcises"}),e.jsxs(_e,{to:"/exercises/bodyParts",children:[e.jsx(Ie,{children:"Add exercise"}),e.jsx(W,{width:16,height:16,className:"orange",children:e.jsx("use",{href:`${x}#icon-start`})})]})]}),i.length?e.jsx(ni,{exercises:i}):e.jsx(ri,{})]})},ni=({exercises:i})=>{const a=k();return e.jsxs(e.Fragment,{children:[e.jsx(ti,{}),e.jsx(qe,{children:i.map(({burnedCalories:t,date:r,exerciseId:{bodyPart:s,equipment:d,name:o,target:m},time:c,_id:f})=>e.jsxs(He,{children:[e.jsxs(Se,{children:[e.jsx(w,{value:s,children:"Body Part"}),e.jsx(w,{value:d,children:"Equipment"}),e.jsx(w,{value:o,children:"Name"})]}),e.jsxs(Ne,{children:[e.jsxs(Be,{children:[e.jsx(w,{value:m,children:"Target"}),e.jsx(w,{value:t,children:"Burned Calories"}),e.jsx(w,{value:c,children:"Time"})]}),e.jsx(Ve,{onClick:()=>{a($.deleteDiaryExercise({exerciseId:f,date:r}))},children:e.jsx(Ae,{children:e.jsx(W,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-trash`})})})})]})]},f))})]})},w=({width:i,value:a,children:t})=>{let r=a,s=r;a.length>10&&(s=a.slice(0,10)+"...");let d=t,o=d;return t.length>10&&(o=t.slice(0,10)+"..."),e.jsxs(Pe,{name:t,children:[e.jsxs(We,{children:[e.jsx(Fe,{children:d}),e.jsx(Re,{children:o})]}),e.jsxs(Oe,{width:i,name:t,children:[e.jsx(Le,{children:r}),e.jsx(Me,{children:s})]})]})},ti=()=>e.jsxs(Ye,{children:[e.jsx(Ge,{children:"Body Part"}),e.jsx(Je,{children:"Equipment"}),e.jsx(Ke,{children:"Name"}),e.jsx(Qe,{children:"Target"}),e.jsx(Ze,{children:"Burned Calor..."}),e.jsx(Xe,{children:"Burned Calories"}),e.jsx(ei,{children:"Time"})]}),ri=()=>e.jsx(Ue,{children:"Not found exercises"}),ai=n.div`
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
`,si=n.div`
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
`,di=n.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,oi=n.p`
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
`,ci=n.p`
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
`,b=n.svg`
  &.orange {
    fill: ${({theme:i})=>i.secondaryOrange};
  }
`,li=()=>{const i=h(E.getUserMetricData).dailyIntakeCalories,a=h(E.getUserMetricData).dailyNormOfSport,t=h(j.getDiary).consumedCalories,r=h(j.getDiary).burnedCalories,s=i-t,d=a-h(j.getDiary).sportTime;return e.jsxs(ai,{children:[e.jsx(y,{value:i,children:"Daily calorie intake"}),e.jsx(y,{value:a,children:"Daily norm of sports"}),e.jsx(y,{value:t,children:"Calories consumed"}),e.jsx(y,{value:r,children:"Calories burned"}),e.jsx(y,{value:s,children:"The rest of the calories"}),e.jsx(y,{value:d,children:"The rest of sports"})]})},y=({value:i,children:a})=>{let t="",r=i;switch(a){case"Daily calorie intake":t=e.jsx(b,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-fluent_food`})});break;case"Daily norm of sports":t=e.jsx(b,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-dumbbell`})}),r=r.toString()+" min";break;case"Calories consumed":t=e.jsx(b,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-apple`})});break;case"Calories burned":t=e.jsx(b,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-calories`})});break;case"The rest of the calories":t=e.jsx(b,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-bubble`})});break;case"The rest of sports":t=e.jsx(b,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-running`})}),r=r.toString()+" min";break}return a==="The rest of sports"&&i<0&&(console.log(i),r="+ "+Math.abs(i).toString()+" min"),r||(r=0),e.jsxs(si,{value:i,title:a,children:[e.jsxs(di,{children:[t,e.jsx(oi,{children:a})]}),e.jsxs(ci,{children:[" ",r]})]})},xi=p.div`
  ${H}
  margin-top: 61px;
  padding-top: 40px;
  padding-bottom: 80px;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,pi=p.h2`
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
`,mi=p.div`
  display: flex;
  
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`,hi=p.div`
  @media screen and (min-width: 768px) {
    display: none;
  }  
`,gi=p.div`
  display: none;
  @media screen and (min-width: 768px) {
  display: flex;
  }
`,ui=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    height: 64px;
    margin-bottom: 32px;
    align-items: normal;
  }
`,fi=p.p`
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
`,wi=p.div`
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
`,bi=p.div`
  @media screen and (min-width: 768px) {
    order: 1;    
  }
`,yi=p.div`
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
`,ji=p.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1440px) {
   column-gap: 32px;
  }
`,vi=n.svg`
  &.orange {
    fill: ${({theme:i})=>i.secondaryOrange};
  }
`;function Ti(i){const a=i.getDate(),t=i.getMonth()+1,r=i.getFullYear();return`${a}/${t}/${r}`}const Ii=()=>{const[i,a]=C.useState(new Date),t=k(),r=m=>{a(m)},s=h(j.getDiary),{eatenProducts:d,doneExercises:o}=s;return C.useEffect(()=>{t($.getDiary("?date="+Ti(i)))},[t,i,d.length,o.length]),e.jsxs(xi,{children:[e.jsxs(ui,{children:[e.jsx(pi,{children:"Diary"}),e.jsxs(mi,{children:[e.jsx(hi,{children:e.jsx(z,{currentDate:i,handlerDate:r,textSize:18,textWeight:"bold",textHeight:20,sizeArrow:18,iconColor:l.secondaryOrange})}),e.jsx(gi,{children:e.jsx(z,{currentDate:i,handlerDate:r,textSize:24,textWeight:"bold",textHeight:32,sizeArrow:18,iconColor:l.secondaryOrange})})]})]}),e.jsxs(ji,{children:[e.jsxs(bi,{children:[e.jsx(li,{}),e.jsxs(wi,{children:[e.jsx(Ci,{size:24}),e.jsx(fi,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]}),e.jsxs(yi,{children:[e.jsx(Te,{}),e.jsx(ii,{})]})]})]})},Ci=({size:i})=>e.jsx("div",{style:{width:`${i}px`,height:`${i}px`},children:e.jsx(vi,{width:i,height:i,className:"orange",children:e.jsx("use",{href:`${x}#icon-exclamation-mark`})})});export{Ci as IconInfo,Ii as default};
