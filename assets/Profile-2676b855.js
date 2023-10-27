import{j as e,s as i,g as o,r as w,u as k,b as S,d as A,o as N}from"./index-1151a808.js";import{u as W,p as z}from"./schemas-ac6d3209.js";import{a as U}from"./SignUpForm.styled-eebcbd4d.js";import{S as L,t as T,C as M}from"./DaySwitch.styled-da671d5b.js";import{T as E}from"./TitlePage.styled-2091eab8.js";import{C as H}from"./ContainerStyled-bb0b3bf9.js";import{C as O,P as q,a as V,U as Y,I as c,b as _,c as J,N as G,d as K,e as Q,S as $,T as B,D as P,A as X,L as Z}from"./UserCards.styled-4a521493.js";import{s as x}from"./sprite-108d0e9c.js";import"./emotion-styled.browser.esm-f67802b8.js";import"./createClass-1d678772.js";const ee=({text:l,className:d})=>e.jsx(E,{className:d,children:l}),ie=i.form`
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

`,u=i.div`
width: 100%;

`,se=i.label`
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
`;const D=i.div`
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
`,f=i.label`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: ${o.titleCards};
    margin-bottom: 4px;
    @media screen and (min-width: 768px) {
        margin-bottom: 8px;
    }
`,b=i.input`
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
`,ae=i.span`
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
`;const le=i.div`
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
@media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
}
`,F=i.div`
display: flex;
gap: 8px;
    margin: 0;

    /* max-width: 300px; */
`,de=i.div`
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
`,h=i.span`
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
    `;const m=i.span`
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

`;const ce=()=>{const[l,d]=w.useState(new Date),y="dd.MM.yyyy",g=w.useRef(null),{handleChange:t,handleSubmit:v,values:j,isSubmitting:I}=W({initialValues:{name:"",height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"",sex:"",levelActivity:""},isSubmitting:z,onSubmit:async(p,C)=>{await new Promise(R=>setTimeout(R,1e3)),alert(JSON.stringify(p,null,2)),C.resetForm()}});return(p=>{new Date().getFullYear()-p.getFullYear()})(l),e.jsx("div",{children:e.jsxs(ie,{onSubmit:v,children:[e.jsx(f,{htmlFor:"name",children:"Basic info"}),e.jsxs(te,{children:[e.jsx(b,{name:"name",type:"text",id:"name",onChange:t,value:j.name}),e.jsx(ae,{children:"example@example.com"})]}),e.jsxs(ne,{children:[e.jsxs(D,{children:[e.jsxs(u,{children:[e.jsx(f,{htmlFor:"Height",children:"Height"}),e.jsx(b,{name:"height",type:"number",onChange:t,value:j.height,placeholder:"0"})]}),e.jsxs(u,{children:[e.jsx(f,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(b,{name:"currentWeight",type:"number",onChange:t,value:j.currentWeight,placeholder:"0"})]})]}),e.jsxs(D,{children:[e.jsxs(u,{children:[e.jsx(f,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(b,{name:"desiredWeight",type:"number",onChange:t,value:j.desiredWeight,placeholder:"0"})]}),e.jsx(u,{children:e.jsx(L,{children:e.jsx(se,{children:e.jsx(T,{selected:l,onChange:p=>d(p),dateFormat:y,customInput:e.jsx(M,{}),ref:g})})})})]})]}),e.jsx(oe,{children:"Blood"}),e.jsxs(le,{children:[e.jsxs(F,{children:[e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"blood",type:"radio",onChange:t,value:"1"}),e.jsx(n,{}),e.jsx(h,{children:"1"})]})}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"blood",type:"radio",onChange:t,value:"2"}),e.jsx(n,{}),e.jsx(h,{children:"2"})]})}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"blood",type:"radio",onChange:t,value:"3"}),e.jsx(n,{}),e.jsx(h,{children:"3"})]})}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"blood",type:"radio",onChange:t,value:"4"}),e.jsx(n,{}),e.jsx(h,{children:"4"})]})})]}),e.jsx(F,{children:e.jsxs(de,{children:[e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"sex",type:"radio",onChange:t,value:"male"}),e.jsx(n,{}),e.jsx(h,{children:"Male"})]})}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"sex",type:"radio",onChange:t,value:"female"}),e.jsx(n,{}),e.jsx(h,{children:"Female"})]})})]})})]}),e.jsxs(re,{children:[e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"levelActivity",type:"radio",onChange:t,value:"1"}),e.jsx(n,{}),e.jsx(m,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"levelActivity",type:"radio",onChange:t,value:"2"}),e.jsx(n,{}),e.jsx(m,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"levelActivity",type:"radio",onChange:t,value:"3"}),e.jsx(n,{}),e.jsx(m,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"levelActivity",type:"radio",onChange:t,value:"4"}),e.jsx(n,{}),e.jsx(m,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(a,{name:"levelActivity",type:"radio",onChange:t,value:"5"}),e.jsx(n,{}),e.jsx(m,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx(U,{disabled:I,type:"submit",children:"Save"})]})})},xe=i.div`
  ${H};
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
`,he=i.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 26px;
  }
`,pe=()=>{const l=k(S.getUserName),d=k(S.getUserAvatar),y=A(),g=w.useRef(null),t=()=>{g.current.click()},v=()=>{y(N.logOut())};return e.jsxs(O,{children:[e.jsx(q,{children:e.jsxs(V,{children:[d?e.jsx(Y,{src:d,alt:"Avatar"}):e.jsx(c,{width:61,height:62,className:"user",children:e.jsx("use",{href:`${x}#icon-user`})}),e.jsxs("div",{children:[e.jsx("input",{className:"hidden",type:"file",accept:"image/*",ref:g})," ",e.jsx(_,{onClick:t,children:e.jsx(c,{width:24,height:24,className:"lightOrange mark",children:e.jsx("use",{href:`${x}#icon-check_mark`})})})]})]})}),e.jsxs(J,{children:[e.jsx(G,{children:l}),e.jsx(K,{children:"User"})]}),e.jsxs(Q,{children:[e.jsxs($,{children:[e.jsxs(B,{children:[e.jsx(c,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-fluent_food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(P,{children:"0"})]}),e.jsxs($,{children:[e.jsxs(B,{children:[" ",e.jsx(c,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${x}#icon-dumbbell`})}),e.jsx("p",{children:"Daily norm of sports"})]}),e.jsx(P,{children:"0 min"})]})]}),e.jsxs(X,{children:[e.jsxs("div",{children:[" ",e.jsx(c,{width:24,height:24,className:"orange",children:e.jsx("use",{href:`${x}#icon-exclamation-mark`})})]}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(Z,{type:"button",onClick:v,children:["Logout"," ",e.jsx(c,{width:24,height:24,className:"stroke",children:e.jsx("use",{href:`${x}#icon-logout`})})]})]})},Se=()=>e.jsxs(xe,{children:[e.jsx(ee,{text:"Profile Settings"}),e.jsxs(he,{children:[e.jsx(pe,{}),e.jsx(ce,{})]})]});export{Se as default};
