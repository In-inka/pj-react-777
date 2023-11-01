import{s as i,g as n,d as M,u,b as f,j as e,o as A,Q as F,r as Y}from"./index-ac303d6e.js";import{u as _}from"./formik.esm-8e0126a1.js";import{S as G,t as Q,C as J}from"./DaySwitch.styled-b96d4aa9.js";import{c as K,a as I,b as y,d as X,B as Z}from"./Button-e2e183f3.js";import{C as O,s as x}from"./sprite-aab2da31.js";import"./createClass-72b8ea59.js";const ee=i.form`
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
`,k=i.div`
  width: 100%;
`,ne=i.label`
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
`;const re=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`,C=i.label`
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
`,se=i.span`
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
`;const oe=i.div`
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
`,de=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`,a=i.div`
  /* margin-bottom: 20px; */
`,s=i.label`
  position: relative;
  /* margin-left: 32px; */
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
`,o=i.input`
  display: none;
  &:checked + ${r} {
    /* display: flex;
        justify-content: center;
        align-items: center; */
    border-color: ${n.bgSecondary};
    &::before {
      background-color: ${n.bgSecondary};
      transform: translate(-50%, -50%) scale(1);
    }
  }
`,g=i.span`
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
`;const b=i.span`
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
`;const le=K().shape({name:I().required("Name is required"),height:y().min(150,"Height must be at least 150 cm").required("Height is required"),currentWeight:y().min(35,"Weight must be at least 35 kg").required("Current weight is required"),desiredWeight:y().min(35,"Weight must be at least 35 kg").required("Desired weight is required"),birthday:X().max(new Date(new Date().getFullYear()-18,new Date().getMonth(),new Date().getDate()),"Must be at least 18 years old").required("Birthday is required"),blood:y().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:I().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:y().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),ce=i.div`
  ${O};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1440px) {
    border-left: 1px solid ${n.bgCards};
    padding-left: 49px;
  }
`,he=i.div`
  margin: 0 auto;

  position: relative;

  width: 90px;
  height: 90px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,xe=i.img`
  width: 100%;
  height: 100%;
`,pe=i.div`
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
`,me=i.button`
  position: absolute;
  bottom: -12px;
  left: 34px;

  @media screen and (min-width: 768px) {
    bottom: -18px;
    left: 60px;
  }

  background-color: transparent;
  border: none;
`,ge=i.div`
  padding-top: 32px;

  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
  }
`,ue=i.h3`
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
`,ve=i.div`
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
  &.stroke-withe {
    stroke: ${n.withe};
  }
  &.lightOrange {
    fill: ${n.secondaryOrange};
  }
  &.stroke {
    stroke: ${n.secondaryOrange};
  }
`,be=()=>{const l=M(),v=u(f.getUserName),w=u(f.getUserEmail),{height:j,currentWeight:D,desiredWeight:S,blood:z,sex:W,levelActivity:q,birthday:c}=u(f.getUserMetricData);function m(d){const h=new Date(d),B=h.getFullYear(),L=String(h.getMonth()+1).padStart(2,"0"),T=String(h.getDate()).padStart(2,"0");return`${B}-${L}-${T}`}const E=m(c),H=m(Date.now),t=_({initialValues:{name:v||"",height:j||"",currentWeight:D||"",desiredWeight:S||"",birthday:E||H,blood:z,sex:W||"",levelActivity:q},onSubmit:async d=>{console.log("Form submitted",d);try{await le.validate(d,{abortEarly:!1}),await l(A.updateUserMetricsData(d)),F.success("Success!")}catch(h){const B=h.response?h.response.data:h.message;F.error(B)}}});return e.jsx("div",{children:e.jsxs(ee,{onSubmit:t.handleSubmit,children:[e.jsx(C,{htmlFor:"name",children:"Basic info"}),e.jsxs(ie,{children:[e.jsx($,{name:"name",type:"text",id:"name",onChange:t.handleChange,value:t.values.name}),e.jsx(ae,{children:w})]}),e.jsxs(te,{children:[e.jsxs(N,{children:[e.jsxs(k,{children:[e.jsx(C,{htmlFor:"Height",children:"Height"}),e.jsx($,{name:"height",type:"number",onChange:t.handleChange,value:t.values.height,placeholder:"0"})]}),e.jsxs(k,{children:[e.jsx(C,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx($,{name:"currentWeight",type:"number",onChange:t.handleChange,value:t.values.currentWeight,placeholder:"0"})]})]}),e.jsxs(N,{children:[e.jsxs(k,{children:[e.jsx(C,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx($,{name:"desiredWeight",type:"number",onChange:t.handleChange,value:t.values.desiredWeight,placeholder:"0"})]}),e.jsx(k,{children:e.jsx(G,{children:e.jsxs(ne,{children:[e.jsx(Q,{selected:c?new Date(t.values.birthday):Date.now(),onChange:d=>{t.setFieldValue("birthday",m(d))},customInput:e.jsx(J,{}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:d=>d.substr(0,1)}),e.jsx(p,{width:18,height:18,className:"stroke-withe",children:e.jsx("use",{href:`${x}#icon-calendar`})})]})})})]})]}),e.jsx(se,{children:"Blood"}),e.jsxs(oe,{children:[e.jsxs(P,{children:[e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===1,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",1)},value:1}),e.jsx(r,{}),e.jsx(g,{children:"1"})]})}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===2,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",2)},value:2}),e.jsx(r,{}),e.jsx(g,{children:"2"})]})}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===3,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",3)},value:3}),e.jsx(r,{}),e.jsx(g,{children:"3"})]})}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===4,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",4)},value:4}),e.jsx(r,{}),e.jsx(g,{children:"4"})]})})]}),e.jsx(P,{children:e.jsxs(de,{children:[e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.sex==="male",name:"sex",type:"radio",onChange:()=>{t.setFieldValue("sex","male")},value:"male"}),e.jsx(r,{}),e.jsx(g,{children:"Male"})]})}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.sex==="female",name:"sex",type:"radio",onChange:()=>{t.setFieldValue("sex","female")},value:"female"}),e.jsx(r,{}),e.jsx(g,{children:"Female"})]})})]})})]}),e.jsxs(re,{children:[e.jsx(a,{children:e.jsxs(s,{htmlFor:"levelActivity1",children:[e.jsx(o,{id:"levelActivity1",checked:t.values.levelActivity===1,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",1)},value:1}),e.jsx(r,{}),e.jsx(b,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(a,{children:e.jsxs(s,{htmlFor:"levelActivity2",children:[e.jsx(o,{id:"levelActivity2",checked:t.values.levelActivity===2,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",2)},value:2}),e.jsx(r,{}),e.jsx(b,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(a,{children:e.jsxs(s,{htmlFor:"levelActivity3",children:[e.jsx(o,{id:"levelActivity3",checked:t.values.levelActivity===3,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",3)},value:3}),e.jsx(r,{}),e.jsx(b,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(a,{children:e.jsxs(s,{htmlFor:"levelActivity4",children:[e.jsx(o,{id:"levelActivity4",checked:t.values.levelActivity===4,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",4)},value:4}),e.jsx(r,{}),e.jsx(b,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(a,{children:e.jsxs(s,{htmlFor:"levelActivity5",children:[e.jsx(o,{id:"levelActivity5",checked:t.values.levelActivity===5,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",5)},value:5}),e.jsx(r,{}),e.jsx(b,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx(Z,{tp:"submit",text:"Save"})]})})},we=i.h2`
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
`,ke=({text:l,className:v})=>e.jsx(we,{className:v,children:l}),Ce=i.div`
  ${O};
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
`,$e=i.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 26px;
  }
`,Ae=()=>{const l=Y.useRef(null),v=u(f.getUserName),w=u(f.getUserAvatar),j=M(),{dailyIntakeCalories:D,dailyNormOfSport:S}=u(f.getUserMetricData),z=async q=>{try{const c=q.target.files[0];if(c){const m=new FormData;m.append("avatar",c),await j(A.updateUserAvatar(m)),await j(A.fetchCurrentUser()),F.success("Photo updated successfully")}}catch(c){console.error("Error loading photo:",c),F.error("An error occurred while uploading the photo")}},W=()=>{j(A.logOut())};return e.jsxs(ce,{children:[e.jsxs(he,{children:[e.jsx(pe,{children:w?e.jsx(xe,{src:w,alt:"Avatar"}):e.jsx(p,{width:61,height:62,className:"user",children:e.jsx("use",{href:`${x}#icon-user`})})}),e.jsxs("div",{children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},ref:l,onChange:z}),e.jsxs(me,{onClick:()=>l.current.click(),children:[" ",e.jsx(p,{width:24,height:24,className:"lightOrange mark",children:e.jsx("use",{href:`${x}#icon-check_mark`})})]})]})]}),e.jsxs(ge,{children:[e.jsx(ue,{children:v}),e.jsx(fe,{children:"User"})]}),e.jsxs(ve,{children:[e.jsxs(U,{children:[e.jsxs(R,{children:[e.jsx(p,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-fluent_food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(V,{children:D})]}),e.jsxs(U,{children:[e.jsxs(R,{children:[" ",e.jsx(p,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-dumbbell`})}),e.jsx("p",{children:"Daily norm of sports"})]}),e.jsxs(V,{children:[S," min"]})]})]}),e.jsxs(je,{children:[e.jsxs("div",{children:[" ",e.jsx(p,{width:24,height:24,className:"orange",children:e.jsx("use",{href:`${x}#icon-exclamation-mark`})})]}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(ye,{type:"button",onClick:W,children:["Logout"," ",e.jsx(p,{width:24,height:24,className:"stroke",children:e.jsx("use",{href:`${x}#icon-logout`})})]})]})},Be=()=>e.jsxs(Ce,{children:[e.jsx(ke,{text:"Profile Settings"}),e.jsxs($e,{children:[e.jsx(Ae,{}),e.jsx(be,{})]})]});export{Be as default};
