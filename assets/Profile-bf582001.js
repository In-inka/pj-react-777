import{s as i,g as n,d as U,u as j,b,j as e,o as A,r as L}from"./index-8b34a7ee.js";import{c as E,a as q,b as f,d as T,u as Y,B as _}from"./Button-336f6352.js";import{S as G,t as J,C as K}from"./DaySwitch.styled-013318dc.js";import{C as Q,s as c}from"./sprite-c88f2ba3.js";import"./createClass-3dcbaa50.js";const X=i.form`
  padding-top: 18px;

  @media screen and (min-width: 768px) {
    padding-top: 38px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 32px;
  }
`,Z=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,ee=i.div`
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
`,ie=i.label`
  display: flex;
  flex-direction: row-reverse;
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
`;const B=i.div`
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
`;const te=i.div`
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
`,ne=i.span`
  display: flex;
  align-items: center;
  color: ${n.title};
  width: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${d=>d.theme.main};
  border-radius: 12px;
  padding: 14px;
  font-size: 14px;
  line-height: 1.29;
`,ae=i.span`
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
`;const re=i.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
  }
`,I=i.div`
  display: flex;
  gap: 8px;
  margin: 0;

  /* max-width: 300px; */
`,se=i.div`
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
`,h=i.span`
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
`;const v=i.span`
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
`;const oe=E().shape({name:q().required("Name is required"),height:f().min(150,"Height must be at least 150 cm").required("Height is required"),currentWeight:f().min(35,"Weight must be at least 35 kg").required("Current weight is required"),desiredWeight:f().min(35,"Weight must be at least 35 kg").required("Desired weight is required"),birthday:T().max(new Date(new Date().getFullYear()-18,new Date().getMonth(),new Date().getDate()),"Must be at least 18 years old").required("Birthday is required"),blood:f().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:q().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:f().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),de=()=>{const d=U(),p=j(b.getUserName),y=j(b.getUserEmail),{height:m,currentWeight:F,desiredWeight:S,blood:D,sex:w,levelActivity:g,birthday:z}=j(b.getUserMetricData);function W(l){const u=new Date(l),M=u.getFullYear(),O=String(u.getMonth()+1).padStart(2,"0"),H=String(u.getDate()).padStart(2,"0");return`${M}-${O}-${H}`}const R=W(z),t=Y({initialValues:{name:p||"",height:m||"",currentWeight:F||"",desiredWeight:S||"",birthday:R||"",blood:D,sex:w||"",levelActivity:g},validationSchema:oe,onSubmit:async l=>{await new Promise(u=>setTimeout(u,1e3)),d(A.updateUserMetricsData(l))}});return e.jsx("div",{children:e.jsxs(X,{onSubmit:t.handleSubmit,children:[e.jsx(k,{htmlFor:"name",children:"Basic info"}),e.jsxs(Z,{children:[e.jsx($,{name:"name",type:"text",id:"name",onChange:t.handleChange,value:t.values.name}),e.jsx(ne,{children:y})]}),e.jsxs(ee,{children:[e.jsxs(B,{children:[e.jsxs(C,{children:[e.jsx(k,{htmlFor:"Height",children:"Height"}),e.jsx($,{name:"height",type:"number",onChange:t.handleChange,value:t.values.height,placeholder:"0"})]}),e.jsxs(C,{children:[e.jsx(k,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx($,{name:"currentWeight",type:"number",onChange:t.handleChange,value:t.values.currentWeight,placeholder:"0"})]})]}),e.jsxs(B,{children:[e.jsxs(C,{children:[e.jsx(k,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx($,{name:"desiredWeight",type:"number",onChange:t.handleChange,value:t.values.desiredWeight,placeholder:"0"})]}),e.jsx(C,{children:e.jsx(G,{children:e.jsx(ie,{children:e.jsx(J,{selected:z?new Date(t.values.birthday):Date.now(),onChange:l=>{t.setFieldValue("birthday",W(l))},customInput:e.jsx(K,{}),dateFormat:"yyyy-MM-dd",calendarStartDay:1,formatWeekDay:l=>l.substr(0,1)})})})})]})]}),e.jsx(ae,{children:"Blood"}),e.jsxs(re,{children:[e.jsxs(I,{children:[e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===1,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",1)},value:1}),e.jsx(a,{}),e.jsx(h,{children:"1"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===2,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",2)},value:2}),e.jsx(a,{}),e.jsx(h,{children:"2"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===3,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",3)},value:3}),e.jsx(a,{}),e.jsx(h,{children:"3"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===4,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",4)},value:4}),e.jsx(a,{}),e.jsx(h,{children:"4"})]})})]}),e.jsx(I,{children:e.jsxs(se,{children:[e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.sex==="male",name:"sex",type:"radio",onChange:()=>{t.setFieldValue("sex","male")},value:"male"}),e.jsx(a,{}),e.jsx(h,{children:"Male"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.sex==="female",name:"sex",type:"radio",onChange:()=>{t.setFieldValue("sex","female")},value:"female"}),e.jsx(a,{}),e.jsx(h,{children:"Female"})]})})]})})]}),e.jsxs(te,{children:[e.jsx(r,{children:e.jsxs(s,{htmlFor:"levelActivity1",children:[e.jsx(o,{id:"levelActivity1",checked:t.values.levelActivity===1,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",1)},value:1}),e.jsx(a,{}),e.jsx(v,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(r,{children:e.jsxs(s,{htmlFor:"levelActivity2",children:[e.jsx(o,{id:"levelActivity2",checked:t.values.levelActivity===2,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",2)},value:2}),e.jsx(a,{}),e.jsx(v,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(r,{children:e.jsxs(s,{htmlFor:"levelActivity3",children:[e.jsx(o,{id:"levelActivity3",checked:t.values.levelActivity===3,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",3)},value:3}),e.jsx(a,{}),e.jsx(v,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(r,{children:e.jsxs(s,{htmlFor:"levelActivity4",children:[e.jsx(o,{id:"levelActivity4",checked:t.values.levelActivity===4,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",4)},value:4}),e.jsx(a,{}),e.jsx(v,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(r,{children:e.jsxs(s,{htmlFor:"levelActivity5",children:[e.jsx(o,{id:"levelActivity5",checked:t.values.levelActivity===5,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",5)},value:5}),e.jsx(a,{}),e.jsx(v,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx(_,{tp:"submit",text:"Save"})]})})},le=i.h2`
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
`,ce=({text:d,className:p})=>e.jsx(le,{className:p,children:d}),he=i.div`
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
`,xe=i.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 26px;
  }
`,pe=i.div`
  $ContainerStyled;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
   @media screen and (min-width: 1440px) {
    border-left: 1px solid ${n.bgCards};
    padding-left:49px;
  }

`,me=i.div`
  margin: 0 auto;

  position: relative;

  width: 90px;
  height: 90px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,ge=i.img`
  max-width: 100%;
  min-width: 90px;
  min-height: 90px;
  @media screen and (min-width: 768px) {
    min-width: 150px;
    min-height: 150px;
  }
`,ue=i.div`
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
`,fe=i.button`
  position: absolute;
  bottom: -12px;
  left: 34px;

  @media screen and (min-width: 768px) {
    bottom: -18px;
    left: 60px;
  }

  background-color: transparent;
  border: none;
`,ve=i.div`
  padding-top: 32px;

  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
  }
`,je=i.h3`
  margin-bottom: 4px;

  font-size: 18px;
  line-height: 1.11;
  color: ${n.withe};

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 1.16;
  }
`,be=i.p`
  margin-bottom: 40px;

  font-size: 18px;
  line-height: 1.28;
  color: ${n.titleCards};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 14px;
    line-height: 1.28;
  }
`,ye=i.div`
  margin-bottom: 40px;

  display: flex;
  gap: 14px;

  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    gap: 16px;
  }
`,P=i.div`
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
`,N=i.div`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,we=i.div`
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
`,Ce=i.button`
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

  &.lightOrange {
    fill: ${n.secondaryOrange};
  }
  &.stroke {
    stroke: ${n.secondaryOrange};
  }
`,ke=()=>{const d=L.useRef(null),p=j(b.getUserName),y=j(b.getUserAvatar),m=U(),F=async D=>{const w=D.target.files[0];if(w){const g=new FormData;g.append("avatar",w),console.log(g),await m(A.updateUserAvatar(g)),m(A.fetchCurrentUser())}},S=()=>{m(A.logOut())};return e.jsxs(pe,{children:[e.jsxs(me,{children:[e.jsx(ue,{children:y?e.jsx(ge,{src:y,alt:"Avatar"}):e.jsx(x,{width:61,height:62,className:"user",children:e.jsx("use",{href:`${c}#icon-user`})})}),e.jsxs("div",{children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},ref:d,onChange:F}),e.jsxs(fe,{onClick:()=>d.current.click(),children:[" ",e.jsx(x,{width:24,height:24,className:"lightOrange mark",children:e.jsx("use",{href:`${c}#icon-check_mark`})})]})]})]}),e.jsxs(ve,{children:[e.jsx(je,{children:p}),e.jsx(be,{children:"User"})]}),e.jsxs(ye,{children:[e.jsxs(P,{children:[e.jsxs(N,{children:[e.jsx(x,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-fluent_food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(V,{children:"0"})]}),e.jsxs(P,{children:[e.jsxs(N,{children:[" ",e.jsx(x,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-dumbbell`})}),e.jsx("p",{children:"Daily norm of sports"})]}),e.jsx(V,{children:"0 min"})]})]}),e.jsxs(we,{children:[e.jsxs("div",{children:[" ",e.jsx(x,{width:24,height:24,className:"orange",children:e.jsx("use",{href:`${c}#icon-exclamation-mark`})})]}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(Ce,{type:"button",onClick:S,children:["Logout"," ",e.jsx(x,{width:24,height:24,className:"stroke",children:e.jsx("use",{href:`${c}#icon-logout`})})]})]})},ze=()=>e.jsxs(he,{children:[e.jsx(ce,{text:"Profile Settings"}),e.jsxs(xe,{children:[e.jsx(ke,{}),e.jsx(de,{})]})]});export{ze as default};
