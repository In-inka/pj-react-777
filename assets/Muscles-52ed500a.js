import{d as i,r as c,q as x,u as s,j as e}from"./index-b5cd67ef.js";import{B as m,E as n}from"./CtegoryItem.style-a6bdb9f7.js";import{e as t}from"./exercisesSelectors-80adadd9.js";import{L as p}from"./Loading-26e552fc.js";import"./Hourglass-3c8ecb78.js";const E=()=>{const r=i();c.useEffect(()=>{r(x.getExercisesByMuscles())},[r]);const o=s(t.getFilterMuscles),a=s(t.getIsLoading);return s(t.getIsError),e.jsxs(m,{children:[a&&e.jsx(p,{}),!a&&o&&e.jsx(n,{exercises:o[0]})]})};export{E as default};