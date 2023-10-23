import * as yup from "yup";

const emailRegular = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const emailErrorMessage = "Please enter a valid email";

export const signUpSchema = yup.object().shape({
  name: yup.string().required('Error name'),
  email: yup
    .string()
    .matches(emailRegular, { message: emailErrorMessage })
    .email(emailErrorMessage)
    .required('Error email'),
  password: yup.string().min(6).required('Error password'),
});

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegular, { message: emailErrorMessage })
    .email(emailErrorMessage)
    .required('Error email'),
  password: yup.string().min(6).required('Error password'),
});