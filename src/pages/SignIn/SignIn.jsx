import {
  Container,
  Text,
  TextB,
  StyledLink,
  TextContainer,
  Section,
} from './SignIn.styled';
import { SignInForm } from '../../components/SignInForm/SignInForm';
import { useDispatch, useSelector } from 'react-redux';
import getStatisticsData from '../../redux/statistics/statisticsSelectors';
import getStatistics from '../../redux/statistics/statisticsOperations';
import { useEffect } from 'react';
import { Title } from '../../components/PageComponents/AuthPage/Title';
import { VideoTutorialContainer } from '../../components/PageComponents/AuthPage/VideoTutorialContainer';
import { CaloriesContainer } from '../../components/PageComponents/AuthPage/CaloriesContainer';

const SignIn = () => {
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
        <Title text={'Sign In'} cls={'sign-page'} />
        <Text>
          Welcome! Please enter your credentials to login to the platform:
        </Text>
        <SignInForm />
        <TextContainer>
          <TextB>Don&#39;t have an account?</TextB>
          <StyledLink to="/signup">Sign Up</StyledLink>
        </TextContainer>
        <VideoTutorialContainer cls={'sign-in'} video={ExercisesQuantity} />
        <CaloriesContainer val1={calorieValue} val2={calorieValue2} />
      </Container>
    </Section>
  );
};

export default SignIn;
