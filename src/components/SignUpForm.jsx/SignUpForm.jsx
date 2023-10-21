import React from 'react';
import { Button, ButtonContainer, Form, Input, Label } from './SignUpForm.styled';

const SignUpForm = () => {
  return (
    <Form>
      <Label htmlFor="name">Name</Label>
      <Input type="text" id="name" name="name" placeholder="Name" required />
      <Label htmlFor="email">Email</Label>
      <Input
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        pattern="/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/"
        required
      />
      <Label htmlFor="password">Password</Label>
      <Input
        type="text"
        id="password"
        name="password"
        placeholder="Password"
        minLength={6}
        required
      />
      <ButtonContainer>
        <Button>Sign Up</Button>
      </ButtonContainer>
    </Form>
  );
};

export { SignUpForm };