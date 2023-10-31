import{N as H,g as f,t as N,j as e,s as r,d as K,r as d,v as J,u as T,R as $,O as Q}from"./index-920e286a.js";import{n as _}from"./emotion-styled.browser.esm-668b860c.js";import{C as V,s as E}from"./sprite-18b3da65.js";import{e as X,f as Y}from"./main_bg_desktop-e1ac3f6f.js";import{e as B}from"./exercisesSelectors-80adadd9.js";import{L as Z}from"./Loading-6efccc76.js";import ee from"./ErrorPage-9d7aaa22.js";import"./Hourglass-c5088a50.js";const te=_.div`
    display: flex;
    gap: 28px;
    @media screen and (min-width: 768px){
        gap: 32px;
    }
`,L=_(H)`
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
            background-color: ${f.secondaryOrange};
            border-radius: 2px;
        }
    }

    @media screen and (min-width: 768px){
        font-size: 16px;
        line-height: 1.5;

    }



`,ne=()=>{const n=N();return e.jsxs(te,{children:[e.jsx(L,{to:"bodyParts",state:{from:n},children:"Body parts"}),e.jsx(L,{to:"muscles",state:{from:n},children:"Muscles"}),e.jsx(L,{to:"equipment",state:{from:n},children:"Equipment"})]})},re=r.div`
    ${V}
    height: 100%;
    /* height: 709px; */
    padding-top: 101px;
    padding-bottom: 80px;
    
    `,ie=r.div`
@media screen and (min-width: 1440px) {
    display: block;
    &.backgroundPhoto{
        margin-left: auto;
        margin-right: auto;
        width: 100%;


                background: linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
                    url(${X});
                background-repeat: no-repeat;
                background-position: top 185px left 963px;
                background-size: 670px 902px ;
                
                
                @media screen and (min-device-pixel-ratio: 2),
                screen and (min-resolution: 192dpi),
                screen and (min-resolution: 2dppx) {
                    background: linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
                    url(${Y});
                    
                    background-repeat: no-repeat;
                    background-position: top 185px left 963px;
                    background-size: 670px 902px ;
                    
            }

        }  
    }


`,oe=r.div`
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

`;r.picture`
    display: none;
    
    @media screen and (min-width: 1440px) {
        display: block;
        position: absolute;

        top: 185px;
        left: 963px;
        z-index: -1;
        background: linear-gradient(79.56deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%);

    }
`;const se=r.div`
    height: 20px;
    position: absolute;
    top: 71px;
    @media screen and (min-width: 768px){
        top: 116px;
    } 
`,ae=r.button`
    height: 100%;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
    color: rgba(239, 237, 232, 0.4);
    
`,ce=r.svg`    
    width: 16px;
    height: 16px;
    stroke:  rgba(239, 237, 232, 0.4);
    transform: rotate(180deg);
`,le=r.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,de=r.span`
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: center;
`,pe=()=>{const n=()=>{window.history.back()};return e.jsx(se,{children:e.jsx(ae,{type:"button",onClick:n,children:e.jsxs(le,{children:[e.jsx(ce,{children:e.jsx("use",{href:`${E}#icon-start`})}),e.jsx(de,{children:"Back"})]})})})},xe=r.h2`
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 0em;
    text-align: left;

`,he=({text:n})=>e.jsx(xe,{children:n}),ue=r.div`
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


`,ge=r.div`
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

`,me=r.button`
    position: absolute;
    right: 16px;
    top: 16px;
    width: 55px;
    height: 18px;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
`,fe=r.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,be=r.p`
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${f.acceptColor};
`,we=r.svg`
    width: 16px;
    height: 16px;
    stroke: ${f.acceptColor};
`,ke=r.span`
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
`,je=r.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;

`,ye=r.svg`
    width: 24px;
    height: 24px;

`,ve=r.h3`
    max-width: 200px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${f.withe};
@media screen and (min-width: 375px){
    max-width: 263px;
    gap: 16px;
}  

`,Ce=r.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 4px;


`,W=r.div`
    display: flex; 
    gap: 4px;
`,A=r.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(239, 237, 232, 0.4);

`,F=r.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    text-transform: capitalize;
    color: ${f.withe};

`,Ee=({filter:n,openWindow:t})=>{const a=K();d.useEffect(()=>{a(J.getExercises())},[]);const s=T(B.getExercisesData),i=T(B.getIsLoading);T(B.getIsError);const c=s.filter(o=>o.bodyPart===n||o.target===n||o.equipment===n);return e.jsxs(ue,{children:[i&&e.jsx(Z,{}),!i&&c&&c.map(o=>e.jsxs(ge,{children:[e.jsx(ke,{children:"WORKOUT"}),e.jsx(me,{id:o._id,type:"button",onClick:t,children:e.jsxs(fe,{children:[e.jsx(be,{children:"Start"}),e.jsx(we,{children:e.jsx("use",{href:`${E}#icon-start`})})]})}),e.jsxs(je,{children:[e.jsx(ye,{children:e.jsx("use",{href:`${E}#icon-running-exercises-page`})}),e.jsx(ve,{children:o.name})]}),e.jsxs(Ce,{children:[e.jsxs(W,{children:[e.jsx(A,{children:"Burned calories:"}),e.jsx(F,{children:o.burnedCalories})]}),e.jsxs(W,{children:[e.jsx(A,{children:"Body part:"}),e.jsx(F,{children:o.bodyPart})]}),e.jsxs(W,{children:[e.jsx(A,{children:"Target:"}),e.jsx(F,{children:o.target})]})]})]},o._id))]})},$e=r.div`
  position: fixed;
  top: 0;
  left: 0;
  /* position: absolute; */
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 4, 0.4);
  z-index: 10;
`,Te=r.div`
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
    &::-webkit-scrollbar {
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
    background: #ef8964;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #ec7246;
  }
`,Be=r.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 270px;
  }
`,Ie=r.div`
  display: block;
  width: 100%;
  height: 226px;
`,ze=r.img`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    width: 270px;
    height: 226px;
  }
`,Se=r.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 8px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    max-width: 345px;
  }
`,I=r.div`
  width: calc((100% - 2 * 8px) / 2);
  background-color: rgba(239, 237, 232, 0.2);
  border: 1px solid #efede833;
  border-radius: 12px;
  padding: 12px 18px;
  min-height: 62px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`,z=r.p`
  font-size: 12px;
  line-height: 1.3;
  color: ${f.itemTitleExercises};
  letter-spacing: 0px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.5;
  }
`,S=r.p`
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0px;
  text-align: left;
  color: ${f.withe};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Pe=r.button`
  /* position: absolute; */

  padding: 14px 32px 14px 32px;
  border-radius: 12px;
  border: none;
  outline: none;
  color: ${f.withe};
  background-color: ${f.acceptColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 48px;
    right: 32px;
  }

  &:hover,
  &:focus {
    background-color: ${f.secondaryOrange};
  }
  &:disabled {
    background-color: #e6533c;
    color: #efede899;
  }
`,Re=r.button`
  border: none;
  z-index: 20;
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(0, 0, 0, 0);
`,Le=r.svg`
  display: block;
  width: 13px;
  height: 13px;
  stroke: ${f.withe};
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;var M=typeof window>"u"?d.useEffect:d.useLayoutEffect,We=({isPlaying:n,duration:t,startAt:a=0,updateInterval:s=0,onComplete:i,onUpdate:c})=>{let[o,u]=d.useState(a),g=d.useRef(0),m=d.useRef(a),l=d.useRef(a*-1e3),p=d.useRef(null),h=d.useRef(null),x=d.useRef(null),w=j=>{let b=j/1e3;if(h.current===null){h.current=b,p.current=requestAnimationFrame(w);return}let k=b-h.current,C=g.current+k;h.current=b,g.current=C;let P=m.current+(s===0?C:(C/s|0)*s),R=m.current+C,D=typeof t=="number"&&R>=t;u(D?t:P),D||(p.current=requestAnimationFrame(w))},v=()=>{p.current&&cancelAnimationFrame(p.current),x.current&&clearTimeout(x.current),h.current=null},y=d.useCallback(j=>{v(),g.current=0;let b=typeof j=="number"?j:a;m.current=b,u(b),n&&(p.current=requestAnimationFrame(w))},[n,a]);return M(()=>{if(c==null||c(o),t&&o>=t){l.current+=t*1e3;let{shouldRepeat:j=!1,delay:b=0,newStartAt:k}=(i==null?void 0:i(l.current/1e3))||{};j&&(x.current=setTimeout(()=>y(k),b*1e3))}},[o,t]),M(()=>(n&&(p.current=requestAnimationFrame(w)),v),[n,t,s]),{elapsedTime:o,reset:y}},Ae=(n,t,a)=>{let s=n/2,i=t/2,c=s-i,o=2*c,u=a==="clockwise"?"1,0":"0,1",g=2*Math.PI*c;return{path:`m ${s},${i} a ${c},${c} 0 ${u} 0,${o} a ${c},${c} 0 ${u} 0,-${o}`,pathLength:g}},O=(n,t)=>n===0||n===t?0:typeof t=="number"?n-t:0,Fe=n=>({position:"relative",width:n,height:n}),De={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},G=(n,t,a,s,i)=>{if(s===0)return t;let c=(i?s-n:n)/s;return t+a*c},q=n=>{var t,a;return(a=(t=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(s,i,c,o)=>`#${i}${i}${c}${c}${o}${o}`).substring(1).match(/.{2}/g))==null?void 0:t.map(s=>parseInt(s,16)))!=null?a:[]},Me=(n,t)=>{var a;let{colors:s,colorsTime:i,isSmoothColorTransition:c=!0}=n;if(typeof s=="string")return s;let o=(a=i==null?void 0:i.findIndex((h,x)=>h>=t&&t>=i[x+1]))!=null?a:-1;if(!i||o===-1)return s[0];if(!c)return s[o];let u=i[o]-t,g=i[o]-i[o+1],m=q(s[o]),l=q(s[o+1]),p=!!n.isGrowing;return`rgb(${m.map((h,x)=>G(u,h,l[x]-h,g,p)|0).join(",")})`},Oe=n=>{let{duration:t,initialRemainingTime:a,updateInterval:s,size:i=180,strokeWidth:c=12,trailStrokeWidth:o,isPlaying:u=!1,isGrowing:g=!1,rotation:m="clockwise",onComplete:l,onUpdate:p}=n,h=d.useRef(),x=Math.max(c,o??0),{path:w,pathLength:v}=Ae(i,x,m),{elapsedTime:y}=We({isPlaying:u,duration:t,startAt:O(t,a),updateInterval:s,onUpdate:typeof p=="function"?b=>{let k=Math.ceil(t-b);k!==h.current&&(h.current=k,p(k))}:void 0,onComplete:typeof l=="function"?b=>{var k;let{shouldRepeat:C,delay:P,newInitialRemainingTime:R}=(k=l(b))!=null?k:{};if(C)return{shouldRepeat:C,delay:P,newStartAt:O(t,R)}}:void 0}),j=t-y;return{elapsedTime:y,path:w,pathLength:v,remainingTime:Math.ceil(j),rotation:m,size:i,stroke:Me(n,j),strokeDashoffset:G(y,0,v,t,g),strokeWidth:c}},U=n=>{let{children:t,strokeLinecap:a,trailColor:s,trailStrokeWidth:i}=n,{path:c,pathLength:o,stroke:u,strokeDashoffset:g,remainingTime:m,elapsedTime:l,size:p,strokeWidth:h}=Oe(n);return $.createElement("div",{style:Fe(p)},$.createElement("svg",{viewBox:`0 0 ${p} ${p}`,width:p,height:p,xmlns:"http://www.w3.org/2000/svg"},$.createElement("path",{d:c,fill:"none",stroke:s??"#d9d9d9",strokeWidth:i??h}),$.createElement("path",{d:c,fill:"none",stroke:u,strokeLinecap:a??"round",strokeWidth:h,strokeDasharray:o,strokeDashoffset:g})),typeof t=="function"&&$.createElement("div",{style:De},t({remainingTime:m,elapsedTime:l,color:u})))};U.displayName="CountdownCircleTimer";const qe=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > :first-child {
    margin-bottom: 4px;
  }

  & > :nth-child(2) {
    margin-bottom: 14px;
  }
  & > :nth-child(3) {
    margin-bottom: 8px;
  }
`,Ne=r.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0px;
  text-align: left;
  color: ${f.itemTitleExercises};
`,_e=r.div`
  display: flex;
  flex-direction: row;
  row-gap: 8px;
`,Ge=r.p`
  font-size: 14px;
  line-height: 1.2;
  color: ${f.title};
  margin-right: 8px;
`,Ue=r.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  width: 32px;
  height: 32px;
`,He=r.svg`
  width: 24px;
  height: 24px;
  fill: ${f.acceptColor};
`,Ke=r.span`
  color: ${f.acceptColor};
`,Je=({setDinamicBurnCal:n,burnedCalories:t})=>{const[a,s]=d.useState(!1),[i,c]=d.useState(180),[o,u]=d.useState(0),g=()=>{s(l=>!l)};d.useEffect(()=>{if(a){const l=setInterval(()=>{c(p=>p-1)},1e3);return()=>{clearInterval(l)}}},[a]),d.useEffect(()=>{const l=Math.round((180-i)*(t/180));u(l),n(l)},[i,t,n]);const m=l=>l.toString().padStart(2,"0");return e.jsx(e.Fragment,{children:e.jsxs(qe,{children:[e.jsx(Ne,{children:"Time"}),e.jsx(U,{colors:["#E6533C"],strokeWidth:4,size:124,isPlaying:a,duration:180,onComplete:()=>s(!1),children:({remainingTime:l})=>e.jsx("div",{style:{color:"#fff"},role:"timer","aria-live":"assertive",children:`${m(Math.floor(l/60))}:${m(l%60)}`})}),e.jsx(Ue,{type:"button",onClick:g,children:e.jsx(He,{children:e.jsx("use",{href:a?`${E}#icon-pause`:`${E}#icon-play`})})}),e.jsxs(_e,{children:[e.jsx(Ge,{children:"Burned calories:"}),e.jsx(Ke,{children:o})]})]})})},Qe=({data:n,onClose:t})=>{const[a,s]=d.useState(0),i=n,c=i.burnedCalories;return e.jsx($e,{children:e.jsxs(Te,{children:[e.jsx(Re,{type:"button",onClick:t,children:e.jsx(Le,{children:e.jsx("use",{href:`${E}#icon-x`})})}),e.jsxs(Be,{children:[e.jsx(Ie,{children:e.jsx(ze,{src:i.gifUrl,alt:"Gif-Exercises"})}),e.jsx(Je,{setDinamicBurnCal:s,dinamicBurnCal:a,burnedCalories:c})]}),e.jsxs(Se,{children:[e.jsxs(I,{children:[e.jsx(z,{children:"Name"}),e.jsx(S,{children:i.name})]}),e.jsxs(I,{children:[e.jsx(z,{children:"Target"}),e.jsx(S,{children:i.target})]}),e.jsxs(I,{children:[e.jsx(z,{children:"Target"}),e.jsx(S,{children:i.target})]}),e.jsxs(I,{children:[e.jsx(z,{children:"Body Parts"}),e.jsx(S,{children:i.bodyPart})]})]}),e.jsx(Pe,{type:"button",children:"Add to diary"})]})})},it=()=>{const t=N().pathname,a=localStorage.getItem("CategoryName"),[s,i]=d.useState(!1),[c,o]=d.useState(""),u=T(B.getExercisesData),g=T(B.getIsError),m=x=>{const w=x.currentTarget.id,v=u.filter(y=>y._id===w);o(v),i(!0)},l=()=>{console.log("Клік відбувся!"),i(!1)};d.useEffect(()=>{function x(w){w.key==="Escape"&&l()}return s&&window.addEventListener("keydown",x),()=>{window.removeEventListener("keydown",x)}},[s]);const p=x=>{if(x==="/exercises")return"backgroundPhoto"},h=x=>x==="/exercises"?`${a}`:x==="/exercises/bodyParts"?"Body Parts":x==="/exercises/muscles"?"Muscles":x==="/exercises/equipment"?"Equipment":"";return e.jsxs(ie,{className:p(t),children:[g&&e.jsx(ee,{}),e.jsxs(re,{children:[t==="/exercises"&&e.jsx(pe,{}),e.jsxs(oe,{children:[e.jsx(he,{text:h(t)}),e.jsx(ne,{})]}),s&&e.jsx(Qe,{data:c[0],onClose:l}),t==="/exercises"&&e.jsx(Ee,{filter:a,openWindow:m}),e.jsx(d.Suspense,{children:e.jsx(Q,{})})]})]})};export{it as default};
