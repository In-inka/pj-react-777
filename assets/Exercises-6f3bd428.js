import{N as n,c as r,u as a,j as e,s as i,r as c,O as x}from"./index-f9b0720a.js";import{n as o,C as p}from"./ContainerStyled-15a4d6dd.js";import{T as l}from"./TitlePage-df54d329.js";const d=o.div`
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

`,b=()=>e.jsxs(g,{children:[e.jsxs(u,{children:[e.jsx(l,{text:"Exercises"}),e.jsx(m,{})]}),e.jsx(c.Suspense,{children:e.jsx(x,{})})]});export{b as default};
