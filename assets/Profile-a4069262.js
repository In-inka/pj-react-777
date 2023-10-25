import{s as i,g as a,r as y,j as e,o as R}from"./index-1efe6d70.js";import{u as P,p as D}from"./schemas-45265e20.js";import{a as W}from"./SignUpForm.styled-4790c127.js";import{S as I,t as A,C as E,s as d}from"./sprite-676bc38b.js";import{T as L}from"./TitlePage-f4cf6e03.js";import{C as M}from"./ContainerStyled-7dc4dca2.js";import{u as U}from"./useDispatch-ed0586f8.js";import"./emotion-styled.browser.esm-330bf3c6.js";import"./createClass-515919fc.js";const H=i.form`
    padding-top: 18px;
    
@media screen and (min-width: 768px) {
    padding-top: 38px;
        
}
@media screen and (min-width: 1440px) {
    padding-top: 32px;
        
}
`,T=i.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 14px;
@media screen and (min-width: 768px) {
    flex-direction: row;
        
}
`,N=i.div`
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

`,m=i.div`
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
    border-color: ${a.title};
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
`;const w=i.div`
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
`;const O=i.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 40px;
`,u=i.label`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: ${a.titleCards};
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
    border-color: ${a.title};
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
`,V=i.span`
    display: flex;
    align-items: center;
    color: ${a.title};
    width: 100%;
    background-color: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: ${l=>l.theme.main};
    border-radius: 12px;
    padding: 14px;
    font-size: 14px;
    line-height: 1.29;
`,Y=i.span`
    display: block;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: ${a.titleCards};
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
`;const _=i.div`
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
@media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
}
`,C=i.div`
display: flex;
gap: 8px;
    margin: 0;

    /* max-width: 300px; */
`,J=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
`,o=i.div`
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

  `,s=i.input`
      display: none;
    &:checked + ${n}{
        /* display: flex;
        justify-content: center;
        align-items: center; */
        border-color: ${a.bgSecondary};
        &::before{

            background-color: ${a.bgSecondary};
            transform: translate(-50%, -50%) scale(1);
        }
    }
`,c=i.span`
    position: relative;
    margin-left: 32px;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0em;
    text-align: left;
    color: ${a.withe};
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
    color: ${a.withe};
    @media screen and (min-width: 768px) {
        width: 100%;
    }
    
    `;i.input`
    background-color: rgba(0,0,0,1);
    /* width: 100px; */
    border: none;
    color: ${a.withe}; 
    outline: none;
    cursor: pointer;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0em;
    text-align: left;

`;const G=()=>{const[l,h]=y.useState(new Date),j="dd.MM.yyyy",b=y.useRef(null),{handleChange:t,handleSubmit:z,values:g,isSubmitting:B}=P({initialValues:{name:"",height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"",sex:"",levelActivity:""},isSubmitting:D,onSubmit:async(x,v)=>{await new Promise(F=>setTimeout(F,1e3)),alert(JSON.stringify(x,null,2)),v.resetForm()}});return(x=>{new Date().getFullYear()-x.getFullYear()})(l),e.jsx("div",{children:e.jsxs(H,{onSubmit:z,children:[e.jsx(u,{htmlFor:"name",children:"Basic info"}),e.jsxs(T,{children:[e.jsx(f,{name:"name",type:"text",id:"name",onChange:t,value:g.name}),e.jsx(V,{children:"example@example.com"})]}),e.jsxs(N,{children:[e.jsxs(w,{children:[e.jsxs(m,{children:[e.jsx(u,{htmlFor:"Height",children:"Height"}),e.jsx(f,{name:"height",type:"number",onChange:t,value:g.height,placeholder:"0"})]}),e.jsxs(m,{children:[e.jsx(u,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(f,{name:"currentWeight",type:"number",onChange:t,value:g.currentWeight,placeholder:"0"})]})]}),e.jsxs(w,{children:[e.jsxs(m,{children:[e.jsx(u,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(f,{name:"desiredWeight",type:"number",onChange:t,value:g.desiredWeight,placeholder:"0"})]}),e.jsx(m,{children:e.jsx(I,{children:e.jsx(q,{children:e.jsx(A,{selected:l,onChange:x=>h(x),dateFormat:j,customInput:e.jsx(E,{}),ref:b})})})})]})]}),e.jsx(Y,{children:"Blood"}),e.jsxs(_,{children:[e.jsxs(C,{children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{name:"blood",type:"radio",onChange:t,value:"1"}),e.jsx(n,{}),e.jsx(c,{children:"1"})]})}),e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{name:"blood",type:"radio",onChange:t,value:"2"}),e.jsx(n,{}),e.jsx(c,{children:"2"})]})}),e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{name:"blood",type:"radio",onChange:t,value:"3"}),e.jsx(n,{}),e.jsx(c,{children:"3"})]})}),e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{name:"blood",type:"radio",onChange:t,value:"4"}),e.jsx(n,{}),e.jsx(c,{children:"4"})]})})]}),e.jsx(C,{children:e.jsxs(J,{children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{name:"sex",type:"radio",onChange:t,value:"male"}),e.jsx(n,{}),e.jsx(c,{children:"Male"})]})}),e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{name:"sex",type:"radio",onChange:t,value:"female"}),e.jsx(n,{}),e.jsx(c,{children:"Female"})]})})]})})]}),e.jsxs(O,{children:[e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{name:"levelActivity",type:"radio",onChange:t,value:"1"}),e.jsx(n,{}),e.jsx(p,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{name:"levelActivity",type:"radio",onChange:t,value:"2"}),e.jsx(n,{}),e.jsx(p,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{name:"levelActivity",type:"radio",onChange:t,value:"3"}),e.jsx(n,{}),e.jsx(p,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{name:"levelActivity",type:"radio",onChange:t,value:"4"}),e.jsx(n,{}),e.jsx(p,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(o,{children:e.jsxs(r,{children:[e.jsx(s,{name:"levelActivity",type:"radio",onChange:t,value:"5"}),e.jsx(n,{}),e.jsx(p,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx(W,{disabled:B,type:"submit",children:"Save"})]})})},K=i.div`
  ${M}
  padding-top: 156px;
  padding-bottom: 66px;
`,Q=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`,X=i.div`
  position: relative;

  width: 90px;
  height: 90px;
`,Z=i.div`
  text-align: center;
  padding-top: 31px;
`,ee=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  border: 1px solid #e6533c;
  border-radius: 50%;
  background-color: transparent;
`,ie=i.button`
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: -12px;
  left: 34px;
`,te=i.h3`
  margin-bottom: 4px;

  font-size: 18px;
  line-height: 1.11;
  color: #efede8;
`,ne=i.p`
  margin-bottom: 40px;

  font-size: 18px;
  line-height: 1.28;
  color: rgba(239, 237, 232, 0.5);
`,oe=i.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`,k=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;

  width: 165px;
  height: 96px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  background: #e6533c;
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.8);
`,S=i.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.11;
  color: #efede8;
`,$=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,re=i.div`
  margin-bottom: 41px;
  width: 335px;
  display: flex;
  gap: 8px;

  color: rgba(239, 237, 232, 0.3);

  font-size: 14px;
  line-height: 1, 28;
`,se=i.button`
  margin-bottom: 18px;
  display: flex;
  align-items: center;

  gap: 8px;
  background-color: transparent;
  color: #efede8;
  border: none;
  margin-left: auto;
`,ae=()=>{const l=U(),h=y.useRef(null),j=()=>{h.current.click()},b=()=>{l(R.logOut())};return e.jsxs(Q,{children:[e.jsx(X,{children:e.jsxs(ee,{children:[e.jsx("svg",{width:61,height:62,children:e.jsx("use",{href:`${d}#icon-user`})}),e.jsxs("div",{children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},ref:h})," ",e.jsx(ie,{onClick:j,children:e.jsx("svg",{width:24,height:24,fill:"#E6533C",children:e.jsx("use",{href:`${d}#icon-check_mark`})})})]})]})}),e.jsxs(Z,{children:[e.jsx(te,{children:"Anna Rybachok"}),e.jsx(ne,{children:"User"})]}),e.jsxs(oe,{children:[e.jsxs(k,{children:[e.jsxs($,{children:[e.jsx("svg",{width:20,height:20,fill:"#EF8964",children:e.jsx("use",{href:`${d}#icon-fluent_food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(S,{children:"0"})]}),e.jsxs(k,{children:[e.jsxs($,{children:[" ",e.jsx("svg",{width:20,height:20,fill:"#EF8964",children:e.jsx("use",{href:`${d}#icon-dumbbell`})}),e.jsx("p",{children:"Daily norm of sports"})]}),e.jsx(S,{children:"0 min"})]})]}),e.jsxs(re,{children:[e.jsxs("div",{children:[" ",e.jsx("svg",{width:24,height:24,fill:"#EF8964",children:e.jsx("use",{href:`${d}#icon-exclamation-mark`})})]}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(se,{type:"button",onClick:b,children:["Logout"," ",e.jsx("svg",{width:24,height:24,stroke:"#EF8964",children:e.jsx("use",{href:`${d}#icon-logout`})})]})]})},je=()=>e.jsxs(K,{children:[e.jsx(L,{text:"Profile Settings"}),e.jsx(ae,{}),e.jsx(G,{})]});export{je as default};
