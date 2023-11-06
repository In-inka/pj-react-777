import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { glodalColor } from "../../../Styled/GlobalColor";

const ButtonLinkStyled = styled(NavLink)`
  display: inline-block;
  font-size: 16px;
  line-height: 1.17;
  background-color: ${glodalColor.acceptColor};
  color: #efede8;
  border-radius: 12px;
  border: none;
  padding: 12px 40px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${glodalColor.secondaryOrange};
  }
  &:disabled {
    background-color: ${glodalColor.acceptColor};
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
      border-color: ${glodalColor.acceptColor};
    }
    &:disabled {
      border-color: ${glodalColor.acceptColor};
    }
  }
  &.error-page {
    margin-top: 28px;
    border: 1px solid ${glodalColor.withe};
    line-height: 1.125;
    color: ${glodalColor.withe};
  }
  &.header {
    display: none;
    @media screen and (min-width: 1440px) {
      display: inline-block;
      line-height: 1.5;
      background-color: inherit;
      color: ${glodalColor.withe};
      border: 1px solid ${glodalColor.title};
      padding: 10px 27px;
      transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
      &:hover,
      &:focus {
        border-color: ${glodalColor.acceptColor};
      }
      &:disabled {
        border-color: ${glodalColor.acceptColor};
      }
      &:not(:first-of-type) {
        margin-left: 16px;
      }
      &.active {
        background-color: ${glodalColor.acceptColor};
        border: none;
        pointer-events: none;
      }
    }
  }
`;

export const ButtonLink = ({ text, cls, path }) => {
    return <ButtonLinkStyled className={cls} to={path}>
        {text }
    </ButtonLinkStyled>
}