import React from 'react'
import { BoxContentExercises, CategoryExercises, Img, ItemExercises, ListExercises,  TitleExercises } from './ExercisesList.style'
import { Link, useLocation } from 'react-router-dom'

const ExercisesList = ({exercises}) => {

  
const dataBase = exercises

const location = useLocation()


const handleTarget = async(el) =>{
  const idElement = el.currentTarget.id
  const nameElement = dataBase.filter((el)=>{
    return  el._id === idElement
  })
  const name = nameElement.map((el)=>el.name).join()
  location.nameExercises = name
  return name
}


  return ( 
  
    <div className="swiper">
        <ListExercises >
            {dataBase.map((item)=>
              <Link key={item._id} to={'/exercises'}  state={{from: location}}  >
                  <ItemExercises  id={item._id} onClick={handleTarget} >
                      <Img src={item.imgURL} alt={item.name} />
                      <BoxContentExercises>
                          <TitleExercises>{item.name}</TitleExercises>
                          <CategoryExercises>{item.filter}</CategoryExercises>
                      </BoxContentExercises>       
                  </ItemExercises>
                </Link>
            )}
        </ListExercises>     
    </div>
  )
}

export default ExercisesList