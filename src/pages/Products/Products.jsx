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
import {
  selectIsLoadingProduct,
  selectProductsList,
} from '../../redux/products/selectorsProducts';
import Loading from '../../components/Loading/Loading';
import { productSlice } from '../../redux/products/sliceProducts';
import ReactPaginate from 'react-paginate';

const Products = () => {
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoadingProduct);
  const dispatch = useDispatch();
  const products = useSelector(selectProductsList);
  const limitPage = products.limit;
  const totalPage = Math.ceil(products.total / limitPage);
  const fetching = useCallback(
    (filterParams, page, limit) => {
      try {
        if (filterParams) {
          dispatch(getProductsList({ filterParams, page, limit }));
        } else {
          dispatch(getProductsList({ filterParams: {}, page, limit }));
        }
      } catch (error) {
        console.log(error);
      }
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

  const handlePageClick = (event) => {
    setPage(event.selected);
    console.log(localStorage.getItem('persist:products').filter);
    fetching({}, page, limitPage);
  };

  return (
    <Container>
      <ProductsFilterText>Filters</ProductsFilterText>
      <ProductsFunc>
        <ProductsTitle>Products</ProductsTitle>
        <ProductsFilter submit={fetching} />
      </ProductsFunc>
      {(!isLoading && products !== null) ? (
      <ProductsList products={products.products} />) : (<Loading />
      )}
    </Container>
  );
};

export default Products;
