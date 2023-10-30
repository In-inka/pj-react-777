import styled from 'styled-components';

export const NotResultWrapper = styled.div`
  @media screen and (min-width: 375px) {
    display: inline-block;
    margin-top: 24px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 92px;
  }
`;

export const NotResultText = styled.p`
  color: rgba(239, 237, 232, 0.3);
  @media screen and (min-width: 375px) {
    display: inline-block;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    font-style: normal;
    width: 335px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    width: 580px;
  }
`;

export const NotResultOrangeText = styled.span`
  color: #e6533c;
  @media screen and (min-width: 375px) {
    display: inline-block;
    font-size: 14px;
    line-height: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const NotResultOrangeTextBlock = styled.p`
  color: #e6533c;
  @media screen and (min-width: 375px) {
    display: inline-block;
    font-size: 14px;
    line-height: 18px;
  }

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 16px;
    line-height: 24px;
  }
`;
