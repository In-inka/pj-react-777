import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useState, useEffect } from 'react';
import {
  BurnedCalories,
  ButtonPause,
  IconPause,
  Number,
} from '../ExercisesModal/ExercisesModal.styled';
import sprite from '../../sprite/sprite.svg';

const Timer = ({ setDinamicBurnCal, duration }) => {
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const toggleTimer = () => {
    setTimerIsRunning((prev) => !prev);
  };

  useEffect(() => {
    if (timerIsRunning) {
      const timerInterval = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000);

      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [timerIsRunning]);

  const calculateBurnedCalories = (timeElapsed) => {
    const caloriesBurnedPerMinute = 100; //тут треба підставляти калорії динамічно в залежності від обраної вправи і ділити на 180 сек (3 хвилини), щоб отримати кіл-ть калорій спалених за 1 хв.
    const burnedCalories = Math.round(
      (timeElapsed / 60) * caloriesBurnedPerMinute,
    );
    setDinamicBurnCal(burnedCalories);
    return burnedCalories;
  };

  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed % 60;

  return (
    <div>
      <CountdownCircleTimer
        colors={['#EF8964']}
        strokeWidth={2}
        size={124}
        isPlaying={timerIsRunning}
        duration={duration}
        initialRemainingTime={0}
      >
        {() => (
          <div style={{ color: '#fff' }} role="timer" aria-live="assertive">
            {`${minutes}:${seconds}`}
          </div>
        )}
      </CountdownCircleTimer>
      <div>
        <ButtonPause type="button" onClick={toggleTimer}>
          <IconPause>
            <use
              href={
                timerIsRunning ? `${sprite}#icon-pause` : `${sprite}#icon-play`
              }
            ></use>
          </IconPause>
        </ButtonPause>
        <BurnedCalories>
          Burned calories:{' '}
          <Number>{calculateBurnedCalories(timeElapsed)}</Number>
        </BurnedCalories>
      </div>
    </div>
  );
};

export default Timer;
