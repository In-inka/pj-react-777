import { Link } from 'react-router-dom';
import product from '../../img/foodicon/food-2x.png';
import sprite from '../../sprite/sprite.svg';
import {
  ModalWindow,
  Container,
  IconClose,
  ContainerImg,
  Image,
  Title,
  Text,
  Span,
  Button,
  ArrowIcon,
} from './AddProductSuccess.styles';

export const AddProductSuccess = ({ calories, closeModal }) => {
  return (
    <ModalWindow>
      <Container>
      <IconClose>
    <use href={sprite + '#icon-close'}></use>
    </IconClose>
        <ContainerImg>
          <Image src={product} alt="product" />
          <Title>Well done</Title>
          <Text>
            Calories:{' '}
            <Span>{calories}</Span>
          </Text>
        </ContainerImg>
        <Link to="/products" onClick={closeModal}>
          <Button>Next product</Button>
        </Link>
        <Link to="/diary" onClick={closeModal}>
          <Text>
            To the diary
            <ArrowIcon>
              <use href={sprite + '#icon-start'}></use>
            </ArrowIcon>
          </Text>
        </Link>
      </Container>
    </ModalWindow>
  );
};