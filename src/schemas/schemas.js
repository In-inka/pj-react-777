import * as yup from "yup";

const emailRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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

export const profileSettingsSchema = yup.object().shape({
  name: yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  height: yup.number()
    .min(150, 'Too Short!')
    .required('Required'),
  currentWeight: yup.number()
    .min(35, 'Too little weight')
    .required('Required'),
  desiredWeight: yup.number()
    .min(35, 'Too little weight')
    .required('Required'),
  birthday: yup.date().max(new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000)).required(),
  blood: yup.number()
    .oneOf([1,2,3,4])
    .required('Required'),
  sex: yup.string().oneOf(['male', 'female'])
    .required('Required'),
  levelActivity: yup.number()
    .oneOf([1,2,3,4,5])
    .required('Required'),
  });