import { useFormik } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import {
  BloodRadio,
  BoxBasicInfo,
  BoxHeightWeightBirthday,
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
  LabelBirthdate,
  DatePickerContainer,
} from './ProfileSettingsForm.styled';
import { StyledCalendarContainer } from '../DaySwitch/DaySwitch.styled';
import { Button } from '../Buttons/Button';
import operations from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { schema } from './schema/Schema';
import { toast } from 'react-toastify';
import { Icon } from '../UserCards/UserCards.styled';
import sprite from '../../sprite/sprite.svg';
import { CustomDatePicker } from '../CustomDatePicker/CustomDatePicker';
import { parseISO } from 'date-fns';

const ProfileSettingsForm = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const email = useSelector(authSelectors.getUserEmail);
  const {
    height,
    currentWeight,
    desiredWeight,
    blood,
    sex,
    levelActivity,
    birthday,
  } = useSelector(authSelectors.getUserMetricData);

  const onHandleDate = (date) => {
    const isoDate = date.toISOString();
    formik.setFieldValue('birthday', formatDateString(isoDate));
  };

  function formatDateString(dateString) {
    return dateString.slice(0, 10);
  }

  const formattedDate = formatDateString(birthday);

  const formik = useFormik({
    initialValues: {
      name: userName || '',
      height: height || '',
      currentWeight: currentWeight || '',
      desiredWeight: desiredWeight || '',
      birthday: formattedDate || '',
      blood: blood,
      sex: sex || '',
      levelActivity: levelActivity,
    },

    onSubmit: async (values) => {
      try {
        await schema.validate(values, { abortEarly: false });
        dispatch(operations.updateUserMetricsData(values));
        toast.success('Successful!');
      } catch (error) {
        const errorMessage = error.response
          ? error.response.data
          : error.message;
        toast.error(errorMessage);
      }
    },
  });
  return (
    <div>
      <FormProfile onSubmit={formik.handleSubmit}>
        <LabelProfile htmlFor="name">Basic info</LabelProfile>
        <BoxBasicInfo>
          <InputProfile
            className="name"
            name="name"
            type="text"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <EmailProfile>{email}</EmailProfile>
        </BoxBasicInfo>
        <BoxHeightWeightBirthday>
          <ContainerItemInputs>
            <BoxItemInputs>
              <LabelProfile htmlFor="Height">Height &#40;cm&#41;</LabelProfile>
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
                Current Weight &#40;kg&#41;
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
                Desired Weight &#40;kg&#41;
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
              <StyledCalendarContainer>
                <LabelBirthdate>Birthdate</LabelBirthdate>
                <DatePickerContainer>
                  <CustomDatePicker
                    selected={
                      birthday ? parseISO(formik.values.birthday) : Date.now()
                    }
                    onChange={onHandleDate}
                  />
                  <Icon width={18} height={18} className="stroke-white">
                    <use href={`${sprite}#icon-calendar`}></use>
                  </Icon>
                </DatePickerContainer>
              </StyledCalendarContainer>
            </BoxItemInputs>
          </ContainerItemInputs>
        </BoxHeightWeightBirthday>
        <BloodRadio>Blood group</BloodRadio>
        <ContainerBloodSex>
          <RadioContainer>
            <RadioWrapper>
              <RadioButton>
                <InputSex
                  checked={formik.values.blood === 1}
                  name="blood"
                  type="radio"
                  onChange={() => {
                    formik.setFieldValue('blood', 1);
                  }}
                  value={1}
                />
                <RadioCheckmark></RadioCheckmark>
                <RadioLabel>1</RadioLabel>
              </RadioButton>
            </RadioWrapper>
            <RadioWrapper>
              <RadioButton>
                <InputSex
                  checked={formik.values.blood === 2}
                  name="blood"
                  type="radio"
                  onChange={() => {
                    formik.setFieldValue('blood', 2);
                  }}
                  value={2}
                />
                <RadioCheckmark></RadioCheckmark>
                <RadioLabel>2</RadioLabel>
              </RadioButton>
            </RadioWrapper>
            <RadioWrapper>
              <RadioButton>
                <InputSex
                  checked={formik.values.blood === 3}
                  name="blood"
                  type="radio"
                  onChange={() => {
                    formik.setFieldValue('blood', 3);
                  }}
                  value={3}
                />
                <RadioCheckmark></RadioCheckmark>
                <RadioLabel>3</RadioLabel>
              </RadioButton>
            </RadioWrapper>
            <RadioWrapper>
              <RadioButton>
                <InputSex
                  checked={formik.values.blood === 4}
                  name="blood"
                  type="radio"
                  onChange={() => {
                    formik.setFieldValue('blood', 4);
                  }}
                  value={4}
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
                    checked={formik.values.sex === 'male'}
                    name="sex"
                    type="radio"
                    onChange={() => {
                      formik.setFieldValue('sex', 'male');
                    }}
                    value="male"
                  />
                  <RadioCheckmark></RadioCheckmark>
                  <RadioLabel>Male</RadioLabel>
                </RadioButton>
              </RadioWrapper>
              <RadioWrapper>
                <RadioButton>
                  <InputSex
                    checked={formik.values.sex === 'female'}
                    name="sex"
                    type="radio"
                    onChange={() => {
                      formik.setFieldValue('sex', 'female');
                    }}
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
          <RadioWrapper>
            <RadioButton htmlFor="levelActivity1">
              <InputSex
                id="levelActivity1"
                checked={formik.values.levelActivity === 1}
                name="levelActivity"
                type="radio"
                onChange={() => {
                  formik.setFieldValue('levelActivity', 1);
                }}
                value={1}
              />
              <RadioCheckmark></RadioCheckmark>
              <RadioLabelActive>
                Sedentary lifestyle (little or no physical activity)
              </RadioLabelActive>
            </RadioButton>
          </RadioWrapper>
          <RadioWrapper>
            <RadioButton htmlFor="levelActivity2">
              <InputSex
                id="levelActivity2"
                checked={formik.values.levelActivity === 2}
                name="levelActivity"
                type="radio"
                onChange={() => {
                  formik.setFieldValue('levelActivity', 2);
                }}
                value={2}
              />
              <RadioCheckmark></RadioCheckmark>
              <RadioLabelActive>
                Light activity (light exercises/sports 1-3 days per week)
              </RadioLabelActive>
            </RadioButton>
          </RadioWrapper>
          <RadioWrapper>
            <RadioButton htmlFor="levelActivity3">
              <InputSex
                id="levelActivity3"
                checked={formik.values.levelActivity === 3}
                name="levelActivity"
                type="radio"
                onChange={() => {
                  formik.setFieldValue('levelActivity', 3);
                }}
                value={3}
              />
              <RadioCheckmark></RadioCheckmark>
              <RadioLabelActive>
                Moderately active (moderate exercises/sports 3-5 days per week)
              </RadioLabelActive>
            </RadioButton>
          </RadioWrapper>
          <RadioWrapper>
            <RadioButton htmlFor="levelActivity4">
              <InputSex
                id="levelActivity4"
                checked={formik.values.levelActivity === 4}
                name="levelActivity"
                type="radio"
                onChange={() => {
                  formik.setFieldValue('levelActivity', 4);
                }}
                value={4}
              />
              <RadioCheckmark></RadioCheckmark>
              <RadioLabelActive>
                Very active (intense exercises/sports 6-7 days per week)
              </RadioLabelActive>
            </RadioButton>
          </RadioWrapper>
          <RadioWrapper>
            <RadioButton htmlFor="levelActivity5">
              <InputSex
                id="levelActivity5"
                checked={formik.values.levelActivity === 5}
                name="levelActivity"
                type="radio"
                onChange={() => {
                  formik.setFieldValue('levelActivity', 5);
                }}
                value={5}
              />

              <RadioCheckmark></RadioCheckmark>
              <RadioLabelActive>
                Extremely active (very strenuous exercises/sports and physical
                work)
              </RadioLabelActive>
            </RadioButton>
          </RadioWrapper>
        </ContainerRadioActive>
        <Button tp={'button'} text={'Save'} />
      </FormProfile>
    </div>
  );
};

export default ProfileSettingsForm;
