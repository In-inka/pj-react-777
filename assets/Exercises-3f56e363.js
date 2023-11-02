import{N as re,g as f,y as Y,j as e,s as t,d as J,r as d,z as oe,u as S,R as z,L as se,h as ae,Q as q,O as ce}from"./index-5a23de3c.js";import{n as V}from"./emotion-styled.browser.esm-f9eb4b55.js";import{C as le,s as E}from"./sprite-ff5b45f8.js";import{e as de,f as pe}from"./main_bg_desktop-e1ac3f6f.js";import{e as I,L as xe}from"./exercisesSelectors-9b7f46b7.js";import{L as he}from"./Loader-f4285416.js";import ge from"./ErrorPage-bf6de554.js";const ue=V.div`
    display: flex;
    gap: 28px;
    @media screen and (min-width: 768px){
        gap: 32px;
    }
`,A=V(re)`
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



`,me=()=>{const n=Y();return e.jsxs(ue,{children:[e.jsx(A,{to:"bodyParts",state:{from:n},children:"Body parts"}),e.jsx(A,{to:"muscles",state:{from:n},children:"Muscles"}),e.jsx(A,{to:"equipment",state:{from:n},children:"Equipment"})]})},fe=t.div`
    ${le}
    height: 100%;
    /* height: 709px; */
    padding-top: 101px;
    padding-bottom: 80px;
    
    `,be=t.div`
@media screen and (min-width: 1440px) {
    display: block;
    &.backgroundPhoto{
        margin-left: auto;
        margin-right: auto;
        width: 100%;


                background: linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
                    url(${de});
                background-repeat: no-repeat;
                background-position: top 185px left 963px;
                background-size: 670px 902px ;
                
                
                @media screen and (min-device-pixel-ratio: 2),
                screen and (min-resolution: 192dpi),
                screen and (min-resolution: 2dppx) {
                    background: linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
                    url(${pe});
                    
                    background-repeat: no-repeat;
                    background-position: top 185px left 963px;
                    background-size: 670px 902px ;
                    
            }

        }  
    }


`,we=t.div`
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
`;const je=t.div`
    height: 20px;
    position: absolute;
    top: 71px;
    @media screen and (min-width: 768px){
        top: 116px;
    } 
`,ke=t.button`
    height: 100%;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
    color: rgba(239, 237, 232, 0.4);
    
`,ye=t.svg`    
    width: 16px;
    height: 16px;
    stroke:  rgba(239, 237, 232, 0.4);
    transform: rotate(180deg);
`,ve=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Ce=t.span`
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: center;
`,Ee=()=>{const n=()=>{window.history.back()};return e.jsx(je,{children:e.jsx(ke,{type:"button",onClick:n,children:e.jsxs(ve,{children:[e.jsx(ye,{children:e.jsx("use",{href:`${E}#icon-start`})}),e.jsx(Ce,{children:"Back"})]})})})},$e=t.h2`
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 0em;
    text-align: left;

`,Te=({text:n})=>e.jsx($e,{children:n}),Be=t.div`
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


`,ze=t.div`
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

`,Se=t.button`
    position: absolute;
    right: 16px;
    top: 16px;
    width: 55px;
    height: 18px;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
`,Ie=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Le=t.p`
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${f.acceptColor};
`,Pe=t.svg`
    width: 16px;
    height: 16px;
    stroke: ${f.acceptColor};
`,Re=t.span`
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
`,De=t.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;

`,We=t.svg`
    width: 24px;
    height: 24px;

`,Ae=t.h3`
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

`,Oe=t.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 4px;


`,O=t.div`
    display: flex; 
    gap: 4px;
`,M=t.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(239, 237, 232, 0.4);

`,F=t.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    text-transform: capitalize;
    color: ${f.withe};

`,Me=({filter:n,openWindow:i})=>{const s=J();d.useEffect(()=>{s(oe.getExercises())},[s]);const o=S(I.getExercisesData),c=S(I.getIsLoading),a=o.filter(r=>r.bodyPart===n||r.target===n||r.equipment===n);return e.jsxs(Be,{children:[c&&e.jsx(xe,{}),!c&&a&&a.map(r=>e.jsxs(ze,{children:[e.jsx(Re,{children:"WORKOUT"}),e.jsx(Se,{id:r._id,type:"button",onClick:i,children:e.jsxs(Ie,{children:[e.jsx(Le,{children:"Start"}),e.jsx(Pe,{children:e.jsx("use",{href:`${E}#icon-start`})})]})}),e.jsxs(De,{children:[e.jsx(We,{children:e.jsx("use",{href:`${E}#icon-running-exercises-page`})}),e.jsx(Ae,{children:r.name})]}),e.jsxs(Oe,{children:[e.jsxs(O,{children:[e.jsx(M,{children:"Burned calories:"}),e.jsx(F,{children:r.burnedCalories})]}),e.jsxs(O,{children:[e.jsx(M,{children:"Body part:"}),e.jsx(F,{children:r.bodyPart})]}),e.jsxs(O,{children:[e.jsx(M,{children:"Target:"}),e.jsx(F,{children:r.target})]})]})]},r._id))]})},Fe=t.div`
  position: fixed;
  top: 0;
  left: 0;
  /* position: absolute; */
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 4, 0.4);
  z-index: 10;
`,Ne=t.form`
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

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
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
`,_e=t.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  /* width: 100%; */
  @media screen and (min-width: 768px) {
    width: 270px;
    margin-right: 16px;
  }
`,qe=t.div`
  display: block;
  width: 100%;
  height: 226px;

`,Ge=t.img`
  width: 270px;
  height: 100%;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    width: 270px;
    height: 226px;
  }
`,Ue=t.div`
  display: inline-flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 8px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    max-width: 345px;
  }
`,G=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 40px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
margin-bottom:254px;  }
`,R=t.div`
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
`,D=t.p`
  font-size: 12px;
  line-height: 1.3;
  color: ${f.itemTitleExercises};
  letter-spacing: 0px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.5;
  }
`,W=t.p`
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
`,He=t.button`
margin-right: auto;
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
`,X=t.button`
  border: none;
  z-index: 20;
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(0, 0, 0, 0);
`,Z=t.svg`
  display: block;
  width: 13px;
  height: 13px;
  stroke: ${f.withe};
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;var U=typeof window>"u"?d.useEffect:d.useLayoutEffect,Ke=({isPlaying:n,duration:i,startAt:s=0,updateInterval:o=0,onComplete:c,onUpdate:a})=>{let[r,g]=d.useState(s),u=d.useRef(0),m=d.useRef(s),l=d.useRef(s*-1e3),x=d.useRef(null),h=d.useRef(null),p=d.useRef(null),w=k=>{let b=k/1e3;if(h.current===null){h.current=b,x.current=requestAnimationFrame(w);return}let j=b-h.current,v=u.current+j;h.current=b,u.current=v;let T=m.current+(o===0?v:(v/o|0)*o),$=m.current+v,L=typeof i=="number"&&$>=i;g(L?i:T),L||(x.current=requestAnimationFrame(w))},C=()=>{x.current&&cancelAnimationFrame(x.current),p.current&&clearTimeout(p.current),h.current=null},y=d.useCallback(k=>{C(),u.current=0;let b=typeof k=="number"?k:s;m.current=b,g(b),n&&(x.current=requestAnimationFrame(w))},[n,s]);return U(()=>{if(a==null||a(r),i&&r>=i){l.current+=i*1e3;let{shouldRepeat:k=!1,delay:b=0,newStartAt:j}=(c==null?void 0:c(l.current/1e3))||{};k&&(p.current=setTimeout(()=>y(j),b*1e3))}},[r,i]),U(()=>(n&&(x.current=requestAnimationFrame(w)),C),[n,i,o]),{elapsedTime:r,reset:y}},Qe=(n,i,s)=>{let o=n/2,c=i/2,a=o-c,r=2*a,g=s==="clockwise"?"1,0":"0,1",u=2*Math.PI*a;return{path:`m ${o},${c} a ${a},${a} 0 ${g} 0,${r} a ${a},${a} 0 ${g} 0,-${r}`,pathLength:u}},H=(n,i)=>n===0||n===i?0:typeof i=="number"?n-i:0,Ye=n=>({position:"relative",width:n,height:n}),Je={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},ee=(n,i,s,o,c)=>{if(o===0)return i;let a=(c?o-n:n)/o;return i+s*a},K=n=>{var i,s;return(s=(i=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(o,c,a,r)=>`#${c}${c}${a}${a}${r}${r}`).substring(1).match(/.{2}/g))==null?void 0:i.map(o=>parseInt(o,16)))!=null?s:[]},Ve=(n,i)=>{var s;let{colors:o,colorsTime:c,isSmoothColorTransition:a=!0}=n;if(typeof o=="string")return o;let r=(s=c==null?void 0:c.findIndex((h,p)=>h>=i&&i>=c[p+1]))!=null?s:-1;if(!c||r===-1)return o[0];if(!a)return o[r];let g=c[r]-i,u=c[r]-c[r+1],m=K(o[r]),l=K(o[r+1]),x=!!n.isGrowing;return`rgb(${m.map((h,p)=>ee(g,h,l[p]-h,u,x)|0).join(",")})`},Xe=n=>{let{duration:i,initialRemainingTime:s,updateInterval:o,size:c=180,strokeWidth:a=12,trailStrokeWidth:r,isPlaying:g=!1,isGrowing:u=!1,rotation:m="clockwise",onComplete:l,onUpdate:x}=n,h=d.useRef(),p=Math.max(a,r??0),{path:w,pathLength:C}=Qe(c,p,m),{elapsedTime:y}=Ke({isPlaying:g,duration:i,startAt:H(i,s),updateInterval:o,onUpdate:typeof x=="function"?b=>{let j=Math.ceil(i-b);j!==h.current&&(h.current=j,x(j))}:void 0,onComplete:typeof l=="function"?b=>{var j;let{shouldRepeat:v,delay:T,newInitialRemainingTime:$}=(j=l(b))!=null?j:{};if(v)return{shouldRepeat:v,delay:T,newStartAt:H(i,$)}}:void 0}),k=i-y;return{elapsedTime:y,path:w,pathLength:C,remainingTime:Math.ceil(k),rotation:m,size:c,stroke:Ve(n,k),strokeDashoffset:ee(y,0,C,i,u),strokeWidth:a}},te=n=>{let{children:i,strokeLinecap:s,trailColor:o,trailStrokeWidth:c}=n,{path:a,pathLength:r,stroke:g,strokeDashoffset:u,remainingTime:m,elapsedTime:l,size:x,strokeWidth:h}=Xe(n);return z.createElement("div",{style:Ye(x)},z.createElement("svg",{viewBox:`0 0 ${x} ${x}`,width:x,height:x,xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:a,fill:"none",stroke:o??"#d9d9d9",strokeWidth:c??h}),z.createElement("path",{d:a,fill:"none",stroke:g,strokeLinecap:s??"round",strokeWidth:h,strokeDasharray:r,strokeDashoffset:u})),typeof i=="function"&&z.createElement("div",{style:Je},i({remainingTime:m,elapsedTime:l,color:g})))};te.displayName="CountdownCircleTimer";const Ze=t.div`
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
`,et=t.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0px;
  text-align: left;
  color: ${f.itemTitleExercises};
`,tt=t.div`
  display: flex;
  flex-direction: row;
  row-gap: 8px;
`,nt=t.p`
  font-size: 14px;
  line-height: 1.2;
  color: ${f.title};
  margin-right: 8px;
`,it=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  z-index: 50;
  width: 32px;
  height: 32px;
`,rt=t.svg`
  width: 24px;
  height: 24px;
  fill: ${f.acceptColor};
`,ot=t.span`
  color: ${f.acceptColor};
`,st=({setDinamicBurnCal:n,burnedCalories:i,toggleTimer:s,timerIsRunning:o,setTimerIsRunning:c,setRemainingTime:a,remainingTime:r})=>{const[g,u]=d.useState(0);d.useEffect(()=>{if(o){const l=setInterval(()=>{a(x=>x-1)},1e3);return()=>{clearInterval(l)}}},[o]),d.useEffect(()=>{const l=Math.round((180-r)*(i/180));u(l),n(l)},[r,i,n]);const m=l=>l.toString().padStart(2,"0");return e.jsx(e.Fragment,{children:e.jsxs(Ze,{children:[e.jsx(et,{children:"Time"}),e.jsx(te,{colors:["#E6533C"],strokeWidth:4,size:124,isPlaying:o,duration:180,onComplete:()=>{c(!1)},children:({remainingTime:l})=>e.jsx("div",{style:{color:"#fff"},role:"timer","aria-live":"assertive",children:`${m(Math.floor(l/60))}:${m(l%60)}`})}),e.jsx(it,{type:"button",onClick:s,children:e.jsx(rt,{children:e.jsx("use",{href:o?`${E}#icon-pause`:`${E}#icon-play`})})}),e.jsxs(tt,{children:[e.jsx(nt,{children:"Burned calories:"}),e.jsx(ot,{children:g})]})]})})},at="/pj-react-777/assets/thumb_up-2x-3d2b468a.png",ct=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
   transform: translate(-50%, -50%);
`,lt=t.div`
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
`;const dt=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    margin-top: 22px;
  }
`,pt=t.img`
  width: 123px;
  height: 84px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    height: 97px;
    margin-top: 32px;
  }
`,xt=t.p`
  color: #efede8;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 16px;
`,N=t.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 24px;
`,Q=t.span`
  color: #e6533c;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
`,ht=t.button`
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
`,gt=t.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(239, 237, 232, 0.3);
`,ut=({data:n,onClose:i})=>{const s=n;return e.jsx(ct,{children:e.jsxs(lt,{children:[e.jsx(X,{type:"button",onClick:i,children:e.jsx(Z,{children:e.jsx("use",{href:`${E}#icon-x`})})}),e.jsxs(dt,{children:[e.jsx(pt,{src:at,alt:"exercise"}),e.jsx(xt,{children:"Well done"}),e.jsxs(N,{children:["Your time: ",e.jsx(Q,{children:s.time})]}),e.jsxs(N,{children:["Burned calories: ",e.jsx(Q,{children:s.burnedCalories})]})]}),e.jsx(ht,{onClick:i,children:"Next exercise"}),e.jsx(se,{to:"/diary",children:e.jsxs(N,{children:["To the diary",e.jsx(gt,{children:e.jsx("use",{href:E+"#icon-start"})})]})})]})})},mt=({data:n,onClose:i})=>{const s=n,[o,c]=d.useState(!1),[a,r]=d.useState(180),[g,u]=d.useState(0),[m,l]=d.useState(!1),[x,h]=d.useState(),[p,w]=d.useState(!0),C=J(),y=s.burnedCalories,k=S(I.getIsLoading),b=()=>{c(B=>!B)},j=()=>{w(!1),l(!0),h(n)},v=async B=>{B.preventDefault(),o&&c(!1);const ne=s.time*60-a+1,_={exerciseId:s._id,burnedCalories:g,time:ne};try{await C(ae.postDiaryExercise(_)),q.success("Success!")}catch(ie){q.error(ie.message)}w(!1),l(!0),h(_)},{name:T,target:$,bodyPart:L}=s,P=B=>B.slice(0,10);return e.jsxs(Fe,{children:[m&&!p&&e.jsx(ut,{onClose:i,data:x,setModalOpenSecond:l}),p&&e.jsxs(Ne,{onSubmit:v,children:[k&&e.jsx(he,{}),e.jsx(X,{type:"button",onClick:i,children:e.jsx(Z,{children:e.jsx("use",{href:`${E}#icon-x`})})}),e.jsxs(_e,{children:[e.jsx(qe,{children:e.jsx(Ge,{src:s.gifUrl,alt:"Gif-Exercises"})}),e.jsx(st,{setDinamicBurnCal:u,dinamicBurnCal:g,burnedCalories:y,toggleTimer:b,timerIsRunning:o,setRemainingTime:r,setTimerIsRunning:c,remainingTime:a,handleSubmit:v,exerciseComplete:j})]}),e.jsxs(Ue,{children:[e.jsxs(G,{children:[" ",e.jsxs(R,{children:[e.jsx(D,{children:"Name"}),e.jsx(W,{children:P(T)})]}),e.jsxs(R,{children:[e.jsx(D,{children:"Target"}),e.jsx(W,{children:P($)})]})]}),e.jsxs(G,{children:[e.jsxs(R,{children:[e.jsx(D,{children:"Target"}),e.jsx(W,{children:P($)})]}),e.jsxs(R,{children:[e.jsx(D,{children:"Body Parts"}),e.jsx(W,{children:P(L)})]})]})]}),e.jsx(He,{type:"submit",disabled:!g,children:"Add to diary"})]})]})},Ct=()=>{const[n,i]=d.useState(""),[s,o]=d.useState(!1),a=Y().pathname,r=localStorage.getItem("CategoryName"),g=S(I.getExercisesData),u=S(I.getIsError),m=p=>{const w=p.currentTarget.id,C=g.filter(y=>y._id===w);i(C),o(!0)},l=()=>{o(!1)};d.useEffect(()=>{function p(w){w.key==="Escape"&&l()}return s&&window.addEventListener("keydown",p),()=>{window.removeEventListener("keydown",p)}},[s]);const x=p=>{if(p==="/exercises")return"backgroundPhoto"},h=p=>p==="/exercises"?`${r}`:p==="/exercises/bodyParts"?"Body Parts":p==="/exercises/muscles"?"Muscles":p==="/exercises/equipment"?"Equipment":"";return e.jsxs(be,{className:x(a),children:[u&&e.jsx(ge,{}),e.jsxs(fe,{children:[a==="/exercises"&&e.jsx(Ee,{}),e.jsxs(we,{children:[e.jsx(Te,{text:h(a)}),e.jsx(me,{})]}),s&&e.jsx(mt,{data:n[0],onClose:l}),a==="/exercises"&&e.jsx(Me,{filter:r,openWindow:m}),e.jsx(d.Suspense,{children:e.jsx(ce,{})})]})]})};export{Ct as default};
