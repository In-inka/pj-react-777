import { ProductsContainer } from './ProductsList.styled';
import { ProductsItem } from '../ProductsItem/ProductsItem';
import { SearchNotResult } from '../SearchNotResult/SearchNotResult';

const ProductsList = ({ products }) => {
  return (
    <ProductsContainer>
      {products?.length > 0 ? (
        products.map((product) => {
          return <ProductsItem key={product._id} product={product} />;
        })
      ) : (
        <SearchNotResult />
      )}
    </ProductsContainer>
  );
};

export { ProductsList };
