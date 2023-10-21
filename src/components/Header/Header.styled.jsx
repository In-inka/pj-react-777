import styled from 'styled-components';
import { SharedContainerStyle } from '../../sharedStyles/sharedStyles';

export const Container = styled.nav`
  ${SharedContainerStyle}
  margin: 25px;

  display: flex;
  gap: 15px;

  font-size: 25px;
    @media screen and (min-width: 1440px) {
    position: absolute;
    }
`;
