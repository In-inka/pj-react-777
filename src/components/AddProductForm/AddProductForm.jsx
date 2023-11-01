import { Formik, Form, Field } from 'formik';
import {
  Backdrop,
  ButtonAddDiary,
  ButtonCancel,
  ButtonClose,
  IconClose,
  Input,
  ModalContainer,
} from './AddProductForm.styled';
import sprite from '../../sprite/sprite.svg';
import { toast } from 'react-toastify';
import diaryOperations from '../../redux/diary/diaryOperations';
import { useDispatch } from 'react-redux';

const AddProductForm = ({ product, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    console.log(product);

    const counter = Math.round(
      (product.calories / 100) * Number(values.weight),
    );
    console.log(counter);
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
    <Backdrop onClick={onClose}>
      <ModalContainer>
        <ButtonClose type="button" onClick={onClose}>
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
            <label htmlFor="title">
              <Field
                as={Input}
                type="text"
                name="product"
                placeholder={product.title}
                readOnly={true}
              />
            </label>
            <label htmlFor="weight">
              <Field
                as={Input}
                type="number"
                name="weight"
                placeholder="Weight, grams"
              />
            </label>
            <p>Calories: {product.calories}</p>
            <ButtonAddDiary type="submit">Add to diary</ButtonAddDiary>
            <ButtonCancel type="button" onClick={onClose}>
              Cancel
            </ButtonCancel>
          </Form>
        </Formik>
      </ModalContainer>
    </Backdrop>
  );
};

export default AddProductForm;
