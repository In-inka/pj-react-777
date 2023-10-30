import{N as S,g as n,m as B,j as e,s as t,d as L,r as l,n as O,u as m,O as N}from"./index-8f8ae8db.js";import{n as v}from"./emotion-styled.browser.esm-09739fd3.js";import{C as _}from"./ContainerStyled-bb0b3bf9.js";import{b as D,a as F}from"./main_bg_desktop-12717d49.js";import{s as x}from"./sprite-9061d132.js";import{e as b,L as M}from"./Loading-5ef5cafc.js";import"./Hourglass-ad8fce8e.js";const W=v.div`
    display: flex;
    gap: 28px;
    @media screen and (min-width: 768px){
        gap: 32px;
    }
`,w=v(S)`
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
            background-color: ${n.secondaryOrange};
            border-radius: 2px;
        }
    }

    @media screen and (min-width: 768px){
        font-size: 16px;
        line-height: 1.5;

    }



`,q=()=>{const i=B();return e.jsxs(W,{children:[e.jsx(w,{to:"bodyParts",state:{from:i},children:"Body parts"}),e.jsx(w,{to:"muscles",state:{from:i},children:"Muscles"}),e.jsx(w,{to:"equipment",state:{from:i},children:"Equipment"})]})},G=t.div`
    ${_}
    padding-top: 101px;
    padding-bottom: 80px;
    
    `,A=t.div`
@media screen and (min-width: 1440px) {
    display: block;
    &.backgroundPhoto{
        margin-left: auto;
        margin-right: auto;
        width: 100%;


                background: linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
                    url(${D});
                background-repeat: no-repeat;
                background-position: top 185px left 963px;
                background-size: 670px 902px ;
                
                
                @media screen and (min-device-pixel-ratio: 2),
                screen and (min-resolution: 192dpi),
                screen and (min-resolution: 2dppx) {
                    background: linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
                    url(${F});
                    
                    background-repeat: no-repeat;
                    background-position: top 185px left 963px;
                    background-size: 670px 902px ;
                    
            }

        }  
    }


`,R=t.div`
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
`;const H=t.div`
    height: 20px;
    position: absolute;
    top: 71px;
    @media screen and (min-width: 768px){
        top: 116px;
    } 
`,K=t.button`
    height: 100%;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
    color: rgba(239, 237, 232, 0.4);
    
`,U=t.svg`    
    width: 16px;
    height: 16px;
    stroke:  rgba(239, 237, 232, 0.4);
    transform: rotate(180deg);
`,J=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Q=t.span`
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: center;
`,V=()=>{const i=()=>{window.history.back()};return e.jsx(H,{children:e.jsx(K,{type:"button",onClick:i,children:e.jsxs(J,{children:[e.jsx(U,{children:e.jsx("use",{href:`${x}#icon-start`})}),e.jsx(Q,{children:"Back"})]})})})},X=t.h2`
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 0em;
    text-align: left;

`,Y=({text:i})=>e.jsx(X,{children:i}),Z=t.div`
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


`,ee=t.div`
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

`,te=t.button`
    position: absolute;
    right: 16px;
    top: 16px;
    width: 55px;
    height: 18px;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
`,ne=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,ie=t.p`
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${n.acceptColor};
`,oe=t.svg`
    width: 16px;
    height: 16px;
    stroke: ${n.acceptColor};
`,re=t.span`
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
`,se=t.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;

`,ae=t.svg`
    width: 24px;
    height: 24px;

`,ce=t.h3`
    max-width: 200px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${n.withe};
@media screen and (min-width: 375px){
    max-width: 263px;
    gap: 16px;
}  

`,de=t.div`
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
    color: ${n.withe};

`,le=({filter:i,openWindow:a})=>{const r=L();l.useEffect(()=>{r(O.getExercises())},[]);const c=m(b.getExercisesData),d=m(b.getIsLoading);m(b.getIsError);const p=c.filter(o=>o.bodyPart===i||o.target===i||o.equipment===i);return e.jsxs(Z,{children:[d&&e.jsx(M,{}),!d&&p&&p.map(o=>e.jsxs(ee,{children:[e.jsx(re,{children:"WORKOUT"}),e.jsx(te,{id:o._id,type:"button",onClick:a,children:e.jsxs(ne,{children:[e.jsx(ie,{children:"Start"}),e.jsx(oe,{children:e.jsx("use",{href:`${x}#icon-start`})})]})}),e.jsxs(se,{children:[e.jsx(ae,{children:e.jsx("use",{href:`${x}#icon-running-exercises-page`})}),e.jsx(ce,{children:o.name})]}),e.jsxs(de,{children:[e.jsxs(j,{children:[e.jsx(k,{children:"Burned calories:"}),e.jsx(y,{children:o.burnedCalories})]}),e.jsxs(j,{children:[e.jsx(k,{children:"Body part:"}),e.jsx(y,{children:o.bodyPart})]}),e.jsxs(j,{children:[e.jsx(k,{children:"Target:"}),e.jsx(y,{children:o.target})]})]})]},o._id))]})};const xe=t.div`
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(4, 4, 4, 0.4);
    z-index: 10;
    `,pe=t.div`
    position: absolute;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 32px;
    gap: 40px;
    width: 95%;
    height: 95%;
    /* margin-left: auto; */
    /* margin-right:auto ; */
    top: 50%;
    left: 50%;
    z-index: 11;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(239, 237, 232, 0.2);
    border-radius: 12px;
    background-color: rgba(16, 16, 15, 1);
    z-index: 11;
    @media screen and (min-width: 1440px) {
        width: 694px;
        /* height: 550px; */
    }
`,ge=t.svg`
    width: 26px;
    height: 26px;
    stroke: ${n.withe};
    display: none;

`,he=t.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    
`,ue=t.div`
    display: block;
    width: 270px;
    height: 226px;
    
`,me=t.img`
    width: 100%;
    height: 100%;
    border: 1px solid rgba(239, 237, 232, 0.2);
    border-radius: 12px;
`,be=t.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`,fe=t.p`
    font-size: 10px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0px;
    text-align: left;
    color: ${n.itemTitleExercises};


`,we=t.p`
font-size: 14px;
line-height: 1.2;
color: ${n.title};
`,je=t.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0);
    border: none;
    outline: none;
    width: 32px;
    height: 32px;

`,ke=t.svg`
    width: 24px;
    height: 24px;
    fill: ${n.acceptColor};
`,ye=t.span`
    color: ${n.acceptColor};
`,Ee=t.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 8px;
    /* max-height: 210px; */

`,g=t.div`
    background-color: rgba(239, 237, 232, 0.2);
    border: 1px solid #EFEDE833;
    border-radius: 12px;
    padding: 12px 18px;
    min-height: 62px;
   width: 147px;
@media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 4px;

}
    `,h=t.p`
    font-size: 12px;
    line-height: 1.3;
    color: ${n.itemTitleExercises};
    letter-spacing: 0px;

    @media screen and (min-width: 1440px) {
    font-size: 12px;
    line-height: 1.5;
}

`,u=t.p`
    font-size: 14px;
    line-height: 1.2;
    font-weight: 700;
    letter-spacing: 0px;
    text-align: left;
    color: ${n.withe};
@media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 1.5;
}

    `,Be=t.button`
    position: absolute;
    bottom: 48px;
    right: 32px;
    padding:14px 32px 14px 32px;
    border-radius: 12px;
    border: none;
    outline: none;
    color: ${n.withe};
    background-color: ${n.acceptColor};
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        background-color: ${n.secondaryOrange};
    }
    &:disabled {
        background-color: #e6533c;
        color: #efede899;
    }
    `,ve=t.button`
border: none;
position: absolute;
top: 16px;
right: 16px;
background-color: rgba(0,0,0,0);


`,Ce=({data:i,onClose:a})=>{const r=i;return e.jsx(xe,{onClick:a,children:e.jsxs(pe,{children:[e.jsx(ve,{type:"button",onClick:a,children:e.jsx(ge,{children:e.jsx("use",{href:`${x}#icon-x`})})}),e.jsxs(he,{children:[e.jsx(ue,{children:e.jsx(me,{src:r.gifUrl,alt:"Gif-Exercises"})}),e.jsxs(be,{children:[e.jsx(fe,{children:"Time"}),e.jsx(je,{type:"button",children:e.jsx(ke,{children:e.jsx("use",{href:`${x}#icon-pause`})})}),e.jsxs(we,{children:["Burned calories: ",e.jsx(ye,{children:r.burnedCalories})]})]})]}),e.jsxs(Ee,{children:[e.jsxs(g,{children:[e.jsx(h,{children:"Name"}),e.jsx(u,{children:r.name})]}),e.jsxs(g,{children:[e.jsx(h,{children:"Target"}),e.jsx(u,{children:r.target})]}),e.jsxs(g,{children:[e.jsx(h,{children:"Target"}),e.jsx(u,{children:r.target})]}),e.jsxs(g,{children:[e.jsx(h,{children:"Body Parts"}),e.jsx(u,{children:r.bodyPart})]})]}),e.jsx(Be,{type:"button",children:"Add to diary"})]})})},Oe=()=>{const a=B().pathname,r=localStorage.getItem("CategoryName"),[c,d]=l.useState(!1),[p,o]=l.useState(""),C=m(b.getExercisesData),z=s=>{const f=s.currentTarget.id,I=C.filter(P=>P._id===f);o(I),d(!0)},E=()=>{console.log("Клік відбувся!"),d(!1)};l.useEffect(()=>{function s(f){f.key==="Escape"&&E()}return c&&window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[c]);const T=s=>{if(s==="/exercises")return"backgroundPhoto"},$=s=>s==="/exercises"?`${r}`:s==="/exercises/bodyParts"?"Body Parts":s==="/exercises/muscles"?"Muscles":s==="/exercises/equipment"?"Equipment":"";return e.jsx(A,{className:T(a),children:e.jsxs(G,{children:[a==="/exercises"&&e.jsx(V,{}),e.jsxs(R,{children:[e.jsx(Y,{text:$(a)}),e.jsx(q,{})]}),c&&e.jsx(Ce,{data:p[0],onClose:E}),a==="/exercises"&&e.jsx(le,{filter:r,openWindow:z}),e.jsx(l.Suspense,{children:e.jsx(N,{})})]})})};export{Oe as default};
