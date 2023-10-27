import { useDispatch, useSelector } from "react-redux";
import ExercisesList from "../ExercisesList/ExercisesList";
import exercisesOperations from "../../../redux/exercises/exercisesOperations";
import exercisesSelectors from "../../../redux/exercises/exercisesSelectors";
import { useEffect } from "react";





const BodyParts = () => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(exercisesOperations.getExercisesByBodyParts())
  },[])

const data = useSelector(exercisesSelectors.getExercisesData)
const loading = useSelector(exercisesSelectors.getIsLoading)
const error =  useSelector(exercisesSelectors.getIsError)
  
// console.log('data', data)

return (
    <div>
      <ExercisesList exercises={data}/>
    </div>
)
};

export default BodyParts;
