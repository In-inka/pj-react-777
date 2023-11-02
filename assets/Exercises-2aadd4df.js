import{N as X,g as f,y as U,j as e,s as t,d as H,r as l,z as Z,u as z,R as B,L as ee,h as te,Q as F,O as ne}from"./index-15744806.js";import{n as K}from"./emotion-styled.browser.esm-70c1f659.js";import{C as ie,s as E}from"./sprite-134afee2.js";import{e as re,f as oe}from"./main_bg_desktop-e1ac3f6f.js";import{e as S,L as se}from"./exercisesSelectors-b8296627.js";import{L as ae}from"./Loader-41ce1098.js";import ce from"./ErrorPage-6cab0c98.js";const le=K.div`
    display: flex;
    gap: 28px;
    @media screen and (min-width: 768px){
        gap: 32px;
    }
`,D=K(X)`
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



`,de=()=>{const n=U();return e.jsxs(le,{children:[e.jsx(D,{to:"bodyParts",state:{from:n},children:"Body parts"}),e.jsx(D,{to:"muscles",state:{from:n},children:"Muscles"}),e.jsx(D,{to:"equipment",state:{from:n},children:"Equipment"})]})},pe=t.div`
    ${ie}
    height: 100%;
    /* height: 709px; */
    padding-top: 101px;
    padding-bottom: 80px;
    
    `,xe=t.div`
@media screen and (min-width: 1440px) {
    display: block;
    &.backgroundPhoto{
        margin-left: auto;
        margin-right: auto;
        width: 100%;


                background: linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
                    url(${re});
                background-repeat: no-repeat;
                background-position: top 185px left 963px;
                background-size: 670px 902px ;
                
                
                @media screen and (min-device-pixel-ratio: 2),
                screen and (min-resolution: 192dpi),
                screen and (min-resolution: 2dppx) {
                    background: linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
                    url(${oe});
                    
                    background-repeat: no-repeat;
                    background-position: top 185px left 963px;
                    background-size: 670px 902px ;
                    
            }

        }  
    }


`,he=t.div`
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
`;const ue=t.div`
    height: 20px;
    position: absolute;
    top: 71px;
    @media screen and (min-width: 768px){
        top: 116px;
    } 
`,ge=t.button`
    height: 100%;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
    color: rgba(239, 237, 232, 0.4);
    
`,me=t.svg`    
    width: 16px;
    height: 16px;
    stroke:  rgba(239, 237, 232, 0.4);
    transform: rotate(180deg);
`,fe=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,be=t.span`
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: center;
`,we=()=>{const n=()=>{window.history.back()};return e.jsx(ue,{children:e.jsx(ge,{type:"button",onClick:n,children:e.jsxs(fe,{children:[e.jsx(me,{children:e.jsx("use",{href:`${E}#icon-start`})}),e.jsx(be,{children:"Back"})]})})})},je=t.h2`
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 0em;
    text-align: left;

`,ke=({text:n})=>e.jsx(je,{children:n}),ye=t.div`
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


`,ve=t.div`
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

`,Ce=t.button`
    position: absolute;
    right: 16px;
    top: 16px;
    width: 55px;
    height: 18px;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
`,Ee=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,$e=t.p`
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${f.acceptColor};
`,Te=t.svg`
    width: 16px;
    height: 16px;
    stroke: ${f.acceptColor};
`,Be=t.span`
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
`,ze=t.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;

`,Se=t.svg`
    width: 24px;
    height: 24px;

`,Ie=t.h3`
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

`,Le=t.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 4px;


`,W=t.div`
    display: flex; 
    gap: 4px;
`,A=t.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(239, 237, 232, 0.4);

`,O=t.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    text-transform: capitalize;
    color: ${f.withe};

`,Pe=({filter:n,openWindow:i})=>{const r=H();l.useEffect(()=>{r(Z.getExercises())},[r]);const s=z(S.getExercisesData),c=z(S.getIsLoading),a=s.filter(o=>o.bodyPart===n||o.target===n||o.equipment===n);return e.jsxs(ye,{children:[c&&e.jsx(se,{}),!c&&a&&a.map(o=>e.jsxs(ve,{children:[e.jsx(Be,{children:"WORKOUT"}),e.jsx(Ce,{id:o._id,type:"button",onClick:i,children:e.jsxs(Ee,{children:[e.jsx($e,{children:"Start"}),e.jsx(Te,{children:e.jsx("use",{href:`${E}#icon-start`})})]})}),e.jsxs(ze,{children:[e.jsx(Se,{children:e.jsx("use",{href:`${E}#icon-running-exercises-page`})}),e.jsx(Ie,{children:o.name})]}),e.jsxs(Le,{children:[e.jsxs(W,{children:[e.jsx(A,{children:"Burned calories:"}),e.jsx(O,{children:o.burnedCalories})]}),e.jsxs(W,{children:[e.jsx(A,{children:"Body part:"}),e.jsx(O,{children:o.bodyPart})]}),e.jsxs(W,{children:[e.jsx(A,{children:"Target:"}),e.jsx(O,{children:o.target})]})]})]},o._id))]})},Re=t.div`
  position: fixed;
  top: 0;
  left: 0;
  /* position: absolute; */
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 4, 0.4);
  z-index: 1;
`,De=t.form`
  position: absolute;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px 32px;
  gap: 40px;
  width: 95%;
  height: 80%;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(16, 16, 15, 1);


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
`,We=t.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 270px;
  }
`,Ae=t.div`
  display: block;
  width: 100%;
  height: 226px;
`,Oe=t.img`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    width: 270px;
    height: 226px;
  }
`,Me=t.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 8px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    max-width: 345px;
  }
`,L=t.div`
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
`,P=t.p`
  font-size: 12px;
  line-height: 1.3;
  color: ${f.itemTitleExercises};
  letter-spacing: 0px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.5;
  }
`,R=t.p`
  text-transform: capitalize;
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
`,Fe=t.button`
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
`,Q=t.button`
  border: none;
  z-index: 20;
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(0, 0, 0, 0);
`,Y=t.svg`
  display: block;
  width: 13px;
  height: 13px;
  stroke: ${f.withe};
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;var N=typeof window>"u"?l.useEffect:l.useLayoutEffect,Ne=({isPlaying:n,duration:i,startAt:r=0,updateInterval:s=0,onComplete:c,onUpdate:a})=>{let[o,h]=l.useState(r),g=l.useRef(0),d=l.useRef(r),m=l.useRef(r*-1e3),x=l.useRef(null),u=l.useRef(null),p=l.useRef(null),j=k=>{let b=k/1e3;if(u.current===null){u.current=b,x.current=requestAnimationFrame(j);return}let w=b-u.current,y=g.current+w;u.current=b,g.current=y;let T=d.current+(s===0?y:(y/s|0)*s),$=d.current+y,I=typeof i=="number"&&$>=i;h(I?i:T),I||(x.current=requestAnimationFrame(j))},C=()=>{x.current&&cancelAnimationFrame(x.current),p.current&&clearTimeout(p.current),u.current=null},v=l.useCallback(k=>{C(),g.current=0;let b=typeof k=="number"?k:r;d.current=b,h(b),n&&(x.current=requestAnimationFrame(j))},[n,r]);return N(()=>{if(a==null||a(o),i&&o>=i){m.current+=i*1e3;let{shouldRepeat:k=!1,delay:b=0,newStartAt:w}=(c==null?void 0:c(m.current/1e3))||{};k&&(p.current=setTimeout(()=>v(w),b*1e3))}},[o,i]),N(()=>(n&&(x.current=requestAnimationFrame(j)),C),[n,i,s]),{elapsedTime:o,reset:v}},_e=(n,i,r)=>{let s=n/2,c=i/2,a=s-c,o=2*a,h=r==="clockwise"?"1,0":"0,1",g=2*Math.PI*a;return{path:`m ${s},${c} a ${a},${a} 0 ${h} 0,${o} a ${a},${a} 0 ${h} 0,-${o}`,pathLength:g}},_=(n,i)=>n===0||n===i?0:typeof i=="number"?n-i:0,qe=n=>({position:"relative",width:n,height:n}),Ge={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},J=(n,i,r,s,c)=>{if(s===0)return i;let a=(c?s-n:n)/s;return i+r*a},q=n=>{var i,r;return(r=(i=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(s,c,a,o)=>`#${c}${c}${a}${a}${o}${o}`).substring(1).match(/.{2}/g))==null?void 0:i.map(s=>parseInt(s,16)))!=null?r:[]},Ue=(n,i)=>{var r;let{colors:s,colorsTime:c,isSmoothColorTransition:a=!0}=n;if(typeof s=="string")return s;let o=(r=c==null?void 0:c.findIndex((u,p)=>u>=i&&i>=c[p+1]))!=null?r:-1;if(!c||o===-1)return s[0];if(!a)return s[o];let h=c[o]-i,g=c[o]-c[o+1],d=q(s[o]),m=q(s[o+1]),x=!!n.isGrowing;return`rgb(${d.map((u,p)=>J(h,u,m[p]-u,g,x)|0).join(",")})`},He=n=>{let{duration:i,initialRemainingTime:r,updateInterval:s,size:c=180,strokeWidth:a=12,trailStrokeWidth:o,isPlaying:h=!1,isGrowing:g=!1,rotation:d="clockwise",onComplete:m,onUpdate:x}=n,u=l.useRef(),p=Math.max(a,o??0),{path:j,pathLength:C}=_e(c,p,d),{elapsedTime:v}=Ne({isPlaying:h,duration:i,startAt:_(i,r),updateInterval:s,onUpdate:typeof x=="function"?b=>{let w=Math.ceil(i-b);w!==u.current&&(u.current=w,x(w))}:void 0,onComplete:typeof m=="function"?b=>{var w;let{shouldRepeat:y,delay:T,newInitialRemainingTime:$}=(w=m(b))!=null?w:{};if(y)return{shouldRepeat:y,delay:T,newStartAt:_(i,$)}}:void 0}),k=i-v;return{elapsedTime:v,path:j,pathLength:C,remainingTime:Math.ceil(k),rotation:d,size:c,stroke:Ue(n,k),strokeDashoffset:J(v,0,C,i,g),strokeWidth:a}},V=n=>{let{children:i,strokeLinecap:r,trailColor:s,trailStrokeWidth:c}=n,{path:a,pathLength:o,stroke:h,strokeDashoffset:g,remainingTime:d,elapsedTime:m,size:x,strokeWidth:u}=He(n);return B.createElement("div",{style:qe(x)},B.createElement("svg",{viewBox:`0 0 ${x} ${x}`,width:x,height:x,xmlns:"http://www.w3.org/2000/svg"},B.createElement("path",{d:a,fill:"none",stroke:s??"#d9d9d9",strokeWidth:c??u}),B.createElement("path",{d:a,fill:"none",stroke:h,strokeLinecap:r??"round",strokeWidth:u,strokeDasharray:o,strokeDashoffset:g})),typeof i=="function"&&B.createElement("div",{style:Ge},i({remainingTime:d,elapsedTime:m,color:h})))};V.displayName="CountdownCircleTimer";const Ke=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 50;

  & > :first-child {
    margin-bottom: 4px;
  }

  & > :nth-child(2) {
    margin-bottom: 14px;
  }
  & > :nth-child(3) {
    margin-bottom: 8px;
  }
`,Qe=t.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0px;
  text-align: left;
  color: ${f.itemTitleExercises};
`,Ye=t.div`
  display: flex;
  flex-direction: row;
  row-gap: 8px;
`,Je=t.p`
  font-size: 14px;
  line-height: 1.2;
  color: ${f.title};
  margin-right: 8px;
`,Ve=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  z-index: 50;
  width: 32px;
  height: 32px;
`,Xe=t.svg`
  width: 24px;
  height: 24px;
  fill: ${f.acceptColor};
`,Ze=t.span`
  color: ${f.acceptColor};
`,et=({setDinamicBurnCal:n,burnedCalories:i,toggleTimer:r,timerIsRunning:s,setRemainingTime:c,remainingTime:a})=>{const[o,h]=l.useState(0);l.useEffect(()=>{if(s){const d=setInterval(()=>{c(m=>m-1)},1e3);return()=>{clearInterval(d)}}},[s]),l.useEffect(()=>{const d=Math.round((180-a)*(i/180));h(d),n(d)},[a,i,n]);const g=d=>d.toString().padStart(2,"0");return e.jsx(e.Fragment,{children:e.jsxs(Ke,{children:[e.jsx(Qe,{children:"Time"}),e.jsx(V,{colors:["#E6533C"],strokeWidth:4,size:124,isPlaying:s,duration:180,onComplete:()=>setTimerIsRunning(!1),children:({remainingTime:d})=>e.jsx("div",{style:{color:"#fff"},role:"timer","aria-live":"assertive",children:`${g(Math.floor(d/60))}:${g(d%60)}`})}),e.jsx(Ve,{type:"button",onClick:r,children:e.jsx(Xe,{children:e.jsx("use",{href:s?`${E}#icon-pause`:`${E}#icon-play`})})}),e.jsxs(Ye,{children:[e.jsx(Je,{children:"Burned calories:"}),e.jsx(Ze,{children:o})]})]})})},tt="/pj-react-777/assets/thumb_up-2x-3d2b468a.png",nt=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
   transform: translate(-50%, -50%);
`,it=t.div`
  position: relative;
  width: 335px;
  height: 362px;
  padding: 14px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #10100f;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    width: 430px;
    height: 428px;
    padding: 16px 16px;
  }
`;t.svg`
  width: 22px;
  height: 22px;
  fill: #efede8;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;const rt=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    margin-top: 22px;
  }
`,ot=t.img`
  width: 123px;
  height: 84px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    height: 97px;
    margin-top: 32px;
  }
`,st=t.p`
  color: #efede8;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 16px;
`,M=t.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 24px;
`,G=t.span`
  color: #e6533c;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
`,at=t.button`
  border-radius: 12px;
  background: #e6533c;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  color: #efede8;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    padding: 16px 32px;
  }
  &:hover,
  &:focus {
    background-color: #ef8964;
    color: #efede8;
  }
`,ct=t.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(239, 237, 232, 0.3);
`,lt=({data:n,onClose:i})=>{const r=n;return e.jsx(nt,{children:e.jsxs(it,{children:[e.jsx(Q,{type:"button",onClick:i,children:e.jsx(Y,{children:e.jsx("use",{href:`${E}#icon-x`})})}),e.jsxs(rt,{children:[e.jsx(ot,{src:tt,alt:"exercise"}),e.jsx(st,{children:"Well done"}),e.jsxs(M,{children:["Your time: ",e.jsx(G,{children:r.time})]}),e.jsxs(M,{children:["Burned calories: ",e.jsx(G,{children:r.burnedCalories})]})]}),e.jsx(at,{onClick:i,children:"Next exercise"}),e.jsx(ee,{to:"/diary",children:e.jsxs(M,{children:["To the diary",e.jsx(ct,{children:e.jsx("use",{href:E+"#icon-start"})})]})})]})})},dt=({data:n,onClose:i})=>{const r=n,[s,c]=l.useState(!1),[a,o]=l.useState(180),[h,g]=l.useState(0),[d,m]=l.useState(!1),[x,u]=l.useState(),[p,j]=l.useState(!0),C=H(),v=r.burnedCalories,k=z(S.getIsLoading),b=()=>{c(y=>!y)},w=async y=>{y.preventDefault(),s&&c(!1);const T=r.time*60-a,$={exerciseId:r._id,burnedCalories:h,time:T};try{await C(te.postDiaryExercise($)),F.success("Success!")}catch(I){F.error(I.message)}j(!1),m(!0),u($)};return e.jsxs(Re,{children:[d&&!p&&e.jsx(lt,{onClose:i,data:x,setModalOpenSecond:m}),p&&e.jsxs(De,{onSubmit:w,children:[k&&e.jsx(ae,{}),e.jsx(Q,{type:"button",onClick:i,children:e.jsx(Y,{children:e.jsx("use",{href:`${E}#icon-x`})})}),e.jsxs(We,{children:[e.jsx(Ae,{children:e.jsx(Oe,{src:r.gifUrl,alt:"Gif-Exercises"})}),e.jsx(et,{setDinamicBurnCal:g,dinamicBurnCal:h,burnedCalories:v,toggleTimer:b,timerIsRunning:s,setRemainingTime:o,remainingTime:a,handleSubmit:w})]}),e.jsxs(Me,{children:[e.jsxs(L,{children:[e.jsx(P,{children:"Name"}),e.jsx(R,{children:r.name})]}),e.jsxs(L,{children:[e.jsx(P,{children:"Target"}),e.jsx(R,{children:r.target})]}),e.jsxs(L,{children:[e.jsx(P,{children:"Target"}),e.jsx(R,{children:r.target})]}),e.jsxs(L,{children:[e.jsx(P,{children:"Body Parts"}),e.jsx(R,{children:r.bodyPart})]})]}),e.jsx(Fe,{type:"submit",disabled:!h,children:"Add to diary"})]})]})},bt=()=>{const[n,i]=l.useState(""),[r,s]=l.useState(!1),a=U().pathname,o=localStorage.getItem("CategoryName"),h=z(S.getExercisesData),g=z(S.getIsError),d=p=>{const j=p.currentTarget.id,C=h.filter(v=>v._id===j);i(C),s(!0)},m=()=>{s(!1)};l.useEffect(()=>{function p(j){j.key==="Escape"&&m()}return r&&window.addEventListener("keydown",p),()=>{window.removeEventListener("keydown",p)}},[r]);const x=p=>{if(p==="/exercises")return"backgroundPhoto"},u=p=>p==="/exercises"?`${o}`:p==="/exercises/bodyParts"?"Body Parts":p==="/exercises/muscles"?"Muscles":p==="/exercises/equipment"?"Equipment":"";return e.jsxs(xe,{className:x(a),children:[g&&e.jsx(ce,{}),e.jsxs(pe,{children:[a==="/exercises"&&e.jsx(we,{}),e.jsxs(he,{children:[e.jsx(ke,{text:u(a)}),e.jsx(de,{})]}),r&&e.jsx(dt,{data:n[0],onClose:m}),a==="/exercises"&&e.jsx(Pe,{filter:o,openWindow:d}),e.jsx(l.Suspense,{children:e.jsx(ne,{})})]})]})};export{bt as default};
