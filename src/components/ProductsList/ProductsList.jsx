import { ProductsContainer } from './ProductsList.styled';
import diarySelectors from '../../redux/diary/diarySelectors'
import { ProductsItem } from '../ProductsItem/ProductsItem';
import { SearchNotResult } from '../SearchNotResult/SearchNotResult';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilter,
  selectIsLoadingProduct,
  selectPage,
  selectTotal,
  selectModalOpen,
  selectSuccessModal,

} from '../../redux/products/selectorsProducts';
import AddProductForm from '../AddProductForm/AddProductForm';
import { modalReducer } from '../../redux/products/sliceProducts';
import { toast } from 'react-toastify';
import { AddProductSuccess } from '../AddProductSuccess/AddProductSuccess';

const ProductsList = ({ products, fetching }) => {
  const pageStr = Number(useSelector(selectPage));
  const total = useSelector(selectTotal);
  const [ref, inView] = useInView({ threshold: 0 });
  
  const filterParams = useSelector(selectFilter);
  const isModalOpen = useSelector(selectModalOpen);
  const isLoading = useSelector(selectIsLoadingProduct);
  const refScroll = useRef();
  const isSucessModalOpen = useSelector(selectSuccessModal);
  const dispatch = useDispatch();
  const [productForAdd, setProductForAdd] = useState();
  const [calories, setCalories] = useState();


  const addProductDetails = (product) => {
    setProductForAdd(product);
    dispatch(modalReducer.openModal());
  };

  const scrollToBack = () => {
    const scrollHeight = refScroll.current.scrollHeight;
    refScroll.current.scrollTop = scrollHeight - scrollHeight*0.15;
    };

  const getCalories = (e) => {
    return setCalories(e);
  }

  const diary = useSelector(diarySelectors.getDiary);
  const dataProductsArr = diary.eatenProducts;
 
  useEffect(() => {
     if (!isLoading && inView && total >= pageStr * 50) {
      scrollToBack(); fetching(filterParams, pageStr + 1, 50);
    }

  }, [inView]);
  
  return (
    <ProductsContainer ref={ refScroll }>
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
      ) : (<SearchNotResult />      
      )}
      <div ref={ref} style={{ width: '300px', height: '15px' }}>
        {}
      </div>
    </ProductsContainer>
  );
};

export { ProductsList };
