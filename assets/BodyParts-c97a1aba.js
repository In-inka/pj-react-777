import{d as i,r as c,l as x,u as s,j as e}from"./index-41e0d81c.js";import{B as n,E as d}from"./CtegoryItem.style-5588abbf.js";import{e as t,L as p}from"./Loading-27da7d84.js";import"./Hourglass-c2468abc.js";const f=()=>{const r=i();c.useEffect(()=>{r(x.getExercisesByBodyParts())},[r]);const a=s(t.getIsLoading),o=s(t.getExercisesData);return s(t.getIsError),e.jsxs(n,{children:[a&&e.jsx(p,{}),!a&&o&&e.jsx(d,{exercises:o})]})};export{f as default};