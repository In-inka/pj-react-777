import{d as i,r as c,v as x,u as o,j as s}from"./index-98b736a8.js";import{B as d,E as m}from"./CtegoryItem.style-f1ba6bc3.js";import{e as a}from"./exercisesSelectors-80adadd9.js";import{L as n}from"./Loading-e8a0e02b.js";import"./Hourglass-36113c38.js";const B=()=>{const e=i();c.useEffect(()=>{e(x.getExercisesByBodyParts())},[e]);const t=o(a.getIsLoading),r=o(a.getFilterBody);return s.jsxs(d,{children:[t&&s.jsx(n,{}),!t&&r&&s.jsx(m,{exercises:r[0]})]})};export{B as default};
