import{c as a,a as e,b as r,d as n}from"./Button-1c92241e.js";import{s as d,j as o}from"./index-cce0d50d.js";import{P as m}from"./Hourglass-2532ec79.js";const s=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,i="Please enter a valid email",p=a().shape({name:e().required("Error name"),email:e().matches(s,{message:i}).email(i).required("Error email"),password:e().min(6).required("Error password")}),q=a().shape({email:e().matches(s,{message:i}).email(i).required("Error email"),password:e().min(6).required("Error password")});a().shape({name:e().min(2,"Too Short!").max(50,"Too Long!").required("Required"),height:r().min(150,"Too Short!").required("Required"),currentWeight:r().min(35,"Too little weight").required("Required"),desiredWeight:r().min(35,"Too little weight").required("Required"),birthday:n().max(new Date(Date.now()-18*365*24*60*60*1e3)).required(),blood:r().oneOf([1,2,3,4]).required("Required"),sex:e().oneOf(["male","female"]).required("Required"),levelActivity:r().oneOf([1,2,3,4,5]).required("Required")});const l=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: none;
  &.yellowBtn {
    background-color: #e6533c;
    height: 43px;
    width: 130px;
    @media screen and (min-width: 768px) {
      height: 56px;
      width: 183px;
    }
  }
`;function g({cls:t}){return o.jsx(l,{className:t,children:o.jsx(m,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"100%",visible:!0,borderColor:"#E6533C",barColor:"#EFEDE8"})})}export{g as L,q as a,p as s};
