import { Field, Form, Formik } from 'formik';
import {
  Backdrop,
  ButtonAddDiary,
  ButtonCancel,
  ButtonClose,
  ContainerInput,
  FirstInput,
  IconClose,
  Input,
  ModalContainer,
  SecondInput,
  Text,
  TextSecondary,
} from './AddProductForm.styled';
import sprite from '../../sprite/sprite.svg';
import { toast } from 'react-toastify';
import diaryOperations from '../../redux/diary/diaryOperations';
import { useDispatch } from 'react-redux';
import {
  modalReducer,
  successModalReducer,
} from '../../redux/products/sliceProducts';
import { useState } from 'react';

const AddProductForm = ({ product, getCalories }) => {
  const dispatch = useDispatch();
  const [gram, setGram] = useState(100);

  const handleChangeWeight = (e) => {
    setGram(e.target.value);
  };

  const handleSubmit = async () => {
    if (!gram) {
      toast.error('Please add weight!');
      return;
    }

    const counter = Math.round((product.calories / 100) * Number(gram));
    const productData = {
      productId: product._id,
      calories: counter,
      amount: Number(gram),
    };

    try {
      await dispatch(diaryOperations.postDiaryProduct(productData));
    } catch (error) {
      toast.error(error.message);
    }
    getCalories(productData.calories);
    dispatch(successModalReducer.successOpenModal());
    dispatch(dispatch(modalReducer.closeModal()));
  };

  const closeModal = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    dispatch(modalReducer.closeModal());
  };

  return (
    <Backdrop onClick={closeModal}>
      <ModalContainer>
        <ButtonClose type="button" onClick={closeModal}>
          <IconClose>
            <use href={`${sprite}#icon-x`}></use>
          </IconClose>
        </ButtonClose>
        <Formik
          initialValues={{
            weight: '',
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <ContainerInput>
              <FirstInput htmlFor="title">
                <Field
                  as={Input}
                  type="text"
                  name="product"
                  placeholder={product.title}
                  readOnly={true}
                />
              </FirstInput>
              <SecondInput htmlFor="weight">
                <Field
                  as={Input}
                  type="number"
                  name="weight"
                  placeholder="Weight, grams"
                  onChange={handleChangeWeight}
                  value={gram}
                />
              </SecondInput>
            </ContainerInput>
            <TextSecondary>
              Calories:{' '}
              <Text> {Math.round((product.calories / 100) * gram)}</Text>
            </TextSecondary>
            <ButtonAddDiary type="submit">Add to diary</ButtonAddDiary>
            <ButtonCancel type="button" onClick={closeModal}>
              Cancel
            </ButtonCancel>
          </Form>
        </Formik>
      </ModalContainer>
    </Backdrop>
  );
};

export default AddProductForm;
