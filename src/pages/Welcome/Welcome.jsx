import {
  Container,
  ButtonContainer,
  Section,
  TextIcon,
} from './Welcome.styled';
import sprite from '../../sprite/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import getStatistics from '../../redux/statistics/statisticsOperations';
import { useEffect } from 'react';
import { Title } from '../../components/PageComponents/AuthPage/Title';
import { ButtonLink } from '../../components/PageComponents/AuthPage/ButtonLink';
import getStatisticsData from '../../redux/statistics/statisticsSelectors';
import { VideoTutorialContainer } from '../../components/PageComponents/AuthPage/VideoTutorialContainer';
import { CaloriesContainer } from '../../components/PageComponents/AuthPage/CaloriesContainer';


const Welcome = () => {
  const statistic = useSelector(getStatisticsData);
  const calorieValue = statistic.totalBurnedCalories.toString().slice(0, 2);
  const calorieValue2 = statistic.totalBurnedCalories.toString().slice(2, 6);
  const ExercisesQuantity = statistic.exercisesQuantity;
  const dispatch = useDispatch();
  useEffect(() => {
    !statistic.totalBurnedCalories && dispatch(getStatistics());
  }, []);

  return (
    <Section>
      <Container>
        {/* Lice for the title field */}
        <Title
          text={'Transforming your body shape with Power Pulse'}
          cls={'welcome'}
        />

        <TextIcon width={'98px'} height={'36px'}>
          <use href={`${sprite}#icon-Line`}></use>
        </TextIcon>
        <ButtonContainer>
          <ButtonLink text={'Sign Up'} path={'/signup'} cls={"welcome"}/>
          <ButtonLink text={'Sign In'} path={'/signin'} cls={'black'} />
        </ButtonContainer>
        <VideoTutorialContainer video={ExercisesQuantity} />
        <CaloriesContainer val1={calorieValue} val2={calorieValue2} />
      </Container>
    </Section>
  );
};

export default Welcome;
