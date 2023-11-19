import styled from 'styled-components';
import { glodalColor } from '../../Styled/GlobalColor';

export const FormProfile = styled.form`
  padding-top: 18px;

  @media screen and (min-width: 768px) {
    padding-top: 38px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 32px;
  }
`;

export const BoxBasicInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const BoxHeightWeightBirthday = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 16px;
  }
`;

export const BoxItemInputs = styled.div`
  width: 100%;
`;


export const BoxIconCalendar = styled.span`
  display: flex;
  align-items: center;
`;

export const DatePickerContainer = styled.div`
position: relative;
`

export const ContainerItemInputs = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    width: 345px;
  }
`;

export const ContainerRadio = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  @media screen and (min-width: 375px) {
    justify-content: flex-start;
    gap: 20px;
  }
`;

export const BoxRadio = styled.div`
  display: flex;
  gap: 4px;
  @media screen and (min-width: 375px) {
    gap: 8px;
  }
`;

export const ContainerRadioActive = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`;

export const LabelProfile = styled.label`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: ${glodalColor.titleCards};
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const LabelBirthdate = styled.span`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: ${glodalColor.titleCards};
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const InputProfile = styled.input`
  outline: 0;
  outline-offset: 0;
  color: #efede8;
  width: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${glodalColor.title};
  border-radius: 12px;
  padding: 14px;
  font-size: 16px;
  line-height: 1.5;
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }

  &:active {
    background-color: inherit;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const EmailProfile = styled.span`
  display: flex;
  align-items: center;
  color: ${glodalColor.title};
  width: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.main};
  border-radius: 12px;
  padding: 14px;
  font-size: 16px;
  line-height: 1.5;
`;

export const BloodRadio = styled.span`
  display: block;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0px;
  color: ${glodalColor.titleCards};
  margin-bottom: 4px;
`;

export const LabelProfileRadio = styled.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: left;
`;

export const InputRadio = styled.input`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const IconRadio = styled.svg`
  fill: #000000;
  stroke: currentColor;
`;

export const ContainerBloodSex = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
  }
`;

// =========RADIO_BUTTON=============

export const RadioContainer = styled.div`
  display: flex;
  gap:8px;
  margin: 0;

  /* max-width: 300px; */
`;

export const BoxRadioSex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

export const RadioWrapper = styled.div`
`;

export const RadioButton = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const RadioCheckmark = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(99, 99, 102, 1);
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #333;
    transition: all 0.2s ease-in-out;
  }
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    &::before {
      width: 10px;
      height: 10px;
      margin: auto;
    }
  }
`;

export const InputSex = styled.input`
  display: none;
  &:checked + ${RadioCheckmark} {
    border-color: ${glodalColor.bgSecondary};
    &::before {
      background-color: ${glodalColor.bgSecondary};
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export const RadioLabel = styled.span`
  position: relative;
  padding-left: 20px;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: left;
  color: ${glodalColor.withe};
  @media screen and (min-width: 768px) {
    padding-left: 24px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

// =========/RADIO_BUTTON=============

export const BoxLabelMarket = styled.div`
  width: 100%;
  display: flex;
  gap: 9px;
`;

export const RadioLabelActive = styled.span`
  margin-left: 32px;
  display: block;
  width: 260px;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: left;
  color: ${glodalColor.withe};
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

// =========CALENDAR=============

export const DateInput = styled.input`
  background-color: rgba(0, 0, 0, 1);
  /* width: 100px; */
  border: none;
  color: ${glodalColor.withe};
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: left;
`;

// =========/CALENDAR=============
