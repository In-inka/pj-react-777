import{s as i,g as l,r as b,j as e,o as R}from"./index-d53395fd.js";import{u as P,p as D}from"./schemas-8610c105.js";import{a as W}from"./SignUpForm.styled-39702cfe.js";import{S as $,t as I,C as A}from"./DaySwitch.styled-2a853ce8.js";import{T as H}from"./TitlePage-0fb88ffa.js";import{C as E}from"./ContainerStyled-7dc4dca2.js";import{u as L}from"./useDispatch-5658f5af.js";import"./emotion-styled.browser.esm-a51d0c41.js";import"./createClass-57adcd74.js";const M=i.form`
    padding-top: 18px;
    
@media screen and (min-width: 768px) {
    padding-top: 38px;
        
}
@media screen and (min-width: 1440px) {
    padding-top: 32px;
        
}
`,U=i.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 14px;
@media screen and (min-width: 768px) {
    flex-direction: row;
        
}
`,T=i.div`
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

`,g=i.div`
width: 100%;

`,N=i.label`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    
    color: #efede8;
    width: 100%;
    height: 100%;
    background-color: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: ${l.title};
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
`;const v=i.div`
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
`;const q=i.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 40px;
`,m=i.label`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: ${l.titleCards};
    margin-bottom: 4px;
    @media screen and (min-width: 768px) {
        margin-bottom: 8px;
    }
`,u=i.input`
     outline: 0;
    outline-offset: 0;
    color: #efede8;
    width: 100%;
    background-color: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: ${l.title};
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
`,O=i.span`
    display: flex;
    align-items: center;
    color: ${l.title};
    width: 100%;
    background-color: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: ${a=>a.theme.main};
    border-radius: 12px;
    padding: 14px;
    font-size: 14px;
    line-height: 1.29;
`,V=i.span`
    display: block;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: ${l.titleCards};
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
`;const Y=i.div`
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
@media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
}
`,w=i.div`
display: flex;
gap: 8px;
    margin: 0;

    /* max-width: 300px; */
`,_=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
`,s=i.div`
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

  `,r=i.input`
      display: none;
    &:checked + ${n}{
        /* display: flex;
        justify-content: center;
        align-items: center; */
        border-color: ${l.bgSecondary};
        &::before{

            background-color: ${l.bgSecondary};
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
    color: ${l.withe};
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
    color: ${l.withe};
    @media screen and (min-width: 768px) {
        width: 100%;
    }
    
    `;i.input`
    background-color: rgba(0,0,0,1);
    /* width: 100px; */
    border: none;
    color: ${l.withe}; 
    outline: none;
    cursor: pointer;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0em;
    text-align: left;

`;const J=()=>{const[a,p]=b.useState(new Date),f="dd.MM.yyyy",j=b.useRef(null),{handleChange:t,handleSubmit:z,values:h,isSubmitting:B}=P({initialValues:{name:"",height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"",sex:"",levelActivity:""},isSubmitting:D,onSubmit:async(c,y)=>{await new Promise(F=>setTimeout(F,1e3)),alert(JSON.stringify(c,null,2)),y.resetForm()}});return(c=>{new Date().getFullYear()-c.getFullYear()})(a),e.jsx("div",{children:e.jsxs(M,{onSubmit:z,children:[e.jsx(m,{htmlFor:"name",children:"Basic info"}),e.jsxs(U,{children:[e.jsx(u,{name:"name",type:"text",id:"name",onChange:t,value:h.name}),e.jsx(O,{children:"example@example.com"})]}),e.jsxs(T,{children:[e.jsxs(v,{children:[e.jsxs(g,{children:[e.jsx(m,{htmlFor:"Height",children:"Height"}),e.jsx(u,{name:"height",type:"number",onChange:t,value:h.height,placeholder:"0"})]}),e.jsxs(g,{children:[e.jsx(m,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(u,{name:"currentWeight",type:"number",onChange:t,value:h.currentWeight,placeholder:"0"})]})]}),e.jsxs(v,{children:[e.jsxs(g,{children:[e.jsx(m,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(u,{name:"desiredWeight",type:"number",onChange:t,value:h.desiredWeight,placeholder:"0"})]}),e.jsx(g,{children:e.jsx($,{children:e.jsx(N,{children:e.jsx(I,{selected:a,onChange:c=>p(c),dateFormat:f,customInput:e.jsx(A,{}),ref:j})})})})]})]}),e.jsx(V,{children:"Blood"}),e.jsxs(Y,{children:[e.jsxs(w,{children:[e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(r,{name:"blood",type:"radio",onChange:t,value:"1"}),e.jsx(n,{}),e.jsx(d,{children:"1"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(r,{name:"blood",type:"radio",onChange:t,value:"2"}),e.jsx(n,{}),e.jsx(d,{children:"2"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(r,{name:"blood",type:"radio",onChange:t,value:"3"}),e.jsx(n,{}),e.jsx(d,{children:"3"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(r,{name:"blood",type:"radio",onChange:t,value:"4"}),e.jsx(n,{}),e.jsx(d,{children:"4"})]})})]}),e.jsx(w,{children:e.jsxs(_,{children:[e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(r,{name:"sex",type:"radio",onChange:t,value:"male"}),e.jsx(n,{}),e.jsx(d,{children:"Male"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(r,{name:"sex",type:"radio",onChange:t,value:"female"}),e.jsx(n,{}),e.jsx(d,{children:"Female"})]})})]})})]}),e.jsxs(q,{children:[e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(r,{name:"levelActivity",type:"radio",onChange:t,value:"1"}),e.jsx(n,{}),e.jsx(x,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(r,{name:"levelActivity",type:"radio",onChange:t,value:"2"}),e.jsx(n,{}),e.jsx(x,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(r,{name:"levelActivity",type:"radio",onChange:t,value:"3"}),e.jsx(n,{}),e.jsx(x,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(r,{name:"levelActivity",type:"radio",onChange:t,value:"4"}),e.jsx(n,{}),e.jsx(x,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(r,{name:"levelActivity",type:"radio",onChange:t,value:"5"}),e.jsx(n,{}),e.jsx(x,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx(W,{disabled:B,type:"submit",children:"Save"})]})})},G=i.div`
  ${E}
  padding-top: 156px;
  padding-bottom: 66px;
`,K=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`,Q=i.div`
  position: relative;

  width: 90px;
  height: 90px;
`,X=i.div`
  text-align: center;
  padding-top: 31px;
`,Z=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  border: 1px solid #e6533c;
  border-radius: 50%;
  background-color: transparent;
`,ee=i.button`
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: -12px;
  left: 34px;
`,ie=i.h3`
  margin-bottom: 4px;

  font-size: 18px;
  line-height: 1.11;
  color: #efede8;
`,te=i.p`
  margin-bottom: 40px;

  font-size: 18px;
  line-height: 1.28;
  color: rgba(239, 237, 232, 0.5);
`,ne=i.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`,C=i.div`
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
`,k=i.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.11;
  color: #efede8;
`,S=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,se=i.div`
  margin-bottom: 41px;
  width: 335px;
  display: flex;
  gap: 8px;

  color: rgba(239, 237, 232, 0.3);

  font-size: 14px;
  line-height: 1, 28;
`,oe=i.button`
  margin-bottom: 18px;
  display: flex;
  align-items: center;

  gap: 8px;
  background-color: transparent;
  color: #efede8;
  border: none;
  margin-left: auto;
`,re=()=>{const a=L(),p=b.useRef(null),f=()=>{p.current.click()},j=()=>{a(R.logOut())};return e.jsxs(K,{children:[e.jsx(Q,{children:e.jsxs(Z,{children:[e.jsx("svg",{width:61,height:62,children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-user"})}),e.jsxs("div",{children:[e.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},ref:p})," ",e.jsx(ee,{onClick:f,children:e.jsx("svg",{width:24,height:24,fill:"#E6533C",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-check_mark"})})})]})]})}),e.jsxs(X,{children:[e.jsx(ie,{children:"Anna Rybachok"}),e.jsx(te,{children:"User"})]}),e.jsxs(ne,{children:[e.jsxs(C,{children:[e.jsxs(S,{children:[e.jsx("svg",{width:20,height:20,fill:"#EF8964",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-fluent_food"})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(k,{children:"0"})]}),e.jsxs(C,{children:[e.jsxs(S,{children:[" ",e.jsx("svg",{width:20,height:20,fill:"#EF8964",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-dumbbell"})}),e.jsx("p",{children:"Daily norm of sports"})]}),e.jsx(k,{children:"0 min"})]})]}),e.jsxs(se,{children:[e.jsxs("div",{children:[" ",e.jsx("svg",{width:24,height:24,fill:"#EF8964",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-exclamation-mark"})})]}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(oe,{type:"button",onClick:j,children:["Logout"," ",e.jsx("svg",{width:24,height:24,stroke:"#EF8964",children:e.jsx("use",{xlinkHref:"/symbol-defs.svg#icon-logout"})})]})]})},fe=()=>e.jsxs(G,{children:[e.jsx(H,{text:"Profile Settings"}),e.jsx(re,{}),e.jsx(J,{})]});export{fe as default};
