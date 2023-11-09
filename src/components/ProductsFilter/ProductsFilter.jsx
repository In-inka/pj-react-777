import Select from 'react-select';
import { DebounceInput } from 'react-debounce-input';

import sprite from '../../sprite/sprite.svg';
import {
  ProductsFilterLabel,
  ProductsBtnClose,
  ProductsSvgClose,
  ProductsSvgSearch,
  SelectWrapper,
  ProductsFilterList,
  InputSearch,
  FlexContainer,
} from './ProductsFilter.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {resetListReducer,
} from '../../redux/products/sliceProducts';
import { optionsRec, categories } from './ProductOptions/ProductOptions';
import { getProductsList } from '../../redux/products/operationsProducts';
import { selectPage, selectProductsList } from '../../redux/products/selectorsProducts';
import { useCustomStyles } from '../../Styled/ProductStyles';


export const ProductsFilter = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [recommended, setRecommended] = useState("");

  const customStyles = useCustomStyles();

  let page = Number(useSelector(selectPage));
  const products = useSelector(selectProductsList);
  
  const dispatch = useDispatch();
  
    useEffect(() => {
      if (products.length > 0) {
        dispatch(resetListReducer());
      }
    }, []);

  const capitalizeFirstLeter = (string) => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  const categoriesList = categories?.map((elem) => ({
    value: elem,
    label: capitalizeFirstLeter(elem) || 'All',
  }));

  const recommendedSet = (e) => {
      setRecommended(e.value);
  };

  const categoriesSet = (e) => {
    setCategory(e.value);
  }

    const searchSet = (e) => {
      setSearch(e.target.value);
  };
  
    useEffect(() => {
      search, category, recommended,
        dispatch(resetListReducer());
    }, [category, dispatch, recommended, search]);


  useEffect(() => {
      const filterParams = {
        search,
        category,
        recommended,
      };
    dispatch(getProductsList({filterParams, page} ));
  }, [category, dispatch, page, recommended, search])
  
  const delTextInput = () => {
    setSearch('');
  };


  return (
    <ProductsFilterList>
      <ProductsFilterLabel>
        <DebounceInput
          element={InputSearch}
          value={search}
          debounceTimeout={500}
          onChange={searchSet}
          name="productSearch"
          type="text"
          placeholder="Search"
        />
        {search && (
          <ProductsBtnClose onClick={delTextInput} type="button">
            <ProductsSvgClose>
              <use href={`${sprite}#icon-x`}></use>
            </ProductsSvgClose>
          </ProductsBtnClose>
        )}
          <ProductsSvgSearch>
            <use href={`${sprite}#icon-search`}></use>
          </ProductsSvgSearch>
      </ProductsFilterLabel>
      <FlexContainer>
        <SelectWrapper>
          <Select
            styles={customStyles}
            isSearchable={false}
            onChange={categoriesSet}
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
        <SelectWrapper>
          <Select
            styles={customStyles}
            isSearchable={false}
            value={optionsRec.find((item) => item.value === recommended)}
            onChange={recommendedSet}
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
      </FlexContainer>
    </ProductsFilterList>
  );
};
