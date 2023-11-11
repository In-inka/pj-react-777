import{s as n,g as d,j as i}from"./index-5ad4c2f9.js";import{s as p}from"./sprite-ca60d0ce.js";const T=e=>e.statistics.data,a=n.div`
  display: flex;
  padding-left: 101px;
  align-items: center;
  padding-top: 232px;
  @media screen and (min-width: 768px) {
    padding-top: 171px;
    justify-content: left;
    padding-left: 299px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0px;
    position: absolute;
    left: 770px;
    top: 184px;
  }
  &.sign-in {
    padding-top: 117px;
    @media screen and (min-width: 768px) {
      padding-top: 135px;
    }
    @media screen and (min-width: 1440px) {
      padding: 0px;
    }
  }
  &.sign-up {
    padding-top: 35px;
    @media screen and (min-width: 768px) {
      padding-top: 39px;
    }
    @media screen and (min-width: 1440px) {
      padding: 0px;
    }
  }
`,s=n.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 14px 18px;
  background-color: #303030;
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    padding: 20px 38px 20px 23px;
  }
`,o=n.div``,x=n.p`
  font-size: 16px;
  line-height: 1.13;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`,r=n.p`
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.65);
  @media screen and (min-width: 768px) {
    margin-top: 8px;
    font-size: 16px;
    line-height: 1.5;
  }
`,l=n.svg`
  fill: ${d.withe};
  padding-left: 3px;
  width: 12px;
  height: 12px;
  @media screen and (min-width: 768px) {
    &.setPlay {
      padding-left: 5px;
      width: 20px;
      height: 20px;
    }
  }
`,c=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: #ef8964;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
`,z=({cls:e,video:t})=>i.jsx(a,{className:e,children:i.jsxs(s,{children:[i.jsx(c,{children:i.jsx(l,{className:"setPlay",children:i.jsx("use",{href:`${p}#icon-Polygon`})})}),i.jsxs(o,{children:[i.jsx(x,{children:t||"350+"}),i.jsx(r,{children:"Video tutorial"})]})]})}),h=n.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding-top: 70px;
  @media screen and (min-width: 768px) {
    padding-top: 56px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 0px;
    position: absolute;
    top: 319px;
    left: 1228px;
  }
`,g=n.div`
  display: flex;
  flex-direction: column;
  padding: 14px 18px;
  background-color: ${d.secondaryOrange};
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    padding: 14px 20px;
  }
`,m=n.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`,f=n.p`
  font-size: 24px;
  line-height: 1;
  font-weight: 700;
  color: ${d.withe};
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    margin-right: 11px;
    font-size: 48px;
    line-height: 1.04;
  }
`,w=n.span`
  font-size: 20px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.33;
  }
`,u=n.p`
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.65);
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,j=n.svg`
  fill: ${d.withe};
  width: 12px;
  height: 12px;
  @media screen and (min-width: 768px) {
    &.setRun {
      padding-left: 2px;
      width: 16px;
      height: 16px;
    }
  }
`,y=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: #efa082;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-bottom: 12px;
  }
`,v=({val1:e,val2:t})=>i.jsx(h,{children:i.jsxs(g,{children:[i.jsx(y,{children:i.jsx(j,{className:"setRun",children:i.jsx("use",{href:`${p}#icon-running`})})}),i.jsxs(m,{children:[i.jsx(f,{children:e?i.jsxs(i.Fragment,{children:[e,i.jsx(w,{children:t})]}):"500"}),i.jsx(u,{children:"cal"})]})]})});export{v as C,z as V,T as g};
