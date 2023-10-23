import styled from '@emotion/styled';

export const ProductsContainer = styled.div`
  width: 850px;
  height: 491px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  gap: 32px 16px;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: rgba(239, 237, 232, 0.10);
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: #EF8964;
    border-radius: 12px;
  }
`;
