import {
  BoxContentExercises,
  CategoryExercises,
  ContainerExercises,
  Img,
  ItemExercises,
  LinkItem,
  StyleSwiper,
  StyledList,
  StyledListItem,
  StyledPagination,
  TitleExercises,
} from './ExercisesList.style';
import { useLocation } from 'react-router-dom';


import { Pagination, Grid } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

const ExercisesList = ({ exercises }) => {
  const location = useLocation();

  const dataBase = exercises;


  const handleTarget = async(el) =>{
    const idElement = el.currentTarget
    if (idElement) {
      const idExercises = idElement.id;

    const element =  dataBase.filter((el)=>{ return el._id === idExercises}).map((el)=> { return el.name}).join()
      localStorage.setItem("CategoryName", element)
    }
  };



  return ( 

        <ContainerExercises className='ContainerExercises'>
                
          {dataBase && <StyleSwiper
             slidesPerView={1}
             slidesPerGroup={1}
             pagination={{
               el: ".swiper-pagination",
               clickable: true,
              }}
              grid={{
                fill: 'row',
                rows: 10,
              }}
              
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  slidesPerColumn: 3,
                  grid:{
                    fill: 'column',
                    rows: 3,
                  }
                },
                1440: {
                  slidesPerView: 5,
                  slidesPerGroup: 5,
                  grid:{
                   fill: 'row',
                  rows: 2,
                 }
               },
             }}
             modules={[ Grid, Pagination,]}
             className="mySwiper"
            >             
              <StyledList className="swiper-wrapper swiper-container">
              {dataBase.map((item)=>
              <StyledListItem className="swiper-slide"  key={item._id}>
                <ItemExercises id={item._id}>
                  <LinkItem to={'/exercises'} state={{ from: location }}>
                    <ItemExercises id={item._id} onClick={handleTarget}>
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



// import {
//   BoxContentExercises,
//   CategoryExercises,
//   ContainerExercises,
//   Img,
//   ItemExercises,
//   LinkItem,
//   StyleSwiper,
//   StyledList,
//   StyledListItem,
//   StyledPagination,
//   TitleExercises,
// } from './ExercisesList.style';
// import { useLocation } from 'react-router-dom';


// import { Pagination, Grid } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/grid';

// const ExercisesList = ({ exercises }) => {
//   const location = useLocation();

//   const dataBase = exercises;


//   const handleTarget = async(el) =>{
//     const idElement = el.currentTarget
//     if (idElement) {
//       const idExercises = idElement.id;

//     const element =  dataBase.filter((el)=>{ return el._id === idExercises}).map((el)=> { return el.name}).join()
//       localStorage.setItem("CategoryName", element)
//     }
//   };



//   return ( 

//         <ContainerExercises className='ContainerExercises'>
                
//           {dataBase && <StyleSwiper
//              slidesPerView={1}
//              slidesPerGroup={1}
//              pagination={{
//                el: ".swiper-pagination",
//                clickable: true,
//               }}
//               grid={{
//                 fill: 'row',
//                 rows: 10,
//               }}
              
//               breakpoints={{
//                 768: {
//                   slidesPerView: 3,
//                   slidesPerGroup: 3,
//                   slidesPerColumn: 3,
//                   grid:{
//                     fill: 'column',
//                     rows: 3,
//                   }
//                 },
//                 1440: {
//                   slidesPerView: 5,
//                   slidesPerGroup: 5,
//                   grid:{
//                    fill: 'row',
//                   rows: 2,
//                  }
//                },
//              }}
//              modules={[ Grid, Pagination,]}
//              className="mySwiper"
//             >             
//               <StyledList className="swiper-wrapper swiper-container">
//               {dataBase.map((item)=>
//               <StyledListItem className="swiper-slide"  key={item._id}>
//                 <ItemExercises id={item._id}>
//                   <LinkItem to={'/exercises'} state={{ from: location }}>
//                     <ItemExercises id={item._id} onClick={handleTarget}>
//                       <Img src={item.imgURL} alt={item.name} />
//                       <BoxContentExercises>
//                         <TitleExercises>{item.name}</TitleExercises>
//                         <CategoryExercises>{item.filter}</CategoryExercises>
//                       </BoxContentExercises>
//                     </ItemExercises>
//                   </LinkItem>
//                 </ItemExercises>
//               </StyledListItem>
//               )}
                
//               </StyledList>

//           </StyleSwiper>}
//               <StyledPagination className="swiper-pagination"></StyledPagination>
                   
//         </ContainerExercises>
    
  
//   )
// }

// export default ExercisesList