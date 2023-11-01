import{N as Z,g as f,w as H,j as e,s as t,d as K,r as l,x as ee,u as $,y as te,R as S,L as F,h as ne,Q as N,O as ie}from"./index-bb33c23b.js";import{n as Q}from"./emotion-styled.browser.esm-10d30aac.js";import{C as re,s as E}from"./sprite-4a1234f1.js";import{e as oe,f as se}from"./main_bg_desktop-e1ac3f6f.js";import{e as B}from"./exercisesSelectors-80adadd9.js";import{L as ae}from"./Loader-8d9e6edf.js";import ce from"./ErrorPage-c739c624.js";const le=Q.div`
    display: flex;
    gap: 28px;
    @media screen and (min-width: 768px){
        gap: 32px;
    }
`,D=Q(Z)`
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



`,de=()=>{const n=H();return e.jsxs(le,{children:[e.jsx(D,{to:"bodyParts",state:{from:n},children:"Body parts"}),e.jsx(D,{to:"muscles",state:{from:n},children:"Muscles"}),e.jsx(D,{to:"equipment",state:{from:n},children:"Equipment"})]})},pe=t.div`
    ${re}
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
`;const ge=t.div`
    height: 20px;
    position: absolute;
    top: 71px;
    @media screen and (min-width: 768px){
        top: 116px;
    } 
`,ue=t.button`
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
`,we=()=>{const n=()=>{window.history.back()};return e.jsx(ge,{children:e.jsx(ue,{type:"button",onClick:n,children:e.jsxs(fe,{children:[e.jsx(me,{children:e.jsx("use",{href:`${E}#icon-start`})}),e.jsx(be,{children:"Back"})]})})})},je=t.h2`
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
`,Te=t.p`
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${f.acceptColor};
`,$e=t.svg`
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
`,Ie=t.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;

`,Se=t.svg`
    width: 24px;
    height: 24px;

`,ze=t.h3`
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

`,Le=({filter:n,openWindow:i})=>{const o=K();l.useEffect(()=>{o(ee.getExercises())},[]);const s=$(B.getExercisesData),c=$(B.getIsLoading);$(B.getIsError);const a=s.filter(r=>r.bodyPart===n||r.target===n||r.equipment===n);return e.jsxs(ye,{children:[c&&e.jsx(te,{}),!c&&a&&a.map(r=>e.jsxs(ve,{children:[e.jsx(Be,{children:"WORKOUT"}),e.jsx(Ce,{id:r._id,type:"button",onClick:i,children:e.jsxs(Ee,{children:[e.jsx(Te,{children:"Start"}),e.jsx($e,{children:e.jsx("use",{href:`${E}#icon-start`})})]})}),e.jsxs(Ie,{children:[e.jsx(Se,{children:e.jsx("use",{href:`${E}#icon-running-exercises-page`})}),e.jsx(ze,{children:r.name})]}),e.jsxs(Pe,{children:[e.jsxs(W,{children:[e.jsx(A,{children:"Burned calories:"}),e.jsx(O,{children:r.burnedCalories})]}),e.jsxs(W,{children:[e.jsx(A,{children:"Body part:"}),e.jsx(O,{children:r.bodyPart})]}),e.jsxs(W,{children:[e.jsx(A,{children:"Target:"}),e.jsx(O,{children:r.target})]})]})]},r._id))]})},Re=t.div`
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
  height: 95%;
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
`,P=t.div`
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
`,L=t.p`
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
`,Y=t.button`
  border: none;
  z-index: 20;
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(0, 0, 0, 0);
`,J=t.svg`
  display: block;
  width: 13px;
  height: 13px;
  stroke: ${f.withe};
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;var _=typeof window>"u"?l.useEffect:l.useLayoutEffect,Ne=({isPlaying:n,duration:i,startAt:o=0,updateInterval:s=0,onComplete:c,onUpdate:a})=>{let[r,h]=l.useState(o),u=l.useRef(0),d=l.useRef(o),m=l.useRef(o*-1e3),x=l.useRef(null),g=l.useRef(null),p=l.useRef(null),j=k=>{let b=k/1e3;if(g.current===null){g.current=b,x.current=requestAnimationFrame(j);return}let w=b-g.current,y=u.current+w;g.current=b,u.current=y;let I=d.current+(s===0?y:(y/s|0)*s),T=d.current+y,z=typeof i=="number"&&T>=i;h(z?i:I),z||(x.current=requestAnimationFrame(j))},C=()=>{x.current&&cancelAnimationFrame(x.current),p.current&&clearTimeout(p.current),g.current=null},v=l.useCallback(k=>{C(),u.current=0;let b=typeof k=="number"?k:o;d.current=b,h(b),n&&(x.current=requestAnimationFrame(j))},[n,o]);return _(()=>{if(a==null||a(r),i&&r>=i){m.current+=i*1e3;let{shouldRepeat:k=!1,delay:b=0,newStartAt:w}=(c==null?void 0:c(m.current/1e3))||{};k&&(p.current=setTimeout(()=>v(w),b*1e3))}},[r,i]),_(()=>(n&&(x.current=requestAnimationFrame(j)),C),[n,i,s]),{elapsedTime:r,reset:v}},_e=(n,i,o)=>{let s=n/2,c=i/2,a=s-c,r=2*a,h=o==="clockwise"?"1,0":"0,1",u=2*Math.PI*a;return{path:`m ${s},${c} a ${a},${a} 0 ${h} 0,${r} a ${a},${a} 0 ${h} 0,-${r}`,pathLength:u}},q=(n,i)=>n===0||n===i?0:typeof i=="number"?n-i:0,qe=n=>({position:"relative",width:n,height:n}),Ge={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},V=(n,i,o,s,c)=>{if(s===0)return i;let a=(c?s-n:n)/s;return i+o*a},G=n=>{var i,o;return(o=(i=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(s,c,a,r)=>`#${c}${c}${a}${a}${r}${r}`).substring(1).match(/.{2}/g))==null?void 0:i.map(s=>parseInt(s,16)))!=null?o:[]},Ue=(n,i)=>{var o;let{colors:s,colorsTime:c,isSmoothColorTransition:a=!0}=n;if(typeof s=="string")return s;let r=(o=c==null?void 0:c.findIndex((g,p)=>g>=i&&i>=c[p+1]))!=null?o:-1;if(!c||r===-1)return s[0];if(!a)return s[r];let h=c[r]-i,u=c[r]-c[r+1],d=G(s[r]),m=G(s[r+1]),x=!!n.isGrowing;return`rgb(${d.map((g,p)=>V(h,g,m[p]-g,u,x)|0).join(",")})`},He=n=>{let{duration:i,initialRemainingTime:o,updateInterval:s,size:c=180,strokeWidth:a=12,trailStrokeWidth:r,isPlaying:h=!1,isGrowing:u=!1,rotation:d="clockwise",onComplete:m,onUpdate:x}=n,g=l.useRef(),p=Math.max(a,r??0),{path:j,pathLength:C}=_e(c,p,d),{elapsedTime:v}=Ne({isPlaying:h,duration:i,startAt:q(i,o),updateInterval:s,onUpdate:typeof x=="function"?b=>{let w=Math.ceil(i-b);w!==g.current&&(g.current=w,x(w))}:void 0,onComplete:typeof m=="function"?b=>{var w;let{shouldRepeat:y,delay:I,newInitialRemainingTime:T}=(w=m(b))!=null?w:{};if(y)return{shouldRepeat:y,delay:I,newStartAt:q(i,T)}}:void 0}),k=i-v;return{elapsedTime:v,path:j,pathLength:C,remainingTime:Math.ceil(k),rotation:d,size:c,stroke:Ue(n,k),strokeDashoffset:V(v,0,C,i,u),strokeWidth:a}},X=n=>{let{children:i,strokeLinecap:o,trailColor:s,trailStrokeWidth:c}=n,{path:a,pathLength:r,stroke:h,strokeDashoffset:u,remainingTime:d,elapsedTime:m,size:x,strokeWidth:g}=He(n);return S.createElement("div",{style:qe(x)},S.createElement("svg",{viewBox:`0 0 ${x} ${x}`,width:x,height:x,xmlns:"http://www.w3.org/2000/svg"},S.createElement("path",{d:a,fill:"none",stroke:s??"#d9d9d9",strokeWidth:c??g}),S.createElement("path",{d:a,fill:"none",stroke:h,strokeLinecap:o??"round",strokeWidth:g,strokeDasharray:r,strokeDashoffset:u})),typeof i=="function"&&S.createElement("div",{style:Ge},i({remainingTime:d,elapsedTime:m,color:h})))};X.displayName="CountdownCircleTimer";const Ke=t.div`
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
`,et=({setDinamicBurnCal:n,burnedCalories:i,toggleTimer:o,timerIsRunning:s,setRemainingTime:c,remainingTime:a})=>{const[r,h]=l.useState(0);l.useEffect(()=>{if(s){const d=setInterval(()=>{c(m=>m-1)},1e3);return()=>{clearInterval(d)}}},[s]),l.useEffect(()=>{const d=Math.round((180-a)*(i/180));h(d),n(d)},[a,i,n]);const u=d=>d.toString().padStart(2,"0");return e.jsx(e.Fragment,{children:e.jsxs(Ke,{children:[e.jsx(Qe,{children:"Time"}),e.jsx(X,{colors:["#E6533C"],strokeWidth:4,size:124,isPlaying:s,duration:180,onComplete:()=>setTimerIsRunning(!1),children:({remainingTime:d})=>e.jsx("div",{style:{color:"#fff"},role:"timer","aria-live":"assertive",children:`${u(Math.floor(d/60))}:${u(d%60)}`})}),e.jsx(Ve,{type:"button",onClick:o,children:e.jsx(Xe,{children:e.jsx("use",{href:s?`${E}#icon-pause`:`${E}#icon-play`})})}),e.jsxs(Ye,{children:[e.jsx(Je,{children:"Burned calories:"}),e.jsx(Ze,{children:r})]})]})})},tt="/pj-react-777/assets/thumb_up-2x-3d2b468a.png",nt=t.div`
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
`,U=t.span`
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
`,lt=({data:n,onClose:i})=>{const o=n;return e.jsx(nt,{children:e.jsxs(it,{children:[e.jsx(Y,{type:"button",onClick:i,children:e.jsx(J,{children:e.jsx("use",{href:`${E}#icon-x`})})}),e.jsxs(rt,{children:[e.jsx(ot,{src:tt,alt:"exercise"}),e.jsx(st,{children:"Well done"}),e.jsxs(M,{children:["Your time: ",e.jsx(U,{children:o.time})]}),e.jsxs(M,{children:["Burned calories: ",e.jsx(U,{children:o.burnedCalories})]})]}),e.jsx(F,{to:"/exercises",children:e.jsx(at,{children:"Next exercis"})}),e.jsx(F,{to:"/diary",children:e.jsxs(M,{children:["To the diary",e.jsx(ct,{children:e.jsx("use",{href:E+"#icon-start"})})]})})]})})},dt=({data:n,onClose:i})=>{const o=n,[s,c]=l.useState(!1),[a,r]=l.useState(180),[h,u]=l.useState(0),[d,m]=l.useState(!1),[x,g]=l.useState(),[p,j]=l.useState(!0),C=K(),v=o.burnedCalories,k=$(B.getIsLoading),b=()=>{c(y=>!y)},w=async y=>{y.preventDefault(),s&&c(!1);const I=o.time*60-a,T={exerciseId:o._id,burnedCalories:h,time:I};try{await C(ne.postDiaryExercise(T)),N.success("Success!")}catch(z){N.error(z.message)}j(!1),m(!0),g(T)};return e.jsxs(Re,{children:[d&&!p&&e.jsx(lt,{onClose:i,data:x,setModalOpenSecond:m}),p&&e.jsxs(De,{onSubmit:w,children:[k&&e.jsx(ae,{}),e.jsx(Y,{type:"button",onClick:i,children:e.jsx(J,{children:e.jsx("use",{href:`${E}#icon-x`})})}),e.jsxs(We,{children:[e.jsx(Ae,{children:e.jsx(Oe,{src:o.gifUrl,alt:"Gif-Exercises"})}),e.jsx(et,{setDinamicBurnCal:u,dinamicBurnCal:h,burnedCalories:v,toggleTimer:b,timerIsRunning:s,setRemainingTime:r,remainingTime:a,handleSubmit:w})]}),e.jsxs(Me,{children:[e.jsxs(P,{children:[e.jsx(L,{children:"Name"}),e.jsx(R,{children:o.name})]}),e.jsxs(P,{children:[e.jsx(L,{children:"Target"}),e.jsx(R,{children:o.target})]}),e.jsxs(P,{children:[e.jsx(L,{children:"Target"}),e.jsx(R,{children:o.target})]}),e.jsxs(P,{children:[e.jsx(L,{children:"Body Parts"}),e.jsx(R,{children:o.bodyPart})]})]}),e.jsx(Fe,{type:"submit",disabled:!h,children:"Add to diary"})]})]})},bt=()=>{const[n,i]=l.useState(""),[o,s]=l.useState(!1),a=H().pathname,r=localStorage.getItem("CategoryName"),h=$(B.getExercisesData),u=$(B.getIsError),d=p=>{const j=p.currentTarget.id,C=h.filter(v=>v._id===j);i(C),s(!0)},m=()=>{console.log("Клік відбувся!"),s(!1)};l.useEffect(()=>{function p(j){j.key==="Escape"&&m()}return o&&window.addEventListener("keydown",p),()=>{window.removeEventListener("keydown",p)}},[o]);const x=p=>{if(p==="/exercises")return"backgroundPhoto"},g=p=>p==="/exercises"?`${r}`:p==="/exercises/bodyParts"?"Body Parts":p==="/exercises/muscles"?"Muscles":p==="/exercises/equipment"?"Equipment":"";return console.log("nameCurrentTarget",n),e.jsxs(xe,{className:x(a),children:[u&&e.jsx(ce,{}),e.jsxs(pe,{children:[a==="/exercises"&&e.jsx(we,{}),e.jsxs(he,{children:[e.jsx(ke,{text:g(a)}),e.jsx(de,{})]}),o&&e.jsx(dt,{data:n[0],onClose:m}),a==="/exercises"&&e.jsx(Le,{filter:r,openWindow:d}),e.jsx(l.Suspense,{children:e.jsx(ie,{})})]})]})};export{bt as default};
