import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useState } from 'react';
import {
  BurnedCalories,
  ButtonPause,
  IconPause,
  Number,
} from '../ExercisesModal/ExercisesModal.styled';
import sprite from '../../sprite/sprite.svg';

const Timer = ({ setDinamicBurnCal, dinamicBurnCal, setDinamicTime }) => {
  const [timerIsRunning, setTimerIsRunning] = useState(false);

  const toggleTimer = () => {
    if (timerIsRunning) {
      setTimerIsRunning(false);
    } else {
      setTimerIsRunning(true);
    }
  };

  const children = ({ remainingTime }) => {
    const duration = 120;

    setDinamicBurnCal(() => {
      const time = (duration - remainingTime) / duration;

      const burnCal = time * 300;
      return Math.round(burnCal);
    });

    setDinamicTime(() => duration - remainingTime);

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <CountdownCircleTimer
        colors={['#EF8964']}
        strokeWidth={2}
        size={124}
        isPlaying={timerIsRunning}
        duration={120}
        remainingTime={120}
      >
        {({ remainingTime }) => (
          <div style={{ color: '#fff' }} role="timer" aria-live="assertive">
            {children({ remainingTime })}
          </div>
        )}
      </CountdownCircleTimer>
      <div>
        <ButtonPause type="button" onClick={toggleTimer}>
          <IconPause>
            <use href={`${sprite}#icon-pause`}></use>
          </IconPause>
        </ButtonPause>
        <BurnedCalories>
          Burned calories: <Number>{dinamicBurnCal}</Number>
        </BurnedCalories>
      </div>
    </div>
  );
};

export default Timer;
