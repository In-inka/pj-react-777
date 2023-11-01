import { useEffect } from 'react';
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

import Loading from '../Loading/Loading';

const FullListExercises = ({ filter, openWindow }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exercisesOperations.getExercises());
  }, [dispatch]);

  const data = useSelector(exercisesSelectors.getExercisesData);
  const loading = useSelector(exercisesSelectors.getIsLoading);

  const filterArry = data.filter((el) => {
    return (
      el.bodyPart === filter || el.target === filter || el.equipment === filter
    );
  });

  return (
    <ContainerFullExercises>
      {loading && <Loading />}
      {!loading &&
        filterArry &&
        filterArry.map((item) => {
          return (
            <ListFullExercises key={item._id}>
              <BoxWorkout>WORKOUT</BoxWorkout>
              <BtnStart id={item._id} type="button" onClick={openWindow}>
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
    </ContainerFullExercises>
  );
};

export default FullListExercises;
