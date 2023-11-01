import{n as $t,r as l}from"./index-a3527f88.js";var jt=function(r){return Ot(r)&&!It(r)};function Ot(e){return!!e&&typeof e=="object"}function It(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||Ct(e)}var wt=typeof Symbol=="function"&&Symbol.for,Ft=wt?Symbol.for("react.element"):60103;function Ct(e){return e.$$typeof===Ft}function Mt(e){return Array.isArray(e)?[]:{}}function pe(e,r){return r.clone!==!1&&r.isMergeableObject(e)?ae(Mt(e),e,r):e}function Rt(e,r,t){return e.concat(r).map(function(n){return pe(n,t)})}function Pt(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=pe(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?n[i]=pe(r[i],t):n[i]=ae(e[i],r[i],t)}),n}function ae(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||Rt,t.isMergeableObject=t.isMergeableObject||jt;var n=Array.isArray(r),i=Array.isArray(e),o=n===i;return o?n?t.arrayMerge(e,r,t):Pt(e,r,t):pe(r,t)}ae.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return ae(n,i,t)},{})};var Me=ae,Lt=typeof global=="object"&&global&&global.Object===Object&&global;const xr=Lt;var Dt=typeof self=="object"&&self&&self.Object===Object&&self,xt=xr||Dt||Function("return this")();const D=xt;var Nt=D.Symbol;const V=Nt;var Nr=Object.prototype,Vt=Nr.hasOwnProperty,Ut=Nr.toString,te=V?V.toStringTag:void 0;function Bt(e){var r=Vt.call(e,te),t=e[te];try{e[te]=void 0;var n=!0}catch{}var i=Ut.call(e);return n&&(r?e[te]=t:delete e[te]),i}var Gt=Object.prototype,Ht=Gt.toString;function zt(e){return Ht.call(e)}var Kt="[object Null]",Wt="[object Undefined]",sr=V?V.toStringTag:void 0;function W(e){return e==null?e===void 0?Wt:Kt:sr&&sr in Object(e)?Bt(e):zt(e)}function Vr(e,r){return function(t){return e(r(t))}}var kt=Vr(Object.getPrototypeOf,Object);const Ve=kt;function k(e){return e!=null&&typeof e=="object"}var Yt="[object Object]",qt=Function.prototype,Xt=Object.prototype,Ur=qt.toString,Zt=Xt.hasOwnProperty,Jt=Ur.call(Object);function lr(e){if(!k(e)||W(e)!=Yt)return!1;var r=Ve(e);if(r===null)return!0;var t=Zt.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&Ur.call(t)==Jt}var fr=Array.isArray,dr=Object.keys,Qt=Object.prototype.hasOwnProperty,en=typeof Element<"u";function Re(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=fr(e),n=fr(r),i,o,u;if(t&&n){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!Re(e[i],r[i]))return!1;return!0}if(t!=n)return!1;var p=e instanceof Date,h=r instanceof Date;if(p!=h)return!1;if(p&&h)return e.getTime()==r.getTime();var y=e instanceof RegExp,O=r instanceof RegExp;if(y!=O)return!1;if(y&&O)return e.toString()==r.toString();var I=dr(e);if(o=I.length,o!==dr(r).length)return!1;for(i=o;i--!==0;)if(!Qt.call(r,I[i]))return!1;if(en&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(u=I[i],!(u==="_owner"&&e.$$typeof)&&!Re(e[u],r[u]))return!1;return!0}return e!==e&&r!==r}var rn=function(r,t){try{return Re(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const G=$t(rn);var tn=!0;function nn(e,r){if(!tn){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function an(){this.__data__=[],this.size=0}function Br(e,r){return e===r||e!==e&&r!==r}function ve(e,r){for(var t=e.length;t--;)if(Br(e[t][0],r))return t;return-1}var on=Array.prototype,un=on.splice;function cn(e){var r=this.__data__,t=ve(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():un.call(r,t,1),--this.size,!0}function sn(e){var r=this.__data__,t=ve(r,e);return t<0?void 0:r[t][1]}function ln(e){return ve(this.__data__,e)>-1}function fn(e,r){var t=this.__data__,n=ve(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function N(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}N.prototype.clear=an;N.prototype.delete=cn;N.prototype.get=sn;N.prototype.has=ln;N.prototype.set=fn;function dn(){this.__data__=new N,this.size=0}function pn(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function vn(e){return this.__data__.get(e)}function hn(e){return this.__data__.has(e)}function ue(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var gn="[object AsyncFunction]",yn="[object Function]",bn="[object GeneratorFunction]",mn="[object Proxy]";function Gr(e){if(!ue(e))return!1;var r=W(e);return r==yn||r==bn||r==gn||r==mn}var Tn=D["__core-js_shared__"];const Ie=Tn;var pr=function(){var e=/[^.]+$/.exec(Ie&&Ie.keys&&Ie.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Sn(e){return!!pr&&pr in e}var En=Function.prototype,_n=En.toString;function Y(e){if(e!=null){try{return _n.call(e)}catch{}try{return e+""}catch{}}return""}var An=/[\\^$.*+?()[\]{}|]/g,$n=/^\[object .+?Constructor\]$/,jn=Function.prototype,On=Object.prototype,In=jn.toString,wn=On.hasOwnProperty,Fn=RegExp("^"+In.call(wn).replace(An,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Cn(e){if(!ue(e)||Sn(e))return!1;var r=Gr(e)?Fn:$n;return r.test(Y(e))}function Mn(e,r){return e==null?void 0:e[r]}function q(e,r){var t=Mn(e,r);return Cn(t)?t:void 0}var Rn=q(D,"Map");const ie=Rn;var Pn=q(Object,"create");const oe=Pn;function Ln(){this.__data__=oe?oe(null):{},this.size=0}function Dn(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var xn="__lodash_hash_undefined__",Nn=Object.prototype,Vn=Nn.hasOwnProperty;function Un(e){var r=this.__data__;if(oe){var t=r[e];return t===xn?void 0:t}return Vn.call(r,e)?r[e]:void 0}var Bn=Object.prototype,Gn=Bn.hasOwnProperty;function Hn(e){var r=this.__data__;return oe?r[e]!==void 0:Gn.call(r,e)}var zn="__lodash_hash_undefined__";function Kn(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=oe&&r===void 0?zn:r,this}function K(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}K.prototype.clear=Ln;K.prototype.delete=Dn;K.prototype.get=Un;K.prototype.has=Hn;K.prototype.set=Kn;function Wn(){this.size=0,this.__data__={hash:new K,map:new(ie||N),string:new K}}function kn(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function he(e,r){var t=e.__data__;return kn(r)?t[typeof r=="string"?"string":"hash"]:t.map}function Yn(e){var r=he(this,e).delete(e);return this.size-=r?1:0,r}function qn(e){return he(this,e).get(e)}function Xn(e){return he(this,e).has(e)}function Zn(e,r){var t=he(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function U(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}U.prototype.clear=Wn;U.prototype.delete=Yn;U.prototype.get=qn;U.prototype.has=Xn;U.prototype.set=Zn;var Jn=200;function Qn(e,r){var t=this.__data__;if(t instanceof N){var n=t.__data__;if(!ie||n.length<Jn-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new U(n)}return t.set(e,r),this.size=t.size,this}function ee(e){var r=this.__data__=new N(e);this.size=r.size}ee.prototype.clear=dn;ee.prototype.delete=pn;ee.prototype.get=vn;ee.prototype.has=hn;ee.prototype.set=Qn;function ea(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var ra=function(){try{var e=q(Object,"defineProperty");return e({},"",{}),e}catch{}}();const vr=ra;function Hr(e,r,t){r=="__proto__"&&vr?vr(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var ta=Object.prototype,na=ta.hasOwnProperty;function zr(e,r,t){var n=e[r];(!(na.call(e,r)&&Br(n,t))||t===void 0&&!(r in e))&&Hr(e,r,t)}function ge(e,r,t,n){var i=!t;t||(t={});for(var o=-1,u=r.length;++o<u;){var p=r[o],h=n?n(t[p],e[p],p,t,e):void 0;h===void 0&&(h=e[p]),i?Hr(t,p,h):zr(t,p,h)}return t}function aa(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var ia="[object Arguments]";function hr(e){return k(e)&&W(e)==ia}var Kr=Object.prototype,oa=Kr.hasOwnProperty,ua=Kr.propertyIsEnumerable,ca=hr(function(){return arguments}())?hr:function(e){return k(e)&&oa.call(e,"callee")&&!ua.call(e,"callee")};const sa=ca;var la=Array.isArray;const ce=la;function fa(){return!1}var Wr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,gr=Wr&&typeof module=="object"&&module&&!module.nodeType&&module,da=gr&&gr.exports===Wr,yr=da?D.Buffer:void 0,pa=yr?yr.isBuffer:void 0,va=pa||fa;const kr=va;var ha=9007199254740991,ga=/^(?:0|[1-9]\d*)$/;function ya(e,r){var t=typeof e;return r=r??ha,!!r&&(t=="number"||t!="symbol"&&ga.test(e))&&e>-1&&e%1==0&&e<r}var ba=9007199254740991;function Yr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ba}var ma="[object Arguments]",Ta="[object Array]",Sa="[object Boolean]",Ea="[object Date]",_a="[object Error]",Aa="[object Function]",$a="[object Map]",ja="[object Number]",Oa="[object Object]",Ia="[object RegExp]",wa="[object Set]",Fa="[object String]",Ca="[object WeakMap]",Ma="[object ArrayBuffer]",Ra="[object DataView]",Pa="[object Float32Array]",La="[object Float64Array]",Da="[object Int8Array]",xa="[object Int16Array]",Na="[object Int32Array]",Va="[object Uint8Array]",Ua="[object Uint8ClampedArray]",Ba="[object Uint16Array]",Ga="[object Uint32Array]",S={};S[Pa]=S[La]=S[Da]=S[xa]=S[Na]=S[Va]=S[Ua]=S[Ba]=S[Ga]=!0;S[ma]=S[Ta]=S[Ma]=S[Sa]=S[Ra]=S[Ea]=S[_a]=S[Aa]=S[$a]=S[ja]=S[Oa]=S[Ia]=S[wa]=S[Fa]=S[Ca]=!1;function Ha(e){return k(e)&&Yr(e.length)&&!!S[W(e)]}function Ue(e){return function(r){return e(r)}}var qr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ne=qr&&typeof module=="object"&&module&&!module.nodeType&&module,za=ne&&ne.exports===qr,we=za&&xr.process,Ka=function(){try{var e=ne&&ne.require&&ne.require("util").types;return e||we&&we.binding&&we.binding("util")}catch{}}();const Q=Ka;var br=Q&&Q.isTypedArray,Wa=br?Ue(br):Ha;const ka=Wa;var Ya=Object.prototype,qa=Ya.hasOwnProperty;function Xr(e,r){var t=ce(e),n=!t&&sa(e),i=!t&&!n&&kr(e),o=!t&&!n&&!i&&ka(e),u=t||n||i||o,p=u?aa(e.length,String):[],h=p.length;for(var y in e)(r||qa.call(e,y))&&!(u&&(y=="length"||i&&(y=="offset"||y=="parent")||o&&(y=="buffer"||y=="byteLength"||y=="byteOffset")||ya(y,h)))&&p.push(y);return p}var Xa=Object.prototype;function Be(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||Xa;return e===t}var Za=Vr(Object.keys,Object);const Ja=Za;var Qa=Object.prototype,ei=Qa.hasOwnProperty;function ri(e){if(!Be(e))return Ja(e);var r=[];for(var t in Object(e))ei.call(e,t)&&t!="constructor"&&r.push(t);return r}function Zr(e){return e!=null&&Yr(e.length)&&!Gr(e)}function Ge(e){return Zr(e)?Xr(e):ri(e)}function ti(e,r){return e&&ge(r,Ge(r),e)}function ni(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var ai=Object.prototype,ii=ai.hasOwnProperty;function oi(e){if(!ue(e))return ni(e);var r=Be(e),t=[];for(var n in e)n=="constructor"&&(r||!ii.call(e,n))||t.push(n);return t}function He(e){return Zr(e)?Xr(e,!0):oi(e)}function ui(e,r){return e&&ge(r,He(r),e)}var Jr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,mr=Jr&&typeof module=="object"&&module&&!module.nodeType&&module,ci=mr&&mr.exports===Jr,Tr=ci?D.Buffer:void 0,Sr=Tr?Tr.allocUnsafe:void 0;function si(e,r){if(r)return e.slice();var t=e.length,n=Sr?Sr(t):new e.constructor(t);return e.copy(n),n}function Qr(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function li(e,r){for(var t=-1,n=e==null?0:e.length,i=0,o=[];++t<n;){var u=e[t];r(u,t,e)&&(o[i++]=u)}return o}function et(){return[]}var fi=Object.prototype,di=fi.propertyIsEnumerable,Er=Object.getOwnPropertySymbols,pi=Er?function(e){return e==null?[]:(e=Object(e),li(Er(e),function(r){return di.call(e,r)}))}:et;const ze=pi;function vi(e,r){return ge(e,ze(e),r)}function rt(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e}var hi=Object.getOwnPropertySymbols,gi=hi?function(e){for(var r=[];e;)rt(r,ze(e)),e=Ve(e);return r}:et;const tt=gi;function yi(e,r){return ge(e,tt(e),r)}function nt(e,r,t){var n=r(e);return ce(e)?n:rt(n,t(e))}function bi(e){return nt(e,Ge,ze)}function mi(e){return nt(e,He,tt)}var Ti=q(D,"DataView");const Pe=Ti;var Si=q(D,"Promise");const Le=Si;var Ei=q(D,"Set");const De=Ei;var _i=q(D,"WeakMap");const xe=_i;var _r="[object Map]",Ai="[object Object]",Ar="[object Promise]",$r="[object Set]",jr="[object WeakMap]",Or="[object DataView]",$i=Y(Pe),ji=Y(ie),Oi=Y(Le),Ii=Y(De),wi=Y(xe),H=W;(Pe&&H(new Pe(new ArrayBuffer(1)))!=Or||ie&&H(new ie)!=_r||Le&&H(Le.resolve())!=Ar||De&&H(new De)!=$r||xe&&H(new xe)!=jr)&&(H=function(e){var r=W(e),t=r==Ai?e.constructor:void 0,n=t?Y(t):"";if(n)switch(n){case $i:return Or;case ji:return _r;case Oi:return Ar;case Ii:return $r;case wi:return jr}return r});const Ke=H;var Fi=Object.prototype,Ci=Fi.hasOwnProperty;function Mi(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&Ci.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var Ri=D.Uint8Array;const Ir=Ri;function We(e){var r=new e.constructor(e.byteLength);return new Ir(r).set(new Ir(e)),r}function Pi(e,r){var t=r?We(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var Li=/\w*$/;function Di(e){var r=new e.constructor(e.source,Li.exec(e));return r.lastIndex=e.lastIndex,r}var wr=V?V.prototype:void 0,Fr=wr?wr.valueOf:void 0;function xi(e){return Fr?Object(Fr.call(e)):{}}function Ni(e,r){var t=r?We(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Vi="[object Boolean]",Ui="[object Date]",Bi="[object Map]",Gi="[object Number]",Hi="[object RegExp]",zi="[object Set]",Ki="[object String]",Wi="[object Symbol]",ki="[object ArrayBuffer]",Yi="[object DataView]",qi="[object Float32Array]",Xi="[object Float64Array]",Zi="[object Int8Array]",Ji="[object Int16Array]",Qi="[object Int32Array]",eo="[object Uint8Array]",ro="[object Uint8ClampedArray]",to="[object Uint16Array]",no="[object Uint32Array]";function ao(e,r,t){var n=e.constructor;switch(r){case ki:return We(e);case Vi:case Ui:return new n(+e);case Yi:return Pi(e,t);case qi:case Xi:case Zi:case Ji:case Qi:case eo:case ro:case to:case no:return Ni(e,t);case Bi:return new n;case Gi:case Ki:return new n(e);case Hi:return Di(e);case zi:return new n;case Wi:return xi(e)}}var Cr=Object.create,io=function(){function e(){}return function(r){if(!ue(r))return{};if(Cr)return Cr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const oo=io;function uo(e){return typeof e.constructor=="function"&&!Be(e)?oo(Ve(e)):{}}var co="[object Map]";function so(e){return k(e)&&Ke(e)==co}var Mr=Q&&Q.isMap,lo=Mr?Ue(Mr):so;const fo=lo;var po="[object Set]";function vo(e){return k(e)&&Ke(e)==po}var Rr=Q&&Q.isSet,ho=Rr?Ue(Rr):vo;const go=ho;var yo=1,bo=2,mo=4,at="[object Arguments]",To="[object Array]",So="[object Boolean]",Eo="[object Date]",_o="[object Error]",it="[object Function]",Ao="[object GeneratorFunction]",$o="[object Map]",jo="[object Number]",ot="[object Object]",Oo="[object RegExp]",Io="[object Set]",wo="[object String]",Fo="[object Symbol]",Co="[object WeakMap]",Mo="[object ArrayBuffer]",Ro="[object DataView]",Po="[object Float32Array]",Lo="[object Float64Array]",Do="[object Int8Array]",xo="[object Int16Array]",No="[object Int32Array]",Vo="[object Uint8Array]",Uo="[object Uint8ClampedArray]",Bo="[object Uint16Array]",Go="[object Uint32Array]",T={};T[at]=T[To]=T[Mo]=T[Ro]=T[So]=T[Eo]=T[Po]=T[Lo]=T[Do]=T[xo]=T[No]=T[$o]=T[jo]=T[ot]=T[Oo]=T[Io]=T[wo]=T[Fo]=T[Vo]=T[Uo]=T[Bo]=T[Go]=!0;T[_o]=T[it]=T[Co]=!1;function de(e,r,t,n,i,o){var u,p=r&yo,h=r&bo,y=r&mo;if(t&&(u=i?t(e,n,i,o):t(e)),u!==void 0)return u;if(!ue(e))return e;var O=ce(e);if(O){if(u=Mi(e),!p)return Qr(e,u)}else{var I=Ke(e),f=I==it||I==Ao;if(kr(e))return si(e,p);if(I==ot||I==at||f&&!i){if(u=h||f?{}:uo(e),!p)return h?yi(e,ui(u,e)):vi(e,ti(u,e))}else{if(!T[I])return i?e:{};u=ao(e,I,p)}}o||(o=new ee);var A=o.get(e);if(A)return A;o.set(e,u),go(e)?e.forEach(function(j){u.add(de(j,r,t,j,e,o))}):fo(e)&&e.forEach(function(j,_){u.set(_,de(j,r,t,_,e,o))});var M=y?h?mi:bi:h?He:Ge,w=O?void 0:M(e);return ea(w||e,function(j,_){w&&(_=j,j=e[_]),zr(u,_,de(j,r,t,_,e,o))}),u}var Ho=4;function Pr(e){return de(e,Ho)}function ut(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}var zo="[object Symbol]";function ke(e){return typeof e=="symbol"||k(e)&&W(e)==zo}var Ko="Expected a function";function Ye(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(Ko);var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var u=e.apply(this,n);return t.cache=o.set(i,u)||o,u};return t.cache=new(Ye.Cache||U),t}Ye.Cache=U;var Wo=500;function ko(e){var r=Ye(e,function(n){return t.size===Wo&&t.clear(),n}),t=r.cache;return r}var Yo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qo=/\\(\\)?/g,Xo=ko(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Yo,function(t,n,i,o){r.push(i?o.replace(qo,"$1"):n||t)}),r});const Zo=Xo;var Jo=1/0;function Qo(e){if(typeof e=="string"||ke(e))return e;var r=e+"";return r=="0"&&1/e==-Jo?"-0":r}var eu=1/0,Lr=V?V.prototype:void 0,Dr=Lr?Lr.toString:void 0;function ct(e){if(typeof e=="string")return e;if(ce(e))return ut(e,ct)+"";if(ke(e))return Dr?Dr.call(e):"";var r=e+"";return r=="0"&&1/e==-eu?"-0":r}function ru(e){return e==null?"":ct(e)}function st(e){return ce(e)?ut(e,Qo):ke(e)?[e]:Qr(Zo(ru(e)))}function E(){return E=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},E.apply(this,arguments)}function J(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var ye=l.createContext(void 0);ye.displayName="FormikContext";var tu=ye.Provider;ye.Consumer;function lt(){var e=l.useContext(ye);return e||nn(!1),e}var C=function(r){return typeof r=="function"},be=function(r){return r!==null&&typeof r=="object"},nu=function(r){return String(Math.floor(Number(r)))===r},Fe=function(r){return Object.prototype.toString.call(r)==="[object String]"},au=function(r){return l.Children.count(r)===0},Ce=function(r){return be(r)&&C(r.then)};function F(e,r,t,n){n===void 0&&(n=0);for(var i=st(r);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?t:e}function z(e,r,t){for(var n=Pr(e),i=n,o=0,u=st(r);o<u.length-1;o++){var p=u[o],h=F(e,u.slice(0,o+1));if(h&&(be(h)||Array.isArray(h)))i=i[p]=Pr(h);else{var y=u[o+1];i=i[p]=nu(y)&&Number(y)>=0?[]:{}}}return(o===0?e:i)[u[o]]===t?e:(t===void 0?delete i[u[o]]:i[u[o]]=t,o===0&&t===void 0&&delete n[u[o]],n)}function ft(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var u=o[i],p=e[u];be(p)?t.get(p)||(t.set(p,!0),n[u]=Array.isArray(p)?[]:{},ft(p,r,t,n[u])):n[u]=r}return n}function iu(e,r){switch(r.type){case"SET_VALUES":return E({},e,{values:r.payload});case"SET_TOUCHED":return E({},e,{touched:r.payload});case"SET_ERRORS":return G(e.errors,r.payload)?e:E({},e,{errors:r.payload});case"SET_STATUS":return E({},e,{status:r.payload});case"SET_ISSUBMITTING":return E({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return E({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return E({},e,{values:z(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return E({},e,{touched:z(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return E({},e,{errors:z(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return E({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return E({},e,{touched:ft(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return E({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return E({},e,{isSubmitting:!1});default:return e}}var B={},fe={};function ou(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,u=o===void 0?!1:o,p=e.isInitialValid,h=e.enableReinitialize,y=h===void 0?!1:h,O=e.onSubmit,I=J(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=E({validateOnChange:t,validateOnBlur:i,validateOnMount:u,onSubmit:O},I),A=l.useRef(f.initialValues),M=l.useRef(f.initialErrors||B),w=l.useRef(f.initialTouched||fe),j=l.useRef(f.initialStatus),_=l.useRef(!1),R=l.useRef({});l.useEffect(function(){return _.current=!0,function(){_.current=!1}},[]);var me=l.useState(0),Te=me[1],se=l.useRef({values:f.initialValues,errors:f.initialErrors||B,touched:f.initialTouched||fe,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),m=se.current,b=l.useCallback(function(a){var c=se.current;se.current=iu(c,a),c!==se.current&&Te(function(s){return s+1})},[]),qe=l.useCallback(function(a,c){return new Promise(function(s,d){var v=f.validate(a,c);v==null?s(B):Ce(v)?v.then(function(g){s(g||B)},function(g){d(g)}):s(v)})},[f.validate]),Se=l.useCallback(function(a,c){var s=f.validationSchema,d=C(s)?s(c):s,v=c&&d.validateAt?d.validateAt(c,a):cu(a,d);return new Promise(function(g,$){v.then(function(){g(B)},function(x){x.name==="ValidationError"?g(uu(x)):$(x)})})},[f.validationSchema]),Xe=l.useCallback(function(a,c){return new Promise(function(s){return s(R.current[a].validate(c))})},[]),Ze=l.useCallback(function(a){var c=Object.keys(R.current).filter(function(d){return C(R.current[d].validate)}),s=c.length>0?c.map(function(d){return Xe(d,F(a,d))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(s).then(function(d){return d.reduce(function(v,g,$){return g==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||g&&(v=z(v,c[$],g)),v},{})})},[Xe]),dt=l.useCallback(function(a){return Promise.all([Ze(a),f.validationSchema?Se(a):{},f.validate?qe(a):{}]).then(function(c){var s=c[0],d=c[1],v=c[2],g=Me.all([s,d,v],{arrayMerge:su});return g})},[f.validate,f.validationSchema,Ze,qe,Se]),L=P(function(a){return a===void 0&&(a=m.values),b({type:"SET_ISVALIDATING",payload:!0}),dt(a).then(function(c){return _.current&&(b({type:"SET_ISVALIDATING",payload:!1}),b({type:"SET_ERRORS",payload:c})),c})});l.useEffect(function(){u&&_.current===!0&&G(A.current,f.initialValues)&&L(A.current)},[u,L]);var re=l.useCallback(function(a){var c=a&&a.values?a.values:A.current,s=a&&a.errors?a.errors:M.current?M.current:f.initialErrors||{},d=a&&a.touched?a.touched:w.current?w.current:f.initialTouched||{},v=a&&a.status?a.status:j.current?j.current:f.initialStatus;A.current=c,M.current=s,w.current=d,j.current=v;var g=function(){b({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:s,touched:d,status:v,values:c,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var $=f.onReset(m.values,ur);Ce($)?$.then(g):g()}else g()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);l.useEffect(function(){_.current===!0&&!G(A.current,f.initialValues)&&y&&(A.current=f.initialValues,re(),u&&L(A.current))},[y,f.initialValues,re,u,L]),l.useEffect(function(){y&&_.current===!0&&!G(M.current,f.initialErrors)&&(M.current=f.initialErrors||B,b({type:"SET_ERRORS",payload:f.initialErrors||B}))},[y,f.initialErrors]),l.useEffect(function(){y&&_.current===!0&&!G(w.current,f.initialTouched)&&(w.current=f.initialTouched||fe,b({type:"SET_TOUCHED",payload:f.initialTouched||fe}))},[y,f.initialTouched]),l.useEffect(function(){y&&_.current===!0&&!G(j.current,f.initialStatus)&&(j.current=f.initialStatus,b({type:"SET_STATUS",payload:f.initialStatus}))},[y,f.initialStatus,f.initialTouched]);var Je=P(function(a){if(R.current[a]&&C(R.current[a].validate)){var c=F(m.values,a),s=R.current[a].validate(c);return Ce(s)?(b({type:"SET_ISVALIDATING",payload:!0}),s.then(function(d){return d}).then(function(d){b({type:"SET_FIELD_ERROR",payload:{field:a,value:d}}),b({type:"SET_ISVALIDATING",payload:!1})})):(b({type:"SET_FIELD_ERROR",payload:{field:a,value:s}}),Promise.resolve(s))}else if(f.validationSchema)return b({type:"SET_ISVALIDATING",payload:!0}),Se(m.values,a).then(function(d){return d}).then(function(d){b({type:"SET_FIELD_ERROR",payload:{field:a,value:F(d,a)}}),b({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),pt=l.useCallback(function(a,c){var s=c.validate;R.current[a]={validate:s}},[]),vt=l.useCallback(function(a){delete R.current[a]},[]),Qe=P(function(a,c){b({type:"SET_TOUCHED",payload:a});var s=c===void 0?i:c;return s?L(m.values):Promise.resolve()}),er=l.useCallback(function(a){b({type:"SET_ERRORS",payload:a})},[]),rr=P(function(a,c){var s=C(a)?a(m.values):a;b({type:"SET_VALUES",payload:s});var d=c===void 0?t:c;return d?L(s):Promise.resolve()}),le=l.useCallback(function(a,c){b({type:"SET_FIELD_ERROR",payload:{field:a,value:c}})},[]),X=P(function(a,c,s){b({type:"SET_FIELD_VALUE",payload:{field:a,value:c}});var d=s===void 0?t:s;return d?L(z(m.values,a,c)):Promise.resolve()}),tr=l.useCallback(function(a,c){var s=c,d=a,v;if(!Fe(a)){a.persist&&a.persist();var g=a.target?a.target:a.currentTarget,$=g.type,x=g.name,je=g.id,Oe=g.value,_t=g.checked,vu=g.outerHTML,cr=g.options,At=g.multiple;s=c||x||je,d=/number|range/.test($)?(v=parseFloat(Oe),isNaN(v)?"":v):/checkbox/.test($)?fu(F(m.values,s),_t,Oe):cr&&At?lu(cr):Oe}s&&X(s,d)},[X,m.values]),Ee=P(function(a){if(Fe(a))return function(c){return tr(c,a)};tr(a)}),Z=P(function(a,c,s){c===void 0&&(c=!0),b({type:"SET_FIELD_TOUCHED",payload:{field:a,value:c}});var d=s===void 0?i:s;return d?L(m.values):Promise.resolve()}),nr=l.useCallback(function(a,c){a.persist&&a.persist();var s=a.target,d=s.name,v=s.id,g=s.outerHTML,$=c||d||v;Z($,!0)},[Z]),_e=P(function(a){if(Fe(a))return function(c){return nr(c,a)};nr(a)}),ar=l.useCallback(function(a){C(a)?b({type:"SET_FORMIK_STATE",payload:a}):b({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),ir=l.useCallback(function(a){b({type:"SET_STATUS",payload:a})},[]),or=l.useCallback(function(a){b({type:"SET_ISSUBMITTING",payload:a})},[]),Ae=P(function(){return b({type:"SUBMIT_ATTEMPT"}),L().then(function(a){var c=a instanceof Error,s=!c&&Object.keys(a).length===0;if(s){var d;try{if(d=gt(),d===void 0)return}catch(v){throw v}return Promise.resolve(d).then(function(v){return _.current&&b({type:"SUBMIT_SUCCESS"}),v}).catch(function(v){if(_.current)throw b({type:"SUBMIT_FAILURE"}),v})}else if(_.current&&(b({type:"SUBMIT_FAILURE"}),c))throw a})}),ht=P(function(a){a&&a.preventDefault&&C(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&C(a.stopPropagation)&&a.stopPropagation(),Ae().catch(function(c){console.warn("Warning: An unhandled error was caught from submitForm()",c)})}),ur={resetForm:re,validateForm:L,validateField:Je,setErrors:er,setFieldError:le,setFieldTouched:Z,setFieldValue:X,setStatus:ir,setSubmitting:or,setTouched:Qe,setValues:rr,setFormikState:ar,submitForm:Ae},gt=P(function(){return O(m.values,ur)}),yt=P(function(a){a&&a.preventDefault&&C(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&C(a.stopPropagation)&&a.stopPropagation(),re()}),bt=l.useCallback(function(a){return{value:F(m.values,a),error:F(m.errors,a),touched:!!F(m.touched,a),initialValue:F(A.current,a),initialTouched:!!F(w.current,a),initialError:F(M.current,a)}},[m.errors,m.touched,m.values]),mt=l.useCallback(function(a){return{setValue:function(s,d){return X(a,s,d)},setTouched:function(s,d){return Z(a,s,d)},setError:function(s){return le(a,s)}}},[X,Z,le]),Tt=l.useCallback(function(a){var c=be(a),s=c?a.name:a,d=F(m.values,s),v={name:s,value:d,onChange:Ee,onBlur:_e};if(c){var g=a.type,$=a.value,x=a.as,je=a.multiple;g==="checkbox"?$===void 0?v.checked=!!d:(v.checked=!!(Array.isArray(d)&&~d.indexOf($)),v.value=$):g==="radio"?(v.checked=d===$,v.value=$):x==="select"&&je&&(v.value=v.value||[],v.multiple=!0)}return v},[_e,Ee,m.values]),$e=l.useMemo(function(){return!G(A.current,m.values)},[A.current,m.values]),St=l.useMemo(function(){return typeof p<"u"?$e?m.errors&&Object.keys(m.errors).length===0:p!==!1&&C(p)?p(f):p:m.errors&&Object.keys(m.errors).length===0},[p,$e,m.errors,f]),Et=E({},m,{initialValues:A.current,initialErrors:M.current,initialTouched:w.current,initialStatus:j.current,handleBlur:_e,handleChange:Ee,handleReset:yt,handleSubmit:ht,resetForm:re,setErrors:er,setFormikState:ar,setFieldTouched:Z,setFieldValue:X,setFieldError:le,setStatus:ir,setSubmitting:or,setTouched:Qe,setValues:rr,submitForm:Ae,validateForm:L,validateField:Je,isValid:St,dirty:$e,unregisterField:vt,registerField:pt,getFieldProps:Tt,getFieldMeta:bt,getFieldHelpers:mt,validateOnBlur:i,validateOnChange:t,validateOnMount:u});return Et}function gu(e){var r=ou(e),t=e.component,n=e.children,i=e.render,o=e.innerRef;return l.useImperativeHandle(o,function(){return r}),l.createElement(tu,{value:r},t?l.createElement(t,r):i?i(r):n?C(n)?n(r):au(n)?null:l.Children.only(n):null)}function uu(e){var r={};if(e.inner){if(e.inner.length===0)return z(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var u=o;F(r,u.path)||(r=z(r,u.path,u.message))}}return r}function cu(e,r,t,n){t===void 0&&(t=!1);var i=Ne(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Ne(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(i){return Array.isArray(i)===!0||lr(i)?Ne(i):i!==""?i:void 0}):lr(e[n])?r[n]=Ne(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function su(e,r,t){var n=e.slice();return r.forEach(function(o,u){if(typeof n[u]>"u"){var p=t.clone!==!1,h=p&&t.isMergeableObject(o);n[u]=h?Me(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[u]=Me(e[u],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function lu(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function fu(e,r,t){if(typeof e=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var du=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?l.useLayoutEffect:l.useEffect;function P(e){var r=l.useRef(e);return du(function(){r.current=e}),l.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}function yu(e){var r=e.validate,t=e.name,n=e.render,i=e.children,o=e.as,u=e.component,p=e.className,h=J(e,["validate","name","render","children","as","component","className"]),y=lt(),O=J(y,["validate","validationSchema"]),I=O.registerField,f=O.unregisterField;l.useEffect(function(){return I(t,{validate:r}),function(){f(t)}},[I,f,t,r]);var A=O.getFieldProps(E({name:t},h)),M=O.getFieldMeta(t),w={field:A,form:O};if(n)return n(E({},w,{meta:M}));if(C(i))return i(E({},w,{meta:M}));if(u){if(typeof u=="string"){var j=h.innerRef,_=J(h,["innerRef"]);return l.createElement(u,E({ref:j},A,_,{className:p}),i)}return l.createElement(u,E({field:A,form:O},h,{className:p}),i)}var R=o||"input";if(typeof R=="string"){var me=h.innerRef,Te=J(h,["innerRef"]);return l.createElement(R,E({ref:me},A,Te,{className:p}),i)}return l.createElement(R,E({},A,h,{className:p}),i)}var pu=l.forwardRef(function(e,r){var t=e.action,n=J(e,["action"]),i=t??"#",o=lt(),u=o.handleReset,p=o.handleSubmit;return l.createElement("form",E({onSubmit:p,ref:r,onReset:u,action:i},n))});pu.displayName="Form";export{gu as F,pu as a,yu as b,ou as u};
