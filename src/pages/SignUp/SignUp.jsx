import { Container, Title, Text, TextB, StyledLink, TextContainer, VideoTutorialContainer, PlayIcon, TextContainerB, VideoTutorialTextA, VideoTutorialTextB, FlexContainer, FlexContainerB, CalorieContainer, RunIcon, TextContainerC, CalorieTextA, CalorieTextB, Section, PlayIconContainer, RunIconContainer, } from './SignUp.styled';
import { SignUpForm } from '../../components/SignUpForm.jsx/SignUpForm';
import sprite from '../../sprite/sprite.svg';

const SignUp = () => {
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
              <CalorieTextA>500</CalorieTextA>
              <CalorieTextB>cal</CalorieTextB>
            </TextContainerC>
          </CalorieContainer>
        </FlexContainerB>
      </Container>
    </Section>
  );
};

export default SignUp;
