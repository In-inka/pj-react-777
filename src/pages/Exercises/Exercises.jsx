import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';
import { TitlePage } from '../../components/TitlePage/TitlePage';
import { BoxTitlePage, ContainerExercisesPage } from './Exercises-style';
import BoxBtnBack from '../../components/BoxBtnBack/BoxBtnBack';
import TitlePageExercises from '../../components/ExercisesCategories/TitlePageExercises/TitlePageExercises';
import FullListExercises from '../../components/FullListExercises/FullListExercises';

const Exercises = () => {
  const [nameExercises, setNameExercises ] = useState('')
  const location = useLocation()

  const filterNameExercises = location.state

  const path = location.pathname


  const handleTitle = (value)=> {
    if (value === '/exercises'){
      if (location.state.from) {

        const name = filterNameExercises.from.nameExercises
        useEffect(()=>{
          setNameExercises(name)

        },[])
        return (`${name}`)
        
      }
      return
  }
  else if  (value === '/exercises/bodyParts'){
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


  console.log('path', location.pathname )
  // console.log('name', nameExercises )

  return (
    <ContainerExercisesPage>
      { path === '/exercises' && <BoxBtnBack/> }
      <BoxTitlePage>
      <TitlePageExercises text={handleTitle(path)} />
        <ExercisesCategories />
      </BoxTitlePage>
      {path === '/exercises' && <FullListExercises filter={nameExercises}/>}
      <Suspense>
        <Outlet />
      </Suspense>
    </ContainerExercisesPage>
  );
};

export default Exercises;
