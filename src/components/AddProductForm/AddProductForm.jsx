import { Field, Form, Formik } from 'formik';
import {
  Backdrop,
  ButtonClose,
  ButtonContainer,
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
import { useState } from 'react';
import { Button } from '../Buttons/Button';

const AddProductForm = ({ product, getCalories, onModal, onSecondModal }) => {
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

    dispatch(diaryOperations.postDiaryProduct(productData));
    getCalories(productData.calories);
    onSecondModal();
    onModal();
  };

  const closeModal = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onModal();
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
            <ButtonContainer>
                <Button cls={'addDiary'} text={'Add to diary'} tp={'submit'} />
            </ButtonContainer>
            <Button
              tp={'button'}
              cls={'buttonCancel'}
              text={'Cancel'}
              onClick={closeModal}
              
            />
          </Form>
        </Formik>
      </ModalContainer>
    </Backdrop>
  );
};

export default AddProductForm;
