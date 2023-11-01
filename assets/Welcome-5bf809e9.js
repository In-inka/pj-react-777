import{L as t,g as d,u as r,d as p,r as s,e as c,j as i}from"./index-ca95bce6.js";import{n as e}from"./emotion-styled.browser.esm-e0b4ad62.js";import{b as x,a as l,c as g,d as h,e as m,f as u}from"./main_bg_desktop-e1ac3f6f.js";import{C as b,s as n}from"./sprite-ae020c97.js";import{g as f}from"./statisticsSelectors-5e443892.js";const w="/pj-react-777/assets/Line-95619545.svg",k=e.section`
  padding-top: 127px;
  padding-bottom: 40px;
  background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    url(${x});
  background-repeat: no-repeat;
  background-position: calc(50% + 38.5px) calc(50% + 120.5px);
  background-size: 298px;
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${l});
    background-repeat: no-repeat;
    background-position: calc(50% + 38.5px) calc(50% + 120.5px);
    background-size: 298px;
  }

  @media screen and (min-width: 768px) {
    background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${g});
    background-position: calc(50% + 165.5px) calc(50% + 65.5px);
    padding-top: 189px;
    padding-bottom: 48px;
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
        url(${h});
      background-position: calc(50% + 165.5px) calc(50% + 65.5px);
      background-position: calc(50% + 165.5px) calc(50% + 65.5px);
      padding-top: 189px;
      padding-bottom: 48px;
      background-repeat: no-repeat;
      background-size: 437px;
    }

    @media screen and (min-width: 1440px) {
      background: linear-gradient(
          80deg,
          #040404 -2.45%,
          rgba(4, 4, 4, 0) 68.17%
        ),
        url(${m});
      padding-top: 200px;
      padding-bottom: 246px;
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
        url(${u});
      background-repeat: no-repeat;
      background-position: calc(50% + 335px) calc(50% + 65.5px);
      background-size: 670px;
    }
  }
`,j=e.div`
  ${b}
  position: relative;
`,z=e.h1`
  color: rgba(239, 237, 232, 1);
  font-size: 38px;
  line-height: 1.05;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 70px;
    line-height: 1.11;
  }
  @media screen and (min-width: 1440px) {
    width: 598px;
  }
`,y=e.div`
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
`,v=e.div`
z-index: 10;
  &.text-container {
    position: relative;
    display: inline-block;
  }

  &.text-container::before {
    z-index: -1;
    content: '';
    position: absolute;
    left: -10px;
    top: 3px;

    background-image: url(${w});
    background-size: cover;
    width: 98px;
    height: 36px;
    @media screen and (min-width: 768px) {
      left: -25px;
      width: 187px;
      height: 69px;
    }
  }
`,C=e(t)`
  display: inline-block;
  margin-right: 14px;
  font-size: 16px;
  line-height: 1.17;
  background-color: #e6533c;
  color: #efede8;
  border-radius: 12px;
  border: none;
  padding: 12px 40px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #ef8964;
  }
  &:disabled {
    background-color: #e6533c;
    color: #efede899;
  }
  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`,_=e(t)`
  display: inline-block;
  font-size: 16px;
  line-height: 1.17;
  background-color: inherit;
  color: #efede8;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding: 11px 39px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }
  &:disabled {
    border-color: rgba(230, 83, 60, 1);
  }
  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`,T=e.div`
  display: flex;
  padding-left: 101px;
  align-items: center;
  padding-top: 232px;
  @media screen and (min-width: 768px) {
    padding-top: 170px;
    justify-content: left;
    padding-left: 299px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0px;
    position: absolute;
    left: 770px;
    top: 184px;
  }
`,$=e.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 14px 18px;
  background-color: #303030;
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    padding: 20px 38px 20px 23px;
  }
`,B=e.div``,S=e.p`
  font-size: 16px;
  line-height: 1.13;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`,P=e.p`
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.65);
  @media screen and (min-width: 768px) {
    margin-top: 8px;
    font-size: 16px;
    line-height: 1.5;
  }
`,I=e.svg`
  fill: ${d.withe};
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
`,R=e.div`
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
`,L=e.div`
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
`,V=e.div`
  display: flex;
  flex-direction: column;
  padding: 14px 18px;
  background-color: #ef8964;
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    padding: 14px 20px;
  }
`,E=e.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`,N=e.p`
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
`,A=e.p`
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.65);
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,D=e.svg`
  fill: ${d.withe};
  width: 12px;
  height: 12px;
  @media screen and (min-width: 768px) {
    &.setRun {
      padding-left: 2px;
      width: 16px;
      height: 16px;
    }
  }
`,F=e.div`
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
`,J=()=>{const a=r(f).totalBurnedCalories,o=p();return s.useEffect(()=>{o(c())},[]),i.jsx(k,{children:i.jsxs(j,{children:[i.jsxs(z,{children:["Transforming your"," ",i.jsx(v,{className:"text-container",children:"body "}),"shape with Power Pulse"]}),i.jsxs(y,{children:[i.jsx(C,{to:"/signup",children:"Sign Up"}),i.jsx(_,{to:"/signin",children:"Sign In"})]}),i.jsx(T,{children:i.jsxs($,{children:[i.jsx(R,{children:i.jsx(I,{className:"setPlay",children:i.jsx("use",{href:`${n}#icon-Polygon`})})}),i.jsxs(B,{children:[i.jsx(S,{children:"350+"}),i.jsx(P,{children:"Video tutorial"})]})]})}),i.jsx(L,{children:i.jsxs(V,{children:[i.jsx(F,{children:i.jsx(D,{className:"setRun",children:i.jsx("use",{href:`${n}#icon-running`})})}),i.jsxs(E,{children:[i.jsx(N,{children:a}),i.jsx(A,{children:"cal"})]})]})})]})})};export{J as default};
