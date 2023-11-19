import { Container, Text, TextB, StyledLink, TextContainer, Section,  } from './SignUp.styled';
import { SignUpForm } from '../../components/SignUpForm.jsx/SignUpForm';
import { useDispatch, useSelector } from 'react-redux';
import getStatisticsData from '../../redux/statistics/statisticsSelectors';
import { useEffect } from 'react';
import getStatistics from '../../redux/statistics/statisticsOperations';
import { Title } from '../../components/PageComponents/AuthPage/Title';
import { VideoTutorialContainer } from '../../components/PageComponents/AuthPage/VideoTutorialContainer';
import { CaloriesContainer } from '../../components/PageComponents/AuthPage/CaloriesContainer';

const SignUp = () => {
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
        <Title text={'Sign Up'} cls={'sign-page'} />
        <Text>
          Thank you for your interest in our platform. To complete the
          registration process, please provide us with the following
          information.
        </Text>
        <SignUpForm />
        <TextContainer>
          <TextB>Already have account?</TextB>
          <StyledLink to="/signin">Sign In</StyledLink>
        </TextContainer>
        <VideoTutorialContainer cls={'sign-up'} video={ExercisesQuantity} />
        <CaloriesContainer val1={calorieValue} val2={calorieValue2} />
      </Container>
    </Section>
  );
};

export default SignUp;
