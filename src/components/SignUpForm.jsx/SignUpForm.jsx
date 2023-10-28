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
} from './SignUpForm.styled';
import { signUpSchema } from '../../schemas/schemas';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/auth/operations';
import authSelectors from '../../redux/auth/auth-selectors';
import Loader from '../Loader/Loader';


const SignUpForm = () => {
  const dispatch = useDispatch();

    const isLoading = useSelector(authSelectors.getIsLoading);


  const onSubmit = (values, actions) => {
    dispatch(operations.register(values));   
    actions.resetForm();
  };
  
  
  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit,
  });

  const errorRender = (value) => {
    return <MessageContainer> <ErrorIcon />
      <Error>{value}</Error>
    </MessageContainer>
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
      <Label htmlFor="name">Name</Label>
      <Input
        value={values.name}
        onChange={handleChange}
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        onBlur={handleBlur}
        theme={
          touched.name &&
          (errors.name
            ? { main: 'rgba(216, 0, 39, 1)' }
            : { main: 'rgba(60, 191, 97, 1)' })
        }
      />
      {touched.name &&
        (errors.name ? errorRender(errors.name) : SuccessRender('name'))}{' '}
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
        (errors.email
          ? errorRender(errors.email)
          : SuccessRender('email'))}{' '}
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
          : SuccessRender('password'))}{' '}
      <ButtonContainer>
        {isLoading ? (
          <Loader />
        ) : (
          <Button disabled={isSubmitting} type="submit">
            Sign Up
          </Button>
        )}
      </ButtonContainer>
    </Form>
  );
};

export { SignUpForm };
