import { TimerProgress, TimerProgressCircle } from './Circle.styled';

const Circle = () => {
  return (
    <div>
      <TimerProgress viewBox="0 0 220 220">
        <TimerProgressCircle cx="110" cy="110" r="105"></TimerProgressCircle>
        <circle cx="110" cy="110" r="105"></circle>
      </TimerProgress>
    </div>
  );
};

export default Circle;
