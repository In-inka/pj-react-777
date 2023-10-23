import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Welcome } from './pages/Welcome/Welcome';
import { Diary } from './pages/SecondPage/Diary';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { Products } from './pages/Products/Products';
import { Exercises } from './pages/Exercises/Exercises';
import { SignUp } from './pages/SignUp/SignUp';
import { SignIn } from './pages/SignIn/SignIn';
import { Profile } from './pages/Profile/Profile';
import { BodyParts } from './components/ExercisesCategories/BodyParts/BodyParts';
import { Muscles } from './components/ExercisesCategories/Muscles/Muscles';
import { Equipment } from './components/ExercisesCategories/Equipment/Equipment';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="profile" element={<Profile />} />
          <Route path="diary" element={<Diary />} />
          <Route path="products" element={<Products />} />
          <Route path="exercises" element={<Exercises />}>
            <Route path="bodyParts" element={<BodyParts />} />
            <Route path="muscles" element={<Muscles />} />
            <Route path="equipment" element={<Equipment />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
