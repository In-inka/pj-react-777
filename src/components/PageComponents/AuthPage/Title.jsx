import styled from "styled-components";

const StyledTitle = styled.h1`
  color: rgba(239, 237, 232, 1);
  font-size: 38px;
  line-height: 1.05;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 70px;
    line-height: 1.11;
  }
  &.welcome {
    position: relative;
    z-index: 2;
  }
  &.sign-page {
    font-size: 24px;
    line-height: 1.17;
    font-weight: 700;
    @media screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 1.38;
    }
  }
  &.error-page {
    font-size: 66px;
    line-height: 1;
    margin-bottom: 14px;
    letter-spacing: 0.66px;
    font-weight: 500;
    @media screen and (min-width: 768px) {
      font-size: 160px;
      line-height: 93.75%;
      letter-spacing: 1.6px;
    }
  }
`;

export const Title = ({ text, cls, children }) => {
  return <StyledTitle className={`${cls}`}>
    {children}{text} 
    </StyledTitle>
}