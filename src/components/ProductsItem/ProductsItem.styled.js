import styled from '@emotion/styled';
import { glodalColor } from '../../Styled/GlobalColor';

export const ProductsItemContainer = styled.div`
  padding: 16px 16px 16px 16px;
  width: 405px;
  border-radius: 12px;
  border: 1px solid ${glodalColor.bgCards};
  background: rgba(239, 237, 232, 0.05);
`;

export const ProductsItemTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
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

export const ProductsItemFunctional = styled.div`
  margin-bottom: 27px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  line-height: normal;
  text-transform: uppercase;
`;

export const ProductsItemRecommendedContainer = styled.div`
  margin-right: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const CircleRec = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: #419b09;
`;

export const RecommendedText = styled.p`
  color: #efede8;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const AddButton = styled.button`
  background-color: transparent;
  border: none;
  color: #e6533c;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;
