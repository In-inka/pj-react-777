import styled from 'styled-components';
import { glodalColor } from '../../Styled/GlobalColor';

export const ContainerCards = styled.div`
  $ContainerStyled
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
   @media screen and (min-width: 1440px) {
    border-left: 1px solid ${glodalColor.bgCards};
    padding-left:49px;
  }

`;

export const PositionCards = styled.div`
  margin: 0 auto;

  position: relative;

  width: 90px;
  height: 90px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const IconUser = styled.img`
  max-width: 100%;
  width: 90px;
  height: 90px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const Cards = styled.div`
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${glodalColor.acceptColor};
  border-radius: 50%;
  background-color: transparent;
`;

export const Post = styled.button`
  position: absolute;
  bottom: -12px;
  left: 34px;

  @media screen and (min-width: 768px) {
    bottom: -18px;
    left: 60px;
  }

  background-color: transparent;
  border: none;
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

  font-size: 18px;
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
  width: 168px;
  min-height: 96px;
  padding: 14px;

  display: flex;
  flex-direction: column;
  gap: 28px;

  border-radius: 12px;
  border: 1px solid ${glodalColor.bgCards};

  background-color: ${glodalColor.acceptColor};
  font-size: 12px;
  line-height: 1.33;
  color: ${glodalColor.dashboardTextAccept};

  @media screen and (min-width: 768px) {
    width: 214px;
    min-height: 108px;
    padding: 14px 18px;
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
  display: flex;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 8px;
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
  margin-bottom: 18px;
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 8px;

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
  &.orange {
    fill: ${glodalColor.secondaryOrange};
  }
  @media screen and (min-width: 768px) {
    &.user {
      width: 32px;
      height: 32px;
    }
  }

  &.lightOrange {
    fill: ${glodalColor.secondaryOrange};
  }
  &.stroke {
    stroke: ${glodalColor.secondaryOrange};
  }
`;
