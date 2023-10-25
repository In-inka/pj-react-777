import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Container, ProductsTitle } from './Products.styled';
import { ProductsFilter } from '../../components/ProductsFilter/ProductsFilter';
const Products = () => {
  return (
    <Container>
      <ProductsTitle>Products</ProductsTitle>
      <ProductsList />
      <ProductsFilter />
    </Container>
  );
};

export default Products;
