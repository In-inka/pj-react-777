import{s as i,e as a,j as e}from"./index-89d1075b.js";import{u as v,p as w}from"./schemas-ea760167.js";import{a as C}from"./SignUpForm.styled-e5ddc2e8.js";import{T as k}from"./TitlePage-15971a16.js";import{C as S}from"./ContainerStyled-7dc4dca2.js";import"./emotion-styled.browser.esm-fac7664a.js";i.form`
    padding-top: 18px;
    padding-bottom: 66px;
`;const B=i.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 14px;
@media screen and (min-width: 768px) {
    flex-direction: row;
        
}
`,W=i.div`
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

`;i.div`
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
        background-color: inherit;
    }
    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.5;
      
    }
`;const g=i.div`
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
`;const $=i.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 40px;
`,p=i.label`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: ${a.titleCards};
    margin-bottom: 4px;
    @media screen and (min-width: 768px) {
        margin-bottom: 8px;
    }
`,x=i.input`
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
`,z=i.span`
    display: flex;
    align-items: center;
    color: ${a.title};
    width: 100%;
    background-color: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: ${t=>t.theme.main};
    border-radius: 12px;
    padding: 14px;
    font-size: 14px;
    line-height: 1.29;
`,P=i.span`
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
`;const R=i.div`
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
@media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
}
`,j=i.div`
display: flex;
gap: 8px;
    margin: 0;

    /* max-width: 300px; */
`,A=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
`,r=i.div`
  /* margin-bottom: 20px; */

`,o=i.label`
    display: flex;
    align-items: center;
    gap:9px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
 
    
`,n=i.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
    }

}

  `,s=i.input`
      display: none;
    &:checked + ${n}{
        border-color: ${a.bgSecondary};
        &::before{
            background-color: ${a.bgSecondary};
            transform: translate(-50%, -50%) scale(1);
        }
    }
`,l=i.span`

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
    justify-content: center;
    align-items: center;
`;const c=i.span`
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

`,F=()=>{const{handleChange:t,handleSubmit:u,values:d,isSubmitting:b}=v({initialValues:{name:"",height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"",sex:"",levelActivity:""},isSubmitting:w,onSubmit:async(m,f)=>{await new Promise(y=>setTimeout(y,1e3)),console.log("data",m),alert(JSON.stringify(m,null,2)),f.resetForm()}});return e.jsx("div",{children:e.jsxs("form",{onSubmit:u,children:[e.jsx(p,{htmlFor:"name",children:"Basic info"}),e.jsxs(B,{children:[e.jsx(x,{name:"name",type:"text",id:"name",onChange:t,value:d.name}),e.jsx(z,{children:"example@example.com"})]}),e.jsxs(W,{children:[e.jsxs(g,{children:[e.jsxs(h,{children:[e.jsx(p,{htmlFor:"Height",children:"Height"}),e.jsx(x,{name:"height",type:"number",onChange:t,value:d.height,placeholder:"0"})]}),e.jsxs(h,{children:[e.jsx(p,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(x,{name:"currentWeight",type:"number",onChange:t,value:d.currentWeight,placeholder:"0"})]})]}),e.jsxs(g,{children:[e.jsxs(h,{children:[e.jsx(p,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(x,{name:"desiredWeight",type:"number",onChange:t,value:d.desiredWeight,placeholder:"0"})]}),e.jsx(h,{children:e.jsx(x,{name:"birthday",type:"data",onChange:t,value:d.birthday})})]})]}),e.jsx(P,{children:"Blood"}),e.jsxs(R,{children:[e.jsxs(j,{children:[e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"blood",type:"radio",onChange:t,value:"1"}),e.jsx(n,{}),e.jsx(l,{children:"1"})]})}),e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"blood",type:"radio",onChange:t,value:"2"}),e.jsx(n,{}),e.jsx(l,{children:"2"})]})}),e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"blood",type:"radio",onChange:t,value:"3"}),e.jsx(n,{}),e.jsx(l,{children:"3"})]})}),e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"blood",type:"radio",onChange:t,value:"4"}),e.jsx(n,{}),e.jsx(l,{children:"4"})]})})]}),e.jsx(j,{children:e.jsxs(A,{children:[e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"sex",type:"radio",onChange:t,value:"male"}),e.jsx(n,{}),e.jsx(l,{children:"Male"})]})}),e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"sex",type:"radio",onChange:t,value:"female"}),e.jsx(n,{}),e.jsx(l,{children:"Female"})]})})]})})]}),e.jsxs($,{children:[e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"levelActivity",type:"radio",onChange:t,value:"1"}),e.jsx(n,{}),e.jsx(c,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"levelActivity",type:"radio",onChange:t,value:"2"}),e.jsx(n,{}),e.jsx(c,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"levelActivity",type:"radio",onChange:t,value:"3"}),e.jsx(n,{}),e.jsx(c,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"levelActivity",type:"radio",onChange:t,value:"4"}),e.jsx(n,{}),e.jsx(c,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(r,{children:e.jsxs(o,{children:[e.jsx(s,{name:"levelActivity",type:"radio",onChange:t,value:"5"}),e.jsx(n,{}),e.jsx(c,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx(C,{disabled:b,type:"submit",children:"Save"})]})})},I=i.div`
    ${S}
    padding-top: 40px;
    padding-bottom: 66px;
`,D=()=>e.jsxs(I,{children:[e.jsx(k,{text:"Profile Settings"}),e.jsx(F,{})]});export{D as default};
