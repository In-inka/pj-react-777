// import React from 'react'
import {
  Backdrop,
  BoxContentExercises,
  BoxGif,
  BoxGifTimer,
  BoxTimer,
  ButtonAddDiary,
  ButtonClose,
  GifExercises,
  IconClose,
  ItemContent,
  ItemContentExercises,
  ItemTitle,
  ModalContainer,
  TextTime,
} from './ExercisesModal.styled';
import { useState } from 'react';
import sprite from '../../sprite/sprite.svg';
import Timer from '../Timer/Timer';

const ExercisesModal = ({ data, onClose, duration }) => {
  const [dinamicBurnCal, setDinamicBurnCal] = useState(0);
  const exercises = data;

  // console.log('data', data)
  return (
    <Backdrop>
      <ModalContainer>
        <ButtonClose type="button" onClick={onClose}>
          <IconClose>
            <use href={`${sprite}#icon-x`}></use>
          </IconClose>
        </ButtonClose>
        <BoxGifTimer>
          <BoxGif>
            <GifExercises src={exercises.gifUrl} alt="Gif-Exercises" />
          </BoxGif>
          <BoxTimer>
            <TextTime>Time</TextTime>

            <Timer
              setDinamicBurnCal={setDinamicBurnCal}
              dinamicBurnCal={dinamicBurnCal}
              duration={duration}
            />
          </BoxTimer>
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
        <ButtonAddDiary type="button">Add to diary</ButtonAddDiary>
      </ModalContainer>
    </Backdrop>
  );
};

export default ExercisesModal;
