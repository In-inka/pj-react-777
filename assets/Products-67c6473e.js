import{r as E,_ as T,i as In,l as we,m as An,a as Oe,s as N,b as xe,e as at,n as ht,p as Tn,j as S,g as ut,d as Rn,Q as _n,h as Vn,L as Ln,q as jn}from"./index-d23184f9.js";import{_ as Kt,a as kn,b as Bn,c as $n,d as Hn,e as Un}from"./createClass-e4ee8eb7.js";import{h as zn,E as Nn,c as Wn,s as Yn,_ as L,n as re}from"./emotion-styled.browser.esm-d24dce05.js";import{s as Ee}from"./sprite-dff19c60.js";import{F as Gn,a as Qn,b as mt,B as vt}from"./Button-210c8461.js";import{L as Kn}from"./Loading-2dfcb3fa.js";import{C as Xn}from"./ContainerStyled-bb0b3bf9.js";import"./Hourglass-ee7508cb.js";function qn(n,t){if(n==null)return{};var r={},i=Object.keys(n),e,u;for(u=0;u<i.length;u++)e=i[u],!(t.indexOf(e)>=0)&&(r[e]=n[e]);return r}var _=function(t,r){var i=arguments;if(r==null||!zn.call(r,"css"))return E.createElement.apply(void 0,i);var e=i.length,u=new Array(e);u[0]=Nn,u[1]=Wn(t,r);for(var s=2;s<e;s++)u[s]=i[s];return E.createElement.apply(null,u)};function st(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return Yn(t)}var Jn=function(){var t=st.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function Zn(n){if(Array.isArray(n))return n}function er(n,t){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var i,e,u,s,o=[],a=!0,l=!1;try{if(u=(r=r.call(n)).next,t===0){if(Object(r)!==r)return;a=!1}else for(;!(a=(i=u.call(r)).done)&&(o.push(i.value),o.length!==t);a=!0);}catch(c){l=!0,e=c}finally{try{if(!a&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(l)throw e}}return o}}function tr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ve(n,t){return Zn(n)||er(n,t)||Kt(n,t)||tr()}function ge(n,t){if(n==null)return{};var r=qn(n,t),i,e;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(e=0;e<u.length;e++)i=u[e],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}var nr=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function rr(n){var t=n.defaultInputValue,r=t===void 0?"":t,i=n.defaultMenuIsOpen,e=i===void 0?!1:i,u=n.defaultValue,s=u===void 0?null:u,o=n.inputValue,a=n.menuIsOpen,l=n.onChange,c=n.onInputChange,f=n.onMenuClose,g=n.onMenuOpen,p=n.value,h=ge(n,nr),v=E.useState(o!==void 0?o:r),d=ve(v,2),m=d[0],y=d[1],C=E.useState(a!==void 0?a:e),b=ve(C,2),P=b[0],x=b[1],F=E.useState(p!==void 0?p:s),D=ve(F,2),w=D[0],V=D[1],j=E.useCallback(function(ae,ue){typeof l=="function"&&l(ae,ue),V(ae)},[l]),R=E.useCallback(function(ae,ue){var se;typeof c=="function"&&(se=c(ae,ue)),y(se!==void 0?se:ae)},[c]),A=E.useCallback(function(){typeof g=="function"&&g(),x(!0)},[g]),z=E.useCallback(function(){typeof f=="function"&&f(),x(!1)},[f]),Q=o!==void 0?o:m,q=a!==void 0?a:P,oe=p!==void 0?p:w;return T(T({},h),{},{inputValue:Q,menuIsOpen:q,onChange:j,onInputChange:R,onMenuClose:z,onMenuOpen:A,value:oe})}function ir(n){if(Array.isArray(n))return kn(n)}function or(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ar(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xt(n){return ir(n)||or(n)||Kt(n)||ar()}function ur(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const sr=Math.min,lr=Math.max,Ie=Math.round,Fe=Math.floor,Ae=n=>({x:n,y:n});function cr(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function qt(n){return Zt(n)?(n.nodeName||"").toLowerCase():"#document"}function pe(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function Jt(n){var t;return(t=(Zt(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function Zt(n){return n instanceof Node||n instanceof pe(n).Node}function Je(n){return n instanceof Element||n instanceof pe(n).Element}function lt(n){return n instanceof HTMLElement||n instanceof pe(n).HTMLElement}function gt(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof pe(n).ShadowRoot}function en(n){const{overflow:t,overflowX:r,overflowY:i,display:e}=ct(n);return/auto|scroll|overlay|hidden|clip/.test(t+i+r)&&!["inline","contents"].includes(e)}function dr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function fr(n){return["html","body","#document"].includes(qt(n))}function ct(n){return pe(n).getComputedStyle(n)}function pr(n){if(qt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||gt(n)&&n.host||Jt(n);return gt(t)?t.host:t}function tn(n){const t=pr(n);return fr(t)?n.ownerDocument?n.ownerDocument.body:n.body:lt(t)&&en(t)?t:tn(t)}function Te(n,t,r){var i;t===void 0&&(t=[]),r===void 0&&(r=!0);const e=tn(n),u=e===((i=n.ownerDocument)==null?void 0:i.body),s=pe(e);return u?t.concat(s,s.visualViewport||[],en(e)?e:[],s.frameElement&&r?Te(s.frameElement):[]):t.concat(e,Te(e,[],r))}function hr(n){const t=ct(n);let r=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const e=lt(n),u=e?n.offsetWidth:r,s=e?n.offsetHeight:i,o=Ie(r)!==u||Ie(i)!==s;return o&&(r=u,i=s),{width:r,height:i,$:o}}function dt(n){return Je(n)?n:n.contextElement}function Be(n){const t=dt(n);if(!lt(t))return Ae(1);const r=t.getBoundingClientRect(),{width:i,height:e,$:u}=hr(t);let s=(u?Ie(r.width):r.width)/i,o=(u?Ie(r.height):r.height)/e;return(!s||!Number.isFinite(s))&&(s=1),(!o||!Number.isFinite(o))&&(o=1),{x:s,y:o}}const mr=Ae(0);function vr(n){const t=pe(n);return!dr()||!t.visualViewport?mr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function gr(n,t,r){return t===void 0&&(t=!1),!r||t&&r!==pe(n)?!1:t}function bt(n,t,r,i){t===void 0&&(t=!1),r===void 0&&(r=!1);const e=n.getBoundingClientRect(),u=dt(n);let s=Ae(1);t&&(i?Je(i)&&(s=Be(i)):s=Be(n));const o=gr(u,r,i)?vr(u):Ae(0);let a=(e.left+o.x)/s.x,l=(e.top+o.y)/s.y,c=e.width/s.x,f=e.height/s.y;if(u){const g=pe(u),p=i&&Je(i)?pe(i):i;let h=g.frameElement;for(;h&&i&&p!==g;){const v=Be(h),d=h.getBoundingClientRect(),m=ct(h),y=d.left+(h.clientLeft+parseFloat(m.paddingLeft))*v.x,C=d.top+(h.clientTop+parseFloat(m.paddingTop))*v.y;a*=v.x,l*=v.y,c*=v.x,f*=v.y,a+=y,l+=C,h=pe(h).frameElement}}return cr({width:c,height:f,x:a,y:l})}function br(n,t){let r=null,i;const e=Jt(n);function u(){clearTimeout(i),r&&r.disconnect(),r=null}function s(o,a){o===void 0&&(o=!1),a===void 0&&(a=1),u();const{left:l,top:c,width:f,height:g}=n.getBoundingClientRect();if(o||t(),!f||!g)return;const p=Fe(c),h=Fe(e.clientWidth-(l+f)),v=Fe(e.clientHeight-(c+g)),d=Fe(l),y={rootMargin:-p+"px "+-h+"px "+-v+"px "+-d+"px",threshold:lr(0,sr(1,a))||1};let C=!0;function b(P){const x=P[0].intersectionRatio;if(x!==a){if(!C)return s();x?s(!1,x):i=setTimeout(()=>{s(!1,1e-7)},100)}C=!1}try{r=new IntersectionObserver(b,{...y,root:e.ownerDocument})}catch{r=new IntersectionObserver(b,y)}r.observe(n)}return s(!0),u}function yr(n,t,r,i){i===void 0&&(i={});const{ancestorScroll:e=!0,ancestorResize:u=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,l=dt(n),c=e||u?[...l?Te(l):[],...Te(t)]:[];c.forEach(m=>{e&&m.addEventListener("scroll",r,{passive:!0}),u&&m.addEventListener("resize",r)});const f=l&&o?br(l,r):null;let g=-1,p=null;s&&(p=new ResizeObserver(m=>{let[y]=m;y&&y.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{p&&p.observe(t)})),r()}),l&&!a&&p.observe(l),p.observe(t));let h,v=a?bt(n):null;a&&d();function d(){const m=bt(n);v&&(m.x!==v.x||m.y!==v.y||m.width!==v.width||m.height!==v.height)&&r(),v=m,h=requestAnimationFrame(d)}return r(),()=>{c.forEach(m=>{e&&m.removeEventListener("scroll",r),u&&m.removeEventListener("resize",r)}),f&&f(),p&&p.disconnect(),p=null,a&&cancelAnimationFrame(h)}}var Ze=E.useLayoutEffect,xr=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Re=function(){};function Er(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function Cr(n,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),e=2;e<r;e++)i[e-2]=arguments[e];var u=[].concat(i);if(t&&n)for(var s in t)t.hasOwnProperty(s)&&t[s]&&u.push("".concat(Er(n,s)));return u.filter(function(o){return o}).map(function(o){return String(o).trim()}).join(" ")}var yt=function(t){return Ar(t)?t.filter(Boolean):In(t)==="object"&&t!==null?[t]:[]},nn=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var r=ge(t,xr);return T({},r)},X=function(t,r,i){var e=t.cx,u=t.getStyles,s=t.getClassNames,o=t.className;return{css:u(r,t),className:e(i??{},s(r,t),o)}};function je(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Sr(n){return je(n)?window.innerHeight:n.clientHeight}function rn(n){return je(n)?window.pageYOffset:n.scrollTop}function _e(n,t){if(je(n)){window.scrollTo(0,t);return}n.scrollTop=t}function Or(n){var t=getComputedStyle(n),r=t.position==="absolute",i=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(r&&t.position==="static")&&i.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function wr(n,t,r,i){return r*((n=n/i-1)*n*n+1)+t}function Pe(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Re,e=rn(n),u=t-e,s=10,o=0;function a(){o+=s;var l=wr(o,e,u,r);_e(n,l),o<r?window.requestAnimationFrame(a):i(n)}a()}function xt(n,t){var r=n.getBoundingClientRect(),i=t.getBoundingClientRect(),e=t.offsetHeight/3;i.bottom+e>r.bottom?_e(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):i.top-e<r.top&&_e(n,Math.max(t.offsetTop-e,0))}function Fr(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Et(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Pr(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var on=!1,Dr={get passive(){return on=!0}},De=typeof window<"u"?window:{};De.addEventListener&&De.removeEventListener&&(De.addEventListener("p",Re,Dr),De.removeEventListener("p",Re,!1));var Mr=on;function Ir(n){return n!=null}function Ar(n){return Array.isArray(n)}function Me(n,t,r){return n?t:r}var Tr=function(t){for(var r=arguments.length,i=new Array(r>1?r-1:0),e=1;e<r;e++)i[e-1]=arguments[e];var u=Object.entries(t).filter(function(s){var o=ve(s,1),a=o[0];return!i.includes(a)});return u.reduce(function(s,o){var a=ve(o,2),l=a[0],c=a[1];return s[l]=c,s},{})},Rr=["children","innerProps"],_r=["children","innerProps"];function Vr(n){var t=n.maxHeight,r=n.menuEl,i=n.minHeight,e=n.placement,u=n.shouldScroll,s=n.isFixedPosition,o=n.controlHeight,a=Or(r),l={placement:"bottom",maxHeight:t};if(!r||!r.offsetParent)return l;var c=a.getBoundingClientRect(),f=c.height,g=r.getBoundingClientRect(),p=g.bottom,h=g.height,v=g.top,d=r.offsetParent.getBoundingClientRect(),m=d.top,y=s?window.innerHeight:Sr(a),C=rn(a),b=parseInt(getComputedStyle(r).marginBottom,10),P=parseInt(getComputedStyle(r).marginTop,10),x=m-P,F=y-v,D=x+C,w=f-C-v,V=p-y+C+b,j=C+v-P,R=160;switch(e){case"auto":case"bottom":if(F>=h)return{placement:"bottom",maxHeight:t};if(w>=h&&!s)return u&&Pe(a,V,R),{placement:"bottom",maxHeight:t};if(!s&&w>=i||s&&F>=i){u&&Pe(a,V,R);var A=s?F-b:w-b;return{placement:"bottom",maxHeight:A}}if(e==="auto"||s){var z=t,Q=s?x:D;return Q>=i&&(z=Math.min(Q-b-o,t)),{placement:"top",maxHeight:z}}if(e==="bottom")return u&&_e(a,V),{placement:"bottom",maxHeight:t};break;case"top":if(x>=h)return{placement:"top",maxHeight:t};if(D>=h&&!s)return u&&Pe(a,j,R),{placement:"top",maxHeight:t};if(!s&&D>=i||s&&x>=i){var q=t;return(!s&&D>=i||s&&x>=i)&&(q=s?x-P:D-P),u&&Pe(a,j,R),{placement:"top",maxHeight:q}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return l}function Lr(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var an=function(t){return t==="auto"?"bottom":t},jr=function(t,r){var i,e=t.placement,u=t.theme,s=u.borderRadius,o=u.spacing,a=u.colors;return T((i={label:"menu"},we(i,Lr(e),"100%"),we(i,"position","absolute"),we(i,"width","100%"),we(i,"zIndex",1),i),r?{}:{backgroundColor:a.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:o.menuGutter,marginTop:o.menuGutter})},un=E.createContext(null),kr=function(t){var r=t.children,i=t.minMenuHeight,e=t.maxMenuHeight,u=t.menuPlacement,s=t.menuPosition,o=t.menuShouldScrollIntoView,a=t.theme,l=E.useContext(un)||{},c=l.setPortalPlacement,f=E.useRef(null),g=E.useState(e),p=ve(g,2),h=p[0],v=p[1],d=E.useState(null),m=ve(d,2),y=m[0],C=m[1],b=a.spacing.controlHeight;return Ze(function(){var P=f.current;if(P){var x=s==="fixed",F=o&&!x,D=Vr({maxHeight:e,menuEl:P,minHeight:i,placement:u,shouldScroll:F,isFixedPosition:x,controlHeight:b});v(D.maxHeight),C(D.placement),c==null||c(D.placement)}},[e,u,s,o,i,c,b]),r({ref:f,placerProps:T(T({},t),{},{placement:y||an(u),maxHeight:h})})},Br=function(t){var r=t.children,i=t.innerRef,e=t.innerProps;return _("div",L({},X(t,"menu",{menu:!0}),{ref:i},e),r)},$r=Br,Hr=function(t,r){var i=t.maxHeight,e=t.theme.spacing.baseUnit;return T({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:e,paddingTop:e})},Ur=function(t){var r=t.children,i=t.innerProps,e=t.innerRef,u=t.isMulti;return _("div",L({},X(t,"menuList",{"menu-list":!0,"menu-list--is-multi":u}),{ref:e},i),r)},sn=function(t,r){var i=t.theme,e=i.spacing.baseUnit,u=i.colors;return T({textAlign:"center"},r?{}:{color:u.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},zr=sn,Nr=sn,Wr=function(t){var r=t.children,i=r===void 0?"No options":r,e=t.innerProps,u=ge(t,Rr);return _("div",L({},X(T(T({},u),{},{children:i,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),i)},Yr=function(t){var r=t.children,i=r===void 0?"Loading...":r,e=t.innerProps,u=ge(t,_r);return _("div",L({},X(T(T({},u),{},{children:i,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),i)},Gr=function(t){var r=t.rect,i=t.offset,e=t.position;return{left:r.left,position:e,top:i,width:r.width,zIndex:1}},Qr=function(t){var r=t.appendTo,i=t.children,e=t.controlElement,u=t.innerProps,s=t.menuPlacement,o=t.menuPosition,a=E.useRef(null),l=E.useRef(null),c=E.useState(an(s)),f=ve(c,2),g=f[0],p=f[1],h=E.useMemo(function(){return{setPortalPlacement:p}},[]),v=E.useState(null),d=ve(v,2),m=d[0],y=d[1],C=E.useCallback(function(){if(e){var F=Fr(e),D=o==="fixed"?0:window.pageYOffset,w=F[g]+D;(w!==(m==null?void 0:m.offset)||F.left!==(m==null?void 0:m.rect.left)||F.width!==(m==null?void 0:m.rect.width))&&y({offset:w,rect:F})}},[e,o,g,m==null?void 0:m.offset,m==null?void 0:m.rect.left,m==null?void 0:m.rect.width]);Ze(function(){C()},[C]);var b=E.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),e&&a.current&&(l.current=yr(e,a.current,C,{elementResize:"ResizeObserver"in window}))},[e,C]);Ze(function(){b()},[b]);var P=E.useCallback(function(F){a.current=F,b()},[b]);if(!r&&o!=="fixed"||!m)return null;var x=_("div",L({ref:P},X(T(T({},t),{},{offset:m.offset,position:o,rect:m.rect}),"menuPortal",{"menu-portal":!0}),u),i);return _(un.Provider,{value:h},r?An.createPortal(x,r):x)},Kr=function(t){var r=t.isDisabled,i=t.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},Xr=function(t){var r=t.children,i=t.innerProps,e=t.isDisabled,u=t.isRtl;return _("div",L({},X(t,"container",{"--is-disabled":e,"--is-rtl":u}),i),r)},qr=function(t,r){var i=t.theme.spacing,e=t.isMulti,u=t.hasValue,s=t.selectProps.controlShouldRenderValue;return T({alignItems:"center",display:e&&u&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},Jr=function(t){var r=t.children,i=t.innerProps,e=t.isMulti,u=t.hasValue;return _("div",L({},X(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":u}),i),r)},Zr=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},ei=function(t){var r=t.children,i=t.innerProps;return _("div",L({},X(t,"indicatorsContainer",{indicators:!0}),i),r)},Ct,ti=["size"],ni=["innerProps","isRtl","size"],ri={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},ln=function(t){var r=t.size,i=ge(t,ti);return _("svg",L({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:ri},i))},ft=function(t){return _(ln,L({size:20},t),_("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},cn=function(t){return _(ln,L({size:20},t),_("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},dn=function(t,r){var i=t.isFocused,e=t.theme,u=e.spacing.baseUnit,s=e.colors;return T({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:i?s.neutral60:s.neutral20,padding:u*2,":hover":{color:i?s.neutral80:s.neutral40}})},ii=dn,oi=function(t){var r=t.children,i=t.innerProps;return _("div",L({},X(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),r||_(cn,null))},ai=dn,ui=function(t){var r=t.children,i=t.innerProps;return _("div",L({},X(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),r||_(ft,null))},si=function(t,r){var i=t.isDisabled,e=t.theme,u=e.spacing.baseUnit,s=e.colors;return T({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:i?s.neutral10:s.neutral20,marginBottom:u*2,marginTop:u*2})},li=function(t){var r=t.innerProps;return _("span",L({},r,X(t,"indicatorSeparator",{"indicator-separator":!0})))},ci=Jn(Ct||(Ct=ur([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),di=function(t,r){var i=t.isFocused,e=t.size,u=t.theme,s=u.colors,o=u.spacing.baseUnit;return T({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},r?{}:{color:i?s.neutral60:s.neutral20,padding:o*2})},$e=function(t){var r=t.delay,i=t.offset;return _("span",{css:st({animation:"".concat(ci," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},fi=function(t){var r=t.innerProps,i=t.isRtl,e=t.size,u=e===void 0?4:e,s=ge(t,ni);return _("div",L({},X(T(T({},s),{},{innerProps:r,isRtl:i,size:u}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),_($e,{delay:0,offset:i}),_($e,{delay:160,offset:!0}),_($e,{delay:320,offset:!i}))},pi=function(t,r){var i=t.isDisabled,e=t.isFocused,u=t.theme,s=u.colors,o=u.borderRadius,a=u.spacing;return T({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:i?s.neutral5:s.neutral0,borderColor:i?s.neutral10:e?s.primary:s.neutral20,borderRadius:o,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:e?s.primary:s.neutral30}})},hi=function(t){var r=t.children,i=t.isDisabled,e=t.isFocused,u=t.innerRef,s=t.innerProps,o=t.menuIsOpen;return _("div",L({ref:u},X(t,"control",{control:!0,"control--is-disabled":i,"control--is-focused":e,"control--menu-is-open":o}),s,{"aria-disabled":i||void 0}),r)},mi=hi,vi=["data"],gi=function(t,r){var i=t.theme.spacing;return r?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},bi=function(t){var r=t.children,i=t.cx,e=t.getStyles,u=t.getClassNames,s=t.Heading,o=t.headingProps,a=t.innerProps,l=t.label,c=t.theme,f=t.selectProps;return _("div",L({},X(t,"group",{group:!0}),a),_(s,L({},o,{selectProps:f,theme:c,getStyles:e,getClassNames:u,cx:i}),l),_("div",null,r))},yi=function(t,r){var i=t.theme,e=i.colors,u=i.spacing;return T({label:"group",cursor:"default",display:"block"},r?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:u.baseUnit*3,paddingRight:u.baseUnit*3,textTransform:"uppercase"})},xi=function(t){var r=nn(t);r.data;var i=ge(r,vi);return _("div",L({},X(t,"groupHeading",{"group-heading":!0}),i))},Ei=bi,Ci=["innerRef","isDisabled","isHidden","inputClassName"],Si=function(t,r){var i=t.isDisabled,e=t.value,u=t.theme,s=u.spacing,o=u.colors;return T(T({visibility:i?"hidden":"visible",transform:e?"translateZ(0)":""},Oi),r?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:o.neutral80})},fn={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Oi={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":T({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},fn)},wi=function(t){return T({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},fn)},Fi=function(t){var r=t.cx,i=t.value,e=nn(t),u=e.innerRef,s=e.isDisabled,o=e.isHidden,a=e.inputClassName,l=ge(e,Ci);return _("div",L({},X(t,"input",{"input-container":!0}),{"data-value":i||""}),_("input",L({className:r({input:!0},a),ref:u,style:wi(o),disabled:s},l)))},Pi=Fi,Di=function(t,r){var i=t.theme,e=i.spacing,u=i.borderRadius,s=i.colors;return T({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:s.neutral10,borderRadius:u/2,margin:e.baseUnit/2})},Mi=function(t,r){var i=t.theme,e=i.borderRadius,u=i.colors,s=t.cropWithEllipsis;return T({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:e/2,color:u.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Ii=function(t,r){var i=t.theme,e=i.spacing,u=i.borderRadius,s=i.colors,o=t.isFocused;return T({alignItems:"center",display:"flex"},r?{}:{borderRadius:u/2,backgroundColor:o?s.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},pn=function(t){var r=t.children,i=t.innerProps;return _("div",i,r)},Ai=pn,Ti=pn;function Ri(n){var t=n.children,r=n.innerProps;return _("div",L({role:"button"},r),t||_(ft,{size:14}))}var _i=function(t){var r=t.children,i=t.components,e=t.data,u=t.innerProps,s=t.isDisabled,o=t.removeProps,a=t.selectProps,l=i.Container,c=i.Label,f=i.Remove;return _(l,{data:e,innerProps:T(T({},X(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),u),selectProps:a},_(c,{data:e,innerProps:T({},X(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},r),_(f,{data:e,innerProps:T(T({},X(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},o),selectProps:a}))},Vi=_i,Li=function(t,r){var i=t.isDisabled,e=t.isFocused,u=t.isSelected,s=t.theme,o=s.spacing,a=s.colors;return T({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:u?a.primary:e?a.primary25:"transparent",color:i?a.neutral20:u?a.neutral0:"inherit",padding:"".concat(o.baseUnit*2,"px ").concat(o.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:u?a.primary:a.primary50}})},ji=function(t){var r=t.children,i=t.isDisabled,e=t.isFocused,u=t.isSelected,s=t.innerRef,o=t.innerProps;return _("div",L({},X(t,"option",{option:!0,"option--is-disabled":i,"option--is-focused":e,"option--is-selected":u}),{ref:s,"aria-disabled":i},o),r)},ki=ji,Bi=function(t,r){var i=t.theme,e=i.spacing,u=i.colors;return T({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:u.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},$i=function(t){var r=t.children,i=t.innerProps;return _("div",L({},X(t,"placeholder",{placeholder:!0}),i),r)},Hi=$i,Ui=function(t,r){var i=t.isDisabled,e=t.theme,u=e.spacing,s=e.colors;return T({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:i?s.neutral40:s.neutral80,marginLeft:u.baseUnit/2,marginRight:u.baseUnit/2})},zi=function(t){var r=t.children,i=t.isDisabled,e=t.innerProps;return _("div",L({},X(t,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),e),r)},Ni=zi,Wi={ClearIndicator:ui,Control:mi,DropdownIndicator:oi,DownChevron:cn,CrossIcon:ft,Group:Ei,GroupHeading:xi,IndicatorsContainer:ei,IndicatorSeparator:li,Input:Pi,LoadingIndicator:fi,Menu:$r,MenuList:Ur,MenuPortal:Qr,LoadingMessage:Yr,NoOptionsMessage:Wr,MultiValue:Vi,MultiValueContainer:Ai,MultiValueLabel:Ti,MultiValueRemove:Ri,Option:ki,Placeholder:Hi,SelectContainer:Xr,SingleValue:Ni,ValueContainer:Jr},Yi=function(t){return T(T({},Wi),t.components)},St=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Gi(n,t){return!!(n===t||St(n)&&St(t))}function Qi(n,t){if(n.length!==t.length)return!1;for(var r=0;r<n.length;r++)if(!Gi(n[r],t[r]))return!1;return!0}function Ki(n,t){t===void 0&&(t=Qi);var r=null;function i(){for(var e=[],u=0;u<arguments.length;u++)e[u]=arguments[u];if(r&&r.lastThis===this&&t(e,r.lastArgs))return r.lastResult;var s=n.apply(this,e);return r={lastResult:s,lastArgs:e,lastThis:this},s}return i.clear=function(){r=null},i}var Xi={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},qi=function(t){return _("span",L({css:Xi},t))},Ot=qi,Ji={guidance:function(t){var r=t.isSearchable,i=t.isMulti,e=t.isDisabled,u=t.tabSelectsValue,s=t.context;switch(s){case"menu":return"Use Up and Down to choose options".concat(e?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(u?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(t["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var r=t.action,i=t.label,e=i===void 0?"":i,u=t.labels,s=t.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(u.length>1?"s":""," ").concat(u.join(","),", selected.");case"select-option":return s?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var r=t.context,i=t.focused,e=t.options,u=t.label,s=u===void 0?"":u,o=t.selectValue,a=t.isDisabled,l=t.isSelected,c=function(h,v){return h&&h.length?"".concat(h.indexOf(v)+1," of ").concat(h.length):""};if(r==="value"&&o)return"value ".concat(s," focused, ").concat(c(o,i),".");if(r==="menu"){var f=a?" disabled":"",g="".concat(l?"selected":"focused").concat(f);return"option ".concat(s," ").concat(g,", ").concat(c(e,i),".")}return""},onFilter:function(t){var r=t.inputValue,i=t.resultsMessage;return"".concat(i).concat(r?" for search term "+r:"",".")}},Zi=function(t){var r=t.ariaSelection,i=t.focusedOption,e=t.focusedValue,u=t.focusableOptions,s=t.isFocused,o=t.selectValue,a=t.selectProps,l=t.id,c=a.ariaLiveMessages,f=a.getOptionLabel,g=a.inputValue,p=a.isMulti,h=a.isOptionDisabled,v=a.isSearchable,d=a.menuIsOpen,m=a.options,y=a.screenReaderStatus,C=a.tabSelectsValue,b=a["aria-label"],P=a["aria-live"],x=E.useMemo(function(){return T(T({},Ji),c||{})},[c]),F=E.useMemo(function(){var z="";if(r&&x.onChange){var Q=r.option,q=r.options,oe=r.removedValue,ae=r.removedValues,ue=r.value,se=function(ee){return Array.isArray(ee)?null:ee},le=oe||Q||se(ue),Z=le?f(le):"",te=q||ae||void 0,ie=te?te.map(f):[],ce=T({isDisabled:le&&h(le,o),label:Z,labels:ie},r);z=x.onChange(ce)}return z},[r,x,h,o,f]),D=E.useMemo(function(){var z="",Q=i||e,q=!!(i&&o&&o.includes(i));if(Q&&x.onFocus){var oe={focused:Q,label:f(Q),isDisabled:h(Q,o),isSelected:q,options:u,context:Q===i?"menu":"value",selectValue:o};z=x.onFocus(oe)}return z},[i,e,f,h,x,u,o]),w=E.useMemo(function(){var z="";if(d&&m.length&&x.onFilter){var Q=y({count:u.length});z=x.onFilter({inputValue:g,resultsMessage:Q})}return z},[u,g,d,x,m,y]),V=E.useMemo(function(){var z="";if(x.guidance){var Q=e?"value":d?"menu":"input";z=x.guidance({"aria-label":b,context:Q,isDisabled:i&&h(i,o),isMulti:p,isSearchable:v,tabSelectsValue:C})}return z},[b,i,e,p,h,v,d,x,o,C]),j="".concat(D," ").concat(w," ").concat(V),R=_(E.Fragment,null,_("span",{id:"aria-selection"},F),_("span",{id:"aria-context"},j)),A=(r==null?void 0:r.action)==="initial-input-focus";return _(E.Fragment,null,_(Ot,{id:l},A&&R),_(Ot,{"aria-live":P,"aria-atomic":"false","aria-relevant":"additions text"},s&&!A&&R))},eo=Zi,et=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],to=new RegExp("["+et.map(function(n){return n.letters}).join("")+"]","g"),hn={};for(var He=0;He<et.length;He++)for(var Ue=et[He],ze=0;ze<Ue.letters.length;ze++)hn[Ue.letters[ze]]=Ue.base;var mn=function(t){return t.replace(to,function(r){return hn[r]})},no=Ki(mn),wt=function(t){return t.replace(/^\s+|\s+$/g,"")},ro=function(t){return"".concat(t.label," ").concat(t.value)},io=function(t){return function(r,i){if(r.data.__isNew__)return!0;var e=T({ignoreCase:!0,ignoreAccents:!0,stringify:ro,trim:!0,matchFrom:"any"},t),u=e.ignoreCase,s=e.ignoreAccents,o=e.stringify,a=e.trim,l=e.matchFrom,c=a?wt(i):i,f=a?wt(o(r)):o(r);return u&&(c=c.toLowerCase(),f=f.toLowerCase()),s&&(c=no(c),f=mn(f)),l==="start"?f.substr(0,c.length)===c:f.indexOf(c)>-1}},oo=["innerRef"];function ao(n){var t=n.innerRef,r=ge(n,oo),i=Tr(r,"onExited","in","enter","exit","appear");return _("input",L({ref:t},i,{css:st({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var uo=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function so(n){var t=n.isEnabled,r=n.onBottomArrive,i=n.onBottomLeave,e=n.onTopArrive,u=n.onTopLeave,s=E.useRef(!1),o=E.useRef(!1),a=E.useRef(0),l=E.useRef(null),c=E.useCallback(function(d,m){if(l.current!==null){var y=l.current,C=y.scrollTop,b=y.scrollHeight,P=y.clientHeight,x=l.current,F=m>0,D=b-P-C,w=!1;D>m&&s.current&&(i&&i(d),s.current=!1),F&&o.current&&(u&&u(d),o.current=!1),F&&m>D?(r&&!s.current&&r(d),x.scrollTop=b,w=!0,s.current=!0):!F&&-m>C&&(e&&!o.current&&e(d),x.scrollTop=0,w=!0,o.current=!0),w&&uo(d)}},[r,i,e,u]),f=E.useCallback(function(d){c(d,d.deltaY)},[c]),g=E.useCallback(function(d){a.current=d.changedTouches[0].clientY},[]),p=E.useCallback(function(d){var m=a.current-d.changedTouches[0].clientY;c(d,m)},[c]),h=E.useCallback(function(d){if(d){var m=Mr?{passive:!1}:!1;d.addEventListener("wheel",f,m),d.addEventListener("touchstart",g,m),d.addEventListener("touchmove",p,m)}},[p,g,f]),v=E.useCallback(function(d){d&&(d.removeEventListener("wheel",f,!1),d.removeEventListener("touchstart",g,!1),d.removeEventListener("touchmove",p,!1))},[p,g,f]);return E.useEffect(function(){if(t){var d=l.current;return h(d),function(){v(d)}}},[t,h,v]),function(d){l.current=d}}var Ft=["boxSizing","height","overflow","paddingRight","position"],Pt={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Dt(n){n.preventDefault()}function Mt(n){n.stopPropagation()}function It(){var n=this.scrollTop,t=this.scrollHeight,r=n+this.offsetHeight;n===0?this.scrollTop=1:r===t&&(this.scrollTop=n-1)}function At(){return"ontouchstart"in window||navigator.maxTouchPoints}var Tt=!!(typeof window<"u"&&window.document&&window.document.createElement),Se=0,Ce={capture:!1,passive:!1};function lo(n){var t=n.isEnabled,r=n.accountForScrollbars,i=r===void 0?!0:r,e=E.useRef({}),u=E.useRef(null),s=E.useCallback(function(a){if(Tt){var l=document.body,c=l&&l.style;if(i&&Ft.forEach(function(h){var v=c&&c[h];e.current[h]=v}),i&&Se<1){var f=parseInt(e.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,p=window.innerWidth-g+f||0;Object.keys(Pt).forEach(function(h){var v=Pt[h];c&&(c[h]=v)}),c&&(c.paddingRight="".concat(p,"px"))}l&&At()&&(l.addEventListener("touchmove",Dt,Ce),a&&(a.addEventListener("touchstart",It,Ce),a.addEventListener("touchmove",Mt,Ce))),Se+=1}},[i]),o=E.useCallback(function(a){if(Tt){var l=document.body,c=l&&l.style;Se=Math.max(Se-1,0),i&&Se<1&&Ft.forEach(function(f){var g=e.current[f];c&&(c[f]=g)}),l&&At()&&(l.removeEventListener("touchmove",Dt,Ce),a&&(a.removeEventListener("touchstart",It,Ce),a.removeEventListener("touchmove",Mt,Ce)))}},[i]);return E.useEffect(function(){if(t){var a=u.current;return s(a),function(){o(a)}}},[t,s,o]),function(a){u.current=a}}var co=function(t){var r=t.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},fo={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function po(n){var t=n.children,r=n.lockEnabled,i=n.captureEnabled,e=i===void 0?!0:i,u=n.onBottomArrive,s=n.onBottomLeave,o=n.onTopArrive,a=n.onTopLeave,l=so({isEnabled:e,onBottomArrive:u,onBottomLeave:s,onTopArrive:o,onTopLeave:a}),c=lo({isEnabled:r}),f=function(p){l(p),c(p)};return _(E.Fragment,null,r&&_("div",{onClick:co,css:fo}),t(f))}var ho={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},mo=function(t){var r=t.name,i=t.onFocus;return _("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:ho,value:"",onChange:function(){}})},vo=mo,go=function(t){return t.label},bo=function(t){return t.label},yo=function(t){return t.value},xo=function(t){return!!t.isDisabled},Eo={clearIndicator:ai,container:Kr,control:pi,dropdownIndicator:ii,group:gi,groupHeading:yi,indicatorsContainer:Zr,indicatorSeparator:si,input:Si,loadingIndicator:di,loadingMessage:Nr,menu:jr,menuList:Hr,menuPortal:Gr,multiValue:Di,multiValueLabel:Mi,multiValueRemove:Ii,noOptionsMessage:zr,option:Li,placeholder:Bi,singleValue:Ui,valueContainer:qr},Co={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},So=4,vn=4,Oo=38,wo=vn*2,Fo={baseUnit:vn,controlHeight:Oo,menuGutter:wo},Ne={borderRadius:So,colors:Co,spacing:Fo},Po={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Et(),captureMenuScroll:!Et(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:io(),formatGroupLabel:go,getOptionLabel:bo,getOptionValue:yo,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:xo,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Pr(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var r=t.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Rt(n,t,r,i){var e=xn(n,t,r),u=En(n,t,r),s=yn(n,t),o=Ve(n,t);return{type:"option",data:t,isDisabled:e,isSelected:u,label:s,value:o,index:i}}function gn(n,t){return n.options.map(function(r,i){if("options"in r){var e=r.options.map(function(s,o){return Rt(n,s,t,o)}).filter(function(s){return _t(n,s)});return e.length>0?{type:"group",data:r,options:e,index:i}:void 0}var u=Rt(n,r,t,i);return _t(n,u)?u:void 0}).filter(Ir)}function bn(n){return n.reduce(function(t,r){return r.type==="group"?t.push.apply(t,Xt(r.options.map(function(i){return i.data}))):t.push(r.data),t},[])}function Do(n,t){return bn(gn(n,t))}function _t(n,t){var r=n.inputValue,i=r===void 0?"":r,e=t.data,u=t.isSelected,s=t.label,o=t.value;return(!Sn(n)||!u)&&Cn(n,{label:s,value:o,data:e},i)}function Mo(n,t){var r=n.focusedValue,i=n.selectValue,e=i.indexOf(r);if(e>-1){var u=t.indexOf(r);if(u>-1)return r;if(e<t.length)return t[e]}return null}function Io(n,t){var r=n.focusedOption;return r&&t.indexOf(r)>-1?r:t[0]}var yn=function(t,r){return t.getOptionLabel(r)},Ve=function(t,r){return t.getOptionValue(r)};function xn(n,t,r){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,r):!1}function En(n,t,r){if(r.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,r);var i=Ve(n,t);return r.some(function(e){return Ve(n,e)===i})}function Cn(n,t,r){return n.filterOption?n.filterOption(t,r):!0}var Sn=function(t){var r=t.hideSelectedOptions,i=t.isMulti;return r===void 0?i:r},Ao=1,On=function(n){Bn(r,n);var t=$n(r);function r(i){var e;if(Hn(this,r),e=t.call(this,i),e.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.instancePrefix="",e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.controlRef=null,e.getControlRef=function(o){e.controlRef=o},e.focusedOptionRef=null,e.getFocusedOptionRef=function(o){e.focusedOptionRef=o},e.menuListRef=null,e.getMenuListRef=function(o){e.menuListRef=o},e.inputRef=null,e.getInputRef=function(o){e.inputRef=o},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(o,a){var l=e.props,c=l.onChange,f=l.name;a.name=f,e.ariaOnChange(o,a),c(o,a)},e.setValue=function(o,a,l){var c=e.props,f=c.closeMenuOnSelect,g=c.isMulti,p=c.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:p}),f&&(e.setState({inputIsHiddenAfterUpdate:!g}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(o,{action:a,option:l})},e.selectOption=function(o){var a=e.props,l=a.blurInputOnSelect,c=a.isMulti,f=a.name,g=e.state.selectValue,p=c&&e.isOptionSelected(o,g),h=e.isOptionDisabled(o,g);if(p){var v=e.getOptionValue(o);e.setValue(g.filter(function(d){return e.getOptionValue(d)!==v}),"deselect-option",o)}else if(!h)c?e.setValue([].concat(Xt(g),[o]),"select-option",o):e.setValue(o,"select-option");else{e.ariaOnChange(o,{action:"select-option",option:o,name:f});return}l&&e.blurInput()},e.removeValue=function(o){var a=e.props.isMulti,l=e.state.selectValue,c=e.getOptionValue(o),f=l.filter(function(p){return e.getOptionValue(p)!==c}),g=Me(a,f,f[0]||null);e.onChange(g,{action:"remove-value",removedValue:o}),e.focusInput()},e.clearValue=function(){var o=e.state.selectValue;e.onChange(Me(e.props.isMulti,[],null),{action:"clear",removedValues:o})},e.popValue=function(){var o=e.props.isMulti,a=e.state.selectValue,l=a[a.length-1],c=a.slice(0,a.length-1),f=Me(o,c,c[0]||null);e.onChange(f,{action:"pop-value",removedValue:l})},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return Cr.apply(void 0,[e.props.classNamePrefix].concat(a))},e.getOptionLabel=function(o){return yn(e.props,o)},e.getOptionValue=function(o){return Ve(e.props,o)},e.getStyles=function(o,a){var l=e.props.unstyled,c=Eo[o](a,l);c.boxSizing="border-box";var f=e.props.styles[o];return f?f(c,a):c},e.getClassNames=function(o,a){var l,c;return(l=(c=e.props.classNames)[o])===null||l===void 0?void 0:l.call(c,a)},e.getElementId=function(o){return"".concat(e.instancePrefix,"-").concat(o)},e.getComponents=function(){return Yi(e.props)},e.buildCategorizedOptions=function(){return gn(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return bn(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(o,a){e.setState({ariaSelection:T({value:o},a)})},e.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(o){e.blockOptionHover=!1},e.onControlMouseDown=function(o){if(!o.defaultPrevented){var a=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&e.onMenuClose():a&&e.openMenu("first"):(a&&(e.openAfterFocus=!0),e.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},e.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!e.props.isDisabled){var a=e.props,l=a.isMulti,c=a.menuIsOpen;e.focusInput(),c?(e.setState({inputIsHiddenAfterUpdate:!l}),e.onMenuClose()):e.openMenu("first"),o.preventDefault()}},e.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(e.clearValue(),o.preventDefault(),e.openAfterFocus=!1,o.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(o){typeof e.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&je(o.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(o)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(o){var a=o.touches,l=a&&a.item(0);l&&(e.initialTouchX=l.clientX,e.initialTouchY=l.clientY,e.userIsDragging=!1)},e.onTouchMove=function(o){var a=o.touches,l=a&&a.item(0);if(l){var c=Math.abs(l.clientX-e.initialTouchX),f=Math.abs(l.clientY-e.initialTouchY),g=5;e.userIsDragging=c>g||f>g}},e.onTouchEnd=function(o){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(o.target)&&e.menuListRef&&!e.menuListRef.contains(o.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(o){e.userIsDragging||e.onControlMouseDown(o)},e.onClearIndicatorTouchEnd=function(o){e.userIsDragging||e.onClearIndicatorMouseDown(o)},e.onDropdownIndicatorTouchEnd=function(o){e.userIsDragging||e.onDropdownIndicatorMouseDown(o)},e.handleInputChange=function(o){var a=e.props.inputValue,l=o.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(l,{action:"input-change",prevInputValue:a}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(o){e.props.onFocus&&e.props.onFocus(o),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(o){var a=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(o),e.onInputChange("",{action:"input-blur",prevInputValue:a}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(o){e.blockOptionHover||e.state.focusedOption===o||e.setState({focusedOption:o})},e.shouldHideSelectedOptions=function(){return Sn(e.props)},e.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),e.focus()},e.onKeyDown=function(o){var a=e.props,l=a.isMulti,c=a.backspaceRemovesValue,f=a.escapeClearsValue,g=a.inputValue,p=a.isClearable,h=a.isDisabled,v=a.menuIsOpen,d=a.onKeyDown,m=a.tabSelectsValue,y=a.openMenuOnFocus,C=e.state,b=C.focusedOption,P=C.focusedValue,x=C.selectValue;if(!h&&!(typeof d=="function"&&(d(o),o.defaultPrevented))){switch(e.blockOptionHover=!0,o.key){case"ArrowLeft":if(!l||g)return;e.focusValue("previous");break;case"ArrowRight":if(!l||g)return;e.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(P)e.removeValue(P);else{if(!c)return;l?e.popValue():p&&e.clearValue()}break;case"Tab":if(e.isComposing||o.shiftKey||!v||!m||!b||y&&e.isOptionSelected(b,x))return;e.selectOption(b);break;case"Enter":if(o.keyCode===229)break;if(v){if(!b||e.isComposing)return;e.selectOption(b);break}return;case"Escape":v?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:g}),e.onMenuClose()):p&&f&&e.clearValue();break;case" ":if(g)return;if(!v){e.openMenu("first");break}if(!b)return;e.selectOption(b);break;case"ArrowUp":v?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":v?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!v)return;e.focusOption("pageup");break;case"PageDown":if(!v)return;e.focusOption("pagedown");break;case"Home":if(!v)return;e.focusOption("first");break;case"End":if(!v)return;e.focusOption("last");break;default:return}o.preventDefault()}},e.instancePrefix="react-select-"+(e.props.instanceId||++Ao),e.state.selectValue=yt(i.value),i.menuIsOpen&&e.state.selectValue.length){var u=e.buildFocusableOptions(),s=u.indexOf(e.state.selectValue[0]);e.state.focusedOption=u[s]}return e}return Un(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&xt(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var u=this.props,s=u.isDisabled,o=u.menuIsOpen,a=this.state.isFocused;(a&&!s&&e.isDisabled||a&&o&&!e.menuIsOpen)&&this.focusInput(),a&&s&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!s&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(xt(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,u){this.props.onInputChange(e,u)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var u=this,s=this.state,o=s.selectValue,a=s.isFocused,l=this.buildFocusableOptions(),c=e==="first"?0:l.length-1;if(!this.props.isMulti){var f=l.indexOf(o[0]);f>-1&&(c=f)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c]},function(){return u.onMenuOpen()})}},{key:"focusValue",value:function(e){var u=this.state,s=u.selectValue,o=u.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=s.indexOf(o);o||(a=-1);var l=s.length-1,c=-1;if(s.length){switch(e){case"previous":a===0?c=0:a===-1?c=l:c=a-1;break;case"next":a>-1&&a<l&&(c=a+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",u=this.props.pageSize,s=this.state.focusedOption,o=this.getFocusableOptions();if(o.length){var a=0,l=o.indexOf(s);s||(l=-1),e==="up"?a=l>0?l-1:o.length-1:e==="down"?a=(l+1)%o.length:e==="pageup"?(a=l-u,a<0&&(a=0)):e==="pagedown"?(a=l+u,a>o.length-1&&(a=o.length-1)):e==="last"&&(a=o.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:o[a],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Ne):T(T({},Ne),this.props.theme):Ne}},{key:"getCommonProps",value:function(){var e=this.clearValue,u=this.cx,s=this.getStyles,o=this.getClassNames,a=this.getValue,l=this.selectOption,c=this.setValue,f=this.props,g=f.isMulti,p=f.isRtl,h=f.options,v=this.hasValue();return{clearValue:e,cx:u,getStyles:s,getClassNames:o,getValue:a,hasValue:v,isMulti:g,isRtl:p,options:h,selectOption:l,selectProps:f,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,u=e.isClearable,s=e.isMulti;return u===void 0?s:u}},{key:"isOptionDisabled",value:function(e,u){return xn(this.props,e,u)}},{key:"isOptionSelected",value:function(e,u){return En(this.props,e,u)}},{key:"filterOption",value:function(e,u){return Cn(this.props,e,u)}},{key:"formatOptionLabel",value:function(e,u){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,o=this.state.selectValue;return this.props.formatOptionLabel(e,{context:u,inputValue:s,selectValue:o})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,u=e.isDisabled,s=e.isSearchable,o=e.inputId,a=e.inputValue,l=e.tabIndex,c=e.form,f=e.menuIsOpen,g=e.required,p=this.getComponents(),h=p.Input,v=this.state,d=v.inputIsHidden,m=v.ariaSelection,y=this.commonProps,C=o||this.getElementId("input"),b=T(T(T({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox"},f&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(m==null?void 0:m.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?E.createElement(h,L({},y,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:C,innerRef:this.getInputRef,isDisabled:u,isHidden:d,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:a},b)):E.createElement(ao,L({id:C,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Re,onFocus:this.onInputFocus,disabled:u,tabIndex:l,inputMode:"none",form:c,value:""},b))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,u=this.getComponents(),s=u.MultiValue,o=u.MultiValueContainer,a=u.MultiValueLabel,l=u.MultiValueRemove,c=u.SingleValue,f=u.Placeholder,g=this.commonProps,p=this.props,h=p.controlShouldRenderValue,v=p.isDisabled,d=p.isMulti,m=p.inputValue,y=p.placeholder,C=this.state,b=C.selectValue,P=C.focusedValue,x=C.isFocused;if(!this.hasValue()||!h)return m?null:E.createElement(f,L({},g,{key:"placeholder",isDisabled:v,isFocused:x,innerProps:{id:this.getElementId("placeholder")}}),y);if(d)return b.map(function(D,w){var V=D===P,j="".concat(e.getOptionLabel(D),"-").concat(e.getOptionValue(D));return E.createElement(s,L({},g,{components:{Container:o,Label:a,Remove:l},isFocused:V,isDisabled:v,key:j,index:w,removeProps:{onClick:function(){return e.removeValue(D)},onTouchEnd:function(){return e.removeValue(D)},onMouseDown:function(A){A.preventDefault()}},data:D}),e.formatOptionLabel(D,"value"))});if(m)return null;var F=b[0];return E.createElement(c,L({},g,{data:F,isDisabled:v}),this.formatOptionLabel(F,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),u=e.ClearIndicator,s=this.commonProps,o=this.props,a=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!this.isClearable()||!u||a||!this.hasValue()||l)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return E.createElement(u,L({},s,{innerProps:f,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),u=e.LoadingIndicator,s=this.commonProps,o=this.props,a=o.isDisabled,l=o.isLoading,c=this.state.isFocused;if(!u||!l)return null;var f={"aria-hidden":"true"};return E.createElement(u,L({},s,{innerProps:f,isDisabled:a,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),u=e.DropdownIndicator,s=e.IndicatorSeparator;if(!u||!s)return null;var o=this.commonProps,a=this.props.isDisabled,l=this.state.isFocused;return E.createElement(s,L({},o,{isDisabled:a,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),u=e.DropdownIndicator;if(!u)return null;var s=this.commonProps,o=this.props.isDisabled,a=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return E.createElement(u,L({},s,{innerProps:l,isDisabled:o,isFocused:a}))}},{key:"renderMenu",value:function(){var e=this,u=this.getComponents(),s=u.Group,o=u.GroupHeading,a=u.Menu,l=u.MenuList,c=u.MenuPortal,f=u.LoadingMessage,g=u.NoOptionsMessage,p=u.Option,h=this.commonProps,v=this.state.focusedOption,d=this.props,m=d.captureMenuScroll,y=d.inputValue,C=d.isLoading,b=d.loadingMessage,P=d.minMenuHeight,x=d.maxMenuHeight,F=d.menuIsOpen,D=d.menuPlacement,w=d.menuPosition,V=d.menuPortalTarget,j=d.menuShouldBlockScroll,R=d.menuShouldScrollIntoView,A=d.noOptionsMessage,z=d.onMenuScrollToTop,Q=d.onMenuScrollToBottom;if(!F)return null;var q=function(te,ie){var ce=te.type,J=te.data,ee=te.isDisabled,he=te.isSelected,me=te.label,O=te.value,I=v===J,B=ee?void 0:function(){return e.onOptionHover(J)},$=ee?void 0:function(){return e.selectOption(J)},k="".concat(e.getElementId("option"),"-").concat(ie),W={id:k,onClick:$,onMouseMove:B,onMouseOver:B,tabIndex:-1};return E.createElement(p,L({},h,{innerProps:W,data:J,isDisabled:ee,isSelected:he,key:k,label:me,type:ce,value:O,isFocused:I,innerRef:I?e.getFocusedOptionRef:void 0}),e.formatOptionLabel(te.data,"menu"))},oe;if(this.hasOptions())oe=this.getCategorizedOptions().map(function(Z){if(Z.type==="group"){var te=Z.data,ie=Z.options,ce=Z.index,J="".concat(e.getElementId("group"),"-").concat(ce),ee="".concat(J,"-heading");return E.createElement(s,L({},h,{key:J,data:te,options:ie,Heading:o,headingProps:{id:ee,data:Z.data},label:e.formatGroupLabel(Z.data)}),Z.options.map(function(he){return q(he,"".concat(ce,"-").concat(he.index))}))}else if(Z.type==="option")return q(Z,"".concat(Z.index))});else if(C){var ae=b({inputValue:y});if(ae===null)return null;oe=E.createElement(f,h,ae)}else{var ue=A({inputValue:y});if(ue===null)return null;oe=E.createElement(g,h,ue)}var se={minMenuHeight:P,maxMenuHeight:x,menuPlacement:D,menuPosition:w,menuShouldScrollIntoView:R},le=E.createElement(kr,L({},h,se),function(Z){var te=Z.ref,ie=Z.placerProps,ce=ie.placement,J=ie.maxHeight;return E.createElement(a,L({},h,se,{innerRef:te,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove,id:e.getElementId("listbox")},isLoading:C,placement:ce}),E.createElement(po,{captureEnabled:m,onTopArrive:z,onBottomArrive:Q,lockEnabled:j},function(ee){return E.createElement(l,L({},h,{innerRef:function(me){e.getMenuListRef(me),ee(me)},isLoading:C,maxHeight:J,focusedOption:v}),oe)}))});return V||w==="fixed"?E.createElement(c,L({},h,{appendTo:V,controlElement:this.controlRef,menuPlacement:D,menuPosition:w}),le):le}},{key:"renderFormField",value:function(){var e=this,u=this.props,s=u.delimiter,o=u.isDisabled,a=u.isMulti,l=u.name,c=u.required,f=this.state.selectValue;if(c&&!this.hasValue()&&!o)return E.createElement(vo,{name:l,onFocus:this.onValueInputFocus});if(!(!l||o))if(a)if(s){var g=f.map(function(v){return e.getOptionValue(v)}).join(s);return E.createElement("input",{name:l,type:"hidden",value:g})}else{var p=f.length>0?f.map(function(v,d){return E.createElement("input",{key:"i-".concat(d),name:l,type:"hidden",value:e.getOptionValue(v)})}):E.createElement("input",{name:l,type:"hidden",value:""});return E.createElement("div",null,p)}else{var h=f[0]?this.getOptionValue(f[0]):"";return E.createElement("input",{name:l,type:"hidden",value:h})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,u=this.state,s=u.ariaSelection,o=u.focusedOption,a=u.focusedValue,l=u.isFocused,c=u.selectValue,f=this.getFocusableOptions();return E.createElement(eo,L({},e,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:o,focusedValue:a,isFocused:l,selectValue:c,focusableOptions:f}))}},{key:"render",value:function(){var e=this.getComponents(),u=e.Control,s=e.IndicatorsContainer,o=e.SelectContainer,a=e.ValueContainer,l=this.props,c=l.className,f=l.id,g=l.isDisabled,p=l.menuIsOpen,h=this.state.isFocused,v=this.commonProps=this.getCommonProps();return E.createElement(o,L({},v,{className:c,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:h}),this.renderLiveRegion(),E.createElement(u,L({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:h,menuIsOpen:p}),E.createElement(a,L({},v,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),E.createElement(s,L({},v,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,u){var s=u.prevProps,o=u.clearFocusValueOnUpdate,a=u.inputIsHiddenAfterUpdate,l=u.ariaSelection,c=u.isFocused,f=u.prevWasFocused,g=e.options,p=e.value,h=e.menuIsOpen,v=e.inputValue,d=e.isMulti,m=yt(p),y={};if(s&&(p!==s.value||g!==s.options||h!==s.menuIsOpen||v!==s.inputValue)){var C=h?Do(e,m):[],b=o?Mo(u,m):null,P=Io(u,C);y={selectValue:m,focusedOption:P,focusedValue:b,clearFocusValueOnUpdate:!1}}var x=a!=null&&e!==s?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},F=l,D=c&&f;return c&&!D&&(F={value:Me(d,m,m[0]||null),options:m,action:"initial-input-focus"},D=!f),(l==null?void 0:l.action)==="initial-input-focus"&&(F=null),T(T(T({},y),x),{},{prevProps:e,ariaSelection:F,prevWasFocused:D})}}]),r}(E.Component);On.defaultProps=Po;var To=E.forwardRef(function(n,t){var r=rr(n);return E.createElement(On,L({ref:t},r))}),Vt=To,ke={},Ro="Expected a function",Lt=0/0,_o="[object Symbol]",Vo=/^\s+|\s+$/g,Lo=/^[-+]0x[0-9a-f]+$/i,jo=/^0b[01]+$/i,ko=/^0o[0-7]+$/i,Bo=parseInt,$o=typeof Oe=="object"&&Oe&&Oe.Object===Object&&Oe,Ho=typeof self=="object"&&self&&self.Object===Object&&self,Uo=$o||Ho||Function("return this")(),zo=Object.prototype,No=zo.toString,Wo=Math.max,Yo=Math.min,We=function(){return Uo.Date.now()};function Go(n,t,r){var i,e,u,s,o,a,l=0,c=!1,f=!1,g=!0;if(typeof n!="function")throw new TypeError(Ro);t=jt(t)||0,tt(r)&&(c=!!r.leading,f="maxWait"in r,u=f?Wo(jt(r.maxWait)||0,t):u,g="trailing"in r?!!r.trailing:g);function p(x){var F=i,D=e;return i=e=void 0,l=x,s=n.apply(D,F),s}function h(x){return l=x,o=setTimeout(m,t),c?p(x):s}function v(x){var F=x-a,D=x-l,w=t-F;return f?Yo(w,u-D):w}function d(x){var F=x-a,D=x-l;return a===void 0||F>=t||F<0||f&&D>=u}function m(){var x=We();if(d(x))return y(x);o=setTimeout(m,v(x))}function y(x){return o=void 0,g&&i?p(x):(i=e=void 0,s)}function C(){o!==void 0&&clearTimeout(o),l=0,i=a=e=o=void 0}function b(){return o===void 0?s:y(We())}function P(){var x=We(),F=d(x);if(i=arguments,e=this,a=x,F){if(o===void 0)return h(a);if(f)return o=setTimeout(m,t),p(a)}return o===void 0&&(o=setTimeout(m,t)),s}return P.cancel=C,P.flush=b,P}function tt(n){var t=typeof n;return!!n&&(t=="object"||t=="function")}function Qo(n){return!!n&&typeof n=="object"}function Ko(n){return typeof n=="symbol"||Qo(n)&&No.call(n)==_o}function jt(n){if(typeof n=="number")return n;if(Ko(n))return Lt;if(tt(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=tt(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=n.replace(Vo,"");var r=jo.test(n);return r||ko.test(n)?Bo(n.slice(2),r?2:8):Lo.test(n)?Lt:+n}var Xo=Go;function nt(n){"@babel/helpers - typeof";return nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt(n)}Object.defineProperty(ke,"__esModule",{value:!0});ke.DebounceInput=void 0;var kt=wn(E),qo=wn(Xo),Jo=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function wn(n){return n&&n.__esModule?n:{default:n}}function Zo(n,t){if(n==null)return{};var r=ea(n,t),i,e;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(e=0;e<u.length;e++)i=u[e],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}function ea(n,t){if(n==null)return{};var r={},i=Object.keys(n),e,u;for(u=0;u<i.length;u++)e=i[u],!(t.indexOf(e)>=0)&&(r[e]=n[e]);return r}function Bt(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),r.push.apply(r,i)}return r}function de(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Bt(Object(r),!0).forEach(function(i){be(n,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Bt(Object(r)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(r,i))})}return n}function ta(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function $t(n,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function na(n,t,r){return t&&$t(n.prototype,t),r&&$t(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function ra(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),t&&rt(n,t)}function rt(n,t){return rt=Object.setPrototypeOf||function(i,e){return i.__proto__=e,i},rt(n,t)}function ia(n){var t=aa();return function(){var i=Le(n),e;if(t){var u=Le(this).constructor;e=Reflect.construct(i,arguments,u)}else e=i.apply(this,arguments);return oa(this,e)}}function oa(n,t){if(t&&(nt(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ye(n)}function ye(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function aa(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Le(n){return Le=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},Le(n)}function be(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}var Fn=function(n){ra(r,n);var t=ia(r);function r(i){var e;ta(this,r),e=t.call(this,i),be(ye(e),"onChange",function(s){s.persist();var o=e.state.value,a=e.props.minLength;e.setState({value:s.target.value},function(){var l=e.state.value;if(l.length>=a){e.notify(s);return}o.length>l.length&&e.notify(de(de({},s),{},{target:de(de({},s.target),{},{value:""})}))})}),be(ye(e),"onKeyDown",function(s){s.key==="Enter"&&e.forceNotify(s);var o=e.props.onKeyDown;o&&(s.persist(),o(s))}),be(ye(e),"onBlur",function(s){e.forceNotify(s);var o=e.props.onBlur;o&&(s.persist(),o(s))}),be(ye(e),"createNotifier",function(s){if(s<0)e.notify=function(){return null};else if(s===0)e.notify=e.doNotify;else{var o=(0,qo.default)(function(a){e.isDebouncing=!1,e.doNotify(a)},s);e.notify=function(a){e.isDebouncing=!0,o(a)},e.flush=function(){return o.flush()},e.cancel=function(){e.isDebouncing=!1,o.cancel()}}}),be(ye(e),"doNotify",function(){var s=e.props.onChange;s.apply(void 0,arguments)}),be(ye(e),"forceNotify",function(s){var o=e.props.debounceTimeout;if(!(!e.isDebouncing&&o>0)){e.cancel&&e.cancel();var a=e.state.value,l=e.props.minLength;a.length>=l?e.doNotify(s):e.doNotify(de(de({},s),{},{target:de(de({},s.target),{},{value:a})}))}}),e.isDebouncing=!1,e.state={value:typeof i.value>"u"||i.value===null?"":i.value};var u=e.props.debounceTimeout;return e.createNotifier(u),e}return na(r,[{key:"componentDidUpdate",value:function(e){if(!this.isDebouncing){var u=this.props,s=u.value,o=u.debounceTimeout,a=e.debounceTimeout,l=e.value,c=this.state.value;typeof s<"u"&&l!==s&&c!==s&&this.setState({value:s}),o!==a&&this.createNotifier(o)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var e=this.props,u=e.element;e.onChange,e.value,e.minLength,e.debounceTimeout;var s=e.forceNotifyByEnter,o=e.forceNotifyOnBlur,a=e.onKeyDown,l=e.onBlur,c=e.inputRef,f=Zo(e,Jo),g=this.state.value,p;s?p={onKeyDown:this.onKeyDown}:a?p={onKeyDown:a}:p={};var h;o?h={onBlur:this.onBlur}:l?h={onBlur:l}:h={};var v=c?{ref:c}:{};return kt.default.createElement(u,de(de(de(de({},f),{},{onChange:this.onChange,value:g},p),h),v))}}]),r}(kt.default.PureComponent);ke.DebounceInput=Fn;be(Fn,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0});var ua=ke,it=ua.DebounceInput;it.DebounceInput=it;var sa=it;const la=N.label`
display: block;
  position: relative;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 16px;
  }
`,ca=N.input`
  width: 100%;
  box-sizing: border-box;
  padding: 14px;
  padding-right: 68px;
  background-color: transparent;
  color: #efede8;
  font-size: 14px;
  line-height: 18px;
  border-radius: 12px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  @media screen and (min-width: 768px) {
    width: 236px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 1.5;
  }

  &:hover,
  &:focus {
    outline: none;
    border-color: #e6533c;
  }

  &::placeholder {
    color: #efede8;
  }
`,da=N.div`
display:flex;
gap: 16px;`,fa=N.button`
  background: transparent;
  position: absolute;
  top: calc(50% - 16px / 2);
  right: 40px;
  border: none;
`;N.button`
  background: transparent;
  position: absolute;
  top: 17px;
  right: 17px;  
  border: none;
`;const pa=N.svg`
  stroke: #e6533c;
  width: 18px;
  height: 18px;
`,ha=N.svg`
  stroke: #efede8;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 17px;
  right: 17px;
`,ma=N.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,Ht=N.div`
    width: 158px;

  @media screen and (min-width: 768px) {
    width: 192px;
  }
  &:last-of-type{
    width: 173px;

  @media screen and (min-width: 768px) {
    width: 204px;
  }
  }
`,Ye=["","alcoholic drinks","berries","cereals","dairy","dried fruits","eggs","fish","flour","fruits","meat","mushrooms","nuts","oils and fats","poppy","sausage","seeds","sesame","soft drinks","vegetables and herbs"],Ut=[{value:"",label:"All"},{value:"true",label:"Recommended "},{value:"false",label:"Not recommended"}],Pn=n=>n.products.list,va=n=>n.products.isLoading,Dn=n=>n.products.page,ga=n=>n.products.total;var Mn={exports:{}};(function(n,t){(function(i,e){n.exports=e(E)})(Oe,r=>(()=>{var i={"./node_modules/css-mediaquery/index.js":(o,a)=>{a.match=h,a.parse=v;var l=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,c=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,f=/^(?:(min|max)-)?(.+)/,g=/(em|rem|px|cm|mm|in|pt|pc)?$/,p=/(dpi|dpcm|dppx)?$/;function h(C,b){return v(C).some(function(P){var x=P.inverse,F=P.type==="all"||b.type===P.type;if(F&&x||!(F||x))return!1;var D=P.expressions.every(function(w){var V=w.feature,j=w.modifier,R=w.value,A=b[V];if(!A)return!1;switch(V){case"orientation":case"scan":return A.toLowerCase()===R.toLowerCase();case"width":case"height":case"device-width":case"device-height":R=y(R),A=y(A);break;case"resolution":R=m(R),A=m(A);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":R=d(R),A=d(A);break;case"grid":case"color":case"color-index":case"monochrome":R=parseInt(R,10)||1,A=parseInt(A,10)||0;break}switch(j){case"min":return A>=R;case"max":return A<=R;default:return A===R}});return D&&!x||!D&&x})}function v(C){return C.split(",").map(function(b){b=b.trim();var P=b.match(l),x=P[1],F=P[2],D=P[3]||"",w={};return w.inverse=!!x&&x.toLowerCase()==="not",w.type=F?F.toLowerCase():"all",D=D.match(/\([^\)]+\)/g)||[],w.expressions=D.map(function(V){var j=V.match(c),R=j[1].toLowerCase().match(f);return{modifier:R[1],feature:R[2],value:j[2]}}),w})}function d(C){var b=Number(C),P;return b||(P=C.match(/^(\d+)\s*\/\s*(\d+)$/),b=P[1]/P[2]),b}function m(C){var b=parseFloat(C),P=String(C).match(p)[1];switch(P){case"dpcm":return b/2.54;case"dppx":return b*96;default:return b}}function y(C){var b=parseFloat(C),P=String(C).match(g)[1];switch(P){case"em":return b*16;case"rem":return b*16;case"cm":return b*96/2.54;case"mm":return b*96/2.54/10;case"in":return b*96;case"pt":return b*72;case"pc":return b*72/12;default:return b}}},"./node_modules/hyphenate-style-name/index.js":(o,a,l)=>{l.r(a),l.d(a,{default:()=>v});var c=/[A-Z]/g,f=/^ms-/,g={};function p(d){return"-"+d.toLowerCase()}function h(d){if(g.hasOwnProperty(d))return g[d];var m=d.replace(c,p);return g[d]=f.test(m)?"-"+m:m}const v=h},"./node_modules/matchmediaquery/index.js":(o,a,l)=>{var c=l("./node_modules/css-mediaquery/index.js").match,f=typeof window<"u"?window.matchMedia:null;function g(h,v,d){var m=this;if(f&&!d){var y=f.call(window,h);this.matches=y.matches,this.media=y.media,y.addListener(P)}else this.matches=c(h,v),this.media=h;this.addListener=C,this.removeListener=b,this.dispose=x;function C(F){y&&y.addListener(F)}function b(F){y&&y.removeListener(F)}function P(F){m.matches=F.matches,m.media=F.media}function x(){y&&y.removeListener(P)}}function p(h,v,d){return new g(h,v,d)}o.exports=p},"./node_modules/object-assign/index.js":o=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function f(p){if(p==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(p)}function g(){try{if(!Object.assign)return!1;var p=new String("abc");if(p[5]="de",Object.getOwnPropertyNames(p)[0]==="5")return!1;for(var h={},v=0;v<10;v++)h["_"+String.fromCharCode(v)]=v;var d=Object.getOwnPropertyNames(h).map(function(y){return h[y]});if(d.join("")!=="0123456789")return!1;var m={};return"abcdefghijklmnopqrst".split("").forEach(function(y){m[y]=y}),Object.keys(Object.assign({},m)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}o.exports=g()?Object.assign:function(p,h){for(var v,d=f(p),m,y=1;y<arguments.length;y++){v=Object(arguments[y]);for(var C in v)l.call(v,C)&&(d[C]=v[C]);if(a){m=a(v);for(var b=0;b<m.length;b++)c.call(v,m[b])&&(d[m[b]]=v[m[b]])}}return d}},"./node_modules/prop-types/checkPropTypes.js":(o,a,l)=>{var c=function(){};{var f=l("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),g={},p=l("./node_modules/prop-types/lib/has.js");c=function(v){var d="Warning: "+v;typeof console<"u"&&console.error(d);try{throw new Error(d)}catch{}}}function h(v,d,m,y,C){for(var b in v)if(p(v,b)){var P;try{if(typeof v[b]!="function"){var x=Error((y||"React class")+": "+m+" type `"+b+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof v[b]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw x.name="Invariant Violation",x}P=v[b](d,b,y,m,null,f)}catch(D){P=D}if(P&&!(P instanceof Error)&&c((y||"React class")+": type specification of "+m+" `"+b+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof P+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),P instanceof Error&&!(P.message in g)){g[P.message]=!0;var F=C?C():"";c("Failed "+m+" type: "+P.message+(F??""))}}}h.resetWarningCache=function(){g={}},o.exports=h},"./node_modules/prop-types/factoryWithTypeCheckers.js":(o,a,l)=>{var c=l("./node_modules/react-is/index.js"),f=l("./node_modules/object-assign/index.js"),g=l("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),p=l("./node_modules/prop-types/lib/has.js"),h=l("./node_modules/prop-types/checkPropTypes.js"),v=function(){};v=function(m){var y="Warning: "+m;typeof console<"u"&&console.error(y);try{throw new Error(y)}catch{}};function d(){return null}o.exports=function(m,y){var C=typeof Symbol=="function"&&Symbol.iterator,b="@@iterator";function P(O){var I=O&&(C&&O[C]||O[b]);if(typeof I=="function")return I}var x="<<anonymous>>",F={array:j("array"),bigint:j("bigint"),bool:j("boolean"),func:j("function"),number:j("number"),object:j("object"),string:j("string"),symbol:j("symbol"),any:R(),arrayOf:A,element:z(),elementType:Q(),instanceOf:q,node:se(),objectOf:ae,oneOf:oe,oneOfType:ue,shape:Z,exact:te};function D(O,I){return O===I?O!==0||1/O===1/I:O!==O&&I!==I}function w(O,I){this.message=O,this.data=I&&typeof I=="object"?I:{},this.stack=""}w.prototype=Error.prototype;function V(O){var I={},B=0;function $(W,H,U,Y,K,G,M){if(Y=Y||x,G=G||U,M!==g){if(y){var ne=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw ne.name="Invariant Violation",ne}else if(typeof console<"u"){var fe=Y+":"+U;!I[fe]&&B<3&&(v("You are manually calling a React.PropTypes validation function for the `"+G+"` prop on `"+Y+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),I[fe]=!0,B++)}}return H[U]==null?W?H[U]===null?new w("The "+K+" `"+G+"` is marked as required "+("in `"+Y+"`, but its value is `null`.")):new w("The "+K+" `"+G+"` is marked as required in "+("`"+Y+"`, but its value is `undefined`.")):null:O(H,U,Y,K,G)}var k=$.bind(null,!1);return k.isRequired=$.bind(null,!0),k}function j(O){function I(B,$,k,W,H,U){var Y=B[$],K=J(Y);if(K!==O){var G=ee(Y);return new w("Invalid "+W+" `"+H+"` of type "+("`"+G+"` supplied to `"+k+"`, expected ")+("`"+O+"`."),{expectedType:O})}return null}return V(I)}function R(){return V(d)}function A(O){function I(B,$,k,W,H){if(typeof O!="function")return new w("Property `"+H+"` of component `"+k+"` has invalid PropType notation inside arrayOf.");var U=B[$];if(!Array.isArray(U)){var Y=J(U);return new w("Invalid "+W+" `"+H+"` of type "+("`"+Y+"` supplied to `"+k+"`, expected an array."))}for(var K=0;K<U.length;K++){var G=O(U,K,k,W,H+"["+K+"]",g);if(G instanceof Error)return G}return null}return V(I)}function z(){function O(I,B,$,k,W){var H=I[B];if(!m(H)){var U=J(H);return new w("Invalid "+k+" `"+W+"` of type "+("`"+U+"` supplied to `"+$+"`, expected a single ReactElement."))}return null}return V(O)}function Q(){function O(I,B,$,k,W){var H=I[B];if(!c.isValidElementType(H)){var U=J(H);return new w("Invalid "+k+" `"+W+"` of type "+("`"+U+"` supplied to `"+$+"`, expected a single ReactElement type."))}return null}return V(O)}function q(O){function I(B,$,k,W,H){if(!(B[$]instanceof O)){var U=O.name||x,Y=me(B[$]);return new w("Invalid "+W+" `"+H+"` of type "+("`"+Y+"` supplied to `"+k+"`, expected ")+("instance of `"+U+"`."))}return null}return V(I)}function oe(O){if(!Array.isArray(O))return arguments.length>1?v("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):v("Invalid argument supplied to oneOf, expected an array."),d;function I(B,$,k,W,H){for(var U=B[$],Y=0;Y<O.length;Y++)if(D(U,O[Y]))return null;var K=JSON.stringify(O,function(M,ne){var fe=ee(ne);return fe==="symbol"?String(ne):ne});return new w("Invalid "+W+" `"+H+"` of value `"+String(U)+"` "+("supplied to `"+k+"`, expected one of "+K+"."))}return V(I)}function ae(O){function I(B,$,k,W,H){if(typeof O!="function")return new w("Property `"+H+"` of component `"+k+"` has invalid PropType notation inside objectOf.");var U=B[$],Y=J(U);if(Y!=="object")return new w("Invalid "+W+" `"+H+"` of type "+("`"+Y+"` supplied to `"+k+"`, expected an object."));for(var K in U)if(p(U,K)){var G=O(U,K,k,W,H+"."+K,g);if(G instanceof Error)return G}return null}return V(I)}function ue(O){if(!Array.isArray(O))return v("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var I=0;I<O.length;I++){var B=O[I];if(typeof B!="function")return v("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+he(B)+" at index "+I+"."),d}function $(k,W,H,U,Y){for(var K=[],G=0;G<O.length;G++){var M=O[G],ne=M(k,W,H,U,Y,g);if(ne==null)return null;ne.data&&p(ne.data,"expectedType")&&K.push(ne.data.expectedType)}var fe=K.length>0?", expected one of type ["+K.join(", ")+"]":"";return new w("Invalid "+U+" `"+Y+"` supplied to "+("`"+H+"`"+fe+"."))}return V($)}function se(){function O(I,B,$,k,W){return ie(I[B])?null:new w("Invalid "+k+" `"+W+"` supplied to "+("`"+$+"`, expected a ReactNode."))}return V(O)}function le(O,I,B,$,k){return new w((O||"React class")+": "+I+" type `"+B+"."+$+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+k+"`.")}function Z(O){function I(B,$,k,W,H){var U=B[$],Y=J(U);if(Y!=="object")return new w("Invalid "+W+" `"+H+"` of type `"+Y+"` "+("supplied to `"+k+"`, expected `object`."));for(var K in O){var G=O[K];if(typeof G!="function")return le(k,W,H,K,ee(G));var M=G(U,K,k,W,H+"."+K,g);if(M)return M}return null}return V(I)}function te(O){function I(B,$,k,W,H){var U=B[$],Y=J(U);if(Y!=="object")return new w("Invalid "+W+" `"+H+"` of type `"+Y+"` "+("supplied to `"+k+"`, expected `object`."));var K=f({},B[$],O);for(var G in K){var M=O[G];if(p(O,G)&&typeof M!="function")return le(k,W,H,G,ee(M));if(!M)return new w("Invalid "+W+" `"+H+"` key `"+G+"` supplied to `"+k+"`.\nBad object: "+JSON.stringify(B[$],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(O),null,"  "));var ne=M(U,G,k,W,H+"."+G,g);if(ne)return ne}return null}return V(I)}function ie(O){switch(typeof O){case"number":case"string":case"undefined":return!0;case"boolean":return!O;case"object":if(Array.isArray(O))return O.every(ie);if(O===null||m(O))return!0;var I=P(O);if(I){var B=I.call(O),$;if(I!==O.entries){for(;!($=B.next()).done;)if(!ie($.value))return!1}else for(;!($=B.next()).done;){var k=$.value;if(k&&!ie(k[1]))return!1}}else return!1;return!0;default:return!1}}function ce(O,I){return O==="symbol"?!0:I?I["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&I instanceof Symbol:!1}function J(O){var I=typeof O;return Array.isArray(O)?"array":O instanceof RegExp?"object":ce(I,O)?"symbol":I}function ee(O){if(typeof O>"u"||O===null)return""+O;var I=J(O);if(I==="object"){if(O instanceof Date)return"date";if(O instanceof RegExp)return"regexp"}return I}function he(O){var I=ee(O);switch(I){case"array":case"object":return"an "+I;case"boolean":case"date":case"regexp":return"a "+I;default:return I}}function me(O){return!O.constructor||!O.constructor.name?x:O.constructor.name}return F.checkPropTypes=h,F.resetWarningCache=h.resetWarningCache,F.PropTypes=F,F}},"./node_modules/prop-types/index.js":(o,a,l)=>{{var c=l("./node_modules/react-is/index.js"),f=!0;o.exports=l("./node_modules/prop-types/factoryWithTypeCheckers.js")(c.isElement,f)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":o=>{var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";o.exports=a},"./node_modules/prop-types/lib/has.js":o=>{o.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(o,a)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var l=typeof Symbol=="function"&&Symbol.for,c=l?Symbol.for("react.element"):60103,f=l?Symbol.for("react.portal"):60106,g=l?Symbol.for("react.fragment"):60107,p=l?Symbol.for("react.strict_mode"):60108,h=l?Symbol.for("react.profiler"):60114,v=l?Symbol.for("react.provider"):60109,d=l?Symbol.for("react.context"):60110,m=l?Symbol.for("react.async_mode"):60111,y=l?Symbol.for("react.concurrent_mode"):60111,C=l?Symbol.for("react.forward_ref"):60112,b=l?Symbol.for("react.suspense"):60113,P=l?Symbol.for("react.suspense_list"):60120,x=l?Symbol.for("react.memo"):60115,F=l?Symbol.for("react.lazy"):60116,D=l?Symbol.for("react.block"):60121,w=l?Symbol.for("react.fundamental"):60117,V=l?Symbol.for("react.responder"):60118,j=l?Symbol.for("react.scope"):60119;function R(M){return typeof M=="string"||typeof M=="function"||M===g||M===y||M===h||M===p||M===b||M===P||typeof M=="object"&&M!==null&&(M.$$typeof===F||M.$$typeof===x||M.$$typeof===v||M.$$typeof===d||M.$$typeof===C||M.$$typeof===w||M.$$typeof===V||M.$$typeof===j||M.$$typeof===D)}function A(M){if(typeof M=="object"&&M!==null){var ne=M.$$typeof;switch(ne){case c:var fe=M.type;switch(fe){case m:case y:case g:case h:case p:case b:return fe;default:var pt=fe&&fe.$$typeof;switch(pt){case d:case C:case F:case x:case v:return pt;default:return ne}}case f:return ne}}}var z=m,Q=y,q=d,oe=v,ae=c,ue=C,se=g,le=F,Z=x,te=f,ie=h,ce=p,J=b,ee=!1;function he(M){return ee||(ee=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),me(M)||A(M)===m}function me(M){return A(M)===y}function O(M){return A(M)===d}function I(M){return A(M)===v}function B(M){return typeof M=="object"&&M!==null&&M.$$typeof===c}function $(M){return A(M)===C}function k(M){return A(M)===g}function W(M){return A(M)===F}function H(M){return A(M)===x}function U(M){return A(M)===f}function Y(M){return A(M)===h}function K(M){return A(M)===p}function G(M){return A(M)===b}a.AsyncMode=z,a.ConcurrentMode=Q,a.ContextConsumer=q,a.ContextProvider=oe,a.Element=ae,a.ForwardRef=ue,a.Fragment=se,a.Lazy=le,a.Memo=Z,a.Portal=te,a.Profiler=ie,a.StrictMode=ce,a.Suspense=J,a.isAsyncMode=he,a.isConcurrentMode=me,a.isContextConsumer=O,a.isContextProvider=I,a.isElement=B,a.isForwardRef=$,a.isFragment=k,a.isLazy=W,a.isMemo=H,a.isPortal=U,a.isProfiler=Y,a.isStrictMode=K,a.isSuspense=G,a.isValidElementType=R,a.typeOf=A})()},"./node_modules/react-is/index.js":(o,a,l)=>{o.exports=l("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(o,a,l)=>{l.r(a),l.d(a,{shallowEqualArrays:()=>f,shallowEqualObjects:()=>c});function c(g,p){if(g===p)return!0;if(!g||!p)return!1;var h=Object.keys(g),v=Object.keys(p),d=h.length;if(v.length!==d)return!1;for(var m=0;m<d;m++){var y=h[m];if(g[y]!==p[y]||!Object.prototype.hasOwnProperty.call(p,y))return!1}return!0}function f(g,p){if(g===p)return!0;if(!g||!p)return!1;var h=g.length;if(p.length!==h)return!1;for(var v=0;v<h;v++)if(g[v]!==p[v])return!1;return!0}},"./src/Component.ts":function(o,a,l){var c=this&&this.__rest||function(h,v){var d={};for(var m in h)Object.prototype.hasOwnProperty.call(h,m)&&v.indexOf(m)<0&&(d[m]=h[m]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,m=Object.getOwnPropertySymbols(h);y<m.length;y++)v.indexOf(m[y])<0&&Object.prototype.propertyIsEnumerable.call(h,m[y])&&(d[m[y]]=h[m[y]]);return d},f=this&&this.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(a,"__esModule",{value:!0});var g=f(l("./src/useMediaQuery.ts")),p=function(h){var v=h.children,d=h.device,m=h.onChange,y=c(h,["children","device","onChange"]),C=(0,g.default)(y,d,m);return typeof v=="function"?v(C):C?v:null};a.default=p},"./src/Context.ts":(o,a,l)=>{Object.defineProperty(a,"__esModule",{value:!0});var c=l("react"),f=(0,c.createContext)(void 0);a.default=f},"./src/index.ts":function(o,a,l){var c=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(a,"__esModule",{value:!0}),a.Context=a.toQuery=a.useMediaQuery=a.default=void 0;var f=c(l("./src/useMediaQuery.ts"));a.useMediaQuery=f.default;var g=c(l("./src/Component.ts"));a.default=g.default;var p=c(l("./src/toQuery.ts"));a.toQuery=p.default;var h=c(l("./src/Context.ts"));a.Context=h.default},"./src/mediaQuery.ts":function(o,a,l){var c=this&&this.__assign||function(){return c=Object.assign||function(b){for(var P,x=1,F=arguments.length;x<F;x++){P=arguments[x];for(var D in P)Object.prototype.hasOwnProperty.call(P,D)&&(b[D]=P[D])}return b},c.apply(this,arguments)},f=this&&this.__rest||function(b,P){var x={};for(var F in b)Object.prototype.hasOwnProperty.call(b,F)&&P.indexOf(F)<0&&(x[F]=b[F]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var D=0,F=Object.getOwnPropertySymbols(b);D<F.length;D++)P.indexOf(F[D])<0&&Object.prototype.propertyIsEnumerable.call(b,F[D])&&(x[F[D]]=b[F[D]]);return x},g=this&&this.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(a,"__esModule",{value:!0});var p=g(l("./node_modules/prop-types/index.js")),h=p.default.oneOfType([p.default.string,p.default.number]),v={all:p.default.bool,grid:p.default.bool,aural:p.default.bool,braille:p.default.bool,handheld:p.default.bool,print:p.default.bool,projection:p.default.bool,screen:p.default.bool,tty:p.default.bool,tv:p.default.bool,embossed:p.default.bool},d={orientation:p.default.oneOf(["portrait","landscape"]),scan:p.default.oneOf(["progressive","interlace"]),aspectRatio:p.default.string,deviceAspectRatio:p.default.string,height:h,deviceHeight:h,width:h,deviceWidth:h,color:p.default.bool,colorIndex:p.default.bool,monochrome:p.default.bool,resolution:h,type:Object.keys(v)};d.type;var m=f(d,["type"]),y=c({minAspectRatio:p.default.string,maxAspectRatio:p.default.string,minDeviceAspectRatio:p.default.string,maxDeviceAspectRatio:p.default.string,minHeight:h,maxHeight:h,minDeviceHeight:h,maxDeviceHeight:h,minWidth:h,maxWidth:h,minDeviceWidth:h,maxDeviceWidth:h,minColor:p.default.number,maxColor:p.default.number,minColorIndex:p.default.number,maxColorIndex:p.default.number,minMonochrome:p.default.number,maxMonochrome:p.default.number,minResolution:h,maxResolution:h},m),C=c(c({},v),y);a.default={all:C,types:v,matchers:d,features:y}},"./src/toQuery.ts":function(o,a,l){var c=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(a,"__esModule",{value:!0});var f=c(l("./node_modules/hyphenate-style-name/index.js")),g=c(l("./src/mediaQuery.ts")),p=function(m){return"not ".concat(m)},h=function(m,y){var C=(0,f.default)(m);return typeof y=="number"&&(y="".concat(y,"px")),y===!0?C:y===!1?p(C):"(".concat(C,": ").concat(y,")")},v=function(m){return m.join(" and ")},d=function(m){var y=[];return Object.keys(g.default.all).forEach(function(C){var b=m[C];b!=null&&y.push(h(C,b))}),v(y)};a.default=d},"./src/useMediaQuery.ts":function(o,a,l){var c=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(a,"__esModule",{value:!0});var f=l("react"),g=c(l("./node_modules/matchmediaquery/index.js")),p=c(l("./node_modules/hyphenate-style-name/index.js")),h=l("./node_modules/shallow-equal/dist/index.esm.js"),v=c(l("./src/toQuery.ts")),d=c(l("./src/Context.ts")),m=function(w){return w.query||(0,v.default)(w)},y=function(w){if(w){var V=Object.keys(w);return V.reduce(function(j,R){return j[(0,p.default)(R)]=w[R],j},{})}},C=function(){var w=(0,f.useRef)(!1);return(0,f.useEffect)(function(){w.current=!0},[]),w.current},b=function(w){var V=(0,f.useContext)(d.default),j=function(){return y(w)||y(V)},R=(0,f.useState)(j),A=R[0],z=R[1];return(0,f.useEffect)(function(){var Q=j();(0,h.shallowEqualObjects)(A,Q)||z(Q)},[w,V]),A},P=function(w){var V=function(){return m(w)},j=(0,f.useState)(V),R=j[0],A=j[1];return(0,f.useEffect)(function(){var z=V();R!==z&&A(z)},[w]),R},x=function(w,V){var j=function(){return(0,g.default)(w,V||{},!!V)},R=(0,f.useState)(j),A=R[0],z=R[1],Q=C();return(0,f.useEffect)(function(){if(Q){var q=j();return z(q),function(){q&&q.dispose()}}},[w,V]),A},F=function(w){var V=(0,f.useState)(w.matches),j=V[0],R=V[1];return(0,f.useEffect)(function(){var A=function(z){R(z.matches)};return w.addListener(A),R(w.matches),function(){w.removeListener(A)}},[w]),j},D=function(w,V,j){var R=b(V),A=P(w);if(!A)throw new Error("Invalid or missing MediaQuery!");var z=x(A,R),Q=F(z),q=C();return(0,f.useEffect)(function(){q&&j&&j(Q)},[Q]),(0,f.useEffect)(function(){return function(){z&&z.dispose()}},[]),Q};a.default=D},react:o=>{o.exports=r}},e={};function u(o){var a=e[o];if(a!==void 0)return a.exports;var l=e[o]={exports:{}};return i[o].call(l.exports,l,l.exports,u),l.exports}u.d=(o,a)=>{for(var l in a)u.o(a,l)&&!u.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:a[l]})},u.o=(o,a)=>Object.prototype.hasOwnProperty.call(o,a),u.r=o=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var s=u("./src/index.ts");return s})())})(Mn);var Ge=Mn.exports;const ba=()=>{const n=Ge.useMediaQuery({minWidth:375}),t=Ge.useMediaQuery({minWidth:769}),r=Ge.useMediaQuery({minWidth:1440});let i="";return n?i="46px":i="52px",t?i="52px":i="46px",r?i="52px":i="46px",{control:e=>({...e,backgroundColor:"trasparent",height:i,borderStyle:"none",appearance:"none",WebkitAppearance:"none",MozAppearance:"none"}),option:(e,{isFocused:u,isSelected:s})=>({...e,backgroundColor:"rgba(28, 28, 28, 1)",color:s?"#E6533C":"#EFEDE8",marginBottom:"8px","&:last-child":{marginBottom:"0"}}),menu:e=>({...e,borderRadius:"12px",backgroundColor:"rgba(28, 28, 28, 1)"}),singleValue:e=>({...e,color:"#EFEDE8"}),indicatorSeparator:e=>({...e,backgroundColor:"transparent"}),dropdownIndicator:e=>({...e,color:"#EFEDE8"}),container:e=>({...e,border:"1px solid rgba(239, 237, 232, 0.30)",borderRadius:"12px",outline:"none"}),menuList:e=>({...e,margin:"14px 7px","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{backgroundColor:"rgba(239, 237, 232, 0.10)",borderRadius:"12px"},overflowY:"auto"})}},ya=()=>{const[n,t]=E.useState(""),[r,i]=E.useState(""),[e,u]=E.useState(""),s=ba();let o=Number(xe(Dn));const a=xe(Pn),l=at();E.useEffect(()=>{a.length>0&&l(ht())},[]);const c=d=>d.slice(0,1).toUpperCase()+d.slice(1),f=Ye==null?void 0:Ye.map(d=>({value:d,label:c(d)||"All"})),g=d=>{u(d.value)},p=d=>{i(d.value)},h=d=>{t(d.target.value)};E.useEffect(()=>{l(ht())},[r,l,e,n]),E.useEffect(()=>{l(Tn({filterParams:{search:n,category:r,recommended:e},page:o}))},[r,l,o,e,n]);const v=()=>{t("")};return S.jsxs(ma,{children:[S.jsxs(la,{children:[S.jsx(sa.DebounceInput,{element:ca,value:n,debounceTimeout:500,onChange:h,name:"productSearch",type:"text",placeholder:"Search"}),n&&S.jsx(fa,{onClick:v,type:"button",children:S.jsx(pa,{children:S.jsx("use",{href:`${Ee}#icon-x`})})}),S.jsx(ha,{children:S.jsx("use",{href:`${Ee}#icon-search`})})]}),S.jsxs(da,{children:[S.jsx(Ht,{children:S.jsx(Vt,{styles:s,isSearchable:!1,onChange:p,value:f.find(d=>d.value===r),placeholder:"Categories",options:f||[],theme:d=>({...d,colors:{...d.colors,primary_bcwycos:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral_bh:"#EFEDE8",neutral_db:"transparent",neutral_dhb:"transparent",neutral_pc:"rgba(239, 237, 232, 1)",neutral_n:"rgba(239, 237, 232, 1)"}})})}),S.jsx(Ht,{children:S.jsx(Vt,{styles:s,isSearchable:!1,value:Ut.find(d=>d.value===e),onChange:g,theme:d=>({...d,colors:{...d.colors,primary_bcwycos:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral_bh:"#EFEDE8",neutral_db:"transparent",neutral_dhb:"transparent",neutral_pc:"rgba(239, 237, 232, 1)",neutral_n:"rgba(239, 237, 232, 1)"}}),options:Ut})})]})]})},xa=re.div`
  &::-webkit-scrollbar {
    width: 8px;
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ef8964;
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px 16px;
    height: 636px;
    overflow-y: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
    height: 493px;
  }
`,Ea=re.div`
  margin-bottom: 20px;
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${ut.bgCards};
  background: rgba(239, 237, 232, 0.05);
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 335px;
    height: 135px;
  }
  @media screen and (min-width: 1440px) {
    width: 405px;
    height: 143px;
  }
`,Ca=re.h3`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,Sa=re.div`
  display: flex;
  column-gap: 16px;
`,Qe=re.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-transform: capitalize;
`,Oa=re.li`
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-bottom: 27px;
  }
`,wa=re.div`
  padding: 5px 7.5px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
`,Fa=re.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`,Pa=re.div`
margin-left: auto;
  margin-right: 16px;
  display: flex;
  align-items: center;
`,zt=re.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
`,Nt=re.p`
margin-left: 8px;
  color: #efede8;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`,Da=re.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
  color: #e6533c;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`,Ke=re.span`
  color: rgba(239, 237, 232, 0.4);
`,Ma=re.svg`
  fill: rgba(239, 237, 232, 1);
  border-radius: 50px;
  background-color: rgba(239, 160, 130, 1);
  padding: 3px 4px;
`,Wt=(n,t=24)=>{if(n.length>t){const r=n.lastIndexOf(" ",t);return r!==-1?Xe(n.substring(0,r))+"...":Xe(n.substring(0,t))+"..."}return Xe(n)};function Xe(n){return n.charAt(0).toUpperCase()+n.slice(1)}const Yt=({product:n,addProductDetails:t,rf:r})=>{const i=()=>{t(n)},e=xe(Rn.getUserMetricData).blood;return S.jsxs(Ea,{ref:r,children:[S.jsxs(Oa,{children:[S.jsx(wa,{children:S.jsx(Fa,{children:"Diet"})}),S.jsxs("div",{style:{display:"flex"},children:[S.jsx(Pa,{children:n.groupBloodNotAllowed[e]?S.jsxs(S.Fragment,{children:[S.jsx(zt,{style:{backgroundColor:"#419B09"}}),S.jsx(Nt,{children:"Recommended"})]}):S.jsxs(S.Fragment,{children:[S.jsx(zt,{style:{backgroundColor:"#E9101D"}}),S.jsx(Nt,{children:"Not recommended"})]})}),S.jsxs(Da,{onClick:i,children:["Add",S.jsx("svg",{width:16,height:16,style:{stroke:"#E6533C"},children:S.jsx("use",{href:`${Ee}#icon-start`})})]})]})]}),S.jsxs(Ca,{children:[S.jsx(Ma,{width:24,height:24,children:S.jsx("use",{href:`${Ee}#icon-running`})}),Wt(n.title)]}),S.jsxs(Sa,{children:[S.jsxs(Qe,{children:[S.jsx(Ke,{children:"Calories: "}),n.calories]}),S.jsxs(Qe,{children:[S.jsx(Ke,{children:"Category: "}),Wt(n.category,13)]}),S.jsxs(Qe,{children:[S.jsx(Ke,{children:"Weight: "}),n.weight]})]})]})},Ia=N.div`
  @media screen and (min-width: 375px) {
    display: inline-block;
    margin-top: 24px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 92px;
  }
`,Aa=N.p`
  color: rgba(239, 237, 232, 0.3);
  @media screen and (min-width: 375px) {
    display: inline-block;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    font-style: normal;
    width: 335px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    width: 580px;
  }
`,Ta=N.span`
  color: #e6533c;
  @media screen and (min-width: 375px) {
    display: inline-block;
    font-size: 14px;
    line-height: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Ra=N.p`
  color: #e6533c;
  @media screen and (min-width: 375px) {
    display: inline-block;
    font-size: 14px;
    line-height: 18px;
  }

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 16px;
    line-height: 24px;
  }
`,_a=()=>S.jsxs(Ia,{children:[S.jsxs(Aa,{children:[S.jsx(Ta,{children:"Sorry, no results were found"})," ","for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),S.jsx(Ra,{children:"Try changing the search parameters."})]});let qe=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((t,r)=>(r&=63,r<36?t+=r.toString(36):r<62?t+=(r-26).toString(36).toUpperCase():r>62?t+="-":t+="_",t),"");const Va=N.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 4, 0.4);
  z-index: 10;
`,La=N.div`
  position: relative;
  overflow-y: scroll;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px 24px;
  gap: 40px;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(16, 16, 15, 1);
  z-index: 11;
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
    flex-direction: row;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
`,ja=N.button`
  border: none;
  z-index: 20;
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: rgba(0, 0, 0, 0);
  @media screen and (min-width: 768px) {
    top: 16px;
    right: 16px;
  }
`,ka=N.svg`
pointer-events: none;
  display: block;
  width: 22px;
  height: 22px;
  stroke: ${ut.withe};
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,ot=N.input`
  outline: 0;
  outline-offset: 0;
  color: #efede8;
  width: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${n=>n.theme.main};
  border-radius: 12px;
  padding: 13px;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 1.29;
  &:not(:first-of-type) {
    margin-top: 18px;
  }
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    &:not(:first-of-type) {
      margin-top: 20px;
    }
  }
`,Ba=N.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 16px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;ot.defaultProps={theme:{main:"rgba(239, 237, 232, 0.3)"}};const $a=N.div`
  display: inline-block;
  margin-right: 14px;
  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`,Ha=N.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,Ua=N.span`
  color: rgba(239, 237, 232);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
`,za=N.label`
  @media screen and (min-width: 768px) {
    width: 244px;
  }
`,Na=N.label`
  @media screen and (min-width: 768px) {
    width: 155px;
  }
`;N.span`
  color: #e6533c;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
`;const Wa=({product:n,getCalories:t,onModal:r,onSecondModal:i})=>{const e=at(),[u,s]=E.useState(100),o=c=>{s(c.target.value)},a=async()=>{if(!u){_n.error("Please add weight!");return}const c=Math.round(n.calories/100*Number(u)),f={productId:n._id,calories:c,amount:Number(u)};e(Vn.postDiaryProduct(f)),t(f.calories),i(),r()},l=c=>{c.target===c.currentTarget&&r()};return S.jsx(Va,{onClick:l,children:S.jsxs(La,{children:[S.jsx(ja,{type:"button",onClick:l,children:S.jsx(ka,{children:S.jsx("use",{href:`${Ee}#icon-x`})})}),S.jsx(Gn,{initialValues:{weight:""},onSubmit:a,children:S.jsxs(Qn,{children:[S.jsxs(Ba,{children:[S.jsx(za,{htmlFor:"title",children:S.jsx(mt,{as:ot,type:"text",name:"product",placeholder:n.title,readOnly:!0})}),S.jsx(Na,{htmlFor:"weight",children:S.jsx(mt,{as:ot,type:"number",name:"weight",placeholder:"Weight, grams",onChange:o,value:u})})]}),S.jsxs(Ha,{children:["Calories:"," ",S.jsxs(Ua,{children:[" ",Math.round(n.calories/100*u)]})]}),S.jsx($a,{children:S.jsx(vt,{cls:"addDiary",text:"Add to diary",tp:"submit"})}),S.jsx(vt,{tp:"button",cls:"buttonCancel",text:"Cancel",onClick:l})]})})]})})},Ya="/pj-react-777/assets/food-2x-1cf208a8.png",Ga=N.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 4, 0.4);
  z-index: 10;
`,Qa=N.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  outline: none;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  padding: 48px 89px;
  background-color: #10100f;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    padding: 64px 136px;
  }
`,Ka=N.svg`
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
`,Xa=N.div`
display: flex;
flex-direction: column;
align-items: center;
@media screen and (min-width: 768px) {
    }   
`,qa=N.img`
width:123px;
height:84px;
margin-bottom: 16px;
@media screen and (min-width: 768px) {
height:97px;
}   
`,Ja=N.p`
    color: #efede8;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    margin-bottom: 16px;
`,Gt=N.p`
    color: rgba(239, 237, 232, 0.3);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom:24px;
    
`,Za=N.span`
   color: #e6533c;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    display: flex;
    gap: 8px;
    align-items: center;
`,eu=N.button`
    border-radius: 12px;
    background: #e6533c;
    padding: 12px 32px;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    color: #efede8;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    border: none;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    @media screen and (min-width: 768px) {
    padding: 16px 32px;
    }
  &:hover,
  &:focus {
    background-color:#EF8964;
    color: #efede8;
  }
`,tu=N.svg`
    width: 16px;
    height: 16px;
    stroke: rgba(239, 237, 232, 0.3)`,nu=({calories:n,onModal:t})=>{const r=i=>{i.target===i.currentTarget&&t()};return S.jsx(Ga,{onClick:r,children:S.jsxs(Qa,{children:[S.jsx(Ka,{onClick:r,children:S.jsx("use",{href:Ee+"#icon-close"})}),S.jsxs(Xa,{children:[S.jsx(qa,{src:Ya,alt:"product"}),S.jsx(Ja,{children:"Well done"}),S.jsxs(Gt,{children:["Calories: ",S.jsx(Za,{children:n})]})]}),S.jsx(eu,{onClick:r,children:"Next product"}),S.jsx(Ln,{to:"/diary",children:S.jsxs(Gt,{children:["To the diary",S.jsx(tu,{children:S.jsx("use",{href:Ee+"#icon-start"})})]})})]})})},ru=()=>{let n=Number(xe(Dn));const t=xe(ga),r=xe(va),i=xe(Pn),[e,u]=E.useState(!1),[s,o]=E.useState(!1),a=at(),l=t>=n*50,[c,f]=E.useState(),[g,p]=E.useState(),h=()=>{u(!e)},v=()=>{o(!s)},d=E.useRef(),m=E.useCallback(b=>{l&&(r||(d.current&&d.current.disconnect(),d.current=new IntersectionObserver(P=>{P[0].isIntersecting&&a(jn(n+1))}),b&&d.current.observe(b)))},[a,l,r,n]),y=b=>{f(b),u(!0)},C=b=>p(b);return S.jsxs(xa,{children:[e&&S.jsx(Wa,{product:c,getCalories:C,onModal:h,onSecondModal:v}),s&&S.jsx(nu,{calories:g,onModal:v}),(i==null?void 0:i.length)>0?i.map((b,P)=>i.length===P+1?S.jsx(Yt,{rf:m,product:b,addProductDetails:y},qe()):S.jsx("div",{children:S.jsx(Yt,{product:b,addProductDetails:y},qe())},qe())):r?S.jsx(Kn,{}):S.jsx(_a,{})]})},Qt="/pj-react-777/assets/products_background_desktop-55179e50.jpg",iu=re.div`
  ${Xn}
  margin-top: 61px;
  padding-top: 40px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 84px;
    padding-top: 72px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 81px;
    padding-top: 42px;
    padding-bottom: 81px;
    background-repeat: no-repeat;
    background-position: top right;
    height: 807px;
    background-image: url(${Qt});
  }

  @media screen and (min-width: 1440px) and (min-device-pixel-ratio: 2),
    screen and (min-width: 1440px) and (min-resolution: 192dpi),
    screen and (min-width: 1440px) and (min-resolution: 2dppx) {
    background-image: url(${Qt});
  }
`,ou=re.h2`
  margin-bottom: 40px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.17;
  color: ${ut.withe};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 1.38;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`,au=re.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 28px;
    justify-content: space-between;
    display: flex;
    align-items: center;
  }
`,uu=re.span`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    margin-bottom: 8px;
    color: rgba(239, 237, 232, 0.5);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
    text-align: end;
  }
`,vu=()=>S.jsxs(iu,{children:[S.jsx(uu,{children:"Filters"}),S.jsxs(au,{children:[S.jsx(ou,{children:"Products"}),S.jsx(ya,{})]}),S.jsx(ru,{})]});export{vu as default};
