import{s as n,N as i,L as r,u as c,j as e,o as l,r as p,O as x}from"./index-298259a3.js";import{C as g}from"./ContainerStyled-7dc4dca2.js";import{u as h}from"./useDispatch-fa6c3604.js";const s=n.nav`
  ${g}
  display: flex;
  position: absolute;
  z-index: 999;
  align-items: center;
  top: 0;
  left: 50%;
  transform: translate(-50%, -0%);
  background-color: transparent;
    border-bottom: ${o=>o.theme.border};
`;s.defaultProps={theme:{border:"none"}};const u=n.div`
margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (min-width: 1440px) {
    margin-left: auto;
  }
  `,m=n(i)`
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
`,f=n.p`
  font-size: 12px;
  line-height: 1;
  font-weight: bold;
  color: #efede8;
`;n.div`
  display: inline-flex;
  align-items: center;
  justify-content: end;
`;const j=n.div`
  width: 24px;
  height: 24px;
  border: 3px solid rgba(239, 237, 232, 0.3);
  border-radius: 50%;
  @media screen and (min-width: 1440px) {
    width: 28px;
    height: 28px;
    margin-left: 32px;
  }
`,y=n(i)`

`,k=n.div`
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
`,w=n.button`
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
`,v=n.div`
  display: none;
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
    display: block;
    position: relative;
  }
`,L=n.button`
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
`;const C=o=>o.auth.isLoggedIn,z=o=>o.auth.user.name,P=o=>o.auth.isFetchingCurrentUser,S={getIsLoggedIn:C,getUserName:z,getIsFetchingCurrentUser:P},U=()=>{const o=c(S.getIsLoggedIn),d=h(),a=()=>{d(l.logOut())};return e.jsx(e.Fragment,{children:e.jsxs(s,{theme:o&&{border:"1px solid rgba(239, 237, 232, 0.2)"},children:[e.jsxs(m,{to:"/",children:[e.jsx(b,{}),e.jsx(f,{children:"PowerPulse"})]}),o&&e.jsxs(u,{children:[e.jsx(t,{to:"/diary",children:"Diary"}),e.jsx(t,{to:"/products",children:"Products"}),e.jsx(t,{to:"/exercises",children:"Exercises"}),e.jsx(j,{}),e.jsx(y,{to:"/profile",children:e.jsx(k,{})}),e.jsx(w,{type:"button"}),e.jsxs(v,{children:[e.jsx(L,{type:"button",onClick:a,children:"Logout"}),e.jsx(I,{})]})]})]})})},N=()=>e.jsxs(e.Fragment,{children:[e.jsx(U,{}),e.jsx(p.Suspense,{fallback:null,children:e.jsx(x,{})})]});export{N as default};
