import styled from 'styled-components';
import { ContainerStyled } from '../../Styled/ContainerStyled';

export const Container = styled.nav`
  ${ContainerStyled}
  display: flex;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -0%);
  background-color: transparent;
`;
