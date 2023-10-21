import styled from '@emotion/styled';

export const Form = styled.form`
  margin-top: 28px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    width: 364px;
  }
`;

export const Input = styled.input`
  outline: 0;
  outline-offset: 0;
  color: #efede8;
  width: 100%;
  background-color: inherit;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px;
  font-size: 14px;
  line-height: 1.29;
  &:not(:first-of-type) {
    margin-top: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    &:not(:first-of-type) {
      margin-top: 20px;
    }
  }
`;

export const Label = styled.label`
  margin: -1px;
  padding: 0;
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
`;

export const ButtonContainer = styled.div``;

export const Button = styled.button`
  margin-top: 28px;
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
  @media screen and (min-width: 768px) {
    margin-top: 64px;
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`;
