import { useCallback, useEffect, useState } from 'react';
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
import { selectIsLoadingProduct } from '../../redux/products/selectorsProducts';
import Loader from "../../components/Loader/Loader"

const Products = () => {
  const [products, setProducts] = useState(null);
  const isLoading = useSelector(selectIsLoadingProduct)
  const dispatch = useDispatch()
  const cashedFetching = useCallback(async () => {
    try {
      const { payload } = await dispatch(getProductsList())
      setProducts(payload)

    } catch (error) {
      console.log(error)
    }
  }, [dispatch])

  useEffect(() => {
    cashedFetching()
  }, [cashedFetching])
  return (
    <Container>
      <ProductsFilterText>Filters</ProductsFilterText>
      <ProductsFunc>
        <ProductsTitle>Products</ProductsTitle>
        <ProductsFilter filtered={setProducts} />
      </ProductsFunc>
      {!isLoading && products !== null ?
        (<ProductsList products={products} />) :
        (<Loader cls={'yellowBtn'} />)}
    </Container>
  );
};

export default Products;
