import { useRef, useState } from 'react';
import {
  BloodRadio,
  BoxBasicInfo,
  BoxHeightWeightBirthday,
  BoxInputData,
  BoxItemInputs,
  BoxRadioSex,
  ContainerBloodSex,
  ContainerItemInputs,
  ContainerRadioActive,
  EmailProfile,
  FormProfile,
  InputProfile,
  InputSex,
  LabelProfile,
  RadioButton,
  RadioCheckmark,
  RadioContainer,
  RadioLabel,
  RadioLabelActive,
  RadioWrapper,
} from './ProfileSettingsForm.styled';
// import { Button } from '../SignUpForm.jsx/SignUpForm.styled';
import { useFormik } from 'formik';
import { Button } from '../Buttons/Button';
import 'react-datepicker/dist/react-datepicker.css';
// import ReactDatePicker from 'react-datepicker';
import DatePicker from 'react-datepicker';
import {
  CustomDatePickerInput,
  StyledCalendarContainer,
} from '../DaySwitch/DaySwitch.styled';
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

const ProfileSettingsForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  const numericMonthFormat = 'dd.MM.yyyy';

  const datepickerRef = useRef(null);

  // console.log('startDate', startDate)
  // console.log('startDate', datepickerRef)
  const formik = useFormik({
    initialValues: {
      name: '',
      height: '',
      currentWeight: '',
      desiredWeight: '',
      birthday: '',
      blood: '',
      sex: '',
      levelActivity: '',
    },
    onSubmit: async (values, actions) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('data', values);
      actions.resetForm();
    },
  });

  const validBirthday = (date) => {
    const newDate = new Date();
    const validDate = newDate.getFullYear() - date.getFullYear();
    console.log('validDate', validDate);
  };

  return (
    <div>
      <FormProfile onSubmit={formik.handleSubmit}>
        <LabelProfile htmlFor="name">Basic info</LabelProfile>
        <BoxBasicInfo>
          <InputProfile
            name="name"
            type="text"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <EmailProfile>example@example.com</EmailProfile>
        </BoxBasicInfo>
        <BoxHeightWeightBirthday>
          <ContainerItemInputs>
            <BoxItemInputs>
              <LabelProfile htmlFor="Height">Height</LabelProfile>
              <InputProfile
                name="height"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.height}
                placeholder="0"
              />
            </BoxItemInputs>
            <BoxItemInputs>
              <LabelProfile htmlFor="currentWeight">
                Current Weight
              </LabelProfile>
              <InputProfile
                name="currentWeight"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.currentWeight}
                placeholder="0"
              />
            </BoxItemInputs>
          </ContainerItemInputs>
          <ContainerItemInputs>
            <BoxItemInputs>
              <LabelProfile htmlFor="desiredWeight">
                Desired Weight
              </LabelProfile>
              <InputProfile
                name="desiredWeight"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.desiredWeight}
                placeholder="0"
              />
            </BoxItemInputs>
            <BoxItemInputs>
              {/* <DaySwitch/> */}
              <StyledCalendarContainer>
                <BoxInputData>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => validBirthday(date)}
                    dateFormat={numericMonthFormat}
                    customInput={<CustomDatePickerInput />}
                    ref={datepickerRef}
                  />
                </BoxInputData>
              </StyledCalendarContainer>
              {/* <InputProfile 
                                name="birthday" 
                                type="date" 
                                onChange={handleChange} 
                                value={values.birthday}
                                />
                                {(data)=>(console.log('data', data))} */}
            </BoxItemInputs>
          </ContainerItemInputs>
        </BoxHeightWeightBirthday>
        <BloodRadio>Blood</BloodRadio>
        <ContainerBloodSex>
          <RadioContainer>
            <RadioWrapper>
              <RadioButton>
                <InputSex
                  name="blood"
                  type="radio"
                  onChange={formik.handleChange}
                  value="1"
                />
                <RadioCheckmark></RadioCheckmark>
                <RadioLabel>1</RadioLabel>
              </RadioButton>
            </RadioWrapper>
            <RadioWrapper>
              <RadioButton>
                <InputSex
                  name="blood"
                  type="radio"
                  onChange={formik.handleChange}
                  value="2"
                />
                <RadioCheckmark></RadioCheckmark>
                <RadioLabel>2</RadioLabel>
              </RadioButton>
            </RadioWrapper>
            <RadioWrapper>
              <RadioButton>
                <InputSex
                  name="blood"
                  type="radio"
                  onChange={formik.handleChange}
                  value="3"
                />
                <RadioCheckmark></RadioCheckmark>
                <RadioLabel>3</RadioLabel>
              </RadioButton>
            </RadioWrapper>
            <RadioWrapper>
              <RadioButton>
                <InputSex
                  name="blood"
                  type="radio"
                  onChange={formik.handleChange}
                  value="4"
                />
                <RadioCheckmark></RadioCheckmark>
                <RadioLabel>4</RadioLabel>
              </RadioButton>
            </RadioWrapper>
          </RadioContainer>
          <RadioContainer>
            <BoxRadioSex>
              <RadioWrapper>
                <RadioButton>
                  <InputSex
                    name="sex"
                    type="radio"
                    onChange={formik.handleChange}
                    value="male"
                  />
                  <RadioCheckmark></RadioCheckmark>
                  <RadioLabel>Male</RadioLabel>
                </RadioButton>
              </RadioWrapper>
              <RadioWrapper>
                <RadioButton>
                  <InputSex
                    name="sex"
                    type="radio"
                    onChange={formik.handleChange}
                    value="female"
                  />
                  <RadioCheckmark></RadioCheckmark>
                  <RadioLabel>Female</RadioLabel>
                </RadioButton>
              </RadioWrapper>
            </BoxRadioSex>
          </RadioContainer>
        </ContainerBloodSex>

        <ContainerRadioActive>
          {/* <RadioContainer> */}
          <RadioWrapper>
            <RadioButton>
              <InputSex
                name="levelActivity"
                type="radio"
                onChange={formik.handleChange}
                value="1"
              />
              <RadioCheckmark></RadioCheckmark>
              <RadioLabelActive>
                Sedentary lifestyle (little or no physical activity)
              </RadioLabelActive>
            </RadioButton>
          </RadioWrapper>
          <RadioWrapper>
            <RadioButton>
              <InputSex
                name="levelActivity"
                type="radio"
                onChange={formik.handleChange}
                value="2"
              />
              <RadioCheckmark></RadioCheckmark>
              <RadioLabelActive>
                Light activity (light exercises/sports 1-3 days per week)
              </RadioLabelActive>
            </RadioButton>
          </RadioWrapper>
          <RadioWrapper>
            <RadioButton>
              <InputSex
                name="levelActivity"
                type="radio"
                onChange={formik.handleChange}
                value="3"
              />
              <RadioCheckmark></RadioCheckmark>
              <RadioLabelActive>
                Moderately active (moderate exercises/sports 3-5 days per week)
              </RadioLabelActive>
            </RadioButton>
          </RadioWrapper>
          <RadioWrapper>
            <RadioButton>
              <InputSex
                name="levelActivity"
                type="radio"
                onChange={formik.handleChange}
                value="4"
              />
              <RadioCheckmark></RadioCheckmark>
              <RadioLabelActive>
                Very active (intense exercises/sports 6-7 days per week)
              </RadioLabelActive>
            </RadioButton>
          </RadioWrapper>
          <RadioWrapper>
            <RadioButton>
              <InputSex
                name="levelActivity"
                type="radio"
                onChange={formik.handleChange}
                value="5"
              />
              <RadioCheckmark></RadioCheckmark>
              <RadioLabelActive>
                Extremely active (very strenuous exercises/sports and physical
                work)
              </RadioLabelActive>
            </RadioButton>
          </RadioWrapper>
          {/* </RadioContainer> */}
        </ContainerRadioActive>
        <Button type="submit" text={'Save'} />
      </FormProfile>
    </div>
  );
};

export default ProfileSettingsForm;
