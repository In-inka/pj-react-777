import styled from 'styled-components';
import { glodalColor } from '../../Styled/GlobalColor';

export const DaySwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomDatePickerInput = styled.input`
  background: transparent;
  width: 100px;
  border: none;
  color: ${glodalColor.withe};
  font-weight: ${(props) => (props.$textWeight ? props.$textWeight : 'normal')};
  font-size: ${(props) => (props.$textSize ? props.$textSize + `px` : '16px')};
  line-height: ${(props) =>
    props.$textHeight ? props.$textHeight + `px` : '24px'};
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 120px;
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
  top: 0;
  left: 100px;
  &:hover {
    use {
      fill: #ef8964;
    }
  }
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 4px;
    left: 130px;
  }
`;

export const StyledArrow = styled.div`
  display: flex;
  margin-left: 48px;
  @media screen and (min-width: 768px) {
    margin-left: 72px;
  }
`;
