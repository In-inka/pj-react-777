import { useDispatch, useSelector } from "react-redux";
import ExercisesList from "../ExercisesList/ExercisesList";
import exercisesOperations from "../../../redux/exercises/exercisesOperations";
import exercisesSelectors from "../../../redux/exercises/exercisesSelectors";
import { useEffect } from "react";





const BodyParts = ({categoryName}) => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(exercisesOperations.getExercisesByBodyParts())
  },[dispatch])

const data = useSelector(exercisesSelectors.getExercisesData)
const loading = useSelector(exercisesSelectors.getIsLoading)
const error =  useSelector(exercisesSelectors.getIsError)
// console.log('categoryName', categoryName)  

// console.log('data', data)

// console.log('error', error)

return (
    <div>
      { data && <ExercisesList exercises={data}/>}
    </div>
)
};

export default BodyParts;
