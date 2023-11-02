import{N as Z,g as f,y as U,j as e,s as t,d as H,r as d,z as ee,u as z,R as B,L as te,h as ne,Q as F,O as ie}from"./index-2bd2b9b4.js";import{n as K}from"./emotion-styled.browser.esm-6f54fb5b.js";import{C as re,s as E}from"./sprite-d78a76d4.js";import{e as oe,f as se}from"./main_bg_desktop-e1ac3f6f.js";import{e as S,L as ae}from"./exercisesSelectors-ec210923.js";import{L as ce}from"./Loader-ac2fcf5a.js";import le from"./ErrorPage-13291d72.js";const de=K.div`
    display: flex;
    gap: 28px;
    @media screen and (min-width: 768px){
        gap: 32px;
    }
`,D=K(Z)`
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



`,pe=()=>{const n=U();return e.jsxs(de,{children:[e.jsx(D,{to:"bodyParts",state:{from:n},children:"Body parts"}),e.jsx(D,{to:"muscles",state:{from:n},children:"Muscles"}),e.jsx(D,{to:"equipment",state:{from:n},children:"Equipment"})]})},xe=t.div`
    ${re}
    height: 100%;
    /* height: 709px; */
    padding-top: 101px;
    padding-bottom: 80px;
    
    `,he=t.div`
@media screen and (min-width: 1440px) {
    display: block;
    &.backgroundPhoto{
        margin-left: auto;
        margin-right: auto;
        width: 100%;


                background: linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
                    url(${oe});
                background-repeat: no-repeat;
                background-position: top 185px left 963px;
                background-size: 670px 902px ;
                
                
                @media screen and (min-device-pixel-ratio: 2),
                screen and (min-resolution: 192dpi),
                screen and (min-resolution: 2dppx) {
                    background: linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
                    url(${se});
                    
                    background-repeat: no-repeat;
                    background-position: top 185px left 963px;
                    background-size: 670px 902px ;
                    
            }

        }  
    }


`,ue=t.div`
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
`;const ge=t.div`
    height: 20px;
    position: absolute;
    top: 71px;
    @media screen and (min-width: 768px){
        top: 116px;
    } 
`,me=t.button`
    height: 100%;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
    color: rgba(239, 237, 232, 0.4);
    
`,fe=t.svg`    
    width: 16px;
    height: 16px;
    stroke:  rgba(239, 237, 232, 0.4);
    transform: rotate(180deg);
`,be=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,we=t.span`
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: center;
`,je=()=>{const n=()=>{window.history.back()};return e.jsx(ge,{children:e.jsx(me,{type:"button",onClick:n,children:e.jsxs(be,{children:[e.jsx(fe,{children:e.jsx("use",{href:`${E}#icon-start`})}),e.jsx(we,{children:"Back"})]})})})},ke=t.h2`
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 0em;
    text-align: left;

`,ye=({text:n})=>e.jsx(ke,{children:n}),ve=t.div`
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


`,Ce=t.div`
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

`,Ee=t.button`
    position: absolute;
    right: 16px;
    top: 16px;
    width: 55px;
    height: 18px;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
`,$e=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Te=t.p`
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${f.acceptColor};
`,Be=t.svg`
    width: 16px;
    height: 16px;
    stroke: ${f.acceptColor};
`,ze=t.span`
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
`,Se=t.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;

`,Ie=t.svg`
    width: 24px;
    height: 24px;

`,Le=t.h3`
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

`,Pe=t.div`
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

`,Re=({filter:n,openWindow:i})=>{const o=H();d.useEffect(()=>{o(ee.getExercises())},[o]);const s=z(S.getExercisesData),c=z(S.getIsLoading),a=s.filter(r=>r.bodyPart===n||r.target===n||r.equipment===n);return e.jsxs(ve,{children:[c&&e.jsx(ae,{}),!c&&a&&a.map(r=>e.jsxs(Ce,{children:[e.jsx(ze,{children:"WORKOUT"}),e.jsx(Ee,{id:r._id,type:"button",onClick:i,children:e.jsxs($e,{children:[e.jsx(Te,{children:"Start"}),e.jsx(Be,{children:e.jsx("use",{href:`${E}#icon-start`})})]})}),e.jsxs(Se,{children:[e.jsx(Ie,{children:e.jsx("use",{href:`${E}#icon-running-exercises-page`})}),e.jsx(Le,{children:r.name})]}),e.jsxs(Pe,{children:[e.jsxs(W,{children:[e.jsx(A,{children:"Burned calories:"}),e.jsx(O,{children:r.burnedCalories})]}),e.jsxs(W,{children:[e.jsx(A,{children:"Body part:"}),e.jsx(O,{children:r.bodyPart})]}),e.jsxs(W,{children:[e.jsx(A,{children:"Target:"}),e.jsx(O,{children:r.target})]})]})]},r._id))]})},De=t.div`
  position: fixed;
  top: 0;
  left: 0;
  /* position: absolute; */
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 4, 0.4);
  z-index: 1;
`,We=t.form`
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
`,Ae=t.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 270px;
  }
`,Oe=t.div`
  display: block;
  width: 100%;
  height: 226px;
`,Me=t.img`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    width: 270px;
    height: 226px;
  }
`,Fe=t.div`
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
`,Ne=t.button`
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
`;var N=typeof window>"u"?d.useEffect:d.useLayoutEffect,_e=({isPlaying:n,duration:i,startAt:o=0,updateInterval:s=0,onComplete:c,onUpdate:a})=>{let[r,h]=d.useState(o),g=d.useRef(0),m=d.useRef(o),u=d.useRef(o*-1e3),l=d.useRef(null),x=d.useRef(null),p=d.useRef(null),j=k=>{let b=k/1e3;if(x.current===null){x.current=b,l.current=requestAnimationFrame(j);return}let w=b-x.current,v=g.current+w;x.current=b,g.current=v;let $=m.current+(s===0?v:(v/s|0)*s),T=m.current+v,I=typeof i=="number"&&T>=i;h(I?i:$),I||(l.current=requestAnimationFrame(j))},C=()=>{l.current&&cancelAnimationFrame(l.current),p.current&&clearTimeout(p.current),x.current=null},y=d.useCallback(k=>{C(),g.current=0;let b=typeof k=="number"?k:o;m.current=b,h(b),n&&(l.current=requestAnimationFrame(j))},[n,o]);return N(()=>{if(a==null||a(r),i&&r>=i){u.current+=i*1e3;let{shouldRepeat:k=!1,delay:b=0,newStartAt:w}=(c==null?void 0:c(u.current/1e3))||{};k&&(p.current=setTimeout(()=>y(w),b*1e3))}},[r,i]),N(()=>(n&&(l.current=requestAnimationFrame(j)),C),[n,i,s]),{elapsedTime:r,reset:y}},qe=(n,i,o)=>{let s=n/2,c=i/2,a=s-c,r=2*a,h=o==="clockwise"?"1,0":"0,1",g=2*Math.PI*a;return{path:`m ${s},${c} a ${a},${a} 0 ${h} 0,${r} a ${a},${a} 0 ${h} 0,-${r}`,pathLength:g}},_=(n,i)=>n===0||n===i?0:typeof i=="number"?n-i:0,Ge=n=>({position:"relative",width:n,height:n}),Ue={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},J=(n,i,o,s,c)=>{if(s===0)return i;let a=(c?s-n:n)/s;return i+o*a},q=n=>{var i,o;return(o=(i=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(s,c,a,r)=>`#${c}${c}${a}${a}${r}${r}`).substring(1).match(/.{2}/g))==null?void 0:i.map(s=>parseInt(s,16)))!=null?o:[]},He=(n,i)=>{var o;let{colors:s,colorsTime:c,isSmoothColorTransition:a=!0}=n;if(typeof s=="string")return s;let r=(o=c==null?void 0:c.findIndex((x,p)=>x>=i&&i>=c[p+1]))!=null?o:-1;if(!c||r===-1)return s[0];if(!a)return s[r];let h=c[r]-i,g=c[r]-c[r+1],m=q(s[r]),u=q(s[r+1]),l=!!n.isGrowing;return`rgb(${m.map((x,p)=>J(h,x,u[p]-x,g,l)|0).join(",")})`},Ke=n=>{let{duration:i,initialRemainingTime:o,updateInterval:s,size:c=180,strokeWidth:a=12,trailStrokeWidth:r,isPlaying:h=!1,isGrowing:g=!1,rotation:m="clockwise",onComplete:u,onUpdate:l}=n,x=d.useRef(),p=Math.max(a,r??0),{path:j,pathLength:C}=qe(c,p,m),{elapsedTime:y}=_e({isPlaying:h,duration:i,startAt:_(i,o),updateInterval:s,onUpdate:typeof l=="function"?b=>{let w=Math.ceil(i-b);w!==x.current&&(x.current=w,l(w))}:void 0,onComplete:typeof u=="function"?b=>{var w;let{shouldRepeat:v,delay:$,newInitialRemainingTime:T}=(w=u(b))!=null?w:{};if(v)return{shouldRepeat:v,delay:$,newStartAt:_(i,T)}}:void 0}),k=i-y;return{elapsedTime:y,path:j,pathLength:C,remainingTime:Math.ceil(k),rotation:m,size:c,stroke:He(n,k),strokeDashoffset:J(y,0,C,i,g),strokeWidth:a}},V=n=>{let{children:i,strokeLinecap:o,trailColor:s,trailStrokeWidth:c}=n,{path:a,pathLength:r,stroke:h,strokeDashoffset:g,remainingTime:m,elapsedTime:u,size:l,strokeWidth:x}=Ke(n);return B.createElement("div",{style:Ge(l)},B.createElement("svg",{viewBox:`0 0 ${l} ${l}`,width:l,height:l,xmlns:"http://www.w3.org/2000/svg"},B.createElement("path",{d:a,fill:"none",stroke:s??"#d9d9d9",strokeWidth:c??x}),B.createElement("path",{d:a,fill:"none",stroke:h,strokeLinecap:o??"round",strokeWidth:x,strokeDasharray:r,strokeDashoffset:g})),typeof i=="function"&&B.createElement("div",{style:Ue},i({remainingTime:m,elapsedTime:u,color:h})))};V.displayName="CountdownCircleTimer";const Qe=t.div`
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
`,Ye=t.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0px;
  text-align: left;
  color: ${f.itemTitleExercises};
`,Je=t.div`
  display: flex;
  flex-direction: row;
  row-gap: 8px;
`,Ve=t.p`
  font-size: 14px;
  line-height: 1.2;
  color: ${f.title};
  margin-right: 8px;
`,Xe=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  z-index: 50;
  width: 32px;
  height: 32px;
`,Ze=t.svg`
  width: 24px;
  height: 24px;
  fill: ${f.acceptColor};
`,et=t.span`
  color: ${f.acceptColor};
`,tt=({setDinamicBurnCal:n,burnedCalories:i,toggleTimer:o,timerIsRunning:s,setTimerIsRunning:c,setRemainingTime:a,remainingTime:r,exerciseComplete:h})=>{const[g,m]=d.useState(0);d.useEffect(()=>{if(s){const l=setInterval(()=>{a(x=>x-1)},1e3);return()=>{clearInterval(l)}}},[s]),d.useEffect(()=>{const l=Math.round((180-r)*(i/180));m(l),n(l)},[r,i,n]);const u=l=>l.toString().padStart(2,"0");return e.jsx(e.Fragment,{children:e.jsxs(Qe,{children:[e.jsx(Ye,{children:"Time"}),e.jsx(V,{colors:["#E6533C"],strokeWidth:4,size:124,isPlaying:s,duration:180,onComplete:()=>{c(!1),h()},children:({remainingTime:l})=>e.jsx("div",{style:{color:"#fff"},role:"timer","aria-live":"assertive",children:`${u(Math.floor(l/60))}:${u(l%60)}`})}),e.jsx(Xe,{type:"button",onClick:o,children:e.jsx(Ze,{children:e.jsx("use",{href:s?`${E}#icon-pause`:`${E}#icon-play`})})}),e.jsxs(Je,{children:[e.jsx(Ve,{children:"Burned calories:"}),e.jsx(et,{children:g})]})]})})},nt="/pj-react-777/assets/thumb_up-2x-3d2b468a.png",it=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
   transform: translate(-50%, -50%);
`,rt=t.div`
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
`;const ot=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    margin-top: 22px;
  }
`,st=t.img`
  width: 123px;
  height: 84px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    height: 97px;
    margin-top: 32px;
  }
`,at=t.p`
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
`,ct=t.button`
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
`,lt=t.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(239, 237, 232, 0.3);
`,dt=({data:n,onClose:i})=>{const o=n;return e.jsx(it,{children:e.jsxs(rt,{children:[e.jsx(Q,{type:"button",onClick:i,children:e.jsx(Y,{children:e.jsx("use",{href:`${E}#icon-x`})})}),e.jsxs(ot,{children:[e.jsx(st,{src:nt,alt:"exercise"}),e.jsx(at,{children:"Well done"}),e.jsxs(M,{children:["Your time: ",e.jsx(G,{children:o.time})]}),e.jsxs(M,{children:["Burned calories: ",e.jsx(G,{children:o.burnedCalories})]})]}),e.jsx(ct,{onClick:i,children:"Next exercise"}),e.jsx(te,{to:"/diary",children:e.jsxs(M,{children:["To the diary",e.jsx(lt,{children:e.jsx("use",{href:E+"#icon-start"})})]})})]})})},pt=({data:n,onClose:i})=>{const o=n,[s,c]=d.useState(!1),[a,r]=d.useState(180),[h,g]=d.useState(0),[m,u]=d.useState(!1),[l,x]=d.useState(),[p,j]=d.useState(!0),C=H(),y=o.burnedCalories,k=z(S.getIsLoading),b=()=>{c($=>!$)},w=()=>{j(!1),u(!0),x(n)},v=async $=>{$.preventDefault(),s&&c(!1);const T=o.time*60-a,I={exerciseId:o._id,burnedCalories:h,time:T};try{await C(ne.postDiaryExercise(I)),F.success("Success!")}catch(X){F.error(X.message)}w()};return e.jsxs(De,{children:[m&&!p&&e.jsx(dt,{onClose:i,data:l,setModalOpenSecond:u}),p&&e.jsxs(We,{onSubmit:v,children:[k&&e.jsx(ce,{}),e.jsx(Q,{type:"button",onClick:i,children:e.jsx(Y,{children:e.jsx("use",{href:`${E}#icon-x`})})}),e.jsxs(Ae,{children:[e.jsx(Oe,{children:e.jsx(Me,{src:o.gifUrl,alt:"Gif-Exercises"})}),e.jsx(tt,{setDinamicBurnCal:g,dinamicBurnCal:h,burnedCalories:y,toggleTimer:b,timerIsRunning:s,setRemainingTime:r,setTimerIsRunning:c,remainingTime:a,handleSubmit:v,exerciseComplete:w})]}),e.jsxs(Fe,{children:[e.jsxs(L,{children:[e.jsx(P,{children:"Name"}),e.jsx(R,{children:o.name})]}),e.jsxs(L,{children:[e.jsx(P,{children:"Target"}),e.jsx(R,{children:o.target})]}),e.jsxs(L,{children:[e.jsx(P,{children:"Target"}),e.jsx(R,{children:o.target})]}),e.jsxs(L,{children:[e.jsx(P,{children:"Body Parts"}),e.jsx(R,{children:o.bodyPart})]})]}),e.jsx(Ne,{type:"submit",disabled:!h,children:"Add to diary"})]})]})},wt=()=>{const[n,i]=d.useState(""),[o,s]=d.useState(!1),a=U().pathname,r=localStorage.getItem("CategoryName"),h=z(S.getExercisesData),g=z(S.getIsError),m=p=>{const j=p.currentTarget.id,C=h.filter(y=>y._id===j);i(C),s(!0)},u=()=>{s(!1)};d.useEffect(()=>{function p(j){j.key==="Escape"&&u()}return o&&window.addEventListener("keydown",p),()=>{window.removeEventListener("keydown",p)}},[o]);const l=p=>{if(p==="/exercises")return"backgroundPhoto"},x=p=>p==="/exercises"?`${r}`:p==="/exercises/bodyParts"?"Body Parts":p==="/exercises/muscles"?"Muscles":p==="/exercises/equipment"?"Equipment":"";return e.jsxs(he,{className:l(a),children:[g&&e.jsx(le,{}),e.jsxs(xe,{children:[a==="/exercises"&&e.jsx(je,{}),e.jsxs(ue,{children:[e.jsx(ye,{text:x(a)}),e.jsx(pe,{})]}),o&&e.jsx(pt,{data:n[0],onClose:u}),a==="/exercises"&&e.jsx(Re,{filter:r,openWindow:m}),e.jsx(d.Suspense,{children:e.jsx(ie,{})})]})]})};export{wt as default};
