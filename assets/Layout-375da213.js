import{s as i,N as L,L as v,j as n,c as M,u as z,a as O,r as p,b as E,o as A,O as D}from"./index-95bb40ed.js";import{C}from"./ContainerStyled-bb0b3bf9.js";import{s as b}from"./sprite-1c9f5c14.js";const I=i.nav`
  ${C}
  display: flex;
  position: absolute;
  z-index: 999;
  align-items: center;
  top: 0;
  left: 50%;
  transform: translate(-50%, -0%);
  background-color: transparent;
    border-bottom: ${t=>t.theme.border};
`;I.defaultProps={theme:{border:"none"}};const H=i.div`
margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (min-width: 1440px) {
    margin-left: auto;
  }
  `,$=i(L)`
    display: flex;
    align-items: center;
    padding-top: 24px;
    padding-bottom: 24px;
    @media screen and (min-width: 768px) {
      padding-top: 34px;
      padding-bottom: 33px;
    }
  `,F=i.p`
  margin-left: 8px;
  font-size: 12px;
  line-height: 1;
  font-weight: bold;
  color: #efede8;
`;i.div`
  display: inline-flex;
  align-items: center;
  justify-content: end;
`;const R=i.div`
  width: 24px;
  height: 24px;
  border: 3px solid rgba(239, 237, 232, 0.3);
  border-radius: 50%;
  @media screen and (min-width: 1440px) {
    width: 28px;
    height: 28px;
    margin-left: 32px;
  }
`,N=i(L)`

`,W=i.div`
  margin-left: 14px;
  width: 37px;
  height: 37px;
  border: 3px solid #e6533c;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    margin-left: 16px;
    width: 46px;
    height: 46px;
  }
`,X=i.button`
  margin-left: 14px;
  width: 24px;
  height: 24px;
  border: 3px solid #e6533c;
  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`,Y=i.div`
  display: none;
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
    display: block;
    position: relative;
  }
`,q=i.button`
    border: none;
    color: #efede8;
    font-size: 16px;
    line-height: 1.5;
    display: block;
    background-color: transparent;
    padding-right: 28px;
`,Q=i.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-0%, -50%);
  width: 20px;
  height: 20px;
  background-color: #e6533c;
  pointer-events: none;
`,g=i(v)`
  display: none;
  @media screen and (min-width: 1440px) {
    display: inline-block;
    font-size: 16px;
    line-height: 1.5;
    background-color: inherit;
    color: #efede8;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    padding: 10px 27px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      border-color: rgba(230, 83, 60, 1);
    }
    &:disabled {
      border-color: rgba(230, 83, 60, 1);
    }
    &:not(:first-of-type) {
      margin-left: 16px;
    }
  }
`;i(v)`
  display: none;
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
    display: inline-block;
    margin-right: 14px;
    background-color: #e6533c;
    color: #efede8;
    border-radius: 12px;
    border: none;
    padding: 10px 27px;
    font-size: 16px;
    line-height: 1.5;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      background-color: #ef8964;
    }
    &:disabled {
      background-color: #e6533c;
      color: #efede899;
    }
  }
`;const U=()=>n.jsx("svg",{width:36,height:13,style:{stroke:"#E6533C",fill:"#E6533C"},children:n.jsx("use",{href:`${b}#icon-dumbbell-logo`})}),V=M`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`,G=i.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: #e6533c;
  animation: ${V} 0.3s ease-in-out forwards;
`,J=i.div`
  ${C}
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`,K=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`,m=i(v)`
  padding: 10px 27px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  color: #efede8;
  font-size: 14px;
  line-height: 1.3;

  &:hover {
    border: 1px solid #efede8;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Z=i.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  color: #efede8;
  font-size: 14px;
  line-height: 1.3;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,_=i.button`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: end;
`,ee=i.svg`
  width: 24px;
  height: 24px;
  stroke: #efede8;
  fill: transparent;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,ne=i.svg`
  width: 20px;
  height: 20px;
  stroke: #efede8;
  fill: transparent;
`,oe=({onHandleClick:t,toggleClickMenu:e})=>n.jsx(G,{children:n.jsxs(J,{children:[n.jsx(_,{className:"close-menu-button",onClick:e,children:n.jsx(ee,{children:n.jsx("use",{href:`${b}#icon-x`})})}),n.jsxs(K,{children:[n.jsx(m,{onClick:e,to:"/diary",children:"Diary"}),n.jsx(m,{onClick:e,to:"/products",children:"Products"}),n.jsx(m,{onClick:e,to:"/exercises",children:"Exercises"})]}),n.jsxs(Z,{type:"button",onClick:t,children:["Logout",n.jsx(ne,{children:n.jsx("use",{href:`${b}#icon-logout`})})]})]})});function te(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}else return Array.from(t)}var y=!1;if(typeof window<"u"){var k={get passive(){y=!0}};window.addEventListener("testPassive",null,k),window.removeEventListener("testPassive",null,k)}var f=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),l=[],h=!1,P=-1,c=void 0,d=void 0,u=void 0,T=function(e){return l.some(function(o){return!!(o.options.allowTouchMove&&o.options.allowTouchMove(e))})},x=function(e){var o=e||window.event;return T(o.target)||o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)},ie=function(e){if(u===void 0){var o=!!e&&e.reserveScrollBarGap===!0,s=window.innerWidth-document.documentElement.clientWidth;if(o&&s>0){var r=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);u=document.body.style.paddingRight,document.body.style.paddingRight=r+s+"px"}}c===void 0&&(c=document.body.style.overflow,document.body.style.overflow="hidden")},re=function(){u!==void 0&&(document.body.style.paddingRight=u,u=void 0),c!==void 0&&(document.body.style.overflow=c,c=void 0)},se=function(){return window.requestAnimationFrame(function(){if(d===void 0){d={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,o=e.scrollY,s=e.scrollX,r=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-o,document.body.style.left=-s,setTimeout(function(){return window.requestAnimationFrame(function(){var a=r-window.innerHeight;a&&o>=r&&(document.body.style.top=-(o+a))})},300)}})},de=function(){if(d!==void 0){var e=-parseInt(document.body.style.top,10),o=-parseInt(document.body.style.left,10);document.body.style.position=d.position,document.body.style.top=d.top,document.body.style.left=d.left,window.scrollTo(o,e),d=void 0}},le=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},ae=function(e,o){var s=e.targetTouches[0].clientY-P;return T(e.target)?!1:o&&o.scrollTop===0&&s>0||le(o)&&s<0?x(e):(e.stopPropagation(),!0)},ce=function(e,o){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!l.some(function(r){return r.targetElement===e})){var s={targetElement:e,options:o||{}};l=[].concat(te(l),[s]),f?se():ie(o),f&&(e.ontouchstart=function(r){r.targetTouches.length===1&&(P=r.targetTouches[0].clientY)},e.ontouchmove=function(r){r.targetTouches.length===1&&ae(r,e)},h||(document.addEventListener("touchmove",x,y?{passive:!1}:void 0),h=!0))}},S=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}l=l.filter(function(o){return o.targetElement!==e}),f&&(e.ontouchstart=null,e.ontouchmove=null,h&&l.length===0&&(document.removeEventListener("touchmove",x,y?{passive:!1}:void 0),h=!1)),f?de():re()};const ue=()=>{const t=z(O.getIsLoggedIn),[e,o]=p.useState(!1),s=E();p.useEffect(()=>{e?ce(document.body):S(document.body)},[e]),p.useEffect(()=>{const w=window.matchMedia("(min-width: 1440px)"),j=B=>{B.matches&&(o(!1),S(document.body))};return w.addEventListener("change",j),()=>{w.removeEventListener("change",j)}},[]);const r=()=>{s(A.logOut())},a=()=>{o(!e)};return n.jsxs(n.Fragment,{children:[n.jsxs(I,{theme:t&&{border:"1px solid rgba(239, 237, 232, 0.2)"},children:[n.jsxs($,{to:"/",children:[n.jsx(U,{}),n.jsx(F,{children:"PowerPulse"})]}),t&&n.jsxs(H,{children:[n.jsx(g,{to:"/diary",children:"Diary"}),n.jsx(g,{to:"/products",children:"Products"}),n.jsx(g,{to:"/exercises",children:"Exercises"}),n.jsx(N,{to:"/profile",children:n.jsx(R,{})}),n.jsx(W,{}),n.jsx(X,{type:"button",onClick:a}),n.jsxs(Y,{children:[n.jsx(q,{type:"button",onClick:r,children:"Logout"}),n.jsx(Q,{})]})]})]}),t&&e&&n.jsx(oe,{toggleClickMenu:a,onHandleClick:r})]})},xe=()=>n.jsxs(n.Fragment,{children:[n.jsx(ue,{}),n.jsx(p.Suspense,{fallback:null,children:n.jsx(D,{})})]});export{xe as default};
