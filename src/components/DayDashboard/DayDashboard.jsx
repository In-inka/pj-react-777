import styled from 'styled-components';
import {
  Container,
  ContentContainerCard,
  WrapperTitleCard,
  ValueTextCard,
  TitleTextCard,
} from './DayDashboard.styled';

import sprite from '../../sprite/sprite.svg';
import { useSelector } from 'react-redux';
import diarySelectors from '../../redux/diary/diarySelectors';
import authSelectors from '../../redux/auth/auth-selectors';
import MyLoader from '../Loader/DiaryLoader';

const Icon = styled.svg`
  &.orange {
    fill: ${({ theme }) => theme.secondaryOrange};
  }
`;

const DayDashboard = () => {
  const caloriesIntake = useSelector(
    authSelectors.getUserMetricData,
  ).dailyIntakeCalories;
  const normOfSports = useSelector(
    authSelectors.getUserMetricData,
  ).dailyNormOfSport;

  const caloriesConsumed = useSelector(
    diarySelectors.getDiary,
  ).consumedCalories;

  const caloriesBurned = useSelector(diarySelectors.getDiary).burnedCalories;

  const restOfCalories = caloriesIntake - caloriesConsumed;

  const restOfSports =
    normOfSports -
    Math.ceil(useSelector(diarySelectors.getDiary).sportTime / 60);

  return (
    <Container>
      <Card value={caloriesIntake}>Daily calorie intake</Card>
      <Card value={normOfSports}>Daily norm of sports</Card>
      <Card value={caloriesConsumed}>Calories consumed</Card>
      <Card value={caloriesBurned}>Calories burned</Card>
      <Card value={restOfCalories}>The rest of the calories</Card>
      <Card value={restOfSports}>The rest of sports</Card>
    </Container>
  );
};

const Card = ({ value, children }) => {
  const isLoading = useSelector(diarySelectors.getIsLoading);
  let icon = '';
  let displayValue = value;

  switch (children) {
    case 'Daily calorie intake':
      icon = (
        <Icon width={20} height={20} className="orange">
          <use href={`${sprite}#icon-fluent_food`}></use>
        </Icon>
      );
      break;
    case 'Daily norm of sports':
      icon = (
        <Icon width={20} height={20} className="orange">
          <use href={`${sprite}#icon-dumbbell`}></use>
        </Icon>
      );
      displayValue = displayValue.toString() + ' min';
      break;
    case 'Calories consumed':
      icon = (
        <Icon width={20} height={20} className="orange">
          <use href={`${sprite}#icon-apple`}></use>
        </Icon>
      );
      break;
    case 'Calories burned':
      icon = (
        <Icon width={20} height={20} className="orange">
          <use href={`${sprite}#icon-calories`}></use>
        </Icon>
      );
      break;
    case 'The rest of the calories':
      icon = (
        <Icon width={20} height={20} className="orange">
          <use href={`${sprite}#icon-bubble`}></use>
        </Icon>
      );
      break;
    case 'The rest of sports':
      icon = (
        <Icon width={20} height={20} className="orange">
          <use href={`${sprite}#icon-running`}></use>
        </Icon>
      );
      displayValue = displayValue.toString() + ' min';
      break;
  }
  if (children === 'The rest of the calories' && value < 0) {
    displayValue = '- ' + Math.abs(value).toString();
  }
  if (children === 'The rest of sports' && value < 0) {
    displayValue = '+ ' + Math.abs(value).toString() + ' min';
  }
  if (!displayValue) displayValue = 0;
  return (
    <ContentContainerCard value={value} title={children}>
      <WrapperTitleCard>
        {icon}
        <TitleTextCard>{children}</TitleTextCard>
      </WrapperTitleCard>
      {isLoading ? (
        <MyLoader display={'block'} />
      ) : (
        <ValueTextCard> {displayValue}</ValueTextCard>
      )}
    </ContentContainerCard>
  );
};

export { DayDashboard };
