import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  height: yup
    .number()
    .min(150, 'Height must be at least 150 cm')
    .required('Height is required'),
  currentWeight: yup
    .number()
    .min(35, 'Weight must be at least 35 kg')
    .required('Current weight is required'),
  desiredWeight: yup
    .number()
    .min(35, 'Weight must be at least 35 kg')
    .required('Desired weight is required'),
  birthday: yup
    .date()
    .max(
      new Date(
        new Date().getFullYear() - 18,
        new Date().getMonth(),
        new Date().getDate(),
      ),
      'Must be at least 18 years old',
    )
    .required('Birthday is required'),
  blood: yup
    .number()
    .oneOf([1, 2, 3, 4], 'Invalid blood type')
    .required('Blood type is required'),
  sex: yup
    .string()
    .oneOf(['male', 'female'], 'Invalid gender')
    .required('Gender is required'),
  levelActivity: yup
    .number()
    .oneOf([1, 2, 3, 4, 5], 'Invalid activity level')
    .required('Activity level is required'),
});

export { schema };
