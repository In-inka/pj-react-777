import{r as S,_ as T,f as an,h as ye,i as un,a as sn,s as K,l as ln,u as Pe,d as Dt,j as D,m as Ce,g as ge,b as cn,n as nt,p as dn}from"./index-641d8c00.js";import{_ as Mt,a as fn,b as pn,c as hn,d as mn,e as vn}from"./createClass-d3081576.js";import{h as gn,E as bn,c as xn,s as En,_,n as re}from"./emotion-styled.browser.esm-5b5f3a4f.js";import{s as Ee,C as yn}from"./sprite-450e6693.js";import{L as Cn}from"./Loading-7d6d5b18.js";import"./Hourglass-4c32518e.js";function Sn(n,t){if(n==null)return{};var r={},o=Object.keys(n),e,u;for(u=0;u<o.length;u++)e=o[u],!(t.indexOf(e)>=0)&&(r[e]=n[e]);return r}var L=function(t,r){var o=arguments;if(r==null||!gn.call(r,"css"))return S.createElement.apply(void 0,o);var e=o.length,u=new Array(e);u[0]=bn,u[1]=xn(t,r);for(var l=2;l<e;l++)u[l]=o[l];return S.createElement.apply(null,u)};function Xe(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return En(t)}var wn=function(){var t=Xe.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function On(n){if(Array.isArray(n))return n}function Fn(n,t){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var o,e,u,l,i=[],a=!0,s=!1;try{if(u=(r=r.call(n)).next,t===0){if(Object(r)!==r)return;a=!1}else for(;!(a=(o=u.call(r)).done)&&(i.push(o.value),i.length!==t);a=!0);}catch(c){s=!0,e=c}finally{try{if(!a&&r.return!=null&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw e}}return i}}function Pn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function me(n,t){return On(n)||Fn(n,t)||Mt(n,t)||Pn()}function ve(n,t){if(n==null)return{};var r=Sn(n,t),o,e;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(e=0;e<u.length;e++)o=u[e],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(r[o]=n[o])}return r}var Dn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Mn(n){var t=n.defaultInputValue,r=t===void 0?"":t,o=n.defaultMenuIsOpen,e=o===void 0?!1:o,u=n.defaultValue,l=u===void 0?null:u,i=n.inputValue,a=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,g=n.onMenuOpen,f=n.value,m=ve(n,Dn),p=S.useState(i!==void 0?i:r),v=me(p,2),h=v[0],E=v[1],y=S.useState(a!==void 0?a:e),b=me(y,2),F=b[0],O=b[1],P=S.useState(f!==void 0?f:l),x=me(P,2),C=x[0],R=x[1],k=S.useCallback(function(ae,ue){typeof s=="function"&&s(ae,ue),R(ae)},[s]),V=S.useCallback(function(ae,ue){var se;typeof c=="function"&&(se=c(ae,ue)),E(se!==void 0?se:ae)},[c]),I=S.useCallback(function(){typeof g=="function"&&g(),O(!0)},[g]),U=S.useCallback(function(){typeof d=="function"&&d(),O(!1)},[d]),G=i!==void 0?i:h,q=a!==void 0?a:F,oe=f!==void 0?f:C;return T(T({},m),{},{inputValue:G,menuIsOpen:q,onChange:k,onInputChange:V,onMenuClose:U,onMenuOpen:I,value:oe})}function An(n){if(Array.isArray(n))return fn(n)}function In(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Rn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function At(n){return An(n)||In(n)||Mt(n)||Rn()}function Tn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const Vn=Math.min,Ln=Math.max,De=Math.round,Se=Math.floor,Me=n=>({x:n,y:n});function _n(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function It(n){return Tt(n)?(n.nodeName||"").toLowerCase():"#document"}function fe(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function Rt(n){var t;return(t=(Tt(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function Tt(n){return n instanceof Node||n instanceof fe(n).Node}function Ye(n){return n instanceof Element||n instanceof fe(n).Element}function qe(n){return n instanceof HTMLElement||n instanceof fe(n).HTMLElement}function rt(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof fe(n).ShadowRoot}function Vt(n){const{overflow:t,overflowX:r,overflowY:o,display:e}=Je(n);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!["inline","contents"].includes(e)}function kn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function jn(n){return["html","body","#document"].includes(It(n))}function Je(n){return fe(n).getComputedStyle(n)}function Bn(n){if(It(n)==="html")return n;const t=n.assignedSlot||n.parentNode||rt(n)&&n.host||Rt(n);return rt(t)?t.host:t}function Lt(n){const t=Bn(n);return jn(t)?n.ownerDocument?n.ownerDocument.body:n.body:qe(t)&&Vt(t)?t:Lt(t)}function Ae(n,t,r){var o;t===void 0&&(t=[]),r===void 0&&(r=!0);const e=Lt(n),u=e===((o=n.ownerDocument)==null?void 0:o.body),l=fe(e);return u?t.concat(l,l.visualViewport||[],Vt(e)?e:[],l.frameElement&&r?Ae(l.frameElement):[]):t.concat(e,Ae(e,[],r))}function $n(n){const t=Je(n);let r=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const e=qe(n),u=e?n.offsetWidth:r,l=e?n.offsetHeight:o,i=De(r)!==u||De(o)!==l;return i&&(r=u,o=l),{width:r,height:o,$:i}}function Ze(n){return Ye(n)?n:n.contextElement}function Le(n){const t=Ze(n);if(!qe(t))return Me(1);const r=t.getBoundingClientRect(),{width:o,height:e,$:u}=$n(t);let l=(u?De(r.width):r.width)/o,i=(u?De(r.height):r.height)/e;return(!l||!Number.isFinite(l))&&(l=1),(!i||!Number.isFinite(i))&&(i=1),{x:l,y:i}}const Hn=Me(0);function zn(n){const t=fe(n);return!kn()||!t.visualViewport?Hn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Un(n,t,r){return t===void 0&&(t=!1),!r||t&&r!==fe(n)?!1:t}function it(n,t,r,o){t===void 0&&(t=!1),r===void 0&&(r=!1);const e=n.getBoundingClientRect(),u=Ze(n);let l=Me(1);t&&(o?Ye(o)&&(l=Le(o)):l=Le(n));const i=Un(u,r,o)?zn(u):Me(0);let a=(e.left+i.x)/l.x,s=(e.top+i.y)/l.y,c=e.width/l.x,d=e.height/l.y;if(u){const g=fe(u),f=o&&Ye(o)?fe(o):o;let m=g.frameElement;for(;m&&o&&f!==g;){const p=Le(m),v=m.getBoundingClientRect(),h=Je(m),E=v.left+(m.clientLeft+parseFloat(h.paddingLeft))*p.x,y=v.top+(m.clientTop+parseFloat(h.paddingTop))*p.y;a*=p.x,s*=p.y,c*=p.x,d*=p.y,a+=E,s+=y,m=fe(m).frameElement}}return _n({width:c,height:d,x:a,y:s})}function Nn(n,t){let r=null,o;const e=Rt(n);function u(){clearTimeout(o),r&&r.disconnect(),r=null}function l(i,a){i===void 0&&(i=!1),a===void 0&&(a=1),u();const{left:s,top:c,width:d,height:g}=n.getBoundingClientRect();if(i||t(),!d||!g)return;const f=Se(c),m=Se(e.clientWidth-(s+d)),p=Se(e.clientHeight-(c+g)),v=Se(s),E={rootMargin:-f+"px "+-m+"px "+-p+"px "+-v+"px",threshold:Ln(0,Vn(1,a))||1};let y=!0;function b(F){const O=F[0].intersectionRatio;if(O!==a){if(!y)return l();O?l(!1,O):o=setTimeout(()=>{l(!1,1e-7)},100)}y=!1}try{r=new IntersectionObserver(b,{...E,root:e.ownerDocument})}catch{r=new IntersectionObserver(b,E)}r.observe(n)}return l(!0),u}function Wn(n,t,r,o){o===void 0&&(o={});const{ancestorScroll:e=!0,ancestorResize:u=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,s=Ze(n),c=e||u?[...s?Ae(s):[],...Ae(t)]:[];c.forEach(h=>{e&&h.addEventListener("scroll",r,{passive:!0}),u&&h.addEventListener("resize",r)});const d=s&&i?Nn(s,r):null;let g=-1,f=null;l&&(f=new ResizeObserver(h=>{let[E]=h;E&&E.target===s&&f&&(f.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{f&&f.observe(t)})),r()}),s&&!a&&f.observe(s),f.observe(t));let m,p=a?it(n):null;a&&v();function v(){const h=it(n);p&&(h.x!==p.x||h.y!==p.y||h.width!==p.width||h.height!==p.height)&&r(),p=h,m=requestAnimationFrame(v)}return r(),()=>{c.forEach(h=>{e&&h.removeEventListener("scroll",r),u&&h.removeEventListener("resize",r)}),d&&d(),f&&f.disconnect(),f=null,a&&cancelAnimationFrame(m)}}var Ge=S.useLayoutEffect,Yn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Ie=function(){};function Gn(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function Qn(n,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),e=2;e<r;e++)o[e-2]=arguments[e];var u=[].concat(o);if(t&&n)for(var l in t)t.hasOwnProperty(l)&&t[l]&&u.push("".concat(Gn(n,l)));return u.filter(function(i){return i}).map(function(i){return String(i).trim()}).join(" ")}var ot=function(t){return rr(t)?t.filter(Boolean):an(t)==="object"&&t!==null?[t]:[]},_t=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var r=ve(t,Yn);return T({},r)},X=function(t,r,o){var e=t.cx,u=t.getStyles,l=t.getClassNames,i=t.className;return{css:u(r,t),className:e(o??{},l(r,t),i)}};function Ve(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Kn(n){return Ve(n)?window.innerHeight:n.clientHeight}function kt(n){return Ve(n)?window.pageYOffset:n.scrollTop}function Re(n,t){if(Ve(n)){window.scrollTo(0,t);return}n.scrollTop=t}function Xn(n){var t=getComputedStyle(n),r=t.position==="absolute",o=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(r&&t.position==="static")&&o.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function qn(n,t,r,o){return r*((n=n/o-1)*n*n+1)+t}function we(n,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Ie,e=kt(n),u=t-e,l=10,i=0;function a(){i+=l;var s=qn(i,e,u,r);Re(n,s),i<r?window.requestAnimationFrame(a):o(n)}a()}function at(n,t){var r=n.getBoundingClientRect(),o=t.getBoundingClientRect(),e=t.offsetHeight/3;o.bottom+e>r.bottom?Re(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):o.top-e<r.top&&Re(n,Math.max(t.offsetTop-e,0))}function Jn(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function ut(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Zn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var jt=!1,er={get passive(){return jt=!0}},Oe=typeof window<"u"?window:{};Oe.addEventListener&&Oe.removeEventListener&&(Oe.addEventListener("p",Ie,er),Oe.removeEventListener("p",Ie,!1));var tr=jt;function nr(n){return n!=null}function rr(n){return Array.isArray(n)}function Fe(n,t,r){return n?t:r}var ir=function(t){for(var r=arguments.length,o=new Array(r>1?r-1:0),e=1;e<r;e++)o[e-1]=arguments[e];var u=Object.entries(t).filter(function(l){var i=me(l,1),a=i[0];return!o.includes(a)});return u.reduce(function(l,i){var a=me(i,2),s=a[0],c=a[1];return l[s]=c,l},{})},or=["children","innerProps"],ar=["children","innerProps"];function ur(n){var t=n.maxHeight,r=n.menuEl,o=n.minHeight,e=n.placement,u=n.shouldScroll,l=n.isFixedPosition,i=n.controlHeight,a=Xn(r),s={placement:"bottom",maxHeight:t};if(!r||!r.offsetParent)return s;var c=a.getBoundingClientRect(),d=c.height,g=r.getBoundingClientRect(),f=g.bottom,m=g.height,p=g.top,v=r.offsetParent.getBoundingClientRect(),h=v.top,E=l?window.innerHeight:Kn(a),y=kt(a),b=parseInt(getComputedStyle(r).marginBottom,10),F=parseInt(getComputedStyle(r).marginTop,10),O=h-F,P=E-p,x=O+y,C=d-y-p,R=f-E+y+b,k=y+p-F,V=160;switch(e){case"auto":case"bottom":if(P>=m)return{placement:"bottom",maxHeight:t};if(C>=m&&!l)return u&&we(a,R,V),{placement:"bottom",maxHeight:t};if(!l&&C>=o||l&&P>=o){u&&we(a,R,V);var I=l?P-b:C-b;return{placement:"bottom",maxHeight:I}}if(e==="auto"||l){var U=t,G=l?O:x;return G>=o&&(U=Math.min(G-b-i,t)),{placement:"top",maxHeight:U}}if(e==="bottom")return u&&Re(a,R),{placement:"bottom",maxHeight:t};break;case"top":if(O>=m)return{placement:"top",maxHeight:t};if(x>=m&&!l)return u&&we(a,k,V),{placement:"top",maxHeight:t};if(!l&&x>=o||l&&O>=o){var q=t;return(!l&&x>=o||l&&O>=o)&&(q=l?O-F:x-F),u&&we(a,k,V),{placement:"top",maxHeight:q}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return s}function sr(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var Bt=function(t){return t==="auto"?"bottom":t},lr=function(t,r){var o,e=t.placement,u=t.theme,l=u.borderRadius,i=u.spacing,a=u.colors;return T((o={label:"menu"},ye(o,sr(e),"100%"),ye(o,"position","absolute"),ye(o,"width","100%"),ye(o,"zIndex",1),o),r?{}:{backgroundColor:a.neutral0,borderRadius:l,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:i.menuGutter,marginTop:i.menuGutter})},$t=S.createContext(null),cr=function(t){var r=t.children,o=t.minMenuHeight,e=t.maxMenuHeight,u=t.menuPlacement,l=t.menuPosition,i=t.menuShouldScrollIntoView,a=t.theme,s=S.useContext($t)||{},c=s.setPortalPlacement,d=S.useRef(null),g=S.useState(e),f=me(g,2),m=f[0],p=f[1],v=S.useState(null),h=me(v,2),E=h[0],y=h[1],b=a.spacing.controlHeight;return Ge(function(){var F=d.current;if(F){var O=l==="fixed",P=i&&!O,x=ur({maxHeight:e,menuEl:F,minHeight:o,placement:u,shouldScroll:P,isFixedPosition:O,controlHeight:b});p(x.maxHeight),y(x.placement),c==null||c(x.placement)}},[e,u,l,i,o,c,b]),r({ref:d,placerProps:T(T({},t),{},{placement:E||Bt(u),maxHeight:m})})},dr=function(t){var r=t.children,o=t.innerRef,e=t.innerProps;return L("div",_({},X(t,"menu",{menu:!0}),{ref:o},e),r)},fr=dr,pr=function(t,r){var o=t.maxHeight,e=t.theme.spacing.baseUnit;return T({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:e,paddingTop:e})},hr=function(t){var r=t.children,o=t.innerProps,e=t.innerRef,u=t.isMulti;return L("div",_({},X(t,"menuList",{"menu-list":!0,"menu-list--is-multi":u}),{ref:e},o),r)},Ht=function(t,r){var o=t.theme,e=o.spacing.baseUnit,u=o.colors;return T({textAlign:"center"},r?{}:{color:u.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},mr=Ht,vr=Ht,gr=function(t){var r=t.children,o=r===void 0?"No options":r,e=t.innerProps,u=ve(t,or);return L("div",_({},X(T(T({},u),{},{children:o,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),o)},br=function(t){var r=t.children,o=r===void 0?"Loading...":r,e=t.innerProps,u=ve(t,ar);return L("div",_({},X(T(T({},u),{},{children:o,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),o)},xr=function(t){var r=t.rect,o=t.offset,e=t.position;return{left:r.left,position:e,top:o,width:r.width,zIndex:1}},Er=function(t){var r=t.appendTo,o=t.children,e=t.controlElement,u=t.innerProps,l=t.menuPlacement,i=t.menuPosition,a=S.useRef(null),s=S.useRef(null),c=S.useState(Bt(l)),d=me(c,2),g=d[0],f=d[1],m=S.useMemo(function(){return{setPortalPlacement:f}},[]),p=S.useState(null),v=me(p,2),h=v[0],E=v[1],y=S.useCallback(function(){if(e){var P=Jn(e),x=i==="fixed"?0:window.pageYOffset,C=P[g]+x;(C!==(h==null?void 0:h.offset)||P.left!==(h==null?void 0:h.rect.left)||P.width!==(h==null?void 0:h.rect.width))&&E({offset:C,rect:P})}},[e,i,g,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);Ge(function(){y()},[y]);var b=S.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),e&&a.current&&(s.current=Wn(e,a.current,y,{elementResize:"ResizeObserver"in window}))},[e,y]);Ge(function(){b()},[b]);var F=S.useCallback(function(P){a.current=P,b()},[b]);if(!r&&i!=="fixed"||!h)return null;var O=L("div",_({ref:F},X(T(T({},t),{},{offset:h.offset,position:i,rect:h.rect}),"menuPortal",{"menu-portal":!0}),u),o);return L($t.Provider,{value:m},r?un.createPortal(O,r):O)},yr=function(t){var r=t.isDisabled,o=t.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},Cr=function(t){var r=t.children,o=t.innerProps,e=t.isDisabled,u=t.isRtl;return L("div",_({},X(t,"container",{"--is-disabled":e,"--is-rtl":u}),o),r)},Sr=function(t,r){var o=t.theme.spacing,e=t.isMulti,u=t.hasValue,l=t.selectProps.controlShouldRenderValue;return T({alignItems:"center",display:e&&u&&l?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},wr=function(t){var r=t.children,o=t.innerProps,e=t.isMulti,u=t.hasValue;return L("div",_({},X(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":u}),o),r)},Or=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Fr=function(t){var r=t.children,o=t.innerProps;return L("div",_({},X(t,"indicatorsContainer",{indicators:!0}),o),r)},st,Pr=["size"],Dr=["innerProps","isRtl","size"],Mr={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},zt=function(t){var r=t.size,o=ve(t,Pr);return L("svg",_({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Mr},o))},et=function(t){return L(zt,_({size:20},t),L("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Ut=function(t){return L(zt,_({size:20},t),L("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Nt=function(t,r){var o=t.isFocused,e=t.theme,u=e.spacing.baseUnit,l=e.colors;return T({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:o?l.neutral60:l.neutral20,padding:u*2,":hover":{color:o?l.neutral80:l.neutral40}})},Ar=Nt,Ir=function(t){var r=t.children,o=t.innerProps;return L("div",_({},X(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),r||L(Ut,null))},Rr=Nt,Tr=function(t){var r=t.children,o=t.innerProps;return L("div",_({},X(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),r||L(et,null))},Vr=function(t,r){var o=t.isDisabled,e=t.theme,u=e.spacing.baseUnit,l=e.colors;return T({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:o?l.neutral10:l.neutral20,marginBottom:u*2,marginTop:u*2})},Lr=function(t){var r=t.innerProps;return L("span",_({},r,X(t,"indicatorSeparator",{"indicator-separator":!0})))},_r=wn(st||(st=Tn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),kr=function(t,r){var o=t.isFocused,e=t.size,u=t.theme,l=u.colors,i=u.spacing.baseUnit;return T({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},r?{}:{color:o?l.neutral60:l.neutral20,padding:i*2})},_e=function(t){var r=t.delay,o=t.offset;return L("span",{css:Xe({animation:"".concat(_r," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},jr=function(t){var r=t.innerProps,o=t.isRtl,e=t.size,u=e===void 0?4:e,l=ve(t,Dr);return L("div",_({},X(T(T({},l),{},{innerProps:r,isRtl:o,size:u}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),L(_e,{delay:0,offset:o}),L(_e,{delay:160,offset:!0}),L(_e,{delay:320,offset:!o}))},Br=function(t,r){var o=t.isDisabled,e=t.isFocused,u=t.theme,l=u.colors,i=u.borderRadius,a=u.spacing;return T({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:o?l.neutral5:l.neutral0,borderColor:o?l.neutral10:e?l.primary:l.neutral20,borderRadius:i,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(l.primary):void 0,"&:hover":{borderColor:e?l.primary:l.neutral30}})},$r=function(t){var r=t.children,o=t.isDisabled,e=t.isFocused,u=t.innerRef,l=t.innerProps,i=t.menuIsOpen;return L("div",_({ref:u},X(t,"control",{control:!0,"control--is-disabled":o,"control--is-focused":e,"control--menu-is-open":i}),l,{"aria-disabled":o||void 0}),r)},Hr=$r,zr=["data"],Ur=function(t,r){var o=t.theme.spacing;return r?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},Nr=function(t){var r=t.children,o=t.cx,e=t.getStyles,u=t.getClassNames,l=t.Heading,i=t.headingProps,a=t.innerProps,s=t.label,c=t.theme,d=t.selectProps;return L("div",_({},X(t,"group",{group:!0}),a),L(l,_({},i,{selectProps:d,theme:c,getStyles:e,getClassNames:u,cx:o}),s),L("div",null,r))},Wr=function(t,r){var o=t.theme,e=o.colors,u=o.spacing;return T({label:"group",cursor:"default",display:"block"},r?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:u.baseUnit*3,paddingRight:u.baseUnit*3,textTransform:"uppercase"})},Yr=function(t){var r=_t(t);r.data;var o=ve(r,zr);return L("div",_({},X(t,"groupHeading",{"group-heading":!0}),o))},Gr=Nr,Qr=["innerRef","isDisabled","isHidden","inputClassName"],Kr=function(t,r){var o=t.isDisabled,e=t.value,u=t.theme,l=u.spacing,i=u.colors;return T(T({visibility:o?"hidden":"visible",transform:e?"translateZ(0)":""},Xr),r?{}:{margin:l.baseUnit/2,paddingBottom:l.baseUnit/2,paddingTop:l.baseUnit/2,color:i.neutral80})},Wt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Xr={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":T({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Wt)},qr=function(t){return T({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Wt)},Jr=function(t){var r=t.cx,o=t.value,e=_t(t),u=e.innerRef,l=e.isDisabled,i=e.isHidden,a=e.inputClassName,s=ve(e,Qr);return L("div",_({},X(t,"input",{"input-container":!0}),{"data-value":o||""}),L("input",_({className:r({input:!0},a),ref:u,style:qr(i),disabled:l},s)))},Zr=Jr,ei=function(t,r){var o=t.theme,e=o.spacing,u=o.borderRadius,l=o.colors;return T({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:l.neutral10,borderRadius:u/2,margin:e.baseUnit/2})},ti=function(t,r){var o=t.theme,e=o.borderRadius,u=o.colors,l=t.cropWithEllipsis;return T({overflow:"hidden",textOverflow:l||l===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:e/2,color:u.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},ni=function(t,r){var o=t.theme,e=o.spacing,u=o.borderRadius,l=o.colors,i=t.isFocused;return T({alignItems:"center",display:"flex"},r?{}:{borderRadius:u/2,backgroundColor:i?l.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:l.dangerLight,color:l.danger}})},Yt=function(t){var r=t.children,o=t.innerProps;return L("div",o,r)},ri=Yt,ii=Yt;function oi(n){var t=n.children,r=n.innerProps;return L("div",_({role:"button"},r),t||L(et,{size:14}))}var ai=function(t){var r=t.children,o=t.components,e=t.data,u=t.innerProps,l=t.isDisabled,i=t.removeProps,a=t.selectProps,s=o.Container,c=o.Label,d=o.Remove;return L(s,{data:e,innerProps:T(T({},X(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":l})),u),selectProps:a},L(c,{data:e,innerProps:T({},X(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},r),L(d,{data:e,innerProps:T(T({},X(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},i),selectProps:a}))},ui=ai,si=function(t,r){var o=t.isDisabled,e=t.isFocused,u=t.isSelected,l=t.theme,i=l.spacing,a=l.colors;return T({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:u?a.primary:e?a.primary25:"transparent",color:o?a.neutral20:u?a.neutral0:"inherit",padding:"".concat(i.baseUnit*2,"px ").concat(i.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:u?a.primary:a.primary50}})},li=function(t){var r=t.children,o=t.isDisabled,e=t.isFocused,u=t.isSelected,l=t.innerRef,i=t.innerProps;return L("div",_({},X(t,"option",{option:!0,"option--is-disabled":o,"option--is-focused":e,"option--is-selected":u}),{ref:l,"aria-disabled":o},i),r)},ci=li,di=function(t,r){var o=t.theme,e=o.spacing,u=o.colors;return T({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:u.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},fi=function(t){var r=t.children,o=t.innerProps;return L("div",_({},X(t,"placeholder",{placeholder:!0}),o),r)},pi=fi,hi=function(t,r){var o=t.isDisabled,e=t.theme,u=e.spacing,l=e.colors;return T({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:o?l.neutral40:l.neutral80,marginLeft:u.baseUnit/2,marginRight:u.baseUnit/2})},mi=function(t){var r=t.children,o=t.isDisabled,e=t.innerProps;return L("div",_({},X(t,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),e),r)},vi=mi,gi={ClearIndicator:Tr,Control:Hr,DropdownIndicator:Ir,DownChevron:Ut,CrossIcon:et,Group:Gr,GroupHeading:Yr,IndicatorsContainer:Fr,IndicatorSeparator:Lr,Input:Zr,LoadingIndicator:jr,Menu:fr,MenuList:hr,MenuPortal:Er,LoadingMessage:br,NoOptionsMessage:gr,MultiValue:ui,MultiValueContainer:ri,MultiValueLabel:ii,MultiValueRemove:oi,Option:ci,Placeholder:pi,SelectContainer:Cr,SingleValue:vi,ValueContainer:wr},bi=function(t){return T(T({},gi),t.components)},lt=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function xi(n,t){return!!(n===t||lt(n)&&lt(t))}function Ei(n,t){if(n.length!==t.length)return!1;for(var r=0;r<n.length;r++)if(!xi(n[r],t[r]))return!1;return!0}function yi(n,t){t===void 0&&(t=Ei);var r=null;function o(){for(var e=[],u=0;u<arguments.length;u++)e[u]=arguments[u];if(r&&r.lastThis===this&&t(e,r.lastArgs))return r.lastResult;var l=n.apply(this,e);return r={lastResult:l,lastArgs:e,lastThis:this},l}return o.clear=function(){r=null},o}var Ci={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Si=function(t){return L("span",_({css:Ci},t))},ct=Si,wi={guidance:function(t){var r=t.isSearchable,o=t.isMulti,e=t.isDisabled,u=t.tabSelectsValue,l=t.context;switch(l){case"menu":return"Use Up and Down to choose options".concat(e?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(u?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(t["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var r=t.action,o=t.label,e=o===void 0?"":o,u=t.labels,l=t.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(u.length>1?"s":""," ").concat(u.join(","),", selected.");case"select-option":return l?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var r=t.context,o=t.focused,e=t.options,u=t.label,l=u===void 0?"":u,i=t.selectValue,a=t.isDisabled,s=t.isSelected,c=function(m,p){return m&&m.length?"".concat(m.indexOf(p)+1," of ").concat(m.length):""};if(r==="value"&&i)return"value ".concat(l," focused, ").concat(c(i,o),".");if(r==="menu"){var d=a?" disabled":"",g="".concat(s?"selected":"focused").concat(d);return"option ".concat(l," ").concat(g,", ").concat(c(e,o),".")}return""},onFilter:function(t){var r=t.inputValue,o=t.resultsMessage;return"".concat(o).concat(r?" for search term "+r:"",".")}},Oi=function(t){var r=t.ariaSelection,o=t.focusedOption,e=t.focusedValue,u=t.focusableOptions,l=t.isFocused,i=t.selectValue,a=t.selectProps,s=t.id,c=a.ariaLiveMessages,d=a.getOptionLabel,g=a.inputValue,f=a.isMulti,m=a.isOptionDisabled,p=a.isSearchable,v=a.menuIsOpen,h=a.options,E=a.screenReaderStatus,y=a.tabSelectsValue,b=a["aria-label"],F=a["aria-live"],O=S.useMemo(function(){return T(T({},wi),c||{})},[c]),P=S.useMemo(function(){var U="";if(r&&O.onChange){var G=r.option,q=r.options,oe=r.removedValue,ae=r.removedValues,ue=r.value,se=function(ee){return Array.isArray(ee)?null:ee},le=oe||G||se(ue),Z=le?d(le):"",te=q||ae||void 0,ie=te?te.map(d):[],ce=T({isDisabled:le&&m(le,i),label:Z,labels:ie},r);U=O.onChange(ce)}return U},[r,O,m,i,d]),x=S.useMemo(function(){var U="",G=o||e,q=!!(o&&i&&i.includes(o));if(G&&O.onFocus){var oe={focused:G,label:d(G),isDisabled:m(G,i),isSelected:q,options:u,context:G===o?"menu":"value",selectValue:i};U=O.onFocus(oe)}return U},[o,e,d,m,O,u,i]),C=S.useMemo(function(){var U="";if(v&&h.length&&O.onFilter){var G=E({count:u.length});U=O.onFilter({inputValue:g,resultsMessage:G})}return U},[u,g,v,O,h,E]),R=S.useMemo(function(){var U="";if(O.guidance){var G=e?"value":v?"menu":"input";U=O.guidance({"aria-label":b,context:G,isDisabled:o&&m(o,i),isMulti:f,isSearchable:p,tabSelectsValue:y})}return U},[b,o,e,f,m,p,v,O,i,y]),k="".concat(x," ").concat(C," ").concat(R),V=L(S.Fragment,null,L("span",{id:"aria-selection"},P),L("span",{id:"aria-context"},k)),I=(r==null?void 0:r.action)==="initial-input-focus";return L(S.Fragment,null,L(ct,{id:s},I&&V),L(ct,{"aria-live":F,"aria-atomic":"false","aria-relevant":"additions text"},l&&!I&&V))},Fi=Oi,Qe=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Pi=new RegExp("["+Qe.map(function(n){return n.letters}).join("")+"]","g"),Gt={};for(var ke=0;ke<Qe.length;ke++)for(var je=Qe[ke],Be=0;Be<je.letters.length;Be++)Gt[je.letters[Be]]=je.base;var Qt=function(t){return t.replace(Pi,function(r){return Gt[r]})},Di=yi(Qt),dt=function(t){return t.replace(/^\s+|\s+$/g,"")},Mi=function(t){return"".concat(t.label," ").concat(t.value)},Ai=function(t){return function(r,o){if(r.data.__isNew__)return!0;var e=T({ignoreCase:!0,ignoreAccents:!0,stringify:Mi,trim:!0,matchFrom:"any"},t),u=e.ignoreCase,l=e.ignoreAccents,i=e.stringify,a=e.trim,s=e.matchFrom,c=a?dt(o):o,d=a?dt(i(r)):i(r);return u&&(c=c.toLowerCase(),d=d.toLowerCase()),l&&(c=Di(c),d=Qt(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Ii=["innerRef"];function Ri(n){var t=n.innerRef,r=ve(n,Ii),o=ir(r,"onExited","in","enter","exit","appear");return L("input",_({ref:t},o,{css:Xe({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Ti=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function Vi(n){var t=n.isEnabled,r=n.onBottomArrive,o=n.onBottomLeave,e=n.onTopArrive,u=n.onTopLeave,l=S.useRef(!1),i=S.useRef(!1),a=S.useRef(0),s=S.useRef(null),c=S.useCallback(function(v,h){if(s.current!==null){var E=s.current,y=E.scrollTop,b=E.scrollHeight,F=E.clientHeight,O=s.current,P=h>0,x=b-F-y,C=!1;x>h&&l.current&&(o&&o(v),l.current=!1),P&&i.current&&(u&&u(v),i.current=!1),P&&h>x?(r&&!l.current&&r(v),O.scrollTop=b,C=!0,l.current=!0):!P&&-h>y&&(e&&!i.current&&e(v),O.scrollTop=0,C=!0,i.current=!0),C&&Ti(v)}},[r,o,e,u]),d=S.useCallback(function(v){c(v,v.deltaY)},[c]),g=S.useCallback(function(v){a.current=v.changedTouches[0].clientY},[]),f=S.useCallback(function(v){var h=a.current-v.changedTouches[0].clientY;c(v,h)},[c]),m=S.useCallback(function(v){if(v){var h=tr?{passive:!1}:!1;v.addEventListener("wheel",d,h),v.addEventListener("touchstart",g,h),v.addEventListener("touchmove",f,h)}},[f,g,d]),p=S.useCallback(function(v){v&&(v.removeEventListener("wheel",d,!1),v.removeEventListener("touchstart",g,!1),v.removeEventListener("touchmove",f,!1))},[f,g,d]);return S.useEffect(function(){if(t){var v=s.current;return m(v),function(){p(v)}}},[t,m,p]),function(v){s.current=v}}var ft=["boxSizing","height","overflow","paddingRight","position"],pt={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function ht(n){n.preventDefault()}function mt(n){n.stopPropagation()}function vt(){var n=this.scrollTop,t=this.scrollHeight,r=n+this.offsetHeight;n===0?this.scrollTop=1:r===t&&(this.scrollTop=n-1)}function gt(){return"ontouchstart"in window||navigator.maxTouchPoints}var bt=!!(typeof window<"u"&&window.document&&window.document.createElement),xe=0,be={capture:!1,passive:!1};function Li(n){var t=n.isEnabled,r=n.accountForScrollbars,o=r===void 0?!0:r,e=S.useRef({}),u=S.useRef(null),l=S.useCallback(function(a){if(bt){var s=document.body,c=s&&s.style;if(o&&ft.forEach(function(m){var p=c&&c[m];e.current[m]=p}),o&&xe<1){var d=parseInt(e.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,f=window.innerWidth-g+d||0;Object.keys(pt).forEach(function(m){var p=pt[m];c&&(c[m]=p)}),c&&(c.paddingRight="".concat(f,"px"))}s&&gt()&&(s.addEventListener("touchmove",ht,be),a&&(a.addEventListener("touchstart",vt,be),a.addEventListener("touchmove",mt,be))),xe+=1}},[o]),i=S.useCallback(function(a){if(bt){var s=document.body,c=s&&s.style;xe=Math.max(xe-1,0),o&&xe<1&&ft.forEach(function(d){var g=e.current[d];c&&(c[d]=g)}),s&&gt()&&(s.removeEventListener("touchmove",ht,be),a&&(a.removeEventListener("touchstart",vt,be),a.removeEventListener("touchmove",mt,be)))}},[o]);return S.useEffect(function(){if(t){var a=u.current;return l(a),function(){i(a)}}},[t,l,i]),function(a){u.current=a}}var _i=function(t){var r=t.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},ki={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function ji(n){var t=n.children,r=n.lockEnabled,o=n.captureEnabled,e=o===void 0?!0:o,u=n.onBottomArrive,l=n.onBottomLeave,i=n.onTopArrive,a=n.onTopLeave,s=Vi({isEnabled:e,onBottomArrive:u,onBottomLeave:l,onTopArrive:i,onTopLeave:a}),c=Li({isEnabled:r}),d=function(f){s(f),c(f)};return L(S.Fragment,null,r&&L("div",{onClick:_i,css:ki}),t(d))}var Bi={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},$i=function(t){var r=t.name,o=t.onFocus;return L("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:Bi,value:"",onChange:function(){}})},Hi=$i,zi=function(t){return t.label},Ui=function(t){return t.label},Ni=function(t){return t.value},Wi=function(t){return!!t.isDisabled},Yi={clearIndicator:Rr,container:yr,control:Br,dropdownIndicator:Ar,group:Ur,groupHeading:Wr,indicatorsContainer:Or,indicatorSeparator:Vr,input:Kr,loadingIndicator:kr,loadingMessage:vr,menu:lr,menuList:pr,menuPortal:xr,multiValue:ei,multiValueLabel:ti,multiValueRemove:ni,noOptionsMessage:mr,option:si,placeholder:di,singleValue:hi,valueContainer:Sr},Gi={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Qi=4,Kt=4,Ki=38,Xi=Kt*2,qi={baseUnit:Kt,controlHeight:Ki,menuGutter:Xi},$e={borderRadius:Qi,colors:Gi,spacing:qi},Ji={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:ut(),captureMenuScroll:!ut(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Ai(),formatGroupLabel:zi,getOptionLabel:Ui,getOptionValue:Ni,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Wi,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Zn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var r=t.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function xt(n,t,r,o){var e=Zt(n,t,r),u=en(n,t,r),l=Jt(n,t),i=Te(n,t);return{type:"option",data:t,isDisabled:e,isSelected:u,label:l,value:i,index:o}}function Xt(n,t){return n.options.map(function(r,o){if("options"in r){var e=r.options.map(function(l,i){return xt(n,l,t,i)}).filter(function(l){return Et(n,l)});return e.length>0?{type:"group",data:r,options:e,index:o}:void 0}var u=xt(n,r,t,o);return Et(n,u)?u:void 0}).filter(nr)}function qt(n){return n.reduce(function(t,r){return r.type==="group"?t.push.apply(t,At(r.options.map(function(o){return o.data}))):t.push(r.data),t},[])}function Zi(n,t){return qt(Xt(n,t))}function Et(n,t){var r=n.inputValue,o=r===void 0?"":r,e=t.data,u=t.isSelected,l=t.label,i=t.value;return(!nn(n)||!u)&&tn(n,{label:l,value:i,data:e},o)}function eo(n,t){var r=n.focusedValue,o=n.selectValue,e=o.indexOf(r);if(e>-1){var u=t.indexOf(r);if(u>-1)return r;if(e<t.length)return t[e]}return null}function to(n,t){var r=n.focusedOption;return r&&t.indexOf(r)>-1?r:t[0]}var Jt=function(t,r){return t.getOptionLabel(r)},Te=function(t,r){return t.getOptionValue(r)};function Zt(n,t,r){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,r):!1}function en(n,t,r){if(r.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,r);var o=Te(n,t);return r.some(function(e){return Te(n,e)===o})}function tn(n,t,r){return n.filterOption?n.filterOption(t,r):!0}var nn=function(t){var r=t.hideSelectedOptions,o=t.isMulti;return r===void 0?o:r},no=1,rn=function(n){pn(r,n);var t=hn(r);function r(o){var e;if(mn(this,r),e=t.call(this,o),e.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.instancePrefix="",e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.controlRef=null,e.getControlRef=function(i){e.controlRef=i},e.focusedOptionRef=null,e.getFocusedOptionRef=function(i){e.focusedOptionRef=i},e.menuListRef=null,e.getMenuListRef=function(i){e.menuListRef=i},e.inputRef=null,e.getInputRef=function(i){e.inputRef=i},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(i,a){var s=e.props,c=s.onChange,d=s.name;a.name=d,e.ariaOnChange(i,a),c(i,a)},e.setValue=function(i,a,s){var c=e.props,d=c.closeMenuOnSelect,g=c.isMulti,f=c.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:f}),d&&(e.setState({inputIsHiddenAfterUpdate:!g}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(i,{action:a,option:s})},e.selectOption=function(i){var a=e.props,s=a.blurInputOnSelect,c=a.isMulti,d=a.name,g=e.state.selectValue,f=c&&e.isOptionSelected(i,g),m=e.isOptionDisabled(i,g);if(f){var p=e.getOptionValue(i);e.setValue(g.filter(function(v){return e.getOptionValue(v)!==p}),"deselect-option",i)}else if(!m)c?e.setValue([].concat(At(g),[i]),"select-option",i):e.setValue(i,"select-option");else{e.ariaOnChange(i,{action:"select-option",option:i,name:d});return}s&&e.blurInput()},e.removeValue=function(i){var a=e.props.isMulti,s=e.state.selectValue,c=e.getOptionValue(i),d=s.filter(function(f){return e.getOptionValue(f)!==c}),g=Fe(a,d,d[0]||null);e.onChange(g,{action:"remove-value",removedValue:i}),e.focusInput()},e.clearValue=function(){var i=e.state.selectValue;e.onChange(Fe(e.props.isMulti,[],null),{action:"clear",removedValues:i})},e.popValue=function(){var i=e.props.isMulti,a=e.state.selectValue,s=a[a.length-1],c=a.slice(0,a.length-1),d=Fe(i,c,c[0]||null);e.onChange(d,{action:"pop-value",removedValue:s})},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return Qn.apply(void 0,[e.props.classNamePrefix].concat(a))},e.getOptionLabel=function(i){return Jt(e.props,i)},e.getOptionValue=function(i){return Te(e.props,i)},e.getStyles=function(i,a){var s=e.props.unstyled,c=Yi[i](a,s);c.boxSizing="border-box";var d=e.props.styles[i];return d?d(c,a):c},e.getClassNames=function(i,a){var s,c;return(s=(c=e.props.classNames)[i])===null||s===void 0?void 0:s.call(c,a)},e.getElementId=function(i){return"".concat(e.instancePrefix,"-").concat(i)},e.getComponents=function(){return bi(e.props)},e.buildCategorizedOptions=function(){return Xt(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return qt(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(i,a){e.setState({ariaSelection:T({value:i},a)})},e.onMenuMouseDown=function(i){i.button===0&&(i.stopPropagation(),i.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(i){e.blockOptionHover=!1},e.onControlMouseDown=function(i){if(!i.defaultPrevented){var a=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&e.onMenuClose():a&&e.openMenu("first"):(a&&(e.openAfterFocus=!0),e.focusInput()),i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&i.preventDefault()}},e.onDropdownIndicatorMouseDown=function(i){if(!(i&&i.type==="mousedown"&&i.button!==0)&&!e.props.isDisabled){var a=e.props,s=a.isMulti,c=a.menuIsOpen;e.focusInput(),c?(e.setState({inputIsHiddenAfterUpdate:!s}),e.onMenuClose()):e.openMenu("first"),i.preventDefault()}},e.onClearIndicatorMouseDown=function(i){i&&i.type==="mousedown"&&i.button!==0||(e.clearValue(),i.preventDefault(),e.openAfterFocus=!1,i.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(i){typeof e.props.closeMenuOnScroll=="boolean"?i.target instanceof HTMLElement&&Ve(i.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(i)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(i){var a=i.touches,s=a&&a.item(0);s&&(e.initialTouchX=s.clientX,e.initialTouchY=s.clientY,e.userIsDragging=!1)},e.onTouchMove=function(i){var a=i.touches,s=a&&a.item(0);if(s){var c=Math.abs(s.clientX-e.initialTouchX),d=Math.abs(s.clientY-e.initialTouchY),g=5;e.userIsDragging=c>g||d>g}},e.onTouchEnd=function(i){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(i.target)&&e.menuListRef&&!e.menuListRef.contains(i.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(i){e.userIsDragging||e.onControlMouseDown(i)},e.onClearIndicatorTouchEnd=function(i){e.userIsDragging||e.onClearIndicatorMouseDown(i)},e.onDropdownIndicatorTouchEnd=function(i){e.userIsDragging||e.onDropdownIndicatorMouseDown(i)},e.handleInputChange=function(i){var a=e.props.inputValue,s=i.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(s,{action:"input-change",prevInputValue:a}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(i){e.props.onFocus&&e.props.onFocus(i),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(i){var a=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(i),e.onInputChange("",{action:"input-blur",prevInputValue:a}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(i){e.blockOptionHover||e.state.focusedOption===i||e.setState({focusedOption:i})},e.shouldHideSelectedOptions=function(){return nn(e.props)},e.onValueInputFocus=function(i){i.preventDefault(),i.stopPropagation(),e.focus()},e.onKeyDown=function(i){var a=e.props,s=a.isMulti,c=a.backspaceRemovesValue,d=a.escapeClearsValue,g=a.inputValue,f=a.isClearable,m=a.isDisabled,p=a.menuIsOpen,v=a.onKeyDown,h=a.tabSelectsValue,E=a.openMenuOnFocus,y=e.state,b=y.focusedOption,F=y.focusedValue,O=y.selectValue;if(!m&&!(typeof v=="function"&&(v(i),i.defaultPrevented))){switch(e.blockOptionHover=!0,i.key){case"ArrowLeft":if(!s||g)return;e.focusValue("previous");break;case"ArrowRight":if(!s||g)return;e.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(F)e.removeValue(F);else{if(!c)return;s?e.popValue():f&&e.clearValue()}break;case"Tab":if(e.isComposing||i.shiftKey||!p||!h||!b||E&&e.isOptionSelected(b,O))return;e.selectOption(b);break;case"Enter":if(i.keyCode===229)break;if(p){if(!b||e.isComposing)return;e.selectOption(b);break}return;case"Escape":p?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:g}),e.onMenuClose()):f&&d&&e.clearValue();break;case" ":if(g)return;if(!p){e.openMenu("first");break}if(!b)return;e.selectOption(b);break;case"ArrowUp":p?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":p?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!p)return;e.focusOption("pageup");break;case"PageDown":if(!p)return;e.focusOption("pagedown");break;case"Home":if(!p)return;e.focusOption("first");break;case"End":if(!p)return;e.focusOption("last");break;default:return}i.preventDefault()}},e.instancePrefix="react-select-"+(e.props.instanceId||++no),e.state.selectValue=ot(o.value),o.menuIsOpen&&e.state.selectValue.length){var u=e.buildFocusableOptions(),l=u.indexOf(e.state.selectValue[0]);e.state.focusedOption=u[l]}return e}return vn(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&at(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var u=this.props,l=u.isDisabled,i=u.menuIsOpen,a=this.state.isFocused;(a&&!l&&e.isDisabled||a&&i&&!e.menuIsOpen)&&this.focusInput(),a&&l&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!l&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(at(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,u){this.props.onInputChange(e,u)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var u=this,l=this.state,i=l.selectValue,a=l.isFocused,s=this.buildFocusableOptions(),c=e==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(i[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c]},function(){return u.onMenuOpen()})}},{key:"focusValue",value:function(e){var u=this.state,l=u.selectValue,i=u.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=l.indexOf(i);i||(a=-1);var s=l.length-1,c=-1;if(l.length){switch(e){case"previous":a===0?c=0:a===-1?c=s:c=a-1;break;case"next":a>-1&&a<s&&(c=a+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:l[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",u=this.props.pageSize,l=this.state.focusedOption,i=this.getFocusableOptions();if(i.length){var a=0,s=i.indexOf(l);l||(s=-1),e==="up"?a=s>0?s-1:i.length-1:e==="down"?a=(s+1)%i.length:e==="pageup"?(a=s-u,a<0&&(a=0)):e==="pagedown"?(a=s+u,a>i.length-1&&(a=i.length-1)):e==="last"&&(a=i.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:i[a],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme($e):T(T({},$e),this.props.theme):$e}},{key:"getCommonProps",value:function(){var e=this.clearValue,u=this.cx,l=this.getStyles,i=this.getClassNames,a=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,g=d.isMulti,f=d.isRtl,m=d.options,p=this.hasValue();return{clearValue:e,cx:u,getStyles:l,getClassNames:i,getValue:a,hasValue:p,isMulti:g,isRtl:f,options:m,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,u=e.isClearable,l=e.isMulti;return u===void 0?l:u}},{key:"isOptionDisabled",value:function(e,u){return Zt(this.props,e,u)}},{key:"isOptionSelected",value:function(e,u){return en(this.props,e,u)}},{key:"filterOption",value:function(e,u){return tn(this.props,e,u)}},{key:"formatOptionLabel",value:function(e,u){if(typeof this.props.formatOptionLabel=="function"){var l=this.props.inputValue,i=this.state.selectValue;return this.props.formatOptionLabel(e,{context:u,inputValue:l,selectValue:i})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,u=e.isDisabled,l=e.isSearchable,i=e.inputId,a=e.inputValue,s=e.tabIndex,c=e.form,d=e.menuIsOpen,g=e.required,f=this.getComponents(),m=f.Input,p=this.state,v=p.inputIsHidden,h=p.ariaSelection,E=this.commonProps,y=i||this.getElementId("input"),b=T(T(T({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox"},d&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!l&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return l?S.createElement(m,_({},E,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:u,isHidden:v,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:a},b)):S.createElement(Ri,_({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Ie,onFocus:this.onInputFocus,disabled:u,tabIndex:s,inputMode:"none",form:c,value:""},b))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,u=this.getComponents(),l=u.MultiValue,i=u.MultiValueContainer,a=u.MultiValueLabel,s=u.MultiValueRemove,c=u.SingleValue,d=u.Placeholder,g=this.commonProps,f=this.props,m=f.controlShouldRenderValue,p=f.isDisabled,v=f.isMulti,h=f.inputValue,E=f.placeholder,y=this.state,b=y.selectValue,F=y.focusedValue,O=y.isFocused;if(!this.hasValue()||!m)return h?null:S.createElement(d,_({},g,{key:"placeholder",isDisabled:p,isFocused:O,innerProps:{id:this.getElementId("placeholder")}}),E);if(v)return b.map(function(x,C){var R=x===F,k="".concat(e.getOptionLabel(x),"-").concat(e.getOptionValue(x));return S.createElement(l,_({},g,{components:{Container:i,Label:a,Remove:s},isFocused:R,isDisabled:p,key:k,index:C,removeProps:{onClick:function(){return e.removeValue(x)},onTouchEnd:function(){return e.removeValue(x)},onMouseDown:function(I){I.preventDefault()}},data:x}),e.formatOptionLabel(x,"value"))});if(h)return null;var P=b[0];return S.createElement(c,_({},g,{data:P,isDisabled:p}),this.formatOptionLabel(P,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),u=e.ClearIndicator,l=this.commonProps,i=this.props,a=i.isDisabled,s=i.isLoading,c=this.state.isFocused;if(!this.isClearable()||!u||a||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return S.createElement(u,_({},l,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),u=e.LoadingIndicator,l=this.commonProps,i=this.props,a=i.isDisabled,s=i.isLoading,c=this.state.isFocused;if(!u||!s)return null;var d={"aria-hidden":"true"};return S.createElement(u,_({},l,{innerProps:d,isDisabled:a,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),u=e.DropdownIndicator,l=e.IndicatorSeparator;if(!u||!l)return null;var i=this.commonProps,a=this.props.isDisabled,s=this.state.isFocused;return S.createElement(l,_({},i,{isDisabled:a,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),u=e.DropdownIndicator;if(!u)return null;var l=this.commonProps,i=this.props.isDisabled,a=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return S.createElement(u,_({},l,{innerProps:s,isDisabled:i,isFocused:a}))}},{key:"renderMenu",value:function(){var e=this,u=this.getComponents(),l=u.Group,i=u.GroupHeading,a=u.Menu,s=u.MenuList,c=u.MenuPortal,d=u.LoadingMessage,g=u.NoOptionsMessage,f=u.Option,m=this.commonProps,p=this.state.focusedOption,v=this.props,h=v.captureMenuScroll,E=v.inputValue,y=v.isLoading,b=v.loadingMessage,F=v.minMenuHeight,O=v.maxMenuHeight,P=v.menuIsOpen,x=v.menuPlacement,C=v.menuPosition,R=v.menuPortalTarget,k=v.menuShouldBlockScroll,V=v.menuShouldScrollIntoView,I=v.noOptionsMessage,U=v.onMenuScrollToTop,G=v.onMenuScrollToBottom;if(!P)return null;var q=function(te,ie){var ce=te.type,J=te.data,ee=te.isDisabled,pe=te.isSelected,he=te.label,w=te.value,A=p===J,B=ee?void 0:function(){return e.onOptionHover(J)},$=ee?void 0:function(){return e.selectOption(J)},j="".concat(e.getElementId("option"),"-").concat(ie),N={id:j,onClick:$,onMouseMove:B,onMouseOver:B,tabIndex:-1};return S.createElement(f,_({},m,{innerProps:N,data:J,isDisabled:ee,isSelected:pe,key:j,label:he,type:ce,value:w,isFocused:A,innerRef:A?e.getFocusedOptionRef:void 0}),e.formatOptionLabel(te.data,"menu"))},oe;if(this.hasOptions())oe=this.getCategorizedOptions().map(function(Z){if(Z.type==="group"){var te=Z.data,ie=Z.options,ce=Z.index,J="".concat(e.getElementId("group"),"-").concat(ce),ee="".concat(J,"-heading");return S.createElement(l,_({},m,{key:J,data:te,options:ie,Heading:i,headingProps:{id:ee,data:Z.data},label:e.formatGroupLabel(Z.data)}),Z.options.map(function(pe){return q(pe,"".concat(ce,"-").concat(pe.index))}))}else if(Z.type==="option")return q(Z,"".concat(Z.index))});else if(y){var ae=b({inputValue:E});if(ae===null)return null;oe=S.createElement(d,m,ae)}else{var ue=I({inputValue:E});if(ue===null)return null;oe=S.createElement(g,m,ue)}var se={minMenuHeight:F,maxMenuHeight:O,menuPlacement:x,menuPosition:C,menuShouldScrollIntoView:V},le=S.createElement(cr,_({},m,se),function(Z){var te=Z.ref,ie=Z.placerProps,ce=ie.placement,J=ie.maxHeight;return S.createElement(a,_({},m,se,{innerRef:te,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove,id:e.getElementId("listbox")},isLoading:y,placement:ce}),S.createElement(ji,{captureEnabled:h,onTopArrive:U,onBottomArrive:G,lockEnabled:k},function(ee){return S.createElement(s,_({},m,{innerRef:function(he){e.getMenuListRef(he),ee(he)},isLoading:y,maxHeight:J,focusedOption:p}),oe)}))});return R||C==="fixed"?S.createElement(c,_({},m,{appendTo:R,controlElement:this.controlRef,menuPlacement:x,menuPosition:C}),le):le}},{key:"renderFormField",value:function(){var e=this,u=this.props,l=u.delimiter,i=u.isDisabled,a=u.isMulti,s=u.name,c=u.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!i)return S.createElement(Hi,{name:s,onFocus:this.onValueInputFocus});if(!(!s||i))if(a)if(l){var g=d.map(function(p){return e.getOptionValue(p)}).join(l);return S.createElement("input",{name:s,type:"hidden",value:g})}else{var f=d.length>0?d.map(function(p,v){return S.createElement("input",{key:"i-".concat(v),name:s,type:"hidden",value:e.getOptionValue(p)})}):S.createElement("input",{name:s,type:"hidden",value:""});return S.createElement("div",null,f)}else{var m=d[0]?this.getOptionValue(d[0]):"";return S.createElement("input",{name:s,type:"hidden",value:m})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,u=this.state,l=u.ariaSelection,i=u.focusedOption,a=u.focusedValue,s=u.isFocused,c=u.selectValue,d=this.getFocusableOptions();return S.createElement(Fi,_({},e,{id:this.getElementId("live-region"),ariaSelection:l,focusedOption:i,focusedValue:a,isFocused:s,selectValue:c,focusableOptions:d}))}},{key:"render",value:function(){var e=this.getComponents(),u=e.Control,l=e.IndicatorsContainer,i=e.SelectContainer,a=e.ValueContainer,s=this.props,c=s.className,d=s.id,g=s.isDisabled,f=s.menuIsOpen,m=this.state.isFocused,p=this.commonProps=this.getCommonProps();return S.createElement(i,_({},p,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:m}),this.renderLiveRegion(),S.createElement(u,_({},p,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:m,menuIsOpen:f}),S.createElement(a,_({},p,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),S.createElement(l,_({},p,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,u){var l=u.prevProps,i=u.clearFocusValueOnUpdate,a=u.inputIsHiddenAfterUpdate,s=u.ariaSelection,c=u.isFocused,d=u.prevWasFocused,g=e.options,f=e.value,m=e.menuIsOpen,p=e.inputValue,v=e.isMulti,h=ot(f),E={};if(l&&(f!==l.value||g!==l.options||m!==l.menuIsOpen||p!==l.inputValue)){var y=m?Zi(e,h):[],b=i?eo(u,h):null,F=to(u,y);E={selectValue:h,focusedOption:F,focusedValue:b,clearFocusValueOnUpdate:!1}}var O=a!=null&&e!==l?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},P=s,x=c&&d;return c&&!x&&(P={value:Fe(v,h,h[0]||null),options:h,action:"initial-input-focus"},x=!d),(s==null?void 0:s.action)==="initial-input-focus"&&(P=null),T(T(T({},E),O),{},{prevProps:e,ariaSelection:P,prevWasFocused:x})}}]),r}(S.Component);rn.defaultProps=Ji;var ro=S.forwardRef(function(n,t){var r=Mn(n);return S.createElement(rn,_({ref:t},r))}),yt=ro,on={exports:{}};(function(n,t){(function(o,e){n.exports=e(S)})(sn,r=>(()=>{var o={"./node_modules/css-mediaquery/index.js":(i,a)=>{a.match=m,a.parse=p;var s=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,c=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,d=/^(?:(min|max)-)?(.+)/,g=/(em|rem|px|cm|mm|in|pt|pc)?$/,f=/(dpi|dpcm|dppx)?$/;function m(y,b){return p(y).some(function(F){var O=F.inverse,P=F.type==="all"||b.type===F.type;if(P&&O||!(P||O))return!1;var x=F.expressions.every(function(C){var R=C.feature,k=C.modifier,V=C.value,I=b[R];if(!I)return!1;switch(R){case"orientation":case"scan":return I.toLowerCase()===V.toLowerCase();case"width":case"height":case"device-width":case"device-height":V=E(V),I=E(I);break;case"resolution":V=h(V),I=h(I);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":V=v(V),I=v(I);break;case"grid":case"color":case"color-index":case"monochrome":V=parseInt(V,10)||1,I=parseInt(I,10)||0;break}switch(k){case"min":return I>=V;case"max":return I<=V;default:return I===V}});return x&&!O||!x&&O})}function p(y){return y.split(",").map(function(b){b=b.trim();var F=b.match(s),O=F[1],P=F[2],x=F[3]||"",C={};return C.inverse=!!O&&O.toLowerCase()==="not",C.type=P?P.toLowerCase():"all",x=x.match(/\([^\)]+\)/g)||[],C.expressions=x.map(function(R){var k=R.match(c),V=k[1].toLowerCase().match(d);return{modifier:V[1],feature:V[2],value:k[2]}}),C})}function v(y){var b=Number(y),F;return b||(F=y.match(/^(\d+)\s*\/\s*(\d+)$/),b=F[1]/F[2]),b}function h(y){var b=parseFloat(y),F=String(y).match(f)[1];switch(F){case"dpcm":return b/2.54;case"dppx":return b*96;default:return b}}function E(y){var b=parseFloat(y),F=String(y).match(g)[1];switch(F){case"em":return b*16;case"rem":return b*16;case"cm":return b*96/2.54;case"mm":return b*96/2.54/10;case"in":return b*96;case"pt":return b*72;case"pc":return b*72/12;default:return b}}},"./node_modules/hyphenate-style-name/index.js":(i,a,s)=>{s.r(a),s.d(a,{default:()=>p});var c=/[A-Z]/g,d=/^ms-/,g={};function f(v){return"-"+v.toLowerCase()}function m(v){if(g.hasOwnProperty(v))return g[v];var h=v.replace(c,f);return g[v]=d.test(h)?"-"+h:h}const p=m},"./node_modules/matchmediaquery/index.js":(i,a,s)=>{var c=s("./node_modules/css-mediaquery/index.js").match,d=typeof window<"u"?window.matchMedia:null;function g(m,p,v){var h=this;if(d&&!v){var E=d.call(window,m);this.matches=E.matches,this.media=E.media,E.addListener(F)}else this.matches=c(m,p),this.media=m;this.addListener=y,this.removeListener=b,this.dispose=O;function y(P){E&&E.addListener(P)}function b(P){E&&E.removeListener(P)}function F(P){h.matches=P.matches,h.media=P.media}function O(){E&&E.removeListener(F)}}function f(m,p,v){return new g(m,p,v)}i.exports=f},"./node_modules/object-assign/index.js":i=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function d(f){if(f==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(f)}function g(){try{if(!Object.assign)return!1;var f=new String("abc");if(f[5]="de",Object.getOwnPropertyNames(f)[0]==="5")return!1;for(var m={},p=0;p<10;p++)m["_"+String.fromCharCode(p)]=p;var v=Object.getOwnPropertyNames(m).map(function(E){return m[E]});if(v.join("")!=="0123456789")return!1;var h={};return"abcdefghijklmnopqrst".split("").forEach(function(E){h[E]=E}),Object.keys(Object.assign({},h)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}i.exports=g()?Object.assign:function(f,m){for(var p,v=d(f),h,E=1;E<arguments.length;E++){p=Object(arguments[E]);for(var y in p)s.call(p,y)&&(v[y]=p[y]);if(a){h=a(p);for(var b=0;b<h.length;b++)c.call(p,h[b])&&(v[h[b]]=p[h[b]])}}return v}},"./node_modules/prop-types/checkPropTypes.js":(i,a,s)=>{var c=function(){};{var d=s("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),g={},f=s("./node_modules/prop-types/lib/has.js");c=function(p){var v="Warning: "+p;typeof console<"u"&&console.error(v);try{throw new Error(v)}catch{}}}function m(p,v,h,E,y){for(var b in p)if(f(p,b)){var F;try{if(typeof p[b]!="function"){var O=Error((E||"React class")+": "+h+" type `"+b+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof p[b]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw O.name="Invariant Violation",O}F=p[b](v,b,E,h,null,d)}catch(x){F=x}if(F&&!(F instanceof Error)&&c((E||"React class")+": type specification of "+h+" `"+b+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof F+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),F instanceof Error&&!(F.message in g)){g[F.message]=!0;var P=y?y():"";c("Failed "+h+" type: "+F.message+(P??""))}}}m.resetWarningCache=function(){g={}},i.exports=m},"./node_modules/prop-types/factoryWithTypeCheckers.js":(i,a,s)=>{var c=s("./node_modules/react-is/index.js"),d=s("./node_modules/object-assign/index.js"),g=s("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),f=s("./node_modules/prop-types/lib/has.js"),m=s("./node_modules/prop-types/checkPropTypes.js"),p=function(){};p=function(h){var E="Warning: "+h;typeof console<"u"&&console.error(E);try{throw new Error(E)}catch{}};function v(){return null}i.exports=function(h,E){var y=typeof Symbol=="function"&&Symbol.iterator,b="@@iterator";function F(w){var A=w&&(y&&w[y]||w[b]);if(typeof A=="function")return A}var O="<<anonymous>>",P={array:k("array"),bigint:k("bigint"),bool:k("boolean"),func:k("function"),number:k("number"),object:k("object"),string:k("string"),symbol:k("symbol"),any:V(),arrayOf:I,element:U(),elementType:G(),instanceOf:q,node:se(),objectOf:ae,oneOf:oe,oneOfType:ue,shape:Z,exact:te};function x(w,A){return w===A?w!==0||1/w===1/A:w!==w&&A!==A}function C(w,A){this.message=w,this.data=A&&typeof A=="object"?A:{},this.stack=""}C.prototype=Error.prototype;function R(w){var A={},B=0;function $(N,H,z,W,Q,Y,M){if(W=W||O,Y=Y||z,M!==g){if(E){var ne=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw ne.name="Invariant Violation",ne}else if(typeof console<"u"){var de=W+":"+z;!A[de]&&B<3&&(p("You are manually calling a React.PropTypes validation function for the `"+Y+"` prop on `"+W+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),A[de]=!0,B++)}}return H[z]==null?N?H[z]===null?new C("The "+Q+" `"+Y+"` is marked as required "+("in `"+W+"`, but its value is `null`.")):new C("The "+Q+" `"+Y+"` is marked as required in "+("`"+W+"`, but its value is `undefined`.")):null:w(H,z,W,Q,Y)}var j=$.bind(null,!1);return j.isRequired=$.bind(null,!0),j}function k(w){function A(B,$,j,N,H,z){var W=B[$],Q=J(W);if(Q!==w){var Y=ee(W);return new C("Invalid "+N+" `"+H+"` of type "+("`"+Y+"` supplied to `"+j+"`, expected ")+("`"+w+"`."),{expectedType:w})}return null}return R(A)}function V(){return R(v)}function I(w){function A(B,$,j,N,H){if(typeof w!="function")return new C("Property `"+H+"` of component `"+j+"` has invalid PropType notation inside arrayOf.");var z=B[$];if(!Array.isArray(z)){var W=J(z);return new C("Invalid "+N+" `"+H+"` of type "+("`"+W+"` supplied to `"+j+"`, expected an array."))}for(var Q=0;Q<z.length;Q++){var Y=w(z,Q,j,N,H+"["+Q+"]",g);if(Y instanceof Error)return Y}return null}return R(A)}function U(){function w(A,B,$,j,N){var H=A[B];if(!h(H)){var z=J(H);return new C("Invalid "+j+" `"+N+"` of type "+("`"+z+"` supplied to `"+$+"`, expected a single ReactElement."))}return null}return R(w)}function G(){function w(A,B,$,j,N){var H=A[B];if(!c.isValidElementType(H)){var z=J(H);return new C("Invalid "+j+" `"+N+"` of type "+("`"+z+"` supplied to `"+$+"`, expected a single ReactElement type."))}return null}return R(w)}function q(w){function A(B,$,j,N,H){if(!(B[$]instanceof w)){var z=w.name||O,W=he(B[$]);return new C("Invalid "+N+" `"+H+"` of type "+("`"+W+"` supplied to `"+j+"`, expected ")+("instance of `"+z+"`."))}return null}return R(A)}function oe(w){if(!Array.isArray(w))return arguments.length>1?p("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):p("Invalid argument supplied to oneOf, expected an array."),v;function A(B,$,j,N,H){for(var z=B[$],W=0;W<w.length;W++)if(x(z,w[W]))return null;var Q=JSON.stringify(w,function(M,ne){var de=ee(ne);return de==="symbol"?String(ne):ne});return new C("Invalid "+N+" `"+H+"` of value `"+String(z)+"` "+("supplied to `"+j+"`, expected one of "+Q+"."))}return R(A)}function ae(w){function A(B,$,j,N,H){if(typeof w!="function")return new C("Property `"+H+"` of component `"+j+"` has invalid PropType notation inside objectOf.");var z=B[$],W=J(z);if(W!=="object")return new C("Invalid "+N+" `"+H+"` of type "+("`"+W+"` supplied to `"+j+"`, expected an object."));for(var Q in z)if(f(z,Q)){var Y=w(z,Q,j,N,H+"."+Q,g);if(Y instanceof Error)return Y}return null}return R(A)}function ue(w){if(!Array.isArray(w))return p("Invalid argument supplied to oneOfType, expected an instance of array."),v;for(var A=0;A<w.length;A++){var B=w[A];if(typeof B!="function")return p("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+pe(B)+" at index "+A+"."),v}function $(j,N,H,z,W){for(var Q=[],Y=0;Y<w.length;Y++){var M=w[Y],ne=M(j,N,H,z,W,g);if(ne==null)return null;ne.data&&f(ne.data,"expectedType")&&Q.push(ne.data.expectedType)}var de=Q.length>0?", expected one of type ["+Q.join(", ")+"]":"";return new C("Invalid "+z+" `"+W+"` supplied to "+("`"+H+"`"+de+"."))}return R($)}function se(){function w(A,B,$,j,N){return ie(A[B])?null:new C("Invalid "+j+" `"+N+"` supplied to "+("`"+$+"`, expected a ReactNode."))}return R(w)}function le(w,A,B,$,j){return new C((w||"React class")+": "+A+" type `"+B+"."+$+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+j+"`.")}function Z(w){function A(B,$,j,N,H){var z=B[$],W=J(z);if(W!=="object")return new C("Invalid "+N+" `"+H+"` of type `"+W+"` "+("supplied to `"+j+"`, expected `object`."));for(var Q in w){var Y=w[Q];if(typeof Y!="function")return le(j,N,H,Q,ee(Y));var M=Y(z,Q,j,N,H+"."+Q,g);if(M)return M}return null}return R(A)}function te(w){function A(B,$,j,N,H){var z=B[$],W=J(z);if(W!=="object")return new C("Invalid "+N+" `"+H+"` of type `"+W+"` "+("supplied to `"+j+"`, expected `object`."));var Q=d({},B[$],w);for(var Y in Q){var M=w[Y];if(f(w,Y)&&typeof M!="function")return le(j,N,H,Y,ee(M));if(!M)return new C("Invalid "+N+" `"+H+"` key `"+Y+"` supplied to `"+j+"`.\nBad object: "+JSON.stringify(B[$],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(w),null,"  "));var ne=M(z,Y,j,N,H+"."+Y,g);if(ne)return ne}return null}return R(A)}function ie(w){switch(typeof w){case"number":case"string":case"undefined":return!0;case"boolean":return!w;case"object":if(Array.isArray(w))return w.every(ie);if(w===null||h(w))return!0;var A=F(w);if(A){var B=A.call(w),$;if(A!==w.entries){for(;!($=B.next()).done;)if(!ie($.value))return!1}else for(;!($=B.next()).done;){var j=$.value;if(j&&!ie(j[1]))return!1}}else return!1;return!0;default:return!1}}function ce(w,A){return w==="symbol"?!0:A?A["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&A instanceof Symbol:!1}function J(w){var A=typeof w;return Array.isArray(w)?"array":w instanceof RegExp?"object":ce(A,w)?"symbol":A}function ee(w){if(typeof w>"u"||w===null)return""+w;var A=J(w);if(A==="object"){if(w instanceof Date)return"date";if(w instanceof RegExp)return"regexp"}return A}function pe(w){var A=ee(w);switch(A){case"array":case"object":return"an "+A;case"boolean":case"date":case"regexp":return"a "+A;default:return A}}function he(w){return!w.constructor||!w.constructor.name?O:w.constructor.name}return P.checkPropTypes=m,P.resetWarningCache=m.resetWarningCache,P.PropTypes=P,P}},"./node_modules/prop-types/index.js":(i,a,s)=>{{var c=s("./node_modules/react-is/index.js"),d=!0;i.exports=s("./node_modules/prop-types/factoryWithTypeCheckers.js")(c.isElement,d)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":i=>{var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";i.exports=a},"./node_modules/prop-types/lib/has.js":i=>{i.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(i,a)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var s=typeof Symbol=="function"&&Symbol.for,c=s?Symbol.for("react.element"):60103,d=s?Symbol.for("react.portal"):60106,g=s?Symbol.for("react.fragment"):60107,f=s?Symbol.for("react.strict_mode"):60108,m=s?Symbol.for("react.profiler"):60114,p=s?Symbol.for("react.provider"):60109,v=s?Symbol.for("react.context"):60110,h=s?Symbol.for("react.async_mode"):60111,E=s?Symbol.for("react.concurrent_mode"):60111,y=s?Symbol.for("react.forward_ref"):60112,b=s?Symbol.for("react.suspense"):60113,F=s?Symbol.for("react.suspense_list"):60120,O=s?Symbol.for("react.memo"):60115,P=s?Symbol.for("react.lazy"):60116,x=s?Symbol.for("react.block"):60121,C=s?Symbol.for("react.fundamental"):60117,R=s?Symbol.for("react.responder"):60118,k=s?Symbol.for("react.scope"):60119;function V(M){return typeof M=="string"||typeof M=="function"||M===g||M===E||M===m||M===f||M===b||M===F||typeof M=="object"&&M!==null&&(M.$$typeof===P||M.$$typeof===O||M.$$typeof===p||M.$$typeof===v||M.$$typeof===y||M.$$typeof===C||M.$$typeof===R||M.$$typeof===k||M.$$typeof===x)}function I(M){if(typeof M=="object"&&M!==null){var ne=M.$$typeof;switch(ne){case c:var de=M.type;switch(de){case h:case E:case g:case m:case f:case b:return de;default:var tt=de&&de.$$typeof;switch(tt){case v:case y:case P:case O:case p:return tt;default:return ne}}case d:return ne}}}var U=h,G=E,q=v,oe=p,ae=c,ue=y,se=g,le=P,Z=O,te=d,ie=m,ce=f,J=b,ee=!1;function pe(M){return ee||(ee=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),he(M)||I(M)===h}function he(M){return I(M)===E}function w(M){return I(M)===v}function A(M){return I(M)===p}function B(M){return typeof M=="object"&&M!==null&&M.$$typeof===c}function $(M){return I(M)===y}function j(M){return I(M)===g}function N(M){return I(M)===P}function H(M){return I(M)===O}function z(M){return I(M)===d}function W(M){return I(M)===m}function Q(M){return I(M)===f}function Y(M){return I(M)===b}a.AsyncMode=U,a.ConcurrentMode=G,a.ContextConsumer=q,a.ContextProvider=oe,a.Element=ae,a.ForwardRef=ue,a.Fragment=se,a.Lazy=le,a.Memo=Z,a.Portal=te,a.Profiler=ie,a.StrictMode=ce,a.Suspense=J,a.isAsyncMode=pe,a.isConcurrentMode=he,a.isContextConsumer=w,a.isContextProvider=A,a.isElement=B,a.isForwardRef=$,a.isFragment=j,a.isLazy=N,a.isMemo=H,a.isPortal=z,a.isProfiler=W,a.isStrictMode=Q,a.isSuspense=Y,a.isValidElementType=V,a.typeOf=I})()},"./node_modules/react-is/index.js":(i,a,s)=>{i.exports=s("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(i,a,s)=>{s.r(a),s.d(a,{shallowEqualArrays:()=>d,shallowEqualObjects:()=>c});function c(g,f){if(g===f)return!0;if(!g||!f)return!1;var m=Object.keys(g),p=Object.keys(f),v=m.length;if(p.length!==v)return!1;for(var h=0;h<v;h++){var E=m[h];if(g[E]!==f[E]||!Object.prototype.hasOwnProperty.call(f,E))return!1}return!0}function d(g,f){if(g===f)return!0;if(!g||!f)return!1;var m=g.length;if(f.length!==m)return!1;for(var p=0;p<m;p++)if(g[p]!==f[p])return!1;return!0}},"./src/Component.ts":function(i,a,s){var c=this&&this.__rest||function(m,p){var v={};for(var h in m)Object.prototype.hasOwnProperty.call(m,h)&&p.indexOf(h)<0&&(v[h]=m[h]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,h=Object.getOwnPropertySymbols(m);E<h.length;E++)p.indexOf(h[E])<0&&Object.prototype.propertyIsEnumerable.call(m,h[E])&&(v[h[E]]=m[h[E]]);return v},d=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(a,"__esModule",{value:!0});var g=d(s("./src/useMediaQuery.ts")),f=function(m){var p=m.children,v=m.device,h=m.onChange,E=c(m,["children","device","onChange"]),y=(0,g.default)(E,v,h);return typeof p=="function"?p(y):y?p:null};a.default=f},"./src/Context.ts":(i,a,s)=>{Object.defineProperty(a,"__esModule",{value:!0});var c=s("react"),d=(0,c.createContext)(void 0);a.default=d},"./src/index.ts":function(i,a,s){var c=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(a,"__esModule",{value:!0}),a.Context=a.toQuery=a.useMediaQuery=a.default=void 0;var d=c(s("./src/useMediaQuery.ts"));a.useMediaQuery=d.default;var g=c(s("./src/Component.ts"));a.default=g.default;var f=c(s("./src/toQuery.ts"));a.toQuery=f.default;var m=c(s("./src/Context.ts"));a.Context=m.default},"./src/mediaQuery.ts":function(i,a,s){var c=this&&this.__assign||function(){return c=Object.assign||function(b){for(var F,O=1,P=arguments.length;O<P;O++){F=arguments[O];for(var x in F)Object.prototype.hasOwnProperty.call(F,x)&&(b[x]=F[x])}return b},c.apply(this,arguments)},d=this&&this.__rest||function(b,F){var O={};for(var P in b)Object.prototype.hasOwnProperty.call(b,P)&&F.indexOf(P)<0&&(O[P]=b[P]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,P=Object.getOwnPropertySymbols(b);x<P.length;x++)F.indexOf(P[x])<0&&Object.prototype.propertyIsEnumerable.call(b,P[x])&&(O[P[x]]=b[P[x]]);return O},g=this&&this.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(a,"__esModule",{value:!0});var f=g(s("./node_modules/prop-types/index.js")),m=f.default.oneOfType([f.default.string,f.default.number]),p={all:f.default.bool,grid:f.default.bool,aural:f.default.bool,braille:f.default.bool,handheld:f.default.bool,print:f.default.bool,projection:f.default.bool,screen:f.default.bool,tty:f.default.bool,tv:f.default.bool,embossed:f.default.bool},v={orientation:f.default.oneOf(["portrait","landscape"]),scan:f.default.oneOf(["progressive","interlace"]),aspectRatio:f.default.string,deviceAspectRatio:f.default.string,height:m,deviceHeight:m,width:m,deviceWidth:m,color:f.default.bool,colorIndex:f.default.bool,monochrome:f.default.bool,resolution:m,type:Object.keys(p)};v.type;var h=d(v,["type"]),E=c({minAspectRatio:f.default.string,maxAspectRatio:f.default.string,minDeviceAspectRatio:f.default.string,maxDeviceAspectRatio:f.default.string,minHeight:m,maxHeight:m,minDeviceHeight:m,maxDeviceHeight:m,minWidth:m,maxWidth:m,minDeviceWidth:m,maxDeviceWidth:m,minColor:f.default.number,maxColor:f.default.number,minColorIndex:f.default.number,maxColorIndex:f.default.number,minMonochrome:f.default.number,maxMonochrome:f.default.number,minResolution:m,maxResolution:m},h),y=c(c({},p),E);a.default={all:y,types:p,matchers:v,features:E}},"./src/toQuery.ts":function(i,a,s){var c=this&&this.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(a,"__esModule",{value:!0});var d=c(s("./node_modules/hyphenate-style-name/index.js")),g=c(s("./src/mediaQuery.ts")),f=function(h){return"not ".concat(h)},m=function(h,E){var y=(0,d.default)(h);return typeof E=="number"&&(E="".concat(E,"px")),E===!0?y:E===!1?f(y):"(".concat(y,": ").concat(E,")")},p=function(h){return h.join(" and ")},v=function(h){var E=[];return Object.keys(g.default.all).forEach(function(y){var b=h[y];b!=null&&E.push(m(y,b))}),p(E)};a.default=v},"./src/useMediaQuery.ts":function(i,a,s){var c=this&&this.__importDefault||function(C){return C&&C.__esModule?C:{default:C}};Object.defineProperty(a,"__esModule",{value:!0});var d=s("react"),g=c(s("./node_modules/matchmediaquery/index.js")),f=c(s("./node_modules/hyphenate-style-name/index.js")),m=s("./node_modules/shallow-equal/dist/index.esm.js"),p=c(s("./src/toQuery.ts")),v=c(s("./src/Context.ts")),h=function(C){return C.query||(0,p.default)(C)},E=function(C){if(C){var R=Object.keys(C);return R.reduce(function(k,V){return k[(0,f.default)(V)]=C[V],k},{})}},y=function(){var C=(0,d.useRef)(!1);return(0,d.useEffect)(function(){C.current=!0},[]),C.current},b=function(C){var R=(0,d.useContext)(v.default),k=function(){return E(C)||E(R)},V=(0,d.useState)(k),I=V[0],U=V[1];return(0,d.useEffect)(function(){var G=k();(0,m.shallowEqualObjects)(I,G)||U(G)},[C,R]),I},F=function(C){var R=function(){return h(C)},k=(0,d.useState)(R),V=k[0],I=k[1];return(0,d.useEffect)(function(){var U=R();V!==U&&I(U)},[C]),V},O=function(C,R){var k=function(){return(0,g.default)(C,R||{},!!R)},V=(0,d.useState)(k),I=V[0],U=V[1],G=y();return(0,d.useEffect)(function(){if(G){var q=k();return U(q),function(){q&&q.dispose()}}},[C,R]),I},P=function(C){var R=(0,d.useState)(C.matches),k=R[0],V=R[1];return(0,d.useEffect)(function(){var I=function(U){V(U.matches)};return C.addListener(I),V(C.matches),function(){C.removeListener(I)}},[C]),k},x=function(C,R,k){var V=b(R),I=F(C);if(!I)throw new Error("Invalid or missing MediaQuery!");var U=O(I,V),G=P(U),q=y();return(0,d.useEffect)(function(){q&&k&&k(G)},[G]),(0,d.useEffect)(function(){return function(){U&&U.dispose()}},[]),G};a.default=x},react:i=>{i.exports=r}},e={};function u(i){var a=e[i];if(a!==void 0)return a.exports;var s=e[i]={exports:{}};return o[i].call(s.exports,s,s.exports,u),s.exports}u.d=(i,a)=>{for(var s in a)u.o(a,s)&&!u.o(i,s)&&Object.defineProperty(i,s,{enumerable:!0,get:a[s]})},u.o=(i,a)=>Object.prototype.hasOwnProperty.call(i,a),u.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var l=u("./src/index.ts");return l})())})(on);var He=on.exports;const io=K.label`
  position: relative;
`,oo=K.input`
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
`,ao=K.button`
  background: transparent;
  position: absolute;
  top: calc(50% - 16px / 2);
  right: 40px;
  border: none;
`,uo=K.button`
  background: transparent;
  position: absolute;
  top: calc(50% - 16px / 2);
  right: 14px;
  border: none;
`,so=K.svg`
  stroke: #e6533c;
  width: 18px;
  height: 18px;
`,lo=K.svg`
  stroke: #efede8;
  width: 18px;
  height: 18px;
`,co=K.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (min-width: 375px) {
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,Ct=K.div`
  @media screen and (min-width: 375px) {
    width: 158px;
  }

  @media screen and (min-width: 768px) {
    width: 173px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`,fo=n=>n.products.list,po=n=>n.products.filter,ho=n=>n.products.isLoading,St=[{value:"",label:"All"},{value:"true",label:"Recommended "},{value:"false",label:"Not recommended"}],ze=["","alcoholic drinks","berries","cereals","dairy","dried fruits","eggs","fish","flour","fruits","meat","mushrooms","nuts","oils and fats","poppy","sausage","seeds","sesame","soft drinks","vegetables and herbs"],mo=({submit:n})=>{const t=x=>x.slice(0,1).toUpperCase()+x.slice(1),r=ze==null?void 0:ze.map(x=>({value:x,label:t(x)||"All"})),o=He.useMediaQuery({minWidth:375}),e=He.useMediaQuery({minWidth:769}),u=He.useMediaQuery({minWidth:1440});let l="";o?l="46px":l="52px",e?l="52px":l="46px",u?l="52px":l="46px";const i={control:x=>({...x,backgroundColor:"trasparent",height:l,borderStyle:"none",appearance:"none",WebkitAppearance:"none",MozAppearance:"none"}),option:(x,{isFocused:C,isSelected:R})=>({...x,backgroundColor:"rgba(28, 28, 28, 1)",color:R?"#E6533C":"#EFEDE8",marginBottom:"8px","&:last-child":{marginBottom:"0"}}),menu:x=>({...x,borderRadius:"12px",backgroundColor:"rgba(28, 28, 28, 1)"}),singleValue:x=>({...x,color:"#EFEDE8"}),indicatorSeparator:x=>({...x,backgroundColor:"transparent"}),dropdownIndicator:x=>({...x,color:"#EFEDE8"}),container:x=>({...x,border:"1px solid rgba(239, 237, 232, 0.30)",borderRadius:"12px",outline:"none"}),menuList:x=>({...x,margin:"14px 7px","::-webkit-scrollbar":{width:"8px"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{backgroundColor:"rgba(239, 237, 232, 0.10)",borderRadius:"12px"},overflowY:"auto"})},[a,s]=ln({}),c=Pe(po),[d,g]=S.useState(c.search),[f,m]=S.useState(c.category),[p,v]=S.useState(c.recommended),h=Dt(),E=x=>{const C=x.target.value;g(C),h(Ce({search:C,category:f,recommended:p})),s({search:C,category:f||"all",recommended:p||"all"})},y=x=>{m(x.value),s({search:d,category:x.value||"all",recommended:p||"all"}),h(Ce({search:d,category:x.value,recommended:p})),n({search:d,category:x.value,recommended:p})},b=x=>{s({search:d,category:f||"all",recommended:x.value||"all"}),v(x.value),h(Ce({search:d,category:f,recommended:x.value})),n({search:d,category:f,recommended:x.value})},F=()=>{g(""),h(Ce({search:"",category:f,recommended:p})),s({search:"",category:f||"all",recommended:p||"all"})},O=()=>{n({search:d,category:f,recommended:p})},P=x=>{x.key==="Enter"&&O()};return D.jsxs(co,{children:[D.jsx("li",{children:D.jsxs(io,{children:[D.jsx(oo,{value:d,onChange:E,onKeyUp:P,name:"productSearch",type:"text",placeholder:"Search"}),d&&D.jsx(ao,{onClick:F,type:"button",children:D.jsx(so,{children:D.jsx("use",{href:`${Ee}#icon-x`})})}),D.jsx(uo,{onClick:O,type:"button",children:D.jsx(lo,{children:D.jsx("use",{href:`${Ee}#icon-search`})})})]})}),D.jsx("li",{children:D.jsx(Ct,{children:D.jsx(yt,{styles:i,isSearchable:!1,onChange:y,value:r.find(x=>x.value===f),placeholder:"Categories",options:r||[],theme:x=>({...x,colors:{...x.colors,primary_bcwycos:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral_bh:"#EFEDE8",neutral_db:"transparent",neutral_dhb:"transparent",neutral_pc:"rgba(239, 237, 232, 1)",neutral_n:"rgba(239, 237, 232, 1)"}})})})}),D.jsx("li",{children:D.jsx(Ct,{children:D.jsx(yt,{styles:i,isSearchable:!1,value:St.find(x=>x.value===p),onChange:b,theme:x=>({...x,colors:{...x.colors,primary_bcwycos:"rgba(255, 255, 255, 0.10)",primary:"transparent",neutral_bh:"#EFEDE8",neutral_db:"transparent",neutral_dhb:"transparent",neutral_pc:"rgba(239, 237, 232, 1)",neutral_n:"rgba(239, 237, 232, 1)"}}),options:St})})})]})},vo=re.div`
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
`,go=re.div`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${ge.bgCards};
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 768px) {
    width: 335px;
    height: 135px;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
    height: 143px;
  }
`,bo=re.h3`
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
`,xo=re.div`
  display: flex;
  column-gap: 16px;
`,Ue=re.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-transform: capitalize;
`,Eo=re.li`
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-bottom: 27px;
  }
`,yo=re.div`
  padding: 5px 7.5px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
`,Co=re.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`,So=re.div`
  margin-right: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
`,wt=re.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
`,Ot=re.p`
  color: #efede8;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`,wo=re.button`
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
`,Ne=re.span`
  color: rgba(239, 237, 232, 0.4);
`,Oo=re.svg`
  fill: rgba(239, 237, 232, 1);
  border-radius: 50px;
  background-color: rgba(239, 160, 130, 1);
  padding: 3px 4px;
`,Ft=(n,t=24)=>{if(n.length>t){const r=n.lastIndexOf(" ",t);return r!==-1?We(n.substring(0,r))+"...":We(n.substring(0,t))+"..."}return We(n)};function We(n){return n.charAt(0).toUpperCase()+n.slice(1)}const Fo=({product:n,addProductDetails:t})=>{const r=()=>{console.log(t(n))},o=Pe(cn.getUserMetricData).blood;return D.jsxs(go,{children:[D.jsxs(Eo,{children:[D.jsx(yo,{children:D.jsx(Co,{children:"Diet"})}),D.jsxs("div",{style:{display:"flex"},children:[D.jsx(So,{children:n.groupBloodNotAllowed[o]?D.jsxs(D.Fragment,{children:[D.jsx(wt,{style:{backgroundColor:"#419B09"}}),D.jsx(Ot,{children:"Recommended"})]}):D.jsxs(D.Fragment,{children:[D.jsx(wt,{style:{backgroundColor:"#E9101D"}}),D.jsx(Ot,{children:"Not recommended"})]})}),D.jsxs(wo,{onClick:r,children:["Add",D.jsx("svg",{width:16,height:16,style:{stroke:"#E6533C"},children:D.jsx("use",{href:`${Ee}#icon-start`})})]})]})]}),D.jsxs(bo,{children:[D.jsx(Oo,{width:24,height:24,children:D.jsx("use",{href:`${Ee}#icon-running`})}),Ft(n.title)]}),D.jsxs(xo,{children:[D.jsxs(Ue,{children:[D.jsx(Ne,{children:"Calories: "}),n.calories]}),D.jsxs(Ue,{children:[D.jsx(Ne,{children:"Category: "}),Ft(n.category,13)]}),D.jsxs(Ue,{children:[D.jsx(Ne,{children:"Weight: "}),n.weight]})]})]})},Po=K.div`
  @media screen and (min-width: 375px) {
    display: inline-block;
    margin-top: 24px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 92px;
  }
`,Do=K.p`
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
`,Mo=K.span`
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
`,Ao=K.p`
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
`,Io=()=>D.jsxs(Po,{children:[D.jsxs(Do,{children:[D.jsx(Mo,{children:"Sorry, no results were found"})," ","for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),D.jsx(Ao,{children:"Try changing the search parameters."})]}),Ro=K.div`
  position: fixed;
  top: 0;
  left: 0;
  /* position: absolute; */
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 4, 0.4);
  z-index: 10;
`,To=K.div`
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
    height: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 479px;
    height: 286px;
    flex-direction: row;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
`,Vo=K.button`
  border: none;
  z-index: 20;
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(0, 0, 0, 0);
`,Lo=K.svg`
  display: block;
  width: 13px;
  height: 13px;
  stroke: ${ge.withe};
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,Ke=K.input`
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
`;Ke.defaultProps={theme:{main:"rgba(239, 237, 232, 0.3)"}};const _o=K.button`
  /* position: absolute; */
  margin-right: 14px;
  padding: 14px 32px 14px 32px;
  border-radius: 12px;
  border: none;
  outline: none;
  color: ${ge.withe};
  background-color: ${ge.acceptColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    /* position: absolute; */
    bottom: 48px;
    right: 32px;
  }

  &:hover,
  &:focus {
    background-color: ${ge.secondaryOrange};
  }
  &:disabled {
    background-color: #e6533c;
    color: #efede899;
  }
`,ko=K.button`
  padding: 14px 32px 14px 32px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  outline: none;
  color: ${ge.withe};
  background-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    /* position: absolute; */
    bottom: 48px;
    right: 32px;
  }

  &:hover,
  &:focus {
    background-color: ${ge.secondaryOrange};
  }
  &:disabled {
    background-color: #e6533c;
    color: #efede899;
  }
`;K.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;K.div`
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
`;K.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    margin-top: 22px;
  }
`;K.img`
  width: 123px;
  height: 84px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    height: 97px;
    margin-top: 32px;
  }
`;K.p`
  color: #efede8;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 16px;
`;K.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 24px;
`;K.span`
  color: #e6533c;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
`;K.button`
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
`;K.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(239, 237, 232, 0.3);
`;const jo=({product:n,onClose:t})=>{const[r,o]=S.useState(""),[e,u]=S.useState(),l=s=>{o(s.target.value),console.log(r)},i=s=>{u(s.target.value)},a=s=>{s.preventDefault(),console.log(n)};return D.jsx(Ro,{onClick:t,children:D.jsxs(To,{children:[D.jsx(Vo,{type:"button",onClick:t,children:D.jsx(Lo,{children:D.jsx("use",{href:`${Ee}#icon-x`})})}),D.jsxs("form",{action:"",onSubmit:a,children:[D.jsx("label",{htmlFor:"product",children:D.jsx(Ke,{type:"text",name:"product",value:n.title,placeholder:"Product name",onChange:l,readOnly:!0})}),D.jsx("label",{htmlFor:"weight",children:D.jsx(Ke,{type:"number",name:"weight",value:e,placeholder:"Weight, grams",onChange:i})}),D.jsxs("p",{children:["Calories: ",n.calories]}),D.jsx(_o,{type:"submit",children:"Add to diary"}),D.jsx(ko,{children:"Cancel"})]})]})})},Bo=({products:n})=>{const[t,r]=S.useState(),o=e=>{r(e)};return D.jsxs(vo,{children:[t&&D.jsx(jo,{product:t,children:"form"}),(n==null?void 0:n.length)>0?n.map(e=>D.jsx(Fo,{addProductDetails:o,product:e},e._id)):D.jsx(Io,{})]})},Pt="/pj-react-777/assets/products_background_desktop-55179e50.jpg",$o=re.div`
  ${yn}
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
    background-image: url(${Pt});
  }

  @media screen and (min-width: 1440px) and (min-device-pixel-ratio: 2),
    screen and (min-width: 1440px) and (min-resolution: 192dpi),
    screen and (min-width: 1440px) and (min-resolution: 2dppx) {
    background-image: url(${Pt});
  }
`,Ho=re.h2`
  margin-bottom: 40px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.17;
  color: ${ge.withe};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 1.38;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`,zo=re.div`
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
`,Uo=re.span`
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
`,Xo=()=>{const n=Pe(ho),t=Dt(),r=Pe(fo),o=S.useCallback(e=>{try{t(e?nt(e):nt())}catch(u){console.log(u)}},[t]);return S.useEffect(()=>{localStorage.getItem("persist:products").filter===dn.getInitialState().filter&&o()},[o]),D.jsxs($o,{children:[D.jsx(Uo,{children:"Filters"}),D.jsxs(zo,{children:[D.jsx(Ho,{children:"Products"}),D.jsx(mo,{submit:o})]}),!n&&r!==null?D.jsx(Bo,{products:r}):D.jsx(Cn,{})]})};export{Xo as default};
