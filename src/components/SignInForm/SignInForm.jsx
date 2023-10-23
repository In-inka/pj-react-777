import { useFormik } from 'formik';
import {
  Button,
  ButtonContainer,
  Error,
  MessageContainer,
  ErrorIcon,
  Form,
  Input,
  Label,
  SuccessIcon,
  Success,
} from './SignInForm.styled';
import { signInSchema } from '../../schemas/schemas';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(values);
  actions.resetForm();
};

const SignInForm = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit,
  });
    

  const errorRender = (value) => {
    return (
      <MessageContainer>
        <ErrorIcon />
        <Error>{value}</Error>
      </MessageContainer>
    );
  };

      const SuccessRender = (value) => {
        return (
          <MessageContainer>
            <SuccessIcon />
            <Success>Success {value}</Success>
          </MessageContainer>
        );
      };
    
  return (
    <Form onSubmit={handleSubmit}>
      {errors.name && touched.name && errorRender(errors.name)}
      <Label htmlFor="email">Email</Label>
      <Input
        value={values.email}
        onChange={handleChange}
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        onBlur={handleBlur}
        theme={
          touched.email &&
          (errors.email
            ? { main: 'rgba(216, 0, 39, 1)' }
            : { main: 'rgba(60, 191, 97, 1)' })
        }
      />
      {touched.email &&
        (errors.email ? errorRender(errors.email) : SuccessRender('email'))}
      <Label htmlFor="password">Password</Label>
      <Input
        value={values.password}
        onChange={handleChange}
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        onBlur={handleBlur}
        theme={
          touched.password &&
          (errors.password
            ? { main: 'rgba(216, 0, 39, 1)' }
            : { main: 'rgba(60, 191, 97, 1)' })
        }
      />
      {touched.password &&
        (errors.password
          ? errorRender(errors.password)
          : SuccessRender('password'))}
      <ButtonContainer>
        <Button disabled={isSubmitting} type="submit">
          Sign In
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export { SignInForm };
