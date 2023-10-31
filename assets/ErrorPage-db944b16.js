import{s as n,g as i,L as a,j as e}from"./index-eae40e7a.js";import{b as r,a as d,c as o,d as t,e as p,f as c}from"./main_bg_desktop-e1ac3f6f.js";const g=n.section`
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
        url(${p});
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
        url(${c});
      background-repeat: no-repeat;
      background-position: calc(50% + 335px) calc(50% + 65.5px);
      background-size: 670px;
    }
  }
`,s=n.div`
  color: ${i.withe};
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
`,x=n.div`
  background-color: ${i.acceptColor};
  padding: 250px 20px;
  @media screen and (min-width: 768px) {
    padding: 309px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 221px 96px;
  }
`,l=n.h1`
  font-size: 66px;
  line-height: 1;
  margin-bottom: 14px;
  letter-spacing: 0.66px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: 93.75%;
    letter-spacing: 1.6px;
  }
`,m=n.p`
  font-size: 14px;
  line-height: 1.29;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,u=n(a)`
  display: inline-block;
  margin-top: 28px;
  padding: 12px 40px;
  border: 1px solid ${i.withe};
  border-radius: 12px;
  font-size: 16px;
  line-height: 1.125;
  color: ${i.withe};
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
`,k=()=>e.jsx(g,{children:e.jsx(s,{children:e.jsxs(x,{children:[e.jsx(l,{children:"404"}),e.jsx(m,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),e.jsx(u,{to:"/",children:"Go Home"})]})})});export{k as default};
