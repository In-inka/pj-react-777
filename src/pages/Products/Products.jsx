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
import { selectIsLoadingProduct, selectProductsList } from '../../redux/products/selectorsProducts';
import Loader from "../../components/Loader/Loader"
import Loading from '../../components/Loading/Loading';

const Products = () => {
  const isLoading = useSelector(selectIsLoadingProduct);
  const dispatch = useDispatch();
  const products = useSelector(selectProductsList)
  const fetching = useCallback( (filterParams) => {
    try {
      if (filterParams) {
         dispatch(getProductsList(filterParams));
      } else {
         dispatch(getProductsList());
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch])

  useEffect(() => {
    if (!localStorage.getItem("persist:products")) {
      fetching()
    }
  }, [fetching]);

  return (
    <Container>
      <ProductsFilterText>Filters</ProductsFilterText>
      <ProductsFunc>
        <ProductsTitle>Products</ProductsTitle>
        <ProductsFilter submit={fetching} />
      </ProductsFunc>
      {!isLoading && products !== null ?
        (<ProductsList products={products} />) :
        (<Loading />)}
    </Container>
  );
};

export default Products;
