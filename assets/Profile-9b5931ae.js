import{s as t,g as l,d as R,u as f,b as y,j as e,o as F,r as E}from"./index-1a0f3b56.js";import{c as O,a as I,b as v,d as T,u as Y,B as _}from"./Button-cb03eae4.js";import{S as G,t as J,C as K}from"./DaySwitch.styled-e0c6be3e.js";import{C as Q}from"./ContainerStyled-bb0b3bf9.js";import{C as X,P as Z,a as ee,U as ie,I as c,b as te,c as ne,N as se,d as ae,e as re,S as P,T as z,D as N,A as le,L as oe}from"./UserCards.styled-9a91283d.js";import{s as h}from"./sprite-ef10f825.js";import"./createClass-0ee3ae13.js";const de=t.form`
  padding-top: 18px;

  @media screen and (min-width: 768px) {
    padding-top: 38px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 32px;
  }
`,ce=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,he=t.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 16px;
  }
`,C=t.div`
  width: 100%;
`,xe=t.label`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  color: #efede8;
  width: 100%;
  height: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${l.title};
  border-radius: 12px;
  padding: 13px;
  font-size: 14px;
  line-height: 1.29;
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }

  &:active {
    /* background-color: inherit; */
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;t.span`
  display: flex;
  align-items: center;
`;const U=t.div`
  display: flex;
  gap: 14px;
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    width: 345px;
  }
`;t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  @media screen and (min-width: 375px) {
    justify-content: flex-start;
    gap: 20px;
  }
`;t.div`
  display: flex;
  gap: 4px;
  @media screen and (min-width: 375px) {
    gap: 8px;
  }
`;const pe=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`,k=t.label`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0px;
  color: ${l.titleCards};
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`,A=t.input`
  outline: 0;
  outline-offset: 0;
  color: #efede8;
  width: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${l.title};
  border-radius: 12px;
  padding: 14px;
  font-size: 14px;
  line-height: 1.29;
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }

  &:active {
    background-color: inherit;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,me=t.span`
  display: flex;
  align-items: center;
  color: ${l.title};
  width: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${o=>o.theme.main};
  border-radius: 12px;
  padding: 14px;
  font-size: 14px;
  line-height: 1.29;
`,ge=t.span`
  display: block;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0px;
  color: ${l.titleCards};
  margin-bottom: 4px;
`;t.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: left;
`;t.input`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;t.svg`
  fill: #000000;
  stroke: currentColor;
`;const ue=t.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
  }
`,V=t.div`
  display: flex;
  gap: 8px;
  margin: 0;

  /* max-width: 300px; */
`,ve=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`,s=t.div`
  /* margin-bottom: 20px; */
`,a=t.label`
  position: relative;
  /* margin-left: 32px; */
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`,n=t.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(99, 99, 102, 1);
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #333;
    transition: all 0.2s ease-in-out;
  }
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    &::before {
      width: 10px;
      height: 10px;
      margin: auto;
    }
  }
`,r=t.input`
  display: none;
  &:checked + ${n} {
    /* display: flex;
        justify-content: center;
        align-items: center; */
    border-color: ${l.bgSecondary};
    &::before {
      background-color: ${l.bgSecondary};
      transform: translate(-50%, -50%) scale(1);
    }
  }
`,x=t.span`
  position: relative;
  margin-left: 32px;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: left;
  color: ${l.withe};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;t.div`
  width: 100%;
  display: flex;
  gap: 9px;
`;const j=t.span`
  margin-left: 32px;
  display: block;
  width: 260px;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: left;
  color: ${l.withe};
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;t.input`
  background-color: rgba(0, 0, 0, 1);
  /* width: 100px; */
  border: none;
  color: ${l.withe};
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: left;
`;const je=O().shape({name:I().required("Name is required"),height:v().min(150,"Height must be at least 150 cm").required("Height is required"),currentWeight:v().min(35,"Weight must be at least 35 kg").required("Current weight is required"),desiredWeight:v().min(35,"Weight must be at least 35 kg").required("Desired weight is required"),birthday:T().max(new Date(new Date().getFullYear()-18,new Date().getMonth(),new Date().getDate()),"Must be at least 18 years old").required("Birthday is required"),blood:v().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:I().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:v().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),fe=()=>{const o=R(),p=f(y.getUserName),b=f(y.getUserEmail),{height:m,currentWeight:S,desiredWeight:$,blood:D,sex:w,levelActivity:g,birthday:W}=f(y.getUserMetricData);function q(d){const u=new Date(d),M=u.getFullYear(),L=String(u.getMonth()+1).padStart(2,"0"),H=String(u.getDate()).padStart(2,"0");return`${M}-${L}-${H}`}const B=q(W);console.log(B);const i=Y({initialValues:{name:p||"",height:m||"",currentWeight:S||"",desiredWeight:$||"",birthday:B||"",blood:D,sex:w||"",levelActivity:g},validationSchema:je,onSubmit:async d=>{await new Promise(u=>setTimeout(u,1e3)),o(F.updateUserMetricsData(d))}});return e.jsx("div",{children:e.jsxs(de,{onSubmit:i.handleSubmit,children:[e.jsx(k,{htmlFor:"name",children:"Basic info"}),e.jsxs(ce,{children:[e.jsx(A,{name:"name",type:"text",id:"name",onChange:i.handleChange,value:i.values.name}),e.jsx(me,{children:b})]}),e.jsxs(he,{children:[e.jsxs(U,{children:[e.jsxs(C,{children:[e.jsx(k,{htmlFor:"Height",children:"Height"}),e.jsx(A,{name:"height",type:"number",onChange:i.handleChange,value:i.values.height,placeholder:"0"})]}),e.jsxs(C,{children:[e.jsx(k,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(A,{name:"currentWeight",type:"number",onChange:i.handleChange,value:i.values.currentWeight,placeholder:"0"})]})]}),e.jsxs(U,{children:[e.jsxs(C,{children:[e.jsx(k,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(A,{name:"desiredWeight",type:"number",onChange:i.handleChange,value:i.values.desiredWeight,placeholder:"0"})]}),e.jsx(C,{children:e.jsx(G,{children:e.jsx(xe,{children:e.jsx(J,{selected:W?new Date(i.values.birthday):Date.now(),onChange:d=>{setSelectedDate(d),i.setFieldValue("birthday",q(d))},customInput:e.jsx(K,{}),dateFormat:"yyyy-MM-dd",calendarStartDay:1,formatWeekDay:d=>d.substr(0,1)})})})})]})]}),e.jsx(ge,{children:"Blood"}),e.jsxs(ue,{children:[e.jsxs(V,{children:[e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(r,{checked:i.values.blood===1,name:"blood",type:"radio",onChange:()=>{i.setFieldValue("blood",1)},value:1}),e.jsx(n,{}),e.jsx(x,{children:"1"})]})}),e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(r,{checked:i.values.blood===2,name:"blood",type:"radio",onChange:()=>{i.setFieldValue("blood",2)},value:2}),e.jsx(n,{}),e.jsx(x,{children:"2"})]})}),e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(r,{checked:i.values.blood===3,name:"blood",type:"radio",onChange:()=>{i.setFieldValue("blood",3)},value:3}),e.jsx(n,{}),e.jsx(x,{children:"3"})]})}),e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(r,{checked:i.values.blood===4,name:"blood",type:"radio",onChange:()=>{i.setFieldValue("blood",4)},value:4}),e.jsx(n,{}),e.jsx(x,{children:"4"})]})})]}),e.jsx(V,{children:e.jsxs(ve,{children:[e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(r,{checked:i.values.sex==="male",name:"sex",type:"radio",onChange:()=>{i.setFieldValue("sex","male")},value:"male"}),e.jsx(n,{}),e.jsx(x,{children:"Male"})]})}),e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(r,{checked:i.values.sex==="female",name:"sex",type:"radio",onChange:()=>{i.setFieldValue("sex","female")},value:"female"}),e.jsx(n,{}),e.jsx(x,{children:"Female"})]})})]})})]}),e.jsxs(pe,{children:[e.jsx(s,{children:e.jsxs(a,{htmlFor:"levelActivity1",children:[e.jsx(r,{id:"levelActivity1",checked:i.values.levelActivity===1,name:"levelActivity",type:"radio",onChange:()=>{i.setFieldValue("levelActivity",1)},value:1}),e.jsx(n,{}),e.jsx(j,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(s,{children:e.jsxs(a,{htmlFor:"levelActivity2",children:[e.jsx(r,{id:"levelActivity2",checked:i.values.levelActivity===2,name:"levelActivity",type:"radio",onChange:()=>{i.setFieldValue("levelActivity",2)},value:2}),e.jsx(n,{}),e.jsx(j,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(s,{children:e.jsxs(a,{htmlFor:"levelActivity3",children:[e.jsx(r,{id:"levelActivity3",checked:i.values.levelActivity===3,name:"levelActivity",type:"radio",onChange:()=>{i.setFieldValue("levelActivity",3)},value:3}),e.jsx(n,{}),e.jsx(j,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(s,{children:e.jsxs(a,{htmlFor:"levelActivity4",children:[e.jsx(r,{id:"levelActivity4",checked:i.values.levelActivity===4,name:"levelActivity",type:"radio",onChange:()=>{i.setFieldValue("levelActivity",4)},value:4}),e.jsx(n,{}),e.jsx(j,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(s,{children:e.jsxs(a,{htmlFor:"levelActivity5",children:[e.jsx(r,{id:"levelActivity5",checked:i.values.levelActivity===5,name:"levelActivity",type:"radio",onChange:()=>{i.setFieldValue("levelActivity",5)},value:5}),e.jsx(n,{}),e.jsx(j,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx(_,{tp:"submit",text:"Save"})]})})},ye=t.h2`
  margin-bottom: 40px;

  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;

  color: ${l.withe};
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    font-size: 32px;
    line-height: 1.37;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`,be=({text:o,className:p})=>e.jsx(ye,{className:p,children:o}),we=t.div`
  ${Q};
  padding-top: 101px;
  padding-bottom: 66px;
  @media (min-width: 768px) {
    padding-top: 156px;
    padding-bottom: 54px;
  }
  @media (min-width: 1440px) {
    padding-top: 156px;
    padding-bottom: 54px;
  }
`,Ce=t.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 26px;
  }
`,ke=()=>{const o=E.useRef(null),p=f(y.getUserName),b=f(y.getUserAvatar),m=R(),S=async D=>{const w=D.target.files[0];if(w){const g=new FormData;g.append("avatar",w),console.log(g),await m(F.updateUserAvatar(g)),m(F.fetchCurrentUser())}},$=()=>{m(F.logOut())};return e.jsxs(X,{children:[e.jsxs(Z,{children:[e.jsx(ee,{children:b?e.jsx(ie,{src:b,alt:"Avatar"}):e.jsx(c,{width:61,height:62,className:"user",children:e.jsx("use",{href:`${h}#icon-user`})})}),e.jsxs("div",{children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},ref:o,onChange:S}),e.jsxs(te,{onClick:()=>o.current.click(),children:[" ",e.jsx(c,{width:24,height:24,className:"lightOrange mark",children:e.jsx("use",{href:`${h}#icon-check_mark`})})]})]})]}),e.jsxs(ne,{children:[e.jsx(se,{children:p}),e.jsx(ae,{children:"User"})]}),e.jsxs(re,{children:[e.jsxs(P,{children:[e.jsxs(z,{children:[e.jsx(c,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${h}#icon-fluent_food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(N,{children:"0"})]}),e.jsxs(P,{children:[e.jsxs(z,{children:[" ",e.jsx(c,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${h}#icon-dumbbell`})}),e.jsx("p",{children:"Daily norm of sports"})]}),e.jsx(N,{children:"0 min"})]})]}),e.jsxs(le,{children:[e.jsxs("div",{children:[" ",e.jsx(c,{width:24,height:24,className:"orange",children:e.jsx("use",{href:`${h}#icon-exclamation-mark`})})]}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(oe,{type:"button",onClick:$,children:["Logout"," ",e.jsx(c,{width:24,height:24,className:"stroke",children:e.jsx("use",{href:`${h}#icon-logout`})})]})]})},Be=()=>e.jsxs(we,{children:[e.jsx(be,{text:"Profile Settings"}),e.jsxs(Ce,{children:[e.jsx(ke,{}),e.jsx(fe,{})]})]});export{Be as default};
