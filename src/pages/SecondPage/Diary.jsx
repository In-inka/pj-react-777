import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import diaryOperations from '../../redux/diary/diaryOperations';
import { glodalColor } from '../../Styled/GlobalColor';
import { DaySwitch } from '../../components/DaySwitch/DaySwitch';
import { DayProducts } from '../../components/DayProducts/DayProducts';
import { DayExercises } from '../../components/DayExercises/DayExercises';
import { DayDashboard } from '../../components/DayDashboard/DayDashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  PageTitleText,
  WrapTitle,
  InfoText,
  WrapInfoText,
  WrapTableBlock,
  WrapMainBlock,
  WrapDashBoard,
  WrapDaySwitcher,
  MobileDaySwitch,
  NotMobileDaySwitch,
} from './Diary.styled';
import sprite from '../../sprite/sprite.svg';
import { useEffect, useState } from 'react';
import diarySelectors from '../../redux/diary/diarySelectors';
import authSelectors from '../../redux/auth/auth-selectors';

const Icon = styled.svg`
  &.orange {
    fill: ${({ theme }) => theme.secondaryOrange};
  }
`;

function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();
  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;
  return `${day}/${month}/${year}`;
}

const notify = () => {
  toast.warn('the date must be greater than your birthday', { theme: 'dark' });
};

const Diary = () => {
const storDate = localStorage.getItem('PowerPulsDate');
const newDate = storDate ? new Date(storDate) : new Date();
const [date, setDate] = useState(newDate);
const dispatch = useDispatch();

  const diary = useSelector(diarySelectors.getDiary);
  const { eatenProducts, doneExercises } = diary;
  const dayOfBirthday = new Date(
    useSelector(authSelectors.getUserMetricData).birthday,
  );

  const handlerDate = (date) => {
    if (date < dayOfBirthday) {
      notify();
      setDate(dayOfBirthday);
    } else setDate(date);
    localStorage.setItem('PowerPulsDate', date);
  };

  useEffect(() => {
    dispatch(diaryOperations.getDiary(`?date=` + formatDate(date)));
  }, [dispatch, date, eatenProducts.length, doneExercises.length]);

  return (
    <Container>
      <ToastContainer />
      <WrapTitle>
        <PageTitleText>Diary</PageTitleText>
        <WrapDaySwitcher>
          <MobileDaySwitch>
            <DaySwitch
              currentDate={date}
              handlerDate={handlerDate}
              birthdayDate={dayOfBirthday}
              textSize={18}
              textWeight={'bold'}
              textHeight={20}
              sizeArrow={18}
              iconColor={glodalColor.secondaryOrange}
            />
          </MobileDaySwitch>
          <NotMobileDaySwitch>
            <DaySwitch
              currentDate={date}
              handlerDate={handlerDate}
              textSize={24}
              textWeight={'bold'}
              textHeight={32}
              sizeArrow={18}
              iconColor={glodalColor.secondaryOrange}
            />
          </NotMobileDaySwitch>
        </WrapDaySwitcher>
      </WrapTitle>
      <WrapMainBlock>
        <WrapDashBoard>
          <DayDashboard />
          <WrapInfoText>
            <IconInfo size={24} />
            <InfoText>
              Record all your meals in a calorie diary every day. This will help
              me be aware of my nutrition and make me responsible for my
              choices.
            </InfoText>
          </WrapInfoText>
        </WrapDashBoard>
        <WrapTableBlock>
          <DayProducts />
          <DayExercises />
        </WrapTableBlock>
      </WrapMainBlock>
    </Container>
  );
};

export const IconInfo = ({ size }) => {
  return (
    <div style={{ width: `${size}px`, height: `${size}px` }}>
      <Icon width={size} height={size} className="orange">
        <use href={`${sprite}#icon-exclamation-mark`}></use>
      </Icon>
    </div>
  );
};

export default Diary;
