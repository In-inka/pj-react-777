import styled from "styled-components";
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
  font-weight: bold;
  font-size: ${(props)=>(props.$textsize+`px` || `18px`)};
  outline: none;
  cursor: pointer;
`;

export const StyledCalendarContainer = styled.div`
position: relative;
  .react-datepicker {
 background: #EF8964;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.5); 
  }

  .react-datepicker__current-month {
    color: white ; 
 
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
    background-color: #EF8964; 
  }
`;

export const StyledIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${props=>props.stroke || "white"}
  cursor: pointer;
  position: absolute; 
  top: 0; 
  left: 100px;
  

  &:hover {
    use {
      fill: #EF8964;
    }
  }
`;

export const StyledArrow = styled.div`
margin-left: 40px;`











