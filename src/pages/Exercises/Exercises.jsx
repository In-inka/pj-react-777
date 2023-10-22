import { Suspense } from "react";
import {  Outlet, } from "react-router-dom";
import { ExercisesCategories } from "../../components/ExercisesCategories/ExercisesCategories";
import { TitlePage } from "../../components/TitlePage/TitlePage";
import { BoxTitlePage, ContainerExercisesPage } from "./Exercises-style";

const Exercises = () => {



  return (

    <ContainerExercisesPage>
      <BoxTitlePage>
        <TitlePage text={'Exercises'}/>
        <ExercisesCategories/>
      </BoxTitlePage>
        <Suspense>
          <Outlet />
        </Suspense>
    </ContainerExercisesPage>
  );
};

export { Exercises };
