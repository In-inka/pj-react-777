import React  from 'react'
import { BoxContentExercises, CategoryExercises, ContainerExercises, Img, ItemExercises, LinkItem, StyleSwiper, StyledList, StyledListItem, StyledPagination, TitleExercises } from './ExercisesList.style'
import { useLocation} from 'react-router-dom'


import { Grid, Pagination, } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


const ExercisesList = ({exercises}) => {

  const location = useLocation()
  
  const dataBase = exercises

  const handleTarget = async(el) =>{
    const idElement = el.currentTarget
    if (idElement) {
      const idExercises = idElement.id

    const element =  dataBase.filter((el)=>{ return el._id === idExercises}).map((el)=> { return el.name}).join()
      console.log('element', element)
      localStorage.setItem("CategoryName", element)
    }
  }


  return ( 

        <ContainerExercises className='ContainerExercises'>
                
          {dataBase && <StyleSwiper
              slidesPerView={5}
              slideToClickedSlide={false}
              // slidespercolumn={10}
              // slidespergroup={10}
              grid={{
                rows: 2
              }}
              virtual={false}
              // spaceBetween={1}
              pagination={{
                el: '.swiper-pagination',
                clickable: true,
                type:'bullets'
              }}
              
              modules={[Grid, Pagination,]}
              className="mySwiper"
            >
             
   

              <StyledList className="swiper-wrapper swiper-container">
              {dataBase.map((item)=>
              <StyledListItem className="swiper-slide"  key={item._id}>
                <ItemExercises id={item._id}>
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
              </StyledListItem>
              )}
                
              </StyledList>
              <StyledPagination className="swiper-pagination"></StyledPagination>

          </StyleSwiper>}
                   
        </ContainerExercises>
    
  
  )
}

export default ExercisesList