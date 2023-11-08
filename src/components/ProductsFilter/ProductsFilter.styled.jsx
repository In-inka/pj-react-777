import styled from 'styled-components';

export const ProductsFilterLabel = styled.label`
display: block;
  position: relative;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 16px;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 14px;
  padding-right: 68px;
  background-color: transparent;
  color: #efede8;
  font-size: 14px;
  line-height: 18px;
  border-radius: 12px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  @media screen and (min-width: 768px) {
    width: 236px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 1.5;
  }

  &:hover,
  &:focus {
    outline: none;
    border-color: #e6533c;
  }

  &::placeholder {
    color: #efede8;
  }
`;

export const FlexContainer = styled.div`
display:flex;
gap: 16px;`

export const ProductsBtnClose = styled.button`
  background: transparent;
  position: absolute;
  top: calc(50% - 16px / 2);
  right: 40px;
  border: none;
`;

export const ProductsBtnSearch = styled.button`
  background: transparent;
  position: absolute;
  top: 17px;
  right: 17px;  
  border: none;
`;

export const ProductsSvgClose = styled.svg`
  stroke: #e6533c;
  width: 18px;
  height: 18px;
`;

export const ProductsSvgSearch = styled.svg`
  stroke: #efede8;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 17px;
  right: 17px;
`;

export const ProductsFilterList = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const SelectWrapper = styled.div`
    width: 158px;

  @media screen and (min-width: 768px) {
    width: 192px;
  }
  &:last-of-type{
    width: 173px;

  @media screen and (min-width: 768px) {
    width: 204px;
  }
  }
`;
