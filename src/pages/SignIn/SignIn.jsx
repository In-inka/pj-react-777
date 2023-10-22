import {
  Container,
  Title,
  Text,
  TextB,
  StyledLink,
  TextContainer,
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
  LogoContainer,
  BarbellIcon,
  LogoText,
} from './SignIn.styled';
import { SignInForm } from '../../components/SignInForm/SignInForm';

const SignIn = () => {
  return (
    <Container>
      <LogoContainer>
        <BarbellIcon />
        <LogoText>PowerPulse</LogoText>
      </LogoContainer>
      <Title>Sign In</Title>
      <Text>
        Thank you for your interest in our platform. To complete the
        registration process, please provide us with the following information.
      </Text>
      <SignInForm />
      <TextContainer>
        <TextB>Already have account?</TextB>
        <StyledLink to="/signup">Sign Up</StyledLink>
      </TextContainer>
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
  );
};

export { SignIn };
