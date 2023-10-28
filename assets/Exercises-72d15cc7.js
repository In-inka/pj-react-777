import{N as b,g as a,k as f,j as e,s as t,d as w,r as u,l as y,u as x,O as E}from"./index-f44b395a.js";import{n as j}from"./emotion-styled.browser.esm-ad36edd3.js";import{C as B}from"./ContainerStyled-bb0b3bf9.js";import{s as m}from"./sprite-cdc70a8d.js";import{e as l}from"./exercisesSelectors-192ff74d.js";import{T as k}from"./Hourglass-6661aa72.js";const v=j.div`
    display: flex;
    gap: 28px;
    @media screen and (min-width: 768px){
        gap: 32px;
    }
`,p=j(b)`
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
            background-color: ${a.secondaryOrange};
            border-radius: 2px;
        }
    }

    @media screen and (min-width: 768px){
        font-size: 16px;
        line-height: 1.5;

    }



`,C=()=>{const i=f();return e.jsxs(v,{children:[e.jsx(p,{to:"bodyParts",state:{from:i},children:"Body parts"}),e.jsx(p,{to:"muscles",state:{from:i},children:"Muscles"}),e.jsx(p,{to:"equipment",state:{from:i},children:"Equipment"})]})},S=t.div`
    ${B}
    padding-top: 101px;
    `,I=t.div`
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

`,z=t.div`
    height: 20px;
    position: absolute;
    top: 71px;
    @media screen and (min-width: 768px){
        top: 116px;
    } 
`,T=t.button`
    height: 100%;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
    color: rgba(239, 237, 232, 0.4);
    
`,L=t.svg`    
    width: 16px;
    height: 16px;
    stroke:  rgba(239, 237, 232, 0.4);
    transform: rotate(180deg);
`,$=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,P=t.span`
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: center;
`,O=()=>{const i=()=>{window.history.back()};return e.jsx(z,{children:e.jsx(T,{type:"button",onClick:i,children:e.jsxs($,{children:[e.jsx(L,{children:e.jsx("use",{href:`${m}#icon-start`})}),e.jsx(P,{children:"Back"})]})})})},q=t.h2`
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 0em;
    text-align: left;

`,D=({text:i})=>e.jsx(q,{children:i}),F=t.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
@media screen and (min-width: 768px){
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;


}  
`,N=t.div`

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

`,R=t.button`
    position: absolute;
    right: 16px;
    top: 16px;
    width: 55px;
    height: 18px;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
`,A=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,M=t.p`
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${a.acceptColor};
`,W=t.svg`
    width: 16px;
    height: 16px;
    stroke: ${a.acceptColor};
`,K=t.span`
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
`,U=t.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;

`,_=t.svg`
    width: 24px;
    height: 24px;

`,G=t.h3`
    max-width: 200px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${a.withe};
@media screen and (min-width: 375px){
    max-width: 263px;
    gap: 16px;
}  

`,H=t.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 4px;
/* @media screen and (min-width: 375px){
    gap: 16px;
}  */

`,d=t.div`
    display: flex; 
    gap: 4px;
`,g=t.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(239, 237, 232, 0.4);
/* @media screen and (min-width: 375px){
    font-size: 12px;
}  */
`,h=t.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    color: ${a.withe};
/* @media screen and (min-width: 375px){
    font-size: 12px;
}  */
`,J=t.div`
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;

`,Q=()=>e.jsx(J,{children:e.jsx(k,{height:"80",width:"80",color:"#E6533C",ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{},wrapperClass:"",visible:!0})}),V=({filter:i})=>{const o=w();u.useEffect(()=>{o(y.getExercises())},[]);const r=x(l.getExercisesData),c=x(l.getIsLoading);x(l.getIsError),console.log("data",r);const n=r.filter(s=>s.bodyPart===i);return console.log("filterArry",n),e.jsxs(F,{children:[c&&e.jsx(Q,{}),n&&n.map(s=>e.jsxs(N,{children:[e.jsx(K,{children:"WORKOUT"}),e.jsx(R,{type:"button",children:e.jsxs(A,{children:[e.jsx(M,{children:"Start"}),e.jsx(W,{children:e.jsx("use",{href:`${m}#icon-start`})})]})}),e.jsxs(U,{children:[e.jsx(_,{children:e.jsx("use",{href:`${m}#icon-running-exercises-page`})}),e.jsx(G,{children:s.name})]}),e.jsxs(H,{children:[e.jsxs(d,{children:[e.jsx(g,{children:"Burned calories:"}),e.jsx(h,{children:s.burnedCalories})]}),e.jsxs(d,{children:[e.jsx(g,{children:"Body part:"}),e.jsx(h,{children:s.bodyPart})]}),e.jsxs(d,{children:[e.jsx(g,{children:"Target:"}),e.jsx(h,{children:s.target})]})]})]},s._id))]})},ne=()=>{const o=f().pathname,r=localStorage.getItem("CategoryName");console.log("categoryExercises",r);const c=n=>n==="/exercises"?`${r}`:n==="/exercises/bodyParts"?"Body Parts":n==="/exercises/muscles"?"Muscles":n==="/exercises/equipment"?"Equipment":"";return e.jsxs(S,{children:[o==="/exercises"&&e.jsx(O,{}),e.jsxs(I,{children:[e.jsx(D,{text:c(o)}),e.jsx(C,{})]}),o==="/exercises"&&e.jsx(V,{filter:r}),e.jsx(u.Suspense,{children:e.jsx(E,{})})]})};export{ne as default};
