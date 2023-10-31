import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import diaryOperations from '../../redux/diary/diaryOperations';
import { glodalColor } from '../../Styled/GlobalColor';
import { DaySwitch } from '../../components/DaySwitch/DaySwitch';
import { DayProducts } from '../../components/DayProducts/DayProducts';
import { DayExercises } from '../../components/DayExercises/DayExercises';
import { DayDashboard } from '../../components/DayDashboard/DayDashboard';
// import DatePicker from 'react-datepicker';

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
import diarySelectors from "../../redux/diary/diarySelectors"

const Icon = styled.svg`
  &.orange {
    fill: ${({ theme }) => theme.secondaryOrange};
  }
`;

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const Diary = () => {
  const [date, setDate] = useState(new Date());
  const [dayOfBirthday, setDayOfBirthday] = useState('20/10/2023')

  const dispatch = useDispatch();
  const handlerDate = (date) => { setDate(date); };

const diary = useSelector(diarySelectors.getDiary);
const { eatenProducts, doneExercises } = diary;
  
  useEffect(() => {
    dispatch(diaryOperations.getDiary(`?date=` + formatDate(date)));
  }, [dispatch, date, eatenProducts.length, doneExercises.length]);
  
  // const startDate = new Date('01/10/2023');
  // const endDate = new Date("15/10/2023");
     
  return (
    <Container>
      <WrapTitle>
        <PageTitleText>Diary</PageTitleText>
        <WrapDaySwitcher>
          <MobileDaySwitch>
            <DaySwitch
              currentDate={date}
              handlerDate={handlerDate}
              textSize={18}
              textWeight={'bold'}
              textHeight={20}
              sizeArrow={18}
              iconColor={glodalColor.secondaryOrange}
            />
          </MobileDaySwitch>
          <NotMobileDaySwitch>
            <DaySwitch
              // selected={startDate}
              // minDate={new Date()}
              // maxDate={(new Date()).setMonth(date.getMonth() + 5)}
              // startDate={startDate}
              // endDate={endDate}
              // selectsRange
              // inline
              // showDisabledMonthNavigation

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
