import{s as i,g as d,N as L,L as y,j as o,c as M,u as O,a as z,r as h,b as E,o as A,O as D}from"./index-0d3c859b.js";import{C as $}from"./ContainerStyled-bb0b3bf9.js";import{s as f}from"./sprite-da6edc3a.js";import"./UserCards.styled-765d8ced.js";const I=i.nav`
  ${$}
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
`,F=i(L)`
  display: flex;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  @media screen and (min-width: 768px) {
    padding-top: 34px;
    padding-bottom: 33px;
  }
`,R=i.p`
  margin-left: 8px;
  font-size: 12px;
  line-height: 1;
  font-weight: bold;
  color: ${d.withe};
`;i.div`
  display: inline-flex;
  align-items: center;
  justify-content: end;
`;const N=i.svg`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 1440px) {
    &.set {
      width: 28px;
      height: 28px;
      margin-left: 32px;
    }
  }
`,W=i(L)``,X=i.div`
  margin-left: 14px;
  width: 37px;
  height: 37px;
  border: 3px solid ${d.acceptColor};
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    margin-left: 16px;
    width: 46px;
    height: 46px;
  }
`,Y=i.button`
  margin-left: 14px;
  width: 24px;
  height: 24px;
  border: 3px solid ${d.acceptColor};
  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`,q=i.div`
  display: none;
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
    display: block;
    position: relative;
  }
`,Q=i.button`
  border: none;
  color: ${d.withe};
  font-size: 16px;
  line-height: 1.5;
  display: block;
  background-color: transparent;
  padding-right: 28px;
`,U=i.svg`
  position: absolute;
  right: 0;
  top: 50%;
  width: 20px;
  height: 20px;
  transform: translate(-0%, -50%);
  pointer-events: none;
  stroke: ${d.acceptColor};
`,b=i(y)`
  display: none;
  @media screen and (min-width: 1440px) {
    display: inline-block;
    font-size: 16px;
    line-height: 1.5;
    background-color: inherit;
    color: ${d.withe};
    border-radius: 12px;
    border: 1px solid ${d.title};
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
`;i(y)`
  display: none;
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
    display: inline-block;
    margin-right: 14px;
    background-color: ${d.acceptColor};
    color: ${d.withe};
    border-radius: 12px;
    border: none;
    padding: 10px 27px;
    font-size: 16px;
    line-height: 1.5;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      background-color: ${d.secondaryOrange};
    }
    &:disabled {
      background-color: ${d.acceptColor};
      color: #efede899;
    }
  }
`;const V=()=>o.jsx("svg",{width:36,height:13,style:{stroke:"#E6533C",fill:"#E6533C"},children:o.jsx("use",{href:`${f}#icon-dumbbell-logo`})}),G=M`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`,J=i.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: #e6533c;
  animation: ${G} 0.3s ease-in-out forwards;
`,K=i.div`
  ${$}
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`,Z=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`,v=i(y)`
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
`,_=i.button`
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
`,ee=i.button`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: end;
`,oe=i.svg`
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
`,te=({onHandleClick:t,toggleClickMenu:e})=>o.jsx(J,{children:o.jsxs(K,{children:[o.jsx(ee,{className:"close-menu-button",onClick:e,children:o.jsx(oe,{children:o.jsx("use",{href:`${f}#icon-x`})})}),o.jsxs(Z,{children:[o.jsx(v,{onClick:e,to:"/diary",children:"Diary"}),o.jsx(v,{onClick:e,to:"/products",children:"Products"}),o.jsx(v,{onClick:e,to:"/exercises",children:"Exercises"})]}),o.jsxs(_,{type:"button",onClick:t,children:["Logout",o.jsx(ne,{children:o.jsx("use",{href:`${f}#icon-logout`})})]})]})});function ie(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)}var w=!1;if(typeof window<"u"){var S={get passive(){w=!0}};window.addEventListener("testPassive",null,S),window.removeEventListener("testPassive",null,S)}var x=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),a=[],g=!1,P=-1,u=void 0,l=void 0,p=void 0,T=function(e){return a.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(e))})},m=function(e){var n=e||window.event;return T(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},re=function(e){if(p===void 0){var n=!!e&&e.reserveScrollBarGap===!0,s=window.innerWidth-document.documentElement.clientWidth;if(n&&s>0){var r=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);p=document.body.style.paddingRight,document.body.style.paddingRight=r+s+"px"}}u===void 0&&(u=document.body.style.overflow,document.body.style.overflow="hidden")},se=function(){p!==void 0&&(document.body.style.paddingRight=p,p=void 0),u!==void 0&&(document.body.style.overflow=u,u=void 0)},de=function(){return window.requestAnimationFrame(function(){if(l===void 0){l={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,n=e.scrollY,s=e.scrollX,r=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-n,document.body.style.left=-s,setTimeout(function(){return window.requestAnimationFrame(function(){var c=r-window.innerHeight;c&&n>=r&&(document.body.style.top=-(n+c))})},300)}})},le=function(){if(l!==void 0){var e=-parseInt(document.body.style.top,10),n=-parseInt(document.body.style.left,10);document.body.style.position=l.position,document.body.style.top=l.top,document.body.style.left=l.left,window.scrollTo(n,e),l=void 0}},ae=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},ce=function(e,n){var s=e.targetTouches[0].clientY-P;return T(e.target)?!1:n&&n.scrollTop===0&&s>0||ae(n)&&s<0?m(e):(e.stopPropagation(),!0)},ue=function(e,n){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!a.some(function(r){return r.targetElement===e})){var s={targetElement:e,options:n||{}};a=[].concat(ie(a),[s]),x?de():re(n),x&&(e.ontouchstart=function(r){r.targetTouches.length===1&&(P=r.targetTouches[0].clientY)},e.ontouchmove=function(r){r.targetTouches.length===1&&ce(r,e)},g||(document.addEventListener("touchmove",m,w?{passive:!1}:void 0),g=!0))}},C=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}a=a.filter(function(n){return n.targetElement!==e}),x&&(e.ontouchstart=null,e.ontouchmove=null,g&&a.length===0&&(document.removeEventListener("touchmove",m,w?{passive:!1}:void 0),g=!1)),x?le():se()};const pe=()=>{const t=O(z.getIsLoggedIn),[e,n]=h.useState(!1),s=E();h.useEffect(()=>{e?ue(document.body):C(document.body)},[e]),h.useEffect(()=>{const j=window.matchMedia("(min-width: 1440px)"),k=B=>{B.matches&&(n(!1),C(document.body))};return j.addEventListener("change",k),()=>{j.removeEventListener("change",k)}},[]);const r=()=>{s(A.logOut())},c=()=>{n(!e)};return o.jsxs(o.Fragment,{children:[o.jsxs(I,{theme:t&&{border:"1px solid rgba(239, 237, 232, 0.2)"},children:[o.jsxs(F,{to:"/",children:[o.jsx(V,{}),o.jsx(R,{children:"PowerPulse"})]}),t&&o.jsxs(H,{children:[o.jsx(b,{to:"/diary",children:"Diary"}),o.jsx(b,{to:"/products",children:"Products"}),o.jsx(b,{to:"/exercises/bodyParts",children:"Exercises"}),o.jsx(W,{to:"/profile",children:o.jsx(N,{className:"set",children:o.jsx("use",{href:`${f}#icon-settings`})})}),o.jsx(X,{}),o.jsx(Y,{type:"button",onClick:c}),o.jsxs(q,{children:[o.jsx(Q,{type:"button",onClick:r,children:"Logout"}),o.jsx(U,{children:o.jsx("use",{href:`${f}#icon-logout`})})]})]})]}),t&&e&&o.jsx(te,{toggleClickMenu:c,onHandleClick:r})]})},me=()=>o.jsxs(o.Fragment,{children:[o.jsx(pe,{}),o.jsx(h.Suspense,{fallback:null,children:o.jsx(D,{})})]});export{me as default};
