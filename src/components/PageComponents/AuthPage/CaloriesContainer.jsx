import styled from "styled-components";
import { glodalColor } from '../../../Styled/GlobalColor';
import sprite from '../../../sprite/sprite.svg';


const FlexContainerB = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding-top: 70px;
  @media screen and (min-width: 768px) {
    padding-top: 56px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 0px;
    position: absolute;
    top: 319px;
    left: 1228px;
  }
`;

const CalorieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 18px;
  background-color: ${glodalColor.secondaryOrange};
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    padding: 14px 20px;
  }
`;

const TextContainerC = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`;

const CalorieTextA = styled.p`
  font-size: 24px;
  line-height: 1;
  font-weight: 700;
  color: ${glodalColor.withe};
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    margin-right: 11px;
    font-size: 48px;
    line-height: 1.04;
  }
`;

const CalorieSpanText = styled.span`
  font-size: 20px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.33;
  }
`;

const CalorieTextB = styled.p`
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.65);
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

const RunIcon = styled.svg`
  fill: ${glodalColor.withe};
  width: 12px;
  height: 12px;
  @media screen and (min-width: 768px) {
    &.setRun {
      padding-left: 2px;
      width: 16px;
      height: 16px;
    }
  }
`;

const RunIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: #efa082;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-bottom: 12px;
  }
`;



export const CaloriesContainer = ({ val1, val2}) => {
  return (
      <FlexContainerB>
      <CalorieContainer>
        <RunIconContainer>
          <RunIcon className="setRun">
            <use href={`${sprite}#icon-running`}></use>
          </RunIcon>
        </RunIconContainer>
        <TextContainerC>
          <CalorieTextA>
            {val1 ? (
              <>
                {val1}
                <CalorieSpanText>{val2}</CalorieSpanText>
              </>
            ) : (
              '500'
            )}
          </CalorieTextA>
          <CalorieTextB>cal</CalorieTextB>
        </TextContainerC>
      </CalorieContainer>
    </FlexContainerB>
  );
};