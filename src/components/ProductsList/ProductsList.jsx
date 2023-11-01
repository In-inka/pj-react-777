import { ProductsContainer } from './ProductsList.styled';
import { ProductsItem } from '../ProductsItem/ProductsItem';
import { SearchNotResult } from '../SearchNotResult/SearchNotResult';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilter,
  selectIsLoadingProduct,
  selectModalOpen,
  selectPage,
  selectSuccessModal,
} from '../../redux/products/selectorsProducts';
import AddProductForm from '../AddProductForm/AddProductForm';
import { modalReducer, successModalReducer } from '../../redux/products/sliceProducts';
import { AddProductSuccess } from '../AddProductSuccess/AddProductSuccess';

const ProductsList = ({ products, fetching }) => {
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView({ threshold: 0 });

  const filterParams = useSelector(selectFilter);
  const isModalOpen = useSelector(selectModalOpen);
  const isLoading = useSelector(selectIsLoadingProduct);
  const refScroll = useRef();
    const pageStr = Number(useSelector(selectPage));

  const isSucessModalOpen = useSelector(selectSuccessModal);

  const dispatch = useDispatch();

  const [productForAdd, setProductForAdd] = useState();
  const [calories, setCalories] = useState();

  useEffect(() => {
    dispatch(successModalReducer.successcloseModal());
  }, [])

  const addProductDetails = (product) => {
    setProductForAdd(product);
    dispatch(modalReducer.openModal());
  };

    const scrollToBack = () => {
      const scrollHeight = refScroll.current.scrollHeight;
      refScroll.current.scrollTop = scrollHeight - scrollHeight * 0.2;
    };

  const getCalories = (e) => {
    return setCalories(e);
  }

  useEffect(() => {
    if (inView) {
      setPage(pageStr + 1);
      scrollToBack();
    }
    if (!isLoading && page !== pageStr) fetching(filterParams, page, 10);
  }, [inView]);

  return (
    <ProductsContainer ref={refScroll}>
      {isModalOpen && (
        <AddProductForm product={productForAdd} getCalories={getCalories} />
      )}
      {isSucessModalOpen && <AddProductSuccess calories={calories} />}
      {/* <AddProductSuccess calories={calories}/> */}
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
      ) : (
        <SearchNotResult />
      )}
      <div ref={ref} style={{ width: '300px', height: '15px' }}>
        {}
      </div>
    </ProductsContainer>
  );
};

export { ProductsList };
