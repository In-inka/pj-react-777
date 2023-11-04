import { Link } from "react-router-dom";
import styled from "styled-components";
import { glodalColor } from "../../../Styled/GlobalColor";

const ButtonLinkStyled = styled(Link)`
  display: inline-block;
  margin-right: 14px;
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
`;

export const ButtonLink = ({ text, cls, path }) => {
    return <ButtonLinkStyled className={cls} to={path}>
        {text }
    </ButtonLinkStyled>
}