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

export const AddProductSuccess = ({ calories, onModal }) => {


  const onClose = (e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        onModal();

  }
  


  return (
      <ModalWindow onClick={onClose}>
        <Container>
          <IconClose onClick={onClose}>
            <use href={sprite + '#icon-close'}></use>
          </IconClose>
          <ContainerImg>
            <Image src={product} alt="product" />
            <Title>Well done</Title>
            <Text>
              Calories: <Span>{calories}</Span>
            </Text>
          </ContainerImg>
          <Button onClick={onClose}>Next product</Button>
          <Link to="/diary">
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