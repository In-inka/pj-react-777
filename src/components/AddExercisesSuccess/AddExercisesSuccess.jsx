export default AddExercisesSuccess;

import { Link } from 'react-router-dom';
import welldone from '../../img/welldoneicon/thumb_up-2x.png';
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

export const AddExercisesSuccess = ({ burnedCalories, time, closeModal }) => {
  return (
    <ModalWindow>
      <Container>
        <IconClose>
          <use href={sprite + '#icon-close'}></use>
        </IconClose>
        <ContainerImg>
          <Image src={welldone} alt="exercise" />
          <Title>Well done</Title>
          <Text>
            Your time: <Span>{time}</Span>
          </Text>
          <Text>
            Burned calories: <Span>{burnedCalories}</Span>
          </Text>
        </ContainerImg>
        <Link to="/exercises" onClick={closeModal}>
          <Button>Next exercis</Button>
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
