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
} from './Welcome.styled';

const Welcome = () => {
  return (
    <Section>
      <Container>
        <Title>Transforming your body shape with Power Pulse</Title>
        <ButtonContainer>
          <ButtonYellow to="/signup">Sign Up</ButtonYellow>
          <ButtonBlack to="/signin">Sign In</ButtonBlack>
        </ButtonContainer>
        <FlexContainer>
          <VideoTutorialContainer>
            <PlayIcon />
            <TextContainerB>
              <VideoTutorialTextA>350+</VideoTutorialTextA>
              <VideoTutorialTextB>Video tutorial</VideoTutorialTextB>
            </TextContainerB>
          </VideoTutorialContainer>
        </FlexContainer>
        <FlexContainerB>
          <CalorieContainer>
            <RunIcon />
            <TextContainerC>
              <CalorieTextA>500</CalorieTextA>
              <CalorieTextB>cal</CalorieTextB>
            </TextContainerC>
          </CalorieContainer>
        </FlexContainerB>
      </Container>
    </Section>
  );
};

export default Welcome;
