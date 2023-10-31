import{N as L,g as i,n as v,j as e,s as t,d as O,r as l,q as N,u as x,O as _}from"./index-d1495032.js";import{n as B}from"./emotion-styled.browser.esm-6f5fe750.js";import{C as D,s as h}from"./sprite-c78e2a83.js";import{b as F,a as q}from"./main_bg_desktop-12717d49.js";import{e as p}from"./exercisesSelectors-80adadd9.js";import{L as M}from"./Loading-72390f79.js";import{ErrorPage as W}from"./ErrorPage-2df63500.js";import"./Hourglass-42baac64.js";const G=B.div`
    display: flex;
    gap: 28px;
    @media screen and (min-width: 768px){
        gap: 32px;
    }
`,w=B(L)`
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
            background-color: ${i.secondaryOrange};
            border-radius: 2px;
        }
    }

    @media screen and (min-width: 768px){
        font-size: 16px;
        line-height: 1.5;

    }



`,H=()=>{const n=v();return e.jsxs(G,{children:[e.jsx(w,{to:"bodyParts",state:{from:n},children:"Body parts"}),e.jsx(w,{to:"muscles",state:{from:n},children:"Muscles"}),e.jsx(w,{to:"equipment",state:{from:n},children:"Equipment"})]})},A=t.div`
    ${D}
    height: 100%;
    /* height: 709px; */
    padding-top: 101px;
    padding-bottom: 80px;
    
    `,R=t.div`
@media screen and (min-width: 1440px) {
    display: block;
    &.backgroundPhoto{
        margin-left: auto;
        margin-right: auto;
        width: 100%;


                background: linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
                    url(${F});
                background-repeat: no-repeat;
                background-position: top 185px left 963px;
                background-size: 670px 902px ;
                
                
                @media screen and (min-device-pixel-ratio: 2),
                screen and (min-resolution: 192dpi),
                screen and (min-resolution: 2dppx) {
                    background: linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
                    url(${q});
                    
                    background-repeat: no-repeat;
                    background-position: top 185px left 963px;
                    background-size: 670px 902px ;
                    
            }

        }  
    }


`,K=t.div`
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
`;const U=t.div`
    height: 20px;
    position: absolute;
    top: 71px;
    @media screen and (min-width: 768px){
        top: 116px;
    } 
`,J=t.button`
    height: 100%;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
    color: rgba(239, 237, 232, 0.4);
    
`,Q=t.svg`    
    width: 16px;
    height: 16px;
    stroke:  rgba(239, 237, 232, 0.4);
    transform: rotate(180deg);
`,V=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,X=t.span`
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: center;
`,Y=()=>{const n=()=>{window.history.back()};return e.jsx(U,{children:e.jsx(J,{type:"button",onClick:n,children:e.jsxs(V,{children:[e.jsx(Q,{children:e.jsx("use",{href:`${h}#icon-start`})}),e.jsx(X,{children:"Back"})]})})})},Z=t.h2`
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 0em;
    text-align: left;

`,ee=({text:n})=>e.jsx(Z,{children:n}),te=t.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
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


`,ie=t.div`
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

`,ne=t.button`
    position: absolute;
    right: 16px;
    top: 16px;
    width: 55px;
    height: 18px;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
`,re=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,oe=t.p`
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${i.acceptColor};
`,se=t.svg`
    width: 16px;
    height: 16px;
    stroke: ${i.acceptColor};
`,ae=t.span`
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
`,ce=t.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;

`,de=t.svg`
    width: 24px;
    height: 24px;

`,le=t.h3`
    max-width: 200px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${i.withe};
@media screen and (min-width: 375px){
    max-width: 263px;
    gap: 16px;
}  

`,xe=t.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 4px;


`,j=t.div`
    display: flex; 
    gap: 4px;
`,k=t.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(239, 237, 232, 0.4);

`,y=t.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    text-transform: capitalize;
    color: ${i.withe};

`,pe=({filter:n,openWindow:a})=>{const o=O();l.useEffect(()=>{o(N.getExercises())},[]);const c=x(p.getExercisesData),d=x(p.getIsLoading);x(p.getIsError);const g=c.filter(r=>r.bodyPart===n||r.target===n||r.equipment===n);return e.jsxs(te,{children:[d&&e.jsx(M,{}),!d&&g&&g.map(r=>e.jsxs(ie,{children:[e.jsx(ae,{children:"WORKOUT"}),e.jsx(ne,{id:r._id,type:"button",onClick:a,children:e.jsxs(re,{children:[e.jsx(oe,{children:"Start"}),e.jsx(se,{children:e.jsx("use",{href:`${h}#icon-start`})})]})}),e.jsxs(ce,{children:[e.jsx(de,{children:e.jsx("use",{href:`${h}#icon-running-exercises-page`})}),e.jsx(le,{children:r.name})]}),e.jsxs(xe,{children:[e.jsxs(j,{children:[e.jsx(k,{children:"Burned calories:"}),e.jsx(y,{children:r.burnedCalories})]}),e.jsxs(j,{children:[e.jsx(k,{children:"Body part:"}),e.jsx(y,{children:r.bodyPart})]}),e.jsxs(j,{children:[e.jsx(k,{children:"Target:"}),e.jsx(y,{children:r.target})]})]})]},r._id))]})};const he=t.div`
    position: fixed;
    top: 0;
    left: 0;
    /* position: absolute; */
    width: 100%;
    height: 100%;
    background-color: rgba(4, 4, 4, 0.4);
    z-index: 10;
    `,ge=t.div`

    position: absolute;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 48px 32px;
    gap: 40px;
    width: 95%;
    height: 95%;
    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(239, 237, 232, 0.2);
    border-radius: 12px;
    background-color: rgba(16, 16, 15, 1);
    z-index: 11;

@media screen and (min-width: 375px) {
    width: 335px;
}
@media screen and (min-width: 768px) {
    width: 694px;
    height: 550px;
    flex-direction: row;
    &::-webkit-scrollbar{
        display: none;
    }
}

&::-webkit-scrollbar {
  width: 4px;
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



`,ue=t.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
@media screen and (min-width: 768px) {
    width: 270px;
}

`,me=t.div`

    display: block;
    width: 100%;
    height: 226px;
    
`,be=t.img`
    width: 100%;
    height: 100%;
    border: 1px solid rgba(239, 237, 232, 0.2);
    border-radius: 12px;
@media screen and (min-width: 768px) {
    width: 270px;
    height: 226px;
}
`,fe=t.div`
    display: flex;
    flex-direction: column;
    align-items: center;


`,we=t.p`
    font-size: 10px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0px;
    text-align: left;
    color: ${i.itemTitleExercises};


`,je=t.p`
font-size: 14px;
line-height: 1.2;
color: ${i.title};
`,ke=t.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0);
    border: none;
    outline: none;
    width: 32px;
    height: 32px;

`,ye=t.svg`
    width: 24px;
    height: 24px;
    fill: ${i.acceptColor};
`,Ee=t.span`
    color: ${i.acceptColor};
`,ve=t.div`

    display: flex;
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 8px;
    justify-content: center;

@media screen and (min-width: 768px) {
    max-width: 345px;
}
  
  

`,u=t.div`

    width: calc((100% - 2 * 8px) / 2);
    background-color: rgba(239, 237, 232, 0.2);
    border: 1px solid #EFEDE833;
    border-radius: 12px;
    padding: 12px 18px;
    min-height: 62px;
@media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 4px;

}
`,m=t.p`
    font-size: 12px;
    line-height: 1.3;
    color: ${i.itemTitleExercises};
    letter-spacing: 0px;

    @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.5;
}

`,b=t.p`
    font-size: 14px;
    line-height: 1.2;
    font-weight: 700;
    letter-spacing: 0px;
    text-align: left;
    color: ${i.withe};
@media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
}

    `,Be=t.button`
    /* position: absolute; */

    padding:14px 32px 14px 32px;
    border-radius: 12px;
    border: none;
    outline: none;
    color: ${i.withe};
    background-color: ${i.acceptColor};
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
@media screen and (min-width: 768px) {
    position: absolute;
    bottom: 48px;
    right: 32px;

}  
    
    &:hover,
    &:focus {
        background-color: ${i.secondaryOrange};
    }
    &:disabled {
        background-color: #e6533c;
        color: #efede899;
    }
    `,Ce=t.button`
    border: none;
    z-index: 20;
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: rgba(0,0,0,0);


`,ze=t.svg`
    display: block;
    width: 13px;
    height: 13px;
    stroke: ${i.withe};
@media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
    
}    
`,Te=({data:n,onClose:a})=>{const o=n;return e.jsx(he,{onClick:a,children:e.jsxs(ge,{children:[e.jsx(Ce,{type:"button",onClick:a,children:e.jsx(ze,{children:e.jsx("use",{href:`${h}#icon-x`})})}),e.jsxs(ue,{children:[e.jsx(me,{children:e.jsx(be,{src:o.gifUrl,alt:"Gif-Exercises"})}),e.jsxs(fe,{children:[e.jsx(we,{children:"Time"}),e.jsx(ke,{type:"button",children:e.jsx(ye,{children:e.jsx("use",{href:`${h}#icon-pause`})})}),e.jsxs(je,{children:["Burned calories: ",e.jsx(Ee,{children:o.burnedCalories})]})]})]}),e.jsxs(ve,{children:[e.jsxs(u,{children:[e.jsx(m,{children:"Name"}),e.jsx(b,{children:o.name})]}),e.jsxs(u,{children:[e.jsx(m,{children:"Target"}),e.jsx(b,{children:o.target})]}),e.jsxs(u,{children:[e.jsx(m,{children:"Target"}),e.jsx(b,{children:o.target})]}),e.jsxs(u,{children:[e.jsx(m,{children:"Body Parts"}),e.jsx(b,{children:o.bodyPart})]})]}),e.jsx(Be,{type:"button",children:"Add to diary"})]})})},De=()=>{const a=v().pathname,o=localStorage.getItem("CategoryName"),[c,d]=l.useState(!1),[g,r]=l.useState(""),C=x(p.getExercisesData),z=x(p.getIsError),T=s=>{const f=s.currentTarget.id,P=C.filter(S=>S._id===f);r(P),d(!0)},E=()=>{console.log("Клік відбувся!"),d(!1)};l.useEffect(()=>{function s(f){f.key==="Escape"&&E()}return c&&window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[c]);const $=s=>{if(s==="/exercises")return"backgroundPhoto"},I=s=>s==="/exercises"?`${o}`:s==="/exercises/bodyParts"?"Body Parts":s==="/exercises/muscles"?"Muscles":s==="/exercises/equipment"?"Equipment":"";return e.jsxs(R,{className:$(a),children:[z&&e.jsx(W,{}),e.jsxs(A,{children:[a==="/exercises"&&e.jsx(Y,{}),e.jsxs(K,{children:[e.jsx(ee,{text:I(a)}),e.jsx(H,{})]}),c&&e.jsx(Te,{data:g[0],onClose:E}),a==="/exercises"&&e.jsx(pe,{filter:o,openWindow:T}),e.jsx(l.Suspense,{children:e.jsx(_,{})})]})]})};export{De as default};
