// import React from 'react'
import {
  Backdrop,
  BoxContentExercises,
  BoxGif,
  BoxGifTimer,
  ButtonAddDiary,
  ButtonClose,
  GifExercises,
  IconClose,
  ItemContent,
  ItemContentExercises,
  ItemTitle,
  ModalContainer,
} from './ExercisesModal.styled';
import { useState } from 'react';
import sprite from '../../sprite/sprite.svg';
import Timer from '../Timer/Timer';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';
import exercisesSelectors from '../../redux/exercises/exercisesSelectors';

const ExercisesModal = ({ data, onClose }) => {
  const [dinamicBurnCal, setDinamicBurnCal] = useState(0);
  const exercises = data;
  const burnedCalories = exercises.burnedCalories;
  console.log('burnedCalories', burnedCalories)
  console.log('burnedCalories', dinamicBurnCal)
const loading = useSelector(exercisesSelectors.getIsLoading)

const handleSubmit = (ev)=>{
  ev.preventDefault()
  console.log('submit')
}


  return (
    <Backdrop>
      <ModalContainer onSubmit={handleSubmit}>
        {loading && <Loader/>}
   

        <ButtonClose type="button" onClick={onClose}>
          <IconClose>
            <use href={`${sprite}#icon-x`}></use>
          </IconClose>
        </ButtonClose>
        <BoxGifTimer>
          <BoxGif>
            <GifExercises src={exercises.gifUrl} alt="Gif-Exercises" />
          </BoxGif>
          <Timer
            setDinamicBurnCal={setDinamicBurnCal}
            dinamicBurnCal={dinamicBurnCal}
            burnedCalories={burnedCalories}
          />
        </BoxGifTimer>
        <BoxContentExercises>
          <ItemContentExercises>
            <ItemTitle>Name</ItemTitle>
            <ItemContent>{exercises.name}</ItemContent>
          </ItemContentExercises>
          <ItemContentExercises>
            <ItemTitle>Target</ItemTitle>
            <ItemContent>{exercises.target}</ItemContent>
          </ItemContentExercises>
          <ItemContentExercises>
            <ItemTitle>Target</ItemTitle>
            <ItemContent>{exercises.target}</ItemContent>
          </ItemContentExercises>
          <ItemContentExercises>
            <ItemTitle>Body Parts</ItemTitle>
            <ItemContent>{exercises.bodyPart}</ItemContent>
          </ItemContentExercises>
        </BoxContentExercises>
        <ButtonAddDiary type="submit" >Add to diary</ButtonAddDiary>
 
      </ModalContainer>
    </Backdrop>
  );
};

export default ExercisesModal;
