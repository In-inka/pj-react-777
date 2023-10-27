import{s as t,g as l,k as x,j as i,L as p}from"./index-90916772.js";const g=t.div`
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

`,m=t.div`
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
`,h=t.img`
    position: absolute;
    z-index: -1;
    /* width: 100%;
    height: 100%; */

`,f=t.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
`,u=t.h3`
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: center;
    font-weight: 400;
    text-transform: capitalize;
    color: ${l.withe};
    `,w=t.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: rgba(239, 237, 232, 0.4);
`,b=({exercises:o})=>{const s=o,r=x(),c=async e=>{const d=e.currentTarget.id,a=s.filter(n=>n._id===d).map(n=>n.name).join();return r.nameExercises=a,a};return i.jsx("div",{className:"swiper",children:i.jsx(g,{children:s.map(e=>i.jsx(p,{to:"/exercises",state:{from:r},children:i.jsxs(m,{id:e._id,onClick:c,children:[i.jsx(h,{src:e.imgURL,alt:e.name}),i.jsxs(f,{children:[i.jsx(u,{children:e.name}),i.jsx(w,{children:e.filter})]})]})},e._id))})})};export{b as E};
