export const PrimaryButton = ({ text, onClick, width, height }) => {
  const buttonStyle = {
    color: '#EFEDE8',
    backgroundColor: '#E6533C',
    borderColor: 'transparent',
    borderRadius: '12px',
    width: width,
    height: height,
  };

  return (
    <button className="primaryButton" style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export const SecondaryButton = ({ text, onClick, width, height }) => {
  const buttonStyle = {
    color: '#EFEDE8',
    backgroundColor: 'transparent',
    borderColor: '#EFEDE84D',
    borderRadius: '12px',
    width: width,
    height: height,
  };

  return (
    <button className="secondaryButton" style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};
