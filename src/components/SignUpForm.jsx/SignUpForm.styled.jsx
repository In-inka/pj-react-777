import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  margin-top: 28px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    width: 424px;
  }
`;

export const InputsContainer = styled.div`
  padding-right: 60px;
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

export const ButtonContainer = styled.div`
  padding-top: 28px;
  @media screen and (min-width: 768px) {
    padding-top: 64px;
  }
`;

export const GoogleSignLink = styled(Link)`
  margin-left: 14px;
  position: relative;
  display: inline-block;
  font-size: 16px;
  line-height: 1.17;
  background-color: inherit;
  color: #efede8;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding: 11px 45px 11px 39px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }
  &:disabled {
    border-color: rgba(230, 83, 60, 1);
  }
  @media screen and (min-width: 768px) {
    padding: 16px 68px 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`;
export const GoogleIcon = styled.svg`
  position: absolute;
  right: 19px;
  width: 20px;
  height: 20px;
  @media screen and (min-width: 768px) {
    &.setG {
      right: 32px;
      width: 28px;
      height: 28px;
    }
  }
`;

export const MessageContainer = styled.div`
  display: inline-flex;
  margin-top: 4px;
`;

export const ErrorIcon = styled.svg`
  margin-right: 4px;
  width: 16px;
  height: 16px;
`;

export const Error = styled.p`
  color: rgba(216, 0, 39, 1);
  font-size: 12px;
  line-height: 1.5;
`;

export const SuccessIcon = styled.svg`
  margin-right: 4px;
  width: 16px;
  height: 16px;
`;

export const Success = styled.p`
  color: rgba(60, 191, 97, 1);
  font-size: 12px;
  line-height: 1.5;
`;
