import { Container, Title, Text, TextB, StyledLink, TextContainer, VideoTutorialContainer, PlayIcon, TextContainerB, VideoTutorialTextA, VideoTutorialTextB, FlexContainer, FlexContainerB, CalorieContainer, RunIcon, TextContainerC, CalorieTextA, CalorieTextB, Section, PlayIconContainer, RunIconContainer, } from './SignUp.styled';
import { SignUpForm } from '../../components/SignUpForm.jsx/SignUpForm';
import sprite from '../../sprite/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import getStatisticsData from '../../redux/statistics/statisticsSelectors';
import { useEffect } from 'react';
import getStatistics from '../../redux/statistics/statisticsOperations';

const SignUp = () => {
      const statistic = useSelector(getStatisticsData);
      const cal = statistic.totalBurnedCalories;
      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(getStatistics());
      }, []);
  return (
    <Section>
      <Container>
        <Title>Sign Up</Title>
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
              <CalorieTextA>{cal}</CalorieTextA>
              <CalorieTextB>cal</CalorieTextB>
            </TextContainerC>
          </CalorieContainer>
        </FlexContainerB>
      </Container>
    </Section>
  );
};

export default SignUp;
