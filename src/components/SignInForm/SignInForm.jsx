import { useFormik } from 'formik';
import {
  Button,
  ButtonContainer,
  Error,
  ErrorContainer,
  ErrorIcon,
  Form,
  Input,
  Label,
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
      <ErrorContainer>
        <ErrorIcon />
        <Error>{value}</Error>
      </ErrorContainer>
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
          errors.email && touched.email
            ? { main: '1px solid rgba(216, 0, 39, 1)' }
            : ''
        }
      />
      {errors.email && touched.email && errorRender(errors.email)}
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
          errors.password && touched.password
            ? { main: '1px solid rgba(216, 0, 39, 1)' }
            : ''
        }
      />
      {errors.password && touched.password && errorRender(errors.password)}
      <ButtonContainer>
        <Button disabled={isSubmitting} type="submit">
          Sign Up
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export { SignInForm };
