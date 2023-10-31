import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import exercisesOperations from '../../../../redux/exercises/exercisesOperations';
import exercisesSelectors from '../../../../redux/exercises/exercisesSelectors';
import ExercisesList from '../../ExercisesList/ExercisesList';
import Loading from '../../../Loading/Loading';
import { BoxCategoryItem } from '../CtegoryItem.style';

const Equipment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exercisesOperations.getExercisesByEquipment());
  }, [dispatch]);

  const data = useSelector(exercisesSelectors.getFilterEquioment);
  const loading = useSelector(exercisesSelectors.getIsLoading);

  return (
    <BoxCategoryItem>
      {loading && <Loading />}
      {!loading && data && <ExercisesList exercises={data} />}
    </BoxCategoryItem>
  );
};

export default Equipment;
