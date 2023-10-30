import{N as w,g as o,k as u,j as e,s as t,d as j,r as b,l as k,u as x,O as y}from"./index-1accc189.js";import{n as f}from"./emotion-styled.browser.esm-eb0abd1f.js";import{C as E}from"./ContainerStyled-bb0b3bf9.js";import{b as B,a as v}from"./main_bg_desktop-12717d49.js";import{s as m}from"./sprite-adc7476b.js";import{e as p,L as z}from"./Loading-83428605.js";import"./Hourglass-32f24263.js";const C=f.div`
    display: flex;
    gap: 28px;
    @media screen and (min-width: 768px){
        gap: 32px;
    }
`,d=f(w)`
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0em;

    color: rgba(239, 237, 232, 0.4);
    &.active{
        color: rgba(239, 237, 232, 1);
        position: relative;
        &::before{
            position: absolute;
            width: 100%;
            height: 4px;
            bottom: -4px;
            content: ' ';
            background-color: ${o.secondaryOrange};
            border-radius: 2px;
        }
    }

    @media screen and (min-width: 768px){
        font-size: 16px;
        line-height: 1.5;

    }



`,I=()=>{const i=u();return e.jsxs(C,{children:[e.jsx(d,{to:"bodyParts",state:{from:i},children:"Body parts"}),e.jsx(d,{to:"muscles",state:{from:i},children:"Muscles"}),e.jsx(d,{to:"equipment",state:{from:i},children:"Equipment"})]})},S=t.div`
    ${E}
    overflow: hidden;
    padding-top: 101px;
    padding-bottom: 80px;
    position: relative;
    
    
`,$=t.div`
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

`;t.picture`
    display: none;
    
    @media screen and (min-width: 1440px) {
        display: block;
        position: absolute;

        top: 185px;
        left: 963px;
        z-index: -1;
        background: linear-gradient(79.56deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%);

    }
`;const T=t.div`
    display: none;
    
    @media screen and (min-width: 1440px) {
        display: block;
        position: absolute;
        top: 185px;
        left: 963px;
        width: 487px;
        height: 920px;
        z-index: -1;
        background: linear-gradient(80deg,#040404 -2.45%,rgba(4, 4, 4, 0) 68.17%),url(${B});
        background-repeat: no-repeat;
        background-size: 670px;
        @media screen and (min-device-pixel-ratio: 2),
        screen and (min-resolution: 192dpi),
        screen and (min-resolution: 2dppx) {    
            background: linear-gradient(80deg,#040404 -2.45%,rgba(4, 4, 4, 0) 68.17%),url(${v});
            background-repeat: no-repeat;
            background-size: contain;
    }
}
`,L=t.div`
    height: 20px;
    position: absolute;
    top: 71px;
    @media screen and (min-width: 768px){
        top: 116px;
    } 
`,P=t.button`
    height: 100%;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
    color: rgba(239, 237, 232, 0.4);
    
`,O=t.svg`    
    width: 16px;
    height: 16px;
    stroke:  rgba(239, 237, 232, 0.4);
    transform: rotate(180deg);
`,_=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,q=t.span`
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: center;
`,F=()=>{const i=()=>{window.history.back()};return e.jsx(L,{children:e.jsx(P,{type:"button",onClick:i,children:e.jsxs(_,{children:[e.jsx(O,{children:e.jsx("use",{href:`${m}#icon-start`})}),e.jsx(q,{children:"Back"})]})})})},D=t.h2`
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 0em;
    text-align: left;

`,N=({text:i})=>e.jsx(D,{children:i}),R=t.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
@media screen and (min-width: 768px){
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
    overflow-y: auto;
   
    height: 726px;
&::-webkit-scrollbar {
  width: 8px;
}


/* Track */
&::-webkit-scrollbar-track {
  background-color: rgba(239, 237, 232, 0.1);

  border-radius: 10px;
}
 
/* Handle */
&::-webkit-scrollbar-thumb {
  background: #EF8964; 
  border-radius: 10px;
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background-color: #ec7246; 
}

}  

@media screen and (min-width: 1440px){
    width: 850px;
    height: 487px;
}


`,H=t.div`
    position: relative;
    border-radius: 12px;
    border: 1px;
    padding: 16px;
    border: 1px solid #EFEDE833;
    background-color: rgba(239, 237, 232, 0.05);
    
@media screen and (min-width: 375px){
    width: 335px;
}  
@media screen and (min-width: 1440px){
    width: 405px;
}  

`,M=t.button`
    position: absolute;
    right: 16px;
    top: 16px;
    width: 55px;
    height: 18px;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
`,W=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,A=t.p`
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${o.acceptColor};
`,K=t.svg`
    width: 16px;
    height: 16px;
    stroke: ${o.acceptColor};
`,U=t.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 73px;
    height: 24px;
    border-radius: 4px;
    background: rgba(239, 237, 232, 0.05);
    font-size: 12px;
    font-weight: 700;
    line-height: 1.16;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 33px;
`,G=t.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;

`,J=t.svg`
    width: 24px;
    height: 24px;

`,Q=t.h3`
    max-width: 200px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${o.withe};
@media screen and (min-width: 375px){
    max-width: 263px;
    gap: 16px;
}  

`,V=t.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 4px;


`,l=t.div`
    display: flex; 
    gap: 4px;
`,g=t.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(239, 237, 232, 0.4);

`,h=t.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    text-transform: capitalize;
    color: ${o.withe};

`,X=({filter:i})=>{const s=j();b.useEffect(()=>{s(k.getExercises())},[]);const a=x(p.getExercisesData),c=x(p.getIsLoading);x(p.getIsError);const r=a.filter(n=>n.bodyPart===i||n.target===i||n.equipment===i);return e.jsxs(R,{children:[c&&e.jsx(z,{}),r&&r.map(n=>e.jsxs(H,{children:[e.jsx(U,{children:"WORKOUT"}),e.jsx(M,{type:"button",children:e.jsxs(W,{children:[e.jsx(A,{children:"Start"}),e.jsx(K,{children:e.jsx("use",{href:`${m}#icon-start`})})]})}),e.jsxs(G,{children:[e.jsx(J,{children:e.jsx("use",{href:`${m}#icon-running-exercises-page`})}),e.jsx(Q,{children:n.name})]}),e.jsxs(V,{children:[e.jsxs(l,{children:[e.jsx(g,{children:"Burned calories:"}),e.jsx(h,{children:n.burnedCalories})]}),e.jsxs(l,{children:[e.jsx(g,{children:"Body part:"}),e.jsx(h,{children:n.bodyPart})]}),e.jsxs(l,{children:[e.jsx(g,{children:"Target:"}),e.jsx(h,{children:n.target})]})]})]},n._id))]})},se=()=>{const s=u().pathname,a=localStorage.getItem("CategoryName"),c=r=>r==="/exercises"?`${a}`:r==="/exercises/bodyParts"?"Body Parts":r==="/exercises/muscles"?"Muscles":r==="/exercises/equipment"?"Equipment":"";return e.jsxs(S,{children:[s==="/exercises"&&e.jsx(F,{}),e.jsxs($,{children:[e.jsx(N,{text:c(s)}),e.jsx(I,{})]}),s==="/exercises"&&e.jsx(X,{filter:a}),e.jsx(b.Suspense,{children:e.jsx(y,{})}),s==="/exercises"&&e.jsx(T,{})]})};export{se as default};
