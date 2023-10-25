import { ProductsFilter } from '../../components/ProductsFilter/ProductsFilter';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Container, ProductsTitle, ProductsFunc } from './Products.styled';

const Products = () => {
  return (
    <Container>
      <ProductsFunc>
        <ProductsTitle>Products</ProductsTitle>
        <ProductsFilter />
      </ProductsFunc>
      <ProductsList />
    </Container>
  );
};

export default Products;
