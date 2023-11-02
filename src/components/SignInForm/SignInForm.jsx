import { useFormik } from 'formik';
import {
  ButtonContainer,
  Error,
  MessageContainer,
  ErrorIcon,
  Form,
  Input,
  Label,
  SuccessIcon,
  Success,
  GoogleSignLink,
  GoogleIcon,
  LinkContainer,
  InputsContainer,
} from './SignInForm.styled';
import { signInSchema } from '../../schemas/schemas';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/auth/operations';
import Loader from '../Loader/Loader';
import authSelectors from '../../redux/auth/auth-selectors';
import { Button } from '../Buttons/Button';
import sprite from '../../sprite/sprite.svg';

const SignInForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getIsLoading);

  const onSubmit = async (values, actions) => {
    dispatch(operations.logIn(values));
    actions.resetForm();
  };

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
        <ErrorIcon>
          <use href={`${sprite}#icon-error`}></use>
        </ErrorIcon>

        <Error>{value}</Error>
      </MessageContainer>
    );
  };

  const SuccessRender = (value) => {
    return (
      <MessageContainer>
        <SuccessIcon>
          <use href={`${sprite}#icon-successes`}></use>
        </SuccessIcon>
        <Success>Success {value}</Success>
      </MessageContainer>
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputsContainer>
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
      </InputsContainer>
      <ButtonContainer>
        {isLoading ? (
          <Loader cls={'yellowBtn'} />
        ) : (
          <Button disabled={isSubmitting} type="submit" text={'Sign In'} />
        )}
        {isLoading? <></>:<LinkContainer>
          <GoogleSignLink to="https://power-pulse-rh13.onrender.com/api/users/googleAuth">
            Login
            <GoogleIcon className="setG">
              <use href={`${sprite}#icon-google`}></use>
            </GoogleIcon>
          </GoogleSignLink>
        </LinkContainer>}
      </ButtonContainer>
    </Form>
  );
};

export { SignInForm };
