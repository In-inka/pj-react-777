import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import sprite from '../../sprite/sprite.svg';
import {
  ProductsFilterLabel,
  ProductsFilterSearch,
  ProductsBtnClose,
  ProductsSvgClose,
  ProductsBtnSearch,
  ProductsSvgSearch,
  SelectWrapper,
  ProductsFilterList,
} from './ProductsFilter.styled';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterReducer } from '../../redux/products/sliceProducts';
import { selectFilter } from '../../redux/products/selectorsProducts';

const optionsRec = [
  { value: '', label: 'All' },
  { value: 'true', label: 'Recommended ' },
  { value: 'false', label: 'Not recommended' },
];

const categories = [
  '',
  'alcoholic drinks',
  'berries',
  'cereals',
  'dairy',
  'dried fruits',
  'eggs',
  'fish',
  'flour',
  'fruits',
  'meat',
  'mushrooms',
  'nuts',
  'oils and fats',
  'poppy',
  'sausage',
  'seeds',
  'sesame',
  'soft drinks',
  'vegetables and herbs',
];

export const ProductsFilter = ({ submit }) => {
  const capitalizeFirstLeter = (string) => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  const categoriesList = categories?.map((elem) => ({
    value: elem,
    label: capitalizeFirstLeter(elem) || 'All',
  }));

  const isMobile = useMediaQuery({ minWidth: 375 });
  const isTablet = useMediaQuery({ minWidth: 769 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  let height = '';
  isMobile ? (height = '46px') : (height = '52px');
  isTablet ? (height = '52px') : (height = '46px');
  isDesktop ? (height = '52px') : (height = '46px');

  const customStyles = {
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

  const [searchParams, setSearchParams] = useSearchParams({});
  const filter = useSelector(selectFilter)
  const [search, setSearch] = useState(filter.search)
  const [category, setCategory] = useState(filter.category)
  const [recommended, setRecommended] = useState(filter.recommended)
  const dispatch = useDispatch()

  const onChangeSearch =  (event) => {
    const text = event.target.value;
    setSearch(text)
     dispatch(filterReducer({
      search: text,
      category,
      recommended
    }))
    setSearchParams({
      search: text,
      category: category || "all",
      recommended: recommended || 'all'
    })
  };

  const onCategoriesChange =  (event) => {
    setCategory(event.value)
     setSearchParams({
      search,
      category: event.value || 'all',
      recommended: recommended || "all"
    })
     dispatch(filterReducer({
      search,
      category: event.value,
      recommended
    }))
    submit({
      search,
      category: event.value,
      recommended
    })
  };

  const onRecomendedChange =  (event) => {
    setSearchParams({
      search,
      category: category || 'all',
      recommended: event.value || 'all'
    })
    setRecommended(event.value)
     dispatch(filterReducer({
      search,
      category,
      recommended: event.value
    }))
    submit({
      search,
      category,
      recommended: event.value
    })
  };

  const delTextInput =  () => {
    setSearch('')
     dispatch(filterReducer({
      search: '',
      category,
      recommended
    }))
    setSearchParams({
      search: '',
      category: category || 'all',
      recommended: recommended || "all"
    })
  };

  const onSubmit = () => {
    submit({
      search,
      category: category,
      recommended: recommended
    })
  }

  const onEnter = (event) => {
    if (event.key === "Enter") {
      onSubmit()
    }
  }

  return (
    <ProductsFilterList>
      <li>
        <ProductsFilterLabel>
          <ProductsFilterSearch
            value={search}
            onChange={onChangeSearch}
            onKeyUp={onEnter}
            name="productSearch"
            type="text"
            placeholder="Search"
          />
          {search && <ProductsBtnClose onClick={delTextInput} type="button">
            <ProductsSvgClose>
              <use href={`${sprite}#icon-x`}></use>
            </ProductsSvgClose>
          </ProductsBtnClose>
          }
          <ProductsBtnSearch onClick={onSubmit} type="button">
            <ProductsSvgSearch>
              <use href={`${sprite}#icon-search`}></use>
            </ProductsSvgSearch>
          </ProductsBtnSearch>
        </ProductsFilterLabel>
      </li>
      <li>
        <SelectWrapper>
          <Select
            styles={customStyles}
            isSearchable={false}
            onChange={onCategoriesChange}
            value={categoriesList.find((item) => item.value === category)}
            placeholder="Categories"
            options={categoriesList || []}
            theme={(theme) => ({
              ...theme,

              colors: {
                ...theme.colors,
                primary_bcwycos: 'rgba(255, 255, 255, 0.10)', //background color when you click on select in the menu
                primary: 'transparent',
                neutral_bh: '#EFEDE8', //bird hover
                neutral_db: 'transparent', //default border
                neutral_dhb: 'transparent', //default hover border
                neutral_pc: 'rgba(239, 237, 232, 1)', //placeholder color
                neutral_n: 'rgba(239, 237, 232, 1)',
              },
            })}
          />
        </SelectWrapper>
      </li>
      <li>
        <SelectWrapper>
          <Select
            styles={customStyles}
            isSearchable={false}
            value={optionsRec.find((item) => item.value === recommended)}
            onChange={onRecomendedChange}
            theme={(theme) => ({
              ...theme,

              colors: {
                ...theme.colors,
                primary_bcwycos: 'rgba(255, 255, 255, 0.10)',
                primary: 'transparent',
                neutral_bh: '#EFEDE8',
                neutral_db: 'transparent',
                neutral_dhb: 'transparent',
                neutral_pc: 'rgba(239, 237, 232, 1)',
                neutral_n: 'rgba(239, 237, 232, 1)',
              },
            })}
            options={optionsRec}
          />
        </SelectWrapper>
      </li>
    </ProductsFilterList>
  );
};
