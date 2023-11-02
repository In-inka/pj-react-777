import{r as C,_ as T,i as mn,l as Se,m as vn,a as gn,s as N,n as bn,u as ge,d as Ce,j as S,p as we,q as Ge,g as be,b as xn,Q as st,h as En,t as tt,v as Ke,L as yn,w as Cn,x as Sn}from"./index-8a77fd17.js";import{_ as kt,a as wn,b as On,c as Fn,d as Mn,e as Pn}from"./createClass-e34a73fa.js";import{h as Dn,E as An,c as In,s as Rn,_ as L,n as re}from"./emotion-styled.browser.esm-35bbd1e0.js";import{s as xe,C as Tn}from"./sprite-a75cea61.js";import{F as Vn,a as _n,b as lt}from"./formik.esm-d55b8770.js";function Ln(n,t){if(n==null)return{};var r={},o=Object.keys(n),e,u;for(u=0;u<o.length;u++)e=o[u],!(t.indexOf(e)>=0)&&(r[e]=n[e]);return r}var _=function(t,r){var o=arguments;if(r==null||!Dn.call(r,"css"))return C.createElement.apply(void 0,o);var e=o.length,u=new Array(e);u[0]=An,u[1]=In(t,r);for(var l=2;l<e;l++)u[l]=o[l];return C.createElement.apply(null,u)};function nt(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return Rn(t)}var kn=function(){var t=nt.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function jn(n){if(Array.isArray(n))return n}function Bn(n,t){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var o,e,u,l,i=[],a=!0,s=!1;try{if(u=(r=r.call(n)).next,t===0){if(Object(r)!==r)return;a=!1}else for(;!(a=(o=u.call(r)).done)&&(i.push(o.value),i.length!==t);a=!0);}catch(c){s=!0,e=c}finally{try{if(!a&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw e}}return i}}function $n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function me(n,t){return jn(n)||Bn(n,t)||kt(n,t)||$n()}function ve(n,t){if(n==null)return{};var r=Ln(n,t),o,e;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(e=0;e<u.length;e++)o=u[e],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(r[o]=n[o])}return r}var Hn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function zn(n){var t=n.defaultInputValue,r=t===void 0?"":t,o=n.defaultMenuIsOpen,e=o===void 0?!1:o,u=n.defaultValue,l=u===void 0?null:u,i=n.inputValue,a=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,g=n.onMenuOpen,f=n.value,m=ve(n,Hn),h=C.useState(i!==void 0?i:r),v=me(h,2),p=v[0],x=v[1],y=C.useState(a!==void 0?a:e),b=me(y,2),M=b[0],F=b[1],P=C.useState(f!==void 0?f:l),E=me(P,2),w=E[0],R=E[1],k=C.useCallback(function(ae,ue){typeof s=="function"&&s(ae,ue),R(ae)},[s]),V=C.useCallback(function(ae,ue){var se;typeof c=="function"&&(se=c(ae,ue)),x(se!==void 0?se:ae)},[c]),I=C.useCallback(function(){typeof g=="function"&&g(),F(!0)},[g]),U=C.useCallback(function(){typeof d=="function"&&d(),F(!1)},[d]),G=i!==void 0?i:p,q=a!==void 0?a:M,oe=f!==void 0?f:w;return T(T({},m),{},{inputValue:G,menuIsOpen:q,onChange:k,onInputChange:V,onMenuClose:U,onMenuOpen:I,value:oe})}function Un(n){if(Array.isArray(n))return wn(n)}function Nn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Wn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jt(n){return Un(n)||Nn(n)||kt(n)||Wn()}function Yn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const Qn=Math.min,Gn=Math.max,Ae=Math.round,Oe=Math.floor,Ie=n=>({x:n,y:n});function Kn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function Bt(n){return Ht(n)?(n.nodeName||"").toLowerCase():"#document"}function fe(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function $t(n){var t;return(t=(Ht(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function Ht(n){return n instanceof Node||n instanceof fe(n).Node}function Xe(n){return n instanceof Element||n instanceof fe(n).Element}function rt(n){return n instanceof HTMLElement||n instanceof fe(n).HTMLElement}function ct(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof fe(n).ShadowRoot}function zt(n){const{overflow:t,overflowX:r,overflowY:o,display:e}=it(n);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!["inline","contents"].includes(e)}function Xn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function qn(n){return["html","body","#document"].includes(Bt(n))}function it(n){return fe(n).getComputedStyle(n)}function Jn(n){if(Bt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||ct(n)&&n.host||$t(n);return ct(t)?t.host:t}function Ut(n){const t=Jn(n);return qn(t)?n.ownerDocument?n.ownerDocument.body:n.body:rt(t)&&zt(t)?t:Ut(t)}function Re(n,t,r){var o;t===void 0&&(t=[]),r===void 0&&(r=!0);const e=Ut(n),u=e===((o=n.ownerDocument)==null?void 0:o.body),l=fe(e);return u?t.concat(l,l.visualViewport||[],zt(e)?e:[],l.frameElement&&r?Re(l.frameElement):[]):t.concat(e,Re(e,[],r))}function Zn(n){const t=it(n);let r=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const e=rt(n),u=e?n.offsetWidth:r,l=e?n.offsetHeight:o,i=Ae(r)!==u||Ae(o)!==l;return i&&(r=u,o=l),{width:r,height:o,$:i}}function ot(n){return Xe(n)?n:n.contextElement}function ke(n){const t=ot(n);if(!rt(t))return Ie(1);const r=t.getBoundingClientRect(),{width:o,height:e,$:u}=Zn(t);let l=(u?Ae(r.width):r.width)/o,i=(u?Ae(r.height):r.height)/e;return(!l||!Number.isFinite(l))&&(l=1),(!i||!Number.isFinite(i))&&(i=1),{x:l,y:i}}const er=Ie(0);function tr(n){const t=fe(n);return!Xn()||!t.visualViewport?er:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function nr(n,t,r){return t===void 0&&(t=!1),!r||t&&r!==fe(n)?!1:t}function dt(n,t,r,o){t===void 0&&(t=!1),r===void 0&&(r=!1);const e=n.getBoundingClientRect(),u=ot(n);let l=Ie(1);t&&(o?Xe(o)&&(l=ke(o)):l=ke(n));const i=nr(u,r,o)?tr(u):Ie(0);let a=(e.left+i.x)/l.x,s=(e.top+i.y)/l.y,c=e.width/l.x,d=e.height/l.y;if(u){const g=fe(u),f=o&&Xe(o)?fe(o):o;let m=g.frameElement;for(;m&&o&&f!==g;){const h=ke(m),v=m.getBoundingClientRect(),p=it(m),x=v.left+(m.clientLeft+parseFloat(p.paddingLeft))*h.x,y=v.top+(m.clientTop+parseFloat(p.paddingTop))*h.y;a*=h.x,s*=h.y,c*=h.x,d*=h.y,a+=x,s+=y,m=fe(m).frameElement}}return Kn({width:c,height:d,x:a,y:s})}function rr(n,t){let r=null,o;const e=$t(n);function u(){clearTimeout(o),r&&r.disconnect(),r=null}function l(i,a){i===void 0&&(i=!1),a===void 0&&(a=1),u();const{left:s,top:c,width:d,height:g}=n.getBoundingClientRect();if(i||t(),!d||!g)return;const f=Oe(c),m=Oe(e.clientWidth-(s+d)),h=Oe(e.clientHeight-(c+g)),v=Oe(s),x={rootMargin:-f+"px "+-m+"px "+-h+"px "+-v+"px",threshold:Gn(0,Qn(1,a))||1};let y=!0;function b(M){const F=M[0].intersectionRatio;if(F!==a){if(!y)return l();F?l(!1,F):o=setTimeout(()=>{l(!1,1e-7)},100)}y=!1}try{r=new IntersectionObserver(b,{...x,root:e.ownerDocument})}catch{r=new IntersectionObserver(b,x)}r.observe(n)}return l(!0),u}function ir(n,t,r,o){o===void 0&&(o={});const{ancestorScroll:e=!0,ancestorResize:u=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,s=ot(n),c=e||u?[...s?Re(s):[],...Re(t)]:[];c.forEach(p=>{e&&p.addEventListener("scroll",r,{passive:!0}),u&&p.addEventListener("resize",r)});const d=s&&i?rr(s,r):null;let g=-1,f=null;l&&(f=new ResizeObserver(p=>{let[x]=p;x&&x.target===s&&f&&(f.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{f&&f.observe(t)})),r()}),s&&!a&&f.observe(s),f.observe(t));let m,h=a?dt(n):null;a&&v();function v(){const p=dt(n);h&&(p.x!==h.x||p.y!==h.y||p.width!==h.width||p.height!==h.height)&&r(),h=p,m=requestAnimationFrame(v)}return r(),()=>{c.forEach(p=>{e&&p.removeEventListener("scroll",r),u&&p.removeEventListener("resize",r)}),d&&d(),f&&f.disconnect(),f=null,a&&cancelAnimationFrame(m)}}var qe=C.useLayoutEffect,or=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Te=function(){};function ar(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function ur(n,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),e=2;e<r;e++)o[e-2]=arguments[e];var u=[].concat(o);if(t&&n)for(var l in t)t.hasOwnProperty(l)&&t[l]&&u.push("".concat(ar(n,l)));return u.filter(function(i){return i}).map(function(i){return String(i).trim()}).join(" ")}var ft=function(t){return vr(t)?t.filter(Boolean):mn(t)==="object"&&t!==null?[t]:[]},Nt=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var r=ve(t,or);return T({},r)},X=function(t,r,o){var e=t.cx,u=t.getStyles,l=t.getClassNames,i=t.className;return{css:u(r,t),className:e(o??{},l(r,t),i)}};function Le(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function sr(n){return Le(n)?window.innerHeight:n.clientHeight}function Wt(n){return Le(n)?window.pageYOffset:n.scrollTop}function Ve(n,t){if(Le(n)){window.scrollTo(0,t);return}n.scrollTop=t}function lr(n){var t=getComputedStyle(n),r=t.position==="absolute",o=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(r&&t.position==="static")&&o.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function cr(n,t,r,o){return r*((n=n/o-1)*n*n+1)+t}function Fe(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Te,e=Wt(n),u=t-e,l=10,i=0;function a(){i+=l;var s=cr(i,e,u,r);Ve(n,s),i<r?window.requestAnimationFrame(a):o(n)}a()}function pt(n,t){var r=n.getBoundingClientRect(),o=t.getBoundingClientRect(),e=t.offsetHeight/3;o.bottom+e>r.bottom?Ve(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):o.top-e<r.top&&Ve(n,Math.max(t.offsetTop-e,0))}function dr(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function ht(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function fr(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Yt=!1,pr={get passive(){return Yt=!0}},Me=typeof window<"u"?window:{};Me.addEventListener&&Me.removeEventListener&&(Me.addEventListener("p",Te,pr),Me.removeEventListener("p",Te,!1));var hr=Yt;function mr(n){return n!=null}function vr(n){return Array.isArray(n)}function Pe(n,t,r){return n?t:r}var gr=function(t){for(var r=arguments.length,o=new Array(r>1?r-1:0),e=1;e<r;e++)o[e-1]=arguments[e];var u=Object.entries(t).filter(function(l){var i=me(l,1),a=i[0];return!o.includes(a)});return u.reduce(function(l,i){var a=me(i,2),s=a[0],c=a[1];return l[s]=c,l},{})},br=["children","innerProps"],xr=["children","innerProps"];function Er(n){var t=n.maxHeight,r=n.menuEl,o=n.minHeight,e=n.placement,u=n.shouldScroll,l=n.isFixedPosition,i=n.controlHeight,a=lr(r),s={placement:"bottom",maxHeight:t};if(!r||!r.offsetParent)return s;var c=a.getBoundingClientRect(),d=c.height,g=r.getBoundingClientRect(),f=g.bottom,m=g.height,h=g.top,v=r.offsetParent.getBoundingClientRect(),p=v.top,x=l?window.innerHeight:sr(a),y=Wt(a),b=parseInt(getComputedStyle(r).marginBottom,10),M=parseInt(getComputedStyle(r).marginTop,10),F=p-M,P=x-h,E=F+y,w=d-y-h,R=f-x+y+b,k=y+h-M,V=160;switch(e){case"auto":case"bottom":if(P>=m)return{placement:"bottom",maxHeight:t};if(w>=m&&!l)return u&&Fe(a,R,V),{placement:"bottom",maxHeight:t};if(!l&&w>=o||l&&P>=o){u&&Fe(a,R,V);var I=l?P-b:w-b;return{placement:"bottom",maxHeight:I}}if(e==="auto"||l){var U=t,G=l?F:E;return G>=o&&(U=Math.min(G-b-i,t)),{placement:"top",maxHeight:U}}if(e==="bottom")return u&&Ve(a,R),{placement:"bottom",maxHeight:t};break;case"top":if(F>=m)return{placement:"top",maxHeight:t};if(E>=m&&!l)return u&&Fe(a,k,V),{placement:"top",maxHeight:t};if(!l&&E>=o||l&&F>=o){var q=t;return(!l&&E>=o||l&&F>=o)&&(q=l?F-M:E-M),u&&Fe(a,k,V),{placement:"top",maxHeight:q}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return s}function yr(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var Qt=function(t){return t==="auto"?"bottom":t},Cr=function(t,r){var o,e=t.placement,u=t.theme,l=u.borderRadius,i=u.spacing,a=u.colors;return T((o={label:"menu"},Se(o,yr(e),"100%"),Se(o,"position","absolute"),Se(o,"width","100%"),Se(o,"zIndex",1),o),r?{}:{backgroundColor:a.neutral0,borderRadius:l,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:i.menuGutter,marginTop:i.menuGutter})},Gt=C.createContext(null),Sr=function(t){var r=t.children,o=t.minMenuHeight,e=t.maxMenuHeight,u=t.menuPlacement,l=t.menuPosition,i=t.menuShouldScrollIntoView,a=t.theme,s=C.useContext(Gt)||{},c=s.setPortalPlacement,d=C.useRef(null),g=C.useState(e),f=me(g,2),m=f[0],h=f[1],v=C.useState(null),p=me(v,2),x=p[0],y=p[1],b=a.spacing.controlHeight;return qe(function(){var M=d.current;if(M){var F=l==="fixed",P=i&&!F,E=Er({maxHeight:e,menuEl:M,minHeight:o,placement:u,shouldScroll:P,isFixedPosition:F,controlHeight:b});h(E.maxHeight),y(E.placement),c==null||c(E.placement)}},[e,u,l,i,o,c,b]),r({ref:d,placerProps:T(T({},t),{},{placement:x||Qt(u),maxHeight:m})})},wr=function(t){var r=t.children,o=t.innerRef,e=t.innerProps;return _("div",L({},X(t,"menu",{menu:!0}),{ref:o},e),r)},Or=wr,Fr=function(t,r){var o=t.maxHeight,e=t.theme.spacing.baseUnit;return T({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:e,paddingTop:e})},Mr=function(t){var r=t.children,o=t.innerProps,e=t.innerRef,u=t.isMulti;return _("div",L({},X(t,"menuList",{"menu-list":!0,"menu-list--is-multi":u}),{ref:e},o),r)},Kt=function(t,r){var o=t.theme,e=o.spacing.baseUnit,u=o.colors;return T({textAlign:"center"},r?{}:{color:u.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},Pr=Kt,Dr=Kt,Ar=function(t){var r=t.children,o=r===void 0?"No options":r,e=t.innerProps,u=ve(t,br);return _("div",L({},X(T(T({},u),{},{children:o,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),o)},Ir=function(t){var r=t.children,o=r===void 0?"Loading...":r,e=t.innerProps,u=ve(t,xr);return _("div",L({},X(T(T({},u),{},{children:o,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),o)},Rr=function(t){var r=t.rect,o=t.offset,e=t.position;return{left:r.left,position:e,top:o,width:r.width,zIndex:1}},Tr=function(t){var r=t.appendTo,o=t.children,e=t.controlElement,u=t.innerProps,l=t.menuPlacement,i=t.menuPosition,a=C.useRef(null),s=C.useRef(null),c=C.useState(Qt(l)),d=me(c,2),g=d[0],f=d[1],m=C.useMemo(function(){return{setPortalPlacement:f}},[]),h=C.useState(null),v=me(h,2),p=v[0],x=v[1],y=C.useCallback(function(){if(e){var P=dr(e),E=i==="fixed"?0:window.pageYOffset,w=P[g]+E;(w!==(p==null?void 0:p.offset)||P.left!==(p==null?void 0:p.rect.left)||P.width!==(p==null?void 0:p.rect.width))&&x({offset:w,rect:P})}},[e,i,g,p==null?void 0:p.offset,p==null?void 0:p.rect.left,p==null?void 0:p.rect.width]);qe(function(){y()},[y]);var b=C.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),e&&a.current&&(s.current=ir(e,a.current,y,{elementResize:"ResizeObserver"in window}))},[e,y]);qe(function(){b()},[b]);var M=C.useCallback(function(P){a.current=P,b()},[b]);if(!r&&i!=="fixed"||!p)return null;var F=_("div",L({ref:M},X(T(T({},t),{},{offset:p.offset,position:i,rect:p.rect}),"menuPortal",{"menu-portal":!0}),u),o);return _(Gt.Provider,{value:m},r?vn.createPortal(F,r):F)},Vr=function(t){var r=t.isDisabled,o=t.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},_r=function(t){var r=t.children,o=t.innerProps,e=t.isDisabled,u=t.isRtl;return _("div",L({},X(t,"container",{"--is-disabled":e,"--is-rtl":u}),o),r)},Lr=function(t,r){var o=t.theme.spacing,e=t.isMulti,u=t.hasValue,l=t.selectProps.controlShouldRenderValue;return T({alignItems:"center",display:e&&u&&l?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},kr=function(t){var r=t.children,o=t.innerProps,e=t.isMulti,u=t.hasValue;return _("div",L({},X(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":u}),o),r)},jr=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Br=function(t){var r=t.children,o=t.innerProps;return _("div",L({},X(t,"indicatorsContainer",{indicators:!0}),o),r)},mt,$r=["size"],Hr=["innerProps","isRtl","size"],zr={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Xt=function(t){var r=t.size,o=ve(t,$r);return _("svg",L({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:zr},o))},at=function(t){return _(Xt,L({size:20},t),_("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},qt=function(t){return _(Xt,L({size:20},t),_("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Jt=function(t,r){var o=t.isFocused,e=t.theme,u=e.spacing.baseUnit,l=e.colors;return T({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:o?l.neutral60:l.neutral20,padding:u*2,":hover":{color:o?l.neutral80:l.neutral40}})},Ur=Jt,Nr=function(t){var r=t.children,o=t.innerProps;return _("div",L({},X(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),r||_(qt,null))},Wr=Jt,Yr=function(t){var r=t.children,o=t.innerProps;return _("div",L({},X(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),r||_(at,null))},Qr=function(t,r){var o=t.isDisabled,e=t.theme,u=e.spacing.baseUnit,l=e.colors;return T({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:o?l.neutral10:l.neutral20,marginBottom:u*2,marginTop:u*2})},Gr=function(t){var r=t.innerProps;return _("span",L({},r,X(t,"indicatorSeparator",{"indicator-separator":!0})))},Kr=kn(mt||(mt=Yn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Xr=function(t,r){var o=t.isFocused,e=t.size,u=t.theme,l=u.colors,i=u.spacing.baseUnit;return T({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},r?{}:{color:o?l.neutral60:l.neutral20,padding:i*2})},je=function(t){var r=t.delay,o=t.offset;return _("span",{css:nt({animation:"".concat(Kr," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},qr=function(t){var r=t.innerProps,o=t.isRtl,e=t.size,u=e===void 0?4:e,l=ve(t,Hr);return _("div",L({},X(T(T({},l),{},{innerProps:r,isRtl:o,size:u}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),_(je,{delay:0,offset:o}),_(je,{delay:160,offset:!0}),_(je,{delay:320,offset:!o}))},Jr=function(t,r){var o=t.isDisabled,e=t.isFocused,u=t.theme,l=u.colors,i=u.borderRadius,a=u.spacing;return T({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:o?l.neutral5:l.neutral0,borderColor:o?l.neutral10:e?l.primary:l.neutral20,borderRadius:i,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(l.primary):void 0,"&:hover":{borderColor:e?l.primary:l.neutral30}})},Zr=function(t){var r=t.children,o=t.isDisabled,e=t.isFocused,u=t.innerRef,l=t.innerProps,i=t.menuIsOpen;return _("div",L({ref:u},X(t,"control",{control:!0,"control--is-disabled":o,"control--is-focused":e,"control--menu-is-open":i}),l,{"aria-disabled":o||void 0}),r)},ei=Zr,ti=["data"],ni=function(t,r){var o=t.theme.spacing;return r?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},ri=function(t){var r=t.children,o=t.cx,e=t.getStyles,u=t.getClassNames,l=t.Heading,i=t.headingProps,a=t.innerProps,s=t.label,c=t.theme,d=t.selectProps;return _("div",L({},X(t,"group",{group:!0}),a),_(l,L({},i,{selectProps:d,theme:c,getStyles:e,getClassNames:u,cx:o}),s),_("div",null,r))},ii=function(t,r){var o=t.theme,e=o.colors,u=o.spacing;return T({label:"group",cursor:"default",display:"block"},r?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:u.baseUnit*3,paddingRight:u.baseUnit*3,textTransform:"uppercase"})},oi=function(t){var r=Nt(t);r.data;var o=ve(r,ti);return _("div",L({},X(t,"groupHeading",{"group-heading":!0}),o))},ai=ri,ui=["innerRef","isDisabled","isHidden","inputClassName"],si=function(t,r){var o=t.isDisabled,e=t.value,u=t.theme,l=u.spacing,i=u.colors;return T(T({visibility:o?"hidden":"visible",transform:e?"translateZ(0)":""},li),r?{}:{margin:l.baseUnit/2,paddingBottom:l.baseUnit/2,paddingTop:l.baseUnit/2,color:i.neutral80})},Zt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},li={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":T({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Zt)},ci=function(t){return T({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Zt)},di=function(t){var r=t.cx,o=t.value,e=Nt(t),u=e.innerRef,l=e.isDisabled,i=e.isHidden,a=e.inputClassName,s=ve(e,ui);return _("div",L({},X(t,"input",{"input-container":!0}),{"data-value":o||""}),_("input",L({className:r({input:!0},a),ref:u,style:ci(i),disabled:l},s)))},fi=di,pi=function(t,r){var o=t.theme,e=o.spacing,u=o.borderRadius,l=o.colors;return T({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:l.neutral10,borderRadius:u/2,margin:e.baseUnit/2})},hi=function(t,r){var o=t.theme,e=o.borderRadius,u=o.colors,l=t.cropWithEllipsis;return T({overflow:"hidden",textOverflow:l||l===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:e/2,color:u.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},mi=function(t,r){var o=t.theme,e=o.spacing,u=o.borderRadius,l=o.colors,i=t.isFocused;return T({alignItems:"center",display:"flex"},r?{}:{borderRadius:u/2,backgroundColor:i?l.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:l.dangerLight,color:l.danger}})},en=function(t){var r=t.children,o=t.innerProps;return _("div",o,r)},vi=en,gi=en;function bi(n){var t=n.children,r=n.innerProps;return _("div",L({role:"button"},r),t||_(at,{size:14}))}var xi=function(t){var r=t.children,o=t.components,e=t.data,u=t.innerProps,l=t.isDisabled,i=t.removeProps,a=t.selectProps,s=o.Container,c=o.Label,d=o.Remove;return _(s,{data:e,innerProps:T(T({},X(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":l})),u),selectProps:a},_(c,{data:e,innerProps:T({},X(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},r),_(d,{data:e,innerProps:T(T({},X(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},i),selectProps:a}))},Ei=xi,yi=function(t,r){var o=t.isDisabled,e=t.isFocused,u=t.isSelected,l=t.theme,i=l.spacing,a=l.colors;return T({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:u?a.primary:e?a.primary25:"transparent",color:o?a.neutral20:u?a.neutral0:"inherit",padding:"".concat(i.baseUnit*2,"px ").concat(i.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:u?a.primary:a.primary50}})},Ci=function(t){var r=t.children,o=t.isDisabled,e=t.isFocused,u=t.isSelected,l=t.innerRef,i=t.innerProps;return _("div",L({},X(t,"option",{option:!0,"option--is-disabled":o,"option--is-focused":e,"option--is-selected":u}),{ref:l,"aria-disabled":o},i),r)},Si=Ci,wi=function(t,r){var o=t.theme,e=o.spacing,u=o.colors;return T({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:u.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},Oi=function(t){var r=t.children,o=t.innerProps;return _("div",L({},X(t,"placeholder",{placeholder:!0}),o),r)},Fi=Oi,Mi=function(t,r){var o=t.isDisabled,e=t.theme,u=e.spacing,l=e.colors;return T({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:o?l.neutral40:l.neutral80,marginLeft:u.baseUnit/2,marginRight:u.baseUnit/2})},Pi=function(t){var r=t.children,o=t.isDisabled,e=t.innerProps;return _("div",L({},X(t,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),e),r)},Di=Pi,Ai={ClearIndicator:Yr,Control:ei,DropdownIndicator:Nr,DownChevron:qt,CrossIcon:at,Group:ai,GroupHeading:oi,IndicatorsContainer:Br,IndicatorSeparator:Gr,Input:fi,LoadingIndicator:qr,Menu:Or,MenuList:Mr,MenuPortal:Tr,LoadingMessage:Ir,NoOptionsMessage:Ar,MultiValue:Ei,MultiValueContainer:vi,MultiValueLabel:gi,MultiValueRemove:bi,Option:Si,Placeholder:Fi,SelectContainer:_r,SingleValue:Di,ValueContainer:kr},Ii=function(t){return T(T({},Ai),t.components)},vt=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Ri(n,t){return!!(n===t||vt(n)&&vt(t))}function Ti(n,t){if(n.length!==t.length)return!1;for(var r=0;r<n.length;r++)if(!Ri(n[r],t[r]))return!1;return!0}function Vi(n,t){t===void 0&&(t=Ti);var r=null;function o(){for(var e=[],u=0;u<arguments.length;u++)e[u]=arguments[u];if(r&&r.lastThis===this&&t(e,r.lastArgs))return r.lastResult;var l=n.apply(this,e);return r={lastResult:l,lastArgs:e,lastThis:this},l}return o.clear=function(){r=null},o}var _i={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Li=function(t){return _("span",L({css:_i},t))},gt=Li,ki={guidance:function(t){var r=t.isSearchable,o=t.isMulti,e=t.isDisabled,u=t.tabSelectsValue,l=t.context;switch(l){case"menu":return"Use Up and Down to choose options".concat(e?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(u?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(t["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var r=t.action,o=t.label,e=o===void 0?"":o,u=t.labels,l=t.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(u.length>1?"s":""," ").concat(u.join(","),", selected.");case"select-option":return l?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var r=t.context,o=t.focused,e=t.options,u=t.label,l=u===void 0?"":u,i=t.selectValue,a=t.isDisabled,s=t.isSelected,c=function(m,h){return m&&m.length?"".concat(m.indexOf(h)+1," of ").concat(m.length):""};if(r==="value"&&i)return"value ".concat(l," focused, ").concat(c(i,o),".");if(r==="menu"){var d=a?" disabled":"",g="".concat(s?"selected":"focused").concat(d);return"option ".concat(l," ").concat(g,", ").concat(c(e,o),".")}return""},onFilter:function(t){var r=t.inputValue,o=t.resultsMessage;return"".concat(o).concat(r?" for search term "+r:"",".")}},ji=function(t){var r=t.ariaSelection,o=t.focusedOption,e=t.focusedValue,u=t.focusableOptions,l=t.isFocused,i=t.selectValue,a=t.selectProps,s=t.id,c=a.ariaLiveMessages,d=a.getOptionLabel,g=a.inputValue,f=a.isMulti,m=a.isOptionDisabled,h=a.isSearchable,v=a.menuIsOpen,p=a.options,x=a.screenReaderStatus,y=a.tabSelectsValue,b=a["aria-label"],M=a["aria-live"],F=C.useMemo(function(){return T(T({},ki),c||{})},[c]),P=C.useMemo(function(){var U="";if(r&&F.onChange){var G=r.option,q=r.options,oe=r.removedValue,ae=r.removedValues,ue=r.value,se=function(ee){return Array.isArray(ee)?null:ee},le=oe||G||se(ue),Z=le?d(le):"",te=q||ae||void 0,ie=te?te.map(d):[],ce=T({isDisabled:le&&m(le,i),label:Z,labels:ie},r);U=F.onChange(ce)}return U},[r,F,m,i,d]),E=C.useMemo(function(){var U="",G=o||e,q=!!(o&&i&&i.includes(o));if(G&&F.onFocus){var oe={focused:G,label:d(G),isDisabled:m(G,i),isSelected:q,options:u,context:G===o?"menu":"value",selectValue:i};U=F.onFocus(oe)}return U},[o,e,d,m,F,u,i]),w=C.useMemo(function(){var U="";if(v&&p.length&&F.onFilter){var G=x({count:u.length});U=F.onFilter({inputValue:g,resultsMessage:G})}return U},[u,g,v,F,p,x]),R=C.useMemo(function(){var U="";if(F.guidance){var G=e?"value":v?"menu":"input";U=F.guidance({"aria-label":b,context:G,isDisabled:o&&m(o,i),isMulti:f,isSearchable:h,tabSelectsValue:y})}return U},[b,o,e,f,m,h,v,F,i,y]),k="".concat(E," ").concat(w," ").concat(R),V=_(C.Fragment,null,_("span",{id:"aria-selection"},P),_("span",{id:"aria-context"},k)),I=(r==null?void 0:r.action)==="initial-input-focus";return _(C.Fragment,null,_(gt,{id:s},I&&V),_(gt,{"aria-live":M,"aria-atomic":"false","aria-relevant":"additions text"},l&&!I&&V))},Bi=ji,Je=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],$i=new RegExp("["+Je.map(function(n){return n.letters}).join("")+"]","g"),tn={};for(var Be=0;Be<Je.length;Be++)for(var $e=Je[Be],He=0;He<$e.letters.length;He++)tn[$e.letters[He]]=$e.base;var nn=function(t){return t.replace($i,function(r){return tn[r]})},Hi=Vi(nn),bt=function(t){return t.replace(/^\s+|\s+$/g,"")},zi=function(t){return"".concat(t.label," ").concat(t.value)},Ui=function(t){return function(r,o){if(r.data.__isNew__)return!0;var e=T({ignoreCase:!0,ignoreAccents:!0,stringify:zi,trim:!0,matchFrom:"any"},t),u=e.ignoreCase,l=e.ignoreAccents,i=e.stringify,a=e.trim,s=e.matchFrom,c=a?bt(o):o,d=a?bt(i(r)):i(r);return u&&(c=c.toLowerCase(),d=d.toLowerCase()),l&&(c=Hi(c),d=nn(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Ni=["innerRef"];function Wi(n){var t=n.innerRef,r=ve(n,Ni),o=gr(r,"onExited","in","enter","exit","appear");return _("input",L({ref:t},o,{css:nt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Yi=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function Qi(n){var t=n.isEnabled,r=n.onBottomArrive,o=n.onBottomLeave,e=n.onTopArrive,u=n.onTopLeave,l=C.useRef(!1),i=C.useRef(!1),a=C.useRef(0),s=C.useRef(null),c=C.useCallback(function(v,p){if(s.current!==null){var x=s.current,y=x.scrollTop,b=x.scrollHeight,M=x.clientHeight,F=s.current,P=p>0,E=b-M-y,w=!1;E>p&&l.current&&(o&&o(v),l.current=!1),P&&i.current&&(u&&u(v),i.current=!1),P&&p>E?(r&&!l.current&&r(v),F.scrollTop=b,w=!0,l.current=!0):!P&&-p>y&&(e&&!i.current&&e(v),F.scrollTop=0,w=!0,i.current=!0),w&&Yi(v)}},[r,o,e,u]),d=C.useCallback(function(v){c(v,v.deltaY)},[c]),g=C.useCallback(function(v){a.current=v.changedTouches[0].clientY},[]),f=C.useCallback(function(v){var p=a.current-v.changedTouches[0].clientY;c(v,p)},[c]),m=C.useCallback(function(v){if(v){var p=hr?{passive:!1}:!1;v.addEventListener("wheel",d,p),v.addEventListener("touchstart",g,p),v.addEventListener("touchmove",f,p)}},[f,g,d]),h=C.useCallback(function(v){v&&(v.removeEventListener("wheel",d,!1),v.removeEventListener("touchstart",g,!1),v.removeEventListener("touchmove",f,!1))},[f,g,d]);return C.useEffect(function(){if(t){var v=s.current;return m(v),function(){h(v)}}},[t,m,h]),function(v){s.current=v}}var xt=["boxSizing","height","overflow","paddingRight","position"],Et={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function yt(n){n.preventDefault()}function Ct(n){n.stopPropagation()}function St(){var n=this.scrollTop,t=this.scrollHeight,r=n+this.offsetHeight;n===0?this.scrollTop=1:r===t&&(this.scrollTop=n-1)}function wt(){return"ontouchstart"in window||navigator.maxTouchPoints}var Ot=!!(typeof window<"u"&&window.document&&window.document.createElement),ye=0,Ee={capture:!1,passive:!1};function Gi(n){var t=n.isEnabled,r=n.accountForScrollbars,o=r===void 0?!0:r,e=C.useRef({}),u=C.useRef(null),l=C.useCallback(function(a){if(Ot){var s=document.body,c=s&&s.style;if(o&&xt.forEach(function(m){var h=c&&c[m];e.current[m]=h}),o&&ye<1){var d=parseInt(e.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,f=window.innerWidth-g+d||0;Object.keys(Et).forEach(function(m){var h=Et[m];c&&(c[m]=h)}),c&&(c.paddingRight="".concat(f,"px"))}s&&wt()&&(s.addEventListener("touchmove",yt,Ee),a&&(a.addEventListener("touchstart",St,Ee),a.addEventListener("touchmove",Ct,Ee))),ye+=1}},[o]),i=C.useCallback(function(a){if(Ot){var s=document.body,c=s&&s.style;ye=Math.max(ye-1,0),o&&ye<1&&xt.forEach(function(d){var g=e.current[d];c&&(c[d]=g)}),s&&wt()&&(s.removeEventListener("touchmove",yt,Ee),a&&(a.removeEventListener("touchstart",St,Ee),a.removeEventListener("touchmove",Ct,Ee)))}},[o]);return C.useEffect(function(){if(t){var a=u.current;return l(a),function(){i(a)}}},[t,l,i]),function(a){u.current=a}}var Ki=function(t){var r=t.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},Xi={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function qi(n){var t=n.children,r=n.lockEnabled,o=n.captureEnabled,e=o===void 0?!0:o,u=n.onBottomArrive,l=n.onBottomLeave,i=n.onTopArrive,a=n.onTopLeave,s=Qi({isEnabled:e,onBottomArrive:u,onBottomLeave:l,onTopArrive:i,onTopLeave:a}),c=Gi({isEnabled:r}),d=function(f){s(f),c(f)};return _(C.Fragment,null,r&&_("div",{onClick:Ki,css:Xi}),t(d))}var Ji={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Zi=function(t){var r=t.name,o=t.onFocus;return _("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:Ji,value:"",onChange:function(){}})},eo=Zi,to=function(t){return t.label},no=function(t){return t.label},ro=function(t){return t.value},io=function(t){return!!t.isDisabled},oo={clearIndicator:Wr,container:Vr,control:Jr,dropdownIndicator:Ur,group:ni,groupHeading:ii,indicatorsContainer:jr,indicatorSeparator:Qr,input:si,loadingIndicator:Xr,loadingMessage:Dr,menu:Cr,menuList:Fr,menuPortal:Rr,multiValue:pi,multiValueLabel:hi,multiValueRemove:mi,noOptionsMessage:Pr,option:yi,placeholder:wi,singleValue:Mi,valueContainer:Lr},ao={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},uo=4,rn=4,so=38,lo=rn*2,co={baseUnit:rn,controlHeight:so,menuGutter:lo},ze={borderRadius:uo,colors:ao,spacing:co},fo={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:ht(),captureMenuScroll:!ht(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Ui(),formatGroupLabel:to,getOptionLabel:no,getOptionValue:ro,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:io,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!fr(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var r=t.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Ft(n,t,r,o){var e=sn(n,t,r),u=ln(n,t,r),l=un(n,t),i=_e(n,t);return{type:"option",data:t,isDisabled:e,isSelected:u,label:l,value:i,index:o}}function on(n,t){return n.options.map(function(r,o){if("options"in r){var e=r.options.map(function(l,i){return Ft(n,l,t,i)}).filter(function(l){return Mt(n,l)});return e.length>0?{type:"group",data:r,options:e,index:o}:void 0}var u=Ft(n,r,t,o);return Mt(n,u)?u:void 0}).filter(mr)}function an(n){return n.reduce(function(t,r){return r.type==="group"?t.push.apply(t,jt(r.options.map(function(o){return o.data}))):t.push(r.data),t},[])}function po(n,t){return an(on(n,t))}function Mt(n,t){var r=n.inputValue,o=r===void 0?"":r,e=t.data,u=t.isSelected,l=t.label,i=t.value;return(!dn(n)||!u)&&cn(n,{label:l,value:i,data:e},o)}function ho(n,t){var r=n.focusedValue,o=n.selectValue,e=o.indexOf(r);if(e>-1){var u=t.indexOf(r);if(u>-1)return r;if(e<t.length)return t[e]}return null}function mo(n,t){var r=n.focusedOption;return r&&t.indexOf(r)>-1?r:t[0]}var un=function(t,r){return t.getOptionLabel(r)},_e=function(t,r){return t.getOptionValue(r)};function sn(n,t,r){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,r):!1}function ln(n,t,r){if(r.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,r);var o=_e(n,t);return r.some(function(e){return _e(n,e)===o})}function cn(n,t,r){return n.filterOption?n.filterOption(t,r):!0}var dn=function(t){var r=t.hideSelectedOptions,o=t.isMulti;return r===void 0?o:r},vo=1,fn=function(n){On(r,n);var t=Fn(r);function r(o){var e;if(Mn(this,r),e=t.call(this,o),e.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.instancePrefix="",e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.controlRef=null,e.getControlRef=function(i){e.controlRef=i},e.focusedOptionRef=null,e.getFocusedOptionRef=function(i){e.focusedOptionRef=i},e.menuListRef=null,e.getMenuListRef=function(i){e.menuListRef=i},e.inputRef=null,e.getInputRef=function(i){e.inputRef=i},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(i,a){var s=e.props,c=s.onChange,d=s.name;a.name=d,e.ariaOnChange(i,a),c(i,a)},e.setValue=function(i,a,s){var c=e.props,d=c.closeMenuOnSelect,g=c.isMulti,f=c.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:f}),d&&(e.setState({inputIsHiddenAfterUpdate:!g}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(i,{action:a,option:s})},e.selectOption=function(i){var a=e.props,s=a.blurInputOnSelect,c=a.isMulti,d=a.name,g=e.state.selectValue,f=c&&e.isOptionSelected(i,g),m=e.isOptionDisabled(i,g);if(f){var h=e.getOptionValue(i);e.setValue(g.filter(function(v){return e.getOptionValue(v)!==h}),"deselect-option",i)}else if(!m)c?e.setValue([].concat(jt(g),[i]),"select-option",i):e.setValue(i,"select-option");else{e.ariaOnChange(i,{action:"select-option",option:i,name:d});return}s&&e.blurInput()},e.removeValue=function(i){var a=e.props.isMulti,s=e.state.selectValue,c=e.getOptionValue(i),d=s.filter(function(f){return e.getOptionValue(f)!==c}),g=Pe(a,d,d[0]||null);e.onChange(g,{action:"remove-value",removedValue:i}),e.focusInput()},e.clearValue=function(){var i=e.state.selectValue;e.onChange(Pe(e.props.isMulti,[],null),{action:"clear",removedValues:i})},e.popValue=function(){var i=e.props.isMulti,a=e.state.selectValue,s=a[a.length-1],c=a.slice(0,a.length-1),d=Pe(i,c,c[0]||null);e.onChange(d,{action:"pop-value",removedValue:s})},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return ur.apply(void 0,[e.props.classNamePrefix].concat(a))},e.getOptionLabel=function(i){return un(e.props,i)},e.getOptionValue=function(i){return _e(e.props,i)},e.getStyles=function(i,a){var s=e.props.unstyled,c=oo[i](a,s);c.boxSizing="border-box";var d=e.props.styles[i];return d?d(c,a):c},e.getClassNames=function(i,a){var s,c;return(s=(c=e.props.classNames)[i])===null||s===void 0?void 0:s.call(c,a)},e.getElementId=function(i){return"".concat(e.instancePrefix,"-").concat(i)},e.getComponents=function(){return Ii(e.props)},e.buildCategorizedOptions=function(){return on(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return an(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(i,a){e.setState({ariaSelection:T({value:i},a)})},e.onMenuMouseDown=function(i){i.button===0&&(i.stopPropagation(),i.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(i){e.blockOptionHover=!1},e.onControlMouseDown=function(i){if(!i.defaultPrevented){var a=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&e.onMenuClose():a&&e.openMenu("first"):(a&&(e.openAfterFocus=!0),e.focusInput()),i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&i.preventDefault()}},e.onDropdownIndicatorMouseDown=function(i){if(!(i&&i.type==="mousedown"&&i.button!==0)&&!e.props.isDisabled){var a=e.props,s=a.isMulti,c=a.menuIsOpen;e.focusInput(),c?(e.setState({inputIsHiddenAfterUpdate:!s}),e.onMenuClose()):e.openMenu("first"),i.preventDefault()}},e.onClearIndicatorMouseDown=function(i){i&&i.type==="mousedown"&&i.button!==0||(e.clearValue(),i.preventDefault(),e.openAfterFocus=!1,i.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(i){typeof e.props.closeMenuOnScroll=="boolean"?i.target instanceof HTMLElement&&Le(i.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(i)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(i){var a=i.touches,s=a&&a.item(0);s&&(e.initialTouchX=s.clientX,e.initialTouchY=s.clientY,e.userIsDragging=!1)},e.onTouchMove=function(i){var a=i.touches,s=a&&a.item(0);if(s){var c=Math.abs(s.clientX-e.initialTouchX),d=Math.abs(s.clientY-e.initialTouchY),g=5;e.userIsDragging=c>g||d>g}},e.onTouchEnd=function(i){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(i.target)&&e.menuListRef&&!e.menuListRef.contains(i.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(i){e.userIsDragging||e.onControlMouseDown(i)},e.onClearIndicatorTouchEnd=function(i){e.userIsDragging||e.onClearIndicatorMouseDown(i)},e.onDropdownIndicatorTouchEnd=function(i){e.userIsDragging||e.onDropdownIndicatorMouseDown(i)},e.handleInputChange=function(i){var a=e.props.inputValue,s=i.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(s,{action:"input-change",prevInputValue:a}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(i){e.props.onFocus&&e.props.onFocus(i),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(i){var a=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(i),e.onInputChange("",{action:"input-blur",prevInputValue:a}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(i){e.blockOptionHover||e.state.focusedOption===i||e.setState({focusedOption:i})},e.shouldHideSelectedOptions=function(){return dn(e.props)},e.onValueInputFocus=function(i){i.preventDefault(),i.stopPropagation(),e.focus()},e.onKeyDown=function(i){var a=e.props,s=a.isMulti,c=a.backspaceRemovesValue,d=a.escapeClearsValue,g=a.inputValue,f=a.isClearable,m=a.isDisabled,h=a.menuIsOpen,v=a.onKeyDown,p=a.tabSelectsValue,x=a.openMenuOnFocus,y=e.state,b=y.focusedOption,M=y.focusedValue,F=y.selectValue;if(!m&&!(typeof v=="function"&&(v(i),i.defaultPrevented))){switch(e.blockOptionHover=!0,i.key){case"ArrowLeft":if(!s||g)return;e.focusValue("previous");break;case"ArrowRight":if(!s||g)return;e.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(M)e.removeValue(M);else{if(!c)return;s?e.popValue():f&&e.clearValue()}break;case"Tab":if(e.isComposing||i.shiftKey||!h||!p||!b||x&&e.isOptionSelected(b,F))return;e.selectOption(b);break;case"Enter":if(i.keyCode===229)break;if(h){if(!b||e.isComposing)return;e.selectOption(b);break}return;case"Escape":h?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:g}),e.onMenuClose()):f&&d&&e.clearValue();break;case" ":if(g)return;if(!h){e.openMenu("first");break}if(!b)return;e.selectOption(b);break;case"ArrowUp":h?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":h?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!h)return;e.focusOption("pageup");break;case"PageDown":if(!h)return;e.focusOption("pagedown");break;case"Home":if(!h)return;e.focusOption("first");break;case"End":if(!h)return;e.focusOption("last");break;default:return}i.preventDefault()}},e.instancePrefix="react-select-"+(e.props.instanceId||++vo),e.state.selectValue=ft(o.value),o.menuIsOpen&&e.state.selectValue.length){var u=e.buildFocusableOptions(),l=u.indexOf(e.state.selectValue[0]);e.state.focusedOption=u[l]}return e}return Pn(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&pt(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var u=this.props,l=u.isDisabled,i=u.menuIsOpen,a=this.state.isFocused;(a&&!l&&e.isDisabled||a&&i&&!e.menuIsOpen)&&this.focusInput(),a&&l&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!l&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(pt(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,u){this.props.onInputChange(e,u)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var u=this,l=this.state,i=l.selectValue,a=l.isFocused,s=this.buildFocusableOptions(),c=e==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(i[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c]},function(){return u.onMenuOpen()})}},{key:"focusValue",value:function(e){var u=this.state,l=u.selectValue,i=u.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=l.indexOf(i);i||(a=-1);var s=l.length-1,c=-1;if(l.length){switch(e){case"previous":a===0?c=0:a===-1?c=s:c=a-1;break;case"next":a>-1&&a<s&&(c=a+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:l[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",u=this.props.pageSize,l=this.state.focusedOption,i=this.getFocusableOptions();if(i.length){var a=0,s=i.indexOf(l);l||(s=-1),e==="up"?a=s>0?s-1:i.length-1:e==="down"?a=(s+1)%i.length:e==="pageup"?(a=s-u,a<0&&(a=0)):e==="pagedown"?(a=s+u,a>i.length-1&&(a=i.length-1)):e==="last"&&(a=i.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:i[a],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(ze):T(T({},ze),this.props.theme):ze}},{key:"getCommonProps",value:function(){var e=this.clearValue,u=this.cx,l=this.getStyles,i=this.getClassNames,a=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,g=d.isMulti,f=d.isRtl,m=d.options,h=this.hasValue();return{clearValue:e,cx:u,getStyles:l,getClassNames:i,getValue:a,hasValue:h,isMulti:g,isRtl:f,options:m,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,u=e.isClearable,l=e.isMulti;return u===void 0?l:u}},{key:"isOptionDisabled",value:function(e,u){return sn(this.props,e,u)}},{key:"isOptionSelected",value:function(e,u){return ln(this.props,e,u)}},{key:"filterOption",value:function(e,u){return cn(this.props,e,u)}},{key:"formatOptionLabel",value:function(e,u){if(typeof this.props.formatOptionLabel=="function"){var l=this.props.inputValue,i=this.state.selectValue;return this.props.formatOptionLabel(e,{context:u,inputValue:l,selectValue:i})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,u=e.isDisabled,l=e.isSearchable,i=e.inputId,a=e.inputValue,s=e.tabIndex,c=e.form,d=e.menuIsOpen,g=e.required,f=this.getComponents(),m=f.Input,h=this.state,v=h.inputIsHidden,p=h.ariaSelection,x=this.commonProps,y=i||this.getElementId("input"),b=T(T(T({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox"},d&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!l&&{"aria-readonly":!0}),this.hasValue()?(p==null?void 0:p.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return l?C.createElement(m,L({},x,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:u,isHidden:v,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:a},b)):C.createElement(Wi,L({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Te,onFocus:this.onInputFocus,disabled:u,tabIndex:s,inputMode:"none",form:c,value:""},b))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,u=this.getComponents(),l=u.MultiValue,i=u.MultiValueContainer,a=u.MultiValueLabel,s=u.MultiValueRemove,c=u.SingleValue,d=u.Placeholder,g=this.commonProps,f=this.props,m=f.controlShouldRenderValue,h=f.isDisabled,v=f.isMulti,p=f.inputValue,x=f.placeholder,y=this.state,b=y.selectValue,M=y.focusedValue,F=y.isFocused;if(!this.hasValue()||!m)return p?null:C.createElement(d,L({},g,{key:"placeholder",isDisabled:h,isFocused:F,innerProps:{id:this.getElementId("placeholder")}}),x);if(v)return b.map(function(E,w){var R=E===M,k="".concat(e.getOptionLabel(E),"-").concat(e.getOptionValue(E));return C.createElement(l,L({},g,{components:{Container:i,Label:a,Remove:s},isFocused:R,isDisabled:h,key:k,index:w,removeProps:{onClick:function(){return e.removeValue(E)},onTouchEnd:function(){return e.removeValue(E)},onMouseDown:function(I){I.preventDefault()}},data:E}),e.formatOptionLabel(E,"value"))});if(p)return null;var P=b[0];return C.createElement(c,L({},g,{data:P,isDisabled:h}),this.formatOptionLabel(P,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),u=e.ClearIndicator,l=this.commonProps,i=this.props,a=i.isDisabled,s=i.isLoading,c=this.state.isFocused;if(!this.isClearable()||!u||a||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return C.createElement(u,L({},l,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),u=e.LoadingIndicator,l=this.commonProps,i=this.props,a=i.isDisabled,s=i.isLoading,c=this.state.isFocused;if(!u||!s)return null;var d={"aria-hidden":"true"};return C.createElement(u,L({},l,{innerProps:d,isDisabled:a,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),u=e.DropdownIndicator,l=e.IndicatorSeparator;if(!u||!l)return null;var i=this.commonProps,a=this.props.isDisabled,s=this.state.isFocused;return C.createElement(l,L({},i,{isDisabled:a,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),u=e.DropdownIndicator;if(!u)return null;var l=this.commonProps,i=this.props.isDisabled,a=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return C.createElement(u,L({},l,{innerProps:s,isDisabled:i,isFocused:a}))}},{key:"renderMenu",value:function(){var e=this,u=this.getComponents(),l=u.Group,i=u.GroupHeading,a=u.Menu,s=u.MenuList,c=u.MenuPortal,d=u.LoadingMessage,g=u.NoOptionsMessage,f=u.Option,m=this.commonProps,h=this.state.focusedOption,v=this.props,p=v.captureMenuScroll,x=v.inputValue,y=v.isLoading,b=v.loadingMessage,M=v.minMenuHeight,F=v.maxMenuHeight,P=v.menuIsOpen,E=v.menuPlacement,w=v.menuPosition,R=v.menuPortalTarget,k=v.menuShouldBlockScroll,V=v.menuShouldScrollIntoView,I=v.noOptionsMessage,U=v.onMenuScrollToTop,G=v.onMenuScrollToBottom;if(!P)return null;var q=function(te,ie){var ce=te.type,J=te.data,ee=te.isDisabled,pe=te.isSelected,he=te.label,O=te.value,A=h===J,B=ee?void 0:function(){return e.onOptionHover(J)},$=ee?void 0:function(){return e.selectOption(J)},j="".concat(e.getElementId("option"),"-").concat(ie),W={id:j,onClick:$,onMouseMove:B,onMouseOver:B,tabIndex:-1};return C.createElement(f,L({},m,{innerProps:W,data:J,isDisabled:ee,isSelected:pe,key:j,label:he,type:ce,value:O,isFocused:A,innerRef:A?e.getFocusedOptionRef:void 0}),e.formatOptionLabel(te.data,"menu"))},oe;if(this.hasOptions())oe=this.getCategorizedOptions().map(function(Z){if(Z.type==="group"){var te=Z.data,ie=Z.options,ce=Z.index,J="".concat(e.getElementId("group"),"-").concat(ce),ee="".concat(J,"-heading");return C.createElement(l,L({},m,{key:J,data:te,options:ie,Heading:i,headingProps:{id:ee,data:Z.data},label:e.formatGroupLabel(Z.data)}),Z.options.map(function(pe){return q(pe,"".concat(ce,"-").concat(pe.index))}))}else if(Z.type==="option")return q(Z,"".concat(Z.index))});else if(y){var ae=b({inputValue:x});if(ae===null)return null;oe=C.createElement(d,m,ae)}else{var ue=I({inputValue:x});if(ue===null)return null;oe=C.createElement(g,m,ue)}var se={minMenuHeight:M,maxMenuHeight:F,menuPlacement:E,menuPosition:w,menuShouldScrollIntoView:V},le=C.createElement(Sr,L({},m,se),function(Z){var te=Z.ref,ie=Z.placerProps,ce=ie.placement,J=ie.maxHeight;return C.createElement(a,L({},m,se,{innerRef:te,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove,id:e.getElementId("listbox")},isLoading:y,placement:ce}),C.createElement(qi,{captureEnabled:p,onTopArrive:U,onBottomArrive:G,lockEnabled:k},function(ee){return C.createElement(s,L({},m,{innerRef:function(he){e.getMenuListRef(he),ee(he)},isLoading:y,maxHeight:J,focusedOption:h}),oe)}))});return R||w==="fixed"?C.createElement(c,L({},m,{appendTo:R,controlElement:this.controlRef,menuPlacement:E,menuPosition:w}),le):le}},{key:"renderFormField",value:function(){var e=this,u=this.props,l=u.delimiter,i=u.isDisabled,a=u.isMulti,s=u.name,c=u.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!i)return C.createElement(eo,{name:s,onFocus:this.onValueInputFocus});if(!(!s||i))if(a)if(l){var g=d.map(function(h){return e.getOptionValue(h)}).join(l);return C.createElement("input",{name:s,type:"hidden",value:g})}else{var f=d.length>0?d.map(function(h,v){return C.createElement("input",{key:"i-".concat(v),name:s,type:"hidden",value:e.getOptionValue(h)})}):C.createElement("input",{name:s,type:"hidden",value:""});return C.createElement("div",null,f)}else{var m=d[0]?this.getOptionValue(d[0]):"";return C.createElement("input",{name:s,type:"hidden",value:m})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,u=this.state,l=u.ariaSelection,i=u.focusedOption,a=u.focusedValue,s=u.isFocused,c=u.selectValue,d=this.getFocusableOptions();return C.createElement(Bi,L({},e,{id:this.getElementId("live-region"),ariaSelection:l,focusedOption:i,focusedValue:a,isFocused:s,selectValue:c,focusableOptions:d}))}},{key:"render",value:function(){var e=this.getComponents(),u=e.Control,l=e.IndicatorsContainer,i=e.SelectContainer,a=e.ValueContainer,s=this.props,c=s.className,d=s.id,g=s.isDisabled,f=s.menuIsOpen,m=this.state.isFocused,h=this.commonProps=this.getCommonProps();return C.createElement(i,L({},h,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:m}),this.renderLiveRegion(),C.createElement(u,L({},h,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:m,menuIsOpen:f}),C.createElement(a,L({},h,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),C.createElement(l,L({},h,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,u){var l=u.prevProps,i=u.clearFocusValueOnUpdate,a=u.inputIsHiddenAfterUpdate,s=u.ariaSelection,c=u.isFocused,d=u.prevWasFocused,g=e.options,f=e.value,m=e.menuIsOpen,h=e.inputValue,v=e.isMulti,p=ft(f),x={};if(l&&(f!==l.value||g!==l.options||m!==l.menuIsOpen||h!==l.inputValue)){var y=m?po(e,p):[],b=i?ho(u,p):null,M=mo(u,y);x={selectValue:p,focusedOption:M,focusedValue:b,clearFocusValueOnUpdate:!1}}var F=a!=null&&e!==l?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},P=s,E=c&&d;return c&&!E&&(P={value:Pe(v,p,p[0]||null),options:p,action:"initial-input-focus"},E=!d),(s==null?void 0:s.action)==="initial-input-focus"&&(P=null),T(T(T({},x),F),{},{prevProps:e,ariaSelection:P,prevWasFocused:E})}}]),r}(C.Component);fn.defaultProps=fo;var go=C.forwardRef(function(n,t){var r=zn(n);return C.createElement(fn,L({ref:t},r))}),Pt=go,pn={exports:{}};(function(n,t){(function(o,e){n.exports=e(C)})(gn,r=>(()=>{var o={"./node_modules/css-mediaquery/index.js":(i,a)=>{a.match=m,a.parse=h;var s=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,c=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,d=/^(?:(min|max)-)?(.+)/,g=/(em|rem|px|cm|mm|in|pt|pc)?$/,f=/(dpi|dpcm|dppx)?$/;function m(y,b){return h(y).some(function(M){var F=M.inverse,P=M.type==="all"||b.type===M.type;if(P&&F||!(P||F))return!1;var E=M.expressions.every(function(w){var R=w.feature,k=w.modifier,V=w.value,I=b[R];if(!I)return!1;switch(R){case"orientation":case"scan":return I.toLowerCase()===V.toLowerCase();case"width":case"height":case"device-width":case"device-height":V=x(V),I=x(I);break;case"resolution":V=p(V),I=p(I);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":V=v(V),I=v(I);break;case"grid":case"color":case"color-index":case"monochrome":V=parseInt(V,10)||1,I=parseInt(I,10)||0;break}switch(k){case"min":return I>=V;case"max":return I<=V;default:return I===V}});return E&&!F||!E&&F})}function h(y){return y.split(",").map(function(b){b=b.trim();var M=b.match(s),F=M[1],P=M[2],E=M[3]||"",w={};return w.inverse=!!F&&F.toLowerCase()==="not",w.type=P?P.toLowerCase():"all",E=E.match(/\([^\)]+\)/g)||[],w.expressions=E.map(function(R){var k=R.match(c),V=k[1].toLowerCase().match(d);return{modifier:V[1],feature:V[2],value:k[2]}}),w})}function v(y){var b=Number(y),M;return b||(M=y.match(/^(\d+)\s*\/\s*(\d+)$/),b=M[1]/M[2]),b}function p(y){var b=parseFloat(y),M=String(y).match(f)[1];switch(M){case"dpcm":return b/2.54;case"dppx":return b*96;default:return b}}function x(y){var b=parseFloat(y),M=String(y).match(g)[1];switch(M){case"em":return b*16;case"rem":return b*16;case"cm":return b*96/2.54;case"mm":return b*96/2.54/10;case"in":return b*96;case"pt":return b*72;case"pc":return b*72/12;default:return b}}},"./node_modules/hyphenate-style-name/index.js":(i,a,s)=>{s.r(a),s.d(a,{default:()=>h});var c=/[A-Z]/g,d=/^ms-/,g={};function f(v){return"-"+v.toLowerCase()}function m(v){if(g.hasOwnProperty(v))return g[v];var p=v.replace(c,f);return g[v]=d.test(p)?"-"+p:p}const h=m},"./node_modules/matchmediaquery/index.js":(i,a,s)=>{var c=s("./node_modules/css-mediaquery/index.js").match,d=typeof window<"u"?window.matchMedia:null;function g(m,h,v){var p=this;if(d&&!v){var x=d.call(window,m);this.matches=x.matches,this.media=x.media,x.addListener(M)}else this.matches=c(m,h),this.media=m;this.addListener=y,this.removeListener=b,this.dispose=F;function y(P){x&&x.addListener(P)}function b(P){x&&x.removeListener(P)}function M(P){p.matches=P.matches,p.media=P.media}function F(){x&&x.removeListener(M)}}function f(m,h,v){return new g(m,h,v)}i.exports=f},"./node_modules/object-assign/index.js":i=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function d(f){if(f==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(f)}function g(){try{if(!Object.assign)return!1;var f=new String("abc");if(f[5]="de",Object.getOwnPropertyNames(f)[0]==="5")return!1;for(var m={},h=0;h<10;h++)m["_"+String.fromCharCode(h)]=h;var v=Object.getOwnPropertyNames(m).map(function(x){return m[x]});if(v.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(x){p[x]=x}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}i.exports=g()?Object.assign:function(f,m){for(var h,v=d(f),p,x=1;x<arguments.length;x++){h=Object(arguments[x]);for(var y in h)s.call(h,y)&&(v[y]=h[y]);if(a){p=a(h);for(var b=0;b<p.length;b++)c.call(h,p[b])&&(v[p[b]]=h[p[b]])}}return v}},"./node_modules/prop-types/checkPropTypes.js":(i,a,s)=>{var c=function(){};{var d=s("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),g={},f=s("./node_modules/prop-types/lib/has.js");c=function(h){var v="Warning: "+h;typeof console<"u"&&console.error(v);try{throw new Error(v)}catch{}}}function m(h,v,p,x,y){for(var b in h)if(f(h,b)){var M;try{if(typeof h[b]!="function"){var F=Error((x||"React class")+": "+p+" type `"+b+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof h[b]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw F.name="Invariant Violation",F}M=h[b](v,b,x,p,null,d)}catch(E){M=E}if(M&&!(M instanceof Error)&&c((x||"React class")+": type specification of "+p+" `"+b+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof M+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),M instanceof Error&&!(M.message in g)){g[M.message]=!0;var P=y?y():"";c("Failed "+p+" type: "+M.message+(P??""))}}}m.resetWarningCache=function(){g={}},i.exports=m},"./node_modules/prop-types/factoryWithTypeCheckers.js":(i,a,s)=>{var c=s("./node_modules/react-is/index.js"),d=s("./node_modules/object-assign/index.js"),g=s("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),f=s("./node_modules/prop-types/lib/has.js"),m=s("./node_modules/prop-types/checkPropTypes.js"),h=function(){};h=function(p){var x="Warning: "+p;typeof console<"u"&&console.error(x);try{throw new Error(x)}catch{}};function v(){return null}i.exports=function(p,x){var y=typeof Symbol=="function"&&Symbol.iterator,b="@@iterator";function M(O){var A=O&&(y&&O[y]||O[b]);if(typeof A=="function")return A}var F="<<anonymous>>",P={array:k("array"),bigint:k("bigint"),bool:k("boolean"),func:k("function"),number:k("number"),object:k("object"),string:k("string"),symbol:k("symbol"),any:V(),arrayOf:I,element:U(),elementType:G(),instanceOf:q,node:se(),objectOf:ae,oneOf:oe,oneOfType:ue,shape:Z,exact:te};function E(O,A){return O===A?O!==0||1/O===1/A:O!==O&&A!==A}function w(O,A){this.message=O,this.data=A&&typeof A=="object"?A:{},this.stack=""}w.prototype=Error.prototype;function R(O){var A={},B=0;function $(W,H,z,Y,K,Q,D){if(Y=Y||F,Q=Q||z,D!==g){if(x){var ne=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw ne.name="Invariant Violation",ne}else if(typeof console<"u"){var de=Y+":"+z;!A[de]&&B<3&&(h("You are manually calling a React.PropTypes validation function for the `"+Q+"` prop on `"+Y+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),A[de]=!0,B++)}}return H[z]==null?W?H[z]===null?new w("The "+K+" `"+Q+"` is marked as required "+("in `"+Y+"`, but its value is `null`.")):new w("The "+K+" `"+Q+"` is marked as required in "+("`"+Y+"`, but its value is `undefined`.")):null:O(H,z,Y,K,Q)}var j=$.bind(null,!1);return j.isRequired=$.bind(null,!0),j}function k(O){function A(B,$,j,W,H,z){var Y=B[$],K=J(Y);if(K!==O){var Q=ee(Y);return new w("Invalid "+W+" `"+H+"` of type "+("`"+Q+"` supplied to `"+j+"`, expected ")+("`"+O+"`."),{expectedType:O})}return null}return R(A)}function V(){return R(v)}function I(O){function A(B,$,j,W,H){if(typeof O!="function")return new w("Property `"+H+"` of component `"+j+"` has invalid PropType notation inside arrayOf.");var z=B[$];if(!Array.isArray(z)){var Y=J(z);return new w("Invalid "+W+" `"+H+"` of type "+("`"+Y+"` supplied to `"+j+"`, expected an array."))}for(var K=0;K<z.length;K++){var Q=O(z,K,j,W,H+"["+K+"]",g);if(Q instanceof Error)return Q}return null}return R(A)}function U(){function O(A,B,$,j,W){var H=A[B];if(!p(H)){var z=J(H);return new w("Invalid "+j+" `"+W+"` of type "+("`"+z+"` supplied to `"+$+"`, expected a single ReactElement."))}return null}return R(O)}function G(){function O(A,B,$,j,W){var H=A[B];if(!c.isValidElementType(H)){var z=J(H);return new w("Invalid "+j+" `"+W+"` of type "+("`"+z+"` supplied to `"+$+"`, expected a single ReactElement type."))}return null}return R(O)}function q(O){function A(B,$,j,W,H){if(!(B[$]instanceof O)){var z=O.name||F,Y=he(B[$]);return new w("Invalid "+W+" `"+H+"` of type "+("`"+Y+"` supplied to `"+j+"`, expected ")+("instance of `"+z+"`."))}return null}return R(A)}function oe(O){if(!Array.isArray(O))return arguments.length>1?h("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):h("Invalid argument supplied to oneOf, expected an array."),v;function A(B,$,j,W,H){for(var z=B[$],Y=0;Y<O.length;Y++)if(E(z,O[Y]))return null;var K=JSON.stringify(O,function(D,ne){var de=ee(ne);return de==="symbol"?String(ne):ne});return new w("Invalid "+W+" `"+H+"` of value `"+String(z)+"` "+("supplied to `"+j+"`, expected one of "+K+"."))}return R(A)}function ae(O){function A(B,$,j,W,H){if(typeof O!="function")return new w("Property `"+H+"` of component `"+j+"` has invalid PropType notation inside objectOf.");var z=B[$],Y=J(z);if(Y!=="object")return new w("Invalid "+W+" `"+H+"` of type "+("`"+Y+"` supplied to `"+j+"`, expected an object."));for(var K in z)if(f(z,K)){var Q=O(z,K,j,W,H+"."+K,g);if(Q instanceof Error)return Q}return null}return R(A)}function ue(O){if(!Array.isArray(O))return h("Invalid argument supplied to oneOfType, expected an instance of array."),v;for(var A=0;A<O.length;A++){var B=O[A];if(typeof B!="function")return h("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+pe(B)+" at index "+A+"."),v}function $(j,W,H,z,Y){for(var K=[],Q=0;Q<O.length;Q++){var D=O[Q],ne=D(j,W,H,z,Y,g);if(ne==null)return null;ne.data&&f(ne.data,"expectedType")&&K.push(ne.data.expectedType)}var de=K.length>0?", expected one of type ["+K.join(", ")+"]":"";return new w("Invalid "+z+" `"+Y+"` supplied to "+("`"+H+"`"+de+"."))}return R($)}function se(){function O(A,B,$,j,W){return ie(A[B])?null:new w("Invalid "+j+" `"+W+"` supplied to "+("`"+$+"`, expected a ReactNode."))}return R(O)}function le(O,A,B,$,j){return new w((O||"React class")+": "+A+" type `"+B+"."+$+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+j+"`.")}function Z(O){function A(B,$,j,W,H){var z=B[$],Y=J(z);if(Y!=="object")return new w("Invalid "+W+" `"+H+"` of type `"+Y+"` "+("supplied to `"+j+"`, expected `object`."));for(var K in O){var Q=O[K];if(typeof Q!="function")return le(j,W,H,K,ee(Q));var D=Q(z,K,j,W,H+"."+K,g);if(D)return D}return null}return R(A)}function te(O){function A(B,$,j,W,H){var z=B[$],Y=J(z);if(Y!=="object")return new w("Invalid "+W+" `"+H+"` of type `"+Y+"` "+("supplied to `"+j+"`, expected `object`."));var K=d({},B[$],O);for(var Q in K){var D=O[Q];if(f(O,Q)&&typeof D!="function")return le(j,W,H,Q,ee(D));if(!D)return new w("Invalid "+W+" `"+H+"` key `"+Q+"` supplied to `"+j+"`.\nBad object: "+JSON.stringify(B[$],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(O),null,"  "));var ne=D(z,Q,j,W,H+"."+Q,g);if(ne)return ne}return null}return R(A)}function ie(O){switch(typeof O){case"number":case"string":case"undefined":return!0;case"boolean":return!O;case"object":if(Array.isArray(O))return O.every(ie);if(O===null||p(O))return!0;var A=M(O);if(A){var B=A.call(O),$;if(A!==O.entries){for(;!($=B.next()).done;)if(!ie($.value))return!1}else for(;!($=B.next()).done;){var j=$.value;if(j&&!ie(j[1]))return!1}}else return!1;return!0;default:return!1}}function ce(O,A){return O==="symbol"?!0:A?A["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&A instanceof Symbol:!1}function J(O){var A=typeof O;return Array.isArray(O)?"array":O instanceof RegExp?"object":ce(A,O)?"symbol":A}function ee(O){if(typeof O>"u"||O===null)return""+O;var A=J(O);if(A==="object"){if(O instanceof Date)return"date";if(O instanceof RegExp)return"regexp"}return A}function pe(O){var A=ee(O);switch(A){case"array":case"object":return"an "+A;case"boolean":case"date":case"regexp":return"a "+A;default:return A}}function he(O){return!O.constructor||!O.constructor.name?F:O.constructor.name}return P.checkPropTypes=m,P.resetWarningCache=m.resetWarningCache,P.PropTypes=P,P}},"./node_modules/prop-types/index.js":(i,a,s)=>{{var c=s("./node_modules/react-is/index.js"),d=!0;i.exports=s("./node_modules/prop-types/factoryWithTypeCheckers.js")(c.isElement,d)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":i=>{var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";i.exports=a},"./node_modules/prop-types/lib/has.js":i=>{i.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(i,a)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var s=typeof Symbol=="function"&&Symbol.for,c=s?Symbol.for("react.element"):60103,d=s?Symbol.for("react.portal"):60106,g=s?Symbol.for("react.fragment"):60107,f=s?Symbol.for("react.strict_mode"):60108,m=s?Symbol.for("react.profiler"):60114,h=s?Symbol.for("react.provider"):60109,v=s?Symbol.for("react.context"):60110,p=s?Symbol.for("react.async_mode"):60111,x=s?Symbol.for("react.concurrent_mode"):60111,y=s?Symbol.for("react.forward_ref"):60112,b=s?Symbol.for("react.suspense"):60113,M=s?Symbol.for("react.suspense_list"):60120,F=s?Symbol.for("react.memo"):60115,P=s?Symbol.for("react.lazy"):60116,E=s?Symbol.for("react.block"):60121,w=s?Symbol.for("react.fundamental"):60117,R=s?Symbol.for("react.responder"):60118,k=s?Symbol.for("react.scope"):60119;function V(D){return typeof D=="string"||typeof D=="function"||D===g||D===x||D===m||D===f||D===b||D===M||typeof D=="object"&&D!==null&&(D.$$typeof===P||D.$$typeof===F||D.$$typeof===h||D.$$typeof===v||D.$$typeof===y||D.$$typeof===w||D.$$typeof===R||D.$$typeof===k||D.$$typeof===E)}function I(D){if(typeof D=="object"&&D!==null){var ne=D.$$typeof;switch(ne){case c:var de=D.type;switch(de){case p:case x:case g:case m:case f:case b:return de;default:var ut=de&&de.$$typeof;switch(ut){case v:case y:case P:case F:case h:return ut;default:return ne}}case d:return ne}}}var U=p,G=x,q=v,oe=h,ae=c,ue=y,se=g,le=P,Z=F,te=d,ie=m,ce=f,J=b,ee=!1;function pe(D){return ee||(ee=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),he(D)||I(D)===p}function he(D){return I(D)===x}function O(D){return I(D)===v}function A(D){return I(D)===h}function B(D){return typeof D=="object"&&D!==null&&D.$$typeof===c}function $(D){return I(D)===y}function j(D){return I(D)===g}function W(D){return I(D)===P}function H(D){return I(D)===F}function z(D){return I(D)===d}function Y(D){return I(D)===m}function K(D){return I(D)===f}function Q(D){return I(D)===b}a.AsyncMode=U,a.ConcurrentMode=G,a.ContextConsumer=q,a.ContextProvider=oe,a.Element=ae,a.ForwardRef=ue,a.Fragment=se,a.Lazy=le,a.Memo=Z,a.Portal=te,a.Profiler=ie,a.StrictMode=ce,a.Suspense=J,a.isAsyncMode=pe,a.isConcurrentMode=he,a.isContextConsumer=O,a.isContextProvider=A,a.isElement=B,a.isForwardRef=$,a.isFragment=j,a.isLazy=W,a.isMemo=H,a.isPortal=z,a.isProfiler=Y,a.isStrictMode=K,a.isSuspense=Q,a.isValidElementType=V,a.typeOf=I})()},"./node_modules/react-is/index.js":(i,a,s)=>{i.exports=s("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(i,a,s)=>{s.r(a),s.d(a,{shallowEqualArrays:()=>d,shallowEqualObjects:()=>c});function c(g,f){if(g===f)return!0;if(!g||!f)return!1;var m=Object.keys(g),h=Object.keys(f),v=m.length;if(h.length!==v)return!1;for(var p=0;p<v;p++){var x=m[p];if(g[x]!==f[x]||!Object.prototype.hasOwnProperty.call(f,x))return!1}return!0}function d(g,f){if(g===f)return!0;if(!g||!f)return!1;var m=g.length;if(f.length!==m)return!1;for(var h=0;h<m;h++)if(g[h]!==f[h])return!1;return!0}},"./src/Component.ts":function(i,a,s){var c=this&&this.__rest||function(m,h){var v={};for(var p in m)Object.prototype.hasOwnProperty.call(m,p)&&h.indexOf(p)<0&&(v[p]=m[p]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,p=Object.getOwnPropertySymbols(m);x<p.length;x++)h.indexOf(p[x])<0&&Object.prototype.propertyIsEnumerable.call(m,p[x])&&(v[p[x]]=m[p[x]]);return v},d=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(a,"__esModule",{value:!0});var g=d(s("./src/useMediaQuery.ts")),f=function(m){var h=m.children,v=m.device,p=m.onChange,x=c(m,["children","device","onChange"]),y=(0,g.default)(x,v,p);return typeof h=="function"?h(y):y?h:null};a.default=f},"./src/Context.ts":(i,a,s)=>{Object.defineProperty(a,"__esModule",{value:!0});var c=s("react"),d=(0,c.createContext)(void 0);a.default=d},"./src/index.ts":function(i,a,s){var c=this&&this.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(a,"__esModule",{value:!0}),a.Context=a.toQuery=a.useMediaQuery=a.default=void 0;var d=c(s("./src/useMediaQuery.ts"));a.useMediaQuery=d.default;var g=c(s("./src/Component.ts"));a.default=g.default;var f=c(s("./src/toQuery.ts"));a.toQuery=f.default;var m=c(s("./src/Context.ts"));a.Context=m.default},"./src/mediaQuery.ts":function(i,a,s){var c=this&&this.__assign||function(){return c=Object.assign||function(b){for(var M,F=1,P=arguments.length;F<P;F++){M=arguments[F];for(var E in M)Object.prototype.hasOwnProperty.call(M,E)&&(b[E]=M[E])}return b},c.apply(this,arguments)},d=this&&this.__rest||function(b,M){var F={};for(var P in b)Object.prototype.hasOwnProperty.call(b,P)&&M.indexOf(P)<0&&(F[P]=b[P]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,P=Object.getOwnPropertySymbols(b);E<P.length;E++)M.indexOf(P[E])<0&&Object.prototype.propertyIsEnumerable.call(b,P[E])&&(F[P[E]]=b[P[E]]);return F},g=this&&this.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(a,"__esModule",{value:!0});var f=g(s("./node_modules/prop-types/index.js")),m=f.default.oneOfType([f.default.string,f.default.number]),h={all:f.default.bool,grid:f.default.bool,aural:f.default.bool,braille:f.default.bool,handheld:f.default.bool,print:f.default.bool,projection:f.default.bool,screen:f.default.bool,tty:f.default.bool,tv:f.default.bool,embossed:f.default.bool},v={orientation:f.default.oneOf(["portrait","landscape"]),scan:f.default.oneOf(["progressive","interlace"]),aspectRatio:f.default.string,deviceAspectRatio:f.default.string,height:m,deviceHeight:m,width:m,deviceWidth:m,color:f.default.bool,colorIndex:f.default.bool,monochrome:f.default.bool,resolution:m,type:Object.keys(h)};v.type;var p=d(v,["type"]),x=c({minAspectRatio:f.default.string,maxAspectRatio:f.default.string,minDeviceAspectRatio:f.default.string,maxDeviceAspectRatio:f.default.string,minHeight:m,maxHeight:m,minDeviceHeight:m,maxDeviceHeight:m,minWidth:m,maxWidth:m,minDeviceWidth:m,maxDeviceWidth:m,minColor:f.default.number,maxColor:f.default.number,minColorIndex:f.default.number,maxColorIndex:f.default.number,minMonochrome:f.default.number,maxMonochrome:f.default.number,minResolution:m,maxResolution:m},p),y=c(c({},h),x);a.default={all:y,types:h,matchers:v,features:x}},"./src/toQuery.ts":function(i,a,s){var c=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(a,"__esModule",{value:!0});var d=c(s("./node_modules/hyphenate-style-name/index.js")),g=c(s("./src/mediaQuery.ts")),f=function(p){return"not ".concat(p)},m=function(p,x){var y=(0,d.default)(p);return typeof x=="number"&&(x="".concat(x,"px")),x===!0?y:x===!1?f(y):"(".concat(y,": ").concat(x,")")},h=function(p){return p.join(" and ")},v=function(p){var x=[];return Object.keys(g.default.all).forEach(function(y){var b=p[y];b!=null&&x.push(m(y,b))}),h(x)};a.default=v},"./src/useMediaQuery.ts":function(i,a,s){var c=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(a,"__esModule",{value:!0});var d=s("react"),g=c(s("./node_modules/matchmediaquery/index.js")),f=c(s("./node_modules/hyphenate-style-name/index.js")),m=s("./node_modules/shallow-equal/dist/index.esm.js"),h=c(s("./src/toQuery.ts")),v=c(s("./src/Context.ts")),p=function(w){return w.query||(0,h.default)(w)},x=function(w){if(w){var R=Object.keys(w);return R.reduce(function(k,V){return k[(0,f.default)(V)]=w[V],k},{})}},y=function(){var w=(0,d.useRef)(!1);return(0,d.useEffect)(function(){w.current=!0},[]),w.current},b=function(w){var R=(0,d.useContext)(v.default),k=function(){return x(w)||x(R)},V=(0,d.useState)(k),I=V[0],U=V[1];return(0,d.useEffect)(function(){var G=k();(0,m.shallowEqualObjects)(I,G)||U(G)},[w,R]),I},M=function(w){var R=function(){return p(w)},k=(0,d.useState)(R),V=k[0],I=k[1];return(0,d.useEffect)(function(){var U=R();V!==U&&I(U)},[w]),V},F=function(w,R){var k=function(){return(0,g.default)(w,R||{},!!R)},V=(0,d.useState)(k),I=V[0],U=V[1],G=y();return(0,d.useEffect)(function(){if(G){var q=k();return U(q),function(){q&&q.dispose()}}},[w,R]),I},P=function(w){var R=(0,d.useState)(w.matches),k=R[0],V=R[1];return(0,d.useEffect)(function(){var I=function(U){V(U.matches)};return w.addListener(I),V(w.matches),function(){w.removeListener(I)}},[w]),k},E=function(w,R,k){var V=b(R),I=M(w);if(!I)throw new Error("Invalid or missing MediaQuery!");var U=F(I,V),G=P(U),q=y();return(0,d.useEffect)(function(){q&&k&&k(G)},[G]),(0,d.useEffect)(function(){return function(){U&&U.dispose()}},[]),G};a.default=E},react:i=>{i.exports=r}},e={};function u(i){var a=e[i];if(a!==void 0)return a.exports;var s=e[i]={exports:{}};return o[i].call(s.exports,s,s.exports,u),s.exports}u.d=(i,a)=>{for(var s in a)u.o(a,s)&&!u.o(i,s)&&Object.defineProperty(i,s,{enumerable:!0,get:a[s]})},u.o=(i,a)=>Object.prototype.hasOwnProperty.call(i,a),u.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var l=u("./src/index.ts");return l})())})(pn);var Ue=pn.exports;const bo=N.label`
  position: relative;
`,xo=N.input`
  width: 320px;
  background-color: transparent;
  color: #efede8;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 14px;

  @media screen and (min-width: 375px) {
    box-sizing: border-box;
    width: 335px;
    height: 46px;
    padding: 14px;
    padding-right: 68px;
    background-color: transparent;
    color: #efede8;
    font-size: 14px;
    line-height: 18px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
  }

  @media screen and (min-width: 768px) {
    width: 236px;
  }

  @media screen and (min-width: 1440px) {
    width: 236px;
    height: 52px;
    font-size: 16px;
    line-height: 24px;
  }

  &:hover,
  &:focus {
    outline: none;
    border-color: #e6533c;
  }

  &::placeholder {
    color: #efede8;
  }
`,Eo=N.button`
  background: transparent;
  position: absolute;
  top: calc(50% - 16px / 2);
  right: 40px;
  border: none;
`,yo=N.button`
  background: transparent;
  position: absolute;
  top: calc(50% - 16px / 2);
  right: 14px;
  border: none;
`,Co=N.svg`
  stroke: #e6533c;
  width: 18px;
  height: 18px;
`,So=N.svg`
  stroke: #efede8;
  width: 18px;
  height: 18px;
`,wo=N.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (min-width: 375px) {
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,Dt=N.div`
  @media screen and (min-width: 375px) {
    width: 158px;
  }

  @media screen and (min-width: 768px) {
    width: 173px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`,Oo=n=>n.products.list,Fo=n=>n.products.modalIsOpen,hn=n=>n.products.filter,Mo=n=>n.products.isLoading,Po=n=>n.products.successModalOpen,Do=n=>n.products.page,At=[{value:"",label:"All"},{value:"true",label:"Recommended "},{value:"false",label:"Not recommended"}],Ne=["","alcoholic drinks","berries","cereals","dairy","dried fruits","eggs","fish","flour","fruits","meat","mushrooms","nuts","oils and fats","poppy","sausage","seeds","sesame","soft drinks","vegetables and herbs"],Ao=({submit:n})=>{const t=E=>E.slice(0,1).toUpperCase()+E.slice(1),r=Ne==null?void 0:Ne.map(E=>({value:E,label:t(E)||"All"})),o=Ue.useMediaQuery({minWidth:375}),e=Ue.useMediaQuery({minWidth:769}),u=Ue.useMediaQuery({minWidth:1440});let l="";o?l="46px":l="52px",e?l="52px":l="46px",u?l="52px":l="46px";const i={control:E=>({...E,backgroundColor:"trasparent",height:l,borderStyle:"none",appearance:"none",WebkitAppearance:"none",MozAppearance:"none"}),option:(E,{isFocused:w,isSelected:R})=>({...E,backgroundColor:"rgba(28, 28, 28, 1)",color:R?"#E6533C":"#EFEDE8",marginBottom:"8px","&:last-child":{marginBottom:"0"}}),menu:E=>({...E,borderRadius:"12px",backgroundColor:"rgba(28, 28, 28, 1)"}),singleValue:E=>({...E,color:"#EFEDE8"}),indicatorSeparator:E=>({...E,backgroundColor:"transparent"}),dropdownIndicator:E=>({...E,color:"#EFEDE8"}),container:E=>({...E,border:"1px solid rgba(239, 237, 232, 0.30)",borderRadius:"12px",outline:"none"}),menuList:E=>({...E,margin:"14px 7px","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{backgroundColor:"rgba(239, 237, 232, 0.10)",borderRadius:"12px"},overflowY:"auto"})},[a,s]=bn({}),c=ge(hn),[d,g]=C.useState(c.search),[f,m]=C.useState(c.category),[h,v]=C.useState(c.recommended),p=Ce(),x=E=>{const w=E.target.value;g(w),p(we({search:w,category:f,recommended:h})),s({search:w,category:f||"all",recommended:h||"all"})},y=E=>{p(Ge()),m(E.value),s({search:d,category:E.value||"all",recommended:h||"all"}),p(we({search:d,category:E.value,recommended:h})),n({search:d,category:E.value,recommended:h})},b=E=>{p(Ge()),s({search:d,category:f||"all",recommended:E.value||"all"}),v(E.value),p(we({search:d,category:f,recommended:E.value})),n({search:d,category:f,recommended:E.value})},M=()=>{g(""),p(we({search:"",category:f,recommended:h})),s({search:"",category:f||"all",recommended:h||"all"})},F=()=>{n({search:d,category:f,recommended:h})},P=E=>{E.key==="Enter"&&F()};return S.jsxs(wo,{children:[S.jsx("li",{children:S.jsxs(bo,{children:[S.jsx(xo,{value:d,onChange:x,onKeyUp:P,name:"productSearch",type:"text",placeholder:"Search"}),d&&S.jsx(Eo,{onClick:M,type:"button",children:S.jsx(Co,{children:S.jsx("use",{href:`${xe}#icon-x`})})}),S.jsx(yo,{onClick:F,type:"button",children:S.jsx(So,{children:S.jsx("use",{href:`${xe}#icon-search`})})})]})}),S.jsx("li",{children:S.jsx(Dt,{children:S.jsx(Pt,{styles:i,isSearchable:!1,onChange:y,value:r.find(E=>E.value===f),placeholder:"Categories",options:r||[],theme:E=>({...E,colors:{...E.colors,primary_bcwycos:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral_bh:"#EFEDE8",neutral_db:"transparent",neutral_dhb:"transparent",neutral_pc:"rgba(239, 237, 232, 1)",neutral_n:"rgba(239, 237, 232, 1)"}})})})}),S.jsx("li",{children:S.jsx(Dt,{children:S.jsx(Pt,{styles:i,isSearchable:!1,value:At.find(E=>E.value===h),onChange:b,theme:E=>({...E,colors:{...E.colors,primary_bcwycos:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral_bh:"#EFEDE8",neutral_db:"transparent",neutral_dhb:"transparent",neutral_pc:"rgba(239, 237, 232, 1)",neutral_n:"rgba(239, 237, 232, 1)"}}),options:At})})})]})},Io=re.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px 16px;

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
    height: 636px;
    overflow-y: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
    height: 493px;
  }
`,Ro=re.div`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${be.bgCards};
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 768px) {
    width: 335px;
    height: 135px;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
    height: 143px;
  }
`,To=re.h3`
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
`,Vo=re.div`
  display: flex;
  column-gap: 16px;
`,We=re.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-transform: capitalize;
`,_o=re.li`
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-bottom: 27px;
  }
`,Lo=re.div`
  padding: 5px 7.5px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
`,ko=re.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`,jo=re.div`
  margin-right: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
`,It=re.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
`,Rt=re.p`
  color: #efede8;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`,Bo=re.button`
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
`,Ye=re.span`
  color: rgba(239, 237, 232, 0.4);
`,$o=re.svg`
  fill: rgba(239, 237, 232, 1);
  border-radius: 50px;
  background-color: rgba(239, 160, 130, 1);
  padding: 3px 4px;
`,Tt=(n,t=24)=>{if(n.length>t){const r=n.lastIndexOf(" ",t);return r!==-1?Qe(n.substring(0,r))+"...":Qe(n.substring(0,t))+"..."}return Qe(n)};function Qe(n){return n.charAt(0).toUpperCase()+n.slice(1)}const Ho=({product:n,addProductDetails:t})=>{const r=()=>{t(n)},o=ge(xn.getUserMetricData).blood;return S.jsxs(Ro,{children:[S.jsxs(_o,{children:[S.jsx(Lo,{children:S.jsx(ko,{children:"Diet"})}),S.jsxs("div",{style:{display:"flex"},children:[S.jsx(jo,{children:n.groupBloodNotAllowed[o]?S.jsxs(S.Fragment,{children:[S.jsx(It,{style:{backgroundColor:"#419B09"}}),S.jsx(Rt,{children:"Recommended"})]}):S.jsxs(S.Fragment,{children:[S.jsx(It,{style:{backgroundColor:"#E9101D"}}),S.jsx(Rt,{children:"Not recommended"})]})}),S.jsxs(Bo,{onClick:r,children:["Add",S.jsx("svg",{width:16,height:16,style:{stroke:"#E6533C"},children:S.jsx("use",{href:`${xe}#icon-start`})})]})]})]}),S.jsxs(To,{children:[S.jsx($o,{width:24,height:24,children:S.jsx("use",{href:`${xe}#icon-running`})}),Tt(n.title)]}),S.jsxs(Vo,{children:[S.jsxs(We,{children:[S.jsx(Ye,{children:"Calories: "}),n.calories]}),S.jsxs(We,{children:[S.jsx(Ye,{children:"Category: "}),Tt(n.category,13)]}),S.jsxs(We,{children:[S.jsx(Ye,{children:"Weight: "}),n.weight]})]})]})},zo=N.div`
  @media screen and (min-width: 375px) {
    display: inline-block;
    margin-top: 24px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 92px;
  }
`,Uo=N.p`
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
`,No=N.span`
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
`,Wo=N.p`
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
`,Yo=()=>S.jsxs(zo,{children:[S.jsxs(Uo,{children:[S.jsx(No,{children:"Sorry, no results were found"})," ","for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),S.jsx(Wo,{children:"Try changing the search parameters."})]});var Ze=new Map,De=new WeakMap,Vt=0,Qo=void 0;function Go(n){return n?(De.has(n)||(Vt+=1,De.set(n,Vt.toString())),De.get(n)):"0"}function Ko(n){return Object.keys(n).sort().filter(t=>n[t]!==void 0).map(t=>`${t}_${t==="root"?Go(n.root):n[t]}`).toString()}function Xo(n){let t=Ko(n),r=Ze.get(t);if(!r){const o=new Map;let e;const u=new IntersectionObserver(l=>{l.forEach(i=>{var a;const s=i.isIntersecting&&e.some(c=>i.intersectionRatio>=c);n.trackVisibility&&typeof i.isVisible>"u"&&(i.isVisible=s),(a=o.get(i.target))==null||a.forEach(c=>{c(s,i)})})},n);e=u.thresholds||(Array.isArray(n.threshold)?n.threshold:[n.threshold||0]),r={id:t,observer:u,elements:o},Ze.set(t,r)}return r}function qo(n,t,r={},o=Qo){if(typeof window.IntersectionObserver>"u"&&o!==void 0){const a=n.getBoundingClientRect();return t(o,{isIntersecting:o,target:n,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:e,observer:u,elements:l}=Xo(r);let i=l.get(n)||[];return l.has(n)||l.set(n,i),i.push(t),u.observe(n),function(){i.splice(i.indexOf(t),1),i.length===0&&(l.delete(n),u.unobserve(n)),l.size===0&&(u.disconnect(),Ze.delete(e))}}function Jo({threshold:n,delay:t,trackVisibility:r,rootMargin:o,root:e,triggerOnce:u,skip:l,initialInView:i,fallbackInView:a,onChange:s}={}){var c;const[d,g]=C.useState(null),f=C.useRef(),[m,h]=C.useState({inView:!!i,entry:void 0});f.current=s,C.useEffect(()=>{if(l||!d)return;let y;return y=qo(d,(b,M)=>{h({inView:b,entry:M}),f.current&&f.current(b,M),M.isIntersecting&&u&&y&&(y(),y=void 0)},{root:e,rootMargin:o,threshold:n,trackVisibility:r,delay:t},a),()=>{y&&y()}},[Array.isArray(n)?n.toString():n,d,e,o,u,l,r,a,t]);const v=(c=m.entry)==null?void 0:c.target,p=C.useRef();!d&&v&&!u&&!l&&p.current!==v&&(p.current=v,h({inView:!!i,entry:void 0}));const x=[g,m.inView,m.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}let Zo=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((t,r)=>(r&=63,r<36?t+=r.toString(36):r<62?t+=(r-26).toString(36).toUpperCase():r>62?t+="-":t+="_",t),"");const ea=N.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 4, 0.4);
  z-index: 10;
`,ta=N.div`
  position: absolute;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px 24px;
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
    height: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 479px;
    height: 286px;
    padding: 48px 32px;
    flex-direction: row;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
`,na=N.button`
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
`,ra=N.svg`
pointer-events: none;
  display: block;
  width: 22px;
  height: 22px;
  stroke: ${be.withe};
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,et=N.input`
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
`,ia=N.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 16px;
`;et.defaultProps={theme:{main:"rgba(239, 237, 232, 0.3)"}};const oa=N.button`
  margin-right: 14px;
  padding: 14px 32px 14px 32px;
  border-radius: 12px;
  border: none;
  outline: none;
  color: ${be.withe};
  background-color: ${be.acceptColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    bottom: 48px;
    right: 32px;
    margin-right: 16px;
  }

  &:hover,
  &:focus {
    background-color: ${be.secondaryOrange};
  }
  &:disabled {
    background-color: #e6533c;
    color: #efede899;
  }
`,aa=N.button`
  padding: 14px 32px 14px 32px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  outline: none;
  color: ${be.withe};
  background-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    /* position: absolute; */
    bottom: 48px;
    right: 32px;
  }

  &:hover,
  &:focus {
    background-color: ${be.secondaryOrange};
  }
  &:disabled {
    background-color: #e6533c;
    color: #efede899;
  }
`,ua=N.p`
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
`,sa=N.span`
  color: rgba(239, 237, 232);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
`,la=N.label`
  @media screen and (min-width: 768px) {
    width: 244px;
  }
`,ca=N.label`
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
`;const da=({product:n,getCalories:t})=>{const r=Ce(),o=async u=>{if(!u.weight){st.error("Please add weight!");return}const l=Math.round(n.calories/100*Number(u.weight)),i={productId:n._id,calories:l,amount:Number(u.weight)};try{await r(En.postDiaryProduct(i))}catch(a){st.error(a.message)}t(i.calories),r(tt.successOpenModal()),r(r(Ke.closeModal()))},e=u=>{u.target===u.currentTarget&&r(Ke.closeModal())};return S.jsx(ea,{onClick:e,children:S.jsxs(ta,{children:[S.jsx(na,{type:"button",onClick:e,children:S.jsx(ra,{children:S.jsx("use",{href:`${xe}#icon-x`})})}),S.jsx(Vn,{initialValues:{weight:""},onSubmit:o,children:S.jsxs(_n,{children:[S.jsxs(ia,{children:[S.jsx(la,{htmlFor:"title",children:S.jsx(lt,{as:et,type:"text",name:"product",placeholder:n.title,readOnly:!0})}),S.jsx(ca,{htmlFor:"weight",children:S.jsx(lt,{as:et,type:"number",name:"weight",placeholder:"Weight, grams"})})]}),S.jsxs(ua,{children:["Calories: ",S.jsx(sa,{children:n.calories})]}),S.jsx(oa,{type:"submit",children:"Add to diary"}),S.jsx(aa,{type:"button",onClick:e,children:"Cancel"})]})})]})})},fa="/pj-react-777/assets/food-2x-1cf208a8.png",pa=N.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 4, 0.4);
  z-index: 10;
`,ha=N.div`
  position: relative;
  overflow-y: scroll;
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
`,ma=N.svg`
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
`,va=N.div`
display: flex;
flex-direction: column;
align-items: center;
@media screen and (min-width: 768px) {
    }   
`,ga=N.img`
width:123px;
height:84px;
margin-bottom: 16px;
@media screen and (min-width: 768px) {
height:97px;
}   
`,ba=N.p`
    color: #efede8;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    margin-bottom: 16px;
`,_t=N.p`
    color: rgba(239, 237, 232, 0.3);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom:24px;
    
`,xa=N.span`
   color: #e6533c;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    display: flex;
    gap: 8px;
    align-items: center;
`,Ea=N.button`
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
`,ya=N.svg`
    width: 16px;
    height: 16px;
    stroke: rgba(239, 237, 232, 0.3)`,Ca=({calories:n})=>{const t=Ce(),r=o=>{o.target===o.currentTarget&&t(tt.successcloseModal())};return S.jsx(pa,{onClick:r,children:S.jsxs(ha,{children:[S.jsx(ma,{onClick:r,children:S.jsx("use",{href:xe+"#icon-close"})}),S.jsxs(va,{children:[S.jsx(ga,{src:fa,alt:"product"}),S.jsx(ba,{children:"Well done"}),S.jsxs(_t,{children:["Calories: ",S.jsx(xa,{children:n})]})]}),S.jsx(Ea,{onClick:r,children:"Next product"}),S.jsx(yn,{to:"/diary",children:S.jsxs(_t,{children:["To the diary",S.jsx(ya,{children:S.jsx("use",{href:xe+"#icon-start"})})]})})]})})},Sa=({products:n,fetching:t})=>{const[r,o]=C.useState(1),[e,u]=Jo({threshold:0}),l=ge(hn),i=ge(Fo),a=ge(Mo),s=C.useRef(),c=Number(ge(Do)),d=ge(Po),g=Ce(),[f,m]=C.useState(),[h,v]=C.useState();C.useEffect(()=>{g(tt.successcloseModal())},[]);const p=b=>{m(b),g(Ke.openModal())},x=()=>{const b=s.current.scrollHeight;s.current.scrollTop=b-b*.2},y=b=>v(b);return C.useEffect(()=>{u&&(o(c+1),x()),!a&&r!==c&&t(l,r,10)},[u]),S.jsxs(S.Fragment,{children:[i&&S.jsx(da,{product:f,getCalories:y}),d&&S.jsx(Ca,{calories:h}),S.jsxs(Io,{ref:s,children:[(n==null?void 0:n.length)>0?n.map(b=>S.jsx(Ho,{product:b,addProductDetails:p},Zo())):S.jsx(Yo,{}),S.jsx("div",{ref:e,style:{width:"300px",height:"15px"}})]})]})},Lt="/pj-react-777/assets/products_background_desktop-55179e50.jpg",wa=re.div`
  ${Tn}
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
    background-image: url(${Lt});
  }

  @media screen and (min-width: 1440px) and (min-device-pixel-ratio: 2),
    screen and (min-width: 1440px) and (min-resolution: 192dpi),
    screen and (min-width: 1440px) and (min-resolution: 2dppx) {
    background-image: url(${Lt});
  }
`,Oa=re.h2`
  margin-bottom: 40px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.17;
  color: ${be.withe};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 1.38;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`,Fa=re.div`
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
`,Ma=re.span`
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
`,Ta=()=>{const n=Ce(),t=ge(Oo);C.useEffect(()=>{n(Ge())},[]);const r=C.useCallback((o,e,u)=>{n(Cn({filterParams:o,page:e,limit:u}))},[n]);return C.useEffect(()=>{localStorage.getItem("persist:products").filter===Sn.getInitialState().filter&&r()},[r]),S.jsxs(wa,{children:[S.jsx(Ma,{children:"Filters"}),S.jsxs(Fa,{children:[S.jsx(Oa,{children:"Products"}),S.jsx(Ao,{submit:r})]}),S.jsx(Sa,{products:t,fetching:r})]})};export{Ta as default};
