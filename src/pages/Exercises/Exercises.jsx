import { Suspense, useState} from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';
import {
  BoxBackgroundPhoto,
  BoxTitlePage,
  ContainerExercisesPage,
} from './Exercises.styled';
import BoxBtnBack from '../../components/BoxBtnBack/BoxBtnBack';
import TitlePageExercises from '../../components/ExercisesCategories/TitlePageExercises/TitlePageExercises';

const Exercises = () => {
  const { category } = useParams();
  const location = useLocation();
  const path = category ? category : location.pathname;

  const handleTitle = (value) => {
    switch (value) {
      case '/exercises/bodyparts':
        return 'Body Parts';
      case '/exercises/muscles':
        return 'Muscles';
      case '/exercises/equipment':
        return 'Equipment';
      default:
        return value;
    }
  };
  return (
    <BoxBackgroundPhoto className={category !== undefined && 'backgroundPhoto'}>
      <ContainerExercisesPage>
        {path === '/exercises' && <BoxBtnBack />}
        <BoxTitlePage>
          <TitlePageExercises text={handleTitle(path)} />
          <ExercisesCategories />
        </BoxTitlePage>
        <Suspense>
          <Outlet />
        </Suspense>
      </ContainerExercisesPage>
    </BoxBackgroundPhoto>
  );
};

export default Exercises;
