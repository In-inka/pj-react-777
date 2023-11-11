import{N as p,g as r,u as s,j as e,s as n,t as l,r as x,O as g}from"./index-5ad4c2f9.js";import{n as a}from"./emotion-styled.browser.esm-93ee9748.js";import{C as m}from"./ContainerStyled-bb0b3bf9.js";import{b as u,a as h}from"./main_bg_desktop-12717d49.js";import{s as b}from"./sprite-ca60d0ce.js";const f=a.div`
    display: flex;
    gap: 28px;
    @media screen and (min-width: 768px){
        gap: 32px;
    }
`,o=a(p)`
  position: relative;

  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0em;

  color: rgba(239, 237, 232, 0.4);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: -4px;
    content: ' ';
    background-color: ${r.secondaryOrange};
    border-radius: 2px;
    transform: scaleX(0);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active {
    color: rgba(239, 237, 232, 1);
    &::before {
      position: absolute;
      width: 100%;
      height: 4px;
      bottom: -4px;
      content: ' ';
      background-color: ${r.secondaryOrange};
      border-radius: 2px;
      transform: scaleX(1);
    }
  }
  &:focus::before,
  :hover::before {
    transform: scaleX(1);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,k=()=>{const t=s();return e.jsxs(f,{children:[e.jsx(o,{to:"bodyparts",state:{from:t},children:"Body parts"}),e.jsx(o,{to:"muscles",state:{from:t},children:"Muscles"}),e.jsx(o,{to:"equipment",state:{from:t},children:"Equipment"})]})},j=n.div`
    ${m}
    height: 100%;
    padding-top: 101px;
    padding-bottom: 80px;
    
    `,y=n.div`
@media screen and (min-width: 1440px) {
    display: block;
    &.backgroundPhoto{
        margin-left: auto;
        margin-right: auto;
        width: 100%;


                background: linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
                    url(${u});
                background-repeat: no-repeat;
                background-position: top 185px left 963px;
                background-size: 670px 902px ;
                
                
                @media screen and (min-device-pixel-ratio: 2),
                screen and (min-resolution: 192dpi),
                screen and (min-resolution: 2dppx) {
                    background: linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
                    url(${h});
                    
                    background-repeat: no-repeat;
                    background-position: top 185px left 963px;
                    background-size: 670px 902px ;
                    
            }

        }  
    }
`,w=n.div`
display: flex;
justify-content: center;
flex-direction: column;
gap: 20px;
margin-bottom: 40px;
/* margin-top: 40px; */
@media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 64px;
    margin-top: 72px;
}

`;n.picture`
    display: none;
    
    @media screen and (min-width: 1440px) {
        display: block;
        position: absolute;

        top: 185px;
        left: 963px;
        z-index: -1;
        background: linear-gradient(79.56deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%);

    }
`;const B=n.div`
    height: 20px;
    position: absolute;
    top: 71px;
    @media screen and (min-width: 768px){
        top: 116px;
    } 
`,v=n.button`
    height: 100%;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
    color: rgba(239, 237, 232, 0.4);
    
`,z=n.svg`    
    width: 16px;
    height: 16px;
    stroke:  rgba(239, 237, 232, 0.4);
    transform: rotate(180deg);
`,E=n.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,C=n.span`
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: center;
`,P=()=>{const t=()=>{window.history.back()};return e.jsx(B,{children:e.jsx(v,{type:"button",onClick:t,children:e.jsxs(E,{children:[e.jsx(z,{children:e.jsx("use",{href:`${b}#icon-start`})}),e.jsx(C,{children:"Back"})]})})})},T=n.h2`
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 0em;
    text-align: left;

`,$=({text:t})=>e.jsx(T,{children:t}),X=()=>{const{category:t}=l(),c=s(),i=t||c.pathname,d=(()=>{switch(i){case"/exercises/bodyparts":return"body parts";case"/exercises/muscles":return"Muscles";case"/exercises/equipment":return"Equipment";default:return i}})();return e.jsx(y,{className:t!==void 0&&"backgroundPhoto",children:e.jsxs(j,{children:[t!==void 0&&e.jsx(P,{}),e.jsxs(w,{children:[e.jsx($,{text:d}),e.jsx(k,{})]}),e.jsx(x.Suspense,{children:e.jsx(g,{})})]})})};export{X as default};
