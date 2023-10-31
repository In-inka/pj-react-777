import { ProductsContainer } from './ProductsList.styled';
import { ProductsItem } from '../ProductsItem/ProductsItem';
import { SearchNotResult } from '../SearchNotResult/SearchNotResult';
import AddProductForm from '../AddProductForm/AddProductForm';
import { useState } from 'react';

const ProductsList = ({ products }) => {
  const [productForAdd, setProductForAdd] = useState();

  const addProductDetails = (product) => {
    setProductForAdd(product);
  };

  return (
    <ProductsContainer>
      {productForAdd && (
        <AddProductForm product={productForAdd}>form</AddProductForm>
      )}
      {products?.length > 0 ? (
        products.map((product) => {
          return (
            <ProductsItem
              key={product._id}
              addProductDetails={addProductDetails}
              product={product}
            />
          );
        })
      ) : (
        <SearchNotResult />
      )}
    </ProductsContainer>
  );
};

export { ProductsList };
