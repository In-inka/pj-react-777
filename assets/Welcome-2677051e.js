import{b as p,e as s,r as c,f as g,j as e}from"./index-d23184f9.js";import{n as i}from"./emotion-styled.browser.esm-d24dce05.js";import{b as l,a as x,c as u,d as m,T as b}from"./Title-3ea85fd2.js";import{b as k,a as h}from"./main_bg_desktop-12717d49.js";import{C as w}from"./ContainerStyled-bb0b3bf9.js";import{s as f}from"./sprite-dff19c60.js";import{B as a}from"./ButtonLink-d21c654d.js";import{g as _,V as C,C as j}from"./CaloriesContainer-768d2ff4.js";const v=i.section`
  padding-top: 127px;
  padding-bottom: 40px;
  background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    url(${l});
  background-repeat: no-repeat;
  background-position: calc(50% + 38.5px) calc(50% + 120.5px);
  background-size: 298px;
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${x});
    background-repeat: no-repeat;
    background-position: calc(50% + 38.5px) calc(50% + 120.5px);
    background-size: 298px;
  }

  @media screen and (min-width: 768px) {
    background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${u});
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
        url(${m});
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
        url(${k});
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
        url(${h});
      background-repeat: no-repeat;
      background-position: calc(50% + 335px) calc(50% + 65.5px);
      background-size: 670px;
    }
  }
`,S=i.div`
  ${w}
  position: relative;
    @media screen and (min-width: 1440px) {
    padding-right: 746px;
    }
`,$=i.div`
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
`,y=i.svg`
  position: absolute;
  left: 11px;
  top: 43px;
  display: inline-block;
  width: 98px;
  height: 36px;
  stroke-width: 2;
  stroke: currentColor;
  fill: currentColor;

  @media screen and (min-width: 768px) {
    top: 84px;
    left: 16px;
    width: 187px;
    height: 69px;
  }
  @media screen and (min-width: 1440px) {
    left: 80px;
  }
`,P=()=>{const n=p(_),t=n.totalBurnedCalories.toString().slice(0,2),r=n.totalBurnedCalories.toString().slice(2,6),o=n.exercisesQuantity,d=s();return c.useEffect(()=>{!n.totalBurnedCalories&&d(g())},[]),e.jsx(v,{children:e.jsxs(S,{children:[e.jsx(b,{text:"Transforming your body shape with Power Pulse",cls:"welcome"}),e.jsx(y,{width:"98px",height:"36px",children:e.jsx("use",{href:`${f}#icon-Line`})}),e.jsxs($,{children:[e.jsx(a,{text:"Sign Up",path:"/signup",cls:"welcome"}),e.jsx(a,{text:"Sign In",path:"/signin",cls:"black"})]}),e.jsx(C,{video:o}),e.jsx(j,{val1:t,val2:r})]})})};export{P as default};
