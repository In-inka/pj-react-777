import { useEffect, useState } from 'react';
import {
  BoxIconStart,
  BoxIconTitle,
  BoxInfoExercises,
  BoxWorkout,
  BtnStart,
  ContainerFullExercises,
  ContainerInfoExercises,
  DynamicContentInfoExercises,
  IconRunning,
  IconStart,
  ListFullExercises,
  StaticContentInfoExercises,
  TextStart,
  Title,
} from './FullListExercises.style';
import sprite from '../../sprite/sprite.svg';
import exercisesOperations from '../../redux/exercises/exercisesOperations';
import { useDispatch, useSelector } from 'react-redux';
import exercisesSelectors from '../../redux/exercises/exercisesSelectors';
import ExercisesModal from '../../components/ExercisesModal/ExercisesModal';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';

const FullListExercises = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(exercisesSelectors.getExercisesData);
  const loading = useSelector(exercisesSelectors.getIsLoading);
    const [nameCurrentTarget, setNameCurrentTarget] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(exercisesOperations.getExercises());
  }, [dispatch]);


  const filterArry = data.filter((el) => {
    return (
      el.bodyPart === category ||
      el.target === category ||
      el.equipment === category
    );
  });

    const handleOpenWindow = (even) => {
      const targetId = even.currentTarget.id;

      const targetName = data.filter((el) => {
        return el._id === targetId;
      });
      setNameCurrentTarget(targetName);
      setModalOpen(true);
    };
    const handleCloseWindow = () => {
      setModalOpen(false);
    };

    useEffect(() => {
      function handleEscKey(event) {
        if (event.key === 'Escape') {
          handleCloseWindow();
        }
      }

      if (modalOpen) {
        window.addEventListener('keydown', handleEscKey);
      }

      return () => {
        window.removeEventListener('keydown', handleEscKey);
      };
    }, [modalOpen]);


  return (
    <ContainerFullExercises>
      {loading && <Loading />}
      {!loading &&
        filterArry &&
        filterArry.map((item) => {
          return (
            <ListFullExercises key={item._id}>
              <BoxWorkout>WORKOUT</BoxWorkout>
              <BtnStart id={item._id} type="button" onClick={handleOpenWindow}>
                <BoxIconStart>
                  <TextStart>Start</TextStart>
                  <IconStart>
                    <use href={`${sprite}#icon-start`}></use>
                  </IconStart>
                </BoxIconStart>
              </BtnStart>
              <BoxIconTitle>
                <IconRunning>
                  <use href={`${sprite}#icon-running-exercises-page`}></use>
                </IconRunning>
                <Title>{item.name}</Title>
              </BoxIconTitle>
              <ContainerInfoExercises>
                <BoxInfoExercises>
                  <StaticContentInfoExercises>
                    Burned calories:
                  </StaticContentInfoExercises>
                  <DynamicContentInfoExercises>
                    {item.burnedCalories}
                  </DynamicContentInfoExercises>
                </BoxInfoExercises>
                <BoxInfoExercises>
                  <StaticContentInfoExercises>
                    Body part:
                  </StaticContentInfoExercises>
                  <DynamicContentInfoExercises>
                    {item.bodyPart}
                  </DynamicContentInfoExercises>
                </BoxInfoExercises>
                <BoxInfoExercises>
                  <StaticContentInfoExercises>
                    Target:
                  </StaticContentInfoExercises>
                  <DynamicContentInfoExercises>
                    {item.target}
                  </DynamicContentInfoExercises>
                </BoxInfoExercises>
              </ContainerInfoExercises>
            </ListFullExercises>
          );
        })}
      {modalOpen && (
        <ExercisesModal
          data={nameCurrentTarget[0]}
          onClose={handleCloseWindow}
        />
      )}
    </ContainerFullExercises>
  );
};

export default FullListExercises;
