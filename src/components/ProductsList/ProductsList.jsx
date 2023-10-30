import { ProductsContainer } from './ProductsList.styled';
import { ProductsItem } from '../ProductsItem/ProductsItem';

const ProductsList = ({ products }) => {
  return (
    <ProductsContainer>
      {products?.length > 0 ?
        products.map((product) => {
          return <ProductsItem key={product._id} product={product} />;
        }) : <h1>No products</h1>}
    </ProductsContainer>
  );
};

export { ProductsList };
