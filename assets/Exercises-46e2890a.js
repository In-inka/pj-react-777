import{N as E,g as r,k as b,j as e,s as t,d as y,r as x,l as B,u as l,O as k}from"./index-55a0c92b.js";import{n as j}from"./emotion-styled.browser.esm-3b58e33d.js";import"./TitlePage.styled-4371464c.js";import{C as v}from"./ContainerStyled-bb0b3bf9.js";import{s as f}from"./sprite-7084c422.js";import{e as p}from"./exercisesSelectors-192ff74d.js";const C=j.div`
    display: flex;
    gap: 28px;
    @media screen and (min-width: 768px){
        gap: 32px;
    }
`,d=j(E)`
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
            background-color: ${r.secondaryOrange};
            border-radius: 2px;
        }
    }

    @media screen and (min-width: 768px){
        font-size: 16px;
        line-height: 1.5;

    }



`,z=()=>(b(),e.jsxs(C,{children:[e.jsx(d,{to:"bodyParts",children:"Body parts"}),e.jsx(d,{to:"muscles",children:"Muscles"}),e.jsx(d,{to:"equipment",children:"Equipment"})]})),I=t.div`
    ${v}
    padding-top: 101px;
    `,S=t.div`
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

`,T=t.div`
    height: 20px;
    position: absolute;
    top: 71px;
    @media screen and (min-width: 768px){
        top: 116px;
    } 
`,$=t.button`
    height: 100%;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
    color: rgba(239, 237, 232, 0.4);
    
`,P=t.svg`    
    width: 16px;
    height: 16px;
    stroke:  rgba(239, 237, 232, 0.4);
    transform: rotate(180deg);
`,L=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,D=t.span`
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: center;
`,O=()=>{const i=()=>{window.history.back()};return e.jsx(T,{children:e.jsx($,{type:"button",onClick:i,children:e.jsxs(L,{children:[e.jsx(P,{children:e.jsx("use",{href:`${f}#icon-start`})}),e.jsx(D,{children:"Back"})]})})})},q=t.h2`
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 0em;
    text-align: left;

`,F=({text:i})=>e.jsx(q,{children:i}),N=t.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
@media screen and (min-width: 768px){
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;


}  
`,R=t.div`

    /* width: 335px; */
    position: relative;
    /* height: 141px; */
    border-radius: 12px;
    border: 1px;
    /* gap: 32px; */
    padding: 16px;
    border: 1px solid #EFEDE833;
    background-color: rgba(0,0,0,0);
    background: linear-gradient(0deg, rgba(239, 237, 232, 0.2), rgba(239, 237, 232, 0.2)),
linear-gradient(0deg, rgba(239, 237, 232, 0.05), rgba(239, 237, 232, 0.05));
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
`,K=t.p`
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${r.acceptColor};
`,U=t.svg`
    width: 16px;
    height: 16px;
    stroke: ${r.acceptColor};
`,_=t.span`
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
`,A=t.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;

`,G=t.svg`
    width: 24px;
    height: 24px;

`,H=t.h3`
    max-width: 200px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${r.withe};
@media screen and (min-width: 375px){
    max-width: 263px;
    gap: 16px;
}  

`,J=t.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 4px;
/* @media screen and (min-width: 375px){
    gap: 16px;
}  */

`,g=t.div`
    display: flex; 
    gap: 4px;
`,h=t.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(239, 237, 232, 0.4);
/* @media screen and (min-width: 375px){
    font-size: 12px;
}  */
`,m=t.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    color: ${r.withe};
/* @media screen and (min-width: 375px){
    font-size: 12px;
}  */
`,Q=({filter:i})=>{console.log("filter",i);const o=y();x.useEffect(()=>{o(B.getExercises())},[o]);const s=l(p.getExercisesData);l(p.getIsLoading),l(p.getIsError);const a=s.filter(n=>n.bodyPart===i);return console.log("newData",a),console.log("data",s),e.jsx(N,{children:a.map(n=>e.jsxs(R,{children:[e.jsx(_,{children:"WORKOUT"}),e.jsx(M,{type:"button",children:e.jsxs(W,{children:[e.jsx(K,{children:"Start"}),e.jsx(U,{children:e.jsx("use",{href:`${f}#icon-start`})})]})}),e.jsxs(A,{children:[e.jsx(G,{children:e.jsx("use",{href:`${f}#icon-running-exercises-page`})}),e.jsx(H,{children:n.name})]}),e.jsxs(J,{children:[e.jsxs(g,{children:[e.jsx(h,{children:"Burned calories:"}),e.jsx(m,{children:n.burnedCalories})]}),e.jsxs(g,{children:[e.jsx(h,{children:"Body part:"}),e.jsx(m,{children:n.bodyPart})]}),e.jsxs(g,{children:[e.jsx(h,{children:"Target:"}),e.jsx(m,{children:n.target})]})]})]},n._id))})},ne=()=>{const[i,o]=x.useState(""),s=b(),a=s.state,n=s.pathname,w=c=>{if(c==="/exercises"){if(s.state.from){const u=a.from.nameExercises;return x.useEffect(()=>{o(u)},[]),`${u}`}return}else return c==="/exercises/bodyParts"?"Body Parts":c==="/exercises/muscles"?"Muscles":c==="/exercises/equipment"?"Equipment":""};return console.log("path",s.pathname),e.jsxs(I,{children:[n==="/exercises"&&e.jsx(O,{}),e.jsxs(S,{children:[e.jsx(F,{text:w(n)}),e.jsx(z,{})]}),n==="/exercises"&&e.jsx(Q,{filter:i}),e.jsx(x.Suspense,{children:e.jsx(k,{})})]})};export{ne as default};
