import styled from 'styled-components';
import { DaySwitch } from '../../components/DaySwitch/DaySwitch';
import { DayProducts } from '../../components/DayProducts/DayProducts';
import { DayExercises } from '../../components/DayExercises/DayExercises';
import { DayDashboard } from '../../components/DayDashboard/DayDashboard';

import {
  Container,
  PageTitleText,
  WrapTitle,
  InfoText,
  WrapInfoText,
  WrapTableBlock,
  WrapMainBlock,
  WrapDashBoard,
} from './Diary.styled';

import sprite from '../../sprite/sprite.svg';
const Icon = styled.svg`
  &.orange {
    fill: ${({ theme }) => theme.secondaryOrange};
  }
`;

const Diary = () => {
  return (
    <Container>
      <WrapTitle>
        <PageTitleText>Diary</PageTitleText>
        <DaySwitch />
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
