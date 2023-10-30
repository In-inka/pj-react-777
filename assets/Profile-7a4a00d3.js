import{s as i,g as n,d as O,u as j,b as y,j as e,y as T,o as A,Q as B,r as Y}from"./index-94a13a7e.js";import{c as _,a as I,b as f,d as G,u as Q,B as J}from"./Button-ad4e5851.js";import{S as K,t as X,C as Z}from"./DaySwitch.styled-606ceca3.js";import{C as ee,s as h}from"./sprite-a86c3207.js";import"./createClass-e4ce5c00.js";const ie=i.form`
  padding-top: 18px;

  @media screen and (min-width: 768px) {
    padding-top: 38px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 32px;
  }
`,te=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,ne=i.div`
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
`,ae=i.label`
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
`;const P=i.div`
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
`,se=i.span`
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
`,V=i.div`
  display: flex;
  gap: 8px;
  margin: 0;

  /* max-width: 300px; */
`,le=i.div`
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
`,x=i.span`
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
`;const N=_().shape({name:I().required("Name is required"),height:f().min(150,"Height must be at least 150 cm").required("Height is required"),currentWeight:f().min(35,"Weight must be at least 35 kg").required("Current weight is required"),desiredWeight:f().min(35,"Weight must be at least 35 kg").required("Desired weight is required"),birthday:G().max(new Date(new Date().getFullYear()-18,new Date().getMonth(),new Date().getDate()),"Must be at least 18 years old").required("Birthday is required"),blood:f().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:I().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:f().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),ce=()=>{const d=O(),m=j(y.getUserName),b=j(y.getUserEmail),{height:g,currentWeight:F,desiredWeight:S,blood:D,sex:w,levelActivity:u,birthday:W}=j(y.getUserMetricData);function q(l){const c=new Date(l),z=c.getFullYear(),H=String(c.getMonth()+1).padStart(2,"0"),L=String(c.getDate()).padStart(2,"0");return`${z}-${H}-${L}`}const E=q(W),t=Q({initialValues:{name:m||"",height:g||"",currentWeight:F||"",desiredWeight:S||"",birthday:E||"",blood:D,sex:w||"",levelActivity:u},validationSchema:N,onSubmit:async l=>{try{await N.validate(l,{abortEarly:!1}),await new Promise(c=>setTimeout(c,1e3)),d(A.updateUserMetricsData(l)),B.success("Profile updated successfully")}catch(c){c.inner.forEach(z=>{B.error(z.message)})}}});return e.jsxs("div",{children:[e.jsxs(ie,{onSubmit:t.handleSubmit,children:[e.jsx(k,{htmlFor:"name",children:"Basic info"}),e.jsxs(te,{children:[e.jsx($,{name:"name",type:"text",id:"name",onChange:t.handleChange,value:t.values.name}),e.jsx(se,{children:b})]}),e.jsxs(ne,{children:[e.jsxs(P,{children:[e.jsxs(C,{children:[e.jsx(k,{htmlFor:"Height",children:"Height"}),e.jsx($,{name:"height",type:"number",onChange:t.handleChange,value:t.values.height,placeholder:"0"})]}),e.jsxs(C,{children:[e.jsx(k,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx($,{name:"currentWeight",type:"number",onChange:t.handleChange,value:t.values.currentWeight,placeholder:"0"})]})]}),e.jsxs(P,{children:[e.jsxs(C,{children:[e.jsx(k,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx($,{name:"desiredWeight",type:"number",onChange:t.handleChange,value:t.values.desiredWeight,placeholder:"0"})]}),e.jsx(C,{children:e.jsx(K,{children:e.jsx(ae,{children:e.jsx(X,{selected:W?new Date(t.values.birthday):Date.now(),onChange:l=>{t.setFieldValue("birthday",q(l))},customInput:e.jsx(Z,{}),dateFormat:"yyyy-MM-dd",calendarStartDay:1,formatWeekDay:l=>l.substr(0,1)})})})})]})]}),e.jsx(oe,{children:"Blood"}),e.jsxs(de,{children:[e.jsxs(V,{children:[e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===1,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",1)},value:1}),e.jsx(a,{}),e.jsx(x,{children:"1"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===2,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",2)},value:2}),e.jsx(a,{}),e.jsx(x,{children:"2"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===3,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",3)},value:3}),e.jsx(a,{}),e.jsx(x,{children:"3"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===4,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",4)},value:4}),e.jsx(a,{}),e.jsx(x,{children:"4"})]})})]}),e.jsx(V,{children:e.jsxs(le,{children:[e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.sex==="male",name:"sex",type:"radio",onChange:()=>{t.setFieldValue("sex","male")},value:"male"}),e.jsx(a,{}),e.jsx(x,{children:"Male"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.sex==="female",name:"sex",type:"radio",onChange:()=>{t.setFieldValue("sex","female")},value:"female"}),e.jsx(a,{}),e.jsx(x,{children:"Female"})]})})]})})]}),e.jsxs(re,{children:[e.jsx(r,{children:e.jsxs(s,{htmlFor:"levelActivity1",children:[e.jsx(o,{id:"levelActivity1",checked:t.values.levelActivity===1,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",1)},value:1}),e.jsx(a,{}),e.jsx(v,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(r,{children:e.jsxs(s,{htmlFor:"levelActivity2",children:[e.jsx(o,{id:"levelActivity2",checked:t.values.levelActivity===2,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",2)},value:2}),e.jsx(a,{}),e.jsx(v,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(r,{children:e.jsxs(s,{htmlFor:"levelActivity3",children:[e.jsx(o,{id:"levelActivity3",checked:t.values.levelActivity===3,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",3)},value:3}),e.jsx(a,{}),e.jsx(v,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(r,{children:e.jsxs(s,{htmlFor:"levelActivity4",children:[e.jsx(o,{id:"levelActivity4",checked:t.values.levelActivity===4,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",4)},value:4}),e.jsx(a,{}),e.jsx(v,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(r,{children:e.jsxs(s,{htmlFor:"levelActivity5",children:[e.jsx(o,{id:"levelActivity5",checked:t.values.levelActivity===5,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",5)},value:5}),e.jsx(a,{}),e.jsx(v,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx(J,{tp:"submit",text:"Save"})]}),e.jsx(T,{})]})},he=i.h2`
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
`,xe=({text:d,className:m})=>e.jsx(he,{className:m,children:d}),pe=i.div`
  ${ee};
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
`,me=i.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 26px;
  }
`,ge=i.div`
  $ContainerStyled;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
   @media screen and (min-width: 1440px) {
    border-left: 1px solid ${n.bgCards};
    padding-left:49px;
  }

`,ue=i.div`
  margin: 0 auto;

  position: relative;

  width: 90px;
  height: 90px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,fe=i.img`
  max-width: 100%;
  min-width: 90px;
  min-height: 90px;
  @media screen and (min-width: 768px) {
    min-width: 150px;
    min-height: 150px;
  }
`,ve=i.div`
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
`,je=i.button`
  position: absolute;
  bottom: -12px;
  left: 34px;

  @media screen and (min-width: 768px) {
    bottom: -18px;
    left: 60px;
  }

  background-color: transparent;
  border: none;
`,ye=i.div`
  padding-top: 32px;

  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
  }
`,be=i.h3`
  margin-bottom: 4px;

  font-size: 18px;
  line-height: 1.11;
  color: ${n.withe};

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 1.16;
  }
`,we=i.p`
  margin-bottom: 40px;

  font-size: 18px;
  line-height: 1.28;
  color: ${n.titleCards};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 14px;
    line-height: 1.28;
  }
`,Ce=i.div`
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
`,R=i.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.11;
  color: ${n.withe};
  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.33;
  }
`,M=i.div`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,ke=i.div`
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
`,$e=i.button`
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
`,p=i.svg`
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
`,Ae=()=>{const d=Y.useRef(null),m=j(y.getUserName),b=j(y.getUserAvatar),g=O(),F=async D=>{const w=D.target.files[0];if(w){const u=new FormData;u.append("avatar",w),console.log(u),await g(A.updateUserAvatar(u)),g(A.fetchCurrentUser())}},S=()=>{g(A.logOut())};return e.jsxs(ge,{children:[e.jsxs(ue,{children:[e.jsx(ve,{children:b?e.jsx(fe,{src:b,alt:"Avatar"}):e.jsx(p,{width:61,height:62,className:"user",children:e.jsx("use",{href:`${h}#icon-user`})})}),e.jsxs("div",{children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},ref:d,onChange:F}),e.jsxs(je,{onClick:()=>d.current.click(),children:[" ",e.jsx(p,{width:24,height:24,className:"lightOrange mark",children:e.jsx("use",{href:`${h}#icon-check_mark`})})]})]})]}),e.jsxs(ye,{children:[e.jsx(be,{children:m}),e.jsx(we,{children:"User"})]}),e.jsxs(Ce,{children:[e.jsxs(U,{children:[e.jsxs(M,{children:[e.jsx(p,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${h}#icon-fluent_food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(R,{children:"0"})]}),e.jsxs(U,{children:[e.jsxs(M,{children:[" ",e.jsx(p,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${h}#icon-dumbbell`})}),e.jsx("p",{children:"Daily norm of sports"})]}),e.jsx(R,{children:"0 min"})]})]}),e.jsxs(ke,{children:[e.jsxs("div",{children:[" ",e.jsx(p,{width:24,height:24,className:"orange",children:e.jsx("use",{href:`${h}#icon-exclamation-mark`})})]}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs($e,{type:"button",onClick:S,children:["Logout"," ",e.jsx(p,{width:24,height:24,className:"stroke",children:e.jsx("use",{href:`${h}#icon-logout`})})]})]})},qe=()=>e.jsxs(pe,{children:[e.jsx(xe,{text:"Profile Settings"}),e.jsxs(me,{children:[e.jsx(Ae,{}),e.jsx(ce,{})]})]});export{qe as default};
