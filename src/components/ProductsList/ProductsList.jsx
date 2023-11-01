import { ProductsContainer } from './ProductsList.styled';
import { ProductsItem } from '../ProductsItem/ProductsItem';
import { SearchNotResult } from '../SearchNotResult/SearchNotResult';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import {
  selectFilter,
  selectIsLoadingProduct,
  selectPage,
  selectTotal,
} from '../../redux/products/selectorsProducts';
import AddProductForm from '../AddProductForm/AddProductForm';

const ProductsList = ({ products, fetching, totalPage }) => {
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView({ threshold: 0 });
  
  const filterParams = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoadingProduct);
  const refScroll = useRef();
  const flagScroll = useRef(true);
  const [productForAdd, setProductForAdd] = useState();
  const pageStr = Number(useSelector(selectPage));
  const total = useSelector(selectTotal);
  
  
  const addProductDetails = (product) => {
    setProductForAdd(product);
  };

  const scrollToBack = () => {
    const scrollHeight = refScroll.current.scrollHeight;
    refScroll.current.scrollTop = scrollHeight - scrollHeight*0.2;
    };
    
  useEffect(() => {
    if (inView) { setPage(pageStr + 1); scrollToBack();}
    if (!isLoading && page!==pageStr) fetching(filterParams, page, 10);
   
  }, [inView]);
  
  return (
    <ProductsContainer ref={ refScroll }>
      {productForAdd && (
        <AddProductForm product={productForAdd}>form</AddProductForm>
      )}
      {products?.length > 0 ? (
        products.map((product) => {
          return (
            <ProductsItem
              key={nanoid()}
              product={product}
              addProductDetails={addProductDetails}
            />
          );
        })
      ) : (<SearchNotResult />      
      )}
      <div ref={ref} style={{ width: '300px', height: '15px' }}>
        {}
      </div>
    </ProductsContainer>
  );
};

export { ProductsList };
