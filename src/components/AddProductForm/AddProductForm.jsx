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
import { useState } from 'react';

const AddProductForm = ({ product, onClose }) => {
  const [productTitle, setProductTitile] = useState('');
  const [weight, setWeight] = useState();
  //   const [amount, setAmount] = useState();

  const addProductTitle = (e) => {
    setProductTitile(e.target.value);
    console.log(productTitle);
  };

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <Backdrop onClick={onClose}>
      <ModalContainer>
        <ButtonClose type="button" onClick={onClose}>
          <IconClose>
            <use href={`${sprite}#icon-x`}></use>
          </IconClose>
        </ButtonClose>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="product">
            <Input
              type="text"
              name="product"
              value={product.title}
              placeholder="Product name"
              onChange={addProductTitle}
              readOnly={true}
            />
          </label>
          <label htmlFor="weight">
            <Input
              type="number"
              name="weight"
              value={weight}
              placeholder="Weight, grams"
              onChange={handleWeight}
            />
          </label>
          <p>Calories: {product.calories}</p>
          <ButtonAddDiary type="submit">Add to diary</ButtonAddDiary>
          <ButtonCancel>Cancel</ButtonCancel>
        </form>
      </ModalContainer>
    </Backdrop>
  );
};

export default AddProductForm;
