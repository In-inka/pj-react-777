import styled from 'styled-components';
import { glodalColor } from '../../Styled/GlobalColor';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 4, 0.4);
  z-index: 10;
`;

export const ModalContainer = styled.div`
  position: relative;
  overflow-y: scroll;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px 24px;
  gap: 40px;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(16, 16, 15, 1);
  z-index: 11;
  @media screen and (min-width: 768px) {
    padding: 48px 32px;
    flex-direction: row;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
`;

export const ButtonClose = styled.button`
  border: none;
  z-index: 20;
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: rgba(0, 0, 0, 0);
  @media screen and (min-width: 768px) {
    top: 16px;
    right: 16px;
  }
`;

export const IconClose = styled.svg`
pointer-events: none;
  display: block;
  width: 22px;
  height: 22px;
  stroke: ${glodalColor.withe};
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;

export const Input = styled.input`
  outline: 0;
  outline-offset: 0;
  color: #efede8;
  width: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.main};
  border-radius: 12px;
  padding: 13px;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 1.29;
  &:not(:first-of-type) {
    margin-top: 18px;
  }
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    &:not(:first-of-type) {
      margin-top: 20px;
    }
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 16px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

Input.defaultProps = {
  theme: {
    main: 'rgba(239, 237, 232, 0.3)',
  },
};

export const ButtonContainer = styled.div`
  display: inline-block;
  margin-right: 14px;
  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`;



export const TextSecondary = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

export const Text = styled.span`
  color: rgba(239, 237, 232);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
`;

export const FirstInput = styled.label`
  @media screen and (min-width: 768px) {
    width: 244px;
  }
`;
export const SecondInput = styled.label`
  @media screen and (min-width: 768px) {
    width: 155px;
  }
`;

export const Span = styled.span`
  color: #e6533c;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
`;
