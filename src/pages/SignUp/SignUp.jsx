import React from 'react';
import { Container, Title, Text, TextB, StyledLink, TextContainer } from './SignUp.styled';
import { SignUpForm } from '../../components/SignUpForm.jsx/SignUpForm';

const SignUp = () => {
  return (
    <Container>
      <Title>Sign Up</Title>
      <Text>
        Thank you for your interest in our platform. To complete the
        registration process, please provide us with the following information.
      </Text>
      <SignUpForm />
      <TextContainer>
        <TextB>Already have account?</TextB>
        <StyledLink to="/signin">Sign In</StyledLink>
      </TextContainer>
    </Container>
  );
};

export { SignUp };
