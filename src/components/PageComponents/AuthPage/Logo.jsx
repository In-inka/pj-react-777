import styled from "styled-components";
import { glodalColor } from "../../../Styled/GlobalColor";
import { NavLink, useLocation } from "react-router-dom";
import sprite from '../../../sprite/sprite.svg';

const LogoContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  @media screen and (min-width: 768px) {
    padding-top: 34px;
    padding-bottom: 33px;
  }
`;

const LogoIcon = styled.svg`
    fill: ${(props) => props.theme.main};
    @media screen and (min-width: 768px) {
        &.logo-icon {
        width: 44px;
        height: 17px;
    }
  }
  `

const LogoText = styled.svg`
    fill: ${glodalColor.withe};
    @media screen and (min-width: 768px) {
    &.logo-text {
      width: 100px;
      height: 15px;
}}
`;

LogoIcon.defaultProps = {
  theme: {
    main: ``,
  },
};

export const LogoComponent = () => {
    const location = useLocation();
    const errorPage = location.key === 'default';

    return (
      <LogoContainer to="/">
        <LogoIcon
          className="logo-icon"
          width={36}
          height={13}
          theme={
            errorPage
              ? { main: `${glodalColor.withe}` }
              : { main: `${glodalColor.acceptColor}` }
          }
        >
          <use href={`${sprite}#icon-dumbbell-logo`}></use>
        </LogoIcon>
        <LogoText className="logo-text" width={82} height={12}>
          <use href={`${sprite}#icon-logoText`}></use>
        </LogoText>
      </LogoContainer>
    );
}