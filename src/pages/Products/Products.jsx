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
import { selectFilter, selectIsLoadingProduct, selectProductsList } from '../../redux/products/selectorsProducts';
import Loader from "../../components/Loader/Loader"

const Products = () => {
  const isLoading = useSelector(selectIsLoadingProduct);
  const dispatch = useDispatch();
  const products = useSelector(selectProductsList)
  const filter = useSelector(selectFilter)
  const fetching = useCallback(async (filterParams) => {
    try {
      if (filterParams) {
        await dispatch(getProductsList(filterParams));
      } else {
        await dispatch(getProductsList());
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch])

  useEffect(() => {
    if (filter.search === '' && filter.category === '' && filter.recommended === '') {
      fetching()
    }
  }, [fetching, filter]);

  return (
    <Container>
      <ProductsFilterText>Filters</ProductsFilterText>
      <ProductsFunc>
        <ProductsTitle>Products</ProductsTitle>
        <ProductsFilter submit={fetching} />
      </ProductsFunc>
      {!isLoading && products !== null ?
        (<ProductsList products={products} />) :
        (<Loader cls={'yellowBtn'} />)}
    </Container>
  );
};

export default Products;
