import { useCallback, useEffect, useRef, useState } from 'react';
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
  const [filterParams, setFilterParams] = useState({})
  const isLoading = useSelector(selectIsLoadingProduct);
  const products = useSelector(selectProductsList);
  const limitPage = products.limit;
  const totalPage = Math.ceil(products.total / limitPage);
  
  const dispatch = useDispatch();
  
  const innerRef = useRef();

  
  const getPageNumber = () => {
   setPage(); 
  }

  const handleSearch = ({ search, category, recommended }) => {
    setFilterParams({ search, category, recommended });
    setPage(1);
  };

  useEffect(() => {
      dispatch(getProductsList({ filterParams, page}));

  }, [dispatch, filterParams, page]);

  return (
    <Container>
      <ProductsFilterText>Filters</ProductsFilterText>
      <ProductsFunc>
        <ProductsTitle>Products</ProductsTitle>
        <ProductsFilter handleSearch={handleSearch} />
      </ProductsFunc>
      {!isLoading && products !== null ? (
        <>
          <ProductsList
            products={products.products}
            onScroll={getPageNumber}
            listInnerRef={innerRef}
          />
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Products;
