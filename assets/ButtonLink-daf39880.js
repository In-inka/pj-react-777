import{s as c,g as o,j as n,N as l}from"./index-6341e263.js";const t=c(l)`
  display: inline-block;
  font-size: 16px;
  line-height: 1.17;
  background-color: ${o.acceptColor};
  color: #efede8;
  border-radius: 12px;
  border: none;
  padding: 12px 40px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${o.secondaryOrange};
  }
  &:disabled {
    background-color: ${o.acceptColor};
    color: #efede899;
  }
  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
  &.welcome {
    margin-right: 14px;
  }
  //--black style
  &.black {
    background-color: inherit;
    border: 1px solid rgba(239, 237, 232, 0.3);
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      border-color: ${o.acceptColor};
    }
    &:disabled {
      border-color: ${o.acceptColor};
    }
  }
  &.error-page {
    margin-top: 28px;
    border: 1px solid ${o.withe};
    line-height: 1.125;
    color: ${o.withe};
  }
  &.header {
    display: none;
    @media screen and (min-width: 1440px) {
      display: inline-block;
      line-height: 1.5;
      background-color: inherit;
      color: ${o.withe};
      border: 1px solid ${o.title};
      padding: 10px 27px;
      transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      &:hover,
      &:focus {
        border-color: ${o.acceptColor};
      }
      &:disabled {
        border-color: ${o.acceptColor};
      }
      &:not(:first-of-type) {
        margin-left: 16px;
      }
      &.active {
        background-color: ${o.acceptColor};
        border: none;
        pointer-events: none;
      }
    }
  }
`,d=({text:r,cls:e,path:i})=>n.jsx(t,{className:e,to:i,children:r});export{d as B};
