import { useDispatch, useSelector } from "react-redux";
import ExercisesList from "../../ExercisesList/ExercisesList";
import exercisesOperations from "../../../../redux/exercises/exercisesOperations";
import exercisesSelectors from "../../../../redux/exercises/exercisesSelectors";
import { useEffect } from "react";
import Loading from "../../../Loading/Loading";
import { BoxCategoryItem } from "../CtegoryItem.style";





const BodyParts = () => {
  const dispatch = useDispatch();
  
  useEffect( ()=>{
    dispatch(exercisesOperations.getExercisesByBodyParts())
  },[dispatch])

const loading = useSelector(exercisesSelectors.getIsLoading)
const data  = useSelector(exercisesSelectors.getFilterBody)
const error =  useSelector(exercisesSelectors.getIsError)

// console.log('data', data)


return (
    <BoxCategoryItem>
      {loading && <Loading />}

      { !loading && data && <ExercisesList exercises={data[0]}/>}
    </BoxCategoryItem>
)
};

export default BodyParts;
