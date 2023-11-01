import { Link } from 'react-router-dom';
import welldone from '../../img/welldoneicon/thumb_up-2x.png';
import sprite from '../../sprite/sprite.svg';
// import { Container, ContainerImg, IconClose, Image, ModalWindow, Span, Text, Title } from './AddExercisesSuccess.styled';
import {
  ModalWindow,
  Container,
  ContainerImg,
  Image,
  Title,
  Text,
  Span,
  Button,
  ArrowIcon,
} from './AddExercisesSuccess.styled';
import { ButtonClose, IconClose } from '../ExercisesModal/ExercisesModal.styled';

const AddExercisesSuccess = ({ data, onClose}) => {
  
  const exercisesData = data
  
  return (
    <ModalWindow>
      <Container>
        <ButtonClose type="button" onClick={onClose}>
          <IconClose>
            <use href={`${sprite}#icon-x`}></use>
          </IconClose>
        </ButtonClose>
        <ContainerImg>
          <Image src={welldone} alt="exercise" />
          <Title>Well done</Title>
          <Text>
            Your time: <Span>{exercisesData.time}</Span>
          </Text>
          <Text>
            Burned calories: <Span>{exercisesData.burnedCalories}</Span>
          </Text>
        </ContainerImg>
        <Link to="/exercises" >
          <Button>Next exercis</Button>
        </Link>
        <Link to="/diary" >
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

export default AddExercisesSuccess