import{N as r,c as a,u as c,j as e,s as i,r as x,O as l}from"./index-16d09d46.js";import{n}from"./emotion-styled.browser.esm-1180d0a7.js";import{C as p}from"./ContainerStyled-7dc4dca2.js";const d=n.div`
    display: flex;
    gap: 28px;
    @media screen and (min-width: 768px){
        gap: 32px;
    }
`,s=n(r)`
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



`,m=()=>{const t=c();return e.jsxs(d,{children:[e.jsx(s,{to:"bodyParts",state:{from:t},children:"Body parts"}),e.jsx(s,{to:"muscles",state:{from:t},children:"Muscles"}),e.jsx(s,{to:"equipment",state:{from:t},children:"Equipment"})]})},g=({text:t,className:o})=>e.jsx("h1",{className:o,children:t}),h=i.div`
    ${p}
    `,u=i.div`
display: flex;
justify-content: center;
flex-direction: column;
gap: 20px;
margin-bottom: 40px;
margin-top: 40px;
@media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 64px;
    margin-top: 72px;
}

`,y=()=>e.jsxs(h,{children:[e.jsxs(u,{children:[e.jsx(g,{text:"Exercises"}),e.jsx(m,{})]}),e.jsx(x.Suspense,{children:e.jsx(l,{})})]});export{y as default};
