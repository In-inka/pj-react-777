import { useMediaQuery } from "react-responsive";

export const useCustomStyles = () => {
    
const isMobile = useMediaQuery({ minWidth: 375 });
const isTablet = useMediaQuery({ minWidth: 769 });
const isDesktop = useMediaQuery({ minWidth: 1440 });
let height = '';
isMobile ? (height = '46px') : (height = '52px');
isTablet ? (height = '52px') : (height = '46px');
isDesktop ? (height = '52px') : (height = '46px');

return {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'trasparent', //window background
    height: height,
    borderStyle: 'none',
    appearance: 'none', //removing default appearance
    WebkitAppearance: 'none',
    MozAppearance: 'none',
  }),

  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    backgroundColor: isSelected
      ? 'rgba(28, 28, 28, 1)'
      : isFocused
      ? 'rgba(28, 28, 28, 1)'
      : 'rgba(28, 28, 28, 1)', //active option and hover background
    color: isSelected ? '#E6533C' : '#EFEDE8', //text color of the active option in the list
    marginBottom: '8px',

    '&:last-child': {
      marginBottom: '0',
    },
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: '12px',
    backgroundColor: 'rgba(28, 28, 28, 1)', //background for the list
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#EFEDE8', //text color of the active selector in the window
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: 'transparent', //divider color
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#EFEDE8',
  }),
  container: (provided) => ({
    ...provided,
    border: '1px solid rgba(239, 237, 232, 0.30)',
    borderRadius: '12px',
    outline: 'none',
  }),
  menuList: (base) => ({
    ...base,
    margin: '14px 7px',

    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(239, 237, 232, 0.10)',
      borderRadius: '12px',
    },
    overflowY: 'auto',
  }),
};

}
