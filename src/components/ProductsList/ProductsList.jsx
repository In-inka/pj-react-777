import { ProductsContainer } from './ProductsList.styled';
import { ProductsItem } from '../ProductsItem/ProductsItem';
import { SearchNotResult } from '../SearchNotResult/SearchNotResult';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { selectFilter, selectIsLoadingProduct } from '../../redux/products/selectorsProducts';

const ProductsList = ({ products, fetching, totalPage }) => {
  const [ref, inView] = useInView({ threshold: 0 });
  const [page, setPage] = useState(2);
  const filterParams = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoadingProduct);
  
  useEffect(() => {
    if (inView && !isLoading) {
      
      setPage(page + 1);
      fetching(filterParams, page, 10);
    }
  }, [fetching, inView, isLoading]);
// product._id
  return (
    <ProductsContainer>
      {products?.length > 0 ? (
        products.map((product) => {
          return <ProductsItem key={nanoid()} product={product} />;
        })
      ) : (
        <SearchNotResult />
      )}
      <div ref={ref} style={{ width: '300px', height: '15px' }}>
        {}
      </div>
    </ProductsContainer>
  );
};

export { ProductsList };
