import sprite from '../../sprite/sprite.svg';    


export const LogoIcon = () => {
    
    return (
      <svg
        width={36}
        height={13}
        style={{ stroke: '#E6533C', fill: '#E6533C' }}
      >
        <use href={`${sprite}#icon-dumbbell-logo`}></use>
      </svg>
    );
}

