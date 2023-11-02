import {
  Container,
  Title,
  VideoTutorialContainer,
  PlayIcon,
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
  ButtonContainer,
  ButtonYellow,
  ButtonBlack,
  Section,
  PlayIconContainer,
  RunIconContainer,
  TextIcon,
  CalorieSpanText,
} from './Welcome.styled';
import sprite from '../../sprite/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import getStatistics from '../../redux/statistics/statisticsOperations';
import { useEffect } from 'react';
import getStatisticsData from '../../redux/statistics/statisticsSelectors';

const Welcome = () => {
  const statistic = useSelector(getStatisticsData);
  const cal = statistic.totalBurnedCalories.toString().slice(0, 2);
  const cal2 = statistic.totalBurnedCalories.toString().slice(2, 6);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStatistics());
  }, []);

  return (
    <Section>
      <Container>
        <Title>
          Transforming your{' '}
          <TextIcon className="text-container">body&nbsp;</TextIcon>
          shape with Power Pulse
        </Title>
        <ButtonContainer>
          <ButtonYellow to="/signup">Sign Up</ButtonYellow>
          <ButtonBlack to="/signin">Sign In</ButtonBlack>
        </ButtonContainer>
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
                    {cal}<CalorieSpanText>{cal2}</CalorieSpanText>
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

export default Welcome;
