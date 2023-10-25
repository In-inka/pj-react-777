import{s as i,g as a,r as j,j as e}from"./index-3ec71271.js";import{u as B,p as F}from"./schemas-3ce2eacb.js";import{a as $}from"./SignUpForm.styled-99481887.js";import{S as z,t as P,C as R}from"./DaySwitch.styled-a0c0f259.js";import{T as W}from"./TitlePage-59f3e98e.js";import{C as I}from"./ContainerStyled-7dc4dca2.js";import"./emotion-styled.browser.esm-202c38fe.js";import"./createClass-be75c346.js";const D=i.form`
    padding-top: 18px;
    
@media screen and (min-width: 768px) {
    padding-top: 38px;
        
}
@media screen and (min-width: 1440px) {
    padding-top: 32px;
        
}
`,A=i.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 14px;
@media screen and (min-width: 768px) {
    flex-direction: row;
        
}
`,M=i.div`
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

`,h=i.div`
width: 100%;

`,E=i.label`
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
`;const f=i.div`
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
`;const L=i.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 40px;
`,m=i.label`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: ${a.titleCards};
    margin-bottom: 4px;
    @media screen and (min-width: 768px) {
        margin-bottom: 8px;
    }
`,g=i.input`
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
`,H=i.span`
    display: flex;
    align-items: center;
    color: ${a.title};
    width: 100%;
    background-color: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: ${c=>c.theme.main};
    border-radius: 12px;
    padding: 14px;
    font-size: 14px;
    line-height: 1.29;
`,T=i.span`
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
`;const V=i.div`
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
@media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
}
`,b=i.div`
display: flex;
gap: 8px;
    margin: 0;

    /* max-width: 300px; */
`,Y=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
`,r=i.div`
  /* margin-bottom: 20px; */

`,o=i.label`
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
`,l=i.span`
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
    `;const x=i.span`
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

`;const J=()=>{const[c,y]=j.useState(new Date),v="dd.MM.yyyy",w=j.useRef(null),{handleChange:t,handleSubmit:C,values:p,isSubmitting:S}=B({initialValues:{name:"",height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"",sex:"",levelActivity:""},isSubmitting:F,onSubmit:async(d,u)=>{await new Promise(k=>setTimeout(k,1e3)),alert(JSON.stringify(d,null,2)),u.resetForm()}});return(d=>{new Date().getFullYear()-d.getFullYear()})(c),e.jsx("div",{children:e.jsxs(D,{onSubmit:C,children:[e.jsx(m,{htmlFor:"name",children:"Basic info"}),e.jsxs(A,{children:[e.jsx(g,{name:"name",type:"text",id:"name",onChange:t,value:p.name}),e.jsx(H,{children:"example@example.com"})]}),e.jsxs(M,{children:[e.jsxs(f,{children:[e.jsxs(h,{children:[e.jsx(m,{htmlFor:"Height",children:"Height"}),e.jsx(g,{name:"height",type:"number",onChange:t,value:p.height,placeholder:"0"})]}),e.jsxs(h,{children:[e.jsx(m,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(g,{name:"currentWeight",type:"number",onChange:t,value:p.currentWeight,placeholder:"0"})]})]}),e.jsxs(f,{children:[e.jsxs(h,{children:[e.jsx(m,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(g,{name:"desiredWeight",type:"number",onChange:t,value:p.desiredWeight,placeholder:"0"})]}),e.jsx(h,{children:e.jsx(z,{children:e.jsx(E,{children:e.jsx(P,{selected:c,onChange:d=>y(d),dateFormat:v,customInput:e.jsx(R,{}),ref:w})})})})]})]}),e.jsx(T,{children:"Blood"}),e.jsxs(V,{children:[e.jsxs(b,{children:[e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"blood",type:"radio",onChange:t,value:"1"}),e.jsx(n,{}),e.jsx(l,{children:"1"})]})}),e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"blood",type:"radio",onChange:t,value:"2"}),e.jsx(n,{}),e.jsx(l,{children:"2"})]})}),e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"blood",type:"radio",onChange:t,value:"3"}),e.jsx(n,{}),e.jsx(l,{children:"3"})]})}),e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"blood",type:"radio",onChange:t,value:"4"}),e.jsx(n,{}),e.jsx(l,{children:"4"})]})})]}),e.jsx(b,{children:e.jsxs(Y,{children:[e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"sex",type:"radio",onChange:t,value:"male"}),e.jsx(n,{}),e.jsx(l,{children:"Male"})]})}),e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"sex",type:"radio",onChange:t,value:"female"}),e.jsx(n,{}),e.jsx(l,{children:"Female"})]})})]})})]}),e.jsxs(L,{children:[e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"levelActivity",type:"radio",onChange:t,value:"1"}),e.jsx(n,{}),e.jsx(x,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"levelActivity",type:"radio",onChange:t,value:"2"}),e.jsx(n,{}),e.jsx(x,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"levelActivity",type:"radio",onChange:t,value:"3"}),e.jsx(n,{}),e.jsx(x,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"levelActivity",type:"radio",onChange:t,value:"4"}),e.jsx(n,{}),e.jsx(x,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"levelActivity",type:"radio",onChange:t,value:"5"}),e.jsx(n,{}),e.jsx(x,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx($,{disabled:S,type:"submit",children:"Save"})]})})},N=i.div`
    ${I}
    padding-top: 156px;
    padding-bottom: 66px;
`,ee=()=>e.jsxs(N,{children:[e.jsx(W,{text:"Profile Settings"}),e.jsx(J,{})]});export{ee as default};
