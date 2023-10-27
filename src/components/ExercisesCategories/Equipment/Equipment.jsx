import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import exercisesOperations from "../../../redux/exercises/exercisesOperations";
import exercisesSelectors from "../../../redux/exercises/exercisesSelectors";
import ExercisesList from "../ExercisesList/ExercisesList";

const Equipment = () => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(exercisesOperations.getExercisesByEquipment())
  },[dispatch])

const data = useSelector(exercisesSelectors.getExercisesData)
const loading = useSelector(exercisesSelectors.getIsLoading)
const error =  useSelector(exercisesSelectors.getIsError)
  
console.log('data', data)
  return (
    <div>
      <ExercisesList exercises={data}/>
    </div>
)
};

export default Equipment;
