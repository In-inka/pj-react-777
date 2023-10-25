import{s as n,N as i,L as r,u as c,a as l,b as p,j as e,o as x,r as g,O as h}from"./index-f3cd1053.js";import{C as b}from"./ContainerStyled-7dc4dca2.js";const s=n.nav`
  ${b}
  display: flex;
  position: absolute;
  z-index: 999;
  align-items: center;
  top: 0;
  left: 50%;
  transform: translate(-50%, -0%);
  background-color: transparent;
    border-bottom: ${o=>o.theme.border};
`;s.defaultProps={theme:{border:"none"}};const m=n.div`
margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (min-width: 1440px) {
    margin-left: auto;
  }
  `,u=n(i)`
    display: flex;
    align-items: center;
    padding-top: 24px;
    padding-bottom: 24px;
    @media screen and (min-width: 768px) {
      padding-top: 34px;
      padding-bottom: 33px;
    }
  `,f=n.div`
  width: 36px;
  height: 13px;
  background-color: #e6533c;
  margin-right: 8px;
`,j=n.p`
  font-size: 12px;
  line-height: 1;
  font-weight: bold;
  color: #efede8;
`;n.div`
  display: inline-flex;
  align-items: center;
  justify-content: end;
`;const y=n.div`
  width: 24px;
  height: 24px;
  border: 3px solid rgba(239, 237, 232, 0.3);
  border-radius: 50%;
  @media screen and (min-width: 1440px) {
    width: 28px;
    height: 28px;
    margin-left: 32px;
  }
`,k=n(i)`

`,w=n.div`
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
`,v=n.button`
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
`,L=n.div`
  display: none;
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
    display: block;
    position: relative;
  }
`,C=n.button`
    border: none;
    color: #efede8;
    font-size: 16px;
    line-height: 1.5;
    display: block;
    background-color: transparent;
    padding-right: 28px;
`,I=n.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-0%, -50%);
  width: 20px;
  height: 20px;
  background-color: #e6533c;
  pointer-events: none;
`,t=n(r)`
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
`;const z=()=>{const o=c(l.getIsLoggedIn),d=p(),a=()=>{d(x.logOut())};return e.jsx(e.Fragment,{children:e.jsxs(s,{theme:o&&{border:"1px solid rgba(239, 237, 232, 0.2)"},children:[e.jsxs(u,{to:"/",children:[e.jsx(f,{}),e.jsx(j,{children:"PowerPulse"})]}),o&&e.jsxs(m,{children:[e.jsx(t,{to:"/diary",children:"Diary"}),e.jsx(t,{to:"/products",children:"Products"}),e.jsx(t,{to:"/exercises",children:"Exercises"}),e.jsx(y,{}),e.jsx(k,{to:"/profile",children:e.jsx(w,{})}),e.jsx(v,{type:"button"}),e.jsxs(L,{children:[e.jsx(C,{type:"button",onClick:a,children:"Logout"}),e.jsx(I,{})]})]})]})})},B=()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(g.Suspense,{fallback:null,children:e.jsx(h,{})})]});export{B as default};
