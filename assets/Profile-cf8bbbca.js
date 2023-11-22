import{s as i,g as n,j as e,e as L,b as j,d as y,o as q,Q as I}from"./index-d23184f9.js";import{u as T,B as Y}from"./Button-210c8461.js";import{t as J,C as _,S as G,p as Q}from"./DaySwitch.styled-b5fb8656.js";import{c as K,a as P,b as k,d as X}from"./index.esm-6537aac1.js";import{s as g}from"./sprite-dff19c60.js";import{C as Z}from"./ContainerStyled-bb0b3bf9.js";import"./createClass-e4ee8eb7.js";const ee=i.form`
  padding-top: 18px;

  @media screen and (min-width: 768px) {
    padding-top: 38px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 32px;
  }
`,ie=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,te=i.div`
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
`,S=i.div`
  width: 100%;
`;i.span`
  display: flex;
  align-items: center;
`;const ne=i.div`
position: relative;
`,N=i.div`
  display: flex;
  gap: 14px;
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    width: 345px;
  }
`;i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  @media screen and (min-width: 375px) {
    justify-content: flex-start;
    gap: 20px;
  }
`;i.div`
  display: flex;
  gap: 4px;
  @media screen and (min-width: 375px) {
    gap: 8px;
  }
`;const re=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`,z=i.label`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: ${n.titleCards};
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`,ae=i.span`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: ${n.titleCards};
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`,D=i.input`
  outline: 0;
  outline-offset: 0;
  color: #efede8;
  width: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${n.title};
  border-radius: 12px;
  padding: 14px;
  font-size: 16px;
  line-height: 1.5;
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
`,se=i.span`
  display: flex;
  align-items: center;
  color: ${n.title};
  width: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${c=>c.theme.main};
  border-radius: 12px;
  padding: 14px;
  font-size: 16px;
  line-height: 1.5;
`,oe=i.span`
  display: block;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0px;
  color: ${n.titleCards};
  margin-bottom: 4px;
`;i.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: left;
`;i.input`
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
`;i.svg`
  fill: #000000;
  stroke: currentColor;
`;const de=i.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
  }
`,U=i.div`
  display: flex;
  gap:8px;
  margin: 0;

  /* max-width: 300px; */
`,le=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`,s=i.div`
`,o=i.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`,r=i.span`
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
`,d=i.input`
  display: none;
  &:checked + ${r} {
    border-color: ${n.bgSecondary};
    &::before {
      background-color: ${n.bgSecondary};
      transform: translate(-50%, -50%) scale(1);
    }
  }
`,f=i.span`
  position: relative;
  padding-left: 20px;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: left;
  color: ${n.withe};
  @media screen and (min-width: 768px) {
    padding-left: 24px;
    font-size: 16px;
    line-height: 1.5;
  }
`;i.div`
  width: 100%;
  display: flex;
  gap: 9px;
`;const $=i.span`
  margin-left: 32px;
  display: block;
  width: 260px;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: left;
  color: ${n.withe};
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;i.input`
  background-color: rgba(0, 0, 0, 1);
  /* width: 100px; */
  border: none;
  color: ${n.withe};
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: left;
`;const ce=K().shape({name:P().required("Name is required"),height:k().min(150,"Height must be at least 150 cm").required("Height is required"),currentWeight:k().min(35,"Weight must be at least 35 kg").required("Current weight is required"),desiredWeight:k().min(35,"Weight must be at least 35 kg").required("Desired weight is required"),birthday:X().max(new Date(new Date().getFullYear()-18,new Date().getMonth(),new Date().getDate()),"Must be at least 18 years old").required("Birthday is required"),blood:k().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:P().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:k().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),he=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1440px) {
    border-left: 1px solid ${n.bgCards};
    padding-left: 49px;
    padding-right: 0;
  }
`,pe=i.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 90px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,xe=i.img`
  width: 100%;
  height: 100%;
`,me=i.div`
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid ${n.acceptColor};
  border-radius: 50%;
  background-color: transparent;
  width: 90px;
  height: 90px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,ge=i.label`
  position: absolute;

  bottom: -11px;

  width: 24px;
  height: 24px;
  padding: 0;

  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  input {
    display: none;
    visibility: hidden;
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    bottom: -14px;
  }
`,ue=i.div`
  padding-top: 32px;

  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
  }
`,ve=i.h3`
  margin-bottom: 4px;

  font-size: 18px;
  line-height: 1.11;
  color: ${n.withe};

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 1.16;
  }
`,fe=i.p`
  margin-bottom: 40px;

  font-size: 14px;
  line-height: 1.28;
  color: ${n.titleCards};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 14px;
    line-height: 1.28;
  }
`,be=i.div`
  margin-bottom: 40px;
  display: flex;
  gap: 14px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    gap: 16px;
  }
`,M=i.div`
  padding: 14px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid ${n.bgCards};
  background-color: ${n.acceptColor};
  font-size: 12px;
  line-height: 1.33;
  color: ${n.dashboardTextAccept};
  gap: 28px;

  @media screen and (min-width: 768px) {
    padding-right: 49px;
    &:first-of-type {
      padding-right: 67px;
    }
  }
`,V=i.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.11;
  color: ${n.withe};
  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.33;
  }
`,O=i.div`
  position: relative;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
`,je=i.div`
  margin-bottom: 41px;
  max-width: 335px;

  display: flex;
  gap: 8px;

  font-size: 14px;
  line-height: 1.28;

  color: ${n.title};

  @media screen and (min-width: 768px) {
    margin: 0 auto 32px auto;
    max-width: 407px;

    font-size: 16px;
    line-height: 1.5;
  }
`,ye=i.button`
  color: ${n.withe};

  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    margin-bottom: 38px;

    max-width: 407px;

    font-size: 16px;
    line-height: 1.5;
  }
`,b=i.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  pointer-events: none;
  &.orange {
    fill: ${n.secondaryOrange};
    margin-right: 7px;
    position: static;
  }
  @media screen and (min-width: 768px) {
    &.user {
      width: 102px;
      height: 102px;
    }
  }
  @media screen and (min-width: 768px) {
    &.mark {
      width: 32px;
      height: 32px;
    }
  }
  &.stroke-white {
    top: 16px;
    stroke: ${n.withe};
    cursor: pointer;
  }

  &.stroke {
    stroke: ${n.secondaryOrange};
    position: static;
  }
`,we=i.svg`
  fill: ${n.secondaryOrange};
`;i.span`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0px;
  color: ${n.titleCards};
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`;i.label`
  display: flex;
  align-items: center;

  color: #efede8;
  width: 100%;
  height: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${n.title};
  border-radius: 12px;
  padding: 13px;
  font-size: 14px;
  line-height: 1.29;
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;const R=i.button`
  padding: 5px;
  font-weight: bold;
  color: white;
  background-color: inherit;
  border: 1px solid white;
  border-radius: 6px;
`,H=i.select`
  border: 1px solid white;
  border-radius: 6px;
  color: white;
  background-color: #ef8964;
  &:last-of-type {
    margin-left: 4px;
    margin-right: 4px;
  }
  &:first-of-type {
    margin-left: 4px;
  }
`,Ce=({selected:c,onChange:h})=>{const u=new Date().getFullYear(),w=((p,m)=>{let l=[];for(let a=m;p<a;a--)l.push(a);return l})(1900,u),x=["January","February","March","April","May","June","July","August","September","October","November","December"];return e.jsx(J,{shouldCloseOnSelect:!0,selected:c,dateFormat:"dd.MM.yyyy",customInput:e.jsx(_,{}),onChange:h,renderCustomHeader:({date:p,changeYear:m,changeMonth:l,decreaseMonth:a,increaseMonth:B,prevMonthButtonDisabled:F,nextMonthButtonDisabled:W})=>e.jsxs("div",{style:{margin:10,display:"flex",justifyContent:"center"},children:[e.jsx(R,{onClick:a,disabled:F,type:"button",children:"<"}),e.jsx(H,{value:x[p.getMonth()],onChange:({target:{value:t}})=>l(x.indexOf(t)),children:x.map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsx(H,{value:p.getFullYear(),onChange:({target:{value:t}})=>m(t),children:w.map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsx(R,{onClick:B,disabled:W,type:"button",children:">"})]})})},ke=()=>{const c=L(),h=j(y.getUserName),u=j(y.getUserEmail),{height:A,currentWeight:w,desiredWeight:x,blood:p,sex:m,levelActivity:l,birthday:a}=j(y.getUserMetricData),B=v=>{const C=v.toISOString();t.setFieldValue("birthday",F(C))};function F(v){return v.slice(0,10)}const W=F(a),t=T({initialValues:{name:h||"",height:A||"",currentWeight:w||"",desiredWeight:x||"",birthday:W||"",blood:p,sex:m||"",levelActivity:l},onSubmit:async v=>{try{await ce.validate(v,{abortEarly:!1}),c(q.updateUserMetricsData(v)),I.success("Successful!")}catch(C){const E=C.response?C.response.data:C.message;I.error(E)}}});return e.jsx("div",{children:e.jsxs(ee,{onSubmit:t.handleSubmit,children:[e.jsx(z,{htmlFor:"name",children:"Basic info"}),e.jsxs(ie,{children:[e.jsx(D,{className:"name",name:"name",type:"text",id:"name",onChange:t.handleChange,value:t.values.name}),e.jsx(se,{children:u})]}),e.jsxs(te,{children:[e.jsxs(N,{children:[e.jsxs(S,{children:[e.jsx(z,{htmlFor:"Height",children:"Height (cm)"}),e.jsx(D,{name:"height",type:"number",onChange:t.handleChange,value:t.values.height,placeholder:"0"})]}),e.jsxs(S,{children:[e.jsx(z,{htmlFor:"currentWeight",children:"Current Weight (kg)"}),e.jsx(D,{name:"currentWeight",type:"number",onChange:t.handleChange,value:t.values.currentWeight,placeholder:"0"})]})]}),e.jsxs(N,{children:[e.jsxs(S,{children:[e.jsx(z,{htmlFor:"desiredWeight",children:"Desired Weight (kg)"}),e.jsx(D,{name:"desiredWeight",type:"number",onChange:t.handleChange,value:t.values.desiredWeight,placeholder:"0"})]}),e.jsx(S,{children:e.jsxs(G,{children:[e.jsx(ae,{children:"Birthdate"}),e.jsxs(ne,{children:[e.jsx(Ce,{selected:a?Q(t.values.birthday):Date.now(),onChange:B}),e.jsx(b,{width:18,height:18,className:"stroke-white",children:e.jsx("use",{href:`${g}#icon-calendar`})})]})]})})]})]}),e.jsx(oe,{children:"Blood group"}),e.jsxs(de,{children:[e.jsxs(U,{children:[e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(d,{checked:t.values.blood===1,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",1)},value:1}),e.jsx(r,{}),e.jsx(f,{children:"1"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(d,{checked:t.values.blood===2,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",2)},value:2}),e.jsx(r,{}),e.jsx(f,{children:"2"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(d,{checked:t.values.blood===3,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",3)},value:3}),e.jsx(r,{}),e.jsx(f,{children:"3"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(d,{checked:t.values.blood===4,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",4)},value:4}),e.jsx(r,{}),e.jsx(f,{children:"4"})]})})]}),e.jsx(U,{children:e.jsxs(le,{children:[e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(d,{checked:t.values.sex==="male",name:"sex",type:"radio",onChange:()=>{t.setFieldValue("sex","male")},value:"male"}),e.jsx(r,{}),e.jsx(f,{children:"Male"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(d,{checked:t.values.sex==="female",name:"sex",type:"radio",onChange:()=>{t.setFieldValue("sex","female")},value:"female"}),e.jsx(r,{}),e.jsx(f,{children:"Female"})]})})]})})]}),e.jsxs(re,{children:[e.jsx(s,{children:e.jsxs(o,{htmlFor:"levelActivity1",children:[e.jsx(d,{id:"levelActivity1",checked:t.values.levelActivity===1,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",1)},value:1}),e.jsx(r,{}),e.jsx($,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(s,{children:e.jsxs(o,{htmlFor:"levelActivity2",children:[e.jsx(d,{id:"levelActivity2",checked:t.values.levelActivity===2,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",2)},value:2}),e.jsx(r,{}),e.jsx($,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(s,{children:e.jsxs(o,{htmlFor:"levelActivity3",children:[e.jsx(d,{id:"levelActivity3",checked:t.values.levelActivity===3,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",3)},value:3}),e.jsx(r,{}),e.jsx($,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(s,{children:e.jsxs(o,{htmlFor:"levelActivity4",children:[e.jsx(d,{id:"levelActivity4",checked:t.values.levelActivity===4,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",4)},value:4}),e.jsx(r,{}),e.jsx($,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(s,{children:e.jsxs(o,{htmlFor:"levelActivity5",children:[e.jsx(d,{id:"levelActivity5",checked:t.values.levelActivity===5,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",5)},value:5}),e.jsx(r,{}),e.jsx($,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx(Y,{tp:"button",text:"Save"})]})})},$e=i.h2`
  margin-bottom: 40px;

  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;

  color: ${n.withe};
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    font-size: 32px;
    line-height: 1.37;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`,Ae=({text:c,className:h})=>e.jsx($e,{className:h,children:c}),Fe=i.div`
  ${Z};
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
`,Se=i.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 26px;
  }
`,ze=()=>{const c=j(y.getUserName),h=j(y.getUserAvatar),u=L(),{dailyIntakeCalories:A,dailyNormOfSport:w}=j(y.getUserMetricData),x=async m=>{try{const l=m.target.files[0];if(l){const a=new FormData;a.append("avatar",l),await u(q.updateUserAvatar(a))}}catch{I.error("An error occurred while uploading the photo")}},p=()=>{u(q.logOut())};return e.jsxs(he,{children:[e.jsxs(pe,{children:[e.jsx(me,{children:h?e.jsx(xe,{src:h,alt:"Avatar"}):e.jsx(b,{width:61,height:62,className:"user",children:e.jsx("use",{href:`${g}#icon-user`})})}),e.jsxs(ge,{htmlFor:"avatarUrls",children:[e.jsx("input",{type:"file",name:"avatar",id:"avatarUrls",accept:"image/*",onChange:x})," ",e.jsx(we,{children:e.jsx("use",{href:`${g}#icon-check_mark`})})]})]}),e.jsxs(ue,{children:[e.jsx(ve,{children:c}),e.jsx(fe,{children:"User"})]}),e.jsxs(be,{children:[e.jsxs(M,{children:[e.jsxs(O,{children:[e.jsx(b,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${g}#icon-fluent_food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(V,{children:A})]}),e.jsxs(M,{children:[e.jsxs(O,{children:[" ",e.jsx(b,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${g}#icon-dumbbell`})}),e.jsx("p",{children:"Daily norm of sports"})]}),e.jsxs(V,{children:[w," min"]})]})]}),e.jsxs(je,{children:[e.jsxs("div",{children:[" ",e.jsx(b,{width:24,height:24,className:"orange",children:e.jsx("use",{href:`${g}#icon-exclamation-mark`})})]}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(ye,{type:"button",onClick:p,children:["Logout"," ",e.jsx(b,{width:24,height:24,className:"stroke",children:e.jsx("use",{href:`${g}#icon-logout`})})]})]})},Ue=()=>e.jsxs(Fe,{children:[e.jsx(Ae,{text:"Profile Settings"}),e.jsxs(Se,{children:[e.jsx(ze,{}),e.jsx(ke,{})]})]});export{Ue as default};
