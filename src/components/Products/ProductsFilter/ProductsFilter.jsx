import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

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

return (

)
};
