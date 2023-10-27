import React, { useEffect } from 'react';
import ExercisesList from '../ExercisesList/ExercisesList';
import { useDispatch, useSelector } from 'react-redux';
import exercisesOperations from '../../../redux/exercises/exercisesOperations';
import exercisesSelectors from '../../../redux/exercises/exercisesSelectors';

const Muscles = () => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(exercisesOperations.getExercisesByMuscles())
  },[dispatch])

const data = useSelector(exercisesSelectors.getExercisesData)
const loading = useSelector(exercisesSelectors.getIsLoading)
const error =  useSelector(exercisesSelectors.getIsError)
  
console.log('data', data)
console.log('loading', loading)
  return (
    <div>
      {data && <ExercisesList exercises={data}/>}
    </div>
)
};

export default Muscles;
