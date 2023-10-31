import styled from 'styled-components';
import { glodalColor } from '../../Styled/GlobalColor';

export const Modal = styled.div`
  &.modal-backdrop {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #04040466;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
`;

export const Content = styled.div`
  background-color: ${glodalColor.bgCards};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 48px 32px;
  z-index: 1001;
  border: 1px solid #efede833;
  width: 479px;
  height: 286px;
`;

export const Close = styled.span`
  position: absolute;
  top: 10px;
  right: 16px;
  cursor: pointer;
  font-size: 26px;
`;