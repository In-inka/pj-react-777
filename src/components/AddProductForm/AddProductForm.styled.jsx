import styled from 'styled-components';
import { glodalColor } from '../../Styled/GlobalColor';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  /* position: absolute; */
  width: 100%;
  height: 100%;
  background-color: rgba(4, 4, 4, 0.4);
  z-index: 10;
`;

export const ModalContainer = styled.div`
  position: absolute;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px 32px;
  gap: 40px;
  width: 95%;
  height: 95%;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(16, 16, 15, 1);
  z-index: 11;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 479px;
    height: 286px;
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
  top: 16px;
  right: 16px;
  background-color: rgba(0, 0, 0, 0);
`;

export const IconClose = styled.svg`
  display: block;
  width: 13px;
  height: 13px;
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

Input.defaultProps = {
  theme: {
    main: 'rgba(239, 237, 232, 0.3)',
  },
};

export const ButtonAddDiary = styled.button`
  /* position: absolute; */
  margin-right: 14px;
  padding: 14px 32px 14px 32px;
  border-radius: 12px;
  border: none;
  outline: none;
  color: ${glodalColor.withe};
  background-color: ${glodalColor.acceptColor};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    /* position: absolute; */
    bottom: 48px;
    right: 32px;
  }

  &:hover,
  &:focus {
    background-color: ${glodalColor.secondaryOrange};
  }
  &:disabled {
    background-color: #e6533c;
    color: #efede899;
  }
`;

export const ButtonCancel = styled.button`
  padding: 14px 32px 14px 32px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  outline: none;
  color: ${glodalColor.withe};
  background-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    /* position: absolute; */
    bottom: 48px;
    right: 32px;
  }

  &:hover,
  &:focus {
    background-color: ${glodalColor.secondaryOrange};
  }
  &:disabled {
    background-color: #e6533c;
    color: #efede899;
  }
`;

export const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  width: 335px;
  height: 362px;
  padding: 14px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #10100f;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    width: 430px;
    height: 428px;
    padding: 16px 16px;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    margin-top: 22px;
  }
`;

export const Image = styled.img`
  width: 123px;
  height: 84px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    height: 97px;
    margin-top: 32px;
  }
`;

export const Title = styled.p`
  color: #efede8;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 24px;
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

export const Button = styled.button`
  border-radius: 12px;
  background: #e6533c;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  color: #efede8;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    padding: 16px 32px;
  }
  &:hover,
  &:focus {
    background-color: #ef8964;
    color: #efede8;
  }
`;

export const ArrowIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(239, 237, 232, 0.3);
`;
