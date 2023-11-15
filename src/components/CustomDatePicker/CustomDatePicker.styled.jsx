import styled from "styled-components";
import { glodalColor } from "../../Styled/GlobalColor";

export const LabelBirthdate = styled.span`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0px;
  color: ${glodalColor.titleCards};
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`;


export const BoxInputData = styled.label`
  display: flex;
  align-items: center;

  color: #efede8;
  width: 100%;
  height: 100%;
  background-color: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: ${glodalColor.title};
  border-radius: 12px;
  padding: 13px;
  font-size: 14px;
  line-height: 1.29;
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const MonthBtn = styled.button`
  padding: 5px;
  font-weight: bold;
  color: white;
  background-color: inherit;
  border: 1px solid white;
  border-radius: 6px;
`;

export const CalendarSelect = styled.select`
  border: 1px solid white;
  border-radius: 6px;
  color: white;
  background-color: #ef8964;
  &:last-of-type {
    margin-left: 4px;
    margin-right: 4px;
  }
  &:first-of-type {
    margin-left: 4px;
  }
`;