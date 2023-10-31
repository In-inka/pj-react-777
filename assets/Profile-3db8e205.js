import{s as i,g as n,d as M,u as m,b as g,j as e,o as A,Q as B,r as L}from"./index-a0b1b902.js";import{c as T,a as I,b,d as Y,u as _,B as G}from"./Button-56daabed.js";import{S as Q,t as J,C as K}from"./DaySwitch.styled-b305e6ae.js";import{s as h,C as X}from"./sprite-e3c72cee.js";import"./createClass-fce30cd4.js";const Z=i.form`
  padding-top: 18px;

  @media screen and (min-width: 768px) {
    padding-top: 38px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 32px;
  }
`,ee=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,ie=i.div`
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
`,C=i.div`
  width: 100%;
`,te=i.label`
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

  &:active {
    /* background-color: inherit; */
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;i.span`
  display: flex;
  align-items: center;
`;const N=i.div`
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
`;const ne=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`,k=i.label`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0px;
  color: ${n.titleCards};
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`,$=i.input`
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
`,ae=i.span`
  display: flex;
  align-items: center;
  color: ${n.title};
  width: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${l=>l.theme.main};
  border-radius: 12px;
  padding: 14px;
  font-size: 14px;
  line-height: 1.29;
`,re=i.span`
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
`;const se=i.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
  }
`,P=i.div`
  display: flex;
  gap: 8px;
  margin: 0;

  /* max-width: 300px; */
`,oe=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`,r=i.div`
  /* margin-bottom: 20px; */
`,s=i.label`
  position: relative;
  /* margin-left: 32px; */
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`,a=i.span`
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
`,o=i.input`
  display: none;
  &:checked + ${a} {
    /* display: flex;
        justify-content: center;
        align-items: center; */
    border-color: ${n.bgSecondary};
    &::before {
      background-color: ${n.bgSecondary};
      transform: translate(-50%, -50%) scale(1);
    }
  }
`,p=i.span`
  position: relative;
  margin-left: 32px;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: left;
  color: ${n.withe};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;i.div`
  width: 100%;
  display: flex;
  gap: 9px;
`;const y=i.span`
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
`;const de=T().shape({name:I().required("Name is required"),height:b().min(150,"Height must be at least 150 cm").required("Height is required"),currentWeight:b().min(35,"Weight must be at least 35 kg").required("Current weight is required"),desiredWeight:b().min(35,"Weight must be at least 35 kg").required("Desired weight is required"),birthday:Y().max(new Date(new Date().getFullYear()-18,new Date().getMonth(),new Date().getDate()),"Must be at least 18 years old").required("Birthday is required"),blood:b().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:I().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:b().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),le=i.div`
  $ContainerStyled;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
   @media screen and (min-width: 1440px) {
    border-left: 1px solid ${n.bgCards};
    padding-left:49px;
  }

`,ce=i.div`
  margin: 0 auto;

  position: relative;

  width: 90px;
  height: 90px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,he=i.img`
  max-width: 100%;
  min-width: 90px;
  min-height: 90px;
  @media screen and (min-width: 768px) {
    min-width: 150px;
    min-height: 150px;
  }
`,xe=i.div`
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${n.acceptColor};
  border-radius: 50%;
  background-color: transparent;
  width: 90px;
  height: 90px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,pe=i.button`
  position: absolute;
  bottom: -12px;
  left: 34px;

  @media screen and (min-width: 768px) {
    bottom: -18px;
    left: 60px;
  }

  background-color: transparent;
  border: none;
`,me=i.div`
  padding-top: 32px;

  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
  }
`,ge=i.h3`
  margin-bottom: 4px;

  font-size: 18px;
  line-height: 1.11;
  color: ${n.withe};

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 1.16;
  }
`,ue=i.p`
  margin-bottom: 40px;

  font-size: 18px;
  line-height: 1.28;
  color: ${n.titleCards};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 14px;
    line-height: 1.28;
  }
`,fe=i.div`
  margin-bottom: 40px;

  display: flex;
  gap: 14px;

  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    gap: 16px;
  }
`,U=i.div`
  width: 168px;
  min-height: 96px;
  padding: 14px;

  display: flex;
  flex-direction: column;
  gap: 28px;

  border-radius: 12px;
  border: 1px solid ${n.bgCards};

  background-color: ${n.acceptColor};
  font-size: 12px;
  line-height: 1.33;
  color: ${n.dashboardTextAccept};

  @media screen and (min-width: 768px) {
    width: 214px;
    min-height: 108px;
    padding: 14px 18px;
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
`,R=i.div`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,ve=i.div`
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
`,je=i.button`
  margin-bottom: 18px;
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 8px;

  color: ${n.withe};

  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    margin-bottom: 38px;

    max-width: 407px;

    font-size: 16px;
    line-height: 1.5;
  }
`,x=i.svg`
  &.orange {
    fill: ${n.secondaryOrange};
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
  &.stroke-withe {
    stroke: ${n.withe};
  }
  &.lightOrange {
    fill: ${n.secondaryOrange};
  }
  &.stroke {
    stroke: ${n.secondaryOrange};
  }
`,be=()=>{const l=M(),u=m(g.getUserName),w=m(g.getUserEmail),{height:f,currentWeight:F,desiredWeight:S,blood:D,sex:z,levelActivity:W,birthday:v}=m(g.getUserMetricData);function j(d){const c=new Date(d),q=c.getFullYear(),E=String(c.getMonth()+1).padStart(2,"0"),H=String(c.getDate()).padStart(2,"0");return`${q}-${E}-${H}`}const O=j(v),t=_({initialValues:{name:u||"",height:f||"",currentWeight:F||"",desiredWeight:S||"",birthday:O||"",blood:D,sex:z||"",levelActivity:W},onSubmit:async d=>{console.log("Form submitted",d);try{await de.validate(d,{abortEarly:!1}),await l(A.updateUserMetricsData(d)),B.success("Дані успішно оновлено!")}catch(c){const q=c.response?c.response.data:c.message;B.error(q)}}});return e.jsx("div",{children:e.jsxs(Z,{onSubmit:t.handleSubmit,children:[e.jsx(k,{htmlFor:"name",children:"Basic info"}),e.jsxs(ee,{children:[e.jsx($,{name:"name",type:"text",id:"name",onChange:t.handleChange,value:t.values.name}),e.jsx(ae,{children:w})]}),e.jsxs(ie,{children:[e.jsxs(N,{children:[e.jsxs(C,{children:[e.jsx(k,{htmlFor:"Height",children:"Height"}),e.jsx($,{name:"height",type:"number",onChange:t.handleChange,value:t.values.height,placeholder:"0"})]}),e.jsxs(C,{children:[e.jsx(k,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx($,{name:"currentWeight",type:"number",onChange:t.handleChange,value:t.values.currentWeight,placeholder:"0"})]})]}),e.jsxs(N,{children:[e.jsxs(C,{children:[e.jsx(k,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx($,{name:"desiredWeight",type:"number",onChange:t.handleChange,value:t.values.desiredWeight,placeholder:"0"})]}),e.jsx(C,{children:e.jsx(Q,{children:e.jsxs(te,{children:[e.jsx(J,{selected:v?new Date(t.values.birthday):Date.now(),onChange:d=>{t.setFieldValue("birthday",j(d))},customInput:e.jsx(K,{}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:d=>d.substr(0,1)}),e.jsx(x,{width:18,height:18,className:"stroke-withe",children:e.jsx("use",{href:`${h}#icon-calendar`})})]})})})]})]}),e.jsx(re,{children:"Blood"}),e.jsxs(se,{children:[e.jsxs(P,{children:[e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===1,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",1)},value:1}),e.jsx(a,{}),e.jsx(p,{children:"1"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===2,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",2)},value:2}),e.jsx(a,{}),e.jsx(p,{children:"2"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===3,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",3)},value:3}),e.jsx(a,{}),e.jsx(p,{children:"3"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===4,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",4)},value:4}),e.jsx(a,{}),e.jsx(p,{children:"4"})]})})]}),e.jsx(P,{children:e.jsxs(oe,{children:[e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.sex==="male",name:"sex",type:"radio",onChange:()=>{t.setFieldValue("sex","male")},value:"male"}),e.jsx(a,{}),e.jsx(p,{children:"Male"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.sex==="female",name:"sex",type:"radio",onChange:()=>{t.setFieldValue("sex","female")},value:"female"}),e.jsx(a,{}),e.jsx(p,{children:"Female"})]})})]})})]}),e.jsxs(ne,{children:[e.jsx(r,{children:e.jsxs(s,{htmlFor:"levelActivity1",children:[e.jsx(o,{id:"levelActivity1",checked:t.values.levelActivity===1,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",1)},value:1}),e.jsx(a,{}),e.jsx(y,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(r,{children:e.jsxs(s,{htmlFor:"levelActivity2",children:[e.jsx(o,{id:"levelActivity2",checked:t.values.levelActivity===2,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",2)},value:2}),e.jsx(a,{}),e.jsx(y,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(r,{children:e.jsxs(s,{htmlFor:"levelActivity3",children:[e.jsx(o,{id:"levelActivity3",checked:t.values.levelActivity===3,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",3)},value:3}),e.jsx(a,{}),e.jsx(y,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(r,{children:e.jsxs(s,{htmlFor:"levelActivity4",children:[e.jsx(o,{id:"levelActivity4",checked:t.values.levelActivity===4,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",4)},value:4}),e.jsx(a,{}),e.jsx(y,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(r,{children:e.jsxs(s,{htmlFor:"levelActivity5",children:[e.jsx(o,{id:"levelActivity5",checked:t.values.levelActivity===5,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",5)},value:5}),e.jsx(a,{}),e.jsx(y,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx(G,{tp:"submit",text:"Save"})]})})},ye=i.h2`
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
`,we=({text:l,className:u})=>e.jsx(ye,{className:u,children:l}),Ce=i.div`
  ${X};
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
`,ke=i.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 26px;
  }
`,$e=()=>{const l=L.useRef(null),u=m(g.getUserName),w=m(g.getUserAvatar),f=M(),{dailyIntakeCalories:F,dailyNormOfSport:S}=m(g.getUserMetricData),D=async W=>{const v=W.target.files[0];if(v){const j=new FormData;j.append("avatar",v),await f(A.updateUserAvatar(j)),f(A.fetchCurrentUser())}},z=()=>{f(A.logOut())};return e.jsxs(le,{children:[e.jsxs(ce,{children:[e.jsx(xe,{children:w?e.jsx(he,{src:w,alt:"Avatar"}):e.jsx(x,{width:61,height:62,className:"user",children:e.jsx("use",{href:`${h}#icon-user`})})}),e.jsxs("div",{children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},ref:l,onChange:D}),e.jsxs(pe,{onClick:()=>l.current.click(),children:[" ",e.jsx(x,{width:24,height:24,className:"lightOrange mark",children:e.jsx("use",{href:`${h}#icon-check_mark`})})]})]})]}),e.jsxs(me,{children:[e.jsx(ge,{children:u}),e.jsx(ue,{children:"User"})]}),e.jsxs(fe,{children:[e.jsxs(U,{children:[e.jsxs(R,{children:[e.jsx(x,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${h}#icon-fluent_food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(V,{children:F})]}),e.jsxs(U,{children:[e.jsxs(R,{children:[" ",e.jsx(x,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${h}#icon-dumbbell`})}),e.jsx("p",{children:"Daily norm of sports"})]}),e.jsxs(V,{children:[S," min"]})]})]}),e.jsxs(ve,{children:[e.jsxs("div",{children:[" ",e.jsx(x,{width:24,height:24,className:"orange",children:e.jsx("use",{href:`${h}#icon-exclamation-mark`})})]}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(je,{type:"button",onClick:z,children:["Logout"," ",e.jsx(x,{width:24,height:24,className:"stroke",children:e.jsx("use",{href:`${h}#icon-logout`})})]})]})},We=()=>e.jsxs(Ce,{children:[e.jsx(we,{text:"Profile Settings"}),e.jsxs(ke,{children:[e.jsx($e,{}),e.jsx(be,{})]})]});export{We as default};
