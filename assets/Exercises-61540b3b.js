import{N as n,h as r,i as a,j as e,s as i,r as c,O as x}from"./index-f3cd1053.js";import{n as o}from"./emotion-styled.browser.esm-7e217900.js";import{T as p}from"./TitlePage-4a4a49a4.js";import{C as l}from"./ContainerStyled-7dc4dca2.js";const d=o.div`
    display: flex;
    gap: 28px;
    @media screen and (min-width: 768px){
        gap: 32px;
    }
`,s=o(n)`
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



`,m=()=>{const t=a();return e.jsxs(d,{children:[e.jsx(s,{to:"bodyParts",state:{from:t},children:"Body parts"}),e.jsx(s,{to:"muscles",state:{from:t},children:"Muscles"}),e.jsx(s,{to:"equipment",state:{from:t},children:"Equipment"})]})},g=i.div`
    ${l}
    `,h=i.div`
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

`,y=()=>e.jsxs(g,{children:[e.jsxs(h,{children:[e.jsx(p,{text:"Exercises"}),e.jsx(m,{})]}),e.jsx(c.Suspense,{children:e.jsx(x,{})})]});export{y as default};
