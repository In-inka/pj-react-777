import styled from 'styled-components';
import { ContainerStyled } from '../../Styled/ContainerStyled';

export const Container = styled.nav`
  ${ContainerStyled}
  margin: 25px;
  font-weight: 700;
  display: flex;
  gap: 15px;

  font-size: 25px;
    @media screen and (min-width: 1440px) {
    position: absolute;
    }
`;
