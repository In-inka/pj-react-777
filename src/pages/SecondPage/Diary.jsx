import { DaySwitch } from '../../components/DaySwitch/DaySwitch'
import { DiaryProducts } from '../../components/DiaryProducts/DiaryProducts'
import { DiaryExercises } from '../../components/DiaryExercises/DiaryExercises'
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

      <DiaryProducts></DiaryProducts>

      <DiaryExercises></DiaryExercises>
    </Container>
  );
};

export default Diary;
