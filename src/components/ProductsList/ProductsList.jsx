import { ProductsContainer } from './ProductsList.styled';
import { ProductsItem } from '../ProductsItem/ProductsItem';
import { SearchNotResult } from '../SearchNotResult/SearchNotResult';
import { useCallback, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoadingProduct,
  selectPage,
  selectTotal,
  selectProductsList,
} from '../../redux/products/selectorsProducts';
import AddProductForm from '../AddProductForm/AddProductForm';
import {
  nextPageReducer,
} from '../../redux/products/sliceProducts';
import { AddProductSuccess } from '../AddProductSuccess/AddProductSuccess';
import Loading from '../Loading/Loading';


const ProductsList = () => {
  let page = Number(useSelector(selectPage));
  const total = useSelector(selectTotal);
  const isLoading = useSelector(selectIsLoadingProduct);
  const products = useSelector(selectProductsList);

  const [modalMainIsOpen, setModalMainIsOpen] = useState(false);
  const [modalSecondIsOpen, setModalSecondIsOpen] = useState(false);


    const dispatch = useDispatch();

    const hasMore = total >= page * 50;

  const [productForAdd, setProductForAdd] = useState();
  const [calories, setCalories] = useState();


  const toggleModalMain = () => {
    setModalMainIsOpen(!modalMainIsOpen);
  }

    const toggleModalSecond = () => {
      setModalSecondIsOpen(!modalSecondIsOpen);
    };

  const observer = useRef();
  
  const lastProductElement = useCallback(
    (node) => {
      if (!hasMore) return
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          dispatch(nextPageReducer(page + 1));
        }
      });
      if (node) observer.current.observe(node);
    },
    [dispatch, hasMore, isLoading, page],
  );

  const addProductDetails = (product) => {
    setProductForAdd(product);
    setModalMainIsOpen(true);
  };

  const getCalories = (e) => {
    return setCalories(e);
  };

  return (
    <ProductsContainer>
      {modalMainIsOpen && (
        <AddProductForm
          product={productForAdd}
          getCalories={getCalories}
          onModal={toggleModalMain}
          onSecondModal={toggleModalSecond}
        />
      )}
      {modalSecondIsOpen && (
        <AddProductSuccess calories={calories} onModal={toggleModalSecond} />
      )}
      {products?.length > 0 ? (
        products.map((product, index) => {
          if (products.length === index + 1) {
            return (
              <ProductsItem
                rf={lastProductElement}
                key={nanoid()}
                product={product}
                addProductDetails={addProductDetails}
              />
            );
          }
          return (
            <div key={nanoid()}>
              <ProductsItem
                key={nanoid()}
                product={product}
                addProductDetails={addProductDetails}
              />
            </div>
          );
        })
      ) : !isLoading ? (
        <SearchNotResult />
      ) : (
          <Loading />
      )}
    </ProductsContainer>
  );
};

export { ProductsList };
