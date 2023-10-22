import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, subDays } from "date-fns";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { DaySwitchContainer, CustomDatePickerInput, StyledCalendarContainer, StyledIcon, StyledArrow } from "./DaySwitch.styled";
import sprite from '../../sprite/sprite.svg';

const DaySwitch = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dateFormat = "dd MMM yyyy";
  const numericMonthFormat = "dd MM yyyy";

  const datepickerRef = useRef(null);

  const toggleDatePicker = () => {
    if (datepickerRef.current) {
      datepickerRef.current.setOpen(true);
    }
  };

  return (
    <DaySwitchContainer>
       <StyledCalendarContainer>
      <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat={numericMonthFormat}
          customInput={<CustomDatePickerInput />}
          ref={datepickerRef}
        />
       <StyledIcon onClick={toggleDatePicker}>
          <use href={`${sprite}#icon-calendar`}></use>
        </StyledIcon>
      </StyledCalendarContainer>
      <StyledArrow>
      <IoIosArrowBack
        onClick={() => setStartDate(subDays(startDate, 1))}
        style={{ cursor: "pointer", fontSize: "16px", color: "grey" }}
      />
      <IoIosArrowForward
        onClick={() => setStartDate(addDays(startDate, 1))}
        style={{ cursor: "pointer", fontSize: "16px", color: "white" }}
      />
      </StyledArrow>
     
    </DaySwitchContainer>
  );
};

export { DaySwitch };

  

