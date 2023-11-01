import { useDispatch, useSelector } from 'react-redux';
import ExercisesList from '../../ExercisesList/ExercisesList';
import exercisesOperations from '../../../../redux/exercises/exercisesOperations';
import exercisesSelectors from '../../../../redux/exercises/exercisesSelectors';
import { useEffect } from 'react';
import Loading from '../../../Loading/Loading';
import { BoxCategoryItem } from '../CtegoryItem.style';

const BodyParts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exercisesOperations.getExercisesByBodyParts());
  }, [dispatch]);

  const loading = useSelector(exercisesSelectors.getIsLoading);
  const data = useSelector(exercisesSelectors.getFilterBody);

  return (
    <BoxCategoryItem>
      {loading && <Loading />}

      {!loading && data && <ExercisesList exercises={data} />}
    </BoxCategoryItem>
  );
};

export default BodyParts;
