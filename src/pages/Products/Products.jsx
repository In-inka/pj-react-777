import { useCallback, useEffect } from 'react';
import { ProductsFilter } from '../../components/ProductsFilter/ProductsFilter';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import {
  Container,
  ProductsTitle,
  ProductsFunc,
  ProductsFilterText,
} from './Products.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from '../../redux/products/operationsProducts';
import {
  selectProductsList,
} from '../../redux/products/selectorsProducts';
import { productSlice, resetListReducer } from '../../redux/products/sliceProducts';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsList);


  useEffect(() => {
     dispatch(resetListReducer());
  }, []);

  const fetching = useCallback(
    (filterParams, page, limit) => {
    dispatch(getProductsList({ filterParams, page, limit }));
    },
    [dispatch],
  );

  useEffect(() => {
    if (
      localStorage.getItem('persist:products').filter ===
      productSlice.getInitialState().filter
    ) {
      fetching();
    }
  }, [fetching]);

  return (
    <Container>
      <ProductsFilterText>Filters</ProductsFilterText>
      <ProductsFunc>
        <ProductsTitle>Products</ProductsTitle>
        <ProductsFilter submit={fetching} />
      </ProductsFunc>
      {
        <ProductsList products={products} fetching={fetching} />
      }
    </Container>
  );
};

export default Products;
