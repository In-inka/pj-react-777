import{d as i,r as c,l as x,u as s,j as e}from"./index-41e0d81c.js";import{e as t,L as n}from"./Loading-27da7d84.js";import{B as p,E as m}from"./CtegoryItem.style-5588abbf.js";import"./Hourglass-c2468abc.js";const f=()=>{const r=i();c.useEffect(()=>{r(x.getExercisesByEquipment())},[r]);const a=s(t.getExercisesData),o=s(t.getIsLoading);return s(t.getIsError),e.jsxs(p,{children:[o&&e.jsx(n,{}),!o&&a&&e.jsx(m,{exercises:a})]})};export{f as default};