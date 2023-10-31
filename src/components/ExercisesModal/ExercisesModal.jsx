// import React from 'react'
import {
  Backdrop,
  BoxContentExercises,
  BoxGif,
  BoxGifTimer,
  BoxTimer,
  BurnedCalories,
  ButtonAddDiary,
  ButtonClose,
  ButtonPause,
  GifExercises,
  IconClose,
  IconPause,
  ItemContent,
  ItemContentExercises,
  ItemTitle,
  ModalContainer,
  Number,
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
    <Backdrop onClick={onClose}>
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
            {/* <ButtonPause type="button">
              <IconPause>
                <use href={`${sprite}#icon-pause`}></use>
              </IconPause>
            </ButtonPause>
            <BurnedCalories>
              Burned calories: <Number>{exercises.burnedCalories}</Number>
            </BurnedCalories> */}
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
