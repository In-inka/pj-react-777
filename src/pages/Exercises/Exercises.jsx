import { Suspense} from 'react';
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

  const handleTitle = () => {
    switch (path) {
      case ('/exercises/bodyparts'):
        return 'body parts';
      case '/exercises/muscles':
        return 'Muscles';
      case '/exercises/equipment':
        return 'Equipment';
      default:
        return path;
    }
  };

  const titleText = handleTitle();

  return (
    <BoxBackgroundPhoto className={category !== undefined && 'backgroundPhoto'}>
      <ContainerExercisesPage>
        {category !== undefined && <BoxBtnBack />}
        <BoxTitlePage>
          <TitlePageExercises text={titleText} />
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
