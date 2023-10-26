import{s as n,N as t,L as r,j as e,o as a,r as c,O as l}from"./index-87b8429a.js";import{C as p}from"./ContainerStyled-bb0b3bf9.js";import{u as x}from"./useDispatch-2c0928a3.js";const d=n.nav`
  ${p}
  display: flex;
  position: absolute;
  z-index: 999;
  align-items: center;
  top: 0;
  left: 50%;
  transform: translate(-50%, -0%);
  background-color: transparent;
    border-bottom: ${o=>o.theme.border};
`;d.defaultProps={theme:{border:"none"}};const h=n.div`
margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (min-width: 1440px) {
    margin-left: auto;
  }
  `,g=n(t)`
    display: flex;
    align-items: center;
    padding-top: 24px;
    padding-bottom: 24px;
    @media screen and (min-width: 768px) {
      padding-top: 34px;
      padding-bottom: 33px;
    }
  `,b=n.div`
  width: 36px;
  height: 13px;
  background-color: #e6533c;
  margin-right: 8px;
`,m=n.p`
  font-size: 12px;
  line-height: 1;
  font-weight: bold;
  color: #efede8;
`;n.div`
  display: inline-flex;
  align-items: center;
  justify-content: end;
`;const u=n.div`
  width: 24px;
  height: 24px;
  border: 3px solid rgba(239, 237, 232, 0.3);
  border-radius: 50%;
  @media screen and (min-width: 1440px) {
    width: 28px;
    height: 28px;
    margin-left: 32px;
  }
`,f=n(t)`

`,j=n.div`
  margin-left: 14px;
  width: 37px;
  height: 37px;
  border: 3px solid #e6533c;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    margin-left: 16px;
    width: 46px;
    height: 46px;
  }
`,y=n.button`
  margin-left: 14px;
  width: 24px;
  height: 24px;
  border: 3px solid #e6533c;
  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`,k=n.div`
  display: none;
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
    display: block;
    position: relative;
  }
`,w=n.button`
    border: none;
    color: #efede8;
    font-size: 16px;
    line-height: 1.5;
    display: block;
    background-color: transparent;
    padding-right: 28px;
`,v=n.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-0%, -50%);
  width: 20px;
  height: 20px;
  background-color: #e6533c;
  pointer-events: none;
`,i=n(r)`
  display: none;
  @media screen and (min-width: 1440px) {
    display: inline-block;
    font-size: 16px;
    line-height: 1.5;
    background-color: inherit;
    color: #efede8;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    padding: 10px 27px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      border-color: rgba(230, 83, 60, 1);
    }
    &:disabled {
      border-color: rgba(230, 83, 60, 1);
    }
    &:not(:first-of-type) {
      margin-left: 16px;
    }
  }
`;n(r)`
  display: none;
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
    display: inline-block;
    margin-right: 14px;
    background-color: #e6533c;
    color: #efede8;
    border-radius: 12px;
    border: none;
    padding: 10px 27px;
    font-size: 16px;
    line-height: 1.5;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      background-color: #ef8964;
    }
    &:disabled {
      background-color: #e6533c;
      color: #efede899;
    }
  }
`;const L=()=>{const o=x(),s=()=>{o(a.logOut())};return e.jsx(e.Fragment,{children:e.jsxs(d,{theme:{border:"1px solid rgba(239, 237, 232, 0.2)"},children:[e.jsxs(g,{to:"/",children:[e.jsx(b,{}),e.jsx(m,{children:"PowerPulse"})]}),e.jsxs(h,{children:[e.jsx(i,{to:"/diary",children:"Diary"}),e.jsx(i,{to:"/products",children:"Products"}),e.jsx(i,{to:"/exercises",children:"Exercises"}),e.jsx(u,{}),e.jsx(f,{to:"/profile",children:e.jsx(j,{})}),e.jsx(y,{type:"button"}),e.jsxs(k,{children:[e.jsx(w,{type:"button",onClick:s,children:"Logout"}),e.jsx(v,{})]})]})]})})},P=()=>e.jsxs(e.Fragment,{children:[e.jsx(L,{}),e.jsx(c.Suspense,{fallback:null,children:e.jsx(l,{})})]});export{P as default};
