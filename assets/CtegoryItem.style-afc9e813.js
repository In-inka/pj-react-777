import{s as t,g as p,L as g,k as h,j as i}from"./index-0422af53.js";const m=t.div`
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
`,a=t.div`

    background-color: rgba(0,0,0,0);

    background: linear-gradient(0deg, rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)),
    linear-gradient(0deg, rgba(239, 237, 232, 0.2), rgba(239, 237, 232, 0.2));


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
`,f=t(g)`
    width: 100%;
`,w=t.img`
    position: absolute;
    z-index:-1;
`,u=t.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
`,b=t.h3`
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: center;
    font-weight: 400;
    text-transform: capitalize;
    color: ${p.withe};
    `,j=t.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: rgba(239, 237, 232, 0.4);
`,E=({exercises:o})=>{const c=h(),n=o,d=async e=>{const s=e.currentTarget;if(s){const l=s.id,x=n.filter(r=>r._id===l).map(r=>r.name).join();localStorage.setItem("CategoryName",x)}};return i.jsx(m,{children:n&&n.map(e=>i.jsx(a,{children:i.jsx(f,{to:"/exercises",state:{from:c},children:i.jsxs(a,{id:e._id,onClick:d,children:[i.jsx(w,{src:e.imgURL,alt:e.name}),i.jsxs(u,{children:[i.jsx(b,{children:e.name}),i.jsx(j,{children:e.filter})]})]})})},e._id))})},k=t.div`
   display: flex;
   height: auto;
   height: 100%;
   position: relative;

`;export{k as B,E};
