import styled from 'styled-components';
import { glodalColor } from '../../Styled/GlobalColor';

// ============TIMER=============

export const BoxTimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 50;

  & > :first-child {
    margin-bottom: 4px;
  }

  & > :nth-child(2) {
    margin-bottom: 14px;
  }
  & > :nth-child(3) {
    margin-bottom: 8px;
  }
`;
export const TextTime = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0px;
  text-align: left;
  color: ${glodalColor.itemTitleExercises};
`;

export const CaloriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 8px;
`;

export const BurnedCalories = styled.p`
  font-size: 14px;
  line-height: 1.2;
  color: ${glodalColor.title};
  margin-right: 8px;
`;

export const ButtonPause = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  z-index: 50;
  width: 32px;
  height: 32px;
`;

export const IconPause = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${glodalColor.acceptColor};
`;

export const Number = styled.span`
  color: ${glodalColor.acceptColor};
`;

// ============/TIMER=============
