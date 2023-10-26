import styled from 'styled-components';
import { glodalColor } from '../../Styled/GlobalColor';

export const Title = styled.h2`
  margin-bottom: 40px;

  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;

  color: ${glodalColor.withe};
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    font-size: 32px;
    line-height: 1.37;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;
