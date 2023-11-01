import{L as b,g as f,d as w,u as j,b as z,j as e,o as C,r as S,e as T}from"./index-696a9030.js";import{n as i}from"./emotion-styled.browser.esm-d3a6e826.js";import{b as _,a as B,c as $,d as I,e as L,f as F}from"./main_bg_desktop-e1ac3f6f.js";import{C as P,s as m}from"./sprite-6ac13d8e.js";import{u as E}from"./formik.esm-1460d7dc.js";import{s as R}from"./schemas-b792b344.js";import{L as N}from"./Loader-586edebd.js";import{B as U}from"./Button-c14ae18b.js";import{g as V}from"./statisticsSelectors-5e443892.js";const A=i.section`
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
      url(${B});
    background-repeat: no-repeat;
    background-position: calc(50% + 38.5px) calc(50% + 120.5px);
    background-size: 298px;
  }

  @media screen and (min-width: 768px) {
    background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${$});
      padding-bottom: 48px;
      padding-top: 189px;
    background-position: calc(50% + 165.5px) calc(50% + 65.5px);
    background-repeat: no-repeat;
    background-size: 437px;

    @media screen and (min-width: 768px) and (min-device-pixel-ratio: 2),
      screen and (min-width: 768px) and (min-resolution: 192dpi),
      screen and (min-width: 768px) and (min-resolution: 2dppx) {
      background: linear-gradient(
          170deg,
          #040404 3.66%,
          rgba(4, 4, 4, 0) 19.15%
        ),
        linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
        url(${I});
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
        url(${L});
      padding-top: 200px;
      padding-bottom: 114px;
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
`,G=i.div`
  ${P}
  position: relative;
`,D=i.h1`
  color: rgba(239, 237, 232, 1);
  font-size: 24px;
  line-height: 1.17;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.38;
  }
`,M=i.p`
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
`,q=i.div`
  display: flex;
  font-size: 12px;
  line-height: 1.5;
  padding-top: 12px;
  @media screen and (min-width: 768px) {
    padding-left: 15px;
  }
`,H=i.p`
  color: rgba(239, 237, 232, 0.3);
`,J=i(b)`
  margin-left: 4px;
  color: #efede8;
  text-decoration: underline;
`,K=i.div`
  display: flex;
  /* justify-content: center; */
  padding-left: 101px;
  align-items: center;
  padding-top: 35px;
  @media screen and (min-width: 768px) {
    padding-top: 39px;
    justify-content: left;
    padding-left: 299px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0px;
    position: absolute;
    left: 770px;
    top: 184px;
  }
`,O=i.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 14px 18px;
  background-color: #303030;
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    padding: 20px 38px 20px 23px;
  }
`,Q=i.div``,W=i.p`
  font-size: 16px;
  line-height: 1.13;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`,X=i.p`
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.65);
  @media screen and (min-width: 768px) {
    margin-top: 8px;
    font-size: 16px;
    line-height: 1.5;
  }
`,Y=i.svg`
  fill: ${f.withe};
  padding-left: 3px;
  width: 12px;
  height: 12px;
  @media screen and (min-width: 768px) {
    &.setPlay {
      padding-left: 5px;
      width: 20px;
      height: 20px;
    }
  }
`,Z=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: #ef8964;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
`,ee=i.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding-top: 70px;
  @media screen and (min-width: 768px) {
    padding-top: 56px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 0px;
    position: absolute;
    top: 319px;
    left: 1228px;
  }
`,ie=i.div`
  display: flex;
  flex-direction: column;
  padding: 14px 18px;
  background-color: #ef8964;
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    padding: 14px 20px;
  }
`,ne=i.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`,te=i.p`
  font-size: 24px;
  line-height: 1;
  font-weight: 700;
  color: #efede8;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    margin-right: 11px;
    font-size: 48px;
    line-height: 1.04;
  }
`,ae=i.p`
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.65);
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,oe=i.svg`
  fill: ${f.withe};
  width: 12px;
  height: 12px;
  @media screen and (min-width: 768px) {
    &.setRun {
      padding-left: 2px;
      width: 16px;
      height: 16px;
    }
  }
`,re=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: #efa082;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-bottom: 12px;
  }
`,de=i.form`
  margin-top: 28px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    width: 404px;
  }
`,se=i.div`
  padding-right: 40px;
`,r=i.input`
  outline: 0;
  outline-offset: 0;
  color: #efede8;
  width: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${o=>o.theme.main};
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
`;r.defaultProps={theme:{main:"rgba(239, 237, 232, 0.3)"}};const h=i.label`
  margin: -1px;
  padding: 0;
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
`,pe=i.div`
  padding-top: 28px;
    @media screen and (min-width: 768px) {
    padding-top: 64px;}
`,ce=i(b)`
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
`,le=i.svg`
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
`,u=i.div`
  display: inline-flex;
  margin-top: 4px;
`,xe=i.div`
margin-right: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: rgba(216, 0, 39, 1);
`,ge=i.p`
  color: rgba(216, 0, 39, 1);
  font-size: 12px;
  line-height: 1.5;
`,he=i.div`
  margin-right: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: rgba(60, 191, 97, 1);
`,me=i.p`
  color: rgba(60, 191, 97, 1);
  font-size: 12px;
  line-height: 1.5;
`,ue=()=>{const o=w(),d=j(z.getIsLoading),s=(a,v)=>{o(C.register(a)),v.resetForm()},{values:p,errors:n,touched:t,isSubmitting:k,handleChange:c,handleBlur:l,handleSubmit:y}=E({initialValues:{name:"",email:"",password:""},validationSchema:R,onSubmit:s}),x=a=>e.jsxs(u,{children:[" ",e.jsx(xe,{}),e.jsx(ge,{children:a})]}),g=a=>e.jsxs(u,{children:[e.jsx(he,{}),e.jsxs(me,{children:["Success ",a]})]});return e.jsxs(de,{onSubmit:y,children:[e.jsxs(se,{children:[e.jsx(h,{htmlFor:"name",children:"Name"}),e.jsx(r,{value:p.name,onChange:c,type:"text",id:"name",name:"name",placeholder:"Name",onBlur:l,theme:t.name&&(n.name?{main:"rgba(216, 0, 39, 1)"}:{main:"rgba(60, 191, 97, 1)"})}),t.name&&(n.name?x(n.name):g("name"))," ",e.jsx(h,{htmlFor:"email",children:"Email"}),e.jsx(r,{value:p.email,onChange:c,type:"email",id:"email",name:"email",placeholder:"Email",onBlur:l,theme:t.email&&(n.email?{main:"rgba(216, 0, 39, 1)"}:{main:"rgba(60, 191, 97, 1)"})}),t.email&&(n.email?x(n.email):g("email"))," ",e.jsx(h,{htmlFor:"password",children:"Password"}),e.jsx(r,{value:p.password,onChange:c,type:"password",id:"password",name:"password",placeholder:"Password",onBlur:l,theme:t.password&&(n.password?{main:"rgba(216, 0, 39, 1)"}:{main:"rgba(60, 191, 97, 1)"})}),t.password&&(n.password?x(n.password):g("password"))," "]}),e.jsxs(pe,{children:[d?e.jsx(N,{cls:"yellowBtn"}):e.jsx(U,{disabled:k,type:"submit",text:"Sign Up"}),e.jsxs(ce,{to:"https://power-pulse-rh13.onrender.com/api/users/googleAuth",children:["Login",e.jsx(le,{className:"setG",children:e.jsx("use",{href:`${m}#icon-google`})})]})]})]})},Se=()=>{const d=j(V).totalBurnedCalories,s=w();return S.useEffect(()=>{s(T())},[]),e.jsx(A,{children:e.jsxs(G,{children:[e.jsx(D,{children:"Sign Up"}),e.jsx(M,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsx(ue,{}),e.jsxs(q,{children:[e.jsx(H,{children:"Already have account?"}),e.jsx(J,{to:"/signin",children:"Sign In"})]}),e.jsx(K,{children:e.jsxs(O,{children:[e.jsx(Z,{children:e.jsx(Y,{className:"setPlay",children:e.jsx("use",{href:`${m}#icon-Polygon`})})}),e.jsxs(Q,{children:[e.jsx(W,{children:"350+"}),e.jsx(X,{children:"Video tutorial"})]})]})}),e.jsx(ee,{children:e.jsxs(ie,{children:[e.jsx(re,{children:e.jsx(oe,{className:"setRun",children:e.jsx("use",{href:`${m}#icon-running`})})}),e.jsxs(ne,{children:[e.jsx(te,{children:d}),e.jsx(ae,{children:"cal"})]})]})})]})})};export{Se as default};