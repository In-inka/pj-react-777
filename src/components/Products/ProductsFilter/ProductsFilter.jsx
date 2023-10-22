import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterReducer } from '../../../redux/products/sliceProducts';
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

const optionsRec = [
  { value: 'all', label: 'All' },
  { value: 'recommended', label: 'Recommended ' },
  { value: 'notRecommended', label: 'Not recommended' },
];

const categories = [
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

export const ProductsFilter = () => {
  const dispatch = useDispatch();

  const capitalizeFirstLeter = (string) => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  return (
    <ProductsFilterList>
      <li>
        <ProductsFilterLabel>
          <ProductsFilterSearch
            value={search}
            onChange={onChangeSearch}
            name="productSearch"
            type="text"
            placeholder="Search"
          />
          <ProductsBtnClose onClick={delTextInput} type="button">
            <ProductsSvgClose>
              <use href={sprite + '#icon-x'}></use>
            </ProductsSvgClose>
          </ProductsBtnClose>
          <ProductsBtnSearch type="button">
            <ProductsSvgSearch>
              <use href={sprite + '#icon-search'}></use>
            </ProductsSvgSearch>
          </ProductsBtnSearch>
        </ProductsFilterLabel>
      </li>
      <li>
        <SelectWrapper>
          <Select
            styles={customStyles}
            value={category}
            onChange={onCategoriesChange}
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
            onChange={onRecomendedChange}
            value={recommended}
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
