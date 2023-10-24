import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import PrivateRouter from './guards/PrivateRouter';
import PublicRouter from './guards/PublicRouter';

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
          <Route
            index
            element={
              <PublicRouter>
                <Welcome />
              </PublicRouter>
            }
          />
          <Route
            path="signup"
            element={
              <PublicRouter>
                <SignUp />
              </PublicRouter>
            }
          />
          <Route
            path="signin"
            element={
              <PublicRouter>
                <SignIn />
              </PublicRouter>
            }
          />
          <Route
            path="profile"
            element={
              <PrivateRouter>
                <Profile />
              </PrivateRouter>
            }
          />
          <Route
            path="diary"
            element={
              <PrivateRouter>
                <Diary />
              </PrivateRouter>
            }
          />
          <Route
            path="products"
            element={
              <PrivateRouter>
                <Products />
              </PrivateRouter>
            }
          />
          <Route
            path="exercises"
            element={
              <PrivateRouter>
                <Exercises />
              </PrivateRouter>
            }
          >
            <Route
              path="bodyParts"
              element={
                <PrivateRouter>
                  <BodyParts />
                </PrivateRouter>
              }
            />
            <Route
              path="muscles"
              element={
                <PrivateRouter>
                  <Muscles />
                </PrivateRouter>
              }
            />
            <Route
              path="equipment"
              element={
                <PrivateRouter>
                  <Equipment />
                </PrivateRouter>
              }
            />
            <Route path="equipment" element={<Equipment />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
