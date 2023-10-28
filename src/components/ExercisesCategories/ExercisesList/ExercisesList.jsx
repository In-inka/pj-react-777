import React  from 'react'
import { BoxContentExercises, CategoryExercises, Img, ItemExercises, ListExercises,  TitleExercises } from './ExercisesList.style'
import { Link, useLocation} from 'react-router-dom'
// import { CategoryExercisesContext } from '../../../pages/Exercises/Exercises'



const ExercisesList = ({exercises}) => {

  const location = useLocation()
  
  const dataBase = exercises
  
  // const {func} = useContext(CategoryExercisesContext)

console.log('first')

  const handleTarget = async(el) =>{
    const idElement = el.currentTarget
    if (idElement) {
      const idExercises = idElement.id

    const element =  dataBase.filter((el)=>{ return el._id === idExercises}).map((el)=> { return el.name}).join()
    
    // func(element)
 
    // console.log('element', element) 
  
      localStorage.setItem("CategoryName", element)
      

    }

  }


  return ( 
  
        <ListExercises  >
            {dataBase && dataBase.map((item)=>
                    <Link key={item._id} to={'/exercises'}  state={{from: location}}  >
                        <ItemExercises  id={item._id}  onClick={handleTarget} >
                            <Img src={item.imgURL} alt={item.name} />
                            <BoxContentExercises>
                                <TitleExercises>{item.name}</TitleExercises>
                                <CategoryExercises>{item.filter}</CategoryExercises>
                            </BoxContentExercises>       
                        </ItemExercises>
                    </Link>
            )}
        </ListExercises>     

  )
}

export default ExercisesList