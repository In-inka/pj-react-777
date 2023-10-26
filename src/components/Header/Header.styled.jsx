import styled from 'styled-components';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { Link, NavLink } from 'react-router-dom';


export const Container = styled.nav`
  ${ContainerStyled}
  display: flex;
  position: absolute;
  z-index: 999;
  align-items: center;
  top: 0;
  left: 50%;
  transform: translate(-50%, -0%);
  background-color: transparent;
    border-bottom: ${(props) => props.theme.border};
`;

Container.defaultProps = {
  theme: {
    border: "none",
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
  
  export const LogoContainer = styled(NavLink)`
    display: flex;
    align-items: center;
    padding-top: 24px;
    padding-bottom: 24px;
    @media screen and (min-width: 768px) {
      padding-top: 34px;
      padding-bottom: 33px;
    }
  `;

export const BarbellIcon = styled.div`
  width: 36px;
  height: 13px;
  background-color: #e6533c;
  margin-right: 8px;
`;

export const LogoText = styled.p`
  font-size: 12px;
  line-height: 1;
  font-weight: bold;
  color: #efede8;
`;

export const FlexContainerB = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: end;
`;

export const SettingsIcon = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid rgba(239, 237, 232, 0.3);
  border-radius: 50%;
  @media screen and (min-width: 1440px) {
    width: 28px;
    height: 28px;
    margin-left: 32px;
  }
`;

export const SettingsIconContainer = styled(NavLink)`

`;

export const UserIcon = styled.div`
  margin-left: 14px;
  width: 37px;
  height: 37px;
  border: 3px solid #e6533c;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    margin-left: 16px;
    width: 46px;
    height: 46px;
  }
`;

export const MenuIcon = styled.button`
  margin-left: 14px;
  width: 24px;
  height: 24px;
  border: 3px solid #e6533c;
  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
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
    color: #efede8;
    font-size: 16px;
    line-height: 1.5;
    display: block;
    background-color: transparent;
    padding-right: 28px;
`;

export const LogoutIcon = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-0%, -50%);
  width: 20px;
  height: 20px;
  background-color: #e6533c;
  pointer-events: none;
`;

export const Button = styled(Link)`
  display: none;
  @media screen and (min-width: 1440px) {
    display: inline-block;
    font-size: 16px;
    line-height: 1.5;
    background-color: inherit;
    color: #efede8;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    padding: 10px 27px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      border-color: rgba(230, 83, 60, 1);
    }
    &:disabled {
      border-color: rgba(230, 83, 60, 1);
    }
    &:not(:first-of-type) {
      margin-left: 16px;
    }
  }
`;

export const ButtonActive = styled(Link)`
  display: none;
  @media screen and (min-width: 1440px) {
    margin-left: 16px;
    display: inline-block;
    margin-right: 14px;
    background-color: #e6533c;
    color: #efede8;
    border-radius: 12px;
    border: none;
    padding: 10px 27px;
    font-size: 16px;
    line-height: 1.5;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      background-color: #ef8964;
    }
    &:disabled {
      background-color: #e6533c;
      color: #efede899;
    }
  }
`;