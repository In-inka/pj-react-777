import { useRef } from 'react';
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

const DaySwitch = ({
  textSize,
  textWeight,
  iconColor,
  sizeArrow,
  textHeight,
  handlerDate,
  currentDate,
  birthdayDate,
}) => {
  const numericMonthFormat = 'dd/MM/yyyy';
  const datepickerRef = useRef(null);

  const handler = (evt) => {
    handlerDate(evt);
  };

  const toggleDatePicker = () => {
    if (datepickerRef.current) {
      datepickerRef.current.setOpen(true);
    }
  };

  return (
    <DaySwitchContainer>
      <StyledCalendarContainer>
        <DatePicker
          selected={currentDate}
          onChange={handler}
          dateFormat={numericMonthFormat}
          minDate={birthdayDate}
          customInput={
            <CustomDatePickerInput
              className="diary"
              $textSize={textSize}
              $textWeight={textWeight}
              $textHeight={textHeight}
            />
          }
          ref={datepickerRef}
          shouldCloseOnSelect={true}
        />
        <StyledIcon onClick={toggleDatePicker} stroke={iconColor}>
          <use href={`${sprite}#icon-calendar`}></use>
        </StyledIcon>
      </StyledCalendarContainer>
      <StyledArrow>
        <IoIosArrowBack
          onClick={() => {
            handler(subDays(currentDate, 1));
          }}
          style={{
            cursor: 'pointer',
            fontSize: sizeArrow ? `${sizeArrow}px` : `16px`,
            color: glodalColor.bgCards,
            userSelect: 'none',
          }}
        />
        <IoIosArrowForward
          onClick={() => {
            handler(addDays(currentDate, 1));
          }}
          style={{
            cursor: 'pointer',
            fontSize: sizeArrow ? `${sizeArrow}px` : `16px`,
            color: glodalColor.withe,
            userSelect: 'none',
          }}
        />
      </StyledArrow>
    </DaySwitchContainer>
  );
};

export { DaySwitch };
