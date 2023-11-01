import { ProductsContainer } from './ProductsList.styled';
import { ProductsItem } from '../ProductsItem/ProductsItem';
import { SearchNotResult } from '../SearchNotResult/SearchNotResult';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const ProductsList = ({ products, fetching }) => {
  const [ref, inView] = useInView({ threshold: 0 });
  const [page, setPage] = useState(2);

  useEffect(() => {
    if (inView) {
      setPage(page + 1);
      fetching({}, page, 50);
    }
  }, [fetching, inView]);

  return (
    <ProductsContainer>
      {products?.length > 0 ? (
        products.map((product) => {
          return <ProductsItem key={product._id} product={product} />;
        })
      ) : (
        <SearchNotResult />
      )}
      <div ref={ref} style={{ width: '300px', height: '20px' }}>
        {}
      </div>
    </ProductsContainer>
  );
};

export { ProductsList };
