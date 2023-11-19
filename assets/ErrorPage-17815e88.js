import{s as n,g as a,j as e}from"./index-a70ed76e.js";import{B as i}from"./ButtonLink-cca9c13b.js";import{b as r,a as d,c as o,d as t,T as p}from"./Title-e893a863.js";import{b as c,a as g}from"./main_bg_desktop-12717d49.js";const s=n.section`
  background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    url(${r});
  background-repeat: no-repeat;
  background-position: calc(50% + 53.5px) calc(50% + 120.5px);
  background-size: 298px;
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${d});
    background-repeat: no-repeat;
    background-position: calc(50% + 53.5px) calc(50% + 120.5px);
    background-size: 298px;
  }

  @media screen and (min-width: 768px) {
    background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${o});
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
        url(${t});
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
        url(${c});
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
        url(${g});
      background-repeat: no-repeat;
      background-position: calc(50% + 335px) calc(50% + 65.5px);
      background-size: 670px;
    }
  }
`,x=n.div`
  color: ${a.withe};
  padding-right: 135px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 348px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-right: 771px;
  }
`,l=n.div`
  background-color: ${a.acceptColor};
  padding: 250px 20px;
  @media screen and (min-width: 768px) {
    padding: 309px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 221px 96px;
  }
`,m=n.p`
  font-size: 14px;
  line-height: 1.29;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,w=()=>e.jsx(s,{children:e.jsx(x,{children:e.jsxs(l,{children:[e.jsx(p,{text:"404",cls:"error-page"}),e.jsx(m,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),e.jsx(i,{text:"Go Home",cls:"error-page",path:"/"})]})})});export{w as default};
