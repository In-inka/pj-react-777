import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const translateIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const translateOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const MobileMenuContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgba(4, 4, 4, 0.4);
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: #e6533c;
  overflow-y: auto;

  animation: ${translateIn} 0.3s ease-in-out forwards;

  &.is-closed {
    animation: ${translateOut} 0.3s ease-in-out forwards;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
    padding: 32px;
  }
`;

export const MobileMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 10px 27px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  color: #efede8;
  font-size: 14px;
  line-height: 1.3;

  &:hover {
    border: 1px solid #efede8;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const MobileLogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  color: #efede8;
  font-size: 14px;
  line-height: 1.3;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const CrossButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: end;
`;

export const IconCross = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #efede8;
  fill: transparent;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const IconLogout = styled.svg`
  width: 20px;
  height: 20px;
  stroke: #efede8;
  fill: transparent;
`;
