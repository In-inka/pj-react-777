import{s as i,g as p,L as h,n as g,j as t}from"./index-0a20e5a2.js";const m=i.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 80px;
    width: 100%;
    @media screen and (min-width: 768px){
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 32px;
    column-gap: 16px;
}
`,r=i.div`

    background-color: rgb(4, 4, 4,0.30);


    position: relative;
    display: block;
    width: 100%;
    height: 206px;
    border-radius: 12px;
    border: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
@media screen and (min-width: 375px){
    width: 335px;
}
@media screen and (min-width: 768px){
    width: 224px;
    height: 206px;
}
@media screen and (min-width: 1440px){
    width: 236px;
}
`,f=i(h)`
    width: 100%;
`,w=i.img`
    position: absolute;
    z-index:-1;
`,u=i.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
`,j=i.h3`
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: center;
    font-weight: 400;
    text-transform: capitalize;
    color: ${p.withe};
    `,y=i.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: rgba(239, 237, 232, 0.4);
`,b=({exercises:a})=>{const c=g(),n=a,d=async e=>{const o=e.currentTarget;if(o){const l=o.id,x=n.filter(s=>s._id===l).map(s=>s.name).join();localStorage.setItem("CategoryName",x)}};return t.jsx(m,{children:n&&n.map(e=>t.jsx(r,{children:t.jsx(f,{to:"/exercises",state:{from:c},children:t.jsxs(r,{id:e._id,onClick:d,children:[t.jsx(w,{src:e.imgURL,alt:e.name}),t.jsxs(u,{children:[t.jsx(j,{children:e.name}),t.jsx(y,{children:e.filter})]})]})})},e._id))})},v=i.div`
   display: flex;
   height: auto;
   height: 100%;
   position: relative;

`;export{v as B,b as E};
