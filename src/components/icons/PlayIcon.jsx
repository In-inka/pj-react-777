import sprite from '../../sprite/sprite.svg';


export const PlayIcon = () => {
  return (
    <svg style={{ stroke: '##EFEDE8', fill: '#ef8964' }}>
      <use href={`${sprite}#icon-play`}></use>
    </svg>
  );
};
