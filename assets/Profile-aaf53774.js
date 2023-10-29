import{s as p,g as $,d as _e,r as W,j as e,o as ge,t as ae,v as oe,w as Ie,u as Te,b as $e}from"./index-2fc245cc.js";import{c as Ne,a as ye,b as re,d as Re,u as Be,B as Me}from"./Button-1c200803.js";import{S as We,t as qe,f as Ge,C as ze}from"./DaySwitch.styled-2596b2f8.js";import{C as Ue}from"./ContainerStyled-bb0b3bf9.js";import{C as Ve,P as He,a as Ye,U as Xe,I as Q,b as Je,c as Ke,N as Qe,d as Ze,e as et,S as je,T as we,D as be,A as tt,L as rt}from"./UserCards.styled-ac366392.js";import{s as Z}from"./sprite-2151631c.js";import"./createClass-f73a2ddc.js";const nt=p.form`
    padding-top: 18px;
    
@media screen and (min-width: 768px) {
    padding-top: 38px;
        
}
@media screen and (min-width: 1440px) {
    padding-top: 32px;
        
}
`,it=p.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 14px;
@media screen and (min-width: 768px) {
    flex-direction: row;
        
}
`,at=p.div`
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

`,de=p.div`
width: 100%;

`,ot=p.label`
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
`;p.span`
    display: flex;
    align-items: center;
`;const Fe=p.div`
    display: flex;
    gap: 14px;
    align-items: flex-end;
@media screen and (min-width: 768px) {
    width: 345px;
}
`;p.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    @media screen and (min-width: 375px) {
        justify-content: flex-start;
        gap: 20px;
    }
    `;p.div`
    display: flex;
    gap: 4px;
    @media screen and (min-width: 375px) {
        gap: 8px;
    }
`;const st=p.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 40px;
`,ue=p.label`
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: ${$.titleCards};
    margin-bottom: 4px;
    @media screen and (min-width: 768px) {
        margin-bottom: 8px;
    }
`,he=p.input`
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
`,lt=p.span`
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
`,ct=p.span`
    display: block;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0px;
    color: ${$.titleCards};
    margin-bottom: 4px;
`;p.label`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0em;
    text-align: left;

`;p.input`
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
`;p.svg`
    fill: #000000;
    stroke: currentColor;   
`;const dt=p.div`
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
@media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
}
`,Ce=p.div`
display: flex;
gap: 8px;
    margin: 0;

    /* max-width: 300px; */
`,ut=p.div`
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
`,D=p.div`
  /* margin-bottom: 20px; */

`,I=p.label`
    position: relative;
    /* margin-left: 32px; */
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
 
    
`,O=p.span`

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

  `,T=p.input`
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
`,ee=p.span`
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
`;p.div`
    width: 100%;
    display: flex;
    gap: 9px;
    `;const ne=p.span`
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
    
    `;p.input`
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

`;const ht=Ne().shape({name:ye().required("Name is required"),height:re().min(150,"Height must be at least 150 cm").required("Height is required"),currentWeight:re().min(35,"Weight must be at least 35 kg").required("Current weight is required"),desiredWeight:re().min(35,"Weight must be at least 35 kg").required("Desired weight is required"),birthday:Re().max(new Date(new Date().getFullYear()-18,new Date().getMonth(),new Date().getDate()),"Must be at least 18 years old").required("Birthday is required"),blood:re().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:ye().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:re().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),pt=()=>{const t=_e(),[i,s]=W.useState(Date.now()),a=Be({initialValues:{name:"",height:"",currentWeight:"",desiredWeight:"",birthday:i,blood:"",sex:"",levelActivity:""},validationSchema:ht,onSubmit:async(l,u)=>{await new Promise(f=>setTimeout(f,1e3)),t(ge.updateUserMetricsData(l)),console.log("data",l),u.resetForm()}});return e.jsx("div",{children:e.jsxs(nt,{onSubmit:a.handleSubmit,children:[e.jsx(ue,{htmlFor:"name",children:"Basic info"}),e.jsxs(it,{children:[e.jsx(he,{name:"name",type:"text",id:"name",onChange:a.handleChange,value:a.values.name}),e.jsx(lt,{children:"example@example.com"})]}),e.jsxs(at,{children:[e.jsxs(Fe,{children:[e.jsxs(de,{children:[e.jsx(ue,{htmlFor:"Height",children:"Height"}),e.jsx(he,{name:"height",type:"number",onChange:a.handleChange,value:a.values.height,placeholder:"0"})]}),e.jsxs(de,{children:[e.jsx(ue,{htmlFor:"currentWeight",children:"Current Weight"}),e.jsx(he,{name:"currentWeight",type:"number",onChange:a.handleChange,value:a.values.currentWeight,placeholder:"0"})]})]}),e.jsxs(Fe,{children:[e.jsxs(de,{children:[e.jsx(ue,{htmlFor:"desiredWeight",children:"Desired Weight"}),e.jsx(he,{name:"desiredWeight",type:"number",onChange:a.handleChange,value:a.values.desiredWeight,placeholder:"0"})]}),e.jsx(de,{children:e.jsx(We,{children:e.jsx(ot,{children:e.jsx(qe,{selected:i,onChange:l=>{s(l),a.setFieldValue("birthday",Ge(l,"yyyy-MM-dd"))},customInput:e.jsx(ze,{}),dateFormat:"yyyy-MM-dd",calendarStartDay:1,formatWeekDay:l=>l.substr(0,1)})})})})]})]}),e.jsx(ct,{children:"Blood"}),e.jsxs(dt,{children:[e.jsxs(Ce,{children:[e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"blood",type:"radio",onChange:a.handleChange,value:"1"}),e.jsx(O,{}),e.jsx(ee,{children:"1"})]})}),e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"blood",type:"radio",onChange:a.handleChange,value:"2"}),e.jsx(O,{}),e.jsx(ee,{children:"2"})]})}),e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"blood",type:"radio",onChange:a.handleChange,value:"3"}),e.jsx(O,{}),e.jsx(ee,{children:"3"})]})}),e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"blood",type:"radio",onChange:a.handleChange,value:"4"}),e.jsx(O,{}),e.jsx(ee,{children:"4"})]})})]}),e.jsx(Ce,{children:e.jsxs(ut,{children:[e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"sex",type:"radio",onChange:a.handleChange,value:"male"}),e.jsx(O,{}),e.jsx(ee,{children:"Male"})]})}),e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"sex",type:"radio",onChange:a.handleChange,value:"female"}),e.jsx(O,{}),e.jsx(ee,{children:"Female"})]})})]})})]}),e.jsxs(st,{children:[e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"levelActivity",type:"radio",onChange:a.handleChange,value:"1"}),e.jsx(O,{}),e.jsx(ne,{children:"Sedentary lifestyle (little or no physical activity)"})]})}),e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"levelActivity",type:"radio",onChange:a.handleChange,value:"2"}),e.jsx(O,{}),e.jsx(ne,{children:"Light activity (light exercises/sports 1-3 days per week)"})]})}),e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"levelActivity",type:"radio",onChange:a.handleChange,value:"3"}),e.jsx(O,{}),e.jsx(ne,{children:"Moderately active (moderate exercises/sports 3-5 days per week)"})]})}),e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"levelActivity",type:"radio",onChange:a.handleChange,value:"4"}),e.jsx(O,{}),e.jsx(ne,{children:"Very active (intense exercises/sports 6-7 days per week)"})]})}),e.jsx(D,{children:e.jsxs(I,{children:[e.jsx(T,{name:"levelActivity",type:"radio",onChange:a.handleChange,value:"5"}),e.jsx(O,{}),e.jsx(ne,{children:"Extremely active (very strenuous exercises/sports and physical work)"})]})})]}),e.jsx(Me,{type:"submit",text:"Save"})]})})},ft=p.h2`
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
`,mt=({text:t,className:i})=>e.jsx(ft,{className:i,children:t}),gt=p.div`
  ${Ue};
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
`,vt=p.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 26px;
  }
`;function H(){H=function(){return t};var t={},i=Object.prototype,s=i.hasOwnProperty,a=Object.defineProperty||function(n,r,o){n[r]=o.value},l=typeof Symbol=="function"?Symbol:{},u=l.iterator||"@@iterator",f=l.asyncIterator||"@@asyncIterator",g=l.toStringTag||"@@toStringTag";function h(n,r,o){return Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}),n[r]}try{h({},"")}catch{h=function(r,o,d){return r[o]=d}}function C(n,r,o,d){var c=r&&r.prototype instanceof b?r:b,m=Object.create(c.prototype),v=new _(d||[]);return a(m,"_invoke",{value:le(n,o,v)}),m}function S(n,r,o){try{return{type:"normal",arg:n.call(r,o)}}catch(d){return{type:"throw",arg:d}}}t.wrap=C;var y={};function b(){}function E(){}function P(){}var Y={};h(Y,u,function(){return this});var te=Object.getPrototypeOf,q=te&&te(te(J([])));q&&q!==i&&s.call(q,u)&&(Y=q);var N=P.prototype=b.prototype=Object.create(Y);function se(n){["next","throw","return"].forEach(function(r){h(n,r,function(o){return this._invoke(r,o)})})}function R(n,r){function o(c,m,v,F){var j=S(n[c],n,m);if(j.type!=="throw"){var k=j.arg,L=k.value;return L&&typeof L=="object"&&s.call(L,"__await")?r.resolve(L.__await).then(function(x){o("next",x,v,F)},function(x){o("throw",x,v,F)}):r.resolve(L).then(function(x){k.value=x,v(k)},function(x){return o("throw",x,v,F)})}F(j.arg)}var d;a(this,"_invoke",{value:function(c,m){function v(){return new r(function(F,j){o(c,m,F,j)})}return d=d?d.then(v,v):v()}})}function le(n,r,o){var d="suspendedStart";return function(c,m){if(d==="executing")throw new Error("Generator is already running");if(d==="completed"){if(c==="throw")throw m;return V()}for(o.method=c,o.arg=m;;){var v=o.delegate;if(v){var F=ce(v,o);if(F){if(F===y)continue;return F}}if(o.method==="next")o.sent=o._sent=o.arg;else if(o.method==="throw"){if(d==="suspendedStart")throw d="completed",o.arg;o.dispatchException(o.arg)}else o.method==="return"&&o.abrupt("return",o.arg);d="executing";var j=S(n,r,o);if(j.type==="normal"){if(d=o.done?"completed":"suspendedYield",j.arg===y)continue;return{value:j.arg,done:o.done}}j.type==="throw"&&(d="completed",o.method="throw",o.arg=j.arg)}}}function ce(n,r){var o=r.method,d=n.iterator[o];if(d===void 0)return r.delegate=null,o==="throw"&&n.iterator.return&&(r.method="return",r.arg=void 0,ce(n,r),r.method==="throw")||o!=="return"&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),y;var c=S(d,n.iterator,r.arg);if(c.type==="throw")return r.method="throw",r.arg=c.arg,r.delegate=null,y;var m=c.arg;return m?m.done?(r[n.resultName]=m.value,r.next=n.nextLoc,r.method!=="return"&&(r.method="next",r.arg=void 0),r.delegate=null,y):m:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function X(n){var r={tryLoc:n[0]};1 in n&&(r.catchLoc=n[1]),2 in n&&(r.finallyLoc=n[2],r.afterLoc=n[3]),this.tryEntries.push(r)}function G(n){var r=n.completion||{};r.type="normal",delete r.arg,n.completion=r}function _(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(X,this),this.reset(!0)}function J(n){if(n){var r=n[u];if(r)return r.call(n);if(typeof n.next=="function")return n;if(!isNaN(n.length)){var o=-1,d=function c(){for(;++o<n.length;)if(s.call(n,o))return c.value=n[o],c.done=!1,c;return c.value=void 0,c.done=!0,c};return d.next=d}}return{next:V}}function V(){return{value:void 0,done:!0}}return E.prototype=P,a(N,"constructor",{value:P,configurable:!0}),a(P,"constructor",{value:E,configurable:!0}),E.displayName=h(P,g,"GeneratorFunction"),t.isGeneratorFunction=function(n){var r=typeof n=="function"&&n.constructor;return!!r&&(r===E||(r.displayName||r.name)==="GeneratorFunction")},t.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,P):(n.__proto__=P,h(n,g,"GeneratorFunction")),n.prototype=Object.create(N),n},t.awrap=function(n){return{__await:n}},se(R.prototype),h(R.prototype,f,function(){return this}),t.AsyncIterator=R,t.async=function(n,r,o,d,c){c===void 0&&(c=Promise);var m=new R(C(n,r,o,d),c);return t.isGeneratorFunction(r)?m:m.next().then(function(v){return v.done?v.value:m.next()})},se(N),h(N,g,"Generator"),h(N,u,function(){return this}),h(N,"toString",function(){return"[object Generator]"}),t.keys=function(n){var r=Object(n),o=[];for(var d in r)o.push(d);return o.reverse(),function c(){for(;o.length;){var m=o.pop();if(m in r)return c.value=m,c.done=!1,c}return c.done=!0,c}},t.values=J,_.prototype={constructor:_,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(G),!n)for(var r in this)r.charAt(0)==="t"&&s.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if(n.type==="throw")throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function o(j,k){return m.type="throw",m.arg=n,r.next=j,k&&(r.method="next",r.arg=void 0),!!k}for(var d=this.tryEntries.length-1;d>=0;--d){var c=this.tryEntries[d],m=c.completion;if(c.tryLoc==="root")return o("end");if(c.tryLoc<=this.prev){var v=s.call(c,"catchLoc"),F=s.call(c,"finallyLoc");if(v&&F){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(v){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!F)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(n,r){for(var o=this.tryEntries.length-1;o>=0;--o){var d=this.tryEntries[o];if(d.tryLoc<=this.prev&&s.call(d,"finallyLoc")&&this.prev<d.finallyLoc){var c=d;break}}c&&(n==="break"||n==="continue")&&c.tryLoc<=r&&r<=c.finallyLoc&&(c=null);var m=c?c.completion:{};return m.type=n,m.arg=r,c?(this.method="next",this.next=c.finallyLoc,y):this.complete(m)},complete:function(n,r){if(n.type==="throw")throw n.arg;return n.type==="break"||n.type==="continue"?this.next=n.arg:n.type==="return"?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):n.type==="normal"&&r&&(this.next=r),y},finish:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.finallyLoc===n)return this.complete(o.completion,o.afterLoc),G(o),y}},catch:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc===n){var d=o.completion;if(d.type==="throw"){var c=d.arg;G(o)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,o){return this.delegate={iterator:J(n),resultName:r,nextLoc:o},this.method==="next"&&(this.arg=void 0),y}},t}function Se(t,i,s,a,l,u,f){try{var g=t[u](f),h=g.value}catch(C){s(C);return}g.done?i(h):Promise.resolve(h).then(a,l)}function me(t){return function(){var i=this,s=arguments;return new Promise(function(a,l){var u=t.apply(i,s);function f(h){Se(u,a,l,f,g,"next",h)}function g(h){Se(u,a,l,f,g,"throw",h)}f(void 0)})}}function ie(){return ie=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t},ie.apply(this,arguments)}function ke(t,i){t.prototype=Object.create(i.prototype),t.prototype.constructor=t,ve(t,i)}function ve(t,i){return ve=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,l){return a.__proto__=l,a},ve(t,i)}function xt(t){if(t==null)throw new TypeError("Cannot destructure "+t)}var yt=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function pe(t,i){var s=jt(t);if(typeof s.path!="string"){var a=t.webkitRelativePath;Object.defineProperty(s,"path",{value:typeof i=="string"?i:typeof a=="string"&&a.length>0?a:t.name,writable:!1,configurable:!1,enumerable:!0})}return s}function jt(t){var i=t.name,s=i&&i.lastIndexOf(".")!==-1;if(s&&!t.type){var a=i.split(".").pop().toLowerCase(),l=yt.get(a);l&&Object.defineProperty(t,"type",{value:l,writable:!1,configurable:!1,enumerable:!0})}return t}var wt=[".DS_Store","Thumbs.db"];function bt(t){return ae(this,void 0,void 0,function(){return oe(this,function(i){return[2,Ft(t)&&t.dataTransfer?Pt(t.dataTransfer,t.type):Ct(t)]})})}function Ft(t){return!!t.dataTransfer}function Ct(t){var i=St(t.target)?t.target.files?xe(t.target.files):[]:[];return i.map(function(s){return pe(s)})}function St(t){return t!==null}function Pt(t,i){return ae(this,void 0,void 0,function(){var s,a;return oe(this,function(l){switch(l.label){case 0:return t.items?(s=xe(t.items).filter(function(u){return u.kind==="file"}),i!=="drop"?[2,s]:[4,Promise.all(s.map(Et))]):[3,2];case 1:return a=l.sent(),[2,Pe(Ae(a))];case 2:return[2,Pe(xe(t.files).map(function(u){return pe(u)}))]}})})}function Pe(t){return t.filter(function(i){return wt.indexOf(i.name)===-1})}function xe(t){for(var i=[],s=0;s<t.length;s++){var a=t[s];i.push(a)}return i}function Et(t){if(typeof t.webkitGetAsEntry!="function")return Ee(t);var i=t.webkitGetAsEntry();return i&&i.isDirectory?Oe(i):Ee(t)}function Ae(t){return t.reduce(function(i,s){return Ie(i,Array.isArray(s)?Ae(s):[s])},[])}function Ee(t){var i=t.getAsFile();if(!i)return Promise.reject(t+" is not a File");var s=pe(i);return Promise.resolve(s)}function _t(t){return ae(this,void 0,void 0,function(){return oe(this,function(i){return[2,t.isDirectory?Oe(t):kt(t)]})})}function Oe(t){var i=t.createReader();return new Promise(function(s,a){var l=[];function u(){var f=this;i.readEntries(function(g){return ae(f,void 0,void 0,function(){var h,C,S;return oe(this,function(y){switch(y.label){case 0:if(g.length)return[3,5];y.label=1;case 1:return y.trys.push([1,3,,4]),[4,Promise.all(l)];case 2:return h=y.sent(),s(h),[3,4];case 3:return C=y.sent(),a(C),[3,4];case 4:return[3,6];case 5:S=Promise.all(g.map(_t)),l.push(S),u(),y.label=6;case 6:return[2]}})})},function(g){a(g)})}u()})}function kt(t){return ae(this,void 0,void 0,function(){return oe(this,function(i){return[2,new Promise(function(s,a){t.file(function(l){var u=pe(l,t.fullPath);s(u)},function(l){a(l)})})]})})}function At(t,i,s,a){var l=document.createElement("input");l.style.display="none",document.body.appendChild(l),l.type="file",t!=="*"&&(l.accept=t),l.multiple=i,l.addEventListener("change",function(u){s(u),document.body.removeChild(l)}),a&&a(l),l.dispatchEvent(new MouseEvent("click"))}var Ot=function(i){var s=i.onFilesSelected,a=i.onFilesSuccessfullySelected,l=i.onFilesRejected,u=i.onClear,f=i.validators,g=function(b){s==null||s(b),f==null||f.forEach(function(E){E.onFilesSelected(b)})},h=function(b){a==null||a(b),f==null||f.forEach(function(E){E.onFilesSuccessfullySelected(b)})},C=function(b){l==null||l(b),f==null||f.forEach(function(E){E.onFilesRejected(b)})},S=function(){u==null||u(),f==null||f.forEach(function(b){b.onClear==null||b.onClear()})};return{onFilesSelected:g,onFilesSuccessfullySelected:h,onFilesRejected:C,onClear:S}};function Lt(t){var i=t.accept,s=i===void 0?"*":i,a=t.multiple,l=a===void 0?!0:a,u=t.readAs,f=u===void 0?"Text":u,g=t.readFilesContent,h=g===void 0?!0:g,C=t.validators,S=C===void 0?[]:C,y=t.initializeWithCustomParameters,b=W.useState([]),E=b[0],P=b[1],Y=W.useState([]),te=Y[0],q=Y[1],N=W.useState([]),se=N[0],R=N[1],le=W.useState(!1),ce=le[0],X=le[1],G=Ot(t),_=G.onFilesSelected,J=G.onFilesSuccessfullySelected,V=G.onFilesRejected,n=G.onClear,r=W.useCallback(function(){P([]),q([]),R([])},[]),o=W.useCallback(function(){r(),n==null||n()},[r,n]),d=function(v){return new Promise(function(){var F=me(H().mark(function j(k,L){var x,B,K;return H().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:x=new FileReader,B=x["readAs"+f],B.call(x,v),K=function(w){var A=ie({},(xt(w),w));L(ie({},A))},x.onload=me(H().mark(function fe(){return H().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",Promise.all(S.map(function(M){return M.validateAfterParsing(t,v,x).catch(function(De){return Promise.reject(K(De))})})).then(function(){return k(ie({},v,{content:x.result,name:v.name,lastModified:v.lastModified}))}).catch(function(){}));case 1:case"end":return A.stop()}},fe)})),x.onerror=function(){K({name:"FileReaderError",readerError:x.error,causedByFile:v})};case 6:case"end":return U.stop()}},j)}));return function(j,k){return F.apply(this,arguments)}}())},c=function(){var v=s instanceof Array?s.join(","):s;At(v,l,function(){var F=me(H().mark(function j(k){var L,x,B,K,z,U;return H().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return r(),L=k.target,x=L.files?Array.from(L.files):[],X(!0),w.next=6,Promise.all(S.map(function(A){return A.validateBeforeParsing(t,x).catch(function(M){return Array.isArray(M)?M:[M]})}));case 6:if(B=w.sent.flat(1).filter(Boolean),P(x),R(B),!B.length){w.next=15;break}return X(!1),P([]),V==null||V({errors:B}),_==null||_({errors:B}),w.abrupt("return");case 15:if(h){w.next=19;break}return X(!1),_==null||_({plainFiles:x,filesContent:[]}),w.abrupt("return");case 19:return w.next=21,bt(k);case 21:return K=w.sent,z=[],w.next=25,Promise.all(K.map(function(A){return d(A).catch(function(M){z.push.apply(z,Array.isArray(M)?M:[M])})}));case 25:if(U=w.sent,X(!1),!z.length){w.next=34;break}return P([]),q([]),R(function(A){return[].concat(A,z)}),V==null||V({errors:z}),_==null||_({errors:B.concat(z)}),w.abrupt("return");case 34:q(U),P(x),R([]),J==null||J({filesContent:U,plainFiles:x}),_==null||_({plainFiles:x,filesContent:U});case 39:case"end":return w.stop()}},j)}));return function(j){return F.apply(this,arguments)}}(),y)};return{openFilePicker:c,filesContent:te,errors:se,loading:ce,plainFiles:E,clear:o}}var Le=function(){function t(){this.invokerHookId=void 0}var i=t.prototype;return i.onFilesSelected=function(a){},i.onFilesSuccessfullySelected=function(a){},i.onFilesRejected=function(a){},i.onClear=function(){},i.onFileRemoved=function(a,l){},t}(),Dt=function(t){ke(i,t);function i(a){var l;return l=t.call(this)||this,l.limitAmountOfFilesConfig=void 0,l.limitAmountOfFilesConfig=a,l}var s=i.prototype;return s.validateBeforeParsing=function(l,u){var f=this.limitAmountOfFilesConfig,g=f.min,h=f.max;return h&&u.length>h?Promise.reject({name:"FileAmountLimitError",reason:"MAX_AMOUNT_OF_FILES_EXCEEDED"}):g&&u.length<g?Promise.reject({name:"FileAmountLimitError",reason:"MIN_AMOUNT_OF_FILES_NOT_REACHED"}):Promise.resolve()},s.validateAfterParsing=function(){return Promise.resolve()},i}(Le),It=function(t){ke(i,t);function i(a){var l;return l=t.call(this)||this,l.acceptedFileExtensions=void 0,l.acceptedFileExtensions=a,l}var s=i.prototype;return s.validateBeforeParsing=function(l,u){var f=this,g=u.reduce(function(h,C){var S=C.name.split(".").pop();return S?f.acceptedFileExtensions.includes(S)?h:[].concat(h,[{name:"FileTypeError",reason:"FILE_TYPE_NOT_ACCEPTED",causedByFile:C}]):[].concat(h,[{name:"FileTypeError",reason:"FILE_EXTENSION_NOT_FOUND",causedByFile:C}])},[]);return g.length>0?Promise.reject(g):Promise.resolve()},s.validateAfterParsing=function(l,u,f){return Promise.resolve()},i}(Le);const Tt=()=>{const t=Te($e.getUserName),[i,s]=W.useState(null),a=_e(),{openFilePicker:l}=Lt({readAs:"DataURL",accept:"image/*",multiple:!0,validators:[new Dt({max:1}),new It(["jpg"])],onFilesSuccessfullySelected:({filesContent:f})=>{const g=f[0].content;s(g),new FormData().append("avatar",g)}});W.useEffect(()=>{a(ge.updateUserAvatar(i))},[i,a]);const u=()=>{a(ge.logOut())};return e.jsxs(Ve,{children:[e.jsx(He,{children:e.jsxs(Ye,{children:[i?e.jsx(Xe,{src:i,alt:"Avatar"}):e.jsx(Q,{width:61,height:62,className:"user",children:e.jsx("use",{href:`${Z}#icon-user`})}),e.jsx("div",{children:e.jsx(Je,{onClick:()=>l(),children:e.jsx(Q,{width:24,height:24,className:"lightOrange mark",children:e.jsx("use",{href:`${Z}#icon-check_mark`})})})})]})}),e.jsxs(Ke,{children:[e.jsx(Qe,{children:t}),e.jsx(Ze,{children:"User"})]}),e.jsxs(et,{children:[e.jsxs(je,{children:[e.jsxs(we,{children:[e.jsx(Q,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${Z}#icon-fluent_food`})}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(be,{children:"0"})]}),e.jsxs(je,{children:[e.jsxs(we,{children:[" ",e.jsx(Q,{width:20,height:20,className:"orange",children:e.jsx("use",{href:`${Z}#icon-dumbbell`})}),e.jsx("p",{children:"Daily norm of sports"})]}),e.jsx(be,{children:"0 min"})]})]}),e.jsxs(tt,{children:[e.jsxs("div",{children:[" ",e.jsx(Q,{width:24,height:24,className:"orange",children:e.jsx("use",{href:`${Z}#icon-exclamation-mark`})})]}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs(rt,{type:"button",onClick:u,children:["Logout"," ",e.jsx(Q,{width:24,height:24,className:"stroke",children:e.jsx("use",{href:`${Z}#icon-logout`})})]})]})},Gt=()=>e.jsxs(gt,{children:[e.jsx(mt,{text:"Profile Settings"}),e.jsxs(vt,{children:[e.jsx(Tt,{}),e.jsx(pt,{})]})]});export{Gt as default};
