import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { glodalColor } from "../../Styled/GlobalColor";


export const BoxLinksCategories = styled.div`
    display: flex;
    gap: 28px;
    @media screen and (min-width: 768px){
        gap: 32px;
    }
`





export const Links = styled(NavLink)`
  position: relative;

  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0em;

  color: rgba(239, 237, 232, 0.4);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: -4px;
    content: ' ';
    background-color: ${glodalColor.secondaryOrange};
    border-radius: 2px;
    transform: scaleX(0);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active {
    color: rgba(239, 237, 232, 1);
    &::before {
      position: absolute;
      width: 100%;
      height: 4px;
      bottom: -4px;
      content: ' ';
      background-color: ${glodalColor.secondaryOrange};
      border-radius: 2px;
      transform: scaleX(1);
    }
  }
  &:focus::before,
  :hover::before {
    transform: scaleX(1);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

