import styled from 'styled-components';

export const ProductsFilterLabel = styled.label`
  position: relative;
`;

export const inputSearchStyles = styled.input`
  width: 320px;
  background-color: transparent;
  color: #efede8;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 14px;

  @media screen and (min-width: 375px) {
    box-sizing: border-box;
    width: 335px;
    height: 46px;
    padding: 14px;
    padding-right: 68px;
    background-color: transparent;
    color: #efede8;
    font-size: 14px;
    line-height: 18px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
  }

  @media screen and (min-width: 768px) {
    width: 236px;
  }

  @media screen and (min-width: 1440px) {
    width: 236px;
    height: 52px;
    font-size: 16px;
    line-height: 24px;
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
  top: calc(50% - 16px / 2);
  right: 14px;
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
`;

export const ProductsFilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (min-width: 375px) {
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const SelectWrapper = styled.div`
  @media screen and (min-width: 375px) {
    width: 158px;
  }

  @media screen and (min-width: 768px) {
    width: 173px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`;
