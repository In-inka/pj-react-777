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

const AddProductForm = ({ product, closeModal }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    const counter = Math.round(
      (product.calories / 100) * Number(values.weight),
    );
    const productData = {
      productId: product._id,
      calories: counter,
      amount: Number(values.weight),
    };

    try {
      await dispatch(diaryOperations.postDiaryProduct(productData));
      toast.success('Success!');
    } catch (error) {
      toast.error(error.message);
    }
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
                />
              </SecondInput>
            </ContainerInput>
            <TextSecondary>
              Calories: <Text>{product.calories}</Text>
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
