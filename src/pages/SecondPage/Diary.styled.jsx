import styled from '@emotion/styled';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { glodalColor } from '../../Styled/GlobalColor';

export const Container = styled.div`
  ${ContainerStyled}
  margin-top: 61px;
  padding-top: 40px;
  padding-bottom: 80px;

  /* background-color: #482c01; */

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const PageTitleText = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.17;
  color: ${glodalColor.withe};

  /* @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 1.38;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  } */
`;

export const WrapTitle = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 40px;
`;

export const InfoText = styled.p`
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 14px;
  font-style: normal ;
  line-height: 18px;
  color: ${glodalColor.title};
`;