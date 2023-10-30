import { Suspense, useEffect, useState} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';
import {  BoxBackgroundPhoto, BoxTitlePage, ContainerExercisesPage,} from './Exercises.styled';
import BoxBtnBack from '../../components/BoxBtnBack/BoxBtnBack';
import TitlePageExercises from '../../components/ExercisesCategories/TitlePageExercises/TitlePageExercises';
import FullListExercises from '../../components/FullListExercises/FullListExercises';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import ExercisesModal from '../../components/ExercisesModal/ExercisesModal';
import exercisesSelectors from '../../redux/exercises/exercisesSelectors';
import { useSelector } from 'react-redux';







const Exercises = () => {
  const location = useLocation()
  const path = location.pathname
  const categoryExercises = localStorage.getItem("CategoryName")
  
const [modalOpen, setModalOpen] = useState(false)
const [nameCurrentTarget, setNameCurrentTarget] = useState('')


const data = useSelector(exercisesSelectors.getExercisesData)
const handleOpenWindow = (even)=> {
  const targetId = even.currentTarget.id
  const targetName =  data.filter((el)=>{
    return el._id === targetId
  })
  setNameCurrentTarget(targetName)
  setModalOpen(true)
}
const handleCloseWindow = ()=> {
  console.log("Клік відбувся!");
  setModalOpen(false)
}

useEffect(() => {
  function handleEscKey(event) {
    if (event.key === "Escape") {
      handleCloseWindow();
    }
  }

  if (modalOpen) {
    window.addEventListener("keydown", handleEscKey);
  }

  return () => {
    window.removeEventListener("keydown", handleEscKey);
  };
}, [modalOpen]);



const backgroundPhoto = (value)=>{
  if  (value === '/exercises'){
  
    return "backgroundPhoto";
}
return

}


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

// console.log('modalOpen', modalOpen)


  return (
 
    <BoxBackgroundPhoto className={backgroundPhoto(path)}>
      <ContainerExercisesPage >
        { path === '/exercises' && <BoxBtnBack/> }
        <BoxTitlePage>
        <TitlePageExercises text={handleTitle(path)} />
          <ExercisesCategories />
        </BoxTitlePage>
       {modalOpen && <ExercisesModal data={nameCurrentTarget[0]} onClose={handleCloseWindow}/>}
      {path === '/exercises' && <FullListExercises filter={categoryExercises}  openWindow={handleOpenWindow}/>}
        <Suspense>
          <Outlet  />
        </Suspense>      
    </ContainerExercisesPage>
    </BoxBackgroundPhoto>

  );
};

export default Exercises;
