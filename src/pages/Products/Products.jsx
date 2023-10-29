import { useEffect, useState } from 'react';
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
import { useSearchParams } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState(null);
  const isLoading = useSelector(selectIsLoadingProduct);
  const [searchParams] = useSearchParams({});
  const dispatch = useDispatch();
  const fetching = async (filterParams) => {
    try {
      if (filterParams) {
        if (filterParams.category === "categories") {
          filterParams.category = ""
        }
        if (filterParams.recommended === "all") {
          filterParams.recommended = ""
        }
        const { payload } = await dispatch(getProductsList(filterParams));
        setProducts(payload);
      } else {
        const { payload } = await dispatch(getProductsList());
        setProducts(payload);

      }
    } catch (error) {
      console.log(error);
    }
  }
    useEffect(() => {
      const props = Object.fromEntries(searchParams.entries());
      if (Object.values(props).some(value => value !== '')) {
        fetching(props);
      } else {
        fetching()
      }
    }, []);

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
