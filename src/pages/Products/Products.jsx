import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Container } from './Products.styled';

const Products = () => {
  return (
    <Container>
      <p>Products</p>
      <ProductsList />
    </Container>
  );
};

export { Products };
