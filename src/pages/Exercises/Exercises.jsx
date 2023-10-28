import { Suspense,  } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';
import { BoxTitlePage, ContainerExercisesPage } from './Exercises-style';
import BoxBtnBack from '../../components/BoxBtnBack/BoxBtnBack';
import TitlePageExercises from '../../components/ExercisesCategories/TitlePageExercises/TitlePageExercises';
import FullListExercises from '../../components/FullListExercises/FullListExercises';




const Exercises = () => {
  const location = useLocation()

  const path = location.pathname

  
  const categoryExercises = localStorage.getItem("CategoryName")
  
  console.log('categoryExercises', categoryExercises)

  const handleTitle = (value)=> {
  
   if  (value === '/exercises'){
  
      return `${categoryExercises}`
  }
   if  (value === '/exercises/bodyParts'){
      return "Body Parts"
  }
  else if (value === '/exercises/muscles'){
      return 'Muscles'
  }
  else if (value === '/exercises/equipment'){
      return 'Equipment'
  }
  else{
    return ''
  }
}


// console.log('nameExercises', nameExercises)

  return (
    // <CategoryExercisesContext.Provider value={{ func:(value)=> }}>
      <ContainerExercisesPage>
        { path === '/exercises' && <BoxBtnBack/> }
        <BoxTitlePage>
        <TitlePageExercises text={handleTitle(path)} />
          <ExercisesCategories />
        </BoxTitlePage>
      
      {path === '/exercises' && <FullListExercises filter={categoryExercises}/>}
        <Suspense>
          <Outlet  />
        </Suspense>
      </ContainerExercisesPage>
    // </CategoryExercisesContext.Provider>
  );
};

export default Exercises;
