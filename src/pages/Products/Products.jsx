import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Container, ProductsTitle } from './Products.styled';

const Products = () => {
  return (
    <Container>
      <ProductsTitle>Products</ProductsTitle>
      <ProductsList />
    </Container>
  );
};

export default Products;
