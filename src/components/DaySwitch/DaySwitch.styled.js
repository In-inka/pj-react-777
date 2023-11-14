import styled from 'styled-components';
import { glodalColor } from '../../Styled/GlobalColor';

export const DaySwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomDatePickerInput = styled.input`
  display: flex;
  align-items: center;
  background: transparent;
  width: 100%;
  border: 1px solid ${glodalColor.title};
  border-radius: 12px;
  padding: 14px;
  background-color: inherit;
  color: ${glodalColor.withe};
  font-size: 16px;
  line-height: 1.5;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
  &:hover,
  &:focus {
    border-color: rgba(230, 83, 60, 1);
  }
  &.diary{
    width: 135px;
    border: none;
  }
`;

export const StyledCalendarContainer = styled.div`
  position: relative;
  .react-datepicker {
    background: #ef8964;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
  }

  .react-datepicker__current-month {
    color: white;
  }

  .react-datepicker__day {
    color: white;
  }

  .react-datepicker__day-name {
    color: white;
  }

  .react-datepicker__time {
    color: white;
  }

  .react-datepicker__triangle {
    visibility: hidden;
  }

  .react-datepicker__header {
    background-color: #ef8964;
  }

  .react-datepicker__input-container input {
    caret-color: transparent;
    pointer-events: auto;
    cursor: pointer;
  }

  .react-datepicker__day--selected {
    color: white;
    background-color: black;
    border-radius: 50%;
  }

  .react-datepicker__day:hover {
    color: white;
    background-color: black;
    border-radius: 50%;
  }

  .react-datepicker__year-read-view--selected-year {
    color: #efede8;
    font-size: 16px;
  }
  .react-datepicker__year-dropdown {
    background-color: #ef8964;
    border: none;
    color: #efede8;
    font-size: 16px;
  }
`;

export const StyledIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${(props) => props.stroke || 'white'};
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 10px;
  &:hover {
    use {
      fill: #ef8964;
    }
  }
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 14px;
  }
`;

export const StyledArrow = styled.div`
  display: flex;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 26px;
  }
`;
