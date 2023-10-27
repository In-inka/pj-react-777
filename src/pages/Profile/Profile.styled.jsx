import styled from 'styled-components';
import { ContainerStyled } from '../../Styled/ContainerStyled';

export const ContainerProfilePage = styled.div`
  ${ContainerStyled};
  padding-top: 101px;
  padding-bottom: 66px;
  @media (min-width: 768px) {
    padding-top: 156px;
    padding-bottom: 54px;
  }
  @media (min-width: 1440px) {
    padding-top: 156px;
    padding-bottom: 54px;
  }
`;

export const FlexContainer = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 26px;
  }
`;
