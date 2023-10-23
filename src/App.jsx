import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('./components/Layout/Layout'));
const Welcome = lazy(() => import('./pages/Welcome/Welcome'));
const Diary = lazy(() => import('./pages/SecondPage/Diary'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const Products = lazy(() => import('./pages/Products/Products'));
const Exercises = lazy(() => import('./pages/Exercises/Exercises.jsx'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const BodyParts = lazy(() =>
  import('./components/ExercisesCategories/BodyParts/BodyParts.jsx'),
);
const Muscles = lazy(() =>
  import('./components/ExercisesCategories/Muscles/Muscles.jsx'),
);
const Equipment = lazy(() =>
  import('./components/ExercisesCategories/Equipment/Equipment.jsx'),
);

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
