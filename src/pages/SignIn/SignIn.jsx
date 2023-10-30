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
} from './SignIn.styled';
import { SignInForm } from '../../components/SignInForm/SignInForm';
import sprite from '../../sprite/sprite.svg';


const SignIn = () => {
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
              <CalorieTextA>500</CalorieTextA>
              <CalorieTextB>cal</CalorieTextB>
            </TextContainerC>
          </CalorieContainer>
        </FlexContainerB>
      </Container>
    </Section>
  );
};

export default SignIn;
