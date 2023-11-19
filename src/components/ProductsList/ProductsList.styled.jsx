import styled from '@emotion/styled';

export const ProductsContainer = styled.div`
  &::-webkit-scrollbar {
    width: 8px;
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ef8964;
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px 16px;
    height: 636px;
    overflow-y: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
    height: 493px;
  }
`;