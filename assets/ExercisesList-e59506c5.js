import{s as i,g as x,k as p,j as t,L as g}from"./index-f44b395a.js";const h=i.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 80px;
    @media screen and (min-width: 768px){
    flex-direction: row;
    flex-wrap: wrap;
        
    /* justify-content: center; */
    align-items: center;
    row-gap: 32px;
    column-gap: 16px;
}

`,m=i.div`
    background-image: linear-gradient(0deg, rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)),
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
@media screen and (min-width: 768px){
    width: 224px;
    height: 206px;
}
@media screen and (min-width: 1140px){
    width: 236px;
}
`,f=i.img`
    position: absolute;
    z-index: -1;
    /* width: 100%;
    height: 100%; */

`,u=i.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
`,w=i.h3`
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: center;
    font-weight: 400;
    text-transform: capitalize;
    color: ${x.withe};
    `,j=i.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: rgba(239, 237, 232, 0.4);
`,y=({exercises:o})=>{const a=p(),n=o;console.log("first");const c=async e=>{const r=e.currentTarget;if(r){const l=r.id,d=n.filter(s=>s._id===l).map(s=>s.name).join();localStorage.setItem("CategoryName",d)}};return t.jsx(h,{children:n&&n.map(e=>t.jsx(g,{to:"/exercises",state:{from:a},children:t.jsxs(m,{id:e._id,onClick:c,children:[t.jsx(f,{src:e.imgURL,alt:e.name}),t.jsxs(u,{children:[t.jsx(w,{children:e.name}),t.jsx(j,{children:e.filter})]})]})},e._id))})};export{y as E};
