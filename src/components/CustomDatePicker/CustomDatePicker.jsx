import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { CustomDatePickerInput } from '../DaySwitch/DaySwitch.styled';
import { CalendarSelect, MonthBtn } from './CustomDatePicker.styled';

export const CustomDatePicker = ({ selected, onChange }) => {

  const endYear = new Date().getFullYear();

  const range = (firstYear, currentYear) => {
    let years = [];
    for (let i = currentYear; firstYear < i; i--) {
      years.push(i);
    }
    return years;
  };

  const years = range(1900, endYear);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  

  return (
    <DatePicker
      shouldCloseOnSelect={true}
      selected={selected}
      dateFormat={'dd.MM.yyyy'}
      customInput={<CustomDatePickerInput />}
      onChange={onChange}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <MonthBtn
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            type="button"
          >
            {'<'}
          </MonthBtn>
          <CalendarSelect
            value={months[date.getMonth()]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </CalendarSelect>
          <CalendarSelect
            value={date.getFullYear()}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </CalendarSelect>
          <MonthBtn
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
            type="button"
          >
            {'>'}
          </MonthBtn>
        </div>
      )}
    />
  );
};
