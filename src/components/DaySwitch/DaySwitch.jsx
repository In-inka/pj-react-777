import { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, subDays } from 'date-fns';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  DaySwitchContainer,
  CustomDatePickerInput,
  StyledCalendarContainer,
  StyledIcon,
  StyledArrow,
} from './DaySwitch.styled';
import sprite from '../../sprite/sprite.svg';
import { glodalColor } from '../../Styled/GlobalColor';

const DaySwitch = ({ textSize, textWeight, iconColor, sizeArrow }) => {
  const [startDate, setStartDate] = useState(new Date());
  const numericMonthFormat = 'dd/MM/yyyy';

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
          customInput={
            <CustomDatePickerInput
              $textSize={textSize}
              $textWeight={textWeight}
            />
          }
          ref={datepickerRef}
        />
        <StyledIcon onClick={toggleDatePicker} stroke={iconColor}>
          <use href={`${sprite}#icon-calendar`}></use>
        </StyledIcon>
      </StyledCalendarContainer>
      <StyledArrow>
        <IoIosArrowBack
          onClick={() => setStartDate(subDays(startDate, 1))}
          style={{
            cursor: 'pointer',
            fontSize: sizeArrow ? `${sizeArrow}px` : `16px`,
            color: glodalColor.bgCards,
          }}
        />
        <IoIosArrowForward
          onClick={() => setStartDate(addDays(startDate, 1))}
          style={{
            cursor: 'pointer',
            fontSize: sizeArrow ? `${sizeArrow}px` : `16px`,
            color: glodalColor.withe,
          }}
        />
      </StyledArrow>
    </DaySwitchContainer>
  );
};

export { DaySwitch };
