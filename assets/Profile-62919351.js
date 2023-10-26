import{s as i,g as o,r as v,j as e,b as D,o as F}from"./index-1a7a6980.js";import{u as W,p as z}from"./schemas-0aab4a39.js";import{a as A}from"./SignUpForm.styled-50788d3b.js";import{S as N,t as L,C as U}from"./DaySwitch.styled-1434ddb7.js";import{T as M}from"./TitlePage-9b56fea1.js";import{C as T}from"./ContainerStyled-bb0b3bf9.js";import{C as E,P as H,a as O,I as q,b as V,c as x,U as Y,N as _,d as J,e as G,S as C,T as k,D as S,A as K,L as Q}from"./UserCards.styled-3eed2419.js";import{s as h}from"./sprite-2afe6e56.js";import"./emotion-styled.browser.esm-fbf7e1a5.js";import"./createClass-b50fbdd6.js";const X=i.form`
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

`,j=i.div`
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
`;const $=i.div`
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
`,u=i.label`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: ${o.titleCards};
    margin-bottom: 4px;
    @media screen and (min-width: 768px) {
        margin-bottom: 8px;
    }
`,f=i.input`
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
`,ne=i.span`
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
`,se=i.span`
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
`;const re=i.div`
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
@media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
}
`,B=i.div`
display: flex;
gap: 8px;
    margin: 0;

    /* max-width: 300px; */
`,ae=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
`,s=i.div`
  /* margin-bottom: 20px; */

`,r=i.label`
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

  `,a=i.input`
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
`,d=i.span`
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
    `;const p=i.span`
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

`;const oe=()=>{const[l,m]=v.useState(new Date),b="dd.MM.yyyy",y=v.useRef(null),{handleChange:t,handleSubmit:I,values:g,isSubmitting:P}=W({initialValues:{name:"",height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"",sex:"",levelActivity:""},isSubmitting:z,onSubmit:async(c,w)=>{await new Promise(R=>setTimeout(R,1e3)),alert(JSON.stringify(c,null,2)),w.resetForm()}});return(c=>{new Date().getFullYear()-c.getFullYear()})(l),e.jsx("div",{children:e.jsxs(X,{onSubmit:I,children:[e.jsx(u,{htmlFor:"name",children:"Basic info"}),e.jsxs(Z,{children:[e.jsx(f,{name:"name",type:"text",id:"name",onChange:t,value:g.name}),e.jsx(ne,{children:"example@example.com"})]}),e.jsxs(ee,{children:[e.jsxs($,{children:[e.jsxs(j,{children:[e.jsx(u,{htmlFor:"Height",children:"Height"}),e.jsx(f,{name:"height",type:"number",onChange:t,value:g.height,placeholder:"0"})]}),e.jsxs(j,{children:[e.jsx(u,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(f,{name:"currentWeight",type:"number",onChange:t,value:g.currentWeight,placeholder:"0"})]})]}),e.jsxs($,{children:[e.jsxs(j,{children:[e.jsx(u,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(f,{name:"desiredWeight",type:"number",onChange:t,value:g.desiredWeight,placeholder:"0"})]}),e.jsx(j,{children:e.jsx(N,{children:e.jsx(ie,{children:e.jsx(L,{selected:l,onChange:c=>m(c),dateFormat:b,customInput:e.jsx(U,{}),ref:y})})})})]})]}),e.jsx(se,{children:"Blood"}),e.jsxs(re,{children:[e.jsxs(B,{children:[e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"blood",type:"radio",onChange:t,value:"1"}),e.jsx(n,{}),e.jsx(d,{children:"1"})]})}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"blood",type:"radio",onChange:t,value:"2"}),e.jsx(n,{}),e.jsx(d,{children:"2"})]})}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"blood",type:"radio",onChange:t,value:"3"}),e.jsx(n,{}),e.jsx(d,{children:"3"})]})}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"blood",type:"radio",onChange:t,value:"4"}),e.jsx(n,{}),e.jsx(d,{children:"4"})]})})]}),e.jsx(B,{children:e.jsxs(ae,{children:[e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"sex",type:"radio",onChange:t,value:"male"}),e.jsx(n,{}),e.jsx(d,{children:"Male"})]})}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"sex",type:"radio",onChange:t,value:"female"}),e.jsx(n,{}),e.jsx(d,{children:"Female"})]})})]})})]}),e.jsxs(te,{children:[e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"levelActivity",type:"radio",onChange:t,value:"1"}),e.jsx(n,{}),e.jsx(p,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"levelActivity",type:"radio",onChange:t,value:"2"}),e.jsx(n,{}),e.jsx(p,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"levelActivity",type:"radio",onChange:t,value:"3"}),e.jsx(n,{}),e.jsx(p,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"levelActivity",type:"radio",onChange:t,value:"4"}),e.jsx(n,{}),e.jsx(p,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"levelActivity",type:"radio",onChange:t,value:"5"}),e.jsx(n,{}),e.jsx(p,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx(A,{disabled:P,type:"submit",children:"Save"})]})})},le=i.div`
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
`,de=i.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 26px;
  }
`,ce=()=>{const l=D(),m=v.useRef(null),b=()=>{m.current.click()},y=()=>{l(F.logOut())};return e.jsxs(E,{children:[e.jsx(H,{children:e.jsxs(O,{children:[e.jsx(q,{href:"#"}),e.jsxs("div",{children:[e.jsx("input",{className:"hidden",type:"file",accept:"image/*",ref:m})," ",e.jsx(V,{onClick:b,children:e.jsx(x,{width:24,height:24,className:"lightOrange user",children:e.jsx("use",{href:`${h}#icon-check_mark`})})})]})]})}),e.jsxs(Y,{children:[e.jsx(_,{children:"Anna Rybachok"}),e.jsx(J,{children:"User"})]}),e.jsxs(G,{children:[e.jsxs(C,{children:[e.jsxs(k,{children:[e.jsx(x,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${h}#icon-fluent_food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(S,{children:"0"})]}),e.jsxs(C,{children:[e.jsxs(k,{children:[" ",e.jsx(x,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${h}#icon-dumbbell`})}),e.jsx("p",{children:"Daily norm of sports"})]}),e.jsx(S,{children:"0 min"})]})]}),e.jsxs(K,{children:[e.jsxs("div",{children:[" ",e.jsx(x,{width:24,height:24,className:"orange",children:e.jsx("use",{href:`${h}#icon-exclamation-mark`})})]}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(Q,{type:"button",onClick:y,children:["Logout"," ",e.jsx(x,{width:24,height:24,className:"stroke",children:e.jsx("use",{href:`${h}#icon-logout`})})]})]})},we=()=>e.jsxs(le,{children:[e.jsx(M,{text:"Profile Settings"}),e.jsxs(de,{children:[e.jsx(ce,{}),e.jsx(oe,{})]})]});export{we as default};
