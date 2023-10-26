import{s as i,g as t,r as w,j as e,b as P,o as D}from"./index-95bb40ed.js";import{u as F,p as W}from"./schemas-e6c9c62c.js";import{a as A}from"./SignUpForm.styled-de07dee8.js";import{S as N,t as O,C as L}from"./DaySwitch.styled-da9f62c3.js";import{T as U}from"./TitlePage-d5b439d8.js";import{C as M}from"./ContainerStyled-bb0b3bf9.js";import{s as c}from"./sprite-1c9f5c14.js";import"./emotion-styled.browser.esm-b768d2bb.js";import"./createClass-b66ec2c9.js";const T=i.form`
    padding-top: 18px;
    
@media screen and (min-width: 768px) {
    padding-top: 38px;
        
}
@media screen and (min-width: 1440px) {
    padding-top: 32px;
        
}
`,E=i.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 14px;
@media screen and (min-width: 768px) {
    flex-direction: row;
        
}
`,H=i.div`
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

`,u=i.div`
width: 100%;

`,q=i.label`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    
    color: #efede8;
    width: 100%;
    height: 100%;
    background-color: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: ${t.title};
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
`;const C=i.div`
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
`;const V=i.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 40px;
`,f=i.label`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: ${t.titleCards};
    margin-bottom: 4px;
    @media screen and (min-width: 768px) {
        margin-bottom: 8px;
    }
`,j=i.input`
     outline: 0;
    outline-offset: 0;
    color: #efede8;
    width: 100%;
    background-color: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: ${t.title};
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
`,Y=i.span`
    display: flex;
    align-items: center;
    color: ${t.title};
    width: 100%;
    background-color: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: ${d=>d.theme.main};
    border-radius: 12px;
    padding: 14px;
    font-size: 14px;
    line-height: 1.29;
`,_=i.span`
    display: block;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: ${t.titleCards};
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
`;const J=i.div`
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
@media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
}
`,k=i.div`
display: flex;
gap: 8px;
    margin: 0;

    /* max-width: 300px; */
`,G=i.div`
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
    
 
    
`,o=i.span`

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

  `,a=i.input`
      display: none;
    &:checked + ${o}{
        /* display: flex;
        justify-content: center;
        align-items: center; */
        border-color: ${t.bgSecondary};
        &::before{

            background-color: ${t.bgSecondary};
            transform: translate(-50%, -50%) scale(1);
        }
    }
`,l=i.span`
    position: relative;
    margin-left: 32px;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0em;
    text-align: left;
    color: ${t.withe};
@media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
}
`;i.div`
    width: 100%;
    display: flex;
    gap: 9px;
    `;const p=i.span`
    margin-left: 32px;
    display: block;
    width: 260px;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0em;
    text-align: left;
    color: ${t.withe};
    @media screen and (min-width: 768px) {
        width: 100%;
    }
    
    `;i.input`
    background-color: rgba(0,0,0,1);
    /* width: 100px; */
    border: none;
    color: ${t.withe}; 
    outline: none;
    cursor: pointer;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0em;
    text-align: left;

`;const K=()=>{const[d,m]=w.useState(new Date),b="dd.MM.yyyy",y=w.useRef(null),{handleChange:n,handleSubmit:B,values:g,isSubmitting:R}=F({initialValues:{name:"",height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"",sex:"",levelActivity:""},isSubmitting:W,onSubmit:async(x,v)=>{await new Promise(I=>setTimeout(I,1e3)),alert(JSON.stringify(x,null,2)),v.resetForm()}});return(x=>{new Date().getFullYear()-x.getFullYear()})(d),e.jsx("div",{children:e.jsxs(T,{onSubmit:B,children:[e.jsx(f,{htmlFor:"name",children:"Basic info"}),e.jsxs(E,{children:[e.jsx(j,{name:"name",type:"text",id:"name",onChange:n,value:g.name}),e.jsx(Y,{children:"example@example.com"})]}),e.jsxs(H,{children:[e.jsxs(C,{children:[e.jsxs(u,{children:[e.jsx(f,{htmlFor:"Height",children:"Height"}),e.jsx(j,{name:"height",type:"number",onChange:n,value:g.height,placeholder:"0"})]}),e.jsxs(u,{children:[e.jsx(f,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(j,{name:"currentWeight",type:"number",onChange:n,value:g.currentWeight,placeholder:"0"})]})]}),e.jsxs(C,{children:[e.jsxs(u,{children:[e.jsx(f,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(j,{name:"desiredWeight",type:"number",onChange:n,value:g.desiredWeight,placeholder:"0"})]}),e.jsx(u,{children:e.jsx(N,{children:e.jsx(q,{children:e.jsx(O,{selected:d,onChange:x=>m(x),dateFormat:b,customInput:e.jsx(L,{}),ref:y})})})})]})]}),e.jsx(_,{children:"Blood"}),e.jsxs(J,{children:[e.jsxs(k,{children:[e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(a,{name:"blood",type:"radio",onChange:n,value:"1"}),e.jsx(o,{}),e.jsx(l,{children:"1"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(a,{name:"blood",type:"radio",onChange:n,value:"2"}),e.jsx(o,{}),e.jsx(l,{children:"2"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(a,{name:"blood",type:"radio",onChange:n,value:"3"}),e.jsx(o,{}),e.jsx(l,{children:"3"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(a,{name:"blood",type:"radio",onChange:n,value:"4"}),e.jsx(o,{}),e.jsx(l,{children:"4"})]})})]}),e.jsx(k,{children:e.jsxs(G,{children:[e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(a,{name:"sex",type:"radio",onChange:n,value:"male"}),e.jsx(o,{}),e.jsx(l,{children:"Male"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(a,{name:"sex",type:"radio",onChange:n,value:"female"}),e.jsx(o,{}),e.jsx(l,{children:"Female"})]})})]})})]}),e.jsxs(V,{children:[e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(a,{name:"levelActivity",type:"radio",onChange:n,value:"1"}),e.jsx(o,{}),e.jsx(p,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(a,{name:"levelActivity",type:"radio",onChange:n,value:"2"}),e.jsx(o,{}),e.jsx(p,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(a,{name:"levelActivity",type:"radio",onChange:n,value:"3"}),e.jsx(o,{}),e.jsx(p,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(a,{name:"levelActivity",type:"radio",onChange:n,value:"4"}),e.jsx(o,{}),e.jsx(p,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(r,{children:e.jsxs(s,{children:[e.jsx(a,{name:"levelActivity",type:"radio",onChange:n,value:"5"}),e.jsx(o,{}),e.jsx(p,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx(A,{disabled:R,type:"submit",children:"Save"})]})})},Q=i.div`
  ${M};
  padding-top: 101px;
  padding-bottom: 66px;
  @media (min-width: 768px) {
    padding-top: 156px;
    padding-bottom: 54px;
  }
`,X=i.div`
  $ContainerStyled
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`,Z=i.div`
  margin: 0 auto;

  position: relative;

  width: 90px;
  height: 90px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,ee=i.img`
  max-width: 100%;
  width: 61px;
  height: 62px;
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`,ie=i.div`
  max-width: 90px;
  min-height: 90px;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${t.acceptColor};
  border-radius: 50%;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    max-width: 150px;
    min-height: 150px;
  }
`,te=i.button`
  position: absolute;
  bottom: -12px;
  left: 34px;

  @media screen and (min-width: 768px) {
    bottom: -18px;
    left: 60px;
  }

  background-color: transparent;
  border: none;
`,ne=i.div`
  padding-top: 32px;

  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
  }
`,oe=i.h3`
  margin-bottom: 4px;

  font-size: 18px;
  line-height: 1.11;
  color: ${t.withe};

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    padding-top: 32px;
    font-size: 24px;
    line-height: 1.16;
  }
`,re=i.p`
  margin-bottom: 40px;

  font-size: 18px;
  line-height: 1.28;
  color: ${t.titleCards};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 14px;
    line-height: 1.28;
  }
`,se=i.div`
  margin-bottom: 40px;

  display: flex;
  gap: 14px;

  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    gap: 16px;
  }
`,$=i.div`
  width: 168px;
  min-height: 96px;
  padding: 14px;

  display: flex;
  flex-direction: column;
  gap: 28px;

  border-radius: 12px;
  border: 1px solid ${t.bgCards};

  background-color: ${t.acceptColor};
  font-size: 12px;
  line-height: 1.33;
  color: ${t.dashboardTextAccept};

  @media screen and (min-width: 768px) {
    width: 214px;
    min-height: 108px;
    padding: 14px 18px;
  }
`,S=i.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.11;
  color: ${t.withe};
  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.33;
  }
`,z=i.div`
  display: flex;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`,ae=i.div`
  margin-bottom: 41px;
  max-width: 335px;

  display: flex;
  gap: 8px;

  font-size: 14px;
  line-height: 1.28;

  color: ${t.title};

  @media screen and (min-width: 768px) {
    margin: 0 auto 32px auto;
    max-width: 407px;

    font-size: 16px;
    line-height: 1.5;
  }
`,de=i.button`
  margin-bottom: 18px;
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 8px;

  color: ${t.withe};

  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    margin-bottom: 38px;

    max-width: 407px;

    font-size: 16px;
    line-height: 1.5;
  }
`,h=i.svg`
  &.orange {
    fill: ${t.secondaryOrange};
  }
  @media screen and (min-width: 768px) {
    &.user {
      width: 32px;
      height: 32px;
    }
  }

  &.lightOrange {
    fill: ${t.secondaryOrange};
  }
  &.stroke {
    stroke: ${t.secondaryOrange};
  }
`,le=()=>{const d=P(),m=w.useRef(null),b=()=>{m.current.click()},y=()=>{d(D.logOut())};return e.jsxs(X,{children:[e.jsx(Z,{children:e.jsxs(ie,{children:[e.jsx(ee,{href:"#"}),e.jsxs("div",{children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},ref:m})," ",e.jsx(te,{onClick:b,children:e.jsx(h,{width:24,height:24,className:"lightOrange user",children:e.jsx("use",{href:`${c}#icon-check_mark`})})})]})]})}),e.jsxs(ne,{children:[e.jsx(oe,{children:"Anna Rybachok"}),e.jsx(re,{children:"User"})]}),e.jsxs(se,{children:[e.jsxs($,{children:[e.jsxs(z,{children:[e.jsx(h,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-fluent_food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(S,{children:"0"})]}),e.jsxs($,{children:[e.jsxs(z,{children:[" ",e.jsx(h,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${c}#icon-dumbbell`})}),e.jsx("p",{children:"Daily norm of sports"})]}),e.jsx(S,{children:"0 min"})]})]}),e.jsxs(ae,{children:[e.jsxs("div",{children:[" ",e.jsx(h,{width:24,height:24,className:"orange",children:e.jsx("use",{href:`${c}#icon-exclamation-mark`})})]}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(de,{type:"button",onClick:y,children:["Logout"," ",e.jsx(h,{width:24,height:24,className:"stroke",children:e.jsx("use",{href:`${c}#icon-logout`})})]})]})},ye=()=>e.jsxs(Q,{children:[e.jsx(U,{text:"Profile Settings"}),e.jsx(le,{}),e.jsx(K,{})]});export{ye as default};
