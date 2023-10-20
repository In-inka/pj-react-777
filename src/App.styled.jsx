import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 200px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 320px) {
    width: 320px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;
