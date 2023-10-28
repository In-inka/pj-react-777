import React  from 'react'
import { BoxContentExercises, CategoryExercises, ContainerExercises, Img, ItemExercises, LinkItem, TitleExercises } from './ExercisesList.style'
import { useLocation} from 'react-router-dom'




const ExercisesList = ({exercises}) => {

  const location = useLocation()
  
  const dataBase = exercises

  const handleTarget = async(el) =>{
    const idElement = el.currentTarget
    if (idElement) {
      const idExercises = idElement.id

    const element =  dataBase.filter((el)=>{ return el._id === idExercises}).map((el)=> { return el.name}).join()
      
      localStorage.setItem("CategoryName", element)
    }
  }


  return ( 

        <ContainerExercises>

          {dataBase && dataBase.map((item)=>
          <ItemExercises key={item._id}>
                  <LinkItem  to={'/exercises'}  state={{from: location}}  >
                      <ItemExercises  id={item._id}  onClick={handleTarget} >
                          <Img src={item.imgURL} alt={item.name} />
                          <BoxContentExercises>
                              <TitleExercises>{item.name}</TitleExercises>
                              <CategoryExercises>{item.filter}</CategoryExercises>
                          </BoxContentExercises>       
                      </ItemExercises>
                  </LinkItem>
          </ItemExercises>
          )}
        </ContainerExercises>
    
  
  )
}

export default ExercisesList