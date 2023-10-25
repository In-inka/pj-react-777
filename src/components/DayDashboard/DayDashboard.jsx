import styled from 'styled-components';
import {
  Container,
  ContentContainerCard,
  WrapperTitleCard,
  ValueTextCard,
  TitleTextCard,
} from './DayDashboard.styled';

const Icon = styled.svg`
  &orange {
    fill: ${({ theme }) => theme.secondaryOrange};
    stroke: ${({ theme }) => theme.withe};
  }
`;

const DayDashboard = () => {
  const calorieIntake = 2200;
  const normOfSports = 110;
  const caloriesConsumed = 2300;
  // const caloriesConsumed = 707;
  const caloriesBurned = 855;
  const restOfCalories = -100;
  // const restOfCalories = 1493;
  const restOfSports = 30;
  // const restOfSports = 85;

  return (
    <Container>
      <Card value={calorieIntake}>Daily calorie intake</Card>
      <Card value={normOfSports}>Daily norm of sports</Card>
      <Card value={caloriesConsumed}>Calories consumed</Card>
      <Card value={caloriesBurned}>Calories burned</Card>
      <Card value={restOfCalories}>The rest of the calories</Card>
      <Card value={restOfSports}>The rest of sports</Card>
    </Container>
  );
};

const Card = ({ value, children }) => {
  let icon = '';
  let min = '';
  let plus = '';
  if (children === 'The rest of sports' && value === 30) plus = '+';
  switch (children) {
    case 'Daily calorie intake':
      icon = (
        <Icon width={20} height={20} fill="#EF8964">
          <use xlinkHref={'/symbol-defs.svg#icon-fluent_food'} />
        </Icon>
      );
      break;
    case 'Daily norm of sports':
      icon = (
        <Icon width={20} height={20} fill="#EF8964">
          <use xlinkHref={'/symbol-defs.svg#icon-dumbbell'} />
        </Icon>
      );
      min = ' min';
      break;
    case 'Calories consumed':
      icon = (
        <Icon width={20} height={20} fill="#EF8964">
          <use xlinkHref={'/symbol-defs.svg#icon-apple'} />
        </Icon>
      );
      break;
    case 'Calories burned':
      icon = (
        <Icon width={20} height={20} fill="#EF8964">
          <use xlinkHref={'/symbol-defs.svg#icon-calories'} />
        </Icon>
      );
      break;
    case 'The rest of the calories':
      icon = (
        <Icon width={20} height={20} fill="#EF8964">
          <use xlinkHref={'/symbol-defs.svg#icon-bubble'} />
        </Icon>
      );
      break;
    case 'The rest of sports':
      icon = (
        <Icon width={20} height={20} fill="#EF8964">
          <use xlinkHref={'/symbol-defs.svg#icon-running'} />
        </Icon>
      );
      min = ' min';
      break;
  }
  return (
    <ContentContainerCard value={value} title={children}>
      <WrapperTitleCard>
        {icon}
        <TitleTextCard>{children}</TitleTextCard>
      </WrapperTitleCard>
      <ValueTextCard>
        {plus}
        {value}
        {min}
      </ValueTextCard>
    </ContentContainerCard>
  );
};

export { DayDashboard };

export const TestIcon = ({ w, h, c, mr }) => {
  return (
    <div
      style={{
        // marginLeft: {ml},

        minWidth: w,
        maxWidth: w,
        minHeight: h,
        maxHeight: h,
        backgroundColor: c,
        marginRight: mr,
        borderWidth: 0,
      }}
    ></div>
  );
};
