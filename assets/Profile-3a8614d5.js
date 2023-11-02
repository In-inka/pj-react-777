import{s as i,g as n,d as M,u as g,b as u,j as e,o as q,Q as I,r as T}from"./index-75654b9b.js";import{u as Y}from"./formik.esm-5f283224.js";import{S as _,t as G,C as Q}from"./DaySwitch.styled-6a1ac721.js";import{c as J,a as B,b as j,d as K,B as X}from"./Button-3ac90bca.js";import{C as O,s as h}from"./sprite-f84c0715.js";import"./createClass-7d94fa85.js";const Z=i.form`
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
`,k=i.div`
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
`,re=i.span`
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
`,m=i.span`
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
`;const de=J().shape({name:B().required("Name is required"),height:j().min(150,"Height must be at least 150 cm").required("Height is required"),currentWeight:j().min(35,"Weight must be at least 35 kg").required("Current weight is required"),desiredWeight:j().min(35,"Weight must be at least 35 kg").required("Desired weight is required"),birthday:K().max(new Date(new Date().getFullYear()-18,new Date().getMonth(),new Date().getDate()),"Must be at least 18 years old").required("Birthday is required"),blood:j().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:B().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:j().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),le=i.div`
  ${O};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1440px) {
    border-left: 1px solid ${n.bgCards};
    padding-left: 49px;
    padding-right: 0;
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
  width: 100%;
  height: 100%;
`,xe=i.div`
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

  font-size: 14px;
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
`,V=i.div`
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
`,U=i.p`
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
    cursor: pointer;
  }
  &.lightOrange {
    fill: ${n.secondaryOrange};
  }
  &.stroke {
    stroke: ${n.secondaryOrange};
  }
`,ye=()=>{const d=M(),f=g(u.getUserName),b=g(u.getUserEmail),{height:w,currentWeight:A,desiredWeight:F,blood:D,sex:S,levelActivity:z,birthday:p}=g(u.getUserMetricData);function v(l){const c=new Date(l),W=c.getFullYear(),H=String(c.getMonth()+1).padStart(2,"0"),L=String(c.getDate()).padStart(2,"0");return`${W}-${H}-${L}`}const E=v(p),t=Y({initialValues:{name:f||"",height:w||"",currentWeight:A||"",desiredWeight:F||"",birthday:E||"",blood:D,sex:S||"",levelActivity:z},onSubmit:async l=>{try{await de.validate(l,{abortEarly:!1}),await d(q.updateUserMetricsData(l)),I.success("Successful!")}catch(c){const W=c.response?c.response.data:c.message;I.error(W)}}});return e.jsx("div",{children:e.jsxs(Z,{onSubmit:t.handleSubmit,children:[e.jsx(C,{htmlFor:"name",children:"Basic info"}),e.jsxs(ee,{children:[e.jsx($,{name:"name",type:"text",id:"name",onChange:t.handleChange,value:t.values.name}),e.jsx(re,{children:b})]}),e.jsxs(ie,{children:[e.jsxs(N,{children:[e.jsxs(k,{children:[e.jsx(C,{htmlFor:"Height",children:"Height"}),e.jsx($,{name:"height",type:"number",onChange:t.handleChange,value:t.values.height,placeholder:"0"})]}),e.jsxs(k,{children:[e.jsx(C,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx($,{name:"currentWeight",type:"number",onChange:t.handleChange,value:t.values.currentWeight,placeholder:"0"})]})]}),e.jsxs(N,{children:[e.jsxs(k,{children:[e.jsx(C,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx($,{name:"desiredWeight",type:"number",onChange:t.handleChange,value:t.values.desiredWeight,placeholder:"0"})]}),e.jsx(k,{children:e.jsx(_,{children:e.jsxs(te,{children:[e.jsx(G,{selected:p?new Date(t.values.birthday):Date.now(),onChange:l=>{t.setFieldValue("birthday",v(l))},customInput:e.jsx(Q,{}),showYearDropdown:!0,yearDropdownItemNumber:1,dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:l=>l.substr(0,1)}),e.jsx(x,{width:18,height:18,className:"stroke-withe",children:e.jsx("use",{href:`${h}#icon-calendar`})})]})})})]})]}),e.jsx(ae,{children:"Blood"}),e.jsxs(se,{children:[e.jsxs(P,{children:[e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===1,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",1)},value:1}),e.jsx(r,{}),e.jsx(m,{children:"1"})]})}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===2,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",2)},value:2}),e.jsx(r,{}),e.jsx(m,{children:"2"})]})}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===3,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",3)},value:3}),e.jsx(r,{}),e.jsx(m,{children:"3"})]})}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.blood===4,name:"blood",type:"radio",onChange:()=>{t.setFieldValue("blood",4)},value:4}),e.jsx(r,{}),e.jsx(m,{children:"4"})]})})]}),e.jsx(P,{children:e.jsxs(oe,{children:[e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.sex==="male",name:"sex",type:"radio",onChange:()=>{t.setFieldValue("sex","male")},value:"male"}),e.jsx(r,{}),e.jsx(m,{children:"Male"})]})}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(o,{checked:t.values.sex==="female",name:"sex",type:"radio",onChange:()=>{t.setFieldValue("sex","female")},value:"female"}),e.jsx(r,{}),e.jsx(m,{children:"Female"})]})})]})})]}),e.jsxs(ne,{children:[e.jsx(a,{children:e.jsxs(s,{htmlFor:"levelActivity1",children:[e.jsx(o,{id:"levelActivity1",checked:t.values.levelActivity===1,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",1)},value:1}),e.jsx(r,{}),e.jsx(y,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(a,{children:e.jsxs(s,{htmlFor:"levelActivity2",children:[e.jsx(o,{id:"levelActivity2",checked:t.values.levelActivity===2,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",2)},value:2}),e.jsx(r,{}),e.jsx(y,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(a,{children:e.jsxs(s,{htmlFor:"levelActivity3",children:[e.jsx(o,{id:"levelActivity3",checked:t.values.levelActivity===3,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",3)},value:3}),e.jsx(r,{}),e.jsx(y,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(a,{children:e.jsxs(s,{htmlFor:"levelActivity4",children:[e.jsx(o,{id:"levelActivity4",checked:t.values.levelActivity===4,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",4)},value:4}),e.jsx(r,{}),e.jsx(y,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(a,{children:e.jsxs(s,{htmlFor:"levelActivity5",children:[e.jsx(o,{id:"levelActivity5",checked:t.values.levelActivity===5,name:"levelActivity",type:"radio",onChange:()=>{t.setFieldValue("levelActivity",5)},value:5}),e.jsx(r,{}),e.jsx(y,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx(X,{tp:"submit",text:"Save"})]})})},be=i.h2`
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
`,we=({text:d,className:f})=>e.jsx(be,{className:f,children:d}),ke=i.div`
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
`,Ce=i.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 26px;
  }
`,$e=()=>{const d=T.useRef(null),f=g(u.getUserName),b=g(u.getUserAvatar),w=M(),{dailyIntakeCalories:A,dailyNormOfSport:F}=g(u.getUserMetricData),D=async z=>{try{const p=z.target.files[0];if(p){const v=new FormData;v.append("avatar",p),await w(q.updateUserAvatar(v))}}catch{I.error("An error occurred while uploading the photo")}},S=()=>{w(q.logOut())};return e.jsxs(le,{children:[e.jsxs(ce,{children:[e.jsx(xe,{children:b?e.jsx(he,{src:b,alt:"Avatar"}):e.jsx(x,{width:61,height:62,className:"user",children:e.jsx("use",{href:`${h}#icon-user`})})}),e.jsxs("div",{children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},ref:d,onChange:D}),e.jsxs(pe,{onClick:()=>d.current.click(),children:[" ",e.jsx(x,{width:24,height:24,className:"lightOrange mark",children:e.jsx("use",{href:`${h}#icon-check_mark`})})]})]})]}),e.jsxs(me,{children:[e.jsx(ge,{children:f}),e.jsx(ue,{children:"User"})]}),e.jsxs(fe,{children:[e.jsxs(V,{children:[e.jsxs(R,{children:[e.jsx(x,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${h}#icon-fluent_food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(U,{children:A})]}),e.jsxs(V,{children:[e.jsxs(R,{children:[" ",e.jsx(x,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${h}#icon-dumbbell`})}),e.jsx("p",{children:"Daily norm of sports"})]}),e.jsxs(U,{children:[F," min"]})]})]}),e.jsxs(ve,{children:[e.jsxs("div",{children:[" ",e.jsx(x,{width:24,height:24,className:"orange",children:e.jsx("use",{href:`${h}#icon-exclamation-mark`})})]}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(je,{type:"button",onClick:S,children:["Logout"," ",e.jsx(x,{width:24,height:24,className:"stroke",children:e.jsx("use",{href:`${h}#icon-logout`})})]})]})},qe=()=>e.jsxs(ke,{children:[e.jsx(we,{text:"Profile Settings"}),e.jsxs(Ce,{children:[e.jsx($e,{}),e.jsx(ye,{})]})]});export{qe as default};
