import styled from 'styled-components';
import { glodalColor } from '../../Styled/GlobalColor';

const Btn = styled.button`
  font-size: 16px;
  line-height: 1.17;
  background-color: #e6533c;
  color: #efede8;
  border-radius: 12px;
  border: none;
  padding: 12px 40px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #ef8964;
  }
  &:disabled {
    background-color: #e6533c;
    color: #efede899;
  }
  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
  &.addDiary {
    padding: 14px 32px;
  }
  &.buttonCancel {
    padding: 12px 36px;
    line-height: 1.125;
    border: 1px solid rgba(239, 237, 232, 0.2);
    outline: none;
    color: ${glodalColor.withe};
    background-color: transparent;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    @media screen and (min-width: 768px) {
      padding: 14px 40px;
      font-size: 20px;
      line-height: 1.2;
    }
    &:hover,
    &:focus {
      background-color: ${glodalColor.secondaryOrange};
    }
    &:disabled {
      background-color: #e6533c;
      color: #efede899;
    }
  }
`;

export const Button = ({ text, tp, cls, onClick }) => {
  return (
    <Btn type={tp} className={cls} onClick={onClick}>
      {text}
    </Btn>
  );
};
