import { Suspense} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';
import {
  BoxBackgroundPhoto,
  BoxTitlePage,
  ContainerExercisesPage,
} from './Exercises.styled';
import BoxBtnBack from '../../components/BoxBtnBack/BoxBtnBack';
import TitlePageExercises from '../../components/ExercisesCategories/TitlePageExercises/TitlePageExercises';

const Exercises = () => {
  const location = useLocation();
  const path = location.pathname;

  const backgroundPhoto = (value) => {
    if (value === '/exercises') {
      return 'backgroundPhoto';
    }
    return;
  };

  const handleTitle = (value) => {
    if (value === '/exercises/bodyparts') {
      return 'Body Parts';
    } else if (value === '/exercises/muscles') {
      return 'Muscles';
    } else if (value === '/exercises/equipment') {
      return 'Equipment';
    } else {
      return '';
    }
  };

  return (
    <BoxBackgroundPhoto className={backgroundPhoto(path)}>
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
