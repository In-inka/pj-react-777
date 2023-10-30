import React, { useEffect } from 'react';
import ExercisesList from '../../ExercisesList/ExercisesList';
import { useDispatch, useSelector } from 'react-redux';
import exercisesOperations from '../../../../redux/exercises/exercisesOperations';
import exercisesSelectors from '../../../../redux/exercises/exercisesSelectors';
import { BoxCategoryItem } from '../CtegoryItem.style';
import Loading from '../../../Loading/Loading';

const Muscles = () => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(exercisesOperations.getExercisesByMuscles())
  },[dispatch])

const data = useSelector(exercisesSelectors.getFilterMuscles)
const loading = useSelector(exercisesSelectors.getIsLoading)
const error =  useSelector(exercisesSelectors.getIsError)
  
// console.log('data', data)

  return (
    <BoxCategoryItem>
      {loading && <Loading/>}
      { !loading && data && <ExercisesList exercises={data[0]}/>}
    </BoxCategoryItem>
)
};

export default Muscles;
