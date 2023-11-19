import styled from 'styled-components';
import { glodalColor } from '../../Styled/GlobalColor';

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1440px) {
    border-left: 1px solid ${glodalColor.bgCards};
    padding-left: 49px;
    padding-right: 0;
  }
`;

export const PositionCards = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 90px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
`;

export const Cards = styled.div`
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid ${glodalColor.acceptColor};
  border-radius: 50%;
  background-color: transparent;
  width: 90px;
  height: 90px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const Post = styled.label`
  position: absolute;

  bottom: -11px;

  width: 24px;
  height: 24px;
  padding: 0;

  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  input {
    display: none;
    visibility: hidden;
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    bottom: -14px;
  }
`;

export const UserName = styled.div`
  padding-top: 32px;

  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
  }
`;

export const Name = styled.h3`
  margin-bottom: 4px;

  font-size: 18px;
  line-height: 1.11;
  color: ${glodalColor.withe};

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 1.16;
  }
`;
export const User = styled.p`
  margin-bottom: 40px;

  font-size: 14px;
  line-height: 1.28;
  color: ${glodalColor.titleCards};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 14px;
    line-height: 1.28;
  }
`;

export const Info = styled.div`
  margin-bottom: 40px;
  display: flex;
  gap: 14px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    gap: 16px;
  }
`;

export const Statistic = styled.div`
  padding: 14px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid ${glodalColor.bgCards};
  background-color: ${glodalColor.acceptColor};
  font-size: 12px;
  line-height: 1.33;
  color: ${glodalColor.dashboardTextAccept};
  gap: 28px;

  @media screen and (min-width: 768px) {
    padding-right: 49px;
    &:first-of-type {
      padding-right: 67px;
    }
  }
`;

export const DataStatistic = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.11;
  color: ${glodalColor.withe};
  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.33;
  }
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
`;

export const Attention = styled.div`
  margin-bottom: 41px;
  max-width: 335px;

  display: flex;
  gap: 8px;

  font-size: 14px;
  line-height: 1.28;

  color: ${glodalColor.title};

  @media screen and (min-width: 768px) {
    margin: 0 auto 32px auto;
    max-width: 407px;

    font-size: 16px;
    line-height: 1.5;
  }
`;

export const LogoutButton = styled.button`
  color: ${glodalColor.withe};

  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    margin-bottom: 38px;

    max-width: 407px;

    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Icon = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  pointer-events: none;
  &.orange {
    fill: ${glodalColor.secondaryOrange};
    margin-right: 7px;
    position: static;
  }
  @media screen and (min-width: 768px) {
    &.user {
      width: 102px;
      height: 102px;
    }
  }
  @media screen and (min-width: 768px) {
    &.mark {
      width: 32px;
      height: 32px;
    }
  }
  &.stroke-white {
    top: 16px;
    stroke: ${glodalColor.withe};
    cursor: pointer;
  }

  &.stroke {
    stroke: ${glodalColor.secondaryOrange};
    position: static;
  }
`;

export const IconPost = styled.svg`
  fill: ${glodalColor.secondaryOrange};
`;
