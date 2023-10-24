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
  birthday: yup.date()
    .required('Birthday is required')
    .test('is-adult', 'You must be 18 or older', function (value) {
      console.log('first', value)
      
      // ось  тут ти матимеш поточну обрану дату народження та зможеш сформувати поточну дату. треба буде вирахувати різницю і скільки ця різниця містить повних років
    }),
  blood: yup.number()
    .oneOf([1,2,3,4])
    .required('Required'),
  sex: yup.string().oneOf(['male', 'female'])
    .required('Required'),
  levelActivity: yup.number()
    .oneOf([1,2,3,4,5])
    .required('Required'),
  });