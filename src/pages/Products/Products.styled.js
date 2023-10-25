import styled from '@emotion/styled';
import { ContainerStyled } from '../../Styled/ContainerStyled';
import { glodalColor } from '../../Styled/GlobalColor';
import products_background_desktop from '../../img/background/products/products_background_desktop.jpg';
import products_background_desktop_x2 from '../../img/background/products/products_background_desktop.jpg';

export const Container = styled.div`
  ${ContainerStyled}
  margin-top: 61px;
  padding-top: 40px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 84px;
    padding-top: 72px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 81px;
    padding-top: 42px;
    padding-bottom: 81px;
    background-repeat: no-repeat;
    background-position: top right;
    height: 807px;
    background-image: url(${products_background_desktop});
  }

  @media screen and (min-width: 1440px) and (min-device-pixel-ratio: 2),
    screen and (min-width: 1440px) and (min-resolution: 192dpi),
    screen and (min-width: 1440px) and (min-resolution: 2dppx) {
    background-image: url(${products_background_desktop_x2});
  }
`;

export const ProductsTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.17;
  color: ${glodalColor.withe};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 1.38;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;

export const ProductsFunc = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 28px;
    justify-content: space-between;
    display: flex;
    align-items: center;
  }
`;

export const ProductsFilterText = styled.span`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    margin-bottom: 8px;
    color: rgba(239, 237, 232, 0.5);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
    text-align: end;
  }
`;
