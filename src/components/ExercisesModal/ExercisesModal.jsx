import {
  Backdrop,
  BoxContentExercises,
  BoxGif,
  BoxGifTimer,
  ButtonAddDiary,
  ButtonClose,
  FlexContainer,
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
import { useDispatch, useSelector } from 'react-redux';
import exercisesSelectors from '../../redux/exercises/exercisesSelectors';
import AddExercisesSuccess from '../AddExercisesSuccess/AddExercisesSuccess';
import diaryOperations from '../../redux/diary/diaryOperations';

const ExercisesModal = ({ data, onClose }) => {
  const exercises = data;
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(180);
  const [dinamicBurnCal, setDinamicBurnCal] = useState(0);
  const [modalOpenSecond, setModalOpenSecond] = useState(false);
  const [dataExercisesDone, setDataExercisesDone] = useState();
  const [modalOne, setModalOne] = useState(true);
  const dispatch = useDispatch();

  const burnedCalories = exercises.burnedCalories;

  const loading = useSelector(exercisesSelectors.getIsLoading);

  const toggleTimer = () => {
    setTimerIsRunning((prev) => !prev);
  };

  const exerciseComplete = () => {
    setModalOne(false);
    setModalOpenSecond(true);
    setDataExercisesDone(data);
  };

  const handleSubmit = async (even) => {
    even.preventDefault();
    if (timerIsRunning) {
      setTimerIsRunning(false);
    }

    const timesecond = exercises.time * 60 - remainingTime+1;
    const data = {
      exerciseId: exercises._id,
      burnedCalories: dinamicBurnCal,
      time: timesecond,
    };

    dispatch(diaryOperations.postDiaryExercise(data));
    setModalOne(false);
    setModalOpenSecond(true);
    setDataExercisesDone(data);
  };

  const { name, target, bodyPart } = exercises;
  const sliceText = (val) => {
    return val.slice(0, 10);
  }

  return (
    <Backdrop>
      {modalOpenSecond && !modalOne && (
        <AddExercisesSuccess
          onClose={onClose}
          data={dataExercisesDone}
          setModalOpenSecond={setModalOpenSecond}
        />
      )}

      {modalOne && (
        <ModalContainer onSubmit={handleSubmit}>
          {loading && <Loader />}

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
              toggleTimer={toggleTimer}
              timerIsRunning={timerIsRunning}
              setRemainingTime={setRemainingTime}
              setTimerIsRunning={setTimerIsRunning}
              remainingTime={remainingTime}
              handleSubmit={handleSubmit}
              exerciseComplete={exerciseComplete}
            />
          </BoxGifTimer>
          <BoxContentExercises>
            <FlexContainer>
              {' '}
              <ItemContentExercises>
                <ItemTitle>Name</ItemTitle>
                <ItemContent>{sliceText(name)}</ItemContent>
              </ItemContentExercises>
              <ItemContentExercises>
                <ItemTitle>Target</ItemTitle>
                <ItemContent>{sliceText(target)}</ItemContent>
              </ItemContentExercises>
            </FlexContainer>
            <FlexContainer>
              <ItemContentExercises>
                <ItemTitle>Target</ItemTitle>
                <ItemContent>{sliceText(target)}</ItemContent>
              </ItemContentExercises>
              <ItemContentExercises>
                <ItemTitle>Body Parts</ItemTitle>
                <ItemContent>{sliceText(bodyPart)}</ItemContent>
              </ItemContentExercises>
            </FlexContainer>
          </BoxContentExercises>
            <ButtonAddDiary type="submit" disabled={!dinamicBurnCal}>
              Add to diary
            </ButtonAddDiary>
        </ModalContainer>
      )}
    </Backdrop>
  );
};

export default ExercisesModal;
