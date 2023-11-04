import styled from 'styled-components';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { Link, NavLink } from 'react-router-dom';
import { glodalColor } from '../../Styled/GlobalColor';

export const Container = styled.nav`
  ${ContainerStyled}
  display: flex;
  position: absolute;
  z-index: 10;
  align-items: center;
  top: 0;
  left: 50%;
  transform: translate(-50%, -0%);
  background-color: transparent;
  border-bottom: ${(props) => props.theme.border};
`;

Container.defaultProps = {
  theme: {
    border: 'none',
  },
};

export const PrivetRotesContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (min-width: 1440px) {
    margin-left: auto;
  }
`;

export const FlexContainerB = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: end;
`;

export const SettingsIcon = styled.svg`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 1440px) {
    &.set {
      width: 28px;
      height: 28px;
      margin-left: 32px;
    }
  }
`;

export const SettingsIconContainer = styled(NavLink)``;

export const UserAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
  width: 37px;
  height: 37px;
  border: 2px solid ${glodalColor.acceptColor};
  border-radius: 50%;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    margin-left: 16px;
    width: 46px;
    height: 46px;
  }
`;

export const UserIcon = styled.svg`
  width: 21px;
  height: 21px;
  @media screen and (min-width: 768px) {
    &.setUser {
      width: 24px;
      height: 24px;
    }
  }
`;

export const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
`;

export const MenuIconButton = styled.button`
  background-color: ${glodalColor.background};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const MenuIcon = styled.svg`
  fill: ${glodalColor.acceptColor};
  background-color: ${glodalColor.background};
  stroke-width: 2px;
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    &.setMenu {
      width: 32px;
      height: 32px;
    }
  }
`;

export const LogoutContainer = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
    display: block;
    position: relative;
  }
`;

export const LogoutButton = styled.button`
  border: none;
  color: ${glodalColor.withe};
  font-size: 16px;
  line-height: 1.5;
  display: block;
  background-color: transparent;
  padding-right: 28px;
`;

export const LogoutIcon = styled.svg`
  position: absolute;
  right: 0;
  top: 50%;
  width: 20px;
  height: 20px;
  transform: translate(-0%, -50%);
  pointer-events: none;
  stroke: ${glodalColor.acceptColor};
`;


export const ButtonActive = styled(Link)`
  display: none;
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
    display: inline-block;
    margin-right: 14px;
    background-color: ${glodalColor.acceptColor};
    color: ${glodalColor.withe};
    border-radius: 12px;
    border: none;
    padding: 10px 27px;
    font-size: 16px;
    line-height: 1.5;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      background-color: ${glodalColor.secondaryOrange};
    }
    &:disabled {
      background-color: ${glodalColor.acceptColor};
      color: #efede899;
    }
  }
`;
