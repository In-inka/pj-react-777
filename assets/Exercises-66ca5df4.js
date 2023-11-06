import{N as x,g as r,u as s,j as e,s as n,y as l,r as g,O as m}from"./index-ae5b7c09.js";import{n as a}from"./emotion-styled.browser.esm-454f8955.js";import{C as u}from"./ContainerStyled-bb0b3bf9.js";import{b as h,a as b}from"./main_bg_desktop-12717d49.js";import{s as f}from"./sprite-2d5e4fd9.js";const k=a.div`
    display: flex;
    gap: 28px;
    @media screen and (min-width: 768px){
        gap: 32px;
    }
`,o=a(x)`
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
`,j=()=>{const t=s();return e.jsxs(k,{children:[e.jsx(o,{to:"bodyparts",state:{from:t},children:"Body parts"}),e.jsx(o,{to:"muscles",state:{from:t},children:"Muscles"}),e.jsx(o,{to:"equipment",state:{from:t},children:"Equipment"})]})},y=n.div`
    ${u}
    height: 100%;
    padding-top: 101px;
    padding-bottom: 80px;
    
    `,w=n.div`
@media screen and (min-width: 1440px) {
    display: block;
    &.backgroundPhoto{
        margin-left: auto;
        margin-right: auto;
        width: 100%;


                background: linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
                    url(${h});
                background-repeat: no-repeat;
                background-position: top 185px left 963px;
                background-size: 670px 902px ;
                
                
                @media screen and (min-device-pixel-ratio: 2),
                screen and (min-resolution: 192dpi),
                screen and (min-resolution: 2dppx) {
                    background: linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
                    url(${b});
                    
                    background-repeat: no-repeat;
                    background-position: top 185px left 963px;
                    background-size: 670px 902px ;
                    
            }

        }  
    }
`,B=n.div`
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
`;const v=n.div`
    height: 20px;
    position: absolute;
    top: 71px;
    @media screen and (min-width: 768px){
        top: 116px;
    } 
`,z=n.button`
    height: 100%;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
    color: rgba(239, 237, 232, 0.4);
    
`,E=n.svg`    
    width: 16px;
    height: 16px;
    stroke:  rgba(239, 237, 232, 0.4);
    transform: rotate(180deg);
`,P=n.div`
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
`,$=()=>{const t=()=>{window.history.back()};return e.jsx(v,{children:e.jsx(z,{type:"button",onClick:t,children:e.jsxs(P,{children:[e.jsx(E,{children:e.jsx("use",{href:`${f}#icon-start`})}),e.jsx(C,{children:"Back"})]})})})},T=n.h2`
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 0em;
    text-align: left;

`,_=({text:t})=>e.jsx(T,{children:t}),X=()=>{const{category:t}=l(),c=s(),d=t||c.pathname,p=i=>{switch(i){case"/exercises/bodyparts":return"Body Parts";case"/exercises/muscles":return"Muscles";case"/exercises/equipment":return"Equipment";default:return i}};return e.jsx(w,{className:t!==void 0&&"backgroundPhoto",children:e.jsxs(y,{children:[t!==void 0&&e.jsx($,{}),e.jsxs(B,{children:[e.jsx(_,{text:p(d)}),e.jsx(j,{})]}),e.jsx(g.Suspense,{children:e.jsx(m,{})})]})})};export{X as default};
