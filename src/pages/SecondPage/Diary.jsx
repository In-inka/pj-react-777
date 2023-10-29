import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import diaryOperations from '../../redux/diary/diaryOperations';
import { glodalColor } from '../../Styled/GlobalColor';
import { DaySwitch } from '../../components/DaySwitch/DaySwitch';
import { DayProducts } from '../../components/DayProducts/DayProducts';
import { DayExercises } from '../../components/DayExercises/DayExercises';
import { DayDashboard } from '../../components/DayDashboard/DayDashboard';
import DatePicker from 'react-datepicker';

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
  const [date, setDate] = useState(formatDate(new Date()));
  const dispatch = useDispatch();

  const handlerDate = (dataFromDaySwitch) => {
    console.log('handler : ', dataFromDaySwitch);

    const newDate = dataFromDaySwitch
      ? formatDate(dataFromDaySwitch)
      : formatDate(date);
    console.log('formatingDate : ', newDate);

    setDate(newDate);

    // return newDate;
  };

  useEffect(() => {
    console.log("effect: ", date);
    dispatch(diaryOperations.getDiary(`?date=`+date));
   }, [dispatch,date]);

  

  return (
    <Container>
      <WrapTitle>
        <PageTitleText>Diary</PageTitleText>
        <WrapDaySwitcher>
          <MobileDaySwitch>
            <DaySwitch
              selectDate={handlerDate}
              textSize={18}
              textWeight={'bold'}
              textHeight={20}
              sizeArrow={18}
              iconColor={glodalColor.secondaryOrange}
            />
          </MobileDaySwitch>
          <NotMobileDaySwitch>
            <DaySwitch
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
