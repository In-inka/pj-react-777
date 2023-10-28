import{N as _r,g as Oe,k as sr,j as g,s as R,R as W,l as Or,r as fe,m as ht,d as jr,n as kr,u as Ye,O as Sr}from"./index-9105a374.js";import{n as ir}from"./emotion-styled.browser.esm-668a3a34.js";import{C as Cr}from"./ContainerStyled-bb0b3bf9.js";import{s as Je}from"./sprite-390c5ca3.js";import{e as Ue}from"./exercisesSelectors-192ff74d.js";const Ar=ir.div`
    display: flex;
    gap: 28px;
    @media screen and (min-width: 768px){
        gap: 32px;
    }
`,He=ir(_r)`
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
            background-color: ${Oe.secondaryOrange};
            border-radius: 2px;
        }
    }

    @media screen and (min-width: 768px){
        font-size: 16px;
        line-height: 1.5;

    }



`,Tr=()=>{const e=sr();return g.jsxs(Ar,{children:[g.jsx(He,{to:"bodyParts",state:{from:e},children:"Body parts"}),g.jsx(He,{to:"muscles",state:{from:e},children:"Muscles"}),g.jsx(He,{to:"equipment",state:{from:e},children:"Equipment"})]})},Er=R.div`
    ${Cr}
    padding-top: 101px;
    `,Pr=R.div`
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

`,$r=R.div`
    height: 20px;
    position: absolute;
    top: 71px;
    @media screen and (min-width: 768px){
        top: 116px;
    } 
`,Ir=R.button`
    height: 100%;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
    color: rgba(239, 237, 232, 0.4);
    
`,Rr=R.svg`    
    width: 16px;
    height: 16px;
    stroke:  rgba(239, 237, 232, 0.4);
    transform: rotate(180deg);
`,zr=R.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Nr=R.span`
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: center;
`,Br=()=>{const e=()=>{window.history.back()};return g.jsx($r,{children:g.jsx(Ir,{type:"button",onClick:e,children:g.jsxs(zr,{children:[g.jsx(Rr,{children:g.jsx("use",{href:`${Je}#icon-start`})}),g.jsx(Nr,{children:"Back"})]})})})},Dr=R.h2`
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 0em;
    text-align: left;

`,Lr=({text:e})=>g.jsx(Dr,{children:e}),Fr=R.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
@media screen and (min-width: 768px){
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;


}  
`,Mr=R.div`

    /* width: 335px; */
    position: relative;
    /* height: 141px; */
    border-radius: 12px;
    border: 1px;
    /* gap: 32px; */
    padding: 16px;
    border: 1px solid #EFEDE833;
    background-color: rgba(0,0,0,0);
    background: linear-gradient(0deg, rgba(239, 237, 232, 0.2), rgba(239, 237, 232, 0.2)),
linear-gradient(0deg, rgba(239, 237, 232, 0.05), rgba(239, 237, 232, 0.05));
@media screen and (min-width: 375px){
    width: 335px;
}  
@media screen and (min-width: 1440px){
    width: 405px;
}  

`,Gr=R.button`
    position: absolute;
    right: 16px;
    top: 16px;
    width: 55px;
    height: 18px;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
`,Wr=R.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Yr=R.p`
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${Oe.acceptColor};
`,Ur=R.svg`
    width: 16px;
    height: 16px;
    stroke: ${Oe.acceptColor};
`,Hr=R.span`
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
`,Vr=R.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;

`,Zr=R.svg`
    width: 24px;
    height: 24px;

`,Qr=R.h3`
    max-width: 200px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0px;
    text-align: left;
    color: ${Oe.withe};
@media screen and (min-width: 375px){
    max-width: 263px;
    gap: 16px;
}  

`,Xr=R.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 4px;
/* @media screen and (min-width: 375px){
    gap: 16px;
}  */

`,Ve=R.div`
    display: flex; 
    gap: 4px;
`,Ze=R.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(239, 237, 232, 0.4);
/* @media screen and (min-width: 375px){
    font-size: 12px;
}  */
`,Qe=R.p`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    color: ${Oe.withe};
/* @media screen and (min-width: 375px){
    font-size: 12px;
}  */
`,Kr=R.div`
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;

`;var Jr=function(e){return{display:e?"flex":"none"}},qr="#4fa94d",en={"aria-busy":!0,role:"status"},ft=globalThis&&globalThis.__assign||function(){return ft=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ft.apply(this,arguments)},pt=globalThis&&globalThis.__assign||function(){return pt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},pt.apply(this,arguments)},gt=globalThis&&globalThis.__assign||function(){return gt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},gt.apply(this,arguments)},dt=globalThis&&globalThis.__assign||function(){return dt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},dt.apply(this,arguments)},mt=globalThis&&globalThis.__assign||function(){return mt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},mt.apply(this,arguments)},vt=globalThis&&globalThis.__assign||function(){return vt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},vt.apply(this,arguments)},yt=globalThis&&globalThis.__assign||function(){return yt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},yt.apply(this,arguments)},or={exports:{}},E={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var at=Symbol.for("react.element"),st=Symbol.for("react.portal"),$e=Symbol.for("react.fragment"),Ie=Symbol.for("react.strict_mode"),Re=Symbol.for("react.profiler"),ze=Symbol.for("react.provider"),Ne=Symbol.for("react.context"),tn=Symbol.for("react.server_context"),Be=Symbol.for("react.forward_ref"),De=Symbol.for("react.suspense"),Le=Symbol.for("react.suspense_list"),Fe=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),rn=Symbol.for("react.offscreen"),cr;cr=Symbol.for("react.module.reference");function X(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case at:switch(e=e.type,e){case $e:case Re:case Ie:case De:case Le:return e;default:switch(e=e&&e.$$typeof,e){case tn:case Ne:case Be:case Me:case Fe:case ze:return e;default:return t}}case st:return t}}}E.ContextConsumer=Ne;E.ContextProvider=ze;E.Element=at;E.ForwardRef=Be;E.Fragment=$e;E.Lazy=Me;E.Memo=Fe;E.Portal=st;E.Profiler=Re;E.StrictMode=Ie;E.Suspense=De;E.SuspenseList=Le;E.isAsyncMode=function(){return!1};E.isConcurrentMode=function(){return!1};E.isContextConsumer=function(e){return X(e)===Ne};E.isContextProvider=function(e){return X(e)===ze};E.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===at};E.isForwardRef=function(e){return X(e)===Be};E.isFragment=function(e){return X(e)===$e};E.isLazy=function(e){return X(e)===Me};E.isMemo=function(e){return X(e)===Fe};E.isPortal=function(e){return X(e)===st};E.isProfiler=function(e){return X(e)===Re};E.isStrictMode=function(e){return X(e)===Ie};E.isSuspense=function(e){return X(e)===De};E.isSuspenseList=function(e){return X(e)===Le};E.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===$e||e===Re||e===Ie||e===De||e===Le||e===rn||typeof e=="object"&&e!==null&&(e.$$typeof===Me||e.$$typeof===Fe||e.$$typeof===ze||e.$$typeof===Ne||e.$$typeof===Be||e.$$typeof===cr||e.getModuleId!==void 0)};E.typeOf=X;or.exports=E;var lr=or.exports;function nn(e){function t(h,l,u,d,s){for(var S=0,o=0,z=0,C=0,T,m,F=0,H=0,O,Y=O=T=0,A=0,M=0,ye=0,G=0,Se=u.length,be=Se-1,q,p="",D="",Ge="",We="",ie;A<Se;){if(m=u.charCodeAt(A),A===be&&o+C+z+S!==0&&(o!==0&&(m=o===47?10:47),C=z=S=0,Se++,be++),o+C+z+S===0){if(A===be&&(0<M&&(p=p.replace(N,"")),0<p.trim().length)){switch(m){case 32:case 9:case 59:case 13:case 10:break;default:p+=u.charAt(A)}m=59}switch(m){case 123:for(p=p.trim(),T=p.charCodeAt(0),O=1,G=++A;A<Se;){switch(m=u.charCodeAt(A)){case 123:O++;break;case 125:O--;break;case 47:switch(m=u.charCodeAt(A+1)){case 42:case 47:e:{for(Y=A+1;Y<be;++Y)switch(u.charCodeAt(Y)){case 47:if(m===42&&u.charCodeAt(Y-1)===42&&A+2!==Y){A=Y+1;break e}break;case 10:if(m===47){A=Y+1;break e}}A=Y}}break;case 91:m++;case 40:m++;case 34:case 39:for(;A++<be&&u.charCodeAt(A)!==m;);}if(O===0)break;A++}switch(O=u.substring(G,A),T===0&&(T=(p=p.replace(k,"").trim()).charCodeAt(0)),T){case 64:switch(0<M&&(p=p.replace(N,"")),m=p.charCodeAt(1),m){case 100:case 109:case 115:case 45:M=l;break;default:M=de}if(O=t(l,M,O,m,s+1),G=O.length,0<Q&&(M=r(de,p,ye),ie=f(3,O,M,l,K,V,G,m,s,d),p=M.join(""),ie!==void 0&&(G=(O=ie.trim()).length)===0&&(m=0,O="")),0<G)switch(m){case 115:p=p.replace(ae,c);case 100:case 109:case 45:O=p+"{"+O+"}";break;case 107:p=p.replace(b,"$1 $2"),O=p+"{"+O+"}",O=U===1||U===2&&i("@"+O,3)?"@-webkit-"+O+"@"+O:"@"+O;break;default:O=p+O,d===112&&(O=(D+=O,""))}else O="";break;default:O=t(l,r(l,p,ye),O,d,s+1)}Ge+=O,O=ye=M=Y=T=0,p="",m=u.charCodeAt(++A);break;case 125:case 59:if(p=(0<M?p.replace(N,""):p).trim(),1<(G=p.length))switch(Y===0&&(T=p.charCodeAt(0),T===45||96<T&&123>T)&&(G=(p=p.replace(" ",":")).length),0<Q&&(ie=f(1,p,l,h,K,V,D.length,d,s,d))!==void 0&&(G=(p=ie.trim()).length)===0&&(p="\0\0"),T=p.charCodeAt(0),m=p.charCodeAt(1),T){case 0:break;case 64:if(m===105||m===99){We+=p+u.charAt(A);break}default:p.charCodeAt(G-1)!==58&&(D+=n(p,T,m,p.charCodeAt(2)))}ye=M=Y=T=0,p="",m=u.charCodeAt(++A)}}switch(m){case 13:case 10:o===47?o=0:1+T===0&&d!==107&&0<p.length&&(M=1,p+="\0"),0<Q*ue&&f(0,p,l,h,K,V,D.length,d,s,d),V=1,K++;break;case 59:case 125:if(o+C+z+S===0){V++;break}default:switch(V++,q=u.charAt(A),m){case 9:case 32:if(C+S+o===0)switch(F){case 44:case 58:case 9:case 32:q="";break;default:m!==32&&(q=" ")}break;case 0:q="\\0";break;case 12:q="\\f";break;case 11:q="\\v";break;case 38:C+o+S===0&&(M=ye=1,q="\f"+q);break;case 108:if(C+o+S+re===0&&0<Y)switch(A-Y){case 2:F===112&&u.charCodeAt(A-3)===58&&(re=F);case 8:H===111&&(re=H)}break;case 58:C+o+S===0&&(Y=A);break;case 44:o+z+C+S===0&&(M=1,q+="\r");break;case 34:case 39:o===0&&(C=C===m?0:C===0?m:C);break;case 91:C+o+z===0&&S++;break;case 93:C+o+z===0&&S--;break;case 41:C+o+S===0&&z--;break;case 40:if(C+o+S===0){if(T===0)switch(2*F+3*H){case 533:break;default:T=1}z++}break;case 64:o+z+C+S+Y+O===0&&(O=1);break;case 42:case 47:if(!(0<C+S+z))switch(o){case 0:switch(2*m+3*u.charCodeAt(A+1)){case 235:o=47;break;case 220:G=A,o=42}break;case 42:m===47&&F===42&&G+2!==A&&(u.charCodeAt(G+2)===33&&(D+=u.substring(G,A+1)),q="",o=0)}}o===0&&(p+=q)}H=F,F=m,A++}if(G=D.length,0<G){if(M=l,0<Q&&(ie=f(2,D,M,h,K,V,G,d,s,d),ie!==void 0&&(D=ie).length===0))return We+D+Ge;if(D=M.join(",")+"{"+D+"}",U*re!==0){switch(U!==2||i(D,2)||(re=0),re){case 111:D=D.replace($,":-moz-$1")+D;break;case 112:D=D.replace(I,"::-webkit-input-$1")+D.replace(I,"::-moz-$1")+D.replace(I,":-ms-input-$1")+D}re=0}}return We+D+Ge}function r(h,l,u){var d=l.trim().split(y);l=d;var s=d.length,S=h.length;switch(S){case 0:case 1:var o=0;for(h=S===0?"":h[0]+" ";o<s;++o)l[o]=a(h,l[o],u).trim();break;default:var z=o=0;for(l=[];o<s;++o)for(var C=0;C<S;++C)l[z++]=a(h[C]+" ",d[o],u).trim()}return l}function a(h,l,u){var d=l.charCodeAt(0);switch(33>d&&(d=(l=l.trim()).charCodeAt(0)),d){case 38:return l.replace(P,"$1"+h.trim());case 58:return h.trim()+l.replace(P,"$1"+h.trim());default:if(0<1*u&&0<l.indexOf("\f"))return l.replace(P,(h.charCodeAt(0)===58?"":"$1")+h.trim())}return h+l}function n(h,l,u,d){var s=h+";",S=2*l+3*u+4*d;if(S===944){h=s.indexOf(":",9)+1;var o=s.substring(h,s.length-1).trim();return o=s.substring(0,h).trim()+o+";",U===1||U===2&&i(o,1)?"-webkit-"+o+o:o}if(U===0||U===2&&!i(s,1))return s;switch(S){case 1015:return s.charCodeAt(10)===97?"-webkit-"+s+s:s;case 951:return s.charCodeAt(3)===116?"-webkit-"+s+s:s;case 963:return s.charCodeAt(5)===110?"-webkit-"+s+s:s;case 1009:if(s.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+s+s;case 978:return"-webkit-"+s+"-moz-"+s+s;case 1019:case 983:return"-webkit-"+s+"-moz-"+s+"-ms-"+s+s;case 883:if(s.charCodeAt(8)===45)return"-webkit-"+s+s;if(0<s.indexOf("image-set(",11))return s.replace(le,"$1-webkit-$2")+s;break;case 932:if(s.charCodeAt(4)===45)switch(s.charCodeAt(5)){case 103:return"-webkit-box-"+s.replace("-grow","")+"-webkit-"+s+"-ms-"+s.replace("grow","positive")+s;case 115:return"-webkit-"+s+"-ms-"+s.replace("shrink","negative")+s;case 98:return"-webkit-"+s+"-ms-"+s.replace("basis","preferred-size")+s}return"-webkit-"+s+"-ms-"+s+s;case 964:return"-webkit-"+s+"-ms-flex-"+s+s;case 1023:if(s.charCodeAt(8)!==99)break;return o=s.substring(s.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+o+"-webkit-"+s+"-ms-flex-pack"+o+s;case 1005:return w.test(s)?s.replace(L,":-webkit-")+s.replace(L,":-moz-")+s:s;case 1e3:switch(o=s.substring(13).trim(),l=o.indexOf("-")+1,o.charCodeAt(0)+o.charCodeAt(l)){case 226:o=s.replace(B,"tb");break;case 232:o=s.replace(B,"tb-rl");break;case 220:o=s.replace(B,"lr");break;default:return s}return"-webkit-"+s+"-ms-"+o+s;case 1017:if(s.indexOf("sticky",9)===-1)break;case 975:switch(l=(s=h).length-10,o=(s.charCodeAt(l)===33?s.substring(0,l):s).substring(h.indexOf(":",7)+1).trim(),S=o.charCodeAt(0)+(o.charCodeAt(7)|0)){case 203:if(111>o.charCodeAt(8))break;case 115:s=s.replace(o,"-webkit-"+o)+";"+s;break;case 207:case 102:s=s.replace(o,"-webkit-"+(102<S?"inline-":"")+"box")+";"+s.replace(o,"-webkit-"+o)+";"+s.replace(o,"-ms-"+o+"box")+";"+s}return s+";";case 938:if(s.charCodeAt(5)===45)switch(s.charCodeAt(6)){case 105:return o=s.replace("-items",""),"-webkit-"+s+"-webkit-box-"+o+"-ms-flex-"+o+s;case 115:return"-webkit-"+s+"-ms-flex-item-"+s.replace(Z,"")+s;default:return"-webkit-"+s+"-ms-flex-line-pack"+s.replace("align-content","").replace(Z,"")+s}break;case 973:case 989:if(s.charCodeAt(3)!==45||s.charCodeAt(4)===122)break;case 931:case 953:if(se.test(h)===!0)return(o=h.substring(h.indexOf(":")+1)).charCodeAt(0)===115?n(h.replace("stretch","fill-available"),l,u,d).replace(":fill-available",":stretch"):s.replace(o,"-webkit-"+o)+s.replace(o,"-moz-"+o.replace("fill-",""))+s;break;case 962:if(s="-webkit-"+s+(s.charCodeAt(5)===102?"-ms-"+s:"")+s,u+d===211&&s.charCodeAt(13)===105&&0<s.indexOf("transform",10))return s.substring(0,s.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+s}return s}function i(h,l){var u=h.indexOf(l===1?":":"{"),d=h.substring(0,l!==3?u:10);return u=h.substring(u+1,h.length-1),me(l!==2?d:d.replace(te,"$1"),u,l)}function c(h,l){var u=n(l,l.charCodeAt(0),l.charCodeAt(1),l.charCodeAt(2));return u!==l+";"?u.replace(ce," or ($1)").substring(4):"("+l+")"}function f(h,l,u,d,s,S,o,z,C,T){for(var m=0,F=l,H;m<Q;++m)switch(H=J[m].call(j,h,F,u,d,s,S,o,z,C,T)){case void 0:case!1:case!0:case null:break;default:F=H}if(F!==l)return F}function x(h){switch(h){case void 0:case null:Q=J.length=0;break;default:if(typeof h=="function")J[Q++]=h;else if(typeof h=="object")for(var l=0,u=h.length;l<u;++l)x(h[l]);else ue=!!h|0}return x}function v(h){return h=h.prefix,h!==void 0&&(me=null,h?typeof h!="function"?U=1:(U=2,me=h):U=0),v}function j(h,l){var u=h;if(33>u.charCodeAt(0)&&(u=u.trim()),ve=u,u=[ve],0<Q){var d=f(-1,l,u,u,K,V,0,0,0,0);d!==void 0&&typeof d=="string"&&(l=d)}var s=t(de,u,l,0,0);return 0<Q&&(d=f(-2,s,u,u,K,V,s.length,0,0,0),d!==void 0&&(s=d)),ve="",re=0,V=K=1,s}var k=/^\0+/g,N=/[\0\r\f]/g,L=/: */g,w=/zoo|gra/,_=/([,: ])(transform)/g,y=/,\r+?/g,P=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,I=/::(place)/g,$=/:(read-only)/g,B=/[svh]\w+-[tblr]{2}/,ae=/\(\s*(.*)\s*\)/g,ce=/([\s\S]*?);/g,Z=/-self|flex-/g,te=/[^]*?(:[rp][el]a[\w-]+)[^]*/,se=/stretch|:\s*\w+\-(?:conte|avail)/,le=/([^-])(image-set\()/,V=1,K=1,re=0,U=1,de=[],J=[],Q=0,me=null,ue=0,ve="";return j.use=x,j.set=v,e!==void 0&&v(e),j}var an={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var bt=function(e,t){for(var r=[e[0]],a=0,n=t.length;a<n;a+=1)r.push(t[a],e[a+1]);return r},qe=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!lr.typeOf(e)},Ee=Object.freeze([]),oe=Object.freeze({});function _e(e){return typeof e=="function"}function xt(e){return e.displayName||e.name||"Component"}function it(e){return e&&typeof e.styledComponentId=="string"}var pe=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ot=typeof window<"u"&&"HTMLElement"in window,sn=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function je(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var on=function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}var t=e.prototype;return t.indexOfGroup=function(r){for(var a=0,n=0;n<r;n++)a+=this.groupSizes[n];return a},t.insertRules=function(r,a){if(r>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,c=i;r>=c;)(c<<=1)<0&&je(16,""+r);this.groupSizes=new Uint32Array(c),this.groupSizes.set(n),this.length=c;for(var f=i;f<c;f++)this.groupSizes[f]=0}for(var x=this.indexOfGroup(r+1),v=0,j=a.length;v<j;v++)this.tag.insertRule(x,a[v])&&(this.groupSizes[r]++,x++)},t.clearGroup=function(r){if(r<this.length){var a=this.groupSizes[r],n=this.indexOfGroup(r),i=n+a;this.groupSizes[r]=0;for(var c=n;c<i;c++)this.tag.deleteRule(n)}},t.getGroup=function(r){var a="";if(r>=this.length||this.groupSizes[r]===0)return a;for(var n=this.groupSizes[r],i=this.indexOfGroup(r),c=i+n,f=i;f<c;f++)a+=this.tag.getRule(f)+`/*!sc*/
`;return a},e}(),Te=new Map,Pe=new Map,xe=1,Ce=function(e){if(Te.has(e))return Te.get(e);for(;Pe.has(xe);)xe++;var t=xe++;return Te.set(e,t),Pe.set(t,e),t},cn=function(e){return Pe.get(e)},ln=function(e,t){t>=xe&&(xe=t+1),Te.set(e,t),Pe.set(t,e)},un="style["+pe+'][data-styled-version="5.3.11"]',hn=new RegExp("^"+pe+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),fn=function(e,t,r){for(var a,n=r.split(","),i=0,c=n.length;i<c;i++)(a=n[i])&&e.registerName(t,a)},pn=function(e,t){for(var r=(t.textContent||"").split(`/*!sc*/
`),a=[],n=0,i=r.length;n<i;n++){var c=r[n].trim();if(c){var f=c.match(hn);if(f){var x=0|parseInt(f[1],10),v=f[2];x!==0&&(ln(v,x),fn(e,v,f[3]),e.getTag().insertRules(x,a)),a.length=0}else a.push(c)}}},gn=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},ur=function(e){var t=document.head,r=e||t,a=document.createElement("style"),n=function(f){for(var x=f.childNodes,v=x.length;v>=0;v--){var j=x[v];if(j&&j.nodeType===1&&j.hasAttribute(pe))return j}}(r),i=n!==void 0?n.nextSibling:null;a.setAttribute(pe,"active"),a.setAttribute("data-styled-version","5.3.11");var c=gn();return c&&a.setAttribute("nonce",c),r.insertBefore(a,i),a},dn=function(){function e(r){var a=this.element=ur(r);a.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,c=0,f=i.length;c<f;c++){var x=i[c];if(x.ownerNode===n)return x}je(17)}(a),this.length=0}var t=e.prototype;return t.insertRule=function(r,a){try{return this.sheet.insertRule(a,r),this.length++,!0}catch{return!1}},t.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},t.getRule=function(r){var a=this.sheet.cssRules[r];return a!==void 0&&typeof a.cssText=="string"?a.cssText:""},e}(),mn=function(){function e(r){var a=this.element=ur(r);this.nodes=a.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(r,a){if(r<=this.length&&r>=0){var n=document.createTextNode(a),i=this.nodes[r];return this.element.insertBefore(n,i||null),this.length++,!0}return!1},t.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},t.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e}(),vn=function(){function e(r){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(r,a){return r<=this.length&&(this.rules.splice(r,0,a),this.length++,!0)},t.deleteRule=function(r){this.rules.splice(r,1),this.length--},t.getRule=function(r){return r<this.length?this.rules[r]:""},e}(),wt=ot,yn={isServer:!ot,useCSSOMInjection:!sn},hr=function(){function e(r,a,n){r===void 0&&(r=oe),a===void 0&&(a={}),this.options=ne({},yn,{},r),this.gs=a,this.names=new Map(n),this.server=!!r.isServer,!this.server&&ot&&wt&&(wt=!1,function(i){for(var c=document.querySelectorAll(un),f=0,x=c.length;f<x;f++){var v=c[f];v&&v.getAttribute(pe)!=="active"&&(pn(i,v),v.parentNode&&v.parentNode.removeChild(v))}}(this))}e.registerId=function(r){return Ce(r)};var t=e.prototype;return t.reconstructWithOptions=function(r,a){return a===void 0&&(a=!0),new e(ne({},this.options,{},r),this.gs,a&&this.names||void 0)},t.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(a=this.options).isServer,i=a.useCSSOMInjection,c=a.target,r=n?new vn(c):i?new dn(c):new mn(c),new on(r)));var r,a,n,i,c},t.hasNameForId=function(r,a){return this.names.has(r)&&this.names.get(r).has(a)},t.registerName=function(r,a){if(Ce(r),this.names.has(r))this.names.get(r).add(a);else{var n=new Set;n.add(a),this.names.set(r,n)}},t.insertRules=function(r,a,n){this.registerName(r,a),this.getTag().insertRules(Ce(r),n)},t.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},t.clearRules=function(r){this.getTag().clearGroup(Ce(r)),this.clearNames(r)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(r){for(var a=r.getTag(),n=a.length,i="",c=0;c<n;c++){var f=cn(c);if(f!==void 0){var x=r.names.get(f),v=a.getGroup(c);if(x&&v&&x.size){var j=pe+".g"+c+'[id="'+f+'"]',k="";x!==void 0&&x.forEach(function(N){N.length>0&&(k+=N+",")}),i+=""+v+j+'{content:"'+k+`"}/*!sc*/
`}}}return i}(this)},e}(),bn=/(a)(d)/gi,_t=function(e){return String.fromCharCode(e+(e>25?39:97))};function et(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=_t(t%52)+r;return(_t(t%52)+r).replace(bn,"$1-$2")}var he=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},fr=function(e){return he(5381,e)};function xn(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(_e(r)&&!it(r))return!1}return!0}var wn=fr("5.3.11"),_n=function(){function e(t,r,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&xn(t),this.componentId=r,this.baseHash=he(wn,r),this.baseStyle=a,hr.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,a){var n=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,r,a)),this.isStatic&&!a.hash)if(this.staticRulesId&&r.hasNameForId(n,this.staticRulesId))i.push(this.staticRulesId);else{var c=ge(this.rules,t,r,a).join(""),f=et(he(this.baseHash,c)>>>0);if(!r.hasNameForId(n,f)){var x=a(c,"."+f,void 0,n);r.insertRules(n,f,x)}i.push(f),this.staticRulesId=f}else{for(var v=this.rules.length,j=he(this.baseHash,a.hash),k="",N=0;N<v;N++){var L=this.rules[N];if(typeof L=="string")k+=L;else if(L){var w=ge(L,t,r,a),_=Array.isArray(w)?w.join(""):w;j=he(j,_+N),k+=_}}if(k){var y=et(j>>>0);if(!r.hasNameForId(n,y)){var P=a(k,"."+y,void 0,n);r.insertRules(n,y,P)}i.push(y)}}return i.join(" ")},e}(),On=/^\s*\/\/.*$/gm,jn=[":","[",".","#"];function kn(e){var t,r,a,n,i=e===void 0?oe:e,c=i.options,f=c===void 0?oe:c,x=i.plugins,v=x===void 0?Ee:x,j=new nn(f),k=[],N=function(_){function y(P){if(P)try{_(P+"}")}catch{}}return function(P,b,I,$,B,ae,ce,Z,te,se){switch(P){case 1:if(te===0&&b.charCodeAt(0)===64)return _(b+";"),"";break;case 2:if(Z===0)return b+"/*|*/";break;case 3:switch(Z){case 102:case 112:return _(I[0]+b),"";default:return b+(se===0?"/*|*/":"")}case-2:b.split("/*|*/}").forEach(y)}}}(function(_){k.push(_)}),L=function(_,y,P){return y===0&&jn.indexOf(P[r.length])!==-1||P.match(n)?_:"."+t};function w(_,y,P,b){b===void 0&&(b="&");var I=_.replace(On,""),$=y&&P?P+" "+y+" { "+I+" }":I;return t=b,r=y,a=new RegExp("\\"+r+"\\b","g"),n=new RegExp("(\\"+r+"\\b){2,}"),j(P||!y?"":y,$)}return j.use([].concat(v,[function(_,y,P){_===2&&P.length&&P[0].lastIndexOf(r)>0&&(P[0]=P[0].replace(a,L))},N,function(_){if(_===-2){var y=k;return k=[],y}}])),w.hash=v.length?v.reduce(function(_,y){return y.name||je(15),he(_,y.name)},5381).toString():"",w}var pr=W.createContext();pr.Consumer;var gr=W.createContext(),Sn=(gr.Consumer,new hr),tt=kn();function Cn(){return fe.useContext(pr)||Sn}function An(){return fe.useContext(gr)||tt}var dr=function(){function e(t,r){var a=this;this.inject=function(n,i){i===void 0&&(i=tt);var c=a.name+i.hash;n.hasNameForId(a.id,c)||n.insertRules(a.id,c,i(a.rules,c,"@keyframes"))},this.toString=function(){return je(12,String(a.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=r}return e.prototype.getName=function(t){return t===void 0&&(t=tt),this.name+t.hash},e}(),Tn=/([A-Z])/,En=/([A-Z])/g,Pn=/^ms-/,$n=function(e){return"-"+e.toLowerCase()};function Ot(e){return Tn.test(e)?e.replace(En,$n).replace(Pn,"-ms-"):e}var jt=function(e){return e==null||e===!1||e===""};function ge(e,t,r,a){if(Array.isArray(e)){for(var n,i=[],c=0,f=e.length;c<f;c+=1)(n=ge(e[c],t,r,a))!==""&&(Array.isArray(n)?i.push.apply(i,n):i.push(n));return i}if(jt(e))return"";if(it(e))return"."+e.styledComponentId;if(_e(e)){if(typeof(v=e)!="function"||v.prototype&&v.prototype.isReactComponent||!t)return e;var x=e(t);return ge(x,t,r,a)}var v;return e instanceof dr?r?(e.inject(r,a),e.getName(a)):e:qe(e)?function j(k,N){var L,w,_=[];for(var y in k)k.hasOwnProperty(y)&&!jt(k[y])&&(Array.isArray(k[y])&&k[y].isCss||_e(k[y])?_.push(Ot(y)+":",k[y],";"):qe(k[y])?_.push.apply(_,j(k[y],y)):_.push(Ot(y)+": "+(L=y,(w=k[y])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||L in an||L.startsWith("--")?String(w).trim():w+"px")+";"));return N?[N+" {"].concat(_,["}"]):_}(e):e.toString()}var kt=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function mr(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return _e(e)||qe(e)?kt(ge(bt(Ee,[e].concat(r)))):r.length===0&&e.length===1&&typeof e[0]=="string"?e:kt(ge(bt(e,r)))}var In=function(e,t,r){return r===void 0&&(r=oe),e.theme!==r.theme&&e.theme||t||r.theme},Rn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zn=/(^-|-$)/g;function Xe(e){return e.replace(Rn,"-").replace(zn,"")}var vr=function(e){return et(fr(e)>>>0)};function Ae(e){return typeof e=="string"&&!0}var rt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Nn=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Bn(e,t,r){var a=e[r];rt(t)&&rt(a)?yr(a,t):e[r]=t}function yr(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];for(var n=0,i=r;n<i.length;n++){var c=i[n];if(rt(c))for(var f in c)Nn(f)&&Bn(e,c[f],f)}return e}var br=W.createContext();br.Consumer;var Ke={};function xr(e,t,r){var a=it(e),n=!Ae(e),i=t.attrs,c=i===void 0?Ee:i,f=t.componentId,x=f===void 0?function(b,I){var $=typeof b!="string"?"sc":Xe(b);Ke[$]=(Ke[$]||0)+1;var B=$+"-"+vr("5.3.11"+$+Ke[$]);return I?I+"-"+B:B}(t.displayName,t.parentComponentId):f,v=t.displayName,j=v===void 0?function(b){return Ae(b)?"styled."+b:"Styled("+xt(b)+")"}(e):v,k=t.displayName&&t.componentId?Xe(t.displayName)+"-"+t.componentId:t.componentId||x,N=a&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,L=t.shouldForwardProp;a&&e.shouldForwardProp&&(L=t.shouldForwardProp?function(b,I,$){return e.shouldForwardProp(b,I,$)&&t.shouldForwardProp(b,I,$)}:e.shouldForwardProp);var w,_=new _n(r,k,a?e.componentStyle:void 0),y=_.isStatic&&c.length===0,P=function(b,I){return function($,B,ae,ce){var Z=$.attrs,te=$.componentStyle,se=$.defaultProps,le=$.foldedComponentIds,V=$.shouldForwardProp,K=$.styledComponentId,re=$.target,U=function(d,s,S){d===void 0&&(d=oe);var o=ne({},s,{theme:d}),z={};return S.forEach(function(C){var T,m,F,H=C;for(T in _e(H)&&(H=H(o)),H)o[T]=z[T]=T==="className"?(m=z[T],F=H[T],m&&F?m+" "+F:m||F):H[T]}),[o,z]}(In(B,fe.useContext(br),se)||oe,B,Z),de=U[0],J=U[1],Q=function(d,s,S,o){var z=Cn(),C=An(),T=s?d.generateAndInjectStyles(oe,z,C):d.generateAndInjectStyles(S,z,C);return T}(te,ce,de),me=ae,ue=J.$as||B.$as||J.as||B.as||re,ve=Ae(ue),h=J!==B?ne({},B,{},J):B,l={};for(var u in h)u[0]!=="$"&&u!=="as"&&(u==="forwardedAs"?l.as=h[u]:(V?V(u,ht,ue):!ve||ht(u))&&(l[u]=h[u]));return B.style&&J.style!==B.style&&(l.style=ne({},B.style,{},J.style)),l.className=Array.prototype.concat(le,K,Q!==K?Q:null,B.className,J.className).filter(Boolean).join(" "),l.ref=me,fe.createElement(ue,l)}(w,b,I,y)};return P.displayName=j,(w=W.forwardRef(P)).attrs=N,w.componentStyle=_,w.displayName=j,w.shouldForwardProp=L,w.foldedComponentIds=a?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ee,w.styledComponentId=k,w.target=a?e.target:e,w.withComponent=function(b){var I=t.componentId,$=function(ae,ce){if(ae==null)return{};var Z,te,se={},le=Object.keys(ae);for(te=0;te<le.length;te++)Z=le[te],ce.indexOf(Z)>=0||(se[Z]=ae[Z]);return se}(t,["componentId"]),B=I&&I+"-"+(Ae(b)?b:Xe(xt(b)));return xr(b,ne({},$,{attrs:N,componentId:B}),r)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=a?yr({},e.defaultProps,b):b}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),n&&Or(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var nt=function(e){return function t(r,a,n){if(n===void 0&&(n=oe),!lr.isValidElementType(a))return je(1,String(a));var i=function(){return r(a,n,mr.apply(void 0,arguments))};return i.withConfig=function(c){return t(r,a,ne({},n,{},c))},i.attrs=function(c){return t(r,a,ne({},n,{attrs:Array.prototype.concat(n.attrs,c).filter(Boolean)}))},i}(xr,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){nt[e]=nt(e)});function ct(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var n=mr.apply(void 0,[e].concat(r)).join(""),i=vr(n);return new dr(i,n)}const ke=nt;var wr=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},ee=242.776657104492,Dn=1.6,Ln=ct(St||(St=wr([`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`],[`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`])),ee*.14,ee,ee*.11,ee*.35,ee,ee*.35,ee*.01,ee,ee*.99);ke.path(Ct||(Ct=wr([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),ee*.01,ee,Ln,Dn);var St,Ct,At=globalThis&&globalThis.__assign||function(){return At=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},At.apply(this,arguments)},Tt=globalThis&&globalThis.__assign||function(){return Tt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Tt.apply(this,arguments)},Et=globalThis&&globalThis.__assign||function(){return Et=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Et.apply(this,arguments)},Pt=globalThis&&globalThis.__assign||function(){return Pt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Pt.apply(this,arguments)},$t=globalThis&&globalThis.__assign||function(){return $t=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},$t.apply(this,arguments)},It=globalThis&&globalThis.__assign||function(){return It=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},It.apply(this,arguments)},Rt=globalThis&&globalThis.__assign||function(){return Rt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Rt.apply(this,arguments)},Fn=function(t,r){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof a[t]<"u")return a[t];if(t&&t.indexOf(".")>0){for(var n=t.split("."),i=n.length,c=a[n[0]],f=1;c!=null&&f<i;)c=c[n[f]],f+=1;if(typeof c<"u")return c}return r}},lt=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},zt=globalThis&&globalThis.__assign||function(){return zt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},zt.apply(this,arguments)},Mn=ct(Nt||(Nt=lt([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));ke.svg(Bt||(Bt=lt([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),Mn,Fn("speed","0.75"));ke.polyline(Dt||(Dt=lt([`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`],[`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`])),function(e){return e.width});var Nt,Bt,Dt,we=globalThis&&globalThis.__assign||function(){return we=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},we.apply(this,arguments)},Gn=function(e){var t=e.height,r=t===void 0?80:t,a=e.width,n=a===void 0?80:a,i=e.strokeWidth,c=i===void 0?2:i,f=e.radius,x=f===void 0?1:f,v=e.color,j=v===void 0?qr:v,k=e.ariaLabel,N=k===void 0?"tail-spin-loading":k,L=e.wrapperStyle,w=e.wrapperClass,_=e.visible,y=_===void 0?!0:_,P=parseInt(String(c)),b=P+36,I=P/2,$=I+parseInt(String(x))-1;return W.createElement("div",we({style:we(we({},Jr(y)),L),className:w,"data-testid":"tail-spin-loading","aria-label":N},en),W.createElement("svg",{width:n,height:r,viewBox:"0 0 ".concat(b," ").concat(b),xmlns:"http://www.w3.org/2000/svg","data-testid":"tail-spin-svg"},W.createElement("defs",null,W.createElement("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"},W.createElement("stop",{stopColor:j,stopOpacity:"0",offset:"0%"}),W.createElement("stop",{stopColor:j,stopOpacity:".631",offset:"63.146%"}),W.createElement("stop",{stopColor:j,offset:"100%"}))),W.createElement("g",{fill:"none",fillRule:"evenodd"},W.createElement("g",{transform:"translate(".concat(I," ").concat(I,")")},W.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:j,strokeWidth:c},W.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})),W.createElement("circle",{fill:"#fff",cx:"36",cy:"18",r:$},W.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"}))))))},Lt=globalThis&&globalThis.__assign||function(){return Lt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Lt.apply(this,arguments)},Ft=globalThis&&globalThis.__assign||function(){return Ft=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ft.apply(this,arguments)},ut=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Mt=globalThis&&globalThis.__assign||function(){return Mt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Mt.apply(this,arguments)},Wn=ct(Gt||(Gt=ut([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));ke.polygon(Wt||(Wt=ut([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),Wn);ke.svg(Yt||(Yt=ut([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var Gt,Wt,Yt,Ut=globalThis&&globalThis.__assign||function(){return Ut=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ut.apply(this,arguments)},Ht=globalThis&&globalThis.__assign||function(){return Ht=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ht.apply(this,arguments)},Vt=globalThis&&globalThis.__assign||function(){return Vt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Vt.apply(this,arguments)},Zt=globalThis&&globalThis.__assign||function(){return Zt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Zt.apply(this,arguments)},Qt=globalThis&&globalThis.__assign||function(){return Qt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Qt.apply(this,arguments)},Xt=globalThis&&globalThis.__assign||function(){return Xt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Xt.apply(this,arguments)},Kt=globalThis&&globalThis.__assign||function(){return Kt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Kt.apply(this,arguments)},Jt=globalThis&&globalThis.__assign||function(){return Jt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Jt.apply(this,arguments)},qt=globalThis&&globalThis.__assign||function(){return qt=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},qt.apply(this,arguments)},er=globalThis&&globalThis.__assign||function(){return er=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},er.apply(this,arguments)},tr=globalThis&&globalThis.__assign||function(){return tr=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},tr.apply(this,arguments)},rr=globalThis&&globalThis.__assign||function(){return rr=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},rr.apply(this,arguments)},nr=globalThis&&globalThis.__assign||function(){return nr=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},nr.apply(this,arguments)},ar=globalThis&&globalThis.__assign||function(){return ar=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ar.apply(this,arguments)};const Yn=()=>g.jsx(Kr,{children:g.jsx(Gn,{height:"80",width:"80",color:"#E6533C",ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{},wrapperClass:"",visible:!0})}),Un=({filter:e})=>{const t=jr();fe.useEffect(()=>{t(kr.getExercises())},[]);const r=Ye(Ue.getExercisesData),a=Ye(Ue.getIsLoading);Ye(Ue.getIsError),console.log("data",r);const n=r.filter(i=>i.bodyPart===e);return console.log("filterArry",n),g.jsxs(Fr,{children:[a&&g.jsx(Yn,{}),n&&n.map(i=>g.jsxs(Mr,{children:[g.jsx(Hr,{children:"WORKOUT"}),g.jsx(Gr,{type:"button",children:g.jsxs(Wr,{children:[g.jsx(Yr,{children:"Start"}),g.jsx(Ur,{children:g.jsx("use",{href:`${Je}#icon-start`})})]})}),g.jsxs(Vr,{children:[g.jsx(Zr,{children:g.jsx("use",{href:`${Je}#icon-running-exercises-page`})}),g.jsx(Qr,{children:i.name})]}),g.jsxs(Xr,{children:[g.jsxs(Ve,{children:[g.jsx(Ze,{children:"Burned calories:"}),g.jsx(Qe,{children:i.burnedCalories})]}),g.jsxs(Ve,{children:[g.jsx(Ze,{children:"Body part:"}),g.jsx(Qe,{children:i.bodyPart})]}),g.jsxs(Ve,{children:[g.jsx(Ze,{children:"Target:"}),g.jsx(Qe,{children:i.target})]})]})]},i._id))]})},Kn=()=>{const t=sr().pathname,r=localStorage.getItem("CategoryName");console.log("categoryExercises",r);const a=n=>n==="/exercises"?`${r}`:n==="/exercises/bodyParts"?"Body Parts":n==="/exercises/muscles"?"Muscles":n==="/exercises/equipment"?"Equipment":"";return g.jsxs(Er,{children:[t==="/exercises"&&g.jsx(Br,{}),g.jsxs(Pr,{children:[g.jsx(Lr,{text:a(t)}),g.jsx(Tr,{})]}),t==="/exercises"&&g.jsx(Un,{filter:r}),g.jsx(fe.Suspense,{children:g.jsx(Sr,{})})]})};export{Kn as default};
