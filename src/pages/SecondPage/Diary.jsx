import { DaySwitch } from '../../components/DaySwitch/DaySwitch'
import { DayProducts } from '../../components/DayProducts/DayProducts'
import { DayExercises } from '../../components/DayExercises/DayExercises'
import { DayDashboard } from '../../components/DayDashboard/DayDashboard'
import { Container, PageTitleText, WrapTitle, InfoText } from './Diary.styled' 

const Diary = () => {
  return (
    <Container>
      <WrapTitle>
        <PageTitleText>Dairy</PageTitleText>
        <DaySwitch />
      </WrapTitle>

      <DayDashboard />
      <InfoText>
        Record all your meals in a calorie diary every day. This will help me be
        aware of my nutrition and make me responsible for my choices.
      </InfoText>

      <DayProducts></DayProducts>

      <DayExercises></DayExercises>
    </Container>
  );
};

export default Diary;
