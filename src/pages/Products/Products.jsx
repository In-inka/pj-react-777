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

const Products = () => {
  const isLoading = useSelector(selectIsLoadingProduct);
  const dispatch = useDispatch();
  const products = useSelector(selectProductsList);
  const cuttedProductsList = products.slice(0, 100); // тимчасове рішення
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
    console.log(localStorage.getItem("persist:products"))
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
      {!isLoading && cuttedProductsList !== null ?
        (<ProductsList products={cuttedProductsList} />) :
        (<Loader cls={'yellowBtn'} />)}
    </Container>
  );
};

export default Products;
