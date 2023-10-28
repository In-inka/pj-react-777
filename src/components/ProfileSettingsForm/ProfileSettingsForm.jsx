// import { Formik } from 'formik';
import React, { useRef, useState } from 'react';
import { BloodRadio, 
    BoxBasicInfo, 
    BoxHeightWeightBirthday, 
    BoxInputData, 
    BoxItemInputs, 
    BoxLabelMarket, 
    BoxRadio, 
    BoxRadioSex, 
    ContainerBloodSex, 
    ContainerItemInputs, 
    ContainerRadio, 
    ContainerRadioActive, 
    DateInput, 
    EmailProfile,  
    FormProfile,  
    IconRadio,  
    InputProfile,  
    InputRadio,  
    InputSex,  
    LabelProfile,
    LabelProfileRadio, 
    RadioButton,
    RadioCheckmark,
    RadioContainer, 
    RadioLabel, 
    RadioLabelActive, 
    RadioWrapper   } from './ProfileSettingsForm.styled';
// import { Button } from '../SignUpForm.jsx/SignUpForm.styled';
import { useFormik } from 'formik';
import { Button } from '../Buttons/Button';
import { profileSettingsSchema } from '../../schemas/schemas';
import { DaySwitch } from '../DaySwitch/DaySwitch';
import "react-datepicker/dist/react-datepicker.css";
// import ReactDatePicker from 'react-datepicker';
import DatePicker from "react-datepicker";
import { CustomDatePickerInput, StyledCalendarContainer, StyledIcon } from '../DaySwitch/DaySwitch.styled';




const ProfileSettingsForm = () => {
   
    const [startDate, setStartDate] = useState(new Date());
    const numericMonthFormat = 'dd.MM.yyyy';
  
    const datepickerRef = useRef(null);
  
    // console.log('startDate', startDate)
    // console.log('startDate', datepickerRef)
    const {handleChange, handleSubmit, values, isSubmitting} = useFormik({
        initialValues: {
            name: "", 
            height: '',
            currentWeight:'',
            desiredWeight:'',
            birthday:'',
            blood:'',
            sex:'',
            levelActivity:''
        },
        isSubmitting: profileSettingsSchema,
        onSubmit: async(values, actions) => {
            await  new Promise((resolve) => setTimeout(resolve, 1000));
            // console.log('data', values)
            alert(JSON.stringify(values, null, 2));
            actions.resetForm();
        },

    })

    const validBirthday = (date)=>{
        const newDate= new Date()
        const validDate =  newDate.getFullYear() - date.getFullYear()
        const stringDate = validDate 
        
        // console.log('validDate', stringDate)
    }

    validBirthday(startDate)


    return (
		
		<div>

            <FormProfile onSubmit={handleSubmit}>
                <LabelProfile htmlFor='name'>
                    Basic info
                </LabelProfile>
                <BoxBasicInfo>
                    <InputProfile  
                        name="name" 
                        type="text"
                        id='name' 
                        onChange={handleChange} 
                        value={values.name} 
                    />
                    <EmailProfile>
                            example@example.com
                    </EmailProfile>
                </BoxBasicInfo>
                <BoxHeightWeightBirthday>
                    <ContainerItemInputs>
                        <BoxItemInputs>
                            <LabelProfile htmlFor='Height'>
                                    Height
                            </LabelProfile>
                            <InputProfile 
                                name="height" 
                                type="number" 
                                onChange={handleChange} 
                                value={values.height} 
                                placeholder='0'
                            />
                        </BoxItemInputs>
                        <BoxItemInputs>
                            <LabelProfile htmlFor='currentWeight'>
                                Current Weight
                            </LabelProfile>
                            <InputProfile 
                                name="currentWeight" 
                                type="number"
                                onChange={handleChange} 
                                value={values.currentWeight}
                                placeholder='0'
                            />
                        </BoxItemInputs>

                    </ContainerItemInputs>
                    <ContainerItemInputs>
                        <BoxItemInputs>
                            <LabelProfile htmlFor='desiredWeight'>
                                Desired Weight
                            </LabelProfile>
                            <InputProfile 
                                name="desiredWeight" 
                                type="number" 
                                onChange={handleChange} 
                                value={values.desiredWeight}
                                placeholder='0'
                            />
                        </BoxItemInputs>
                        <BoxItemInputs>
                            {/* <DaySwitch/> */}
                            <StyledCalendarContainer>

                                <BoxInputData>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
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
                                    onChange={handleChange} 
                                    value='1' 
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
                                        onChange={handleChange} 
                                        value='2'
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
                                        onChange={handleChange} 
                                        value='3'
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
                                        onChange={handleChange} 
                                        value='4'
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
                                            onChange={handleChange} 
                                            value='male'
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
                                            onChange={handleChange} 
                                            value='female'/>
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
                                        onChange={handleChange} 
                                        value='1'
                                    />
                                <RadioCheckmark></RadioCheckmark>
                                <RadioLabelActive>Sedentary lifestyle (little or no physical activity)</RadioLabelActive>
                                </RadioButton>
                            </RadioWrapper>
                            <RadioWrapper>
                                <RadioButton>
                                    <InputSex 
                                        name="levelActivity" 
                                        type="radio" 
                                        onChange={handleChange} 
                                        value='2'
                                    />
                                    <RadioCheckmark></RadioCheckmark>
                                    <RadioLabelActive>Light activity (light exercises/sports 1-3 days per week)</RadioLabelActive>
                                </RadioButton>
                            </RadioWrapper>
                            <RadioWrapper>
                                <RadioButton>
                                    <InputSex 
                                        name="levelActivity" 
                                        type="radio" 
                                        onChange={handleChange} 
                                        value='3'
                                    />
                                    <RadioCheckmark></RadioCheckmark>
                                    <RadioLabelActive>Moderately active (moderate exercises/sports 3-5 days per week)</RadioLabelActive>
                                </RadioButton>
                            </RadioWrapper>
                            <RadioWrapper>
                                <RadioButton>
                                    <InputSex 
                                        name="levelActivity" 
                                        type="radio" 
                                        onChange={handleChange} 
                                        value='4'
                                    />
                                    <RadioCheckmark></RadioCheckmark>
                                    <RadioLabelActive>Very active (intense exercises/sports 6-7 days per week)</RadioLabelActive>
                                </RadioButton>
                            </RadioWrapper>
                            <RadioWrapper>
                                <RadioButton>
                                    <InputSex 
                                        name="levelActivity" 
                                        type="radio" 
                                        onChange={handleChange} 
                                        value='5'
                                    />
                                    <RadioCheckmark></RadioCheckmark>
                                    <RadioLabelActive>Extremely active (very strenuous exercises/sports and physical work)</RadioLabelActive>
                                </RadioButton>
                            </RadioWrapper>
                        {/* </RadioContainer> */}
                </ContainerRadioActive>
                
                <Button disabled={isSubmitting} type="submit" text={"Save"} />
            </FormProfile>
                
        </div>

		
	)
}

export default ProfileSettingsForm 