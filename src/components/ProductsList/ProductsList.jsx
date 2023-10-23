import { useState } from 'react';
import productsjs from './products.json';
import { ProductsContainer } from './ProductsList.styled';
import { ProductsItem } from '../ProductsItem/ProductsItem';

const ProductsList = () => {
  const [products] = useState(productsjs.slice(0, 100));

  return (
    <ProductsContainer>
      {products.map((product) => {
        return <ProductsItem key={product._id.$oid} product={product} />;
      })}
    </ProductsContainer>
  );
};

export { ProductsList };
