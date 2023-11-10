import{L as b,e as f,b as w,d as S,j as e,o as y,r as C,f as z}from"./index-4906b3c3.js";import{n as i}from"./emotion-styled.browser.esm-b06d689a.js";import{b as _,a as I,c as B,d as L,T as $}from"./Title-79816b46.js";import{b as E,a as F}from"./main_bg_desktop-12717d49.js";import{C as T}from"./ContainerStyled-bb0b3bf9.js";import{u as V}from"./formik.esm-c1420e50.js";import{a as G}from"./schemas-3a9dbb5a.js";import{L as P}from"./Loader-e6a1d8af.js";import{B as D}from"./Button-1efc639b.js";import{s as c}from"./sprite-e3e89063.js";import{g as R,V as Q,C as A}from"./CaloriesContainer-b95a4e9b.js";import"./Hourglass-7dff8efe.js";const M=i.section`
  padding-top: 127px;
  padding-bottom: 40px;
  background: linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0) 52.97%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    url(${_});
  background-repeat: no-repeat;
  background-position: calc(50% + 38.5px) calc(50% + 120.5px);
  background-size: 298px;
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background: linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0) 52.97%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${I});
    background-repeat: no-repeat;
    background-position: calc(50% + 38.5px) calc(50% + 120.5px);
    background-size: 298px;
  }

  @media screen and (min-width: 768px) {
    background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${B});
    background-position: calc(50% + 165.5px) calc(50% + 65.5px);
    background-repeat: no-repeat;
    background-size: 437px;
    padding-top: 189px;
    padding-bottom: 48px;

    @media screen and (min-width: 768px) and (min-device-pixel-ratio: 2),
      screen and (min-width: 768px) and (min-resolution: 192dpi),
      screen and (min-width: 768px) and (min-resolution: 2dppx) {
      background: linear-gradient(
          170deg,
          #040404 3.66%,
          rgba(4, 4, 4, 0) 19.15%
        ),
        linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
        url(${L});
      background-position: calc(50% + 165.5px) calc(50% + 65.5px);
      background-repeat: no-repeat;
      background-size: 437px;
    }

    @media screen and (min-width: 1440px) {
      background: linear-gradient(
          80deg,
          #040404 -2.45%,
          rgba(4, 4, 4, 0) 68.17%
        ),
        url(${E});
      padding-top: 200px;
      padding-bottom: 210px;
      background-repeat: no-repeat;
      background-position: calc(50% + 385px) 50%;
      background-size: 670px;
    }

    @media screen and (min-width: 1440px) and (min-device-pixel-ratio: 2),
      screen and (min-width: 1440px) and (min-resolution: 192dpi),
      screen and (min-width: 1440px) and (min-resolution: 2dppx) {
      background: linear-gradient(
          80deg,
          #040404 -2.45%,
          rgba(4, 4, 4, 0) 68.17%
        ),
        url(${F});
      background-repeat: no-repeat;
      background-position: calc(50% + 335px) calc(50% + 65.5px);
      background-size: 670px;
    }
  }
`,N=i.div`
  ${T}
  position: relative;
`,U=i.p`
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    width: 496px;
    font-size: 16px;
    line-height: 1.5;
    margin-top: 16px;
  }
`,W=i.div`
  display: flex;
  font-size: 12px;
  line-height: 1.5;
  padding-top: 12px;
  @media screen and (min-width: 768px) {
    padding-left: 15px;
  }
`,q=i.p`
  color: rgba(239, 237, 232, 0.3);
`,H=i(b)`
  margin-left: 4px;
  color: #efede8;
  text-decoration: underline;
`,J=i.form`
  margin-top: 28px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    width: 404px;
  }
`,K=i.div`
  padding-right: 40px;
`,l=i.input`
  outline: 0;
  outline-offset: 0;
  color: #efede8;
  width: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${r=>r.theme.main};
  border-radius: 12px;
  padding: 13px;
  font-size: 14px;
  line-height: 1.29;
  &:not(:first-of-type) {
    margin-top: 18px;
  }
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    &:not(:first-of-type) {
      margin-top: 20px;
    }
  }
`;l.defaultProps={theme:{main:"rgba(239, 237, 232, 0.3)"}};const h=i.label`
  margin: -1px;
  padding: 0;
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
`,O=i.div`
  display: flex;
  position: relative;
  padding-top: 28px;
  @media screen and (min-width: 768px) {
    padding-top: 64px;
  }
`,X=i.div``,u=i.div`
  display: inline-flex;
  margin-top: 4px;
`,Y=i(b)`
  margin-left: 14px;
  position: relative;
  display: inline-block;
  font-size: 16px;
  line-height: 1.17;
  background-color: inherit;
  color: #efede8;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding: 11px 45px 11px 39px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }
  &:disabled {
    border-color: rgba(230, 83, 60, 1);
  }
  @media screen and (min-width: 768px) {
    padding: 16px 68px 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`,Z=i.svg`
  position: absolute;
  right: 19px;
  width: 20px;
  height: 20px;
  @media screen and (min-width: 768px) {
    &.setG {
      right: 32px;
      width: 28px;
      height: 28px;
    }
  }
`,ee=i.svg`
  margin-right: 4px;
  width: 16px;
  height: 16px;
`,ie=i.p`
  color: rgba(216, 0, 39, 1);
  font-size: 12px;
  line-height: 1.5;
`,ne=i.svg`
  margin-right: 4px;
  width: 16px;
  height: 16px;
`,re=i.p`
  color: rgba(60, 191, 97, 1);
  font-size: 12px;
  line-height: 1.5;
`,oe=()=>{const r=f(),t=w(S.getIsLoading),d=async(a,v)=>{r(y.logIn(a)),v.resetForm()},{values:s,errors:n,touched:o,isSubmitting:k,handleChange:g,handleBlur:x,handleSubmit:j}=V({initialValues:{email:"",password:""},validationSchema:G,onSubmit:d}),p=a=>e.jsxs(u,{children:[e.jsx(ee,{children:e.jsx("use",{href:`${c}#icon-error`})}),e.jsx(ie,{children:a})]}),m=a=>e.jsxs(u,{children:[e.jsx(ne,{children:e.jsx("use",{href:`${c}#icon-successes`})}),e.jsxs(re,{children:["Success ",a]})]});return e.jsxs(J,{onSubmit:j,children:[e.jsxs(K,{children:[n.name&&o.name&&p(n.name),e.jsx(h,{htmlFor:"email",children:"Email"}),e.jsx(l,{value:s.email,onChange:g,type:"email",id:"email",name:"email",placeholder:"Email",onBlur:x,theme:o.email&&(n.email?{main:"rgba(216, 0, 39, 1)"}:{main:"rgba(60, 191, 97, 1)"})}),o.email&&(n.email?p(n.email):m("email")),e.jsx(h,{htmlFor:"password",children:"Password"}),e.jsx(l,{value:s.password,onChange:g,type:"password",id:"password",name:"password",placeholder:"Password",onBlur:x,theme:o.password&&(n.password?{main:"rgba(216, 0, 39, 1)"}:{main:"rgba(60, 191, 97, 1)"})}),o.password&&(n.password?p(n.password):m("password"))]}),e.jsxs(O,{children:[t?e.jsx(P,{cls:"yellowBtn"}):e.jsx(D,{disabled:k,type:"submit",text:"Sign In"}),t?e.jsx(e.Fragment,{}):e.jsx(X,{children:e.jsxs(Y,{to:"https://power-pulse-rh13.onrender.com/api/users/googleAuth",children:["Login",e.jsx(Z,{className:"setG",children:e.jsx("use",{href:`${c}#icon-google`})})]})})]})]})},be=()=>{const r=w(R),t=r.totalBurnedCalories.toString().slice(0,2),d=r.totalBurnedCalories.toString().slice(2,6),s=r.exercisesQuantity,n=f();return C.useEffect(()=>{!r.totalBurnedCalories&&n(z())},[]),e.jsx(M,{children:e.jsxs(N,{children:[e.jsx($,{text:"Sign In",cls:"sign-page"}),e.jsx(U,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsx(oe,{}),e.jsxs(W,{children:[e.jsx(q,{children:"Don't have an account?"}),e.jsx(H,{to:"/signup",children:"Sign Up"})]}),e.jsx(Q,{cls:"sign-in",video:s}),e.jsx(A,{val1:t,val2:d})]})})};export{be as default};
