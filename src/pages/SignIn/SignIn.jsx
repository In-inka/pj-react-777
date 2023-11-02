import {
  Container,
  Title,
  Text,
  TextB,
  StyledLink,
  TextContainer,
  VideoTutorialContainer,
  PlayIconContainer,
  TextContainerB,
  VideoTutorialTextA,
  VideoTutorialTextB,
  FlexContainer,
  FlexContainerB,
  CalorieContainer,
  RunIcon,
  TextContainerC,
  CalorieTextA,
  CalorieTextB,
  Section,
  PlayIcon,
  RunIconContainer,
  CalorieSpanText,
} from './SignIn.styled';
import { SignInForm } from '../../components/SignInForm/SignInForm';
import sprite from '../../sprite/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import getStatisticsData from '../../redux/statistics/statisticsSelectors';
import getStatistics from '../../redux/statistics/statisticsOperations';
import { useEffect } from 'react';


const SignIn = () => {
    const statistic = useSelector(getStatisticsData);
  
  const cal = statistic.totalBurnedCalories.toString().slice(0, 2);
  const cal2 = statistic.totalBurnedCalories.toString().slice(2, 6);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getStatistics());
    }, []);
  return (
    <Section>
      {' '}
      <Container>
        <Title>Sign In</Title>
        <Text>
          Welcome! Please enter your credentials to login to the platform:
        </Text>
        <SignInForm />
        <TextContainer>
          <TextB>Don&#39;t have an account?</TextB>
          <StyledLink to="/signup">Sign Up</StyledLink>
        </TextContainer>
        <FlexContainer>
          <VideoTutorialContainer>
            <PlayIconContainer>
              <PlayIcon className="setPlay">
                <use href={`${sprite}#icon-Polygon`}></use>
              </PlayIcon>
            </PlayIconContainer>
            <TextContainerB>
              <VideoTutorialTextA>350+</VideoTutorialTextA>
              <VideoTutorialTextB>Video tutorial</VideoTutorialTextB>
            </TextContainerB>
          </VideoTutorialContainer>
        </FlexContainer>
        <FlexContainerB>
          <CalorieContainer>
            <RunIconContainer>
              <RunIcon className="setRun">
                <use href={`${sprite}#icon-running`}></use>
              </RunIcon>
            </RunIconContainer>
            <TextContainerC>
              <CalorieTextA>
                {cal ? (
                  <>
                    {cal}
                    <CalorieSpanText>{cal2}</CalorieSpanText>
                  </>
                ) : (
                  '500'
                )}
              </CalorieTextA>
              <CalorieTextB>cal</CalorieTextB>
            </TextContainerC>
          </CalorieContainer>
        </FlexContainerB>
      </Container>
    </Section>
  );
};

export default SignIn;
