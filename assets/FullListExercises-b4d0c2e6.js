import{s as i,g as b,R as I,r as p,j as e,L as Z,e as K,b as M,h as ee,t as te,v as ie}from"./index-d23184f9.js";import{s as T}from"./sprite-dff19c60.js";import{e as O}from"./exercisesSelectors-80adadd9.js";import{L as ne}from"./Loader-f6a48672.js";import{L as re}from"./Loading-2dfcb3fa.js";import"./Hourglass-ee7508cb.js";const oe=i.div`
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


`,se=i.div`
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

`,ae=i.button`
    position: absolute;
    right: 16px;
    top: 16px;
    width: 55px;
    height: 18px;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
`,le=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,ce=i.p`
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${b.acceptColor};
`,de=i.svg`
    width: 16px;
    height: 16px;
    stroke: ${b.acceptColor};
`,pe=i.span`
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
`,xe=i.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;

`,he=i.svg`
    width: 24px;
    height: 24px;

`,ue=i.h3`
    max-width: 200px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${b.withe};
@media screen and (min-width: 375px){
    max-width: 263px;
    gap: 16px;
}  

`,ge=i.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 4px;


`,W=i.div`
    display: flex; 
    gap: 4px;
`,A=i.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(239, 237, 232, 0.4);

`,F=i.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    text-transform: capitalize;
    color: ${b.withe};

`,me=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 4, 0.4);
  z-index: 10;
`,fe=i.form`
  position: relative;
  overflow-y: scroll;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 17px;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(16, 16, 15, 1);
  height: 90%;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    height:initial;
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
`,be=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  /* width: 100%; */
  @media screen and (min-width: 768px) {
    width: 270px;
    margin-right: 16px;
  }
`,we=i.div`
  display: block;
  width: 100%;
  height: 226px;

`,je=i.img`
  width: 270px;
  height: 100%;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    width: 270px;
    height: 226px;
  }
`,ye=i.div`
  display: inline-flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 8px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    max-width: 345px;
  }
`,N=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 40px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
margin-bottom:254px;  }
`,L=i.div`
  width: 147px;
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
`,R=i.p`
  font-size: 12px;
  line-height: 1.3;
  color: ${b.itemTitleExercises};
  letter-spacing: 0px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.5;
  }
`,D=i.p`
  text-transform: capitalize;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0px;
  text-align: left;
  color: ${b.withe};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,ke=i.button`
margin-right: auto;
  /* position: absolute; */

  padding: 14px 32px 14px 32px;
  border-radius: 12px;
  border: none;
  outline: none;
  color: ${b.withe};
  background-color: ${b.acceptColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 48px;
    right: 32px;
  }

  &:hover,
  &:focus {
    background-color: ${b.secondaryOrange};
  }
  &:disabled {
    background-color: #e6533c;
    color: #efede899;
  }
`,Y=i.button`
  border: none;
  z-index: 20;
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(0, 0, 0, 0);
`,J=i.svg`
  display: block;
  width: 13px;
  height: 13px;
  stroke: ${b.withe};
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;var q=typeof window>"u"?p.useEffect:p.useLayoutEffect,ve=({isPlaying:n,duration:t,startAt:s=0,updateInterval:r=0,onComplete:a,onUpdate:c})=>{let[l,h]=p.useState(s),u=p.useRef(0),g=p.useRef(s),d=p.useRef(s*-1e3),o=p.useRef(null),x=p.useRef(null),m=p.useRef(null),j=y=>{let f=y/1e3;if(x.current===null){x.current=f,o.current=requestAnimationFrame(j);return}let w=f-x.current,k=u.current+w;x.current=f,u.current=k;let E=g.current+(r===0?k:(k/r|0)*r),$=g.current+k,z=typeof t=="number"&&$>=t;h(z?t:E),z||(o.current=requestAnimationFrame(j))},C=()=>{o.current&&cancelAnimationFrame(o.current),m.current&&clearTimeout(m.current),x.current=null},v=p.useCallback(y=>{C(),u.current=0;let f=typeof y=="number"?y:s;g.current=f,h(f),n&&(o.current=requestAnimationFrame(j))},[n,s]);return q(()=>{if(c==null||c(l),t&&l>=t){d.current+=t*1e3;let{shouldRepeat:y=!1,delay:f=0,newStartAt:w}=(a==null?void 0:a(d.current/1e3))||{};y&&(m.current=setTimeout(()=>v(w),f*1e3))}},[l,t]),q(()=>(n&&(o.current=requestAnimationFrame(j)),C),[n,t,r]),{elapsedTime:l,reset:v}},Ce=(n,t,s)=>{let r=n/2,a=t/2,c=r-a,l=2*c,h=s==="clockwise"?"1,0":"0,1",u=2*Math.PI*c;return{path:`m ${r},${a} a ${c},${c} 0 ${h} 0,${l} a ${c},${c} 0 ${h} 0,-${l}`,pathLength:u}},U=(n,t)=>n===0||n===t?0:typeof t=="number"?n-t:0,Te=n=>({position:"relative",width:n,height:n}),$e={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},Q=(n,t,s,r,a)=>{if(r===0)return t;let c=(a?r-n:n)/r;return t+s*c},_=n=>{var t,s;return(s=(t=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(r,a,c,l)=>`#${a}${a}${c}${c}${l}${l}`).substring(1).match(/.{2}/g))==null?void 0:t.map(r=>parseInt(r,16)))!=null?s:[]},Ee=(n,t)=>{var s;let{colors:r,colorsTime:a,isSmoothColorTransition:c=!0}=n;if(typeof r=="string")return r;let l=(s=a==null?void 0:a.findIndex((x,m)=>x>=t&&t>=a[m+1]))!=null?s:-1;if(!a||l===-1)return r[0];if(!c)return r[l];let h=a[l]-t,u=a[l]-a[l+1],g=_(r[l]),d=_(r[l+1]),o=!!n.isGrowing;return`rgb(${g.map((x,m)=>Q(h,x,d[m]-x,u,o)|0).join(",")})`},Se=n=>{let{duration:t,initialRemainingTime:s,updateInterval:r,size:a=180,strokeWidth:c=12,trailStrokeWidth:l,isPlaying:h=!1,isGrowing:u=!1,rotation:g="clockwise",onComplete:d,onUpdate:o}=n,x=p.useRef(),m=Math.max(c,l??0),{path:j,pathLength:C}=Ce(a,m,g),{elapsedTime:v}=ve({isPlaying:h,duration:t,startAt:U(t,s),updateInterval:r,onUpdate:typeof o=="function"?f=>{let w=Math.ceil(t-f);w!==x.current&&(x.current=w,o(w))}:void 0,onComplete:typeof d=="function"?f=>{var w;let{shouldRepeat:k,delay:E,newInitialRemainingTime:$}=(w=d(f))!=null?w:{};if(k)return{shouldRepeat:k,delay:E,newStartAt:U(t,$)}}:void 0}),y=t-v;return{elapsedTime:v,path:j,pathLength:C,remainingTime:Math.ceil(y),rotation:g,size:a,stroke:Ee(n,y),strokeDashoffset:Q(v,0,C,t,u),strokeWidth:c}},V=n=>{let{children:t,strokeLinecap:s,trailColor:r,trailStrokeWidth:a}=n,{path:c,pathLength:l,stroke:h,strokeDashoffset:u,remainingTime:g,elapsedTime:d,size:o,strokeWidth:x}=Se(n);return I.createElement("div",{style:Te(o)},I.createElement("svg",{viewBox:`0 0 ${o} ${o}`,width:o,height:o,xmlns:"http://www.w3.org/2000/svg"},I.createElement("path",{d:c,fill:"none",stroke:r??"#d9d9d9",strokeWidth:a??x}),I.createElement("path",{d:c,fill:"none",stroke:h,strokeLinecap:s??"round",strokeWidth:x,strokeDasharray:l,strokeDashoffset:u})),typeof t=="function"&&I.createElement("div",{style:$e},t({remainingTime:g,elapsedTime:d,color:h})))};V.displayName="CountdownCircleTimer";const Ie=i.div`
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
`,ze=i.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0px;
  text-align: left;
  color: ${b.itemTitleExercises};
`,Be=i.div`
  display: flex;
  flex-direction: row;
  row-gap: 8px;
`,Le=i.p`
  font-size: 14px;
  line-height: 1.2;
  color: ${b.title};
  margin-right: 8px;
`,Re=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  z-index: 50;
  width: 32px;
  height: 32px;
`,De=i.svg`
  width: 24px;
  height: 24px;
  fill: ${b.acceptColor};
`,We=i.span`
  color: ${b.acceptColor};
`,Ae=({setDinamicBurnCal:n,burnedCalories:t,toggleTimer:s,timerIsRunning:r,setTimerIsRunning:a,setRemainingTime:c,remainingTime:l})=>{const[h,u]=p.useState(0);p.useEffect(()=>{if(r){const d=setInterval(()=>{c(o=>o-1)},1e3);return()=>{clearInterval(d)}}},[r]),p.useEffect(()=>{const d=Math.round((180-l)*(t/180));u(d),n(d)},[l,t,n]);const g=d=>d.toString().padStart(2,"0");return e.jsx(e.Fragment,{children:e.jsxs(Ie,{children:[e.jsx(ze,{children:"Time"}),e.jsx(V,{colors:["#E6533C"],strokeWidth:4,size:124,isPlaying:r,duration:180,onComplete:()=>{a(!1)},children:({remainingTime:d})=>e.jsx("div",{style:{color:"#fff"},role:"timer","aria-live":"assertive",children:`${g(Math.floor(d/60))}:${g(d%60)}`})}),e.jsx(Re,{type:"button",onClick:s,children:e.jsx(De,{children:e.jsx("use",{href:r?`${T}#icon-pause`:`${T}#icon-play`})})}),e.jsxs(Be,{children:[e.jsx(Le,{children:"Burned calories:"}),e.jsx(We,{children:h})]})]})})},Fe="/pj-react-777/assets/thumb_up-2x-3d2b468a.png",Pe=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
   transform: translate(-50%, -50%);
`,Me=i.div`
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
`;i.svg`
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
`;const Oe=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    margin-top: 22px;
  }
`,Ge=i.img`
  width: 123px;
  height: 84px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    height: 97px;
    margin-top: 32px;
  }
`,Ne=i.p`
  color: #efede8;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 16px;
`,P=i.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 24px;
`,H=i.span`
  color: #e6533c;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
`,qe=i.button`
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
`,Ue=i.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(239, 237, 232, 0.3);
`,_e=({data:n,onClose:t})=>{const s=n;return e.jsx(Pe,{children:e.jsxs(Me,{children:[e.jsx(Y,{type:"button",onClick:t,children:e.jsx(J,{children:e.jsx("use",{href:`${T}#icon-x`})})}),e.jsxs(Oe,{children:[e.jsx(Ge,{src:Fe,alt:"exercise"}),e.jsx(Ne,{children:"Well done"}),e.jsxs(P,{children:["Your time: ",e.jsx(H,{children:s.time})]}),e.jsxs(P,{children:["Burned calories: ",e.jsx(H,{children:s.burnedCalories})]})]}),e.jsx(qe,{onClick:t,children:"Next exercise"}),e.jsx(Z,{to:"/diary",children:e.jsxs(P,{children:["To the diary",e.jsx(Ue,{children:e.jsx("use",{href:T+"#icon-start"})})]})})]})})},He=({data:n,onClose:t})=>{const s=n,[r,a]=p.useState(!1),[c,l]=p.useState(180),[h,u]=p.useState(0),[g,d]=p.useState(!1),[o,x]=p.useState(),[m,j]=p.useState(!0),C=K(),v=s.burnedCalories,y=M(O.getIsLoading),f=()=>{a(S=>!S)},w=()=>{j(!1),d(!0),x(n)},k=async S=>{S.preventDefault(),r&&a(!1);const X=s.time*60-c+1,G={exerciseId:s._id,burnedCalories:h,time:X};C(ee.postDiaryExercise(G)),j(!1),d(!0),x(G)},{name:E,target:$,bodyPart:z}=s,B=S=>S.slice(0,10);return e.jsxs(me,{children:[g&&!m&&e.jsx(_e,{onClose:t,data:o,setModalOpenSecond:d}),m&&e.jsxs(fe,{onSubmit:k,children:[y&&e.jsx(ne,{}),e.jsx(Y,{type:"button",onClick:t,children:e.jsx(J,{children:e.jsx("use",{href:`${T}#icon-x`})})}),e.jsxs(be,{children:[e.jsx(we,{children:e.jsx(je,{src:s.gifUrl,alt:"Gif-Exercises"})}),e.jsx(Ae,{setDinamicBurnCal:u,dinamicBurnCal:h,burnedCalories:v,toggleTimer:f,timerIsRunning:r,setRemainingTime:l,setTimerIsRunning:a,remainingTime:c,handleSubmit:k,exerciseComplete:w})]}),e.jsxs(ye,{children:[e.jsxs(N,{children:[" ",e.jsxs(L,{children:[e.jsx(R,{children:"Name"}),e.jsx(D,{children:B(E)})]}),e.jsxs(L,{children:[e.jsx(R,{children:"Target"}),e.jsx(D,{children:B($)})]})]}),e.jsxs(N,{children:[e.jsxs(L,{children:[e.jsx(R,{children:"Target"}),e.jsx(D,{children:B($)})]}),e.jsxs(L,{children:[e.jsx(R,{children:"Body Parts"}),e.jsx(D,{children:B(z)})]})]})]}),e.jsx(ke,{type:"submit",disabled:!h,children:"Add to diary"})]})]})},Ze=()=>{const{category:n}=te(),t=K(),s=M(O.getExercisesData),r=M(O.getIsLoading),[a,c]=p.useState(""),[l,h]=p.useState(!1);p.useEffect(()=>{t(ie.getExercises())},[t]);const u=s.filter(o=>o.bodyPart===n||o.target===n||o.equipment===n),g=o=>{const x=o.currentTarget.id,m=s.filter(j=>j._id===x);c(m),h(!0)},d=()=>{h(!1)};return p.useEffect(()=>{function o(x){x.key==="Escape"&&d()}return l&&window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[l]),e.jsxs(oe,{children:[r&&e.jsx(re,{}),!r&&u&&u.map(o=>e.jsxs(se,{children:[e.jsx(pe,{children:"WORKOUT"}),e.jsx(ae,{id:o._id,type:"button",onClick:g,children:e.jsxs(le,{children:[e.jsx(ce,{children:"Start"}),e.jsx(de,{children:e.jsx("use",{href:`${T}#icon-start`})})]})}),e.jsxs(xe,{children:[e.jsx(he,{children:e.jsx("use",{href:`${T}#icon-running-exercises-page`})}),e.jsx(ue,{children:o.name})]}),e.jsxs(ge,{children:[e.jsxs(W,{children:[e.jsx(A,{children:"Burned calories:"}),e.jsx(F,{children:o.burnedCalories})]}),e.jsxs(W,{children:[e.jsx(A,{children:"Body part:"}),e.jsx(F,{children:o.bodyPart})]}),e.jsxs(W,{children:[e.jsx(A,{children:"Target:"}),e.jsx(F,{children:o.target})]})]})]},o._id)),l&&e.jsx(He,{data:a[0],onClose:d})]})};export{Ze as default};
