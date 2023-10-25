import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import PublicRoute from './components/Route/PublicRoute';
import PrivateRoute from './components/Route/PrivateRoute';
/* import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authSelectors from './redux/auth/auth-selectors';
import authOperations from './redux/auth/operations'; */

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
  /*   const dispatch = useDispatch();
  const fetchCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]); */
  const fetchCurrentUser = null;

  return (
    !fetchCurrentUser && (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <Welcome />
                </PublicRoute>
              }
            />
            <Route
              path="signup"
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />
            <Route
              path="signin"
              element={
                <PublicRoute>
                  <SignIn />
                </PublicRoute>
              }
            />
            <Route
              path="profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="diary"
              element={
                <PrivateRoute>
                  <Diary />
                </PrivateRoute>
              }
            />
            <Route
              path="products"
              element={
                <PrivateRoute>
                  <Products />
                </PrivateRoute>
              }
            />
            <Route
              path="exercises"
              element={
                <PrivateRoute>
                  <Exercises />
                </PrivateRoute>
              }
            >
              <Route
                path="bodyParts"
                element={
                  <PrivateRoute>
                    <BodyParts />
                  </PrivateRoute>
                }
              />
              <Route
                path="muscles"
                element={
                  <PrivateRoute>
                    <Muscles />
                  </PrivateRoute>
                }
              />
              <Route
                path="equipment"
                element={
                  <PrivateRoute>
                    <Equipment />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    )
  );
}
export default App;
