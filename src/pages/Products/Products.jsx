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
  selectIsLoadingProduct,
  selectProductsList,
} from '../../redux/products/selectorsProducts';
import Loading from '../../components/Loading/Loading';
import { productSlice, resetListReducer } from '../../redux/products/sliceProducts';
import authSelectors from '../../redux/auth/auth-selectors';

const Products = () => {
  const isLoading = useSelector(selectIsLoadingProduct);
  const dispatch = useDispatch();
  const products = useSelector(selectProductsList);
    const isFetchCurrentUser = useSelector(
      authSelectors.getIsFetchingCurrentUser,
    );

  const page = products.page;
  const limitPage = products.limit;
  const totalPage = Math.ceil(products.total / limitPage);

   useEffect(() => {
     dispatch(resetListReducer());
   }, []);

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
