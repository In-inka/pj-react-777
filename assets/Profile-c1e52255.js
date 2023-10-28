import{s as m,g as $,r as W,j as e,p as oe,q as ae,t as Le,u as De,b as Ie,d as Te,o as $e}from"./index-9105a374.js";import{c as Ne,a as xe,b as ne,d as Re,u as Be}from"./index.esm-481201d0.js";import{a as Me}from"./SignUpForm.styled-1b30ada6.js";import{S as We,t as qe,C as Ge}from"./DaySwitch.styled-3dd85dc1.js";import{C as ze}from"./ContainerStyled-bb0b3bf9.js";import{C as Ue,P as Ve,a as He,U as Ye,I as Q,b as Xe,c as Je,N as Ke,d as Qe,e as Ze,S as ye,T as je,D as we,A as et,L as tt}from"./UserCards.styled-cc0bc0c6.js";import{s as Z}from"./sprite-390c5ca3.js";import"./emotion-styled.browser.esm-668a3a34.js";import"./createClass-3af136d0.js";const nt=m.form`
    padding-top: 18px;
    
@media screen and (min-width: 768px) {
    padding-top: 38px;
        
}
@media screen and (min-width: 1440px) {
    padding-top: 32px;
        
}
`,rt=m.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 14px;
@media screen and (min-width: 768px) {
    flex-direction: row;
        
}
`,it=m.div`
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 20px;
@media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 16px;
}

`,de=m.div`
width: 100%;

`,ot=m.label`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    
    color: #efede8;
    width: 100%;
    height: 100%;
    background-color: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: ${$.title};
    border-radius: 12px;
    padding: 13px;
    font-size: 14px;
    line-height: 1.29;
    &:hover,
    &:focus {
        border-color: rgba(230, 83, 60, 1);
    }

    &:active{
        /* background-color: inherit; */
    }
    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.5;
      
    }
`;m.span`
    display: flex;
    align-items: center;
`;const be=m.div`
    display: flex;
    gap: 14px;
    align-items: flex-end;
@media screen and (min-width: 768px) {
    width: 345px;
}
`;m.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    @media screen and (min-width: 375px) {
        justify-content: flex-start;
        gap: 20px;
    }
    `;m.div`
    display: flex;
    gap: 4px;
    @media screen and (min-width: 375px) {
        gap: 8px;
    }
`;const at=m.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 40px;
`,ue=m.label`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: ${$.titleCards};
    margin-bottom: 4px;
    @media screen and (min-width: 768px) {
        margin-bottom: 8px;
    }
`,he=m.input`
     outline: 0;
    outline-offset: 0;
    color: #efede8;
    width: 100%;
    background-color: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: ${$.title};
    border-radius: 12px;
    padding: 14px;
    font-size: 14px;
    line-height: 1.29;
    &:hover,
    &:focus {
        border-color: rgba(230, 83, 60, 1);
    }

    &:active{
        background-color: inherit;
    }
    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.5;
      
    }
`,st=m.span`
    display: flex;
    align-items: center;
    color: ${$.title};
    width: 100%;
    background-color: inherit;
    border-width: 1px;
    border-style: solid;
    border-color: ${t=>t.theme.main};
    border-radius: 12px;
    padding: 14px;
    font-size: 14px;
    line-height: 1.29;
`,lt=m.span`
    display: block;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: ${$.titleCards};
    margin-bottom: 4px;
`;m.label`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0em;
    text-align: left;

`;m.input`
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
`;m.svg`
    fill: #000000;
    stroke: currentColor;   
`;const ct=m.div`
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
@media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
}
`,Fe=m.div`
display: flex;
gap: 8px;
    margin: 0;

    /* max-width: 300px; */
`,dt=m.div`
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
`,D=m.div`
  /* margin-bottom: 20px; */

`,I=m.label`
    position: relative;
    /* margin-left: 32px; */
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
 
    
`,O=m.span`

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(99, 99, 102, 1);
  border-radius: 50%;

  &::before{
      content: "";
      position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #333;
    transition: all 0.2s ease-in-out;
  }
@media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    &::before{
        width: 10px;
        height: 10px;
        margin: auto;
    }

}

  `,T=m.input`
      display: none;
    &:checked + ${O}{
        /* display: flex;
        justify-content: center;
        align-items: center; */
        border-color: ${$.bgSecondary};
        &::before{

            background-color: ${$.bgSecondary};
            transform: translate(-50%, -50%) scale(1);
        }
    }
`,ee=m.span`
    position: relative;
    margin-left: 32px;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0em;
    text-align: left;
    color: ${$.withe};
@media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
}
`;m.div`
    width: 100%;
    display: flex;
    gap: 9px;
    `;const re=m.span`
    margin-left: 32px;
    display: block;
    width: 260px;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0em;
    text-align: left;
    color: ${$.withe};
    @media screen and (min-width: 768px) {
        width: 100%;
    }
    
    `;m.input`
    background-color: rgba(0,0,0,1);
    /* width: 100px; */
    border: none;
    color: ${$.withe}; 
    outline: none;
    cursor: pointer;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0em;
    text-align: left;

`;Ne().shape({name:xe().required("Name is required"),height:ne().min(150,"Height must be at least 150 cm").required("Height is required"),currentWeight:ne().min(35,"Weight must be at least 35 kg").required("Current weight is required"),desiredWeight:ne().min(35,"Weight must be at least 35 kg").required("Desired weight is required"),birthday:Re().max(new Date(new Date().getFullYear()-18,new Date().getMonth(),new Date().getDate()),"Must be at least 18 years old").required("Birthday is required"),blood:ne().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:xe().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:ne().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")});const ut=()=>{const[t,i]=W.useState(new Date),s="dd.MM.yyyy",l=W.useRef(null),a=Be({initialValues:{name:"",height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"",sex:"",levelActivity:""},onSubmit:async(p,f)=>{await new Promise(h=>setTimeout(h,1e3)),console.log("data",p),f.resetForm()}}),u=p=>{const h=new Date().getFullYear()-p.getFullYear();console.log("validDate",h)};return e.jsx("div",{children:e.jsxs(nt,{onSubmit:a.handleSubmit,children:[e.jsx(ue,{htmlFor:"name",children:"Basic info"}),e.jsxs(rt,{children:[e.jsx(he,{name:"name",type:"text",id:"name",onChange:a.handleChange,value:a.values.name}),e.jsx(st,{children:"example@example.com"})]}),e.jsxs(it,{children:[e.jsxs(be,{children:[e.jsxs(de,{children:[e.jsx(ue,{htmlFor:"Height",children:"Height"}),e.jsx(he,{name:"height",type:"number",onChange:a.handleChange,value:a.values.height,placeholder:"0"})]}),e.jsxs(de,{children:[e.jsx(ue,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(he,{name:"currentWeight",type:"number",onChange:a.handleChange,value:a.values.currentWeight,placeholder:"0"})]})]}),e.jsxs(be,{children:[e.jsxs(de,{children:[e.jsx(ue,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(he,{name:"desiredWeight",type:"number",onChange:a.handleChange,value:a.values.desiredWeight,placeholder:"0"})]}),e.jsx(de,{children:e.jsx(We,{children:e.jsx(ot,{children:e.jsx(qe,{selected:t,onChange:p=>u(p),dateFormat:s,customInput:e.jsx(Ge,{}),ref:l})})})})]})]}),e.jsx(lt,{children:"Blood"}),e.jsxs(ct,{children:[e.jsxs(Fe,{children:[e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"blood",type:"radio",onChange:a.handleChange,value:"1"}),e.jsx(O,{}),e.jsx(ee,{children:"1"})]})}),e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"blood",type:"radio",onChange:a.handleChange,value:"2"}),e.jsx(O,{}),e.jsx(ee,{children:"2"})]})}),e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"blood",type:"radio",onChange:a.handleChange,value:"3"}),e.jsx(O,{}),e.jsx(ee,{children:"3"})]})}),e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"blood",type:"radio",onChange:a.handleChange,value:"4"}),e.jsx(O,{}),e.jsx(ee,{children:"4"})]})})]}),e.jsx(Fe,{children:e.jsxs(dt,{children:[e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"sex",type:"radio",onChange:a.handleChange,value:"male"}),e.jsx(O,{}),e.jsx(ee,{children:"Male"})]})}),e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"sex",type:"radio",onChange:a.handleChange,value:"female"}),e.jsx(O,{}),e.jsx(ee,{children:"Female"})]})})]})})]}),e.jsxs(at,{children:[e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"levelActivity",type:"radio",onChange:a.handleChange,value:"1"}),e.jsx(O,{}),e.jsx(re,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"levelActivity",type:"radio",onChange:a.handleChange,value:"2"}),e.jsx(O,{}),e.jsx(re,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"levelActivity",type:"radio",onChange:a.handleChange,value:"3"}),e.jsx(O,{}),e.jsx(re,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"levelActivity",type:"radio",onChange:a.handleChange,value:"4"}),e.jsx(O,{}),e.jsx(re,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"levelActivity",type:"radio",onChange:a.handleChange,value:"5"}),e.jsx(O,{}),e.jsx(re,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx(Me,{type:"submit",children:"Save"})]})})},ht=m.h2`
  margin-bottom: 40px;

  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;

  color: ${$.withe};
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    font-size: 32px;
    line-height: 1.37;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`,pt=({text:t,className:i})=>e.jsx(ht,{className:i,children:t}),ft=m.div`
  ${ze};
  padding-top: 101px;
  padding-bottom: 66px;
  @media (min-width: 768px) {
    padding-top: 156px;
    padding-bottom: 54px;
  }
  @media (min-width: 1440px) {
    padding-top: 156px;
    padding-bottom: 54px;
  }
`,mt=m.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 26px;
  }
`;function H(){H=function(){return t};var t={},i=Object.prototype,s=i.hasOwnProperty,l=Object.defineProperty||function(r,n,o){r[n]=o.value},a=typeof Symbol=="function"?Symbol:{},u=a.iterator||"@@iterator",p=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function h(r,n,o){return Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}),r[n]}try{h({},"")}catch{h=function(n,o,d){return n[o]=d}}function C(r,n,o,d){var c=n&&n.prototype instanceof b?n:b,g=Object.create(c.prototype),v=new _(d||[]);return l(g,"_invoke",{value:le(r,o,v)}),g}function S(r,n,o){try{return{type:"normal",arg:r.call(n,o)}}catch(d){return{type:"throw",arg:d}}}t.wrap=C;var y={};function b(){}function E(){}function P(){}var Y={};h(Y,u,function(){return this});var te=Object.getPrototypeOf,q=te&&te(te(J([])));q&&q!==i&&s.call(q,u)&&(Y=q);var N=P.prototype=b.prototype=Object.create(Y);function se(r){["next","throw","return"].forEach(function(n){h(r,n,function(o){return this._invoke(n,o)})})}function R(r,n){function o(c,g,v,F){var j=S(r[c],r,g);if(j.type!=="throw"){var k=j.arg,L=k.value;return L&&typeof L=="object"&&s.call(L,"__await")?n.resolve(L.__await).then(function(x){o("next",x,v,F)},function(x){o("throw",x,v,F)}):n.resolve(L).then(function(x){k.value=x,v(k)},function(x){return o("throw",x,v,F)})}F(j.arg)}var d;l(this,"_invoke",{value:function(c,g){function v(){return new n(function(F,j){o(c,g,F,j)})}return d=d?d.then(v,v):v()}})}function le(r,n,o){var d="suspendedStart";return function(c,g){if(d==="executing")throw new Error("Generator is already running");if(d==="completed"){if(c==="throw")throw g;return V()}for(o.method=c,o.arg=g;;){var v=o.delegate;if(v){var F=ce(v,o);if(F){if(F===y)continue;return F}}if(o.method==="next")o.sent=o._sent=o.arg;else if(o.method==="throw"){if(d==="suspendedStart")throw d="completed",o.arg;o.dispatchException(o.arg)}else o.method==="return"&&o.abrupt("return",o.arg);d="executing";var j=S(r,n,o);if(j.type==="normal"){if(d=o.done?"completed":"suspendedYield",j.arg===y)continue;return{value:j.arg,done:o.done}}j.type==="throw"&&(d="completed",o.method="throw",o.arg=j.arg)}}}function ce(r,n){var o=n.method,d=r.iterator[o];if(d===void 0)return n.delegate=null,o==="throw"&&r.iterator.return&&(n.method="return",n.arg=void 0,ce(r,n),n.method==="throw")||o!=="return"&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),y;var c=S(d,r.iterator,n.arg);if(c.type==="throw")return n.method="throw",n.arg=c.arg,n.delegate=null,y;var g=c.arg;return g?g.done?(n[r.resultName]=g.value,n.next=r.nextLoc,n.method!=="return"&&(n.method="next",n.arg=void 0),n.delegate=null,y):g:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function X(r){var n={tryLoc:r[0]};1 in r&&(n.catchLoc=r[1]),2 in r&&(n.finallyLoc=r[2],n.afterLoc=r[3]),this.tryEntries.push(n)}function G(r){var n=r.completion||{};n.type="normal",delete n.arg,r.completion=n}function _(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(X,this),this.reset(!0)}function J(r){if(r){var n=r[u];if(n)return n.call(r);if(typeof r.next=="function")return r;if(!isNaN(r.length)){var o=-1,d=function c(){for(;++o<r.length;)if(s.call(r,o))return c.value=r[o],c.done=!1,c;return c.value=void 0,c.done=!0,c};return d.next=d}}return{next:V}}function V(){return{value:void 0,done:!0}}return E.prototype=P,l(N,"constructor",{value:P,configurable:!0}),l(P,"constructor",{value:E,configurable:!0}),E.displayName=h(P,f,"GeneratorFunction"),t.isGeneratorFunction=function(r){var n=typeof r=="function"&&r.constructor;return!!n&&(n===E||(n.displayName||n.name)==="GeneratorFunction")},t.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,P):(r.__proto__=P,h(r,f,"GeneratorFunction")),r.prototype=Object.create(N),r},t.awrap=function(r){return{__await:r}},se(R.prototype),h(R.prototype,p,function(){return this}),t.AsyncIterator=R,t.async=function(r,n,o,d,c){c===void 0&&(c=Promise);var g=new R(C(r,n,o,d),c);return t.isGeneratorFunction(n)?g:g.next().then(function(v){return v.done?v.value:g.next()})},se(N),h(N,f,"Generator"),h(N,u,function(){return this}),h(N,"toString",function(){return"[object Generator]"}),t.keys=function(r){var n=Object(r),o=[];for(var d in n)o.push(d);return o.reverse(),function c(){for(;o.length;){var g=o.pop();if(g in n)return c.value=g,c.done=!1,c}return c.done=!0,c}},t.values=J,_.prototype={constructor:_,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(G),!r)for(var n in this)n.charAt(0)==="t"&&s.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var r=this.tryEntries[0].completion;if(r.type==="throw")throw r.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function o(j,k){return g.type="throw",g.arg=r,n.next=j,k&&(n.method="next",n.arg=void 0),!!k}for(var d=this.tryEntries.length-1;d>=0;--d){var c=this.tryEntries[d],g=c.completion;if(c.tryLoc==="root")return o("end");if(c.tryLoc<=this.prev){var v=s.call(c,"catchLoc"),F=s.call(c,"finallyLoc");if(v&&F){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(v){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!F)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(r,n){for(var o=this.tryEntries.length-1;o>=0;--o){var d=this.tryEntries[o];if(d.tryLoc<=this.prev&&s.call(d,"finallyLoc")&&this.prev<d.finallyLoc){var c=d;break}}c&&(r==="break"||r==="continue")&&c.tryLoc<=n&&n<=c.finallyLoc&&(c=null);var g=c?c.completion:{};return g.type=r,g.arg=n,c?(this.method="next",this.next=c.finallyLoc,y):this.complete(g)},complete:function(r,n){if(r.type==="throw")throw r.arg;return r.type==="break"||r.type==="continue"?this.next=r.arg:r.type==="return"?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):r.type==="normal"&&n&&(this.next=n),y},finish:function(r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.finallyLoc===r)return this.complete(o.completion,o.afterLoc),G(o),y}},catch:function(r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc===r){var d=o.completion;if(d.type==="throw"){var c=d.arg;G(o)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,o){return this.delegate={iterator:J(r),resultName:n,nextLoc:o},this.method==="next"&&(this.arg=void 0),y}},t}function Ce(t,i,s,l,a,u,p){try{var f=t[u](p),h=f.value}catch(C){s(C);return}f.done?i(h):Promise.resolve(h).then(l,a)}function me(t){return function(){var i=this,s=arguments;return new Promise(function(l,a){var u=t.apply(i,s);function p(h){Ce(u,l,a,p,f,"next",h)}function f(h){Ce(u,l,a,p,f,"throw",h)}p(void 0)})}}function ie(){return ie=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(t[l]=s[l])}return t},ie.apply(this,arguments)}function Ee(t,i){t.prototype=Object.create(i.prototype),t.prototype.constructor=t,ge(t,i)}function ge(t,i){return ge=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,a){return l.__proto__=a,l},ge(t,i)}function gt(t){if(t==null)throw new TypeError("Cannot destructure "+t)}var vt=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function pe(t,i){var s=xt(t);if(typeof s.path!="string"){var l=t.webkitRelativePath;Object.defineProperty(s,"path",{value:typeof i=="string"?i:typeof l=="string"&&l.length>0?l:t.name,writable:!1,configurable:!1,enumerable:!0})}return s}function xt(t){var i=t.name,s=i&&i.lastIndexOf(".")!==-1;if(s&&!t.type){var l=i.split(".").pop().toLowerCase(),a=vt.get(l);a&&Object.defineProperty(t,"type",{value:a,writable:!1,configurable:!1,enumerable:!0})}return t}var yt=[".DS_Store","Thumbs.db"];function jt(t){return oe(this,void 0,void 0,function(){return ae(this,function(i){return[2,wt(t)&&t.dataTransfer?Ct(t.dataTransfer,t.type):bt(t)]})})}function wt(t){return!!t.dataTransfer}function bt(t){var i=Ft(t.target)?t.target.files?ve(t.target.files):[]:[];return i.map(function(s){return pe(s)})}function Ft(t){return t!==null}function Ct(t,i){return oe(this,void 0,void 0,function(){var s,l;return ae(this,function(a){switch(a.label){case 0:return t.items?(s=ve(t.items).filter(function(u){return u.kind==="file"}),i!=="drop"?[2,s]:[4,Promise.all(s.map(St))]):[3,2];case 1:return l=a.sent(),[2,Se(_e(l))];case 2:return[2,Se(ve(t.files).map(function(u){return pe(u)}))]}})})}function Se(t){return t.filter(function(i){return yt.indexOf(i.name)===-1})}function ve(t){for(var i=[],s=0;s<t.length;s++){var l=t[s];i.push(l)}return i}function St(t){if(typeof t.webkitGetAsEntry!="function")return Pe(t);var i=t.webkitGetAsEntry();return i&&i.isDirectory?ke(i):Pe(t)}function _e(t){return t.reduce(function(i,s){return Le(i,Array.isArray(s)?_e(s):[s])},[])}function Pe(t){var i=t.getAsFile();if(!i)return Promise.reject(t+" is not a File");var s=pe(i);return Promise.resolve(s)}function Pt(t){return oe(this,void 0,void 0,function(){return ae(this,function(i){return[2,t.isDirectory?ke(t):Et(t)]})})}function ke(t){var i=t.createReader();return new Promise(function(s,l){var a=[];function u(){var p=this;i.readEntries(function(f){return oe(p,void 0,void 0,function(){var h,C,S;return ae(this,function(y){switch(y.label){case 0:if(f.length)return[3,5];y.label=1;case 1:return y.trys.push([1,3,,4]),[4,Promise.all(a)];case 2:return h=y.sent(),s(h),[3,4];case 3:return C=y.sent(),l(C),[3,4];case 4:return[3,6];case 5:S=Promise.all(f.map(Pt)),a.push(S),u(),y.label=6;case 6:return[2]}})})},function(f){l(f)})}u()})}function Et(t){return oe(this,void 0,void 0,function(){return ae(this,function(i){return[2,new Promise(function(s,l){t.file(function(a){var u=pe(a,t.fullPath);s(u)},function(a){l(a)})})]})})}function _t(t,i,s,l){var a=document.createElement("input");a.style.display="none",document.body.appendChild(a),a.type="file",t!=="*"&&(a.accept=t),a.multiple=i,a.addEventListener("change",function(u){s(u),document.body.removeChild(a)}),l&&l(a),a.dispatchEvent(new MouseEvent("click"))}var kt=function(i){var s=i.onFilesSelected,l=i.onFilesSuccessfullySelected,a=i.onFilesRejected,u=i.onClear,p=i.validators,f=function(b){s==null||s(b),p==null||p.forEach(function(E){E.onFilesSelected(b)})},h=function(b){l==null||l(b),p==null||p.forEach(function(E){E.onFilesSuccessfullySelected(b)})},C=function(b){a==null||a(b),p==null||p.forEach(function(E){E.onFilesRejected(b)})},S=function(){u==null||u(),p==null||p.forEach(function(b){b.onClear==null||b.onClear()})};return{onFilesSelected:f,onFilesSuccessfullySelected:h,onFilesRejected:C,onClear:S}};function At(t){var i=t.accept,s=i===void 0?"*":i,l=t.multiple,a=l===void 0?!0:l,u=t.readAs,p=u===void 0?"Text":u,f=t.readFilesContent,h=f===void 0?!0:f,C=t.validators,S=C===void 0?[]:C,y=t.initializeWithCustomParameters,b=W.useState([]),E=b[0],P=b[1],Y=W.useState([]),te=Y[0],q=Y[1],N=W.useState([]),se=N[0],R=N[1],le=W.useState(!1),ce=le[0],X=le[1],G=kt(t),_=G.onFilesSelected,J=G.onFilesSuccessfullySelected,V=G.onFilesRejected,r=G.onClear,n=W.useCallback(function(){P([]),q([]),R([])},[]),o=W.useCallback(function(){n(),r==null||r()},[n,r]),d=function(v){return new Promise(function(){var F=me(H().mark(function j(k,L){var x,B,K;return H().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:x=new FileReader,B=x["readAs"+p],B.call(x,v),K=function(w){var A=ie({},(gt(w),w));L(ie({},A))},x.onload=me(H().mark(function fe(){return H().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",Promise.all(S.map(function(M){return M.validateAfterParsing(t,v,x).catch(function(Oe){return Promise.reject(K(Oe))})})).then(function(){return k(ie({},v,{content:x.result,name:v.name,lastModified:v.lastModified}))}).catch(function(){}));case 1:case"end":return A.stop()}},fe)})),x.onerror=function(){K({name:"FileReaderError",readerError:x.error,causedByFile:v})};case 6:case"end":return U.stop()}},j)}));return function(j,k){return F.apply(this,arguments)}}())},c=function(){var v=s instanceof Array?s.join(","):s;_t(v,a,function(){var F=me(H().mark(function j(k){var L,x,B,K,z,U;return H().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return n(),L=k.target,x=L.files?Array.from(L.files):[],X(!0),w.next=6,Promise.all(S.map(function(A){return A.validateBeforeParsing(t,x).catch(function(M){return Array.isArray(M)?M:[M]})}));case 6:if(B=w.sent.flat(1).filter(Boolean),P(x),R(B),!B.length){w.next=15;break}return X(!1),P([]),V==null||V({errors:B}),_==null||_({errors:B}),w.abrupt("return");case 15:if(h){w.next=19;break}return X(!1),_==null||_({plainFiles:x,filesContent:[]}),w.abrupt("return");case 19:return w.next=21,jt(k);case 21:return K=w.sent,z=[],w.next=25,Promise.all(K.map(function(A){return d(A).catch(function(M){z.push.apply(z,Array.isArray(M)?M:[M])})}));case 25:if(U=w.sent,X(!1),!z.length){w.next=34;break}return P([]),q([]),R(function(A){return[].concat(A,z)}),V==null||V({errors:z}),_==null||_({errors:B.concat(z)}),w.abrupt("return");case 34:q(U),P(x),R([]),J==null||J({filesContent:U,plainFiles:x}),_==null||_({plainFiles:x,filesContent:U});case 39:case"end":return w.stop()}},j)}));return function(j){return F.apply(this,arguments)}}(),y)};return{openFilePicker:c,filesContent:te,errors:se,loading:ce,plainFiles:E,clear:o}}var Ae=function(){function t(){this.invokerHookId=void 0}var i=t.prototype;return i.onFilesSelected=function(l){},i.onFilesSuccessfullySelected=function(l){},i.onFilesRejected=function(l){},i.onClear=function(){},i.onFileRemoved=function(l,a){},t}(),Ot=function(t){Ee(i,t);function i(l){var a;return a=t.call(this)||this,a.limitAmountOfFilesConfig=void 0,a.limitAmountOfFilesConfig=l,a}var s=i.prototype;return s.validateBeforeParsing=function(a,u){var p=this.limitAmountOfFilesConfig,f=p.min,h=p.max;return h&&u.length>h?Promise.reject({name:"FileAmountLimitError",reason:"MAX_AMOUNT_OF_FILES_EXCEEDED"}):f&&u.length<f?Promise.reject({name:"FileAmountLimitError",reason:"MIN_AMOUNT_OF_FILES_NOT_REACHED"}):Promise.resolve()},s.validateAfterParsing=function(){return Promise.resolve()},i}(Ae),Lt=function(t){Ee(i,t);function i(l){var a;return a=t.call(this)||this,a.acceptedFileExtensions=void 0,a.acceptedFileExtensions=l,a}var s=i.prototype;return s.validateBeforeParsing=function(a,u){var p=this,f=u.reduce(function(h,C){var S=C.name.split(".").pop();return S?p.acceptedFileExtensions.includes(S)?h:[].concat(h,[{name:"FileTypeError",reason:"FILE_TYPE_NOT_ACCEPTED",causedByFile:C}]):[].concat(h,[{name:"FileTypeError",reason:"FILE_EXTENSION_NOT_FOUND",causedByFile:C}])},[]);return f.length>0?Promise.reject(f):Promise.resolve()},s.validateAfterParsing=function(a,u,p){return Promise.resolve()},i}(Ae);const Dt=()=>{const t=De(Ie.getUserName),[i,s]=W.useState(null),l=Te(),{openFilePicker:a}=At({readAs:"DataURL",accept:"image/*",multiple:!0,validators:[new Ot({max:1}),new Lt(["jpg"])],onFilesSuccessfullySelected:({filesContent:p})=>{const f=p[0].content;s(f),new FormData().append("avatar",f)}}),u=()=>{l($e.logOut())};return e.jsxs(Ue,{children:[e.jsx(Ve,{children:e.jsxs(He,{children:[i?e.jsx(Ye,{src:i,alt:"Avatar"}):e.jsx(Q,{width:61,height:62,className:"user",children:e.jsx("use",{href:`${Z}#icon-user`})}),e.jsx("div",{children:e.jsx(Xe,{onClick:()=>a(),children:e.jsx(Q,{width:24,height:24,className:"lightOrange mark",children:e.jsx("use",{href:`${Z}#icon-check_mark`})})})})]})}),e.jsxs(Je,{children:[e.jsx(Ke,{children:t}),e.jsx(Qe,{children:"User"})]}),e.jsxs(Ze,{children:[e.jsxs(ye,{children:[e.jsxs(je,{children:[e.jsx(Q,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${Z}#icon-fluent_food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(we,{children:"0"})]}),e.jsxs(ye,{children:[e.jsxs(je,{children:[" ",e.jsx(Q,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${Z}#icon-dumbbell`})}),e.jsx("p",{children:"Daily norm of sports"})]}),e.jsx(we,{children:"0 min"})]})]}),e.jsxs(et,{children:[e.jsxs("div",{children:[" ",e.jsx(Q,{width:24,height:24,className:"orange",children:e.jsx("use",{href:`${Z}#icon-exclamation-mark`})})]}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(tt,{type:"button",onClick:u,children:["Logout"," ",e.jsx(Q,{width:24,height:24,className:"stroke",children:e.jsx("use",{href:`${Z}#icon-logout`})})]})]})},Gt=()=>e.jsxs(ft,{children:[e.jsx(pt,{text:"Profile Settings"}),e.jsxs(mt,{children:[e.jsx(Dt,{}),e.jsx(ut,{})]})]});export{Gt as default};
