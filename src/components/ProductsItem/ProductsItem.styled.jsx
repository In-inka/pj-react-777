import styled from '@emotion/styled';
import { glodalColor } from '../../Styled/GlobalColor';

export const ProductsItemContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${glodalColor.bgCards};
  background: rgba(239, 237, 232, 0.05);
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 335px;
    height: 135px;
  }
  @media screen and (min-width: 1440px) {
    width: 405px;
    height: 143px;
  }
`;

export const ProductsItemTitle = styled.h3`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 1.33;
  }
`;

export const ProductsItemInfoContainer = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const ProductsItemInfo = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-transform: capitalize;
`;

export const ProductsItemFunctional = styled.li`
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-bottom: 27px;
  }
`;

export const ProductsItemDiet = styled.div`
  padding: 5px 7.5px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
`;

export const ProductsItemDietPar = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

export const ProductsItemRecommendedContainer = styled.div`
margin-left: auto;
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
`;

export const RecommendedText = styled.p`
margin-left: 8px;
  color: #efede8;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
  color: #e6533c;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const SpanGrey = styled.span`
  color: rgba(239, 237, 232, 0.4);
`;

export const IconRunning = styled.svg`
  fill: rgba(239, 237, 232, 1);
  border-radius: 50px;
  background-color: rgba(239, 160, 130, 1);
  padding: 3px 4px;
`;
