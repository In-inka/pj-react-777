import{s as i,g as o,d as P,r as F,j as e,o as b,u as $,b as S}from"./index-18acc384.js";import{c as z,a as D,b as m,d as N,u as R,B as U}from"./Button-5cc76b92.js";import{S as M,t as L,f as H,C as O}from"./DaySwitch.styled-638221aa.js";import{C as T}from"./ContainerStyled-bb0b3bf9.js";import{C as E,P as V,a as _,U as G,I as c,b as Y,c as J,N as K,d as Q,e as X,S as q,T as W,D as B,A as Z,L as ee}from"./UserCards.styled-e90cab48.js";import{s as x}from"./sprite-635f82c8.js";import"./createClass-d7e43136.js";const ie=i.form`
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

`,j=i.div`
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
    border-color: ${o.title};
    border-radius: 12px;
    padding: 13px;
    font-size: 14px;
    line-height: 1.29;
    &:hover,
    &:focus {
        border-color: rgba(230, 83, 60, 1);
    }

    &:active{
        /* background-color: inherit; */
    }
    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.5;
      
    }
`;i.span`
    display: flex;
    align-items: center;
`;const I=i.div`
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
`;const se=i.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 40px;
`,f=i.label`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: ${o.titleCards};
    margin-bottom: 4px;
    @media screen and (min-width: 768px) {
        margin-bottom: 8px;
    }
`,y=i.input`
     outline: 0;
    outline-offset: 0;
    color: #efede8;
    width: 100%;
    background-color: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: ${o.title};
    border-radius: 12px;
    padding: 14px;
    font-size: 14px;
    line-height: 1.29;
    &:hover,
    &:focus {
        border-color: rgba(230, 83, 60, 1);
    }

    &:active{
        background-color: inherit;
    }
    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.5;
      
    }
`,re=i.span`
    display: flex;
    align-items: center;
    color: ${o.title};
    width: 100%;
    background-color: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: ${l=>l.theme.main};
    border-radius: 12px;
    padding: 14px;
    font-size: 14px;
    line-height: 1.29;
`,oe=i.span`
    display: block;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: ${o.titleCards};
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
`,A=i.div`
display: flex;
gap: 8px;
    margin: 0;

    /* max-width: 300px; */
`,le=i.div`
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
    
 
    
`,n=i.span`

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(99, 99, 102, 1);
  border-radius: 50%;

  &::before{
      content: "";
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
    &::before{
        width: 10px;
        height: 10px;
        margin: auto;
    }

}

  `,r=i.input`
      display: none;
    &:checked + ${n}{
        /* display: flex;
        justify-content: center;
        align-items: center; */
        border-color: ${o.bgSecondary};
        &::before{

            background-color: ${o.bgSecondary};
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
    color: ${o.withe};
@media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
}
`;i.div`
    width: 100%;
    display: flex;
    gap: 9px;
    `;const g=i.span`
    margin-left: 32px;
    display: block;
    width: 260px;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0em;
    text-align: left;
    color: ${o.withe};
    @media screen and (min-width: 768px) {
        width: 100%;
    }
    
    `;i.input`
    background-color: rgba(0,0,0,1);
    /* width: 100px; */
    border: none;
    color: ${o.withe}; 
    outline: none;
    cursor: pointer;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0em;
    text-align: left;

`;const he=z().shape({name:D().required("Name is required"),height:m().min(150,"Height must be at least 150 cm").required("Height is required"),currentWeight:m().min(35,"Weight must be at least 35 kg").required("Current weight is required"),desiredWeight:m().min(35,"Weight must be at least 35 kg").required("Desired weight is required"),birthday:N().max(new Date(new Date().getFullYear()-18,new Date().getMonth(),new Date().getDate()),"Must be at least 18 years old").required("Birthday is required"),blood:m().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:D().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:m().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),ce=()=>{const l=P(),[h,u]=F.useState(Date.now()),t=R({initialValues:{name:"",height:"",currentWeight:"",desiredWeight:"",birthday:h,blood:"",sex:"",levelActivity:""},validationSchema:he,onSubmit:async(d,v)=>{await new Promise(w=>setTimeout(w,1e3)),l(b.updateUserMetricsData(d)),console.log("data",d),v.resetForm()}});return e.jsx("div",{children:e.jsxs(ie,{onSubmit:t.handleSubmit,children:[e.jsx(f,{htmlFor:"name",children:"Basic info"}),e.jsxs(te,{children:[e.jsx(y,{name:"name",type:"text",id:"name",onChange:t.handleChange,value:t.values.name}),e.jsx(re,{children:"example@example.com"})]}),e.jsxs(ne,{children:[e.jsxs(I,{children:[e.jsxs(j,{children:[e.jsx(f,{htmlFor:"Height",children:"Height"}),e.jsx(y,{name:"height",type:"number",onChange:t.handleChange,value:t.values.height,placeholder:"0"})]}),e.jsxs(j,{children:[e.jsx(f,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(y,{name:"currentWeight",type:"number",onChange:t.handleChange,value:t.values.currentWeight,placeholder:"0"})]})]}),e.jsxs(I,{children:[e.jsxs(j,{children:[e.jsx(f,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(y,{name:"desiredWeight",type:"number",onChange:t.handleChange,value:t.values.desiredWeight,placeholder:"0"})]}),e.jsx(j,{children:e.jsx(M,{children:e.jsx(ae,{children:e.jsx(L,{selected:h,onChange:d=>{u(d),t.setFieldValue("birthday",H(d,"yyyy-MM-dd"))},customInput:e.jsx(O,{}),dateFormat:"yyyy-MM-dd",calendarStartDay:1,formatWeekDay:d=>d.substr(0,1)})})})})]})]}),e.jsx(oe,{children:"Blood"}),e.jsxs(de,{children:[e.jsxs(A,{children:[e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(r,{name:"blood",type:"radio",onChange:t.handleChange,value:"1"}),e.jsx(n,{}),e.jsx(p,{children:"1"})]})}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(r,{name:"blood",type:"radio",onChange:t.handleChange,value:"2"}),e.jsx(n,{}),e.jsx(p,{children:"2"})]})}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(r,{name:"blood",type:"radio",onChange:t.handleChange,value:"3"}),e.jsx(n,{}),e.jsx(p,{children:"3"})]})}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(r,{name:"blood",type:"radio",onChange:t.handleChange,value:"4"}),e.jsx(n,{}),e.jsx(p,{children:"4"})]})})]}),e.jsx(A,{children:e.jsxs(le,{children:[e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(r,{name:"sex",type:"radio",onChange:t.handleChange,value:"male"}),e.jsx(n,{}),e.jsx(p,{children:"Male"})]})}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(r,{name:"sex",type:"radio",onChange:t.handleChange,value:"female"}),e.jsx(n,{}),e.jsx(p,{children:"Female"})]})})]})})]}),e.jsxs(se,{children:[e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(r,{name:"levelActivity",type:"radio",onChange:t.handleChange,value:"1"}),e.jsx(n,{}),e.jsx(g,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(r,{name:"levelActivity",type:"radio",onChange:t.handleChange,value:"2"}),e.jsx(n,{}),e.jsx(g,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(r,{name:"levelActivity",type:"radio",onChange:t.handleChange,value:"3"}),e.jsx(n,{}),e.jsx(g,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(r,{name:"levelActivity",type:"radio",onChange:t.handleChange,value:"4"}),e.jsx(n,{}),e.jsx(g,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(r,{name:"levelActivity",type:"radio",onChange:t.handleChange,value:"5"}),e.jsx(n,{}),e.jsx(g,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx(U,{type:"submit",text:"Save"})]})})},xe=i.h2`
  margin-bottom: 40px;

  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;

  color: ${o.withe};
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    font-size: 32px;
    line-height: 1.37;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`,pe=({text:l,className:h})=>e.jsx(xe,{className:h,children:l}),me=i.div`
  ${T};
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
`,ge=i.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 26px;
  }
`,ue=()=>{const l=F.useRef(null),h=$(S.getUserName),u=$(S.getUserAvatar),t=P(),d=async w=>{const k=w.target.files[0];if(k){const C=new FormData;C.append("avatar",k),console.log(C),await t(b.updateUserAvatar(C)),t(b.fetchCurrentUser())}},v=()=>{t(b.logOut())};return e.jsxs(E,{children:[e.jsxs(V,{children:[e.jsx(_,{children:u?e.jsx(G,{src:u,alt:"Avatar"}):e.jsx(c,{width:61,height:62,className:"user",children:e.jsx("use",{href:`${x}#icon-user`})})}),e.jsxs("div",{children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},ref:l,onChange:d}),e.jsxs(Y,{onClick:()=>l.current.click(),children:[" ",e.jsx(c,{width:24,height:24,className:"lightOrange mark",children:e.jsx("use",{href:`${x}#icon-check_mark`})})]})]})]}),e.jsxs(J,{children:[e.jsx(K,{children:h}),e.jsx(Q,{children:"User"})]}),e.jsxs(X,{children:[e.jsxs(q,{children:[e.jsxs(W,{children:[e.jsx(c,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-fluent_food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(B,{children:"0"})]}),e.jsxs(q,{children:[e.jsxs(W,{children:[" ",e.jsx(c,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-dumbbell`})}),e.jsx("p",{children:"Daily norm of sports"})]}),e.jsx(B,{children:"0 min"})]})]}),e.jsxs(Z,{children:[e.jsxs("div",{children:[" ",e.jsx(c,{width:24,height:24,className:"orange",children:e.jsx("use",{href:`${x}#icon-exclamation-mark`})})]}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(ee,{type:"button",onClick:v,children:["Logout"," ",e.jsx(c,{width:24,height:24,className:"stroke",children:e.jsx("use",{href:`${x}#icon-logout`})})]})]})},ke=()=>e.jsxs(me,{children:[e.jsx(pe,{text:"Profile Settings"}),e.jsxs(ge,{children:[e.jsx(ue,{}),e.jsx(ce,{})]})]});export{ke as default};
